(self.webpackChunkget_waves = self.webpackChunkget_waves || []).push([
    [81], {
        5081: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                lazyHydrate: function() {
                    return n
                }
            });
            var a = r(410),
                o = r(7294),
                i = r(3935);
            r(4041), r(1224);

            function n(e, t, r) {
                var n = e.image,
                    c = e.loading,
                    s = e.isLoading,
                    g = e.isLoaded,
                    l = e.toggleIsLoaded,
                    u = e.ref,
                    d = e.imgClassName,
                    b = e.imgStyle,
                    h = void 0 === b ? {} : b,
                    m = e.objectPosition,
                    f = e.backgroundColor,
                    v = e.objectFit,
                    y = void 0 === v ? "cover" : v,
                    j = (0, a._)(e, ["image", "loading", "isLoading", "isLoaded", "toggleIsLoaded", "ref", "imgClassName", "imgStyle", "objectPosition", "backgroundColor", "objectFit"]),
                    k = n.width,
                    C = n.height,
                    w = n.layout,
                    L = n.images,
                    p = n.placeholder,
                    N = n.backgroundColor;
                if (!t.current) return null;
                var P = t.current.querySelector("[data-gatsby-image-ssr]");
                if ((0, a.h)() && P && !r.current) return null;
                var S = JSON.stringify(L),
                    E = (0, a.a)(S);
                h = (0, a.b)({
                    objectFit: y,
                    objectPosition: m,
                    backgroundColor: f
                }, h);
                var F = o.createElement(a.L, {
                    layout: w,
                    width: k,
                    height: C
                }, !E && o.createElement(a.P, Object.assign({}, (0, a.g)(p, g, w, k, C, N))), o.createElement(a.M, Object.assign({}, j, {
                    width: k,
                    height: C,
                    className: d
                }, (0, a.c)(s, E || g, L, c, l, S, u, h))));
                return (r.current ? i.render : i.hydrate)(F, t.current), r.current = !0,
                    function() {
                        t.current && (0, i.render)(null, t.current)
                    }
            }
        }
    }
]);
//# sourceMappingURL=81-b49ebd9fcc53e001fdd8.js.map