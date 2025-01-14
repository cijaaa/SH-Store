window.onload = function() {
    var e = document.createElement("div");
    e.setAttribute("id", "sellix-container"),
        document.body.appendChild(e);
    var l = document.createElement("div");
    l.setAttribute("id", "sellix-buttons-pointers-fix"),
        l.innerHTML = "<style>[data-sellix-product] * {\n    pointer-events: none;\n}\n[data-sellix-group] * {\n    pointer-events: none;\n}</style>",
        document.getElementById("sellix-container").appendChild(l);
    var t = document.querySelectorAll("[data-sellix-product]"),
        n = document.querySelectorAll("[data-sellix-group]"),
        a = function(e, l, t) {
            var n = [];
            for (let a = 0; a < e.length; a++) {
                var i = e[a];
                if (i.hasAttribute(t)) {
                    var r = i.getAttribute(t); -
                    1 === n.indexOf(r) ? n.push(r) : n.splice(n.indexOf(r), 1)
                }
            }
            for (let o = 0; o < l.length; o++) {
                var i = l[o];
                if (i.hasAttribute(t)) {
                    var r = i.getAttribute(t); -
                    1 === n.indexOf(r) ? n.push(r) : n.splice(n.indexOf(r), 1)
                }
            }
            return n.length > 0 && n
        };
    setTimeout(function e(l) {
        var i = document.querySelector("[data-sellix-product]"),
            r = document.querySelector("[data-sellix-group]"),
            o = document.querySelectorAll("[data-sellix-product]"),
            d = document.querySelectorAll("[data-sellix-group]");
        if (a(o, t, "data-sellix-product") && (l = !1),
            a(d, n, "data-sellix-group") && (l = !1),
            (i || r) && !l) {
            for (var s = document.getElementById("sellix-css"), c = function(e, l) {
                    var t = e.target.getAttribute("data-sellix-" + l);
                    if (!t)
                        return null;
                    for (var n = "?", a = e.target.attributes, i = 0; i < a.length; i++) {
                        let r = a[i];
                        r.nodeName.indexOf("data-sellix-css") > -1 && (n += "css=" + r.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let o = a[i];
                        o.nodeName.indexOf("data-sellix-referral") > -1 && (n += "rcid=" + o.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let d = a[i];
                        d.nodeName.indexOf("data-sellix-custom") > -1 && (n += d.nodeName.replace("data-sellix-custom-", "custom-") + "=" + d.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let c = a[i];
                        c.nodeName.indexOf("data-sellix-gateway") > -1 && (n += "gateway=" + c.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let x = a[i];
                        x.nodeName.indexOf("data-sellix-blockchain") > -1 && (n += "blockchain=" + x.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let u = a[i];
                        u.nodeName.indexOf("data-sellix-quantity") > -1 && (n += "quantity=" + u.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let f = a[i];
                        f.nodeName.indexOf("data-sellix-variant") > -1 && (n += "variant=" + f.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let p = a[i];
                        p.nodeName.indexOf("data-sellix-step") > -1 && (n += "step=" + p.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let $ = a[i];
                        $.nodeName.indexOf("data-sellix-email") > -1 && (n += "email=" + $.nodeValue + "&")
                    }
                    for (var i = 0; i < a.length; i++) {
                        let g = a[i];
                        g.nodeName.indexOf("data-sellix-coupon") > -1 && (n += "coupon=" + g.nodeValue + "&")
                    }
                    s && !(n.indexOf("css=") > -1) && (n += "css=" + s.href);
                    var m = "https://embed.sellix.io/" + l + "/" + t + n,
                        h = document.createElement("div");
                    h.setAttribute("id", "sellix-modal-" + t),
                        h.setAttribute("style", "display:none; position:fixed; top: 0; left:0; width: 100%; height:100%; z-index:-1050"),
                        h.innerHTML = '<div id="backdrop" class="sellix-backdrop"></div><style>.sellix-iframe {\n    width:100%;\n    height:100%;\n    border:none;\n}\n\n.sellix-iframe-content {\n    height: 100%;\n}\n\n.sellix-iframe-wrapper {\n    top:20px;\n    margin:auto;\n    width: 100%;\n    height:100%;\n    z-index: 1;\n}\n\n.sellix-iframe-loader-container {\n    z-index: 1;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.sellix-backdrop {\n    background: #00000075;\n    backdrop-filter: blur(3px);\n    width:100%;\n    height:100%;\n    position:absolute;\n}\n\n.sellix-fallback-button {\n    font-family: "Open Sans";\n    font-size: 14px;\n    font-weight: 600;\n    color: white;\n    text-decoration: none;\n}\n\n.sellix-fallback-button-container {\n    position: absolute;\n    z-index: 2;\n    display: none;\n    top: 50%;\n    height: 50px;\n    line-height: 40px;\n    max-height: 50px;\n    box-sizing: border-box;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: #613bea;\n    padding: .375rem .75rem;\n    border-radius: 3px;\n}</style><div class="sellix-iframe-loader-container"><img src="https://cdn.sellix.io/static/embed/loader.png" alt="Loader" class="sellix-iframe-loader" style="width: 35px;" /></div><div class="sellix-fallback-button-container"><a class="sellix-fallback-button" href="' + m + '" target="_blank" >Go to product</a></div><div class="sellix-iframe-wrapper"><div class="sellix-iframe-content"><iframe scrolling="auto" src="' + m + '" class="sellix-iframe" id="sellix-iframe" onerror="(e) => console.log(e)"></div></div>',
                        document.getElementById("sellix-container").appendChild(h);
                    var v = document.getElementById("sellix-modal-" + t);
                    v.style.display = "flex",
                        v.style.zIndex = "99999";
                    var b = document.querySelector("#sellix-iframe");
                    b.addEventListener("load", function(e) {
                            setTimeout(() => {
                                document.querySelector(".sellix-iframe-loader").style.display = "none"
                            }, 1500)
                        }),
                        b.addEventListener("error", function(e) {
                            document.querySelector(".sellix-iframe-loader").style.display = "none",
                                document.querySelector(".sellix-fallback-button-container").style.display = "flex"
                        }),
                        window.addEventListener("message", function(e) {
                            "close-embed" === e.data && (v.style.display = "none",
                                v.style.zIndex = "-1050",
                                v.parentNode && v.parentNode.removeChild(v))
                        }, !1)
                }, x = function(e) {
                    c(e, "product")
                }, u = function(e) {
                    c(e, "group")
                }, f = function(e) {
                    let l = e.cloneNode(!0);
                    return e.replaceWith(l),
                        l
                }, p = 0; p < o.length; p++)
                f(o[p]).addEventListener("click", x);
            for (var p = 0; p < d.length; p++)
                f(d[p]).addEventListener("click", u);
            t = document.querySelectorAll("[data-sellix-product]"),
                n = document.querySelectorAll("[data-sellix-group]"),
                l = !0
        }
        i || r ? setTimeout(e, 1e3, l) : setTimeout(e, 1e3, l = !1)
    }, 1e3, !1)
};