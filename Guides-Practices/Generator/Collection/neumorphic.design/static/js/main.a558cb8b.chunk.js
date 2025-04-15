(this.webpackJsonpneu = this.webpackJsonpneu || []).push([
    [0], {
        14: function(e, t, a) {},
        15: function(e, t, a) {
            e.exports = a.p + "static/media/logo.5d5d9eef.svg"
        },
        16: function(e, t, a) {},
        17: function(e, t, a) {},
        31: function(e, t, a) {
            "use strict";
            a.r(t);
            var o = a(0),
                n = a.n(o),
                r = a(4),
                l = a.n(r),
                c = (a(14), a(15), a(16), a(5)),
                s = a(6),
                i = a(8),
                d = a(7),
                m = (a(17), a(18), a(1)),
                u = a.n(m),
                h = function() {
                    return n.a.createElement("svg", {
                        width: "14",
                        height: "10",
                        viewBox: "0 0 14 11",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.a.createElement("title", null, "switch-check"), n.a.createElement("path", {
                        d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
                        fill: "#fff",
                        fillRule: "evenodd"
                    }))
                },
                g = function() {
                    return n.a.createElement("svg", {
                        width: "10",
                        height: "10",
                        viewBox: "0 0 10 10",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.a.createElement("title", null, "switch-x"), n.a.createElement("path", {
                        d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
                        fill: "#fff",
                        fillRule: "evenodd"
                    }))
                },
                C = (a(19), a(21)),
                v = (a(30), function(e) {
                    Object(i.a)(a, e);
                    var t = Object(d.a)(a);

                    function a(e) {
                        var o;
                        return Object(c.a)(this, a), (o = t.call(this, e)).lightenDarkenColor = function(e, t) {
                            var a = !1;
                            "#" == e[0] && (e = e.slice(1), a = !0);
                            var o = parseInt(e, 16),
                                n = (o >> 16) + t,
                                r = (o >> 8 & 255) + t,
                                l = (255 & o) + t;
                            return n > 255 && (n = 255), l > 255 && (l = 255), r > 255 && (r = 255), n < 0 && (n = 0), l < 0 && (l = 0), r < 0 && (r = 0), (a ? "#" : "") + (l | r << 8 | n << 16).toString(16)
                        }, o.calculateLightShadow = function(e, t) {
                            var a = t / 200,
                                o = C.hex.rgb(e);
                            return console.log("printing color"), console.log(e), console.log(o), o[0] = o[0] + o[0] * a, o[1] = o[1] + o[1] * a, o[2] = o[2] + o[2] * a, console.log(o), o[0] < 0 && (o[0] = 0), o[1] < 0 && (o[1] = 0), o[2] < 0 && (o[2] = 0), o[0] > 255 && (o[0] = 255), o[1] > 255 && (o[1] = 255), o[2] > 255 && (o[2] = 255), console.log(C.rgb.hex(o)), C.rgb.hex(o)
                        }, o.calculateDarkShadow = function(e, t) {
                            var a = t / 200,
                                o = C.hex.rgb(e);
                            return console.log("printing color"), console.log(e), console.log(o), o[0] = o[0] - o[0] * a, o[1] = o[1] - o[1] * a, o[2] = o[2] - o[2] * a, console.log(o), o[0] < 0 && (o[0] = 0), o[1] < 0 && (o[1] = 0), o[2] < 0 && (o[2] = 0), o[0] > 255 && (o[0] = 255), o[1] > 255 && (o[1] = 255), o[2] > 255 && (o[2] = 255), console.log(C.rgb.hex(o)), C.rgb.hex(o)
                        }, o.calculateAccentColor = function(e, t) {
                            var a = C.hex.rgb(e),
                                n = (a[0] + a[1] + a[2]) / 3;
                            console.log(n);
                            var r = t + .2 * Math.abs(127.5 - Math.abs(n));
                            return n >= 127.5 && (r *= -1), o.lightenDarkenColor(e, r)
                        }, o.handleChange1 = function(e) {
                            o.setState({
                                size: e.target.value
                            })
                        }, o.handleChange2 = function(e) {
                            o.setState({
                                borderRadius: e.target.value
                            })
                        }, o.handleChange3 = function(e) {
                            var t = e.target.value;
                            o.setState({
                                elevation: t
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.handleChange4 = function(e) {
                            o.setState({
                                blur: e.target.value
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.handleChange5 = function(e) {
                            o.setState({
                                intensity: e.target.value
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.handleChange6 = function(e) {
                            var t;
                            t = 50 != e.target.value, o.setState({
                                concavity: e.target.value,
                                concave: t
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.handlePickerChange = function(e) {
                            var t = e.target.value;
                            "#" != t[0] && (t = "#" + t);
                            var a = Math.round(100 * (o.state.elevation / 3.33 + Number.EPSILON)) / 100 + "px",
                                n = o.state.blur + "px",
                                r = o.state.intensity,
                                l = o.calculateLightShadow(t, r),
                                c = o.calculateDarkShadow(t, r),
                                s = o.calculateAccentColor(t, 50),
                                i = document.documentElement;
                            i.style.setProperty("--accent-color", s), i.style.setProperty("--main-bg-color", t);
                            var d, m, u, h = t.substr(1);
                            if (o.state.inset) var g = "inset " + a + " " + a + " " + n + " #" + c + ", inset -" + a + " -" + a + " " + n + " #" + l;
                            else g = a + " " + a + " " + n + " #" + c + ", -" + a + " -" + a + " " + n + " #" + l;
                            o.state.concave && (d = o.getConvexLightShadow(t, o.state.concavity), m = o.getConvexDarkShadow(t, o.state.concavity)), u = 50 == o.state.concavity || o.state.concave ? "" : o.state.concavity < 50 ? "linear-gradient(145deg, #" + d + ", #" + m + ")" : "linear-gradient(145deg, #" + m + ", #" + d + ")", o.setState({
                                color: t,
                                lightShadow: l,
                                darkShadow: c,
                                boxShadow: g,
                                textColor: s,
                                colorInputValue: h,
                                linearGradient: u
                            })
                        }, o.handleColorTextInputChange = function(e) {
                            console.log("Getting value of color text input"), console.log(e.target.value);
                            var t = e.target.value;
                            if (6 == t.length) {
                                var a, n, r, l = "#" + t,
                                    c = Math.round(100 * (o.state.elevation / 3.33 + Number.EPSILON)) / 100 + "px",
                                    s = o.state.blur + "px",
                                    i = o.state.intensity,
                                    d = o.calculateLightShadow(l, i),
                                    m = o.calculateDarkShadow(l, i),
                                    u = o.calculateAccentColor(l, 50),
                                    h = document.documentElement;
                                if (h.style.setProperty("--accent-color", u), h.style.setProperty("--main-bg-color", l), o.state.inset) var g = "inset " + c + " " + c + " " + s + " #" + m + ", inset -" + c + " -" + c + " " + s + " #" + d;
                                else g = c + " " + c + " " + s + " #" + m + ", -" + c + " -" + c + " " + s + " #" + d;
                                o.state.concave && (a = o.getConvexLightShadow(l, o.state.concavity), n = o.getConvexDarkShadow(l, o.state.concavity)), r = 50 == o.state.concavity ? "" : o.state.concavity < 50 ? "linear-gradient(145deg, #" + a + ", #" + n + ")" : "linear-gradient(145deg, #" + n + ", #" + a + ")", o.setState({
                                    color: l,
                                    lightShadow: d,
                                    darkShadow: m,
                                    boxShadow: g,
                                    textColor: u,
                                    colorInputValue: t,
                                    linearGradient: r
                                })
                            } else o.setState({
                                colorInputValue: t
                            })
                        }, o.writeText = function(e) {
                            return new Promise((function(t, a) {
                                var o = !1;

                                function n(t) {
                                    t.clipboardData.setData("text/plain", e), t.preventDefault(), o = !0
                                }
                                document.addEventListener("copy", n), document.execCommand("copy"), document.removeEventListener("copy", n), o ? t() : a()
                            }))
                        }, o.writeToClipboard = function(e) {
                            var t, a;
                            switch (console.log("copying to clipboard"), a = 0 == o.state.concave ? o.state.color : o.state.linearGradient, e.currentTarget.getAttribute("id")) {
                                case "copyText1":
                                    t = "background: " + a + ";\nborder-radius: " + o.state.borderRadius + "%;\nbox-shadow: " + o.state.boxShadow + ";";
                                    break;
                                case "copyText2":
                                    t = "background: " + a + ";";
                                    break;
                                case "copyText3":
                                    t = "border-radius: " + o.state.borderRadius + "%;";
                                    break;
                                case "copyText4":
                                    t = "box-shadow: " + o.state.boxShadow + ";";
                                    break;
                                default:
                                    t = "\xa0"
                            }
                            console.log("writing this to the function"), console.log(t), o.writeText(t)
                        }, o.removeCopyIcon = function(e) {
                            o.setState({
                                copy1: !1,
                                copy2: !1,
                                copy3: !1,
                                copy4: !1
                            })
                        }, o.emptyTooltip = function(e) {
                            o.setState({
                                toolTip: "\xa0",
                                copy1: !1,
                                copy2: !1,
                                copy3: !1,
                                copy4: !1
                            })
                        }, o.prevPage = function(e) {
                            o.state.page1 ? o.setState({
                                page1: !1,
                                page2: !0
                            }) : o.setState({
                                page2: !1,
                                page1: !0
                            })
                        }, o.nextPage = function(e) {
                            o.state.page1 ? o.setState({
                                page1: !1,
                                page2: !0
                            }) : o.setState({
                                page2: !1,
                                page1: !0
                            })
                        }, o.getConvexLightShadow = function(e, t) {
                            o.calculateLightShadow(e, t / 2);
                            return t <= 50 ? o.calculateLightShadow(e, 50 - t / 2) : o.calculateLightShadow(e, t / 2)
                        }, o.getConvexDarkShadow = function(e, t) {
                            o.calculateDarkShadow(e, t / 2);
                            return t <= 50 ? o.calculateDarkShadow(e, 50 - t / 2) : o.calculateDarkShadow(e, t / 2)
                        }, o.changeColor = function(e) {
                            var t = e.currentTarget.getAttribute("data-color"),
                                a = Math.round(100 * (o.state.elevation / 3.33 + Number.EPSILON)) / 100 + "px",
                                n = o.state.blur + "px",
                                r = o.state.intensity,
                                l = o.calculateLightShadow(t, r),
                                c = o.calculateDarkShadow(t, r),
                                s = o.calculateAccentColor(t, 50),
                                i = document.documentElement;
                            i.style.setProperty("--accent-color", s), i.style.setProperty("--main-bg-color", t);
                            var d, m, u, h = t.substr(1);
                            if (o.state.inset) var g = "inset " + a + " " + a + " " + n + " #" + c + ", inset -" + a + " -" + a + " " + n + " #" + l;
                            else g = a + " " + a + " " + n + " #" + c + ", -" + a + " -" + a + " " + n + " #" + l;
                            o.state.concave && (d = o.getConvexLightShadow(t, o.state.concavity), m = o.getConvexDarkShadow(t, o.state.concavity)), u = 50 == o.state.concavity ? "" : o.state.concavity < 50 ? "linear-gradient(145deg, #" + d + ", #" + m + ")" : "linear-gradient(145deg, #" + m + ", #" + d + ")", o.setState({
                                color: t,
                                lightShadow: l,
                                darkShadow: c,
                                boxShadow: g,
                                textColor: s,
                                colorInputValue: h,
                                linearGradient: u
                            })
                        }, o.transformExample = function() {
                            console.log("executing transformExample");
                            var e, t, a, n = Math.round(100 * (o.state.elevation / 3.33 + Number.EPSILON)) / 100 + "px",
                                r = o.state.blur + "px",
                                l = (C.hex.rgb(o.state.color), o.calculateLightShadow(o.state.color, o.state.intensity)),
                                c = o.calculateDarkShadow(o.state.color, o.state.intensity);
                            o.state.intensity;
                            if (o.state.inset) var s = "inset " + n + " " + n + " " + r + " #" + c + ", inset -" + n + " -" + n + " " + r + " #" + l;
                            else s = n + " " + n + " " + r + " #" + c + ", -" + n + " -" + n + " " + r + " #" + l;
                            o.state.concave && (e = o.getConvexLightShadow(o.state.color, o.state.concavity), t = o.getConvexDarkShadow(o.state.color, o.state.concavity)), a = 50 == o.state.concavity ? "" : o.state.concavity < 50 ? "linear-gradient(145deg, #" + e + ", #" + t + ")" : "linear-gradient(145deg, #" + t + ", #" + e + ")", console.log("Printing newbox and lingrad in transformExample"), console.log(s), console.log(a), o.setState({
                                boxShadow: s,
                                linearGradient: a
                            })
                        }, o.changeShape = function(e) {
                            var t = e.currentTarget.getAttribute("id");
                            console.log("printing option"), console.log(t), "shapePreset1" == t ? (console.log("option1 selected"), o.setState({
                                size: 50,
                                borderRadius: 100,
                                inset: !0,
                                concave: !1,
                                concavity: 50
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset2" == t ? (console.log("option2 selected"), o.setState({
                                size: 50,
                                borderRadius: 100,
                                inset: !0,
                                concave: !0,
                                concavity: 75
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset3" == t ? (console.log("option3 selected"), o.setState({
                                size: 50,
                                borderRadius: 100,
                                inset: !1,
                                concave: !0,
                                concavity: 25
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset4" == t ? (console.log("option4 selected"), o.setState({
                                size: 50,
                                borderRadius: 100,
                                inset: !1,
                                concave: !0,
                                concavity: 60
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset5" == t ? (console.log("option4 selected"), o.setState({
                                size: 50,
                                borderRadius: 15,
                                inset: !0,
                                concave: !1,
                                concavity: 50
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset6" == t ? (console.log("option4 selected"), o.setState({
                                size: 50,
                                borderRadius: 15,
                                inset: !0,
                                concave: !0,
                                concavity: 55
                            }, (function() {
                                o.transformExample()
                            }))) : "shapePreset7" == t ? (console.log("option4 selected"), o.setState({
                                size: 50,
                                borderRadius: 15,
                                inset: !1,
                                concave: !0,
                                concavity: 30
                            }, (function() {
                                o.transformExample()
                            }))) : (console.log("option4 selected"), o.setState({
                                size: 50,
                                borderRadius: 15,
                                inset: !1,
                                concave: !0,
                                concavity: 60
                            }, (function() {
                                o.transformExample()
                            })))
                        }, o.handleTextAreaChange = function(e) {
                            var t = e.target.value;
                            o.setState({
                                textAreaValue: t
                            })
                        }, o.handleTextboxFocus = function(e) {
                            e.target.select()
                        }, o.toggleInset = function() {
                            console.log(o.state.inset), console.log(!o.state.inset), o.setState({
                                inset: !o.state.inset
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.toggleConcave = function() {
                            o.state.concave ? o.setState({
                                concave: !o.state.concave,
                                concavity: 50
                            }, (function() {
                                o.transformExample()
                            })) : o.setState({
                                concave: !o.state.concave,
                                concavity: 25
                            }, (function() {
                                o.transformExample()
                            }))
                        }, o.state = {
                            page1: !1,
                            page2: !0,
                            size: 75,
                            shadowSize: 30,
                            borderRadius: 100,
                            elevation: 33,
                            blur: 15,
                            intensity: 18,
                            copy1: !1,
                            copy2: !1,
                            copy3: !1,
                            copy4: !1,
                            toolTip: "\xa0",
                            color: "#EEF0F4",
                            lightShadow: "",
                            darkShadow: "",
                            textColor: "#8B8FA5",
                            colorInputValue: "EEF0F4",
                            textColorInputValue: "8B8FA5",
                            textAreaValue: "Write Stuff!",
                            staticContainerShadow: "",
                            staticTooltipShadow: "",
                            staticCopyShadow: "",
                            staticButtonShadow: "",
                            staticButtonBackground: "",
                            inset: !0,
                            concave: !1,
                            concavity: 50,
                            boxShadow: "inset 7px 7px 14px #d4d6d9, inset -7px -7px 14px #ffffff",
                            linearGradient: ""
                        }, o
                    }
                    return Object(s.a)(a, [{
                        key: "render",
                        value: function() {
                            var e, t, a = this.state.borderRadius / 2 + "%",
                                o = 5 * this.state.size + 50 + "px",
                                r = {
                                    boxShadow: this.state.boxShadow,
                                    backgroundColor: this.state.color,
                                    borderRadius: a,
                                    height: o,
                                    width: o,
                                    background: this.state.linearGradient
                                };
                            return e = n.a.createElement("div", {
                                id: "example",
                                className: "exampleContainer",
                                style: r,
                                background: this.state.linearGradient
                            }), t = this.state.page2 ? n.a.createElement("div", {
                                className: "optionsContainer",
                                style: {
                                    backgroundColor: this.state.color,
                                    boxShadow: this.state.boxShadow
                                }
                            }, n.a.createElement("h1", {
                                className: "subHeading"
                            }, "Presets"), n.a.createElement("section", {
                                className: "colorPresetContainer"
                            }, n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset1",
                                "data-color": "#EEF0F4",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset1",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#EEF0F4",
                                style: {
                                    backgroundColor: "#EEF0F4"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset2",
                                "data-color": "#D2DBEE",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset2",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#D2DBEE",
                                style: {
                                    backgroundColor: "#D2DBEE"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset8",
                                "data-color": "#95A5A7",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#95A5A7",
                                style: {
                                    backgroundColor: "#95A5A7"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset3",
                                "data-color": "#656565",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset3",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#656565",
                                style: {
                                    backgroundColor: "#656565"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset7",
                                "data-color": "#D65400",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#D65400",
                                style: {
                                    backgroundColor: "#D65400"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset14",
                                "data-color": "#e967ad",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e967ad",
                                style: {
                                    backgroundColor: "#e967ad"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset9",
                                "data-color": "#FF9AA2",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#FF9AA2",
                                style: {
                                    backgroundColor: "#FF9AA2"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset13",
                                "data-color": "#d7b7d2",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#d7b7d2",
                                style: {
                                    backgroundColor: "#d7b7d2"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset17",
                                "data-color": "#b77110",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#b77110",
                                style: {
                                    backgroundColor: "#b77110"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset20",
                                "data-color": "#e9820c",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e9820c",
                                style: {
                                    backgroundColor: "#e9820c"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset18",
                                "data-color": "#e19a60",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e19a60",
                                style: {
                                    backgroundColor: "#e19a60"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset19",
                                "data-color": "#e9b367",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e9b367",
                                style: {
                                    backgroundColor: "#e9b367"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset17",
                                "data-color": "#9c9d62",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#9c9d62",
                                style: {
                                    backgroundColor: "#9c9d62"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset20",
                                "data-color": "#eff95d",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#eff95d",
                                style: {
                                    backgroundColor: "#eff95d"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset18",
                                "data-color": "#e8eb47",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e8eb47",
                                style: {
                                    backgroundColor: "#e8eb47"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset19",
                                "data-color": "#e7e384",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#e7e384",
                                style: {
                                    backgroundColor: "#e7e384"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset11",
                                "data-color": "#058f8c",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#058f8c",
                                style: {
                                    backgroundColor: "#058f8c"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset6",
                                "data-color": "#1DAF5E",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#1DAF5E",
                                style: {
                                    backgroundColor: "#1DAF5E"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset17",
                                "data-color": "#89d28e",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#89d28e",
                                style: {
                                    backgroundColor: "#89d28e"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset6",
                                "data-color": "#67e1e9",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#67e1e9",
                                style: {
                                    backgroundColor: "#67e1e9"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset4",
                                "data-color": "#5665B9",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset4",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#5665B9",
                                style: {
                                    backgroundColor: "#5665B9"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset16",
                                "data-color": "#676ce9",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#676ce9",
                                style: {
                                    backgroundColor: "#676ce9"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset15",
                                "data-color": "#8a89d2",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#8a89d2",
                                style: {
                                    backgroundColor: "#8a89d2"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset12",
                                "data-color": "#C8CEEA",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#C8CEEA",
                                style: {
                                    backgroundColor: "#C8CEEA"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset19",
                                "data-color": "#6608c4",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset7",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#6608c4",
                                style: {
                                    backgroundColor: "#6608c4"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset20",
                                "data-color": "#d90de7",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset8",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#d90de7",
                                style: {
                                    backgroundColor: "#d90de7"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset5",
                                "data-color": "#9C56B9",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset5",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#9C56B9",
                                style: {
                                    backgroundColor: "#9C56B9"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "colorPreset18",
                                "data-color": "#8367e9",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("div", {
                                id: "innerColorPreset6",
                                className: "innerColor",
                                onClick: this.changeColor,
                                "data-color": "#8367e9",
                                style: {
                                    backgroundColor: "#8367e9"
                                }
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset1",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "fas fa-circle fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset2",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "far fa-circle fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset3",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "fas fa-circle fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset4",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "far fa-circle fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset5",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "fas fa-square fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset6",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "far fa-square fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset7",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "fas fa-square fa-2x"
                            })), n.a.createElement("div", {
                                className: "buttonNoText",
                                id: "shapePreset8",
                                onClick: this.changeShape
                            }, n.a.createElement("i", {
                                className: "far fa-square fa-2x"
                            }))), n.a.createElement("section", {
                                className: "nextContainer"
                            }, n.a.createElement("div", {
                                className: "button",
                                onClick: this.prevPage,
                                id: "leftButton"
                            }, "Back"), n.a.createElement("div", {
                                className: "button",
                                onClick: this.nextPage,
                                id: "rightButton"
                            }, "Next"))) : n.a.createElement("div", {
                                className: "optionsContainer",
                                style: {
                                    backgroundColor: this.state.color,
                                    boxShadow: this.state.boxShadow
                                }
                            }, n.a.createElement("h1", {
                                className: "subHeading"
                            }, " Options "), n.a.createElement("section", {
                                className: "outerSliderContainer"
                            }, n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Size         :"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk1",
                                onChange: this.handleChange1,
                                value: this.state.size
                            })), n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Corner Radius:"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk2",
                                onChange: this.handleChange2,
                                value: this.state.borderRadius
                            })), n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Elevation     :"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk3",
                                onChange: this.handleChange3,
                                value: this.state.elevation
                            })), n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Blur             :"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk4",
                                onChange: this.handleChange4,
                                value: this.state.blur
                            })), n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Intensity       :"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk5",
                                onChange: this.handleChange5,
                                value: this.state.intensity
                            })), n.a.createElement("div", {
                                className: "sliderContainer"
                            }, n.a.createElement("p", {
                                className: "sliderText"
                            }, "Concavity       :"), n.a.createElement("input", {
                                type: "range",
                                min: "1",
                                max: "100",
                                className: "slider",
                                id: "idk6",
                                onChange: this.handleChange6,
                                value: this.state.concavity
                            }))), n.a.createElement("section", {
                                className: "shapeContainer"
                            }, n.a.createElement("div", {
                                className: "radioContainer"
                            }, n.a.createElement(u.a, {
                                inactiveLabel: n.a.createElement(g, null),
                                activeLabel: n.a.createElement(h, null),
                                value: this.state.inset,
                                onToggle: this.toggleInset,
                                colors: {
                                    active: {
                                        base: "#3B89FD"
                                    },
                                    inactive: {
                                        base: "#000000"
                                    }
                                }
                            }), n.a.createElement("label", {
                                id: "optionPicker1",
                                className: "radioText"
                            }, "Inset")), n.a.createElement("div", {
                                className: "radioContainer"
                            }, n.a.createElement(u.a, {
                                inactiveLabel: n.a.createElement(g, null),
                                activeLabel: n.a.createElement(h, null),
                                value: 50 != this.state.concavity,
                                onToggle: this.toggleConcave,
                                colors: {
                                    active: {
                                        base: "#3B89FD"
                                    },
                                    inactive: {
                                        base: "#000000"
                                    }
                                }
                            }), n.a.createElement("label", {
                                id: "optionPicker2",
                                className: "radioText"
                            }, "Concave")), n.a.createElement("div", {
                                className: "innerColorContainer"
                            }, n.a.createElement("input", {
                                type: "color",
                                id: "colorPicker",
                                className: "colorPicker",
                                onChange: this.handlePickerChange,
                                value: this.state.color
                            }), n.a.createElement("input", {
                                type: "text",
                                id: "colorInput",
                                className: "colorInput",
                                onChange: this.handleColorTextInputChange,
                                onFocus: this.handleTextboxFocus,
                                value: this.state.colorInputValue,
                                maxLength: "6"
                            }))), n.a.createElement("section", {
                                className: "copyPasta",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("a", {
                                className: "copyText",
                                onClick: this.writeToClipboard,
                                id: "copyText1",
                                onMouseLeave: this.removeCopyIcon
                            }, "copy all ", n.a.createElement("i", {
                                id: "copyText1",
                                onClick: this.writeToClipboard,
                                className: "fas fa-copy",
                                style: {
                                    visibility: this.state.copy1 ? "visible" : "hidden"
                                }
                            })), n.a.createElement("a", {
                                className: "copyText",
                                onClick: this.writeToClipboard,
                                id: "copyText2",
                                onMouseLeave: this.removeCopyIcon
                            }, "background ", n.a.createElement("i", {
                                id: "copyText2",
                                onClick: this.writeToClipboard,
                                className: "fas fa-copy",
                                style: {
                                    visibility: this.state.copy2 ? "visible" : "hidden"
                                }
                            })), n.a.createElement("a", {
                                className: "copyText",
                                onClick: this.writeToClipboard,
                                id: "copyText3",
                                onMouseLeave: this.removeCopyIcon
                            }, "border-radius ", n.a.createElement("i", {
                                id: "copyText3",
                                onClick: this.writeToClipboard,
                                className: "fas fa-copy",
                                style: {
                                    visibility: this.state.copy3 ? "visible" : "hidden"
                                }
                            })), n.a.createElement("a", {
                                className: "copyText",
                                onClick: this.writeToClipboard,
                                id: "copyText4",
                                onMouseLeave: this.removeCopyIcon
                            }, "box-shadow ", n.a.createElement("i", {
                                id: "copyText4",
                                onClick: this.writeToClipboard,
                                className: "fas fa-copy",
                                style: {
                                    visibility: this.state.copy4 ? "visible" : "hidden"
                                }
                            }))), n.a.createElement("section", {
                                className: "nextContainer"
                            }, n.a.createElement("div", {
                                className: "button",
                                onClick: this.prevPage,
                                id: "leftButton",
                                onMouseLeave: this.emptyTooltip
                            }, "Back"), n.a.createElement("div", {
                                className: "button",
                                onClick: this.nextPage,
                                id: "rightButton",
                                onMouseLeave: this.emptyTooltip
                            }, "Next"))), n.a.createElement("div", {
                                className: "contentColumnSection",
                                style: {
                                    backgroundColor: this.state.color
                                }
                            }, n.a.createElement("a", {
                                className: "ph",
                                href: "https://www.producthunt.com/posts/neumorphic-generator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-neumorphic-generator",
                                target: "_blank"
                            }, n.a.createElement("img", {
                                className: "ph",
                                src: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=208119&theme=light",
                                alt: "Neumorphic Generator - Delightful CSS presets for your next product | Product Hunt Embed"
                            })), n.a.createElement("div", {
                                className: "column"
                            }, e), n.a.createElement("div", {
                                className: "column"
                            }, t))
                        }
                    }]), a
                }(n.a.Component));
            var b = function() {
                return n.a.createElement(n.a.Fragment, null, n.a.createElement(v, null))
            };
            l.a.render(n.a.createElement(n.a.StrictMode, null, n.a.createElement(b, null)), document.getElementById("root"))
        },
        9: function(e, t, a) {
            e.exports = a(31)
        }
    },
    [
        [9, 1, 2]
    ]
]);
//# sourceMappingURL=main.a558cb8b.chunk.js.map