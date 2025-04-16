(function($) {

    var initialized = false;

    var element = document.createElement( 'div' );
    var vendors = 'moz ms o webkit'.split( ' ' );
    var toupper = function( str ) { return str.toUpperCase(); };

    var vendor;

    for ( var prop, i = 0; i < vendors.length; i++ ) {

        prop = ( vendor = vendors[i] ) + 'Perspective';
        if ( prop in element.style || prop.replace( /^(\w)/, toupper ) in element.style ) break;
    }

    var canRun = !!vendor;
    var prefix = '-' + vendor + '-';

    var $this, $root, $base, $kids, $node, $item, $over, $back;
    var wait, anim, last;

    var api = {

        toggle: function() {

            $this = $( this );
            $this.makisu( $this.hasClass( 'open' ) ? 'close' : 'open' );
        },

        open: function( speed, overlap, easing ) {

            $this = $(this);
            $root = $this.find( '.root' );
            $kids = $this.find( '.node' ).not( $root );

            speed = utils.resolve( $this, 'speed', speed );
            easing = utils.resolve( $this, 'easing', easing );
            overlap = utils.resolve( $this, 'overlap', overlap );

            $kids.each( function( index, el ) {

                anim = 'unfold' + ( !index ? '-first' : '' );
                last = index === $kids.length - 1;
                time = speed * ( 1 - overlap );
                wait = index * time;

                $item = $( el );
                $over = $item.find( '.over' );

                $item.css(utils.prefix({
                    'transform': 'rotateX(180deg)',
                    'animation': anim + ' ' + speed + 's ' + easing + ' ' + wait + 's 1 normal forwards'
                }));

                if ( !last ) wait = ( index + 1 ) * time;

                $over.css(utils.prefix({
                    'animation': 'unfold-over ' + (speed * 0.45) + 's ' + easing + ' ' + wait + 's 1 normal forwards'
                }));
            });

            $root.css(utils.prefix({
                'animation': 'swing-out ' + ( $kids.length * time * 1.4 ) + 's ease-in-out 0s 1 normal forwards'
            }));

            $this.addClass( 'open' );
        },

        close: function( speed, overlap, easing ) {

            $this = $(this);
            $root = $this.find( '.root' );
            $kids = $this.find( '.node' ).not( $root );

            speed = utils.resolve( $this, 'speed', speed ) * 0.66;
            easing = utils.resolve( $this, 'easing', easing );
            overlap = utils.resolve( $this, 'overlap', overlap );

            $kids.each( function( index, el ) {

                anim = 'fold' + ( !index ? '-first' : '' );
                last = index === 0;
                time = speed * ( 1 - overlap );
                wait = ( $kids.length - index - 1 ) * time;

                $item = $( el );
                $over = $item.find( '.over' );

                $item.css(utils.prefix({
                    'transform': 'rotateX(0deg)',
                    'animation': anim + ' ' + speed + 's ' + easing + ' ' + wait + 's 1 normal forwards'
                }));

                if ( !last ) wait = ( ( $kids.length - index - 2 ) * time ) + ( speed * 0.35 );

                $over.css(utils.prefix({
                    'animation': 'fold-over ' + (speed * 0.45) + 's ' + easing + ' ' + wait + 's 1 normal forwards'
                }));
            });

            $root.css(utils.prefix({
                'animation': 'swing-in ' + ( $kids.length * time * 1.0 ) + 's ease-in-out 0s 1 normal forwards'
            }));

            $this.removeClass( 'open' );
        }
    };

    var utils = {

        resolve: function( $el, key, val ) {
            return typeof val === 'undefined' ? $el.data( key ) : val;
        },

        prefix: function( style ) {

            for ( var key in style ) {
                style[ prefix + key ] = style[ key ];
            }

            return style;
        },

        inject: function( rule ) {

            try {

                var style = document.createElement( 'style' );
                style.innerHTML = rule;
                document.getElementsByTagName( 'head' )[0].appendChild( style );

            } catch ( error ) {}
        },

        keyframes: function( name, frames ) {

            var anim = '@' + prefix + 'keyframes ' + name + '{';

            for ( var frame in frames )

                anim += frame + '%' + '{' + prefix + frames[ frame ] + ';}';

            utils.inject( anim + '}' );
        }
    };

    var markup = {
        node: '<span class="node"/>',
        back: '<span class="face back"/>',
        over: '<span class="face over"/>'
    };

    $.fn.makisu = function( options ) {

        if ( !canRun ) {

            var message = 'Failed to detect CSS 3D support';

            if( console && console.warn ) {

                console.warn( message );

                this.each( function() {
                    $( this ).trigger( 'error', message );
                });
            }

            return;
        }

        if ( !initialized ) {

            initialized = true;

            utils.keyframes( 'unfold', {
                  0: 'transform: rotateX(180deg)',
                 50: 'transform: rotateX(-30deg)',
                100: 'transform: rotateX(0deg)'
            });

            utils.keyframes( 'unfold-first', {
                  0: 'transform: rotateX(-90deg)',
                 50: 'transform: rotateX(60deg)',
                100: 'transform: rotateX(0deg)'
            });

            utils.keyframes( 'fold', {
                  0: 'transform: rotateX(0deg)',
                100: 'transform: rotateX(180deg)'
            });

            utils.keyframes( 'fold-first', {
                  0: 'transform: rotateX(0deg)',
                100: 'transform: rotateX(-180deg)'
            });

            utils.keyframes( 'swing-out', {
                  0: 'transform: rotateX(0deg)',
                 30: 'transform: rotateX(-30deg)',
                 60: 'transform: rotateX(15deg)',
                100: 'transform: rotateX(0deg)'
            });

            utils.keyframes( 'swing-in', {
                  0: 'transform: rotateX(0deg)',
                 50: 'transform: rotateX(-10deg)',
                 90: 'transform: rotateX(15deg)',
                100: 'transform: rotateX(0deg)'
            });

            utils.keyframes( 'unfold-over', {
                  0: 'opacity: 1.0',
                100: 'opacity: 0.0'
            });

            utils.keyframes( 'fold-over', {
                  0: 'opacity: 0.0',
                100: 'opacity: 1.0'
            });

            utils.inject( '.node {' +
                'position: relative;' +
                'display: block;' +
                '}');

            utils.inject( '.face {' +
                'pointer-events: none;' +
                'position: absolute;' +
                'display: block;' +
                'height: 100%;' +
                'width: 100%;' +
                'left: 0;' +
                'top: 0;' +
                '}');
        }

        var opts = $.extend( {}, $.fn.makisu.defaults, options );

        var args = Array.prototype.slice.call( arguments, 1 );

        return this.each( function () {

            if ( api[ options ] ) {
                return api[ options ].apply( this, args );
            }

            $this = $( this ).data( opts );

            if ( !$this.data( 'initialized' ) ) {

                $this.data( 'initialized', true );

                $kids = $this.children( opts.selector );

                $root = $( markup.node ).addClass( 'root' );
                $base = $root;

                $kids.each( function( index, el ) {

                    $item = $( el );

                    anim = 'fold' + ( !index ? '-first' : '' );

                    $item.css( 'position', 'relative' );

                    $item.css(utils.prefix({
                        'transform-style': 'preserve-3d',
                        'transform': 'translateZ(-0.1px)'
                    }));

                    $back = $( markup.back );
                    $back.css( 'background', $item.css( 'background' ) );
                    $back.css(utils.prefix({ 'transform': 'translateZ(-0.1px)' }));

                    $over = $( markup.over );
                    $over.css(utils.prefix({ 'transform': 'translateZ(0.1px)' }));
                    $over.css({
                        'background': opts.shading,
                        'opacity': 0.0
                    });

                    $node = $( markup.node ).append( $item );
                    $node.css(utils.prefix({
                        'transform-origin': '50% 0%',
                        'transform-style': 'preserve-3d',
                        'animation': anim + ' 1ms linear 0s 1 normal forwards'
                    }));

                    $item.append( $over );
                    $item.append( $back );
                    $base.append( $node );
                    $base = $node;
                });

                $root.css(utils.prefix({
                    'transform-origin': '50% 0%',
                    'transform-style': 'preserve-3d'
                }));

                $this.css(utils.prefix({
                    'transform': 'perspective(' + opts.perspective + 'px)'
                }));

                $this.append( $root );
            }
        });
    };

    $.fn.makisu.defaults = {

        perspective: 1200,

        shading: 'rgba(0,0,0,0.12)',

        selector: null,

        overlap: 0.6,

        speed: 0.8,

        easing: 'ease-in-out'
    };
    
    $.fn.makisu.enabled = canRun;
})( jQuery );