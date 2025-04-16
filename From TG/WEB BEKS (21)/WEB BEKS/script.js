let timeMove = 0;
let timeDown = '';

neumorph($('.buttonWrap'));

$('#reset').on('click', function () {
    reset();
});

function neumorph(selector) {
    selector.on('mousedown', function () {
        selector.addClass('active');
        timeDown = setInterval(timeUp, 100);
    });


    selector.on('touchstart', function () {
        selector.addClass('active');
        timeDown = setInterval(timeUp, 100);
    });
    selector.on('mouseup', function () {
        selector.removeClass('active');
        stopTime();
    });

    selector.on('touchend', function () {
        selector.removeClass('active');
        stopTime();
    });

    $('button').on('mouseleave', function () {
        selector.removeClass('active');
        stopTime();
    });
}

function timeUp() {
    if (timeMove >= 110) {
        clearInterval(timeDown);
        $('body').addClass('done');
        console.log('stop');
    } else {
        timeMove = timeMove + 2;
        $('.progress').css('transform', 'translateY(calc(100% + 111px - ' + timeMove + '%))');
        console.log(timeMove);
    }
}

function stopTime() {
    clearInterval(timeDown);
}

function reset() {
    clearInterval(timeDown);
    timeMove = 0;
    $('.progress').css('transform', 'translateY(calc(100% + 111px)');
    $('body').removeClass('done');
}