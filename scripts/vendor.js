if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length,
            n = K.type(t);
        return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (K.isFunction(e)) return K.grep(t, function(t, r) {
            return !!e.call(t, r, t) !== n
        });
        if (e.nodeType) return K.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (se.test(e)) return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return V.call(e, t) >= 0 !== n
        })
    }

    function i(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = de[t] = {};
        return K.each(t.match(pe) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function a() {
        G.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), K.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = K.expando + s.uid++
    }

    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(xe, "-$1").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? K.parseJSON(n) : n
                } catch (i) {}
                ye.set(t, e, n)
            } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function f() {
        try {
            return G.activeElement
        } catch (t) {}
    }

    function h(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Le.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n = 0, r = t.length; r > n; n++) me.set(t[n], "globalEval", !e || me.get(e[n], "globalEval"))
    }

    function v(t, e) {
        var n, r, i, o, a, s, u, l;
        if (1 === e.nodeType) {
            if (me.hasData(t) && (o = me.access(t), a = me.set(e, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; r > n; n++) K.event.add(e, i, l[i][n])
            }
            ye.hasData(t) && (s = ye.access(t), u = K.extend({}, s), ye.set(e, u))
        }
    }

    function m(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }

    function y(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Me.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function b(e, n) {
        var r, i = K(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (r = t.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(), o
    }

    function x(t) {
        var e = G,
            n = He[t];
        return n || (n = b(t, e), "none" !== n && n || (Ie = (Ie || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ie[0].contentDocument, e.write(), e.close(), n = b(t, e), Ie.detach()), He[t] = n), n
    }

    function w(t, e, n) {
        var r, i, o, a, s = t.style;
        return n = n || Ue(t), n && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || K.contains(t.ownerDocument, t) || (a = K.style(t, e)), ze.test(a) && Fe.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function S(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Qe.length; i--;)
            if (e = Qe[i] + n, e in t) return e;
        return r
    }

    function M(t, e, n) {
        var r = Be.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function k(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += K.css(t, n + _e[o], !0, i)), r ? ("content" === n && (a -= K.css(t, "padding" + _e[o], !0, i)), "margin" !== n && (a -= K.css(t, "border" + _e[o] + "Width", !0, i))) : (a += K.css(t, "padding" + _e[o], !0, i), "padding" !== n && (a += K.css(t, "border" + _e[o] + "Width", !0, i)));
        return a
    }

    function T(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Ue(t),
            a = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = w(t, e, o), (0 > i || null == i) && (i = t.style[e]), ze.test(i)) return i;
            r = a && (Z.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + k(t, e, n || (a ? "border" : "content"), r, o) + "px"
    }

    function C(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; s > a; a++) r = t[a], r.style && (o[a] = me.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Se(r) && (o[a] = me.access(r, "olddisplay", x(r.nodeName)))) : (i = Se(r), "none" === n && i || me.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (a = 0; s > a; a++) r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }

    function E(t, e, n, r, i) {
        return new E.prototype.init(t, e, n, r, i)
    }

    function N() {
        return setTimeout(function() {
            Ze = void 0
        }), Ze = K.now()
    }

    function A(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = _e[r], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function D(t, e, n) {
        for (var r, i = (nn[e] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function $(t, e, n) {
        var r, i, o, a, s, u, l, c, f = this,
            h = {},
            p = t.style,
            d = t.nodeType && Se(t),
            g = me.get(t, "fxshow");
        n.queue || (s = K._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
            s.unqueued || u()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, K.queue(t, "fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = K.css(t, "display"), c = "none" === l ? me.get(t, "olddisplay") || x(t.nodeName) : l, "inline" === c && "none" === K.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r], Je.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    d = !0
                }
                h[r] = g && g[r] || K.style(t, r)
            } else l = void 0;
        if (K.isEmptyObject(h)) "inline" === ("none" === l ? x(t.nodeName) : l) && (p.display = l);
        else {
            g ? "hidden" in g && (d = g.hidden) : g = me.access(t, "fxshow", {}), o && (g.hidden = !d), d ? K(t).show() : f.done(function() {
                K(t).hide()
            }), f.done(function() {
                var e;
                me.remove(t, "fxshow");
                for (e in h) K.style(t, e, h[e])
            });
            for (r in h) a = D(d ? g[r] : 0, r, f), r in g || (g[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function P(t, e) {
        var n, r, i, o, a;
        for (n in t)
            if (r = K.camelCase(n), i = e[r], o = t[n], K.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = K.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete t[r];
                for (n in o) n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
    }

    function O(t, e, n) {
        var r, i, o = 0,
            a = en.length,
            s = K.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var e = Ze || N(), n = Math.max(0, l.startTime + l.duration - e), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
                return s.notifyWith(t, [l, o, n]), 1 > o && u ? n : (s.resolveWith(t, [l]), !1)
            },
            l = s.promise({
                elem: t,
                props: K.extend({}, e),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Ze || N(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var r = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function(e) {
                    var n = 0,
                        r = e ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this
                }
            }),
            c = l.props;
        for (P(c, l.opts.specialEasing); a > o; o++)
            if (r = en[o].call(l, t, c, l.opts)) return r;
        return K.map(c, D, l), K.isFunction(l.opts.start) && l.opts.start.call(t, l), K.fx.timer(K.extend(u, {
            elem: t,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function j(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r, i = 0,
                o = e.toLowerCase().match(pe) || [];
            if (K.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }

    function L(t, e, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, K.each(t[s] || [], function(t, s) {
                var l = s(e, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), i(l), !1)
            }), u
        }
        var o = {},
            a = t === xn;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }

    function R(t, e) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && K.extend(!0, t, r), t
    }

    function q(t, e, n) {
        for (var r, i, o, a, s = t.contents, u = t.dataTypes;
             "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function I(t, e, n, r) {
        var i, o, a, s, u, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (a = l[u + " " + o] || l["* " + o], !a)
                        for (i in l)
                            if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"]) e = a(e);
                        else try {
                            e = a(e)
                        } catch (f) {
                            return {
                                state: "parsererror",
                                error: a ? f : "No conversion from " + u + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: e
        }
    }

    function H(t, e, n, r) {
        var i;
        if (K.isArray(e)) K.each(e, function(e, i) {
            n || kn.test(t) ? r(t, i) : H(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
        });
        else if (n || "object" !== K.type(e)) r(t, e);
        else
            for (i in e) H(t + "[" + i + "]", e[i], n, r)
    }

    function F(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var z = [],
        U = z.slice,
        W = z.concat,
        B = z.push,
        V = z.indexOf,
        Y = {},
        X = Y.toString,
        Q = Y.hasOwnProperty,
        Z = {},
        G = t.document,
        J = "2.1.3",
        K = function(t, e) {
            return new K.fn.init(t, e)
        },
        te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ee = /^-ms-/,
        ne = /-([\da-z])/gi,
        re = function(t, e) {
            return e.toUpperCase()
        };
    K.fn = K.prototype = {
        jquery: J,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: B,
        sort: z.sort,
        splice: z.splice
    }, K.extend = K.fn.extend = function() {
        var t, e, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
            if (null != (t = arguments[s]))
                for (e in t) n = a[e], r = t[e], a !== r && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1, o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {}, a[e] = K.extend(l, o, r)) : void 0 !== r && (a[e] = r));
        return a
    }, K.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[X.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(ee, "ms-").replace(ne, re)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, r) {
            var i, o = 0,
                a = t.length,
                s = n(t);
            if (r) {
                if (s)
                    for (; a > o && (i = e.apply(t[o], r), i !== !1); o++);
                else
                    for (o in t)
                        if (i = e.apply(t[o], r), i === !1) break
            } else if (s)
                for (; a > o && (i = e.call(t[o], o, t[o]), i !== !1); o++);
            else
                for (o in t)
                    if (i = e.call(t[o], o, t[o]), i === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(te, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? K.merge(r, "string" == typeof t ? [t] : t) : B.call(r, t)), r
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : V.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; a > o; o++) r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, r) {
            var i, o = 0,
                a = t.length,
                s = n(t),
                u = [];
            if (s)
                for (; a > o; o++) i = e(t[o], o, r), null != i && u.push(i);
            else
                for (o in t) i = e(t[o], o, r), null != i && u.push(i);
            return W.apply([], u)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e], e = t, t = n), K.isFunction(t) ? (r = U.call(arguments, 2), i = function() {
                return t.apply(e || this, r.concat(U.call(arguments)))
            }, i.guid = t.guid = t.guid || K.guid++, i) : void 0
        },
        now: Date.now,
        support: Z
    }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    });
    var ie = function(t) {
        function e(t, e, n, r) {
            var i, o, a, s, u, l, f, p, d, g;
            if ((e ? e.ownerDocument || e : H) !== $ && D(e), e = e || $, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && O) {
                if (11 !== s && (i = ye.exec(t)))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = e.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && q(e, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = i[3]) && w.getElementsByClassName) return J.apply(n, e.getElementsByClassName(a)), n
                    }
                if (w.qsa && (!j || !j.test(t))) {
                    if (p = f = I, d = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                        for (l = k(t), (f = e.getAttribute("id")) ? p = f.replace(xe, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = l.length; u--;) l[u] = p + h(l[u]);
                        d = be.test(t) && c(e.parentNode) || e, g = l.join(",")
                    }
                    if (g) try {
                        return J.apply(n, d.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        f || e.removeAttribute("id")
                    }
                }
            }
            return C(t.replace(ue, "$1"), e, n, r)
        }

        function n() {
            function t(n, r) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
            var e = [];
            return t
        }

        function r(t) {
            return t[I] = !0, t
        }

        function i(t) {
            var e = $.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), r = t.length; r--;) _.attrHandle[n[r]] = e
        }

        function a(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function s(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function l(t) {
            return r(function(e) {
                return e = +e, r(function(n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function f() {}

        function h(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
            return r
        }

        function p(t, e, n) {
            var r = e.dir,
                i = n && "parentNode" === r,
                o = z++;
            return e.first ? function(e, n, o) {
                for (; e = e[r];)
                    if (1 === e.nodeType || i) return t(e, n, o)
            } : function(e, n, a) {
                var s, u, l = [F, o];
                if (a) {
                    for (; e = e[r];)
                        if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                } else
                    for (; e = e[r];)
                        if (1 === e.nodeType || i) {
                            if (u = e[I] || (e[I] = {}), (s = u[r]) && s[0] === F && s[1] === o) return l[2] = s[2];
                            if (u[r] = l, l[2] = t(e, n, a)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--;)
                    if (!t[i](e, n, r)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, r) {
            for (var i = 0, o = n.length; o > i; i++) e(t, n[i], r);
            return r
        }

        function v(t, e, n, r, i) {
            for (var o, a = [], s = 0, u = t.length, l = null != e; u > s; s++)(o = t[s]) && (!n || n(o, r, i)) && (a.push(o), l && e.push(s));
            return a
        }

        function m(t, e, n, i, o, a) {
            return i && !i[I] && (i = m(i)), o && !o[I] && (o = m(o, a)), r(function(r, a, s, u) {
                var l, c, f, h = [],
                    p = [],
                    d = a.length,
                    m = r || g(e || "*", s.nodeType ? [s] : s, []),
                    y = !t || !r && e ? m : v(m, h, t, s, u),
                    b = n ? o || (r ? t : d || i) ? [] : a : y;
                if (n && n(y, b, s, u), i)
                    for (l = v(b, p), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, u)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? te(r, f) : h[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = v(b === a ? b.splice(d, b.length) : b), o ? o(null, a, b, u) : J.apply(a, b)
            })
        }

        function y(t) {
            for (var e, n, r, i = t.length, o = _.relative[t[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = p(function(t) {
                return t === e
            }, a, !0), l = p(function(t) {
                return te(e, t) > -1
            }, a, !0), c = [function(t, n, r) {
                var i = !o && (r || n !== E) || ((e = n).nodeType ? u(t, n, r) : l(t, n, r));
                return e = null, i
            }]; i > s; s++)
                if (n = _.relative[t[s].type]) c = [p(d(c), n)];
                else {
                    if (n = _.filter[t[s].type].apply(null, t[s].matches), n[I]) {
                        for (r = ++s; i > r && !_.relative[t[r].type]; r++);
                        return m(s > 1 && d(c), s > 1 && h(t.slice(0, s - 1).concat({
                            value: " " === t[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, r > s && y(t.slice(s, r)), i > r && y(t = t.slice(r)), i > r && h(t))
                    }
                    c.push(n)
                }
            return d(c)
        }

        function b(t, n) {
            var i = n.length > 0,
                o = t.length > 0,
                a = function(r, a, s, u, l) {
                    var c, f, h, p = 0,
                        d = "0",
                        g = r && [],
                        m = [],
                        y = E,
                        b = r || o && _.find.TAG("*", l),
                        x = F += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (l && (E = a !== $ && a); d !== w && null != (c = b[d]); d++) {
                        if (o && c) {
                            for (f = 0; h = t[f++];)
                                if (h(c, a, s)) {
                                    u.push(c);
                                    break
                                }
                            l && (F = x)
                        }
                        i && ((c = !h && c) && p--, r && g.push(c))
                    }
                    if (p += d, i && d !== p) {
                        for (f = 0; h = n[f++];) h(g, m, a, s);
                        if (r) {
                            if (p > 0)
                                for (; d--;) g[d] || m[d] || (m[d] = Z.call(u));
                            m = v(m)
                        }
                        J.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                    }
                    return l && (F = x, E = y), g
                };
            return i ? r(a) : a
        }
        var x, w, _, S, M, k, T, C, E, N, A, D, $, P, O, j, L, R, q, I = "sizzle" + 1 * new Date,
            H = t.document,
            F = 0,
            z = 0,
            U = n(),
            W = n(),
            B = n(),
            V = function(t, e) {
                return t === e && (A = !0), 0
            },
            Y = 1 << 31,
            X = {}.hasOwnProperty,
            Q = [],
            Z = Q.pop,
            G = Q.push,
            J = Q.push,
            K = Q.slice,
            te = function(t, e) {
                for (var n = 0, r = t.length; r > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie = re.replace("w", "w#"),
            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(ae),
            pe = new RegExp("^" + ie + "$"),
            de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ee + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            xe = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            _e = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            Se = function() {
                D()
            };
        try {
            J.apply(Q = K.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (Me) {
            J = {
                apply: Q.length ? function(t, e) {
                    G.apply(t, K.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, M = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, D = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : H;
            return r !== $ && 9 === r.nodeType && r.documentElement ? ($ = r, P = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), O = !M(r), w.attributes = i(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = i(function(t) {
                return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(r.getElementsByClassName), w.getById = i(function(t) {
                return P.appendChild(t).id = I, !r.getElementsByName || !r.getElementsByName(I).length
            }), w.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function(t) {
                var e = t.replace(we, _e);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), _.find.TAG = w.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, r = [],
                    i = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = w.getElementsByClassName && function(t, e) {
                return O ? e.getElementsByClassName(t) : void 0
            }, L = [], j = [], (w.qsa = me.test(r.querySelectorAll)) && (i(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + ee + ")"), t.querySelectorAll("[id~=" + I + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + I + "+*").length || j.push(".#.+[+~]")
            }), i(function(t) {
                var e = r.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = me.test(R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                w.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), L.push("!=", ae)
            }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), e = me.test(P.compareDocumentPosition), q = e || me.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === H && q(H, t) ? -1 : e === r || e.ownerDocument === H && q(H, e) ? 1 : N ? te(N, t) - te(N, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var n, i = 0,
                    o = t.parentNode,
                    s = e.parentNode,
                    u = [t],
                    l = [e];
                if (!o || !s) return t === r ? -1 : e === r ? 1 : o ? -1 : s ? 1 : N ? te(N, t) - te(N, e) : 0;
                if (o === s) return a(t, e);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; u[i] === l[i];) i++;
                return i ? a(u[i], l[i]) : u[i] === H ? -1 : l[i] === H ? 1 : 0
            }, r) : $
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== $ && D(t), n = n.replace(fe, "='$1']"), !(!w.matchesSelector || !O || L && L.test(n) || j && j.test(n))) try {
                var r = R.call(t, n);
                if (r || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
            } catch (i) {}
            return e(n, $, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== $ && D(t), q(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== $ && D(t);
            var n = _.attrHandle[e.toLowerCase()],
                r = n && X.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                r = 0,
                i = 0;
            if (A = !w.detectDuplicates, N = !w.sortStable && t.slice(0), t.sort(V), A) {
                for (; e = t[i++];) e === t[i] && (r = n.push(i));
                for (; r--;) t.splice(n[r], 1)
            }
            return N = null, t
        }, S = e.getText = function(t) {
            var e, n = "",
                r = 0,
                i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                } else if (3 === i || 4 === i) return t.nodeValue
            } else
                for (; e = t[r++];) n += S(e);
            return n
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(we, _e), t[3] = (t[3] || t[4] || t[5] || "").replace(we, _e), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return de.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && he.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(we, _e).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && U(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                        a = "last" !== t.slice(-4),
                        s = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, u) {
                        var l, c, f, h, p, d, g = o !== a ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            m = s && e.nodeName.toLowerCase(),
                            y = !u && !s;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (f = e; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    d = g = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [a ? v.firstChild : v.lastChild], a && y) {
                                for (c = v[I] || (v[I] = {}), l = c[t] || [], p = l[0] === F && l[1], h = l[0] === F && l[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (h = p = 0) || d.pop();)
                                    if (1 === f.nodeType && ++h && f === e) {
                                        c[t] = [F, p, h];
                                        break
                                    }
                            } else if (y && (l = (e[I] || (e[I] = {}))[t]) && l[0] === F) h = l[1];
                            else
                                for (;
                                    (f = ++p && f && f[g] || (h = p = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++h || (y && ((f[I] || (f[I] = {}))[t] = [F, h]), f !== e)););
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[I] ? o(n) : o.length > 1 ? (i = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), a = i.length; a--;) r = te(t, i[a]), t[r] = !(e[r] = i[a])
                    }) : function(t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = [],
                        n = [],
                        i = T(t.replace(ue, "$1"));
                    return i[I] ? r(function(t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function(t, r, o) {
                        return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(we, _e),
                        function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                }),
                lang: r(function(t) {
                    return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, _e).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return ve.test(t.nodeName)
                },
                input: function(t) {
                    return ge.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(t, e) {
                    return [e - 1]
                }),
                eq: l(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: l(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: l(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
                    return t
                }),
                gt: l(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        }) _.pseudos[x] = u(x);
        return f.prototype = _.filters = _.pseudos, _.setFilters = new f, k = e.tokenize = function(t, n) {
            var r, i, o, a, s, u, l, c = W[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = t, u = [], l = _.preFilter; s;) {
                (!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), s = s.slice(r.length));
                for (a in _.filter) !(i = de[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? e.error(t) : W(t, u).slice(0)
        }, T = e.compile = function(t, e) {
            var n, r = [],
                i = [],
                o = B[t + " "];
            if (!o) {
                for (e || (e = k(t)), n = e.length; n--;) o = y(e[n]), o[I] ? r.push(o) : i.push(o);
                o = B(t, b(i, r)), o.selector = t
            }
            return o
        }, C = e.select = function(t, e, n, r) {
            var i, o, a, s, u, l = "function" == typeof t && t,
                f = !r && k(t = l.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && O && _.relative[o[1].type]) {
                    if (e = (_.find.ID(a.matches[0].replace(we, _e), e) || [])[0], !e) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = de.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
                    if ((u = _.find[s]) && (r = u(a.matches[0].replace(we, _e), be.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && h(o), !t) return J.apply(n, r), n;
                        break
                    }
            }
            return (l || T(t, f))(r, e, !O, n, be.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = I.split("").sort(V).join("") === I, w.detectDuplicates = !!A, D(), w.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition($.createElement("div"))
        }), i(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(ee, function(t, e, n) {
            var r;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), e
    }(t);
    K.find = ie, K.expr = ie.selectors, K.expr[":"] = K.expr.pseudos, K.unique = ie.uniqueSort, K.text = ie.getText, K.isXMLDoc = ie.isXML, K.contains = ie.contains;
    var oe = K.expr.match.needsContext,
        ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        se = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? K.find.matchesSelector(r, t) ? [r] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, K.fn.extend({
        find: function(t) {
            var e, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                for (e = 0; n > e; e++)
                    if (K.contains(i[e], this)) return !0
            }));
            for (e = 0; n > e; e++) K.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && oe.test(t) ? K(t) : t || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ce = K.fn.init = function(t, e) {
            var n, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : le.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ue).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), ae.test(n[1]) && K.isPlainObject(e))
                        for (n in e) K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return r = G.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof ue.ready ? ue.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
        };
    ce.prototype = K.fn, ue = K(G);
    var fe = /^(?:parents|prev(?:Until|All))/,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.extend({
        dir: function(t, e, n) {
            for (var r = [], i = void 0 !== n;
                 (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && K(t).is(n)) break;
                    r.push(t)
                }
            return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), K.fn.extend({
        has: function(t) {
            var e = K(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (K.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? V.call(K(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return K.dir(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return K.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return K.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(n, r) {
            var i = K.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = K.filter(r, i)), this.length > 1 && (he[t] || K.unique(i), fe.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var pe = /\S+/g,
        de = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? de[t] || o(t) : K.extend({}, t);
        var e, n, r, i, a, s, u = [],
            l = !t.once && [],
            c = function(o) {
                for (e = t.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
                    if (u[s].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                r = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var n = u.length;
                        ! function o(e) {
                            K.each(e, function(e, n) {
                                var r = K.type(n);
                                "function" === r ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                            })
                        }(arguments), r ? a = u.length : e && (i = n, c(e))
                    }
                    return this
                },
                remove: function() {
                    return u && K.each(arguments, function(t, e) {
                        for (var n;
                             (n = K.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
                    }), this
                },
                has: function(t) {
                    return t ? K.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = l = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, e || f.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, e) {
                    return !u || n && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? l.push(e) : c(e)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return f
    }, K.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return K.Deferred(function(n) {
                            K.each(e, function(e, o) {
                                var a = K.isFunction(t[e]) && t[e];
                                i[o[1]](function() {
                                    var t = a && a.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? K.extend(t, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, K.each(e, function(t, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), t && t.call(i, i), i
        },
        when: function(t) {
            var e, n, r, i = 0,
                o = U.call(arguments),
                a = o.length,
                s = 1 !== a || t && K.isFunction(t.promise) ? a : 0,
                u = 1 === s ? t : K.Deferred(),
                l = function(t, n, r) {
                    return function(i) {
                        n[t] = this, r[t] = arguments.length > 1 ? U.call(arguments) : i, r === e ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, e)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    });
    var ge;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t), this
    }, K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (ge.resolveWith(G, [K]), K.fn.triggerHandler && (K(G).triggerHandler("ready"), K(G).off("ready"))))
        }
    }), K.ready.promise = function(e) {
        return ge || (ge = K.Deferred(), "complete" === G.readyState ? setTimeout(K.ready) : (G.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), ge.promise(e)
    }, K.ready.promise();
    var ve = K.access = function(t, e, n, r, i, o, a) {
        var s = 0,
            u = t.length,
            l = null == n;
        if ("object" === K.type(n)) {
            i = !0;
            for (s in n) K.access(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, K.isFunction(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
            return l.call(K(t), n)
        })), e))
            for (; u > s; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    };
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, s.uid = 1, s.accepts = K.acceptData, s.prototype = {
        key: function(t) {
            if (!s.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (r) {
                    e[this.expando] = n, K.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var r, i = this.key(t),
                o = this.cache[i];
            if ("string" == typeof e) o[e] = n;
            else if (K.isEmptyObject(o)) K.extend(this.cache[i], e);
            else
                for (r in e) o[r] = e[r];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e), void 0 !== r ? r : this.get(t, K.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = this.key(t),
                a = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                K.isArray(e) ? r = e.concat(e.map(K.camelCase)) : (i = K.camelCase(e), e in a ? r = [e, i] : (r = i, r = r in a ? [r] : r.match(pe) || [])), n = r.length;
                for (; n--;) delete a[r[n]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var me = new s,
        ye = new s,
        be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xe = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return ye.hasData(t) || me.hasData(t)
        },
        data: function(t, e, n) {
            return ye.access(t, e, n)
        },
        removeData: function(t, e) {
            ye.remove(t, e)
        },
        _data: function(t, e, n) {
            return me.access(t, e, n)
        },
        _removeData: function(t, e) {
            me.remove(t, e)
        }
    }), K.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = ye.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = K.camelCase(r.slice(5)), u(o, r, i[r])));
                    me.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                ye.set(this, t)
            }) : ve(this, function(e) {
                var n, r = K.camelCase(t);
                if (o && void 0 === e) {
                    if (n = ye.get(o, t), void 0 !== n) return n;
                    if (n = ye.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else this.each(function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && ye.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                ye.remove(this, t)
            })
        }
    }), K.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = me.get(t, e), n && (!r || K.isArray(n) ? r = me.access(t, e, K.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = K.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = K._queueHooks(t, e),
                a = function() {
                    K.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return me.get(t, n) || me.access(t, n, {
                empty: K.Callbacks("once memory").add(function() {
                    me.remove(t, [e + "queue", n])
                })
            })
        }
    }), K.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = K.queue(this, t, e);
                K._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                i = K.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = me.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(e)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _e = ["Top", "Right", "Bottom", "Left"],
        Se = function(t, e) {
            return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
        },
        Me = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = G.createDocumentFragment(),
            e = t.appendChild(G.createElement("div")),
            n = G.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Z.focusinBubbles = "onfocusin" in t;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu)|click/,
        Ee = /^(?:focusinfocus|focusoutblur)$/,
        Ne = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, h, p, d, g, v = me.get(t);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = K.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return typeof K !== ke && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(pe) || [""], l = e.length; l--;) s = Ne.exec(e[l]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p && (f = K.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = K.event.special[p] || {}, c = K.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && K.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (h = u[p]) || (h = u[p] = [], h.delegateCount = 0, f.setup && f.setup.call(t, r, d, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), K.event.global[p] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, h, p, d, g, v = me.hasData(t) && me.get(t);
            if (v && (u = v.events)) {
                for (e = (e || "").match(pe) || [""], l = e.length; l--;)
                    if (s = Ne.exec(e[l]) || [], p = g = s[1], d = (s[2] || "").split(".").sort(), p) {
                        for (f = K.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(t, c));
                        a && !h.length && (f.teardown && f.teardown.call(t, d, v.handle) !== !1 || K.removeEvent(t, p, v.handle), delete u[p])
                    } else
                        for (p in u) K.event.remove(t, p + e[l], n, r, !0);
                K.isEmptyObject(u) && (delete v.handle, me.remove(t, "events"))
            }
        },
        trigger: function(e, n, r, i) {
            var o, a, s, u, l, c, f, h = [r || G],
                p = Q.call(e, "type") ? e.type : e,
                d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Ee.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), l = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : K.makeArray(n, [e]), f = K.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || p, Ee.test(u + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                    s === (r.ownerDocument || G) && h.push(s.defaultView || s.parentWindow || t)
                }
                for (o = 0;
                     (a = h[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? u : f.bindType || p, c = (me.get(a, "events") || {})[e.type] && me.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && K.acceptData(a) && (e.result = c.apply(a, n), e.result === !1 && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !K.acceptData(r) || l && K.isFunction(r[p]) && !K.isWindow(r) && (s = r[l], s && (r[l] = null), K.event.triggered = p, r[p](), K.event.triggered = void 0, s && (r[l] = s)), e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, r, i, o, a = [],
                s = U.call(arguments),
                u = (me.get(this, "events") || {})[t.type] || [],
                l = K.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (a = K.event.handlers.call(this, t, u), e = 0;
                     (i = a[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                         (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, a = [],
                s = e.delegateCount,
                u = t.target;
            if (s && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (r = [], n = 0; s > n; n++) o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G, r = n.documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[K.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ce.test(i) ? this.mouseHooks : Te.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new K.Event(o), e = r.length; e--;) n = r[e], t[n] = o[n];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, r) {
            var i = K.extend(new K.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, e) : K.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, K.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
    }, K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this,
                    i = t.relatedTarget,
                    o = t.handleObj;
                return (!i || i !== r && !K.contains(r, i)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), Z.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = me.access(r, e);
                i || r.addEventListener(t, n, !0), me.access(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = me.access(r, e) - 1;
                i ? me.access(r, e, i) : (r.removeEventListener(t, n, !0), me.remove(r, e))
            }
        }
    }), K.fn.extend({
        on: function(t, e, n, r, i) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (a in t) this.on(a, e, n, t[a], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = c;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(t) {
                return K().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                K.event.add(this, t, r, n, e)
            })
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, K(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, e, t[i]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = c), this.each(function() {
                K.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? K.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        De = /<([\w:]+)/,
        $e = /<|&#?\w+;/,
        Pe = /<(?:script|style|link)/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^$|\/(?:java|ecma)script/i,
        Le = /^true\/(.*)/,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, K.extend({
        clone: function(t, e, n) {
            var r, i, o, a, s = t.cloneNode(!0),
                u = K.contains(t.ownerDocument, t);
            if (!(Z.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (a = m(s), o = m(t), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
            if (e)
                if (n)
                    for (o = o || m(t), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
                else v(t, s);
            return a = m(s, "script"), a.length > 0 && g(a, !u && m(t, "script")), s
        },
        buildFragment: function(t, e, n, r) {
            for (var i, o, a, s, u, l, c = e.createDocumentFragment(), f = [], h = 0, p = t.length; p > h; h++)
                if (i = t[h], i || 0 === i)
                    if ("object" === K.type(i)) K.merge(f, i.nodeType ? [i] : i);
                    else if ($e.test(i)) {
                        for (o = o || c.appendChild(e.createElement("div")), a = (De.exec(i) || ["", ""])[1].toLowerCase(), s = qe[a] || qe._default, o.innerHTML = s[1] + i.replace(Ae, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                        K.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
                    } else f.push(e.createTextNode(i));
            for (c.textContent = "", h = 0; i = f[h++];)
                if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), u && g(o), n))
                    for (l = 0; i = o[l++];) je.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(t) {
            for (var e, n, r, i, o = K.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                if (K.acceptData(n) && (i = n[me.expando], i && (e = me.cache[i]))) {
                    if (e.events)
                        for (r in e.events) o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, e.handle);
                    me.cache[i] && delete me.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }), K.fn.extend({
        text: function(t) {
            return ve(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, r = t ? K.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || K.cleanData(m(n)), n.parentNode && (e && K.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return ve(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Pe.test(t) && !qe[(De.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ae, "<$1></$2>");
                    try {
                        for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (K.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, K.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = W.apply([], t);
            var n, r, i, o, a, s, u = 0,
                l = this.length,
                c = this,
                f = l - 1,
                h = t[0],
                g = K.isFunction(h);
            if (g || l > 1 && "string" == typeof h && !Z.checkClone && Oe.test(h)) return this.each(function(n) {
                var r = c.eq(n);
                g && (t[0] = h.call(this, n, r.html())), r.domManip(t, e)
            });
            if (l && (n = K.buildFragment(t, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
                for (i = K.map(m(n, "script"), p), o = i.length; l > u; u++) a = n, u !== f && (a = K.clone(a, !0, !0), o && K.merge(i, m(a, "script"))), e.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument, K.map(i, d), u = 0; o > u; u++) a = i[u], je.test(a.type || "") && !me.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Re, "")))
            }
            return this
        }
    }), K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var n, r = [], i = K(t), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), K(i[a])[e](n), B.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ie, He = {},
        Fe = /^margin/,
        ze = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
        Ue = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
            var e = t.getComputedStyle(a, null);
            n = "1%" !== e.top, r = "4px" === e.width, i.removeChild(o)
        }
        var n, r, i = G.documentElement,
            o = G.createElement("div"),
            a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && K.extend(Z, {
            pixelPosition: function() {
                return e(), n
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), e
            }
        }))
    }(), K.swap = function(t, e, n, r) {
        var i, o, a = {};
        for (o in e) a[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e) t.style[o] = a[o];
        return i
    };
    var We = /^(none|table(?!-c[ea]).+)/,
        Be = new RegExp("^(" + we + ")(.*)$", "i"),
        Ve = new RegExp("^([+-])=(" + we + ")", "i"),
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qe = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = w(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, a, s = K.camelCase(e),
                    u = t.style;
                return e = K.cssProps[s] || (K.cssProps[s] = S(u, s)), a = K.cssHooks[e] || K.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Ve.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || K.cssNumber[s] || (n += "px"), Z.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
            }
        },
        css: function(t, e, n, r) {
            var i, o, a, s = K.camelCase(e);
            return e = K.cssProps[s] || (K.cssProps[s] = S(t.style, s)), a = K.cssHooks[e] || K.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = w(t, e, r)), "normal" === i && e in Xe && (i = Xe[e]), "" === n || n ? (o = parseFloat(i), n === !0 || K.isNumeric(o) ? o || 0 : i) : i
        }
    }), K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? We.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Ye, function() {
                    return T(t, e, r)
                }) : T(t, e, r) : void 0
            },
            set: function(t, n, r) {
                var i = r && Ue(t);
                return M(t, n, r ? k(t, e, r, "border-box" === K.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), K.cssHooks.marginRight = _(Z.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, w, [t, "marginRight"]) : void 0
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + _e[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Fe.test(t) || (K.cssHooks[t + e].set = M)
    }), K.fn.extend({
        css: function(t, e) {
            return ve(this, function(t, e, n) {
                var r, i, o = {},
                    a = 0;
                if (K.isArray(e)) {
                    for (r = Ue(t), i = e.length; i > a; a++) o[e[a]] = K.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Se(this) ? K(this).show() : K(this).hide()
            })
        }
    }), K.Tween = E, E.prototype = {
        constructor: E,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = E.propHooks[this.prop];
            return t && t.get ? t.get(this) : E.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = E.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, K.fx = E.prototype.init, K.fx.step = {};
    var Ze, Ge, Je = /^(?:toggle|show|hide)$/,
        Ke = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
        tn = /queueHooks$/,
        en = [$],
        nn = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    r = n.cur(),
                    i = Ke.exec(e),
                    o = i && i[3] || (K.cssNumber[t] ? "" : "px"),
                    a = (K.cssNumber[t] || "px" !== o && +r) && Ke.exec(K.css(n.elem, t)),
                    s = 1,
                    u = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do s = s || ".5", a /= s, K.style(n.elem, t, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    K.Animation = K.extend(O, {
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; i > r; r++) n = t[r], nn[n] = nn[n] || [], nn[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? en.unshift(t) : en.push(t)
        }
    }), K.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? K.extend({}, t) : {
            complete: n || !n && e || K.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !K.isFunction(e) && e
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
        }, r
    }, K.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Se).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = K.isEmptyObject(t),
                o = K.speed(e, n, r),
                a = function() {
                    var e = O(this, K.extend({}, t), o);
                    (i || me.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = K.timers,
                    a = me.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && tn.test(i) && r(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                (e || !n) && K.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = me.get(this),
                    r = n[t + "queue"],
                    i = n[t + "queueHooks"],
                    o = K.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, K.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; a > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }), K.each(["toggle", "show", "hide"], function(t, e) {
        var n = K.fn[e];
        K.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(A(e, !0), t, r, i)
        }
    }), K.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        K.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }), K.timers = [], K.fx.tick = function() {
        var t, e = 0,
            n = K.timers;
        for (Ze = K.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || K.fx.stop(), Ze = void 0
    }, K.fx.timer = function(t) {
        K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
    }, K.fx.interval = 13, K.fx.start = function() {
        Ge || (Ge = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.stop = function() {
        clearInterval(Ge), Ge = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fn.delay = function(t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var r = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    },
        function() {
            var t = G.createElement("input"),
                e = G.createElement("select"),
                n = e.appendChild(G.createElement("option"));
            t.type = "checkbox", Z.checkOn = "" !== t.value, Z.optSelected = n.selected, e.disabled = !0, Z.optDisabled = !n.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", Z.radioValue = "t" === t.value
        }();
    var rn, on, an = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return ve(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }), K.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === ke ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), r = K.attrHooks[e] || (K.expr.match.bool.test(e) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = K.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
                o = e && e.match(pe);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = K.propFix[n] || n, K.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Z.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), on = {
        set: function(t, e, n) {
            return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = an[e] || K.find.attr;
        an[e] = function(t, e, r) {
            var i, o;
            return r || (o = an[e], an[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, an[e] = o), i
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return ve(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }), K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var r, i, o, a = t.nodeType;
            if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, i = K.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || sn.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Z.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var un = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s = "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).addClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(pe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r), n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t,
                u = 0,
                l = this.length;
            if (K.isFunction(t)) return this.each(function(e) {
                K(this).removeClass(t.call(this, e, this.className))
            });
            if (s)
                for (e = (t || "").match(pe) || []; l > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
                        for (o = 0; i = e[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = t ? K.trim(r) : "", n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, r = 0, i = K(this), o = t.match(pe) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else(n === ke || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : me.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var ln = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0]; {
                if (arguments.length) return r = K.isFunction(t), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? t.call(this, n, K(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, function(t) {
                        return null == t ? "" : t + ""
                    })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                });
                if (i) return e = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
                        if (n = r[u], !(!n.selected && u !== i || (Z.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                            if (e = K(n).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = K.makeArray(e), a = i.length; a--;) r = i[a], (r.selected = K.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        }, Z.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var cn = K.now(),
        fn = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, K.parseXML = function(t) {
        var e, n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new DOMParser, e = n.parseFromString(t, "text/xml")
        } catch (r) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t), e
    };
    var hn = /#.*$/,
        pn = /([?&])_=[^&]*/,
        dn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        gn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        yn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        bn = {},
        xn = {},
        wn = "*/".concat("*"),
        _n = t.location.href,
        Sn = yn.exec(_n.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _n,
            type: "GET",
            isLocal: gn.test(Sn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? R(R(t, K.ajaxSettings), e) : R(K.ajaxSettings, t)
        },
        ajaxPrefilter: j(bn),
        ajaxTransport: j(xn),
        ajax: function(t, e) {
            function n(t, e, n, a) {
                var u, c, m, y, x, _ = e;
                2 !== b && (b = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (y = q(f, w, n)), y = I(f, y, w, u), u ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (K.lastModified[i] = x), x = w.getResponseHeader("etag"), x && (K.etag[i] = x)), 204 === t || "HEAD" === f.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = y.state, c = y.data, m = y.error, u = !m)) : (m = _, (t || !_) && (_ = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || _) + "", u ? d.resolveWith(h, [c, _, w]) : d.rejectWith(h, [w, _, m]), w.statusCode(v), v = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : m]), g.fireWith(h, [w, _]), l && (p.trigger("ajaxComplete", [w, f]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var r, i, o, a, s, u, l, c, f = K.ajaxSetup({}, e),
                h = f.context || f,
                p = f.context && (h.nodeType || h.jquery) ? K(h) : K.event,
                d = K.Deferred(),
                g = K.Callbacks("once memory"),
                v = f.statusCode || {},
                m = {},
                y = {},
                b = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; e = dn.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, m[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return r && r.abort(e), n(0, e), this
                    }
                };
            if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((t || f.url || _n) + "").replace(hn, "").replace(mn, Sn[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (u = yn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === Sn[1] && u[2] === Sn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Sn[3] || ("http:" === Sn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)), L(bn, f, e, w), 2 === b) return w;
            l = K.event && f.global, l && 0 === K.active++ && K.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = pn.test(i) ? i.replace(pn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (K.lastModified[i] && w.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && w.setRequestHeader("If-None-Match", K.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, w, f) === !1 || 2 === b)) return w.abort();
            x = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            }) w[c](f[c]);
            if (r = L(xn, f, e, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, r.send(m, n)
                } catch (_) {
                    if (!(2 > b)) throw _;
                    n(-1, _)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }), K.each(["get", "post"], function(t, e) {
        K[e] = function(t, n, r, i) {
            return K.isFunction(n) && (i = i || r, r = n, n = void 0), K.ajax({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            } : function() {
                var e = K(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(n) {
                K(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }), K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    };
    var Mn = /%20/g,
        kn = /\[\]$/,
        Tn = /\r?\n/g,
        Cn = /^(?:submit|button|image|reset|file)$/i,
        En = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, r = [],
            i = function(t, e) {
                e = K.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
            i(this.name, this.value)
        });
        else
            for (n in t) H(n, t[n], e, i);
        return r.join("&").replace(Mn, "+")
    }, K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && En.test(this.nodeName) && !Cn.test(t) && (this.checked || !Me.test(t))
            }).map(function(t, e) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Tn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Tn, "\r\n")
                }
            }).get()
        }
    }), K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Nn = 0,
        An = {},
        Dn = {
            0: 200,
            1223: 204
        },
        $n = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in An) An[t]()
    }), Z.cors = !!$n && "withCredentials" in $n, Z.ajax = $n = !!$n, K.ajaxTransport(function(t) {
        var e;
        return Z.cors || $n && !t.crossDomain ? {
            send: function(n, r) {
                var i, o = t.xhr(),
                    a = ++Nn;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (i in t.xhrFields) o[i] = t.xhrFields[i];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) o.setRequestHeader(i, n[i]);
                e = function(t) {
                    return function() {
                        e && (delete An[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Dn[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = An[a] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (e) throw s
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t), t
            }
        }
    }), K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, i) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                    }), G.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Pn = [],
        On = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Pn.pop() || K.expando + "_" + cn++;
            return this[t] = !0, t
        }
    }), K.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, a, s = e.jsonp !== !1 && (On.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(On, "$1" + i) : e.jsonp !== !1 && (e.url += (fn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || K.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
            a = arguments
        }, r.always(function() {
            t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Pn.push(i)), a && K.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), K.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || G;
        var r = ae.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = K.buildFragment([t], e, i), i && i.length && K(i).remove(), K.merge([], r.childNodes))
    };
    var jn = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && jn) return jn.apply(this, arguments);
        var r, i, o, a = this,
            s = t.indexOf(" ");
        return s >= 0 && (r = K.trim(t.slice(s)), t = t.slice(0, s)), K.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && K.ajax({
            url: t,
            type: i,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(r ? K("<div>").append(K.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            a.each(n, o || [t.responseText, e, t])
        }), this
    }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Ln = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, a, s, u, l, c = K.css(t, "position"),
                f = K(t),
                h = {};
            "static" === c && (t.style.position = "relative"), s = f.offset(), o = K.css(t, "top"), u = K.css(t, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), K.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + i), "using" in e ? e.using.call(t, h) : f.css(h)
        }
    }, K.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                K.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            if (o) return e = o.documentElement, K.contains(e, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = F(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (r = t.offset()), r.top += K.css(t[0], "borderTopWidth", !0), r.left += K.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - K.css(n, "marginTop", !0),
                    left: e.left - r.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Ln; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                return t || Ln
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = "pageYOffset" === n;
        K.fn[e] = function(i) {
            return ve(this, function(e, i, o) {
                var a = F(e);
                return void 0 === o ? a ? a[n] : e[i] : void(a ? a.scrollTo(r ? t.pageXOffset : o, r ? o : t.pageYOffset) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = _(Z.pixelPosition, function(t, n) {
            return n ? (n = w(t, e), ze.test(n) ? K(t).position()[e] + "px" : n) : void 0
        })
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || i === !0 ? "margin" : "border");
                return ve(this, function(e, n, r) {
                    var i;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? K.css(e, n, a) : K.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }), K.fn.size = function() {
        return this.length
    }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Rn = t.jQuery,
        qn = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = qn), e && t.jQuery === K && (t.jQuery = Rn), K
    }, typeof e === ke && (t.jQuery = t.$ = K), K
}), ! function() {
    function t(t) {
        return t && (t.ownerDocument || t.document || t).documentElement
    }

    function e(t) {
        return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
    }

    function n(t, e) {
        return e > t ? -1 : t > e ? 1 : t >= e ? 0 : 0 / 0
    }

    function r(t) {
        return null === t ? 0 / 0 : +t
    }

    function i(t) {
        return !isNaN(t)
    }

    function o(t) {
        return {
            left: function(e, n, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
                    var o = r + i >>> 1;
                    t(e[o], n) < 0 ? r = o + 1 : i = o
                }
                return r
            },
            right: function(e, n, r, i) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); i > r;) {
                    var o = r + i >>> 1;
                    t(e[o], n) > 0 ? i = o : r = o + 1
                }
                return r
            }
        }
    }

    function a(t) {
        return t.length
    }

    function s(t) {
        for (var e = 1; t * e % 1;) e *= 10;
        return e
    }

    function u(t, e) {
        for (var n in e) Object.defineProperty(t.prototype, n, {
            value: e[n],
            enumerable: !1
        })
    }

    function l() {
        this._ = Object.create(null)
    }

    function c(t) {
        return (t += "") === gs || t[0] === vs ? vs + t : t
    }

    function f(t) {
        return (t += "")[0] === vs ? t.slice(1) : t
    }

    function h(t) {
        return c(t) in this._
    }

    function p(t) {
        return (t = c(t)) in this._ && delete this._[t]
    }

    function d() {
        var t = [];
        for (var e in this._) t.push(f(e));
        return t
    }

    function g() {
        var t = 0;
        for (var e in this._) ++t;
        return t
    }

    function v() {
        for (var t in this._) return !1;
        return !0
    }

    function m() {
        this._ = Object.create(null)
    }

    function y(t) {
        return t
    }

    function b(t, e, n) {
        return function() {
            var r = n.apply(e, arguments);
            return r === e ? t : r
        }
    }

    function x(t, e) {
        if (e in t) return e;
        e = e.charAt(0).toUpperCase() + e.slice(1);
        for (var n = 0, r = ms.length; r > n; ++n) {
            var i = ms[n] + e;
            if (i in t) return i
        }
    }

    function w() {}

    function _() {}

    function S(t) {
        function e() {
            for (var e, r = n, i = -1, o = r.length; ++i < o;)(e = r[i].on) && e.apply(this, arguments);
            return t
        }
        var n = [],
            r = new l;
        return e.on = function(e, i) {
            var o, a = r.get(e);
            return arguments.length < 2 ? a && a.on : (a && (a.on = null, n = n.slice(0, o = n.indexOf(a)).concat(n.slice(o + 1)), r.remove(e)), i && n.push(r.set(e, {
                on: i
            })), t)
        }, e
    }

    function M() {
        ns.event.preventDefault()
    }

    function k() {
        for (var t, e = ns.event; t = e.sourceEvent;) e = t;
        return e
    }

    function T(t) {
        for (var e = new _, n = 0, r = arguments.length; ++n < r;) e[arguments[n]] = S(e);
        return e.of = function(n, r) {
            return function(i) {
                try {
                    var o = i.sourceEvent = ns.event;
                    i.target = t, ns.event = i, e[i.type].apply(n, r)
                } finally {
                    ns.event = o
                }
            }
        }, e
    }

    function C(t) {
        return bs(t, Ss), t
    }

    function E(t) {
        return "function" == typeof t ? t : function() {
            return xs(t, this)
        }
    }

    function N(t) {
        return "function" == typeof t ? t : function() {
            return ws(t, this)
        }
    }

    function A(t, e) {
        function n() {
            this.removeAttribute(t)
        }

        function r() {
            this.removeAttributeNS(t.space, t.local)
        }

        function i() {
            this.setAttribute(t, e)
        }

        function o() {
            this.setAttributeNS(t.space, t.local, e)
        }

        function a() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
        }

        function s() {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
        }
        return t = ns.ns.qualify(t), null == e ? t.local ? r : n : "function" == typeof e ? t.local ? s : a : t.local ? o : i
    }

    function D(t) {
        return t.trim().replace(/\s+/g, " ")
    }

    function $(t) {
        return new RegExp("(?:^|\\s+)" + ns.requote(t) + "(?:\\s+|$)", "g")
    }

    function P(t) {
        return (t + "").trim().split(/^|\s+/)
    }

    function O(t, e) {
        function n() {
            for (var n = -1; ++n < i;) t[n](this, e)
        }

        function r() {
            for (var n = -1, r = e.apply(this, arguments); ++n < i;) t[n](this, r)
        }
        t = P(t).map(j);
        var i = t.length;
        return "function" == typeof e ? r : n
    }

    function j(t) {
        var e = $(t);
        return function(n, r) {
            if (i = n.classList) return r ? i.add(t) : i.remove(t);
            var i = n.getAttribute("class") || "";
            r ? (e.lastIndex = 0, e.test(i) || n.setAttribute("class", D(i + " " + t))) : n.setAttribute("class", D(i.replace(e, " ")))
        }
    }

    function L(t, e, n) {
        function r() {
            this.style.removeProperty(t)
        }

        function i() {
            this.style.setProperty(t, e, n)
        }

        function o() {
            var r = e.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
        }
        return null == e ? r : "function" == typeof e ? o : i
    }

    function R(t, e) {
        function n() {
            delete this[t]
        }

        function r() {
            this[t] = e
        }

        function i() {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : this[t] = n
        }
        return null == e ? n : "function" == typeof e ? i : r
    }

    function q(t) {
        function e() {
            var e = this.ownerDocument,
                n = this.namespaceURI;
            return n ? e.createElementNS(n, t) : e.createElement(t)
        }

        function n() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        }
        return "function" == typeof t ? t : (t = ns.ns.qualify(t)).local ? n : e
    }

    function I() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function H(t) {
        return {
            __data__: t
        }
    }

    function F(t) {
        return function() {
            return _s(this, t)
        }
    }

    function z(t) {
        return arguments.length || (t = n),
            function(e, n) {
                return e && n ? t(e.__data__, n.__data__) : !e - !n
            }
    }

    function U(t, e) {
        for (var n = 0, r = t.length; r > n; n++)
            for (var i, o = t[n], a = 0, s = o.length; s > a; a++)(i = o[a]) && e(i, a, n);
        return t
    }

    function W(t) {
        return bs(t, ks), t
    }

    function B(t) {
        var e, n;
        return function(r, i, o) {
            var a, s = t[o].update,
                u = s.length;
            for (o != n && (n = o, e = 0), i >= e && (e = i + 1); !(a = s[e]) && ++e < u;);
            return a
        }
    }

    function V(t, e, n) {
        function r() {
            var e = this[a];
            e && (this.removeEventListener(t, e, e.$), delete this[a])
        }

        function i() {
            var i = u(e, is(arguments));
            r.call(this), this.addEventListener(t, this[a] = i, i.$ = n), i._ = e
        }

        function o() {
            var e, n = new RegExp("^__on([^.]+)" + ns.requote(t) + "$");
            for (var r in this)
                if (e = r.match(n)) {
                    var i = this[r];
                    this.removeEventListener(e[1], i, i.$), delete this[r]
                }
        }
        var a = "__on" + t,
            s = t.indexOf("."),
            u = Y;
        s > 0 && (t = t.slice(0, s));
        var l = Ts.get(t);
        return l && (t = l, u = X), s ? e ? i : r : e ? w : o
    }

    function Y(t, e) {
        return function(n) {
            var r = ns.event;
            ns.event = n, e[0] = this.__data__;
            try {
                t.apply(this, e)
            } finally {
                ns.event = r
            }
        }
    }

    function X(t, e) {
        var n = Y(t, e);
        return function(t) {
            var e = this,
                r = t.relatedTarget;
            r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
        }
    }

    function Q(n) {
        var r = ".dragsuppress-" + ++Es,
            i = "click" + r,
            o = ns.select(e(n)).on("touchmove" + r, M).on("dragstart" + r, M).on("selectstart" + r, M);
        if (null == Cs && (Cs = "onselectstart" in n ? !1 : x(n.style, "userSelect")), Cs) {
            var a = t(n).style,
                s = a[Cs];
            a[Cs] = "none"
        }
        return function(t) {
            if (o.on(r, null), Cs && (a[Cs] = s), t) {
                var e = function() {
                    o.on(i, null)
                };
                o.on(i, function() {
                    M(), e()
                }, !0), setTimeout(e, 0)
            }
        }
    }

    function Z(t, n) {
        n.changedTouches && (n = n.changedTouches[0]);
        var r = t.ownerSVGElement || t;
        if (r.createSVGPoint) {
            var i = r.createSVGPoint();
            if (0 > Ns) {
                var o = e(t);
                if (o.scrollX || o.scrollY) {
                    r = ns.select("body").append("svg").style({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        margin: 0,
                        padding: 0,
                        border: "none"
                    }, "important");
                    var a = r[0][0].getScreenCTM();
                    Ns = !(a.f || a.e), r.remove()
                }
            }
            return Ns ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y]
        }
        var s = t.getBoundingClientRect();
        return [n.clientX - s.left - t.clientLeft, n.clientY - s.top - t.clientTop]
    }

    function G() {
        return ns.event.changedTouches[0].identifier
    }

    function J(t) {
        return t > 0 ? 1 : 0 > t ? -1 : 0
    }

    function K(t, e, n) {
        return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
    }

    function te(t) {
        return t > 1 ? 0 : -1 > t ? $s : Math.acos(t)
    }

    function ee(t) {
        return t > 1 ? js : -1 > t ? -js : Math.asin(t)
    }

    function ne(t) {
        return ((t = Math.exp(t)) - 1 / t) / 2
    }

    function re(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function ie(t) {
        return ((t = Math.exp(2 * t)) - 1) / (t + 1)
    }

    function oe(t) {
        return (t = Math.sin(t / 2)) * t
    }

    function ae() {}

    function se(t, e, n) {
        return this instanceof se ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof se ? new se(t.h, t.s, t.l) : we("" + t, _e, se) : new se(t, e, n)
    }

    function ue(t, e, n) {
        function r(t) {
            return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? o + (a - o) * t / 60 : 180 > t ? a : 240 > t ? o + (a - o) * (240 - t) / 60 : o
        }

        function i(t) {
            return Math.round(255 * r(t))
        }
        var o, a;
        return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) ? 0 : 0 > e ? 0 : e > 1 ? 1 : e, n = 0 > n ? 0 : n > 1 ? 1 : n, a = .5 >= n ? n * (1 + e) : n + e - n * e, o = 2 * n - a, new me(i(t + 120), i(t), i(t - 120))
    }

    function le(t, e, n) {
        return this instanceof le ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof le ? new le(t.h, t.c, t.l) : t instanceof fe ? pe(t.l, t.a, t.b) : pe((t = Se((t = ns.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new le(t, e, n)
    }

    function ce(t, e, n) {
        return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new fe(n, Math.cos(t *= Ls) * e, Math.sin(t) * e)
    }

    function fe(t, e, n) {
        return this instanceof fe ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof fe ? new fe(t.l, t.a, t.b) : t instanceof le ? ce(t.h, t.c, t.l) : Se((t = me(t)).r, t.g, t.b) : new fe(t, e, n)
    }

    function he(t, e, n) {
        var r = (t + 16) / 116,
            i = r + e / 500,
            o = r - n / 200;
        return i = de(i) * Ys, r = de(r) * Xs, o = de(o) * Qs, new me(ve(3.2404542 * i - 1.5371385 * r - .4985314 * o), ve(-.969266 * i + 1.8760108 * r + .041556 * o), ve(.0556434 * i - .2040259 * r + 1.0572252 * o))
    }

    function pe(t, e, n) {
        return t > 0 ? new le(Math.atan2(n, e) * Rs, Math.sqrt(e * e + n * n), t) : new le(0 / 0, 0 / 0, t)
    }

    function de(t) {
        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
    }

    function ge(t) {
        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
    }

    function ve(t) {
        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
    }

    function me(t, e, n) {
        return this instanceof me ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof me ? new me(t.r, t.g, t.b) : we("" + t, me, ue) : new me(t, e, n)
    }

    function ye(t) {
        return new me(t >> 16, t >> 8 & 255, 255 & t)
    }

    function be(t) {
        return ye(t) + ""
    }

    function xe(t) {
        return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
    }

    function we(t, e, n) {
        var r, i, o, a = 0,
            s = 0,
            u = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (i = r[2].split(","), r[1]) {
            case "hsl":
                return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case "rgb":
                return e(ke(i[0]), ke(i[1]), ke(i[2]))
        }
        return (o = Js.get(t.toLowerCase())) ? e(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a = a >> 4 | a, s = 240 & o, s = s >> 4 | s, u = 15 & o, u = u << 4 | u) : 7 === t.length && (a = (16711680 & o) >> 16, s = (65280 & o) >> 8, u = 255 & o)), e(a, s, u))
    }

    function _e(t, e, n) {
        var r, i, o = Math.min(t /= 255, e /= 255, n /= 255),
            a = Math.max(t, e, n),
            s = a - o,
            u = (a + o) / 2;
        return s ? (i = .5 > u ? s / (a + o) : s / (2 - a - o), r = t == a ? (e - n) / s + (n > e ? 6 : 0) : e == a ? (n - t) / s + 2 : (t - e) / s + 4, r *= 60) : (r = 0 / 0, i = u > 0 && 1 > u ? 0 : r), new se(r, i, u)
    }

    function Se(t, e, n) {
        t = Me(t), e = Me(e), n = Me(n);
        var r = ge((.4124564 * t + .3575761 * e + .1804375 * n) / Ys),
            i = ge((.2126729 * t + .7151522 * e + .072175 * n) / Xs),
            o = ge((.0193339 * t + .119192 * e + .9503041 * n) / Qs);
        return fe(116 * i - 16, 500 * (r - i), 200 * (i - o))
    }

    function Me(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function ke(t) {
        var e = parseFloat(t);
        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
    }

    function Te(t) {
        return "function" == typeof t ? t : function() {
            return t
        }
    }

    function Ce(t) {
        return function(e, n, r) {
            return 2 === arguments.length && "function" == typeof n && (r = n, n = null), Ee(e, n, t, r)
        }
    }

    function Ee(t, e, n, r) {
        function i() {
            var t, e = u.status;
            if (!e && Ae(u) || e >= 200 && 300 > e || 304 === e) {
                try {
                    t = n.call(o, u)
                } catch (r) {
                    return void a.error.call(o, r)
                }
                a.load.call(o, t)
            } else a.error.call(o, u)
        }
        var o = {},
            a = ns.dispatch("beforesend", "progress", "load", "error"),
            s = {},
            u = new XMLHttpRequest,
            l = null;
        return !this.XDomainRequest || "withCredentials" in u || !/^(http(s)?:)?\/\//.test(t) || (u = new XDomainRequest), "onload" in u ? u.onload = u.onerror = i : u.onreadystatechange = function() {
            u.readyState > 3 && i()
        }, u.onprogress = function(t) {
            var e = ns.event;
            ns.event = t;
            try {
                a.progress.call(o, u)
            } finally {
                ns.event = e
            }
        }, o.header = function(t, e) {
            return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == e ? delete s[t] : s[t] = e + "", o)
        }, o.mimeType = function(t) {
            return arguments.length ? (e = null == t ? null : t + "", o) : e
        }, o.responseType = function(t) {
            return arguments.length ? (l = t, o) : l
        }, o.response = function(t) {
            return n = t, o
        }, ["get", "post"].forEach(function(t) {
            o[t] = function() {
                return o.send.apply(o, [t].concat(is(arguments)))
            }
        }), o.send = function(n, r, i) {
            if (2 === arguments.length && "function" == typeof r && (i = r, r = null), u.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*"), u.setRequestHeader)
                for (var c in s) u.setRequestHeader(c, s[c]);
            return null != e && u.overrideMimeType && u.overrideMimeType(e), null != l && (u.responseType = l), null != i && o.on("error", i).on("load", function(t) {
                i(null, t)
            }), a.beforesend.call(o, u), u.send(null == r ? null : r), o
        }, o.abort = function() {
            return u.abort(), o
        }, ns.rebind(o, a, "on"), null == r ? o : o.get(Ne(r))
    }

    function Ne(t) {
        return 1 === t.length ? function(e, n) {
            t(null == e ? n : null)
        } : t
    }

    function Ae(t) {
        var e = t.responseType;
        return e && "text" !== e ? t.response : t.responseText
    }

    function De() {
        var t = $e(),
            e = Pe() - t;
        e > 24 ? (isFinite(e) && (clearTimeout(nu), nu = setTimeout(De, e)), eu = 0) : (eu = 1, iu(De))
    }

    function $e() {
        var t = Date.now();
        for (ru = Ks; ru;) t >= ru.t && (ru.f = ru.c(t - ru.t)), ru = ru.n;
        return t
    }

    function Pe() {
        for (var t, e = Ks, n = 1 / 0; e;) e.f ? e = t ? t.n = e.n : Ks = e.n : (e.t < n && (n = e.t), e = (t = e).n);
        return tu = t, n
    }

    function Oe(t, e) {
        return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
    }

    function je(t, e) {
        var n = Math.pow(10, 3 * ds(8 - e));
        return {
            scale: e > 8 ? function(t) {
                return t / n
            } : function(t) {
                return t * n
            },
            symbol: t
        }
    }

    function Le(t) {
        var e = t.decimal,
            n = t.thousands,
            r = t.grouping,
            i = t.currency,
            o = r && n ? function(t, e) {
                for (var i = t.length, o = [], a = 0, s = r[0], u = 0; i > 0 && s > 0 && (u + s + 1 > e && (s = Math.max(1, e - u)), o.push(t.substring(i -= s, i + s)), !((u += s + 1) > e));) s = r[a = (a + 1) % r.length];
                return o.reverse().join(n)
            } : y;
        return function(t) {
            var n = au.exec(t),
                r = n[1] || " ",
                a = n[2] || ">",
                s = n[3] || "-",
                u = n[4] || "",
                l = n[5],
                c = +n[6],
                f = n[7],
                h = n[8],
                p = n[9],
                d = 1,
                g = "",
                v = "",
                m = !1,
                y = !0;
            switch (h && (h = +h.substring(1)), (l || "0" === r && "=" === a) && (l = r = "0", a = "="), p) {
                case "n":
                    f = !0, p = "g";
                    break;
                case "%":
                    d = 100, v = "%", p = "f";
                    break;
                case "p":
                    d = 100, v = "%", p = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === u && (g = "0" + p.toLowerCase());
                case "c":
                    y = !1;
                case "d":
                    m = !0, h = 0;
                    break;
                case "s":
                    d = -1, p = "r"
            }
            "$" === u && (g = i[0], v = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : ("e" == p || "f" == p) && (h = Math.max(0, Math.min(20, h)))), p = su.get(p) || Re;
            var b = l && f;
            return function(t) {
                var n = v;
                if (m && t % 1) return "";
                var i = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === s ? "" : s;
                if (0 > d) {
                    var u = ns.formatPrefix(t, h);
                    t = u.scale(t), n = u.symbol + v
                } else t *= d;
                t = p(t, h);
                var x, w, _ = t.lastIndexOf(".");
                if (0 > _) {
                    var S = y ? t.lastIndexOf("e") : -1;
                    0 > S ? (x = t, w = "") : (x = t.substring(0, S), w = t.substring(S))
                } else x = t.substring(0, _), w = e + t.substring(_ + 1);
                !l && f && (x = o(x, 1 / 0));
                var M = g.length + x.length + w.length + (b ? 0 : i.length),
                    k = c > M ? new Array(M = c - M + 1).join(r) : "";
                return b && (x = o(k + x, k.length ? c - w.length : 1 / 0)), i += g, t = x + w, ("<" === a ? i + t + k : ">" === a ? k + i + t : "^" === a ? k.substring(0, M >>= 1) + i + t + k.substring(M) : i + (b ? t : k + t)) + n
            }
        }
    }

    function Re(t) {
        return t + ""
    }

    function qe() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ie(t, e, n) {
        function r(e) {
            var n = t(e),
                r = o(n, 1);
            return r - e > e - n ? n : r
        }

        function i(n) {
            return e(n = t(new lu(n - 1)), 1), n
        }

        function o(t, n) {
            return e(t = new lu(+t), n), t
        }

        function a(t, r, o) {
            var a = i(t),
                s = [];
            if (o > 1)
                for (; r > a;) n(a) % o || s.push(new Date(+a)), e(a, 1);
            else
                for (; r > a;) s.push(new Date(+a)), e(a, 1);
            return s
        }

        function s(t, e, n) {
            try {
                lu = qe;
                var r = new qe;
                return r._ = t, a(r, e, n)
            } finally {
                lu = Date
            }
        }
        t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a;
        var u = t.utc = He(t);
        return u.floor = u, u.round = He(r), u.ceil = He(i), u.offset = He(o), u.range = s, t
    }

    function He(t) {
        return function(e, n) {
            try {
                lu = qe;
                var r = new qe;
                return r._ = e, t(r, n)._
            } finally {
                lu = Date
            }
        }
    }

    function Fe(t) {
        function e(t) {
            function e(e) {
                for (var n, i, o, a = [], s = -1, u = 0; ++s < r;) 37 === t.charCodeAt(s) && (a.push(t.slice(u, s)), null != (i = fu[n = t.charAt(++s)]) && (n = t.charAt(++s)), (o = E[n]) && (n = o(e, null == i ? "e" === n ? " " : "0" : i)), a.push(n), u = s + 1);
                return a.push(t.slice(u, s)), a.join("")
            }
            var r = t.length;
            return e.parse = function(e) {
                var r = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    i = n(r, t, e, 0);
                if (i != e.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var o = null != r.Z && lu !== qe,
                    a = new(o ? qe : lu);
                return "j" in r ? a.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), o ? a._ : a
            }, e.toString = function() {
                return t
            }, e
        }

        function n(t, e, n, r) {
            for (var i, o, a, s = 0, u = e.length, l = n.length; u > s;) {
                if (r >= l) return -1;
                if (i = e.charCodeAt(s++), 37 === i) {
                    if (a = e.charAt(s++), o = N[a in fu ? e.charAt(s++) : a], !o || (r = o(t, n, r)) < 0) return -1
                } else if (i != n.charCodeAt(r++)) return -1
            }
            return r
        }

        function r(t, e, n) {
            _.lastIndex = 0;
            var r = _.exec(e.slice(n));
            return r ? (t.w = S.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function i(t, e, n) {
            x.lastIndex = 0;
            var r = x.exec(e.slice(n));
            return r ? (t.w = w.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function o(t, e, n) {
            T.lastIndex = 0;
            var r = T.exec(e.slice(n));
            return r ? (t.m = C.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function a(t, e, n) {
            M.lastIndex = 0;
            var r = M.exec(e.slice(n));
            return r ? (t.m = k.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function s(t, e, r) {
            return n(t, E.c.toString(), e, r)
        }

        function u(t, e, r) {
            return n(t, E.x.toString(), e, r)
        }

        function l(t, e, r) {
            return n(t, E.X.toString(), e, r)
        }

        function c(t, e, n) {
            var r = b.get(e.slice(n, n += 2).toLowerCase());
            return null == r ? -1 : (t.p = r, n)
        }
        var f = t.dateTime,
            h = t.date,
            p = t.time,
            d = t.periods,
            g = t.days,
            v = t.shortDays,
            m = t.months,
            y = t.shortMonths;
        e.utc = function(t) {
            function n(t) {
                try {
                    lu = qe;
                    var e = new lu;
                    return e._ = t, r(e)
                } finally {
                    lu = Date
                }
            }
            var r = e(t);
            return n.parse = function(t) {
                try {
                    lu = qe;
                    var e = r.parse(t);
                    return e && e._
                } finally {
                    lu = Date
                }
            }, n.toString = r.toString, n
        }, e.multi = e.utc.multi = un;
        var b = ns.map(),
            x = Ue(g),
            w = We(g),
            _ = Ue(v),
            S = We(v),
            M = Ue(m),
            k = We(m),
            T = Ue(y),
            C = We(y);
        d.forEach(function(t, e) {
            b.set(t.toLowerCase(), e)
        });
        var E = {
                a: function(t) {
                    return v[t.getDay()]
                },
                A: function(t) {
                    return g[t.getDay()]
                },
                b: function(t) {
                    return y[t.getMonth()]
                },
                B: function(t) {
                    return m[t.getMonth()]
                },
                c: e(f),
                d: function(t, e) {
                    return ze(t.getDate(), e, 2)
                },
                e: function(t, e) {
                    return ze(t.getDate(), e, 2)
                },
                H: function(t, e) {
                    return ze(t.getHours(), e, 2)
                },
                I: function(t, e) {
                    return ze(t.getHours() % 12 || 12, e, 2)
                },
                j: function(t, e) {
                    return ze(1 + uu.dayOfYear(t), e, 3)
                },
                L: function(t, e) {
                    return ze(t.getMilliseconds(), e, 3)
                },
                m: function(t, e) {
                    return ze(t.getMonth() + 1, e, 2)
                },
                M: function(t, e) {
                    return ze(t.getMinutes(), e, 2)
                },
                p: function(t) {
                    return d[+(t.getHours() >= 12)]
                },
                S: function(t, e) {
                    return ze(t.getSeconds(), e, 2)
                },
                U: function(t, e) {
                    return ze(uu.sundayOfYear(t), e, 2)
                },
                w: function(t) {
                    return t.getDay()
                },
                W: function(t, e) {
                    return ze(uu.mondayOfYear(t), e, 2)
                },
                x: e(h),
                X: e(p),
                y: function(t, e) {
                    return ze(t.getFullYear() % 100, e, 2)
                },
                Y: function(t, e) {
                    return ze(t.getFullYear() % 1e4, e, 4)
                },
                Z: an,
                "%": function() {
                    return "%"
                }
            },
            N = {
                a: r,
                A: i,
                b: o,
                B: a,
                c: s,
                d: Ke,
                e: Ke,
                H: en,
                I: en,
                j: tn,
                L: on,
                m: Je,
                M: nn,
                p: c,
                S: rn,
                U: Ve,
                w: Be,
                W: Ye,
                x: u,
                X: l,
                y: Qe,
                Y: Xe,
                Z: Ze,
                "%": sn
            };
        return e
    }

    function ze(t, e, n) {
        var r = 0 > t ? "-" : "",
            i = (r ? -t : t) + "",
            o = i.length;
        return r + (n > o ? new Array(n - o + 1).join(e) + i : i)
    }

    function Ue(t) {
        return new RegExp("^(?:" + t.map(ns.requote).join("|") + ")", "i")
    }

    function We(t) {
        for (var e = new l, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
        return e
    }

    function Be(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 1));
        return r ? (t.w = +r[0], n + r[0].length) : -1
    }

    function Ve(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n));
        return r ? (t.U = +r[0], n + r[0].length) : -1
    }

    function Ye(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n));
        return r ? (t.W = +r[0], n + r[0].length) : -1
    }

    function Xe(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 4));
        return r ? (t.y = +r[0], n + r[0].length) : -1
    }

    function Qe(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.y = Ge(+r[0]), n + r[0].length) : -1
    }

    function Ze(t, e, n) {
        return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
    }

    function Ge(t) {
        return t + (t > 68 ? 1900 : 2e3)
    }

    function Je(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.m = r[0] - 1, n + r[0].length) : -1
    }

    function Ke(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.d = +r[0], n + r[0].length) : -1
    }

    function tn(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 3));
        return r ? (t.j = +r[0], n + r[0].length) : -1
    }

    function en(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.H = +r[0], n + r[0].length) : -1
    }

    function nn(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.M = +r[0], n + r[0].length) : -1
    }

    function rn(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 2));
        return r ? (t.S = +r[0], n + r[0].length) : -1
    }

    function on(t, e, n) {
        hu.lastIndex = 0;
        var r = hu.exec(e.slice(n, n + 3));
        return r ? (t.L = +r[0], n + r[0].length) : -1
    }

    function an(t) {
        var e = t.getTimezoneOffset(),
            n = e > 0 ? "-" : "+",
            r = ds(e) / 60 | 0,
            i = ds(e) % 60;
        return n + ze(r, "0", 2) + ze(i, "0", 2)
    }

    function sn(t, e, n) {
        pu.lastIndex = 0;
        var r = pu.exec(e.slice(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function un(t) {
        for (var e = t.length, n = -1; ++n < e;) t[n][0] = this(t[n][0]);
        return function(e) {
            for (var n = 0, r = t[n]; !r[1](e);) r = t[++n];
            return r[0](e)
        }
    }

    function ln() {}

    function cn(t, e, n) {
        var r = n.s = t + e,
            i = r - t,
            o = r - i;
        n.t = t - o + (e - i)
    }

    function fn(t, e) {
        t && mu.hasOwnProperty(t.type) && mu[t.type](t, e)
    }

    function hn(t, e, n) {
        var r, i = -1,
            o = t.length - n;
        for (e.lineStart(); ++i < o;) r = t[i], e.point(r[0], r[1], r[2]);
        e.lineEnd()
    }

    function pn(t, e) {
        var n = -1,
            r = t.length;
        for (e.polygonStart(); ++n < r;) hn(t[n], e, 1);
        e.polygonEnd()
    }

    function dn() {
        function t(t, e) {
            t *= Ls, e = e * Ls / 2 + $s / 4;
            var n = t - r,
                a = n >= 0 ? 1 : -1,
                s = a * n,
                u = Math.cos(e),
                l = Math.sin(e),
                c = o * l,
                f = i * u + c * Math.cos(s),
                h = c * a * Math.sin(s);
            bu.add(Math.atan2(h, f)), r = t, i = u, o = l
        }
        var e, n, r, i, o;
        xu.point = function(a, s) {
            xu.point = t, r = (e = a) * Ls, i = Math.cos(s = (n = s) * Ls / 2 + $s / 4), o = Math.sin(s)
        }, xu.lineEnd = function() {
            t(e, n)
        }
    }

    function gn(t) {
        var e = t[0],
            n = t[1],
            r = Math.cos(n);
        return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
    }

    function vn(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function mn(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
    }

    function yn(t, e) {
        t[0] += e[0], t[1] += e[1], t[2] += e[2]
    }

    function bn(t, e) {
        return [t[0] * e, t[1] * e, t[2] * e]
    }

    function xn(t) {
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= e, t[1] /= e, t[2] /= e
    }

    function wn(t) {
        return [Math.atan2(t[1], t[0]), ee(t[2])]
    }

    function _n(t, e) {
        return ds(t[0] - e[0]) < As && ds(t[1] - e[1]) < As
    }

    function Sn(t, e) {
        t *= Ls;
        var n = Math.cos(e *= Ls);
        Mn(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
    }

    function Mn(t, e, n) {
        ++wu, Su += (t - Su) / wu, Mu += (e - Mu) / wu, ku += (n - ku) / wu
    }

    function kn() {
        function t(t, i) {
            t *= Ls;
            var o = Math.cos(i *= Ls),
                a = o * Math.cos(t),
                s = o * Math.sin(t),
                u = Math.sin(i),
                l = Math.atan2(Math.sqrt((l = n * u - r * s) * l + (l = r * a - e * u) * l + (l = e * s - n * a) * l), e * a + n * s + r * u);
            _u += l, Tu += l * (e + (e = a)), Cu += l * (n + (n = s)), Eu += l * (r + (r = u)), Mn(e, n, r)
        }
        var e, n, r;
        $u.point = function(i, o) {
            i *= Ls;
            var a = Math.cos(o *= Ls);
            e = a * Math.cos(i), n = a * Math.sin(i), r = Math.sin(o), $u.point = t, Mn(e, n, r)
        }
    }

    function Tn() {
        $u.point = Sn
    }

    function Cn() {
        function t(t, e) {
            t *= Ls;
            var n = Math.cos(e *= Ls),
                a = n * Math.cos(t),
                s = n * Math.sin(t),
                u = Math.sin(e),
                l = i * u - o * s,
                c = o * a - r * u,
                f = r * s - i * a,
                h = Math.sqrt(l * l + c * c + f * f),
                p = r * a + i * s + o * u,
                d = h && -te(p) / h,
                g = Math.atan2(h, p);
            Nu += d * l, Au += d * c, Du += d * f, _u += g, Tu += g * (r + (r = a)), Cu += g * (i + (i = s)), Eu += g * (o + (o = u)), Mn(r, i, o)
        }
        var e, n, r, i, o;
        $u.point = function(a, s) {
            e = a, n = s, $u.point = t, a *= Ls;
            var u = Math.cos(s *= Ls);
            r = u * Math.cos(a), i = u * Math.sin(a), o = Math.sin(s), Mn(r, i, o)
        }, $u.lineEnd = function() {
            t(e, n), $u.lineEnd = Tn, $u.point = Sn
        }
    }

    function En(t, e) {
        function n(n, r) {
            return n = t(n, r), e(n[0], n[1])
        }
        return t.invert && e.invert && (n.invert = function(n, r) {
            return n = e.invert(n, r), n && t.invert(n[0], n[1])
        }), n
    }

    function Nn() {
        return !0
    }

    function An(t, e, n, r, i) {
        var o = [],
            a = [];
        if (t.forEach(function(t) {
            if (!((e = t.length - 1) <= 0)) {
                var e, n = t[0],
                    r = t[e];
                if (_n(n, r)) {
                    i.lineStart();
                    for (var s = 0; e > s; ++s) i.point((n = t[s])[0], n[1]);
                    return void i.lineEnd()
                }
                var u = new $n(n, t, null, !0),
                    l = new $n(n, null, u, !1);
                u.o = l, o.push(u), a.push(l), u = new $n(r, t, null, !1), l = new $n(r, null, u, !0), u.o = l, o.push(u), a.push(l)
            }
        }), a.sort(e), Dn(o), Dn(a), o.length) {
            for (var s = 0, u = n, l = a.length; l > s; ++s) a[s].e = u = !u;
            for (var c, f, h = o[0];;) {
                for (var p = h, d = !0; p.v;)
                    if ((p = p.n) === h) return;
                c = p.z, i.lineStart();
                do {
                    if (p.v = p.o.v = !0, p.e) {
                        if (d)
                            for (var s = 0, l = c.length; l > s; ++s) i.point((f = c[s])[0], f[1]);
                        else r(p.x, p.n.x, 1, i);
                        p = p.n
                    } else {
                        if (d) {
                            c = p.p.z;
                            for (var s = c.length - 1; s >= 0; --s) i.point((f = c[s])[0], f[1])
                        } else r(p.x, p.p.x, -1, i);
                        p = p.p
                    }
                    p = p.o, c = p.z, d = !d
                } while (!p.v);
                i.lineEnd()
            }
        }
    }

    function Dn(t) {
        if (e = t.length) {
            for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
            i.n = n = t[0], n.p = i
        }
    }

    function $n(t, e, n, r) {
        this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
    }

    function Pn(t, e, n, r) {
        return function(i, o) {
            function a(e, n) {
                var r = i(e, n);
                t(e = r[0], n = r[1]) && o.point(e, n)
            }

            function s(t, e) {
                var n = i(t, e);
                v.point(n[0], n[1])
            }

            function u() {
                y.point = s, v.lineStart()
            }

            function l() {
                y.point = a, v.lineEnd()
            }

            function c(t, e) {
                g.push([t, e]);
                var n = i(t, e);
                x.point(n[0], n[1])
            }

            function f() {
                x.lineStart(), g = []
            }

            function h() {
                c(g[0][0], g[0][1]), x.lineEnd();
                var t, e = x.clean(),
                    n = b.buffer(),
                    r = n.length;
                if (g.pop(), d.push(g), g = null, r)
                    if (1 & e) {
                        t = n[0];
                        var i, r = t.length - 1,
                            a = -1;
                        if (r > 0) {
                            for (w || (o.polygonStart(), w = !0), o.lineStart(); ++a < r;) o.point((i = t[a])[0], i[1]);
                            o.lineEnd()
                        }
                    } else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())), p.push(n.filter(On))
            }
            var p, d, g, v = e(o),
                m = i.invert(r[0], r[1]),
                y = {
                    point: a,
                    lineStart: u,
                    lineEnd: l,
                    polygonStart: function() {
                        y.point = c, y.lineStart = f, y.lineEnd = h, p = [], d = []
                    },
                    polygonEnd: function() {
                        y.point = a, y.lineStart = u, y.lineEnd = l, p = ns.merge(p);
                        var t = Hn(m, d);
                        p.length ? (w || (o.polygonStart(), w = !0), An(p, Ln, t, n, o)) : t && (w || (o.polygonStart(), w = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), w && (o.polygonEnd(), w = !1), p = d = null
                    },
                    sphere: function() {
                        o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                    }
                },
                b = jn(),
                x = e(b),
                w = !1;
            return y
        }
    }

    function On(t) {
        return t.length > 1
    }

    function jn() {
        var t, e = [];
        return {
            lineStart: function() {
                e.push(t = [])
            },
            point: function(e, n) {
                t.push([e, n])
            },
            lineEnd: w,
            buffer: function() {
                var n = e;
                return e = [], t = null, n
            },
            rejoin: function() {
                e.length > 1 && e.push(e.pop().concat(e.shift()))
            }
        }
    }

    function Ln(t, e) {
        return ((t = t.x)[0] < 0 ? t[1] - js - As : js - t[1]) - ((e = e.x)[0] < 0 ? e[1] - js - As : js - e[1])
    }

    function Rn(t) {
        var e, n = 0 / 0,
            r = 0 / 0,
            i = 0 / 0;
        return {
            lineStart: function() {
                t.lineStart(), e = 1
            },
            point: function(o, a) {
                var s = o > 0 ? $s : -$s,
                    u = ds(o - n);
                ds(u - $s) < As ? (t.point(n, r = (r + a) / 2 > 0 ? js : -js), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(s, r), t.point(o, r), e = 0) : i !== s && u >= $s && (ds(n - i) < As && (n -= i * As), ds(o - s) < As && (o -= s * As), r = qn(n, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(s, r), e = 0), t.point(n = o, r = a), i = s
            },
            lineEnd: function() {
                t.lineEnd(), n = r = 0 / 0
            },
            clean: function() {
                return 2 - e
            }
        }
    }

    function qn(t, e, n, r) {
        var i, o, a = Math.sin(t - n);
        return ds(a) > As ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * o * a)) : (e + r) / 2
    }

    function In(t, e, n, r) {
        var i;
        if (null == t) i = n * js, r.point(-$s, i), r.point(0, i), r.point($s, i), r.point($s, 0), r.point($s, -i), r.point(0, -i), r.point(-$s, -i), r.point(-$s, 0), r.point(-$s, i);
        else if (ds(t[0] - e[0]) > As) {
            var o = t[0] < e[0] ? $s : -$s;
            i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(e[0], e[1])
    }

    function Hn(t, e) {
        var n = t[0],
            r = t[1],
            i = [Math.sin(n), -Math.cos(n), 0],
            o = 0,
            a = 0;
        bu.reset();
        for (var s = 0, u = e.length; u > s; ++s) {
            var l = e[s],
                c = l.length;
            if (c)
                for (var f = l[0], h = f[0], p = f[1] / 2 + $s / 4, d = Math.sin(p), g = Math.cos(p), v = 1;;) {
                    v === c && (v = 0), t = l[v];
                    var m = t[0],
                        y = t[1] / 2 + $s / 4,
                        b = Math.sin(y),
                        x = Math.cos(y),
                        w = m - h,
                        _ = w >= 0 ? 1 : -1,
                        S = _ * w,
                        M = S > $s,
                        k = d * b;
                    if (bu.add(Math.atan2(k * _ * Math.sin(S), g * x + k * Math.cos(S))), o += M ? w + _ * Ps : w, M ^ h >= n ^ m >= n) {
                        var T = mn(gn(f), gn(t));
                        xn(T);
                        var C = mn(i, T);
                        xn(C);
                        var E = (M ^ w >= 0 ? -1 : 1) * ee(C[2]);
                        (r > E || r === E && (T[0] || T[1])) && (a += M ^ w >= 0 ? 1 : -1)
                    }
                    if (!v++) break;
                    h = m, d = b, g = x, f = t
                }
        }
        return (-As > o || As > o && 0 > bu) ^ 1 & a
    }

    function Fn(t) {
        function e(t, e) {
            return Math.cos(t) * Math.cos(e) > o
        }

        function n(t) {
            var n, o, u, l, c;
            return {
                lineStart: function() {
                    l = u = !1, c = 1
                },
                point: function(f, h) {
                    var p, d = [f, h],
                        g = e(f, h),
                        v = a ? g ? 0 : i(f, h) : g ? i(f + (0 > f ? $s : -$s), h) : 0;
                    if (!n && (l = u = g) && t.lineStart(), g !== u && (p = r(n, d), (_n(n, p) || _n(d, p)) && (d[0] += As, d[1] += As, g = e(d[0], d[1]))), g !== u) c = 0, g ? (t.lineStart(), p = r(d, n), t.point(p[0], p[1])) : (p = r(n, d), t.point(p[0], p[1]), t.lineEnd()), n = p;
                    else if (s && n && a ^ g) {
                        var m;
                        v & o || !(m = r(d, n, !0)) || (c = 0, a ? (t.lineStart(), t.point(m[0][0], m[0][1]), t.point(m[1][0], m[1][1]), t.lineEnd()) : (t.point(m[1][0], m[1][1]), t.lineEnd(), t.lineStart(), t.point(m[0][0], m[0][1])))
                    }!g || n && _n(n, d) || t.point(d[0], d[1]), n = d, u = g, o = v
                },
                lineEnd: function() {
                    u && t.lineEnd(), n = null
                },
                clean: function() {
                    return c | (l && u) << 1
                }
            }
        }

        function r(t, e, n) {
            var r = gn(t),
                i = gn(e),
                a = [1, 0, 0],
                s = mn(r, i),
                u = vn(s, s),
                l = s[0],
                c = u - l * l;
            if (!c) return !n && t;
            var f = o * u / c,
                h = -o * l / c,
                p = mn(a, s),
                d = bn(a, f),
                g = bn(s, h);
            yn(d, g);
            var v = p,
                m = vn(d, v),
                y = vn(v, v),
                b = m * m - y * (vn(d, d) - 1);
            if (!(0 > b)) {
                var x = Math.sqrt(b),
                    w = bn(v, (-m - x) / y);
                if (yn(w, d), w = wn(w), !n) return w;
                var _, S = t[0],
                    M = e[0],
                    k = t[1],
                    T = e[1];
                S > M && (_ = S, S = M, M = _);
                var C = M - S,
                    E = ds(C - $s) < As,
                    N = E || As > C;
                if (!E && k > T && (_ = k, k = T, T = _), N ? E ? k + T > 0 ^ w[1] < (ds(w[0] - S) < As ? k : T) : k <= w[1] && w[1] <= T : C > $s ^ (S <= w[0] && w[0] <= M)) {
                    var A = bn(v, (-m + x) / y);
                    return yn(A, d), [w, wn(A)]
                }
            }
        }

        function i(e, n) {
            var r = a ? t : $s - t,
                i = 0;
            return -r > e ? i |= 1 : e > r && (i |= 2), -r > n ? i |= 4 : n > r && (i |= 8), i
        }
        var o = Math.cos(t),
            a = o > 0,
            s = ds(o) > As,
            u = dr(t, 6 * Ls);
        return Pn(e, n, u, a ? [0, -t] : [-$s, t - $s])
    }

    function zn(t, e, n, r) {
        return function(i) {
            var o, a = i.a,
                s = i.b,
                u = a.x,
                l = a.y,
                c = s.x,
                f = s.y,
                h = 0,
                p = 1,
                d = c - u,
                g = f - l;
            if (o = t - u, d || !(o > 0)) {
                if (o /= d, 0 > d) {
                    if (h > o) return;
                    p > o && (p = o)
                } else if (d > 0) {
                    if (o > p) return;
                    o > h && (h = o)
                }
                if (o = n - u, d || !(0 > o)) {
                    if (o /= d, 0 > d) {
                        if (o > p) return;
                        o > h && (h = o)
                    } else if (d > 0) {
                        if (h > o) return;
                        p > o && (p = o)
                    }
                    if (o = e - l, g || !(o > 0)) {
                        if (o /= g, 0 > g) {
                            if (h > o) return;
                            p > o && (p = o)
                        } else if (g > 0) {
                            if (o > p) return;
                            o > h && (h = o)
                        }
                        if (o = r - l, g || !(0 > o)) {
                            if (o /= g, 0 > g) {
                                if (o > p) return;
                                o > h && (h = o)
                            } else if (g > 0) {
                                if (h > o) return;
                                p > o && (p = o)
                            }
                            return h > 0 && (i.a = {
                                x: u + h * d,
                                y: l + h * g
                            }), 1 > p && (i.b = {
                                x: u + p * d,
                                y: l + p * g
                            }), i
                        }
                    }
                }
            }
        }
    }

    function Un(t, e, n, r) {
        function i(r, i) {
            return ds(r[0] - t) < As ? i > 0 ? 0 : 3 : ds(r[0] - n) < As ? i > 0 ? 2 : 1 : ds(r[1] - e) < As ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function o(t, e) {
            return a(t.x, e.x)
        }

        function a(t, e) {
            var n = i(t, 1),
                r = i(e, 1);
            return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
        }
        return function(s) {
            function u(t) {
                for (var e = 0, n = v.length, r = t[1], i = 0; n > i; ++i)
                    for (var o, a = 1, s = v[i], u = s.length, l = s[0]; u > a; ++a) o = s[a], l[1] <= r ? o[1] > r && K(l, o, t) > 0 && ++e : o[1] <= r && K(l, o, t) < 0 && --e, l = o;
                return 0 !== e
            }

            function l(o, s, u, l) {
                var c = 0,
                    f = 0;
                if (null == o || (c = i(o, u)) !== (f = i(s, u)) || a(o, s) < 0 ^ u > 0) {
                    do l.point(0 === c || 3 === c ? t : n, c > 1 ? r : e); while ((c = (c + u + 4) % 4) !== f)
                } else l.point(s[0], s[1])
            }

            function c(i, o) {
                return i >= t && n >= i && o >= e && r >= o
            }

            function f(t, e) {
                c(t, e) && s.point(t, e)
            }

            function h() {
                N.point = d, v && v.push(m = []), M = !0, S = !1, w = _ = 0 / 0
            }

            function p() {
                g && (d(y, b), x && S && C.rejoin(), g.push(C.buffer())), N.point = f, S && s.lineEnd()
            }

            function d(t, e) {
                t = Math.max(-Ou, Math.min(Ou, t)), e = Math.max(-Ou, Math.min(Ou, e));
                var n = c(t, e);
                if (v && m.push([t, e]), M) y = t, b = e, x = n, M = !1, n && (s.lineStart(), s.point(t, e));
                else if (n && S) s.point(t, e);
                else {
                    var r = {
                        a: {
                            x: w,
                            y: _
                        },
                        b: {
                            x: t,
                            y: e
                        }
                    };
                    E(r) ? (S || (s.lineStart(), s.point(r.a.x, r.a.y)), s.point(r.b.x, r.b.y), n || s.lineEnd(), k = !1) : n && (s.lineStart(), s.point(t, e), k = !1)
                }
                w = t, _ = e, S = n
            }
            var g, v, m, y, b, x, w, _, S, M, k, T = s,
                C = jn(),
                E = zn(t, e, n, r),
                N = {
                    point: f,
                    lineStart: h,
                    lineEnd: p,
                    polygonStart: function() {
                        s = C, g = [], v = [], k = !0
                    },
                    polygonEnd: function() {
                        s = T, g = ns.merge(g);
                        var e = u([t, r]),
                            n = k && e,
                            i = g.length;
                        (n || i) && (s.polygonStart(), n && (s.lineStart(), l(null, null, 1, s), s.lineEnd()), i && An(g, o, e, l, s), s.polygonEnd()), g = v = m = null
                    }
                };
            return N
        }
    }

    function Wn(t) {
        var e = 0,
            n = $s / 3,
            r = ar(t),
            i = r(e, n);
        return i.parallels = function(t) {
            return arguments.length ? r(e = t[0] * $s / 180, n = t[1] * $s / 180) : [e / $s * 180, n / $s * 180]
        }, i
    }

    function Bn(t, e) {
        function n(t, e) {
            var n = Math.sqrt(o - 2 * i * Math.sin(e)) / i;
            return [n * Math.sin(t *= i), a - n * Math.cos(t)]
        }
        var r = Math.sin(t),
            i = (r + Math.sin(e)) / 2,
            o = 1 + r * (2 * i - r),
            a = Math.sqrt(o) / i;
        return n.invert = function(t, e) {
            var n = a - e;
            return [Math.atan2(t, n) / i, ee((o - (t * t + n * n) * i * i) / (2 * i))]
        }, n
    }

    function Vn() {
        function t(t, e) {
            Lu += i * t - r * e, r = t, i = e
        }
        var e, n, r, i;
        Fu.point = function(o, a) {
            Fu.point = t, e = r = o, n = i = a
        }, Fu.lineEnd = function() {
            t(e, n)
        }
    }

    function Yn(t, e) {
        Ru > t && (Ru = t), t > Iu && (Iu = t), qu > e && (qu = e), e > Hu && (Hu = e)
    }

    function Xn() {
        function t(t, e) {
            a.push("M", t, ",", e, o)
        }

        function e(t, e) {
            a.push("M", t, ",", e), s.point = n
        }

        function n(t, e) {
            a.push("L", t, ",", e)
        }

        function r() {
            s.point = t
        }

        function i() {
            a.push("Z")
        }
        var o = Qn(4.5),
            a = [],
            s = {
                point: t,
                lineStart: function() {
                    s.point = e
                },
                lineEnd: r,
                polygonStart: function() {
                    s.lineEnd = i
                },
                polygonEnd: function() {
                    s.lineEnd = r, s.point = t
                },
                pointRadius: function(t) {
                    return o = Qn(t), s
                },
                result: function() {
                    if (a.length) {
                        var t = a.join("");
                        return a = [], t
                    }
                }
            };
        return s
    }

    function Qn(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Zn(t, e) {
        Su += t, Mu += e, ++ku
    }

    function Gn() {
        function t(t, r) {
            var i = t - e,
                o = r - n,
                a = Math.sqrt(i * i + o * o);
            Tu += a * (e + t) / 2, Cu += a * (n + r) / 2, Eu += a, Zn(e = t, n = r)
        }
        var e, n;
        Uu.point = function(r, i) {
            Uu.point = t, Zn(e = r, n = i)
        }
    }

    function Jn() {
        Uu.point = Zn
    }

    function Kn() {
        function t(t, e) {
            var n = t - r,
                o = e - i,
                a = Math.sqrt(n * n + o * o);
            Tu += a * (r + t) / 2, Cu += a * (i + e) / 2, Eu += a, a = i * t - r * e, Nu += a * (r + t), Au += a * (i + e), Du += 3 * a, Zn(r = t, i = e)
        }
        var e, n, r, i;
        Uu.point = function(o, a) {
            Uu.point = t, Zn(e = r = o, n = i = a)
        }, Uu.lineEnd = function() {
            t(e, n)
        }
    }

    function tr(t) {
        function e(e, n) {
            t.moveTo(e + a, n), t.arc(e, n, a, 0, Ps)
        }

        function n(e, n) {
            t.moveTo(e, n), s.point = r
        }

        function r(e, n) {
            t.lineTo(e, n)
        }

        function i() {
            s.point = e
        }

        function o() {
            t.closePath()
        }
        var a = 4.5,
            s = {
                point: e,
                lineStart: function() {
                    s.point = n
                },
                lineEnd: i,
                polygonStart: function() {
                    s.lineEnd = o
                },
                polygonEnd: function() {
                    s.lineEnd = i, s.point = e
                },
                pointRadius: function(t) {
                    return a = t, s
                },
                result: w
            };
        return s
    }

    function er(t) {
        function e(t) {
            return (s ? r : n)(t)
        }

        function n(e) {
            return ir(e, function(n, r) {
                n = t(n, r), e.point(n[0], n[1])
            })
        }

        function r(e) {
            function n(n, r) {
                n = t(n, r), e.point(n[0], n[1])
            }

            function r() {
                b = 0 / 0, M.point = o, e.lineStart()
            }

            function o(n, r) {
                var o = gn([n, r]),
                    a = t(n, r);
                i(b, x, y, w, _, S, b = a[0], x = a[1], y = n, w = o[0], _ = o[1], S = o[2], s, e), e.point(b, x)
            }

            function a() {
                M.point = n, e.lineEnd()
            }

            function u() {
                r(), M.point = l, M.lineEnd = c
            }

            function l(t, e) {
                o(f = t, h = e), p = b, d = x, g = w, v = _, m = S, M.point = o
            }

            function c() {
                i(b, x, y, w, _, S, p, d, f, g, v, m, s, e), M.lineEnd = a, a()
            }
            var f, h, p, d, g, v, m, y, b, x, w, _, S, M = {
                point: n,
                lineStart: r,
                lineEnd: a,
                polygonStart: function() {
                    e.polygonStart(), M.lineStart = u
                },
                polygonEnd: function() {
                    e.polygonEnd(), M.lineStart = r
                }
            };
            return M
        }

        function i(e, n, r, s, u, l, c, f, h, p, d, g, v, m) {
            var y = c - e,
                b = f - n,
                x = y * y + b * b;
            if (x > 4 * o && v--) {
                var w = s + p,
                    _ = u + d,
                    S = l + g,
                    M = Math.sqrt(w * w + _ * _ + S * S),
                    k = Math.asin(S /= M),
                    T = ds(ds(S) - 1) < As || ds(r - h) < As ? (r + h) / 2 : Math.atan2(_, w),
                    C = t(T, k),
                    E = C[0],
                    N = C[1],
                    A = E - e,
                    D = N - n,
                    $ = b * A - y * D;
                ($ * $ / x > o || ds((y * A + b * D) / x - .5) > .3 || a > s * p + u * d + l * g) && (i(e, n, r, s, u, l, E, N, T, w /= M, _ /= M, S, v, m), m.point(E, N), i(E, N, T, w, _, S, c, f, h, p, d, g, v, m))
            }
        }
        var o = .5,
            a = Math.cos(30 * Ls),
            s = 16;
        return e.precision = function(t) {
            return arguments.length ? (s = (o = t * t) > 0 && 16, e) : Math.sqrt(o)
        }, e
    }

    function nr(t) {
        var e = er(function(e, n) {
            return t([e * Rs, n * Rs])
        });
        return function(t) {
            return sr(e(t))
        }
    }

    function rr(t) {
        this.stream = t
    }

    function ir(t, e) {
        return {
            point: e,
            sphere: function() {
                t.sphere()
            },
            lineStart: function() {
                t.lineStart()
            },
            lineEnd: function() {
                t.lineEnd()
            },
            polygonStart: function() {
                t.polygonStart()
            },
            polygonEnd: function() {
                t.polygonEnd()
            }
        }
    }

    function or(t) {
        return ar(function() {
            return t
        })()
    }

    function ar(t) {
        function e(t) {
            return t = s(t[0] * Ls, t[1] * Ls), [t[0] * h + u, l - t[1] * h]
        }

        function n(t) {
            return t = s.invert((t[0] - u) / h, (l - t[1]) / h), t && [t[0] * Rs, t[1] * Rs]
        }

        function r() {
            s = En(a = cr(m, b, x), o);
            var t = o(g, v);
            return u = p - t[0] * h, l = d + t[1] * h, i()
        }

        function i() {
            return c && (c.valid = !1, c = null), e
        }
        var o, a, s, u, l, c, f = er(function(t, e) {
                return t = o(t, e), [t[0] * h + u, l - t[1] * h]
            }),
            h = 150,
            p = 480,
            d = 250,
            g = 0,
            v = 0,
            m = 0,
            b = 0,
            x = 0,
            w = Pu,
            _ = y,
            S = null,
            M = null;
        return e.stream = function(t) {
            return c && (c.valid = !1), c = sr(w(a, f(_(t)))), c.valid = !0, c
        }, e.clipAngle = function(t) {
            return arguments.length ? (w = null == t ? (S = t, Pu) : Fn((S = +t) * Ls), i()) : S
        }, e.clipExtent = function(t) {
            return arguments.length ? (M = t, _ = t ? Un(t[0][0], t[0][1], t[1][0], t[1][1]) : y, i()) : M
        }, e.scale = function(t) {
            return arguments.length ? (h = +t, r()) : h
        }, e.translate = function(t) {
            return arguments.length ? (p = +t[0], d = +t[1], r()) : [p, d]
        }, e.center = function(t) {
            return arguments.length ? (g = t[0] % 360 * Ls, v = t[1] % 360 * Ls, r()) : [g * Rs, v * Rs]
        }, e.rotate = function(t) {
            return arguments.length ? (m = t[0] % 360 * Ls, b = t[1] % 360 * Ls, x = t.length > 2 ? t[2] % 360 * Ls : 0, r()) : [m * Rs, b * Rs, x * Rs]
        }, ns.rebind(e, f, "precision"),
            function() {
                return o = t.apply(this, arguments), e.invert = o.invert && n, r()
            }
    }

    function sr(t) {
        return ir(t, function(e, n) {
            t.point(e * Ls, n * Ls)
        })
    }

    function ur(t, e) {
        return [t, e]
    }

    function lr(t, e) {
        return [t > $s ? t - Ps : -$s > t ? t + Ps : t, e]
    }

    function cr(t, e, n) {
        return t ? e || n ? En(hr(t), pr(e, n)) : hr(t) : e || n ? pr(e, n) : lr
    }

    function fr(t) {
        return function(e, n) {
            return e += t, [e > $s ? e - Ps : -$s > e ? e + Ps : e, n]
        }
    }

    function hr(t) {
        var e = fr(t);
        return e.invert = fr(-t), e
    }

    function pr(t, e) {
        function n(t, e) {
            var n = Math.cos(e),
                s = Math.cos(t) * n,
                u = Math.sin(t) * n,
                l = Math.sin(e),
                c = l * r + s * i;
            return [Math.atan2(u * o - c * a, s * r - l * i), ee(c * o + u * a)]
        }
        var r = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(e),
            a = Math.sin(e);
        return n.invert = function(t, e) {
            var n = Math.cos(e),
                s = Math.cos(t) * n,
                u = Math.sin(t) * n,
                l = Math.sin(e),
                c = l * o - u * a;
            return [Math.atan2(u * o + l * a, s * r + c * i), ee(c * r - s * i)]
        }, n
    }

    function dr(t, e) {
        var n = Math.cos(t),
            r = Math.sin(t);
        return function(i, o, a, s) {
            var u = a * e;
            null != i ? (i = gr(n, i), o = gr(n, o), (a > 0 ? o > i : i > o) && (i += a * Ps)) : (i = t + a * Ps, o = t - .5 * u);
            for (var l, c = i; a > 0 ? c > o : o > c; c -= u) s.point((l = wn([n, -r * Math.cos(c), -r * Math.sin(c)]))[0], l[1])
        }
    }

    function gr(t, e) {
        var n = gn(e);
        n[0] -= t, xn(n);
        var r = te(-n[1]);
        return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - As) % (2 * Math.PI)
    }

    function vr(t, e, n) {
        var r = ns.range(t, e - As, n).concat(e);
        return function(t) {
            return r.map(function(e) {
                return [t, e]
            })
        }
    }

    function mr(t, e, n) {
        var r = ns.range(t, e - As, n).concat(e);
        return function(t) {
            return r.map(function(e) {
                return [e, t]
            })
        }
    }

    function yr(t) {
        return t.source
    }

    function br(t) {
        return t.target
    }

    function xr(t, e, n, r) {
        var i = Math.cos(e),
            o = Math.sin(e),
            a = Math.cos(r),
            s = Math.sin(r),
            u = i * Math.cos(t),
            l = i * Math.sin(t),
            c = a * Math.cos(n),
            f = a * Math.sin(n),
            h = 2 * Math.asin(Math.sqrt(oe(r - e) + i * a * oe(n - t))),
            p = 1 / Math.sin(h),
            d = h ? function(t) {
                var e = Math.sin(t *= h) * p,
                    n = Math.sin(h - t) * p,
                    r = n * u + e * c,
                    i = n * l + e * f,
                    a = n * o + e * s;
                return [Math.atan2(i, r) * Rs, Math.atan2(a, Math.sqrt(r * r + i * i)) * Rs]
            } : function() {
                return [t * Rs, e * Rs]
            };
        return d.distance = h, d
    }

    function wr() {
        function t(t, i) {
            var o = Math.sin(i *= Ls),
                a = Math.cos(i),
                s = ds((t *= Ls) - e),
                u = Math.cos(s);
            Wu += Math.atan2(Math.sqrt((s = a * Math.sin(s)) * s + (s = r * o - n * a * u) * s), n * o + r * a * u), e = t, n = o, r = a
        }
        var e, n, r;
        Bu.point = function(i, o) {
            e = i * Ls, n = Math.sin(o *= Ls), r = Math.cos(o), Bu.point = t
        }, Bu.lineEnd = function() {
            Bu.point = Bu.lineEnd = w
        }
    }

    function _r(t, e) {
        function n(e, n) {
            var r = Math.cos(e),
                i = Math.cos(n),
                o = t(r * i);
            return [o * i * Math.sin(e), o * Math.sin(n)]
        }
        return n.invert = function(t, n) {
            var r = Math.sqrt(t * t + n * n),
                i = e(r),
                o = Math.sin(i),
                a = Math.cos(i);
            return [Math.atan2(t * o, r * a), Math.asin(r && n * o / r)]
        }, n
    }

    function Sr(t, e) {
        function n(t, e) {
            a > 0 ? -js + As > e && (e = -js + As) : e > js - As && (e = js - As);
            var n = a / Math.pow(i(e), o);
            return [n * Math.sin(o * t), a - n * Math.cos(o * t)]
        }
        var r = Math.cos(t),
            i = function(t) {
                return Math.tan($s / 4 + t / 2)
            },
            o = t === e ? Math.sin(t) : Math.log(r / Math.cos(e)) / Math.log(i(e) / i(t)),
            a = r * Math.pow(i(t), o) / o;
        return o ? (n.invert = function(t, e) {
            var n = a - e,
                r = J(o) * Math.sqrt(t * t + n * n);
            return [Math.atan2(t, n) / o, 2 * Math.atan(Math.pow(a / r, 1 / o)) - js]
        }, n) : kr
    }

    function Mr(t, e) {
        function n(t, e) {
            var n = o - e;
            return [n * Math.sin(i * t), o - n * Math.cos(i * t)]
        }
        var r = Math.cos(t),
            i = t === e ? Math.sin(t) : (r - Math.cos(e)) / (e - t),
            o = r / i + t;
        return ds(i) < As ? ur : (n.invert = function(t, e) {
            var n = o - e;
            return [Math.atan2(t, n) / i, o - J(i) * Math.sqrt(t * t + n * n)]
        }, n)
    }

    function kr(t, e) {
        return [t, Math.log(Math.tan($s / 4 + e / 2))]
    }

    function Tr(t) {
        var e, n = or(t),
            r = n.scale,
            i = n.translate,
            o = n.clipExtent;
        return n.scale = function() {
            var t = r.apply(n, arguments);
            return t === n ? e ? n.clipExtent(null) : n : t
        }, n.translate = function() {
            var t = i.apply(n, arguments);
            return t === n ? e ? n.clipExtent(null) : n : t
        }, n.clipExtent = function(t) {
            var a = o.apply(n, arguments);
            if (a === n) {
                if (e = null == t) {
                    var s = $s * r(),
                        u = i();
                    o([
                        [u[0] - s, u[1] - s],
                        [u[0] + s, u[1] + s]
                    ])
                }
            } else e && (a = null);
            return a
        }, n.clipExtent(null)
    }

    function Cr(t, e) {
        return [Math.log(Math.tan($s / 4 + e / 2)), -t]
    }

    function Er(t) {
        return t[0]
    }

    function Nr(t) {
        return t[1]
    }

    function Ar(t) {
        for (var e = t.length, n = [0, 1], r = 2, i = 2; e > i; i++) {
            for (; r > 1 && K(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;) --r;
            n[r++] = i
        }
        return n.slice(0, r)
    }

    function Dr(t, e) {
        return t[0] - e[0] || t[1] - e[1]
    }

    function $r(t, e, n) {
        return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
    }

    function Pr(t, e, n, r) {
        var i = t[0],
            o = n[0],
            a = e[0] - i,
            s = r[0] - o,
            u = t[1],
            l = n[1],
            c = e[1] - u,
            f = r[1] - l,
            h = (s * (u - l) - f * (i - o)) / (f * a - s * c);
        return [i + h * a, u + h * c]
    }

    function Or(t) {
        var e = t[0],
            n = t[t.length - 1];
        return !(e[0] - n[0] || e[1] - n[1])
    }

    function jr() {
        ni(this), this.edge = this.site = this.circle = null
    }

    function Lr(t) {
        var e = rl.pop() || new jr;
        return e.site = t, e
    }

    function Rr(t) {
        Yr(t), tl.remove(t), rl.push(t), ni(t)
    }

    function qr(t) {
        var e = t.circle,
            n = e.x,
            r = e.cy,
            i = {
                x: n,
                y: r
            },
            o = t.P,
            a = t.N,
            s = [t];
        Rr(t);
        for (var u = o; u.circle && ds(n - u.circle.x) < As && ds(r - u.circle.cy) < As;) o = u.P, s.unshift(u), Rr(u), u = o;
        s.unshift(u), Yr(u);
        for (var l = a; l.circle && ds(n - l.circle.x) < As && ds(r - l.circle.cy) < As;) a = l.N, s.push(l), Rr(l), l = a;
        s.push(l), Yr(l);
        var c, f = s.length;
        for (c = 1; f > c; ++c) l = s[c], u = s[c - 1], Kr(l.edge, u.site, l.site, i);
        u = s[0], l = s[f - 1], l.edge = Gr(u.site, l.site, null, i), Vr(u), Vr(l)
    }

    function Ir(t) {
        for (var e, n, r, i, o = t.x, a = t.y, s = tl._; s;)
            if (r = Hr(s, a) - o, r > As) s = s.L;
            else {
                if (i = o - Fr(s, a), !(i > As)) {
                    r > -As ? (e = s.P, n = s) : i > -As ? (e = s, n = s.N) : e = n = s;
                    break
                }
                if (!s.R) {
                    e = s;
                    break
                }
                s = s.R
            }
        var u = Lr(t);
        if (tl.insert(e, u), e || n) {
            if (e === n) return Yr(e), n = Lr(e.site), tl.insert(u, n), u.edge = n.edge = Gr(e.site, u.site), Vr(e), void Vr(n);
            if (!n) return void(u.edge = Gr(e.site, u.site));
            Yr(e), Yr(n);
            var l = e.site,
                c = l.x,
                f = l.y,
                h = t.x - c,
                p = t.y - f,
                d = n.site,
                g = d.x - c,
                v = d.y - f,
                m = 2 * (h * v - p * g),
                y = h * h + p * p,
                b = g * g + v * v,
                x = {
                    x: (v * y - p * b) / m + c,
                    y: (h * b - g * y) / m + f
                };
            Kr(n.edge, l, d, x), u.edge = Gr(l, t, null, x), n.edge = Gr(t, d, null, x), Vr(e), Vr(n)
        }
    }

    function Hr(t, e) {
        var n = t.site,
            r = n.x,
            i = n.y,
            o = i - e;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        n = a.site;
        var s = n.x,
            u = n.y,
            l = u - e;
        if (!l) return s;
        var c = s - r,
            f = 1 / o - 1 / l,
            h = c / l;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (c * c / (-2 * l) - u + l / 2 + i - o / 2))) / f + r : (r + s) / 2
    }

    function Fr(t, e) {
        var n = t.N;
        if (n) return Hr(n, e);
        var r = t.site;
        return r.y === e ? r.x : 1 / 0
    }

    function zr(t) {
        this.site = t, this.edges = []
    }

    function Ur(t) {
        for (var e, n, r, i, o, a, s, u, l, c, f = t[0][0], h = t[1][0], p = t[0][1], d = t[1][1], g = Ku, v = g.length; v--;)
            if (o = g[v], o && o.prepare())
                for (s = o.edges, u = s.length, a = 0; u > a;) c = s[a].end(), r = c.x, i = c.y, l = s[++a % u].start(), e = l.x, n = l.y, (ds(r - e) > As || ds(i - n) > As) && (s.splice(a, 0, new ti(Jr(o.site, c, ds(r - f) < As && d - i > As ? {
                    x: f,
                    y: ds(e - f) < As ? n : d
                } : ds(i - d) < As && h - r > As ? {
                    x: ds(n - d) < As ? e : h,
                    y: d
                } : ds(r - h) < As && i - p > As ? {
                    x: h,
                    y: ds(e - h) < As ? n : p
                } : ds(i - p) < As && r - f > As ? {
                    x: ds(n - p) < As ? e : f,
                    y: p
                } : null), o.site, null)), ++u)
    }

    function Wr(t, e) {
        return e.angle - t.angle
    }

    function Br() {
        ni(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Vr(t) {
        var e = t.P,
            n = t.N;
        if (e && n) {
            var r = e.site,
                i = t.site,
                o = n.site;
            if (r !== o) {
                var a = i.x,
                    s = i.y,
                    u = r.x - a,
                    l = r.y - s,
                    c = o.x - a,
                    f = o.y - s,
                    h = 2 * (u * f - l * c);
                if (!(h >= -Ds)) {
                    var p = u * u + l * l,
                        d = c * c + f * f,
                        g = (f * p - l * d) / h,
                        v = (u * d - c * p) / h,
                        f = v + s,
                        m = il.pop() || new Br;
                    m.arc = t, m.site = i, m.x = g + a, m.y = f + Math.sqrt(g * g + v * v), m.cy = f, t.circle = m;
                    for (var y = null, b = nl._; b;)
                        if (m.y < b.y || m.y === b.y && m.x <= b.x) {
                            if (!b.L) {
                                y = b.P;
                                break
                            }
                            b = b.L
                        } else {
                            if (!b.R) {
                                y = b;
                                break
                            }
                            b = b.R
                        }
                    nl.insert(y, m), y || (el = m)
                }
            }
        }
    }

    function Yr(t) {
        var e = t.circle;
        e && (e.P || (el = e.N), nl.remove(e), il.push(e), ni(e), t.circle = null)
    }

    function Xr(t) {
        for (var e, n = Ju, r = zn(t[0][0], t[0][1], t[1][0], t[1][1]), i = n.length; i--;) e = n[i], (!Qr(e, t) || !r(e) || ds(e.a.x - e.b.x) < As && ds(e.a.y - e.b.y) < As) && (e.a = e.b = null, n.splice(i, 1))
    }

    function Qr(t, e) {
        var n = t.b;
        if (n) return !0;
        var r, i, o = t.a,
            a = e[0][0],
            s = e[1][0],
            u = e[0][1],
            l = e[1][1],
            c = t.l,
            f = t.r,
            h = c.x,
            p = c.y,
            d = f.x,
            g = f.y,
            v = (h + d) / 2,
            m = (p + g) / 2;
        if (g === p) {
            if (a > v || v >= s) return;
            if (h > d) {
                if (o) {
                    if (o.y >= l) return
                } else o = {
                    x: v,
                    y: u
                };
                n = {
                    x: v,
                    y: l
                }
            } else {
                if (o) {
                    if (o.y < u) return
                } else o = {
                    x: v,
                    y: l
                };
                n = {
                    x: v,
                    y: u
                }
            }
        } else if (r = (h - d) / (g - p), i = m - r * v, -1 > r || r > 1)
            if (h > d) {
                if (o) {
                    if (o.y >= l) return
                } else o = {
                    x: (u - i) / r,
                    y: u
                };
                n = {
                    x: (l - i) / r,
                    y: l
                }
            } else {
                if (o) {
                    if (o.y < u) return
                } else o = {
                    x: (l - i) / r,
                    y: l
                };
                n = {
                    x: (u - i) / r,
                    y: u
                }
            } else if (g > p) {
            if (o) {
                if (o.x >= s) return
            } else o = {
                x: a,
                y: r * a + i
            };
            n = {
                x: s,
                y: r * s + i
            }
        } else {
            if (o) {
                if (o.x < a) return
            } else o = {
                x: s,
                y: r * s + i
            };
            n = {
                x: a,
                y: r * a + i
            }
        }
        return t.a = o, t.b = n, !0
    }

    function Zr(t, e) {
        this.l = t, this.r = e, this.a = this.b = null
    }

    function Gr(t, e, n, r) {
        var i = new Zr(t, e);
        return Ju.push(i), n && Kr(i, t, e, n), r && Kr(i, e, t, r), Ku[t.i].edges.push(new ti(i, t, e)), Ku[e.i].edges.push(new ti(i, e, t)), i
    }

    function Jr(t, e, n) {
        var r = new Zr(t, null);
        return r.a = e, r.b = n, Ju.push(r), r
    }

    function Kr(t, e, n, r) {
        t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
    }

    function ti(t, e, n) {
        var r = t.a,
            i = t.b;
        this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
    }

    function ei() {
        this._ = null
    }

    function ni(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function ri(t, e) {
        var n = e,
            r = e.R,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
    }

    function ii(t, e) {
        var n = e,
            r = e.L,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
    }

    function oi(t) {
        for (; t.L;) t = t.L;
        return t
    }

    function ai(t, e) {
        var n, r, i, o = t.sort(si).pop();
        for (Ju = [], Ku = new Array(t.length), tl = new ei, nl = new ei;;)
            if (i = el, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x))(o.x !== n || o.y !== r) && (Ku[o.i] = new zr(o), Ir(o), n = o.x, r = o.y), o = t.pop();
            else {
                if (!i) break;
                qr(i.arc)
            }
        e && (Xr(e), Ur(e));
        var a = {
            cells: Ku,
            edges: Ju
        };
        return tl = nl = Ju = Ku = null, a
    }

    function si(t, e) {
        return e.y - t.y || e.x - t.x
    }

    function ui(t, e, n) {
        return (t.x - n.x) * (e.y - t.y) - (t.x - e.x) * (n.y - t.y)
    }

    function li(t) {
        return t.x
    }

    function ci(t) {
        return t.y
    }

    function fi() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function hi(t, e, n, r, i, o) {
        if (!t(e, n, r, i, o)) {
            var a = .5 * (n + i),
                s = .5 * (r + o),
                u = e.nodes;
            u[0] && hi(t, u[0], n, r, a, s), u[1] && hi(t, u[1], a, r, i, s), u[2] && hi(t, u[2], n, s, a, o), u[3] && hi(t, u[3], a, s, i, o)
        }
    }

    function pi(t, e, n, r, i, o, a) {
        var s, u = 1 / 0;
        return function l(t, c, f, h, p) {
            if (!(c > o || f > a || r > h || i > p)) {
                if (d = t.point) {
                    var d, g = e - t.x,
                        v = n - t.y,
                        m = g * g + v * v;
                    if (u > m) {
                        var y = Math.sqrt(u = m);
                        r = e - y, i = n - y, o = e + y, a = n + y, s = d
                    }
                }
                for (var b = t.nodes, x = .5 * (c + h), w = .5 * (f + p), _ = e >= x, S = n >= w, M = S << 1 | _, k = M + 4; k > M; ++M)
                    if (t = b[3 & M]) switch (3 & M) {
                        case 0:
                            l(t, c, f, x, w);
                            break;
                        case 1:
                            l(t, x, f, h, w);
                            break;
                        case 2:
                            l(t, c, w, x, p);
                            break;
                        case 3:
                            l(t, x, w, h, p)
                    }
            }
        }(t, r, i, o, a), s
    }

    function di(t, e) {
        t = ns.rgb(t), e = ns.rgb(e);
        var n = t.r,
            r = t.g,
            i = t.b,
            o = e.r - n,
            a = e.g - r,
            s = e.b - i;
        return function(t) {
            return "#" + xe(Math.round(n + o * t)) + xe(Math.round(r + a * t)) + xe(Math.round(i + s * t))
        }
    }

    function gi(t, e) {
        var n, r = {},
            i = {};
        for (n in t) n in e ? r[n] = yi(t[n], e[n]) : i[n] = t[n];
        for (n in e) n in t || (i[n] = e[n]);
        return function(t) {
            for (n in r) i[n] = r[n](t);
            return i
        }
    }

    function vi(t, e) {
        return t = +t, e = +e,
            function(n) {
                return t * (1 - n) + e * n
            }
    }

    function mi(t, e) {
        var n, r, i, o = al.lastIndex = sl.lastIndex = 0,
            a = -1,
            s = [],
            u = [];
        for (t += "", e += "";
             (n = al.exec(t)) && (r = sl.exec(e));)(i = r.index) > o && (i = e.slice(o, i), s[a] ? s[a] += i : s[++a] = i), (n = n[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, u.push({
            i: a,
            x: vi(n, r)
        })), o = sl.lastIndex;
        return o < e.length && (i = e.slice(o), s[a] ? s[a] += i : s[++a] = i), s.length < 2 ? u[0] ? (e = u[0].x, function(t) {
            return e(t) + ""
        }) : function() {
            return e
        } : (e = u.length, function(t) {
            for (var n, r = 0; e > r; ++r) s[(n = u[r]).i] = n.x(t);
            return s.join("")
        })
    }

    function yi(t, e) {
        for (var n, r = ns.interpolators.length; --r >= 0 && !(n = ns.interpolators[r](t, e)););
        return n
    }

    function bi(t, e) {
        var n, r = [],
            i = [],
            o = t.length,
            a = e.length,
            s = Math.min(t.length, e.length);
        for (n = 0; s > n; ++n) r.push(yi(t[n], e[n]));
        for (; o > n; ++n) i[n] = t[n];
        for (; a > n; ++n) i[n] = e[n];
        return function(t) {
            for (n = 0; s > n; ++n) i[n] = r[n](t);
            return i
        }
    }

    function xi(t) {
        return function(e) {
            return 0 >= e ? 0 : e >= 1 ? 1 : t(e)
        }
    }

    function wi(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }

    function _i(t) {
        return function(e) {
            return .5 * (.5 > e ? t(2 * e) : 2 - t(2 - 2 * e))
        }
    }

    function Si(t) {
        return t * t
    }

    function Mi(t) {
        return t * t * t
    }

    function ki(t) {
        if (0 >= t) return 0;
        if (t >= 1) return 1;
        var e = t * t,
            n = e * t;
        return 4 * (.5 > t ? n : 3 * (t - e) + n - .75)
    }

    function Ti(t) {
        return function(e) {
            return Math.pow(e, t)
        }
    }

    function Ci(t) {
        return 1 - Math.cos(t * js)
    }

    function Ei(t) {
        return Math.pow(2, 10 * (t - 1))
    }

    function Ni(t) {
        return 1 - Math.sqrt(1 - t * t)
    }

    function Ai(t, e) {
        var n;
        return arguments.length < 2 && (e = .45), arguments.length ? n = e / Ps * Math.asin(1 / t) : (t = 1, n = e / 4),
            function(r) {
                return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * Ps / e)
            }
    }

    function Di(t) {
        return t || (t = 1.70158),
            function(e) {
                return e * e * ((t + 1) * e - t)
            }
    }

    function $i(t) {
        return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }

    function Pi(t, e) {
        t = ns.hcl(t), e = ns.hcl(e);
        var n = t.h,
            r = t.c,
            i = t.l,
            o = e.h - n,
            a = e.c - r,
            s = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.c : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return ce(n + o * t, r + a * t, i + s * t) + ""
            }
    }

    function Oi(t, e) {
        t = ns.hsl(t), e = ns.hsl(e);
        var n = t.h,
            r = t.s,
            i = t.l,
            o = e.h - n,
            a = e.s - r,
            s = e.l - i;
        return isNaN(a) && (a = 0, r = isNaN(r) ? e.s : r), isNaN(o) ? (o = 0, n = isNaN(n) ? e.h : n) : o > 180 ? o -= 360 : -180 > o && (o += 360),
            function(t) {
                return ue(n + o * t, r + a * t, i + s * t) + ""
            }
    }

    function ji(t, e) {
        t = ns.lab(t), e = ns.lab(e);
        var n = t.l,
            r = t.a,
            i = t.b,
            o = e.l - n,
            a = e.a - r,
            s = e.b - i;
        return function(t) {
            return he(n + o * t, r + a * t, i + s * t) + ""
        }
    }

    function Li(t, e) {
        return e -= t,
            function(n) {
                return Math.round(t + e * n)
            }
    }

    function Ri(t) {
        var e = [t.a, t.b],
            n = [t.c, t.d],
            r = Ii(e),
            i = qi(e, n),
            o = Ii(Hi(n, e, -i)) || 0;
        e[0] * n[1] < n[0] * e[1] && (e[0] *= -1, e[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(e[1], e[0]) : Math.atan2(-n[0], n[1])) * Rs, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o ? Math.atan2(i, o) * Rs : 0
    }

    function qi(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function Ii(t) {
        var e = Math.sqrt(qi(t, t));
        return e && (t[0] /= e, t[1] /= e), e
    }

    function Hi(t, e, n) {
        return t[0] += n * e[0], t[1] += n * e[1], t
    }

    function Fi(t, e) {
        var n, r = [],
            i = [],
            o = ns.transform(t),
            a = ns.transform(e),
            s = o.translate,
            u = a.translate,
            l = o.rotate,
            c = a.rotate,
            f = o.skew,
            h = a.skew,
            p = o.scale,
            d = a.scale;
        return s[0] != u[0] || s[1] != u[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
            i: 1,
            x: vi(s[0], u[0])
        }, {
            i: 3,
            x: vi(s[1], u[1])
        })) : r.push(u[0] || u[1] ? "translate(" + u + ")" : ""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: vi(l, c)
        })) : c && r.push(r.pop() + "rotate(" + c + ")"), f != h ? i.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: vi(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"), p[0] != d[0] || p[1] != d[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
            i: n - 4,
            x: vi(p[0], d[0])
        }, {
            i: n - 2,
            x: vi(p[1], d[1])
        })) : (1 != d[0] || 1 != d[1]) && r.push(r.pop() + "scale(" + d + ")"), n = i.length,
            function(t) {
                for (var e, o = -1; ++o < n;) r[(e = i[o]).i] = e.x(t);
                return r.join("")
            }
    }

    function zi(t, e) {
        return e = (e -= t = +t) || 1 / e,
            function(n) {
                return (n - t) / e
            }
    }

    function Ui(t, e) {
        return e = (e -= t = +t) || 1 / e,
            function(n) {
                return Math.max(0, Math.min(1, (n - t) / e))
            }
    }

    function Wi(t) {
        for (var e = t.source, n = t.target, r = Vi(e, n), i = [e]; e !== r;) e = e.parent, i.push(e);
        for (var o = i.length; n !== r;) i.splice(o, 0, n), n = n.parent;
        return i
    }

    function Bi(t) {
        for (var e = [], n = t.parent; null != n;) e.push(t), t = n, n = n.parent;
        return e.push(t), e
    }

    function Vi(t, e) {
        if (t === e) return t;
        for (var n = Bi(t), r = Bi(e), i = n.pop(), o = r.pop(), a = null; i === o;) a = i, i = n.pop(), o = r.pop();
        return a
    }

    function Yi(t) {
        t.fixed |= 2
    }

    function Xi(t) {
        t.fixed &= -7
    }

    function Qi(t) {
        t.fixed |= 4, t.px = t.x, t.py = t.y
    }

    function Zi(t) {
        t.fixed &= -5
    }

    function Gi(t, e, n) {
        var r = 0,
            i = 0;
        if (t.charge = 0, !t.leaf)
            for (var o, a = t.nodes, s = a.length, u = -1; ++u < s;) o = a[u], null != o && (Gi(o, e, n), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
        if (t.point) {
            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
            var l = e * n[t.point.index];
            t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
        }
        t.cx = r / t.charge, t.cy = i / t.charge
    }

    function Ji(t, e) {
        return ns.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = io, t
    }

    function Ki(t, e) {
        for (var n = [t]; null != (t = n.pop());)
            if (e(t), (i = t.children) && (r = i.length))
                for (var r, i; --r >= 0;) n.push(i[r])
    }

    function to(t, e) {
        for (var n = [t], r = []; null != (t = n.pop());)
            if (r.push(t), (o = t.children) && (i = o.length))
                for (var i, o, a = -1; ++a < i;) n.push(o[a]);
        for (; null != (t = r.pop());) e(t)
    }

    function eo(t) {
        return t.children
    }

    function no(t) {
        return t.value
    }

    function ro(t, e) {
        return e.value - t.value
    }

    function io(t) {
        return ns.merge(t.map(function(t) {
            return (t.children || []).map(function(e) {
                return {
                    source: t,
                    target: e
                }
            })
        }))
    }

    function oo(t) {
        return t.x
    }

    function ao(t) {
        return t.y
    }

    function so(t, e, n) {
        t.y0 = e, t.y = n
    }

    function uo(t) {
        return ns.range(t.length)
    }

    function lo(t) {
        for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
        return r
    }

    function co(t) {
        for (var e, n = 1, r = 0, i = t[0][1], o = t.length; o > n; ++n)(e = t[n][1]) > i && (r = n, i = e);
        return r
    }

    function fo(t) {
        return t.reduce(ho, 0)
    }

    function ho(t, e) {
        return t + e[1]
    }

    function po(t, e) {
        return go(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
    }

    function go(t, e) {
        for (var n = -1, r = +t[0], i = (t[1] - r) / e, o = []; ++n <= e;) o[n] = i * n + r;
        return o
    }

    function vo(t) {
        return [ns.min(t), ns.max(t)]
    }

    function mo(t, e) {
        return t.value - e.value
    }

    function yo(t, e) {
        var n = t._pack_next;
        t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e
    }

    function bo(t, e) {
        t._pack_next = e, e._pack_prev = t
    }

    function xo(t, e) {
        var n = e.x - t.x,
            r = e.y - t.y,
            i = t.r + e.r;
        return .999 * i * i > n * n + r * r
    }

    function wo(t) {
        function e(t) {
            c = Math.min(t.x - t.r, c), f = Math.max(t.x + t.r, f), h = Math.min(t.y - t.r, h), p = Math.max(t.y + t.r, p)
        }
        if ((n = t.children) && (l = n.length)) {
            var n, r, i, o, a, s, u, l, c = 1 / 0,
                f = -1 / 0,
                h = 1 / 0,
                p = -1 / 0;
            if (n.forEach(_o), r = n[0], r.x = -r.r, r.y = 0, e(r), l > 1 && (i = n[1], i.x = i.r, i.y = 0, e(i), l > 2))
                for (o = n[2], ko(r, i, o), e(o), yo(r, o), r._pack_prev = o, yo(o, i), i = r._pack_next, a = 3; l > a; a++) {
                    ko(r, i, o = n[a]);
                    var d = 0,
                        g = 1,
                        v = 1;
                    for (s = i._pack_next; s !== i; s = s._pack_next, g++)
                        if (xo(s, o)) {
                            d = 1;
                            break
                        }
                    if (1 == d)
                        for (u = r._pack_prev; u !== s._pack_prev && !xo(u, o); u = u._pack_prev, v++);
                    d ? (v > g || g == v && i.r < r.r ? bo(r, i = s) : bo(r = u, i), a--) : (yo(r, o), i = o, e(o))
                }
            var m = (c + f) / 2,
                y = (h + p) / 2,
                b = 0;
            for (a = 0; l > a; a++) o = n[a], o.x -= m, o.y -= y, b = Math.max(b, o.r + Math.sqrt(o.x * o.x + o.y * o.y));
            t.r = b, n.forEach(So)
        }
    }

    function _o(t) {
        t._pack_next = t._pack_prev = t
    }

    function So(t) {
        delete t._pack_next, delete t._pack_prev
    }

    function Mo(t, e, n, r) {
        var i = t.children;
        if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i)
            for (var o = -1, a = i.length; ++o < a;) Mo(i[o], e, n, r)
    }

    function ko(t, e, n) {
        var r = t.r + n.r,
            i = e.x - t.x,
            o = e.y - t.y;
        if (r && (i || o)) {
            var a = e.r + n.r,
                s = i * i + o * o;
            a *= a, r *= r;
            var u = .5 + (r - a) / (2 * s),
                l = Math.sqrt(Math.max(0, 2 * a * (r + s) - (r -= s) * r - a * a)) / (2 * s);
            n.x = t.x + u * i + l * o, n.y = t.y + u * o - l * i
        } else n.x = t.x + r, n.y = t.y
    }

    function To(t, e) {
        return t.parent == e.parent ? 1 : 2
    }

    function Co(t) {
        var e = t.children;
        return e.length ? e[0] : t.t
    }

    function Eo(t) {
        var e, n = t.children;
        return (e = n.length) ? n[e - 1] : t.t
    }

    function No(t, e, n) {
        var r = n / (e.i - t.i);
        e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n
    }

    function Ao(t) {
        for (var e, n = 0, r = 0, i = t.children, o = i.length; --o >= 0;) e = i[o], e.z += n, e.m += n, n += e.s + (r += e.c)
    }

    function Do(t, e, n) {
        return t.a.parent === e.parent ? t.a : n
    }

    function $o(t) {
        return 1 + ns.max(t, function(t) {
            return t.y
        })
    }

    function Po(t) {
        return t.reduce(function(t, e) {
            return t + e.x
        }, 0) / t.length
    }

    function Oo(t) {
        var e = t.children;
        return e && e.length ? Oo(e[0]) : t
    }

    function jo(t) {
        var e, n = t.children;
        return n && (e = n.length) ? jo(n[e - 1]) : t
    }

    function Lo(t) {
        return {
            x: t.x,
            y: t.y,
            dx: t.dx,
            dy: t.dy
        }
    }

    function Ro(t, e) {
        var n = t.x + e[3],
            r = t.y + e[0],
            i = t.dx - e[1] - e[3],
            o = t.dy - e[0] - e[2];
        return 0 > i && (n += i / 2, i = 0), 0 > o && (r += o / 2, o = 0), {
            x: n,
            y: r,
            dx: i,
            dy: o
        }
    }

    function qo(t) {
        var e = t[0],
            n = t[t.length - 1];
        return n > e ? [e, n] : [n, e]
    }

    function Io(t) {
        return t.rangeExtent ? t.rangeExtent() : qo(t.range())
    }

    function Ho(t, e, n, r) {
        var i = n(t[0], t[1]),
            o = r(e[0], e[1]);
        return function(t) {
            return o(i(t))
        }
    }

    function Fo(t, e) {
        var n, r = 0,
            i = t.length - 1,
            o = t[r],
            a = t[i];
        return o > a && (n = r, r = i, i = n, n = o, o = a, a = n), t[r] = e.floor(o), t[i] = e.ceil(a), t
    }

    function zo(t) {
        return t ? {
            floor: function(e) {
                return Math.floor(e / t) * t
            },
            ceil: function(e) {
                return Math.ceil(e / t) * t
            }
        } : yl
    }

    function Uo(t, e, n, r) {
        var i = [],
            o = [],
            a = 0,
            s = Math.min(t.length, e.length) - 1;
        for (t[s] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a <= s;) i.push(n(t[a - 1], t[a])), o.push(r(e[a - 1], e[a]));
        return function(e) {
            var n = ns.bisect(t, e, 1, s) - 1;
            return o[n](i[n](e))
        }
    }

    function Wo(t, e, n, r) {
        function i() {
            var i = Math.min(t.length, e.length) > 2 ? Uo : Ho,
                u = r ? Ui : zi;
            return a = i(t, e, u, n), s = i(e, t, u, yi), o
        }

        function o(t) {
            return a(t)
        }
        var a, s;
        return o.invert = function(t) {
            return s(t)
        }, o.domain = function(e) {
            return arguments.length ? (t = e.map(Number), i()) : t
        }, o.range = function(t) {
            return arguments.length ? (e = t, i()) : e
        }, o.rangeRound = function(t) {
            return o.range(t).interpolate(Li)
        }, o.clamp = function(t) {
            return arguments.length ? (r = t, i()) : r
        }, o.interpolate = function(t) {
            return arguments.length ? (n = t, i()) : n
        }, o.ticks = function(e) {
            return Xo(t, e)
        }, o.tickFormat = function(e, n) {
            return Qo(t, e, n)
        }, o.nice = function(e) {
            return Vo(t, e), i()
        }, o.copy = function() {
            return Wo(t, e, n, r)
        }, i()
    }

    function Bo(t, e) {
        return ns.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
    }

    function Vo(t, e) {
        return Fo(t, zo(Yo(t, e)[2]))
    }

    function Yo(t, e) {
        null == e && (e = 10);
        var n = qo(t),
            r = n[1] - n[0],
            i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
            o = e / r * i;
        return .15 >= o ? i *= 10 : .35 >= o ? i *= 5 : .75 >= o && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + .5 * i, n[2] = i, n
    }

    function Xo(t, e) {
        return ns.range.apply(ns, Yo(t, e))
    }

    function Qo(t, e, n) {
        var r = Yo(t, e);
        if (n) {
            var i = au.exec(n);
            if (i.shift(), "s" === i[8]) {
                var o = ns.formatPrefix(Math.max(ds(r[0]), ds(r[1])));
                return i[7] || (i[7] = "." + Zo(o.scale(r[2]))), i[8] = "f", n = ns.format(i.join("")),
                    function(t) {
                        return n(o.scale(t)) + o.symbol
                    }
            }
            i[7] || (i[7] = "." + Go(i[8], r)), n = i.join("")
        } else n = ",." + Zo(r[2]) + "f";
        return ns.format(n)
    }

    function Zo(t) {
        return -Math.floor(Math.log(t) / Math.LN10 + .01)
    }

    function Go(t, e) {
        var n = Zo(e[2]);
        return t in bl ? Math.abs(n - Zo(Math.max(ds(e[0]), ds(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
    }

    function Jo(t, e, n, r) {
        function i(t) {
            return (n ? Math.log(0 > t ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
        }

        function o(t) {
            return n ? Math.pow(e, t) : -Math.pow(e, -t)
        }

        function a(e) {
            return t(i(e))
        }
        return a.invert = function(e) {
            return o(t.invert(e))
        }, a.domain = function(e) {
            return arguments.length ? (n = e[0] >= 0, t.domain((r = e.map(Number)).map(i)), a) : r
        }, a.base = function(n) {
            return arguments.length ? (e = +n, t.domain(r.map(i)), a) : e
        }, a.nice = function() {
            var e = Fo(r.map(i), n ? Math : wl);
            return t.domain(e), r = e.map(o), a
        }, a.ticks = function() {
            var t = qo(r),
                a = [],
                s = t[0],
                u = t[1],
                l = Math.floor(i(s)),
                c = Math.ceil(i(u)),
                f = e % 1 ? 2 : e;
            if (isFinite(c - l)) {
                if (n) {
                    for (; c > l; l++)
                        for (var h = 1; f > h; h++) a.push(o(l) * h);
                    a.push(o(l))
                } else
                    for (a.push(o(l)); l++ < c;)
                        for (var h = f - 1; h > 0; h--) a.push(o(l) * h);
                for (l = 0; a[l] < s; l++);
                for (c = a.length; a[c - 1] > u; c--);
                a = a.slice(l, c)
            }
            return a
        }, a.tickFormat = function(t, e) {
            if (!arguments.length) return xl;
            arguments.length < 2 ? e = xl : "function" != typeof e && (e = ns.format(e));
            var r, s = Math.max(.1, t / a.ticks().length),
                u = n ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(t) {
                return t / o(u(i(t) + r)) <= s ? e(t) : ""
            }
        }, a.copy = function() {
            return Jo(t.copy(), e, n, r)
        }, Bo(a, t)
    }

    function Ko(t, e, n) {
        function r(e) {
            return t(i(e))
        }
        var i = ta(e),
            o = ta(1 / e);
        return r.invert = function(e) {
            return o(t.invert(e))
        }, r.domain = function(e) {
            return arguments.length ? (t.domain((n = e.map(Number)).map(i)), r) : n
        }, r.ticks = function(t) {
            return Xo(n, t)
        }, r.tickFormat = function(t, e) {
            return Qo(n, t, e)
        }, r.nice = function(t) {
            return r.domain(Vo(n, t))
        }, r.exponent = function(a) {
            return arguments.length ? (i = ta(e = a), o = ta(1 / e), t.domain(n.map(i)), r) : e
        }, r.copy = function() {
            return Ko(t.copy(), e, n)
        }, Bo(r, t)
    }

    function ta(t) {
        return function(e) {
            return 0 > e ? -Math.pow(-e, t) : Math.pow(e, t)
        }
    }

    function ea(t, e) {
        function n(n) {
            return o[((i.get(n) || ("range" === e.t ? i.set(n, t.push(n)) : 0 / 0)) - 1) % o.length]
        }

        function r(e, n) {
            return ns.range(t.length).map(function(t) {
                return e + n * t
            })
        }
        var i, o, a;
        return n.domain = function(r) {
            if (!arguments.length) return t;
            t = [], i = new l;
            for (var o, a = -1, s = r.length; ++a < s;) i.has(o = r[a]) || i.set(o, t.push(o));
            return n[e.t].apply(n, e.a)
        }, n.range = function(t) {
            return arguments.length ? (o = t, a = 0, e = {
                t: "range",
                a: arguments
            }, n) : o
        }, n.rangePoints = function(i, s) {
            arguments.length < 2 && (s = 0);
            var u = i[0],
                l = i[1],
                c = t.length < 2 ? (u = (u + l) / 2, 0) : (l - u) / (t.length - 1 + s);
            return o = r(u + c * s / 2, c), a = 0, e = {
                t: "rangePoints",
                a: arguments
            }, n
        }, n.rangeRoundPoints = function(i, s) {
            arguments.length < 2 && (s = 0);
            var u = i[0],
                l = i[1],
                c = t.length < 2 ? (u = l = Math.round((u + l) / 2), 0) : (l - u) / (t.length - 1 + s) | 0;
            return o = r(u + Math.round(c * s / 2 + (l - u - (t.length - 1 + s) * c) / 2), c), a = 0, e = {
                t: "rangeRoundPoints",
                a: arguments
            }, n
        }, n.rangeBands = function(i, s, u) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);
            var l = i[1] < i[0],
                c = i[l - 0],
                f = i[1 - l],
                h = (f - c) / (t.length - s + 2 * u);
            return o = r(c + h * u, h), l && o.reverse(), a = h * (1 - s), e = {
                t: "rangeBands",
                a: arguments
            }, n
        }, n.rangeRoundBands = function(i, s, u) {
            arguments.length < 2 && (s = 0), arguments.length < 3 && (u = s);
            var l = i[1] < i[0],
                c = i[l - 0],
                f = i[1 - l],
                h = Math.floor((f - c) / (t.length - s + 2 * u));
            return o = r(c + Math.round((f - c - (t.length - s) * h) / 2), h), l && o.reverse(), a = Math.round(h * (1 - s)), e = {
                t: "rangeRoundBands",
                a: arguments
            }, n
        }, n.rangeBand = function() {
            return a
        }, n.rangeExtent = function() {
            return qo(e.a[0])
        }, n.copy = function() {
            return ea(t, e)
        }, n.domain(t)
    }

    function na(t, e) {
        function o() {
            var n = 0,
                r = e.length;
            for (s = []; ++n < r;) s[n - 1] = ns.quantile(t, n / r);
            return a
        }

        function a(t) {
            return isNaN(t = +t) ? void 0 : e[ns.bisect(s, t)]
        }
        var s;
        return a.domain = function(e) {
            return arguments.length ? (t = e.map(r).filter(i).sort(n), o()) : t
        }, a.range = function(t) {
            return arguments.length ? (e = t, o()) : e
        }, a.quantiles = function() {
            return s
        }, a.invertExtent = function(n) {
            return n = e.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? s[n - 1] : t[0], n < s.length ? s[n] : t[t.length - 1]]
        }, a.copy = function() {
            return na(t, e)
        }, o()
    }

    function ra(t, e, n) {
        function r(e) {
            return n[Math.max(0, Math.min(a, Math.floor(o * (e - t))))]
        }

        function i() {
            return o = n.length / (e - t), a = n.length - 1, r
        }
        var o, a;
        return r.domain = function(n) {
            return arguments.length ? (t = +n[0], e = +n[n.length - 1], i()) : [t, e]
        }, r.range = function(t) {
            return arguments.length ? (n = t, i()) : n
        }, r.invertExtent = function(e) {
            return e = n.indexOf(e), e = 0 > e ? 0 / 0 : e / o + t, [e, e + 1 / o]
        }, r.copy = function() {
            return ra(t, e, n)
        }, i()
    }

    function ia(t, e) {
        function n(n) {
            return n >= n ? e[ns.bisect(t, n)] : void 0
        }
        return n.domain = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.range = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.invertExtent = function(n) {
            return n = e.indexOf(n), [t[n - 1], t[n]]
        }, n.copy = function() {
            return ia(t, e)
        }, n
    }

    function oa(t) {
        function e(t) {
            return +t
        }
        return e.invert = e, e.domain = e.range = function(n) {
            return arguments.length ? (t = n.map(e), e) : t
        }, e.ticks = function(e) {
            return Xo(t, e)
        }, e.tickFormat = function(e, n) {
            return Qo(t, e, n)
        }, e.copy = function() {
            return oa(t)
        }, e
    }

    function aa() {
        return 0
    }

    function sa(t) {
        return t.innerRadius
    }

    function ua(t) {
        return t.outerRadius
    }

    function la(t) {
        return t.startAngle
    }

    function ca(t) {
        return t.endAngle
    }

    function fa(t) {
        return t && t.padAngle
    }

    function ha(t, e, n, r) {
        return (t - n) * e - (e - r) * t > 0 ? 0 : 1
    }

    function pa(t, e, n, r, i) {
        var o = t[0] - e[0],
            a = t[1] - e[1],
            s = (i ? r : -r) / Math.sqrt(o * o + a * a),
            u = s * a,
            l = -s * o,
            c = t[0] + u,
            f = t[1] + l,
            h = e[0] + u,
            p = e[1] + l,
            d = (c + h) / 2,
            g = (f + p) / 2,
            v = h - c,
            m = p - f,
            y = v * v + m * m,
            b = n - r,
            x = c * p - h * f,
            w = (0 > m ? -1 : 1) * Math.sqrt(b * b * y - x * x),
            _ = (x * m - v * w) / y,
            S = (-x * v - m * w) / y,
            M = (x * m + v * w) / y,
            k = (-x * v + m * w) / y,
            T = _ - d,
            C = S - g,
            E = M - d,
            N = k - g;
        return T * T + C * C > E * E + N * N && (_ = M, S = k), [
            [_ - u, S - l],
            [_ * n / b, S * n / b]
        ]
    }

    function da(t) {
        function e(e) {
            function a() {
                l.push("M", o(t(c), s))
            }
            for (var u, l = [], c = [], f = -1, h = e.length, p = Te(n), d = Te(r); ++f < h;) i.call(this, u = e[f], f) ? c.push([+p.call(this, u, f), +d.call(this, u, f)]) : c.length && (a(), c = []);
            return c.length && a(), l.length ? l.join("") : null
        }
        var n = Er,
            r = Nr,
            i = Nn,
            o = ga,
            a = o.key,
            s = .7;
        return e.x = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.y = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.defined = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e.interpolate = function(t) {
            return arguments.length ? (a = "function" == typeof t ? o = t : (o = Cl.get(t) || ga).key, e) : a
        }, e.tension = function(t) {
            return arguments.length ? (s = t, e) : s
        }, e
    }

    function ga(t) {
        return t.join("L")
    }

    function va(t) {
        return ga(t) + "Z"
    }

    function ma(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
        return n > 1 && i.push("H", r[0]), i.join("")
    }

    function ya(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
        return i.join("")
    }

    function ba(t) {
        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
        return i.join("")
    }

    function xa(t, e) {
        return t.length < 4 ? ga(t) : t[1] + Sa(t.slice(1, -1), Ma(t, e))
    }

    function wa(t, e) {
        return t.length < 3 ? ga(t) : t[0] + Sa((t.push(t[0]), t), Ma([t[t.length - 2]].concat(t, [t[1]]), e))
    }

    function _a(t, e) {
        return t.length < 3 ? ga(t) : t[0] + Sa(t, Ma(t, e))
    }

    function Sa(t, e) {
        if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return ga(t);
        var n = t.length != e.length,
            r = "",
            i = t[0],
            o = t[1],
            a = e[0],
            s = a,
            u = 1;
        if (n && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], u = 2), e.length > 1) {
            s = e[1], o = t[u], u++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1];
            for (var l = 2; l < e.length; l++, u++) o = t[u], s = e[l], r += "S" + (o[0] - s[0]) + "," + (o[1] - s[1]) + "," + o[0] + "," + o[1]
        }
        if (n) {
            var c = t[u];
            r += "Q" + (o[0] + 2 * s[0] / 3) + "," + (o[1] + 2 * s[1] / 3) + "," + c[0] + "," + c[1]
        }
        return r
    }

    function Ma(t, e) {
        for (var n, r = [], i = (1 - e) / 2, o = t[0], a = t[1], s = 1, u = t.length; ++s < u;) n = o, o = a, a = t[s], r.push([i * (a[0] - n[0]), i * (a[1] - n[1])]);
        return r
    }

    function ka(t) {
        if (t.length < 3) return ga(t);
        var e = 1,
            n = t.length,
            r = t[0],
            i = r[0],
            o = r[1],
            a = [i, i, i, (r = t[1])[0]],
            s = [o, o, o, r[1]],
            u = [i, ",", o, "L", Na(Al, a), ",", Na(Al, s)];
        for (t.push(t[n - 1]); ++e <= n;) r = t[e], a.shift(), a.push(r[0]), s.shift(), s.push(r[1]), Aa(u, a, s);
        return t.pop(), u.push("L", r), u.join("")
    }

    function Ta(t) {
        if (t.length < 4) return ga(t);
        for (var e, n = [], r = -1, i = t.length, o = [0], a = [0]; ++r < 3;) e = t[r], o.push(e[0]), a.push(e[1]);
        for (n.push(Na(Al, o) + "," + Na(Al, a)), --r; ++r < i;) e = t[r], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Aa(n, o, a);
        return n.join("")
    }

    function Ca(t) {
        for (var e, n, r = -1, i = t.length, o = i + 4, a = [], s = []; ++r < 4;) n = t[r % i], a.push(n[0]), s.push(n[1]);
        for (e = [Na(Al, a), ",", Na(Al, s)], --r; ++r < o;) n = t[r % i], a.shift(), a.push(n[0]), s.shift(), s.push(n[1]), Aa(e, a, s);
        return e.join("")
    }

    function Ea(t, e) {
        var n = t.length - 1;
        if (n)
            for (var r, i, o = t[0][0], a = t[0][1], s = t[n][0] - o, u = t[n][1] - a, l = -1; ++l <= n;) r = t[l], i = l / n, r[0] = e * r[0] + (1 - e) * (o + i * s), r[1] = e * r[1] + (1 - e) * (a + i * u);
        return ka(t)
    }

    function Na(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }

    function Aa(t, e, n) {
        t.push("C", Na(El, e), ",", Na(El, n), ",", Na(Nl, e), ",", Na(Nl, n), ",", Na(Al, e), ",", Na(Al, n))
    }

    function Da(t, e) {
        return (e[1] - t[1]) / (e[0] - t[0])
    }

    function $a(t) {
        for (var e = 0, n = t.length - 1, r = [], i = t[0], o = t[1], a = r[0] = Da(i, o); ++e < n;) r[e] = (a + (a = Da(i = o, o = t[e + 1]))) / 2;
        return r[e] = a, r
    }

    function Pa(t) {
        for (var e, n, r, i, o = [], a = $a(t), s = -1, u = t.length - 1; ++s < u;) e = Da(t[s], t[s + 1]), ds(e) < As ? a[s] = a[s + 1] = 0 : (n = a[s] / e, r = a[s + 1] / e, i = n * n + r * r, i > 9 && (i = 3 * e / Math.sqrt(i), a[s] = i * n, a[s + 1] = i * r));
        for (s = -1; ++s <= u;) i = (t[Math.min(u, s + 1)][0] - t[Math.max(0, s - 1)][0]) / (6 * (1 + a[s] * a[s])), o.push([i || 0, a[s] * i || 0]);
        return o
    }

    function Oa(t) {
        return t.length < 3 ? ga(t) : t[0] + Sa(t, Pa(t))
    }

    function ja(t) {
        for (var e, n, r, i = -1, o = t.length; ++i < o;) e = t[i], n = e[0], r = e[1] - js, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
        return t
    }

    function La(t) {
        function e(e) {
            function u() {
                g.push("M", s(t(m), f), c, l(t(v.reverse()), f), "Z")
            }
            for (var h, p, d, g = [], v = [], m = [], y = -1, b = e.length, x = Te(n), w = Te(i), _ = n === r ? function() {
                return p
            } : Te(r), S = i === o ? function() {
                return d
            } : Te(o); ++y < b;) a.call(this, h = e[y], y) ? (v.push([p = +x.call(this, h, y), d = +w.call(this, h, y)]), m.push([+_.call(this, h, y), +S.call(this, h, y)])) : v.length && (u(), v = [], m = []);
            return v.length && u(), g.length ? g.join("") : null
        }
        var n = Er,
            r = Er,
            i = 0,
            o = Nr,
            a = Nn,
            s = ga,
            u = s.key,
            l = s,
            c = "L",
            f = .7;
        return e.x = function(t) {
            return arguments.length ? (n = r = t, e) : r
        }, e.x0 = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.x1 = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e.y = function(t) {
            return arguments.length ? (i = o = t, e) : o
        }, e.y0 = function(t) {
            return arguments.length ? (i = t, e) : i
        }, e.y1 = function(t) {
            return arguments.length ? (o = t, e) : o
        }, e.defined = function(t) {
            return arguments.length ? (a = t, e) : a
        }, e.interpolate = function(t) {
            return arguments.length ? (u = "function" == typeof t ? s = t : (s = Cl.get(t) || ga).key, l = s.reverse || s, c = s.closed ? "M" : "L", e) : u
        }, e.tension = function(t) {
            return arguments.length ? (f = t, e) : f
        }, e
    }

    function Ra(t) {
        return t.radius
    }

    function qa(t) {
        return [t.x, t.y]
    }

    function Ia(t) {
        return function() {
            var e = t.apply(this, arguments),
                n = e[0],
                r = e[1] - js;
            return [n * Math.cos(r), n * Math.sin(r)]
        }
    }

    function Ha() {
        return 64
    }

    function Fa() {
        return "circle"
    }

    function za(t) {
        var e = Math.sqrt(t / $s);
        return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
    }

    function Ua(t) {
        return function() {
            var e, n;
            (e = this[t]) && (n = e[e.active]) && (--e.count ? delete e[e.active] : delete this[t], e.active += .5, n.event && n.event.interrupt.call(this, this.__data__, n.index))
        }
    }

    function Wa(t, e, n) {
        return bs(t, Rl), t.namespace = e, t.id = n, t
    }

    function Ba(t, e, n, r) {
        var i = t.id,
            o = t.namespace;
        return U(t, "function" == typeof n ? function(t, a, s) {
            t[o][i].tween.set(e, r(n.call(t, t.__data__, a, s)))
        } : (n = r(n), function(t) {
            t[o][i].tween.set(e, n)
        }))
    }

    function Va(t) {
        return null == t && (t = ""),
            function() {
                this.textContent = t
            }
    }

    function Ya(t) {
        return null == t ? "__transition__" : "__transition_" + t + "__"
    }

    function Xa(t, e, n, r, i) {
        var o = t[n] || (t[n] = {
                active: 0,
                count: 0
            }),
            a = o[r];
        if (!a) {
            var s = i.time;
            a = o[r] = {
                tween: new l,
                time: s,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                index: e
            }, i = null, ++o.count, ns.timer(function(i) {
                function u(n) {
                    if (o.active > r) return c();
                    var i = o[o.active];
                    i && (--o.count, delete o[o.active], i.event && i.event.interrupt.call(t, t.__data__, i.index)), o.active = r, a.event && a.event.start.call(t, t.__data__, e), a.tween.forEach(function(n, r) {
                        (r = r.call(t, t.__data__, e)) && g.push(r)
                    }), h = a.ease, f = a.duration, ns.timer(function() {
                        return d.c = l(n || 1) ? Nn : l, 1
                    }, 0, s)
                }

                function l(n) {
                    if (o.active !== r) return 1;
                    for (var i = n / f, s = h(i), u = g.length; u > 0;) g[--u].call(t, s);
                    return i >= 1 ? (a.event && a.event.end.call(t, t.__data__, e), c()) : void 0
                }

                function c() {
                    return --o.count ? delete o[r] : delete t[n], 1
                }
                var f, h, p = a.delay,
                    d = ru,
                    g = [];
                return d.t = p + s, i >= p ? u(i - p) : void(d.c = u)
            }, 0, s)
        }
    }

    function Qa(t, e, n) {
        t.attr("transform", function(t) {
            var r = e(t);
            return "translate(" + (isFinite(r) ? r : n(t)) + ",0)"
        })
    }

    function Za(t, e, n) {
        t.attr("transform", function(t) {
            var r = e(t);
            return "translate(0," + (isFinite(r) ? r : n(t)) + ")"
        })
    }

    function Ga(t) {
        return t.toISOString()
    }

    function Ja(t, e, n) {
        function r(e) {
            return t(e)
        }

        function i(t, n) {
            var r = t[1] - t[0],
                i = r / n,
                o = ns.bisect(Vl, i);
            return o == Vl.length ? [e.year, Yo(t.map(function(t) {
                return t / 31536e6
            }), n)[2]] : o ? e[i / Vl[o - 1] < Vl[o] / i ? o - 1 : o] : [Ql, Yo(t, n)[2]]
        }
        return r.invert = function(e) {
            return Ka(t.invert(e))
        }, r.domain = function(e) {
            return arguments.length ? (t.domain(e), r) : t.domain().map(Ka)
        }, r.nice = function(t, e) {
            function n(n) {
                return !isNaN(n) && !t.range(n, Ka(+n + 1), e).length
            }
            var o = r.domain(),
                a = qo(o),
                s = null == t ? i(a, 10) : "number" == typeof t && i(a, t);
            return s && (t = s[0], e = s[1]), r.domain(Fo(o, e > 1 ? {
                floor: function(e) {
                    for (; n(e = t.floor(e));) e = Ka(e - 1);
                    return e
                },
                ceil: function(e) {
                    for (; n(e = t.ceil(e));) e = Ka(+e + 1);
                    return e
                }
            } : t))
        }, r.ticks = function(t, e) {
            var n = qo(r.domain()),
                o = null == t ? i(n, 10) : "number" == typeof t ? i(n, t) : !t.range && [{
                    range: t
                }, e];
            return o && (t = o[0], e = o[1]), t.range(n[0], Ka(+n[1] + 1), 1 > e ? 1 : e)
        }, r.tickFormat = function() {
            return n
        }, r.copy = function() {
            return Ja(t.copy(), e, n)
        }, Bo(r, t)
    }

    function Ka(t) {
        return new Date(t)
    }

    function ts(t) {
        return JSON.parse(t.responseText)
    }

    function es(t) {
        var e = os.createRange();
        return e.selectNode(os.body), e.createContextualFragment(t.responseText)
    }
    var ns = {
            version: "3.5.5"
        },
        rs = [].slice,
        is = function(t) {
            return rs.call(t)
        },
        os = this.document;
    if (os) try {
        is(os.documentElement.childNodes)[0].nodeType
    } catch (as) {
        is = function(t) {
            for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
            return n
        }
    }
    if (Date.now || (Date.now = function() {
        return +new Date
    }), os) try {
        os.createElement("DIV").style.setProperty("opacity", 0, "")
    } catch (ss) {
        var us = this.Element.prototype,
            ls = us.setAttribute,
            cs = us.setAttributeNS,
            fs = this.CSSStyleDeclaration.prototype,
            hs = fs.setProperty;
        us.setAttribute = function(t, e) {
            ls.call(this, t, e + "")
        }, us.setAttributeNS = function(t, e, n) {
            cs.call(this, t, e, n + "")
        }, fs.setProperty = function(t, e, n) {
            hs.call(this, t, e + "", n)
        }
    }
    ns.ascending = n, ns.descending = function(t, e) {
        return t > e ? -1 : e > t ? 1 : e >= t ? 0 : 0 / 0
    }, ns.min = function(t, e) {
        var n, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = t[i]) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = t[i]) && n > r && (n = r)
        } else {
            for (; ++i < o;)
                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && n > r && (n = r)
        }
        return n
    }, ns.max = function(t, e) {
        var n, r, i = -1,
            o = t.length;
        if (1 === arguments.length) {
            for (; ++i < o;)
                if (null != (r = t[i]) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = t[i]) && r > n && (n = r)
        } else {
            for (; ++i < o;)
                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                    n = r;
                    break
                }
            for (; ++i < o;) null != (r = e.call(t, t[i], i)) && r > n && (n = r)
        }
        return n
    }, ns.extent = function(t, e) {
        var n, r, i, o = -1,
            a = t.length;
        if (1 === arguments.length) {
            for (; ++o < a;)
                if (null != (r = t[o]) && r >= r) {
                    n = i = r;
                    break
                }
            for (; ++o < a;) null != (r = t[o]) && (n > r && (n = r), r > i && (i = r))
        } else {
            for (; ++o < a;)
                if (null != (r = e.call(t, t[o], o)) && r >= r) {
                    n = i = r;
                    break
                }
            for (; ++o < a;) null != (r = e.call(t, t[o], o)) && (n > r && (n = r), r > i && (i = r))
        }
        return [n, i]
    }, ns.sum = function(t, e) {
        var n, r = 0,
            o = t.length,
            a = -1;
        if (1 === arguments.length)
            for (; ++a < o;) i(n = +t[a]) && (r += n);
        else
            for (; ++a < o;) i(n = +e.call(t, t[a], a)) && (r += n);
        return r
    }, ns.mean = function(t, e) {
        var n, o = 0,
            a = t.length,
            s = -1,
            u = a;
        if (1 === arguments.length)
            for (; ++s < a;) i(n = r(t[s])) ? o += n : --u;
        else
            for (; ++s < a;) i(n = r(e.call(t, t[s], s))) ? o += n : --u;
        return u ? o / u : void 0
    }, ns.quantile = function(t, e) {
        var n = (t.length - 1) * e + 1,
            r = Math.floor(n),
            i = +t[r - 1],
            o = n - r;
        return o ? i + o * (t[r] - i) : i
    }, ns.median = function(t, e) {
        var o, a = [],
            s = t.length,
            u = -1;
        if (1 === arguments.length)
            for (; ++u < s;) i(o = r(t[u])) && a.push(o);
        else
            for (; ++u < s;) i(o = r(e.call(t, t[u], u))) && a.push(o);
        return a.length ? ns.quantile(a.sort(n), .5) : void 0
    }, ns.variance = function(t, e) {
        var n, o, a = t.length,
            s = 0,
            u = 0,
            l = -1,
            c = 0;
        if (1 === arguments.length)
            for (; ++l < a;) i(n = r(t[l])) && (o = n - s, s += o / ++c, u += o * (n - s));
        else
            for (; ++l < a;) i(n = r(e.call(t, t[l], l))) && (o = n - s, s += o / ++c, u += o * (n - s));
        return c > 1 ? u / (c - 1) : void 0
    }, ns.deviation = function() {
        var t = ns.variance.apply(this, arguments);
        return t ? Math.sqrt(t) : t
    };
    var ps = o(n);
    ns.bisectLeft = ps.left, ns.bisect = ns.bisectRight = ps.right, ns.bisector = function(t) {
        return o(1 === t.length ? function(e, r) {
            return n(t(e), r)
        } : t)
    }, ns.shuffle = function(t, e, n) {
        (o = arguments.length) < 3 && (n = t.length, 2 > o && (e = 0));
        for (var r, i, o = n - e; o;) i = Math.random() * o-- | 0, r = t[o + e], t[o + e] = t[i + e], t[i + e] = r;
        return t
    }, ns.permute = function(t, e) {
        for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
        return r
    }, ns.pairs = function(t) {
        for (var e, n = 0, r = t.length - 1, i = t[0], o = new Array(0 > r ? 0 : r); r > n;) o[n] = [e = i, i = t[++n]];
        return o
    }, ns.zip = function() {
        if (!(r = arguments.length)) return [];
        for (var t = -1, e = ns.min(arguments, a), n = new Array(e); ++t < e;)
            for (var r, i = -1, o = n[t] = new Array(r); ++i < r;) o[i] = arguments[i][t];
        return n
    }, ns.transpose = function(t) {
        return ns.zip.apply(ns, t)
    }, ns.keys = function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e
    }, ns.values = function(t) {
        var e = [];
        for (var n in t) e.push(t[n]);
        return e
    }, ns.entries = function(t) {
        var e = [];
        for (var n in t) e.push({
            key: n,
            value: t[n]
        });
        return e
    }, ns.merge = function(t) {
        for (var e, n, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
        for (n = new Array(a); --i >= 0;)
            for (r = t[i], e = r.length; --e >= 0;) n[--a] = r[e];
        return n
    };
    var ds = Math.abs;
    ns.range = function(t, e, n) {
        if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n === 1 / 0) throw new Error("infinite range");
        var r, i = [],
            o = s(ds(n)),
            a = -1;
        if (t *= o, e *= o, n *= o, 0 > n)
            for (;
                (r = t + n * ++a) > e;) i.push(r / o);
        else
            for (;
                (r = t + n * ++a) < e;) i.push(r / o);
        return i
    }, ns.map = function(t, e) {
        var n = new l;
        if (t instanceof l) t.forEach(function(t, e) {
            n.set(t, e)
        });
        else if (Array.isArray(t)) {
            var r, i = -1,
                o = t.length;
            if (1 === arguments.length)
                for (; ++i < o;) n.set(i, t[i]);
            else
                for (; ++i < o;) n.set(e.call(t, r = t[i], i), r)
        } else
            for (var a in t) n.set(a, t[a]);
        return n
    };
    var gs = "__proto__",
        vs = "\x00";
    u(l, {
        has: h,
        get: function(t) {
            return this._[c(t)]
        },
        set: function(t, e) {
            return this._[c(t)] = e
        },
        remove: p,
        keys: d,
        values: function() {
            var t = [];
            for (var e in this._) t.push(this._[e]);
            return t
        },
        entries: function() {
            var t = [];
            for (var e in this._) t.push({
                key: f(e),
                value: this._[e]
            });
            return t
        },
        size: g,
        empty: v,
        forEach: function(t) {
            for (var e in this._) t.call(this, f(e), this._[e])
        }
    }), ns.nest = function() {
        function t(e, a, s) {
            if (s >= o.length) return r ? r.call(i, a) : n ? a.sort(n) : a;
            for (var u, c, f, h, p = -1, d = a.length, g = o[s++], v = new l; ++p < d;)(h = v.get(u = g(c = a[p]))) ? h.push(c) : v.set(u, [c]);
            return e ? (c = e(), f = function(n, r) {
                c.set(n, t(e, r, s))
            }) : (c = {}, f = function(n, r) {
                c[n] = t(e, r, s)
            }), v.forEach(f), c
        }

        function e(t, n) {
            if (n >= o.length) return t;
            var r = [],
                i = a[n++];
            return t.forEach(function(t, i) {
                r.push({
                    key: t,
                    values: e(i, n)
                })
            }), i ? r.sort(function(t, e) {
                return i(t.key, e.key)
            }) : r
        }
        var n, r, i = {},
            o = [],
            a = [];
        return i.map = function(e, n) {
            return t(n, e, 0)
        }, i.entries = function(n) {
            return e(t(ns.map, n, 0), 0)
        }, i.key = function(t) {
            return o.push(t), i
        }, i.sortKeys = function(t) {
            return a[o.length - 1] = t, i
        }, i.sortValues = function(t) {
            return n = t, i
        }, i.rollup = function(t) {
            return r = t, i
        }, i
    }, ns.set = function(t) {
        var e = new m;
        if (t)
            for (var n = 0, r = t.length; r > n; ++n) e.add(t[n]);
        return e
    }, u(m, {
        has: h,
        add: function(t) {
            return this._[c(t += "")] = !0, t
        },
        remove: p,
        values: d,
        size: g,
        empty: v,
        forEach: function(t) {
            for (var e in this._) t.call(this, f(e))
        }
    }), ns.behavior = {}, ns.rebind = function(t, e) {
        for (var n, r = 1, i = arguments.length; ++r < i;) t[n = arguments[r]] = b(t, e, e[n]);
        return t
    };
    var ms = ["webkit", "ms", "moz", "Moz", "o", "O"];
    ns.dispatch = function() {
        for (var t = new _, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = S(t);
        return t
    }, _.prototype.on = function(t, e) {
        var n = t.indexOf("."),
            r = "";
        if (n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
        if (2 === arguments.length) {
            if (null == e)
                for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
            return this
        }
    }, ns.event = null, ns.requote = function(t) {
        return t.replace(ys, "\\$&")
    };
    var ys = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        bs = {}.__proto__ ? function(t, e) {
            t.__proto__ = e
        } : function(t, e) {
            for (var n in e) t[n] = e[n]
        },
        xs = function(t, e) {
            return e.querySelector(t)
        },
        ws = function(t, e) {
            return e.querySelectorAll(t)
        },
        _s = function(t, e) {
            var n = t.matches || t[x(t, "matchesSelector")];
            return (_s = function(t, e) {
                return n.call(t, e)
            })(t, e)
        };
    "function" == typeof Sizzle && (xs = function(t, e) {
        return Sizzle(t, e)[0] || null
    }, ws = Sizzle, _s = Sizzle.matchesSelector), ns.selection = function() {
        return ns.select(os.documentElement)
    };
    var Ss = ns.selection.prototype = [];
    Ss.select = function(t) {
        var e, n, r, i, o = [];
        t = E(t);
        for (var a = -1, s = this.length; ++a < s;) {
            o.push(e = []), e.parentNode = (r = this[a]).parentNode;
            for (var u = -1, l = r.length; ++u < l;)(i = r[u]) ? (e.push(n = t.call(i, i.__data__, u, a)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
        }
        return C(o)
    }, Ss.selectAll = function(t) {
        var e, n, r = [];
        t = N(t);
        for (var i = -1, o = this.length; ++i < o;)
            for (var a = this[i], s = -1, u = a.length; ++s < u;)(n = a[s]) && (r.push(e = is(t.call(n, n.__data__, s, i))), e.parentNode = n);
        return C(r)
    };
    var Ms = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    ns.ns = {
        prefix: Ms,
        qualify: function(t) {
            var e = t.indexOf(":"),
                n = t;
            return e >= 0 && (n = t.slice(0, e), t = t.slice(e + 1)), Ms.hasOwnProperty(n) ? {
                space: Ms[n],
                local: t
            } : t
        }
    }, Ss.attr = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node();
                return t = ns.ns.qualify(t), t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
            }
            for (e in t) this.each(A(e, t[e]));
            return this
        }
        return this.each(A(t, e))
    }, Ss.classed = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) {
                var n = this.node(),
                    r = (t = P(t)).length,
                    i = -1;
                if (e = n.classList) {
                    for (; ++i < r;)
                        if (!e.contains(t[i])) return !1
                } else
                    for (e = n.getAttribute("class"); ++i < r;)
                        if (!$(t[i]).test(e)) return !1; return !0
            }
            for (e in t) this.each(O(e, t[e]));
            return this
        }
        return this.each(O(t, e))
    }, Ss.style = function(t, n, r) {
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof t) {
                2 > i && (n = "");
                for (r in t) this.each(L(r, t[r], n));
                return this
            }
            if (2 > i) {
                var o = this.node();
                return e(o).getComputedStyle(o, null).getPropertyValue(t)
            }
            r = ""
        }
        return this.each(L(t, n, r))
    }, Ss.property = function(t, e) {
        if (arguments.length < 2) {
            if ("string" == typeof t) return this.node()[t];
            for (e in t) this.each(R(e, t[e]));
            return this
        }
        return this.each(R(t, e))
    }, Ss.text = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e
        } : null == t ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = t
        }) : this.node().textContent
    }, Ss.html = function(t) {
        return arguments.length ? this.each("function" == typeof t ? function() {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e
        } : null == t ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = t
        }) : this.node().innerHTML
    }, Ss.append = function(t) {
        return t = q(t), this.select(function() {
            return this.appendChild(t.apply(this, arguments))
        })
    }, Ss.insert = function(t, e) {
        return t = q(t), e = E(e), this.select(function() {
            return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
        })
    }, Ss.remove = function() {
        return this.each(I)
    }, Ss.data = function(t, e) {
        function n(t, n) {
            var r, i, o, a = t.length,
                f = n.length,
                h = Math.min(a, f),
                p = new Array(f),
                d = new Array(f),
                g = new Array(a);
            if (e) {
                var v, m = new l,
                    y = new Array(a);
                for (r = -1; ++r < a;) m.has(v = e.call(i = t[r], i.__data__, r)) ? g[r] = i : m.set(v, i), y[r] = v;
                for (r = -1; ++r < f;)(i = m.get(v = e.call(n, o = n[r], r))) ? i !== !0 && (p[r] = i, i.__data__ = o) : d[r] = H(o), m.set(v, !0);
                for (r = -1; ++r < a;) m.get(y[r]) !== !0 && (g[r] = t[r])
            } else {
                for (r = -1; ++r < h;) i = t[r], o = n[r], i ? (i.__data__ = o, p[r] = i) : d[r] = H(o);
                for (; f > r; ++r) d[r] = H(n[r]);
                for (; a > r; ++r) g[r] = t[r]
            }
            d.update = p, d.parentNode = p.parentNode = g.parentNode = t.parentNode, s.push(d), u.push(p), c.push(g)
        }
        var r, i, o = -1,
            a = this.length;
        if (!arguments.length) {
            for (t = new Array(a = (r = this[0]).length); ++o < a;)(i = r[o]) && (t[o] = i.__data__);
            return t
        }
        var s = W([]),
            u = C([]),
            c = C([]);
        if ("function" == typeof t)
            for (; ++o < a;) n(r = this[o], t.call(r, r.parentNode.__data__, o));
        else
            for (; ++o < a;) n(r = this[o], t);
        return u.enter = function() {
            return s
        }, u.exit = function() {
            return c
        }, u
    }, Ss.datum = function(t) {
        return arguments.length ? this.property("__data__", t) : this.property("__data__")
    }, Ss.filter = function(t) {
        var e, n, r, i = [];
        "function" != typeof t && (t = F(t));
        for (var o = 0, a = this.length; a > o; o++) {
            i.push(e = []), e.parentNode = (n = this[o]).parentNode;
            for (var s = 0, u = n.length; u > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
        }
        return C(i)
    }, Ss.order = function() {
        for (var t = -1, e = this.length; ++t < e;)
            for (var n, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
        return this
    }, Ss.sort = function(t) {
        t = z.apply(this, arguments);
        for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
        return this.order()
    }, Ss.each = function(t) {
        return U(this, function(e, n, r) {
            t.call(e, e.__data__, n, r)
        })
    }, Ss.call = function(t) {
        var e = is(arguments);
        return t.apply(e[0] = this, e), this
    }, Ss.empty = function() {
        return !this.node()
    }, Ss.node = function() {
        for (var t = 0, e = this.length; e > t; t++)
            for (var n = this[t], r = 0, i = n.length; i > r; r++) {
                var o = n[r];
                if (o) return o
            }
        return null
    }, Ss.size = function() {
        var t = 0;
        return U(this, function() {
            ++t
        }), t
    };
    var ks = [];
    ns.selection.enter = W, ns.selection.enter.prototype = ks, ks.append = Ss.append, ks.empty = Ss.empty, ks.node = Ss.node, ks.call = Ss.call, ks.size = Ss.size, ks.select = function(t) {
        for (var e, n, r, i, o, a = [], s = -1, u = this.length; ++s < u;) {
            r = (i = this[s]).update, a.push(e = []), e.parentNode = i.parentNode;
            for (var l = -1, c = i.length; ++l < c;)(o = i[l]) ? (e.push(r[l] = n = t.call(i.parentNode, o.__data__, l, s)), n.__data__ = o.__data__) : e.push(null)
        }
        return C(a)
    }, ks.insert = function(t, e) {
        return arguments.length < 2 && (e = B(this)), Ss.insert.call(this, t, e)
    }, ns.select = function(e) {
        var n;
        return "string" == typeof e ? (n = [xs(e, os)], n.parentNode = os.documentElement) : (n = [e], n.parentNode = t(e)), C([n])
    }, ns.selectAll = function(t) {
        var e;
        return "string" == typeof t ? (e = is(ws(t, os)), e.parentNode = os.documentElement) : (e = t, e.parentNode = null), C([e])
    }, Ss.on = function(t, e, n) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof t) {
                2 > r && (e = !1);
                for (n in t) this.each(V(n, t[n], e));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + t]) && r._;
            n = !1
        }
        return this.each(V(t, e, n))
    };
    var Ts = ns.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    os && Ts.forEach(function(t) {
        "on" + t in os && Ts.remove(t)
    });
    var Cs, Es = 0;
    ns.mouse = function(t) {
        return Z(t, k())
    };
    var Ns = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    ns.touch = function(t, e, n) {
        if (arguments.length < 3 && (n = e, e = k().changedTouches), e)
            for (var r, i = 0, o = e.length; o > i; ++i)
                if ((r = e[i]).identifier === n) return Z(t, r)
    }, ns.behavior.drag = function() {
        function t() {
            this.on("mousedown.drag", o).on("touchstart.drag", a)
        }

        function n(t, e, n, o, a) {
            return function() {
                function s() {
                    var t, n, r = e(h, g);
                    r && (t = r[0] - b[0], n = r[1] - b[1], d |= t | n, b = r, p({
                        type: "drag",
                        x: r[0] + l[0],
                        y: r[1] + l[1],
                        dx: t,
                        dy: n
                    }))
                }

                function u() {
                    e(h, g) && (m.on(o + v, null).on(a + v, null), y(d && ns.event.target === f), p({
                        type: "dragend"
                    }))
                }
                var l, c = this,
                    f = ns.event.target,
                    h = c.parentNode,
                    p = r.of(c, arguments),
                    d = 0,
                    g = t(),
                    v = ".drag" + (null == g ? "" : "-" + g),
                    m = ns.select(n(f)).on(o + v, s).on(a + v, u),
                    y = Q(f),
                    b = e(h, g);
                i ? (l = i.apply(c, arguments), l = [l.x - b[0], l.y - b[1]]) : l = [0, 0], p({
                    type: "dragstart"
                })
            }
        }
        var r = T(t, "drag", "dragstart", "dragend"),
            i = null,
            o = n(w, ns.mouse, e, "mousemove", "mouseup"),
            a = n(G, ns.touch, y, "touchmove", "touchend");
        return t.origin = function(e) {
            return arguments.length ? (i = e, t) : i
        }, ns.rebind(t, r, "on")
    }, ns.touches = function(t, e) {
        return arguments.length < 2 && (e = k().touches), e ? is(e).map(function(e) {
            var n = Z(t, e);
            return n.identifier = e.identifier, n
        }) : []
    };
    var As = 1e-6,
        Ds = As * As,
        $s = Math.PI,
        Ps = 2 * $s,
        Os = Ps - As,
        js = $s / 2,
        Ls = $s / 180,
        Rs = 180 / $s,
        qs = Math.SQRT2,
        Is = 2,
        Hs = 4;
    ns.interpolateZoom = function(t, e) {
        function n(t) {
            var e = t * y;
            if (m) {
                var n = re(g),
                    a = o / (Is * h) * (n * ie(qs * e + g) - ne(g));
                return [r + a * l, i + a * c, o * n / re(qs * e + g)]
            }
            return [r + t * l, i + t * c, o * Math.exp(qs * e)]
        }
        var r = t[0],
            i = t[1],
            o = t[2],
            a = e[0],
            s = e[1],
            u = e[2],
            l = a - r,
            c = s - i,
            f = l * l + c * c,
            h = Math.sqrt(f),
            p = (u * u - o * o + Hs * f) / (2 * o * Is * h),
            d = (u * u - o * o - Hs * f) / (2 * u * Is * h),
            g = Math.log(Math.sqrt(p * p + 1) - p),
            v = Math.log(Math.sqrt(d * d + 1) - d),
            m = v - g,
            y = (m || Math.log(u / o)) / qs;
        return n.duration = 1e3 * y, n
    }, ns.behavior.zoom = function() {
        function t(t) {
            t.on(D, f).on(zs + ".zoom", p).on("dblclick.zoom", d).on(O, h)
        }

        function n(t) {
            return [(t[0] - k.x) / k.k, (t[1] - k.y) / k.k]
        }

        function r(t) {
            return [t[0] * k.k + k.x, t[1] * k.k + k.y]
        }

        function i(t) {
            k.k = Math.max(E[0], Math.min(E[1], t))
        }

        function o(t, e) {
            e = r(e), k.x += t[0] - e[0], k.y += t[1] - e[1]
        }

        function a(e, n, r, a) {
            e.__chart__ = {
                x: k.x,
                y: k.y,
                k: k.k
            }, i(Math.pow(2, a)), o(v = n, r), e = ns.select(e), N > 0 && (e = e.transition().duration(N)), e.call(t.event)
        }

        function s() {
            w && w.domain(x.range().map(function(t) {
                return (t - k.x) / k.k
            }).map(x.invert)), S && S.domain(_.range().map(function(t) {
                return (t - k.y) / k.k
            }).map(_.invert))
        }

        function u(t) {
            A++ || t({
                type: "zoomstart"
            })
        }

        function l(t) {
            s(), t({
                type: "zoom",
                scale: k.k,
                translate: [k.x, k.y]
            })
        }

        function c(t) {
            --A || t({
                type: "zoomend"
            }), v = null
        }

        function f() {
            function t() {
                f = 1, o(ns.mouse(i), p), l(s)
            }

            function r() {
                h.on($, null).on(P, null), d(f && ns.event.target === a), c(s)
            }
            var i = this,
                a = ns.event.target,
                s = j.of(i, arguments),
                f = 0,
                h = ns.select(e(i)).on($, t).on(P, r),
                p = n(ns.mouse(i)),
                d = Q(i);
            Ll.call(i), u(s)
        }

        function h() {
            function t() {
                var t = ns.touches(d);
                return p = k.k, t.forEach(function(t) {
                    t.identifier in v && (v[t.identifier] = n(t))
                }), t
            }

            function e() {
                var e = ns.event.target;
                ns.select(e).on(x, r).on(w, s), _.push(e);
                for (var n = ns.event.changedTouches, i = 0, o = n.length; o > i; ++i) v[n[i].identifier] = null;
                var u = t(),
                    l = Date.now();
                if (1 === u.length) {
                    if (500 > l - b) {
                        var c = u[0];
                        a(d, c, v[c.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), M()
                    }
                    b = l
                } else if (u.length > 1) {
                    var c = u[0],
                        f = u[1],
                        h = c[0] - f[0],
                        p = c[1] - f[1];
                    m = h * h + p * p
                }
            }

            function r() {
                var t, e, n, r, a = ns.touches(d);
                Ll.call(d);
                for (var s = 0, u = a.length; u > s; ++s, r = null)
                    if (n = a[s], r = v[n.identifier]) {
                        if (e) break;
                        t = n, e = r
                    }
                if (r) {
                    var c = (c = n[0] - t[0]) * c + (c = n[1] - t[1]) * c,
                        f = m && Math.sqrt(c / m);
                    t = [(t[0] + n[0]) / 2, (t[1] + n[1]) / 2], e = [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2], i(f * p)
                }
                b = null, o(t, e), l(g)
            }

            function s() {
                if (ns.event.touches.length) {
                    for (var e = ns.event.changedTouches, n = 0, r = e.length; r > n; ++n) delete v[e[n].identifier];
                    for (var i in v) return void t()
                }
                ns.selectAll(_).on(y, null), S.on(D, f).on(O, h), T(), c(g)
            }
            var p, d = this,
                g = j.of(d, arguments),
                v = {},
                m = 0,
                y = ".zoom-" + ns.event.changedTouches[0].identifier,
                x = "touchmove" + y,
                w = "touchend" + y,
                _ = [],
                S = ns.select(d),
                T = Q(d);
            e(), u(g), S.on(D, null).on(O, e)
        }

        function p() {
            var t = j.of(this, arguments);
            y ? clearTimeout(y) : (g = n(v = m || ns.mouse(this)), Ll.call(this), u(t)), y = setTimeout(function() {
                y = null, c(t)
            }, 50), M(), i(Math.pow(2, .002 * Fs()) * k.k), o(v, g), l(t)
        }

        function d() {
            var t = ns.mouse(this),
                e = Math.log(k.k) / Math.LN2;
            a(this, t, n(t), ns.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
        }
        var g, v, m, y, b, x, w, _, S, k = {
                x: 0,
                y: 0,
                k: 1
            },
            C = [960, 500],
            E = Us,
            N = 250,
            A = 0,
            D = "mousedown.zoom",
            $ = "mousemove.zoom",
            P = "mouseup.zoom",
            O = "touchstart.zoom",
            j = T(t, "zoomstart", "zoom", "zoomend");
        return zs || (zs = "onwheel" in os ? (Fs = function() {
            return -ns.event.deltaY * (ns.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in os ? (Fs = function() {
            return ns.event.wheelDelta
        }, "mousewheel") : (Fs = function() {
            return -ns.event.detail
        }, "MozMousePixelScroll")), t.event = function(t) {
            t.each(function() {
                var t = j.of(this, arguments),
                    e = k;
                Ol ? ns.select(this).transition().each("start.zoom", function() {
                    k = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, u(t)
                }).tween("zoom:zoom", function() {
                    var n = C[0],
                        r = C[1],
                        i = v ? v[0] : n / 2,
                        o = v ? v[1] : r / 2,
                        a = ns.interpolateZoom([(i - k.x) / k.k, (o - k.y) / k.k, n / k.k], [(i - e.x) / e.k, (o - e.y) / e.k, n / e.k]);
                    return function(e) {
                        var r = a(e),
                            s = n / r[2];
                        this.__chart__ = k = {
                            x: i - r[0] * s,
                            y: o - r[1] * s,
                            k: s
                        }, l(t)
                    }
                }).each("interrupt.zoom", function() {
                    c(t)
                }).each("end.zoom", function() {
                    c(t)
                }) : (this.__chart__ = k, u(t), l(t), c(t))
            })
        }, t.translate = function(e) {
            return arguments.length ? (k = {
                x: +e[0],
                y: +e[1],
                k: k.k
            }, s(), t) : [k.x, k.y]
        }, t.scale = function(e) {
            return arguments.length ? (k = {
                x: k.x,
                y: k.y,
                k: +e
            }, s(), t) : k.k
        }, t.scaleExtent = function(e) {
            return arguments.length ? (E = null == e ? Us : [+e[0], +e[1]], t) : E
        }, t.center = function(e) {
            return arguments.length ? (m = e && [+e[0], +e[1]], t) : m
        }, t.size = function(e) {
            return arguments.length ? (C = e && [+e[0], +e[1]], t) : C
        }, t.duration = function(e) {
            return arguments.length ? (N = +e, t) : N
        }, t.x = function(e) {
            return arguments.length ? (w = e, x = e.copy(), k = {
                x: 0,
                y: 0,
                k: 1
            }, t) : w
        }, t.y = function(e) {
            return arguments.length ? (S = e, _ = e.copy(), k = {
                x: 0,
                y: 0,
                k: 1
            }, t) : S
        }, ns.rebind(t, j, "on")
    };
    var Fs, zs, Us = [0, 1 / 0];
    ns.color = ae, ae.prototype.toString = function() {
        return this.rgb() + ""
    }, ns.hsl = se;
    var Ws = se.prototype = new ae;
    Ws.brighter = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new se(this.h, this.s, this.l / t)
    }, Ws.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new se(this.h, this.s, t * this.l)
    }, Ws.rgb = function() {
        return ue(this.h, this.s, this.l)
    }, ns.hcl = le;
    var Bs = le.prototype = new ae;
    Bs.brighter = function(t) {
        return new le(this.h, this.c, Math.min(100, this.l + Vs * (arguments.length ? t : 1)))
    }, Bs.darker = function(t) {
        return new le(this.h, this.c, Math.max(0, this.l - Vs * (arguments.length ? t : 1)))
    }, Bs.rgb = function() {
        return ce(this.h, this.c, this.l).rgb()
    }, ns.lab = fe;
    var Vs = 18,
        Ys = .95047,
        Xs = 1,
        Qs = 1.08883,
        Zs = fe.prototype = new ae;
    Zs.brighter = function(t) {
        return new fe(Math.min(100, this.l + Vs * (arguments.length ? t : 1)), this.a, this.b)
    }, Zs.darker = function(t) {
        return new fe(Math.max(0, this.l - Vs * (arguments.length ? t : 1)), this.a, this.b)
    }, Zs.rgb = function() {
        return he(this.l, this.a, this.b)
    }, ns.rgb = me;
    var Gs = me.prototype = new ae;
    Gs.brighter = function(t) {
        t = Math.pow(.7, arguments.length ? t : 1);
        var e = this.r,
            n = this.g,
            r = this.b,
            i = 30;
        return e || n || r ? (e && i > e && (e = i), n && i > n && (n = i), r && i > r && (r = i), new me(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new me(i, i, i)
    }, Gs.darker = function(t) {
        return t = Math.pow(.7, arguments.length ? t : 1), new me(t * this.r, t * this.g, t * this.b)
    }, Gs.hsl = function() {
        return _e(this.r, this.g, this.b)
    }, Gs.toString = function() {
        return "#" + xe(this.r) + xe(this.g) + xe(this.b)
    };
    var Js = ns.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Js.forEach(function(t, e) {
        Js.set(t, ye(e))
    }), ns.functor = Te, ns.xhr = Ce(y), ns.dsv = function(t, e) {
        function n(t, n, o) {
            arguments.length < 3 && (o = n, n = null);
            var a = Ee(t, e, null == n ? r : i(n), o);
            return a.row = function(t) {
                return arguments.length ? a.response(null == (n = t) ? r : i(t)) : n
            }, a
        }

        function r(t) {
            return n.parse(t.responseText)
        }

        function i(t) {
            return function(e) {
                return n.parse(e.responseText, t)
            }
        }

        function o(e) {
            return e.map(a).join(t)
        }

        function a(t) {
            return s.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
        }
        var s = new RegExp('["' + t + "\n]"),
            u = t.charCodeAt(0);
        return n.parse = function(t, e) {
            var r;
            return n.parseRows(t, function(t, n) {
                if (r) return r(t, n - 1);
                var i = new Function("d", "return {" + t.map(function(t, e) {
                    return JSON.stringify(t) + ": d[" + e + "]"
                }).join(",") + "}");
                r = e ? function(t, n) {
                    return e(i(t), n)
                } : i
            })
        }, n.parseRows = function(t, e) {
            function n() {
                if (c >= l) return a;
                if (i) return i = !1, o;
                var e = c;
                if (34 === t.charCodeAt(e)) {
                    for (var n = e; n++ < l;)
                        if (34 === t.charCodeAt(n)) {
                            if (34 !== t.charCodeAt(n + 1)) break;
                            ++n
                        }
                    c = n + 2;
                    var r = t.charCodeAt(n + 1);
                    return 13 === r ? (i = !0, 10 === t.charCodeAt(n + 2) && ++c) : 10 === r && (i = !0), t.slice(e + 1, n).replace(/""/g, '"')
                }
                for (; l > c;) {
                    var r = t.charCodeAt(c++),
                        s = 1;
                    if (10 === r) i = !0;
                    else if (13 === r) i = !0, 10 === t.charCodeAt(c) && (++c, ++s);
                    else if (r !== u) continue;
                    return t.slice(e, c - s)
                }
                return t.slice(e)
            }
            for (var r, i, o = {}, a = {}, s = [], l = t.length, c = 0, f = 0;
                 (r = n()) !== a;) {
                for (var h = []; r !== o && r !== a;) h.push(r), r = n();
                e && null == (h = e(h, f++)) || s.push(h)
            }
            return s
        }, n.format = function(e) {
            if (Array.isArray(e[0])) return n.formatRows(e);
            var r = new m,
                i = [];
            return e.forEach(function(t) {
                for (var e in t) r.has(e) || i.push(r.add(e))
            }), [i.map(a).join(t)].concat(e.map(function(e) {
                return i.map(function(t) {
                    return a(e[t])
                }).join(t)
            })).join("\n")
        }, n.formatRows = function(t) {
            return t.map(o).join("\n")
        }, n
    }, ns.csv = ns.dsv(",", "text/csv"), ns.tsv = ns.dsv("	", "text/tab-separated-values");
    var Ks, tu, eu, nu, ru, iu = this[x(this, "requestAnimationFrame")] || function(t) {
        setTimeout(t, 17)
    };
    ns.timer = function(t, e, n) {
        var r = arguments.length;
        2 > r && (e = 0), 3 > r && (n = Date.now());
        var i = n + e,
            o = {
                c: t,
                t: i,
                f: !1,
                n: null
            };
        tu ? tu.n = o : Ks = o, tu = o, eu || (nu = clearTimeout(nu), eu = 1, iu(De))
    }, ns.timer.flush = function() {
        $e(), Pe()
    }, ns.round = function(t, e) {
        return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
    };
    var ou = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(je);
    ns.formatPrefix = function(t, e) {
        var n = 0;
        return t && (0 > t && (t *= -1), e && (t = ns.round(t, Oe(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), ou[8 + n / 3]
    };
    var au = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        su = ns.map({
            b: function(t) {
                return t.toString(2)
            },
            c: function(t) {
                return String.fromCharCode(t)
            },
            o: function(t) {
                return t.toString(8)
            },
            x: function(t) {
                return t.toString(16)
            },
            X: function(t) {
                return t.toString(16).toUpperCase()
            },
            g: function(t, e) {
                return t.toPrecision(e)
            },
            e: function(t, e) {
                return t.toExponential(e)
            },
            f: function(t, e) {
                return t.toFixed(e)
            },
            r: function(t, e) {
                return (t = ns.round(t, Oe(t, e))).toFixed(Math.max(0, Math.min(20, Oe(t * (1 + 1e-15), e))))
            }
        }),
        uu = ns.time = {},
        lu = Date;
    qe.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            cu.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            cu.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            cu.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            cu.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            cu.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            cu.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            cu.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            cu.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            cu.setTime.apply(this._, arguments)
        }
    };
    var cu = Date.prototype;
    uu.year = Ie(function(t) {
        return t = uu.day(t), t.setMonth(0, 1), t
    }, function(t, e) {
        t.setFullYear(t.getFullYear() + e)
    }, function(t) {
        return t.getFullYear()
    }), uu.years = uu.year.range, uu.years.utc = uu.year.utc.range, uu.day = Ie(function(t) {
        var e = new lu(2e3, 0);
        return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
    }, function(t, e) {
        t.setDate(t.getDate() + e)
    }, function(t) {
        return t.getDate() - 1
    }), uu.days = uu.day.range, uu.days.utc = uu.day.utc.range, uu.dayOfYear = function(t) {
        var e = uu.year(t);
        return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(t, e) {
        e = 7 - e;
        var n = uu[t] = Ie(function(t) {
            return (t = uu.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t
        }, function(t, e) {
            t.setDate(t.getDate() + 7 * Math.floor(e))
        }, function(t) {
            var n = uu.year(t).getDay();
            return Math.floor((uu.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
        });
        uu[t + "s"] = n.range, uu[t + "s"].utc = n.utc.range, uu[t + "OfYear"] = function(t) {
            var n = uu.year(t).getDay();
            return Math.floor((uu.dayOfYear(t) + (n + e) % 7) / 7)
        }
    }), uu.week = uu.sunday, uu.weeks = uu.sunday.range, uu.weeks.utc = uu.sunday.utc.range, uu.weekOfYear = uu.sundayOfYear;
    var fu = {
            "-": "",
            _: " ",
            0: "0"
        },
        hu = /^\s*\d+/,
        pu = /^%/;
    ns.locale = function(t) {
        return {
            numberFormat: Le(t),
            timeFormat: Fe(t)
        }
    };
    var du = ns.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    ns.format = du.numberFormat, ns.geo = {}, ln.prototype = {
        s: 0,
        t: 0,
        add: function(t) {
            cn(t, this.t, gu), cn(gu.s, this.s, this), this.s ? this.t += gu.t : this.s = gu.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var gu = new ln;
    ns.geo.stream = function(t, e) {
        t && vu.hasOwnProperty(t.type) ? vu[t.type](t, e) : fn(t, e)
    };
    var vu = {
            Feature: function(t, e) {
                fn(t.geometry, e)
            },
            FeatureCollection: function(t, e) {
                for (var n = t.features, r = -1, i = n.length; ++r < i;) fn(n[r].geometry, e)
            }
        },
        mu = {
            Sphere: function(t, e) {
                e.sphere()
            },
            Point: function(t, e) {
                t = t.coordinates, e.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
            },
            LineString: function(t, e) {
                hn(t.coordinates, e, 0)
            },
            MultiLineString: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) hn(n[r], e, 0)
            },
            Polygon: function(t, e) {
                pn(t.coordinates, e)
            },
            MultiPolygon: function(t, e) {
                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) pn(n[r], e)
            },
            GeometryCollection: function(t, e) {
                for (var n = t.geometries, r = -1, i = n.length; ++r < i;) fn(n[r], e)
            }
        };
    ns.geo.area = function(t) {
        return yu = 0, ns.geo.stream(t, xu), yu
    };
    var yu, bu = new ln,
        xu = {
            sphere: function() {
                yu += 4 * $s
            },
            point: w,
            lineStart: w,
            lineEnd: w,
            polygonStart: function() {
                bu.reset(), xu.lineStart = dn
            },
            polygonEnd: function() {
                var t = 2 * bu;
                yu += 0 > t ? 4 * $s + t : t, xu.lineStart = xu.lineEnd = xu.point = w
            }
        };
    ns.geo.bounds = function() {
        function t(t, e) {
            b.push(x = [c = t, h = t]), f > e && (f = e), e > p && (p = e)
        }

        function e(e, n) {
            var r = gn([e * Ls, n * Ls]);
            if (m) {
                var i = mn(m, r),
                    o = [i[1], -i[0], 0],
                    a = mn(o, i);
                xn(a), a = wn(a);
                var u = e - d,
                    l = u > 0 ? 1 : -1,
                    g = a[0] * Rs * l,
                    v = ds(u) > 180;
                if (v ^ (g > l * d && l * e > g)) {
                    var y = a[1] * Rs;
                    y > p && (p = y)
                } else if (g = (g + 360) % 360 - 180, v ^ (g > l * d && l * e > g)) {
                    var y = -a[1] * Rs;
                    f > y && (f = y)
                } else f > n && (f = n), n > p && (p = n);
                v ? d > e ? s(c, e) > s(c, h) && (h = e) : s(e, h) > s(c, h) && (c = e) : h >= c ? (c > e && (c = e), e > h && (h = e)) : e > d ? s(c, e) > s(c, h) && (h = e) : s(e, h) > s(c, h) && (c = e)
            } else t(e, n);
            m = r, d = e
        }

        function n() {
            w.point = e
        }

        function r() {
            x[0] = c, x[1] = h, w.point = t, m = null
        }

        function i(t, n) {
            if (m) {
                var r = t - d;
                y += ds(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else g = t, v = n;
            xu.point(t, n), e(t, n)
        }

        function o() {
            xu.lineStart()
        }

        function a() {
            i(g, v), xu.lineEnd(), ds(y) > As && (c = -(h = 180)), x[0] = c, x[1] = h, m = null
        }

        function s(t, e) {
            return (e -= t) < 0 ? e + 360 : e
        }

        function u(t, e) {
            return t[0] - e[0]
        }

        function l(t, e) {
            return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
        }
        var c, f, h, p, d, g, v, m, y, b, x, w = {
            point: t,
            lineStart: n,
            lineEnd: r,
            polygonStart: function() {
                w.point = i, w.lineStart = o, w.lineEnd = a, y = 0, xu.polygonStart()
            },
            polygonEnd: function() {
                xu.polygonEnd(), w.point = t, w.lineStart = n, w.lineEnd = r, 0 > bu ? (c = -(h = 180), f = -(p = 90)) : y > As ? p = 90 : -As > y && (f = -90), x[0] = c, x[1] = h
            }
        };
        return function(t) {
            p = h = -(c = f = 1 / 0), b = [], ns.geo.stream(t, w);
            var e = b.length;
            if (e) {
                b.sort(u);
                for (var n, r = 1, i = b[0], o = [i]; e > r; ++r) n = b[r], l(n[0], i) || l(n[1], i) ? (s(i[0], n[1]) > s(i[0], i[1]) && (i[1] = n[1]), s(n[0], i[1]) > s(i[0], i[1]) && (i[0] = n[0])) : o.push(i = n);
                for (var a, n, d = -1 / 0, e = o.length - 1, r = 0, i = o[e]; e >= r; i = n, ++r) n = o[r], (a = s(i[1], n[0])) > d && (d = a, c = n[0], h = i[1])
            }
            return b = x = null, 1 / 0 === c || 1 / 0 === f ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [c, f],
                [h, p]
            ]
        }
    }(), ns.geo.centroid = function(t) {
        wu = _u = Su = Mu = ku = Tu = Cu = Eu = Nu = Au = Du = 0, ns.geo.stream(t, $u);
        var e = Nu,
            n = Au,
            r = Du,
            i = e * e + n * n + r * r;
        return Ds > i && (e = Tu, n = Cu, r = Eu, As > _u && (e = Su, n = Mu, r = ku), i = e * e + n * n + r * r, Ds > i) ? [0 / 0, 0 / 0] : [Math.atan2(n, e) * Rs, ee(r / Math.sqrt(i)) * Rs]
    };
    var wu, _u, Su, Mu, ku, Tu, Cu, Eu, Nu, Au, Du, $u = {
            sphere: w,
            point: Sn,
            lineStart: kn,
            lineEnd: Tn,
            polygonStart: function() {
                $u.lineStart = Cn
            },
            polygonEnd: function() {
                $u.lineStart = kn
            }
        },
        Pu = Pn(Nn, Rn, In, [-$s, -$s / 2]),
        Ou = 1e9;
    ns.geo.clipExtent = function() {
        var t, e, n, r, i, o, a = {
            stream: function(t) {
                return i && (i.valid = !1), i = o(t), i.valid = !0, i
            },
            extent: function(s) {
                return arguments.length ? (o = Un(t = +s[0][0], e = +s[0][1], n = +s[1][0], r = +s[1][1]), i && (i.valid = !1, i = null), a) : [
                    [t, e],
                    [n, r]
                ]
            }
        };
        return a.extent([
            [0, 0],
            [960, 500]
        ])
    }, (ns.geo.conicEqualArea = function() {
        return Wn(Bn)
    }).raw = Bn, ns.geo.albers = function() {
        return ns.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, ns.geo.albersUsa = function() {
        function t(t) {
            var o = t[0],
                a = t[1];
            return e = null, n(o, a), e || (r(o, a), e) || i(o, a), e
        }
        var e, n, r, i, o = ns.geo.albers(),
            a = ns.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            s = ns.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            u = {
                point: function(t, n) {
                    e = [t, n]
                }
            };
        return t.invert = function(t) {
            var e = o.scale(),
                n = o.translate(),
                r = (t[0] - n[0]) / e,
                i = (t[1] - n[1]) / e;
            return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? a : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? s : o).invert(t)
        }, t.stream = function(t) {
            var e = o.stream(t),
                n = a.stream(t),
                r = s.stream(t);
            return {
                point: function(t, i) {
                    e.point(t, i), n.point(t, i), r.point(t, i)
                },
                sphere: function() {
                    e.sphere(), n.sphere(), r.sphere()
                },
                lineStart: function() {
                    e.lineStart(), n.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    e.lineEnd(), n.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    e.polygonStart(), n.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    e.polygonEnd(), n.polygonEnd(), r.polygonEnd()
                }
            }
        }, t.precision = function(e) {
            return arguments.length ? (o.precision(e), a.precision(e), s.precision(e), t) : o.precision()
        }, t.scale = function(e) {
            return arguments.length ? (o.scale(e), a.scale(.35 * e), s.scale(e), t.translate(o.translate())) : o.scale()
        }, t.translate = function(e) {
            if (!arguments.length) return o.translate();
            var l = o.scale(),
                c = +e[0],
                f = +e[1];
            return n = o.translate(e).clipExtent([
                [c - .455 * l, f - .238 * l],
                [c + .455 * l, f + .238 * l]
            ]).stream(u).point, r = a.translate([c - .307 * l, f + .201 * l]).clipExtent([
                [c - .425 * l + As, f + .12 * l + As],
                [c - .214 * l - As, f + .234 * l - As]
            ]).stream(u).point, i = s.translate([c - .205 * l, f + .212 * l]).clipExtent([
                [c - .214 * l + As, f + .166 * l + As],
                [c - .115 * l - As, f + .234 * l - As]
            ]).stream(u).point, t
        }, t.scale(1070)
    };
    var ju, Lu, Ru, qu, Iu, Hu, Fu = {
            point: w,
            lineStart: w,
            lineEnd: w,
            polygonStart: function() {
                Lu = 0, Fu.lineStart = Vn
            },
            polygonEnd: function() {
                Fu.lineStart = Fu.lineEnd = Fu.point = w, ju += ds(Lu / 2)
            }
        },
        zu = {
            point: Yn,
            lineStart: w,
            lineEnd: w,
            polygonStart: w,
            polygonEnd: w
        },
        Uu = {
            point: Zn,
            lineStart: Gn,
            lineEnd: Jn,
            polygonStart: function() {
                Uu.lineStart = Kn
            },
            polygonEnd: function() {
                Uu.point = Zn, Uu.lineStart = Gn, Uu.lineEnd = Jn
            }
        };
    ns.geo.path = function() {
        function t(t) {
            return t && ("function" == typeof s && o.pointRadius(+s.apply(this, arguments)), a && a.valid || (a = i(o)), ns.geo.stream(t, a)), o.result()
        }

        function e() {
            return a = null, t
        }
        var n, r, i, o, a, s = 4.5;
        return t.area = function(t) {
            return ju = 0, ns.geo.stream(t, i(Fu)), ju
        }, t.centroid = function(t) {
            return Su = Mu = ku = Tu = Cu = Eu = Nu = Au = Du = 0, ns.geo.stream(t, i(Uu)), Du ? [Nu / Du, Au / Du] : Eu ? [Tu / Eu, Cu / Eu] : ku ? [Su / ku, Mu / ku] : [0 / 0, 0 / 0]
        }, t.bounds = function(t) {
            return Iu = Hu = -(Ru = qu = 1 / 0), ns.geo.stream(t, i(zu)), [
                [Ru, qu],
                [Iu, Hu]
            ]
        }, t.projection = function(t) {
            return arguments.length ? (i = (n = t) ? t.stream || nr(t) : y, e()) : n
        }, t.context = function(t) {
            return arguments.length ? (o = null == (r = t) ? new Xn : new tr(t), "function" != typeof s && o.pointRadius(s), e()) : r
        }, t.pointRadius = function(e) {
            return arguments.length ? (s = "function" == typeof e ? e : (o.pointRadius(+e), +e), t) : s
        }, t.projection(ns.geo.albersUsa()).context(null)
    }, ns.geo.transform = function(t) {
        return {
            stream: function(e) {
                var n = new rr(e);
                for (var r in t) n[r] = t[r];
                return n
            }
        }
    }, rr.prototype = {
        point: function(t, e) {
            this.stream.point(t, e)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, ns.geo.projection = or, ns.geo.projectionMutator = ar, (ns.geo.equirectangular = function() {
        return or(ur)
    }).raw = ur.invert = ur, ns.geo.rotation = function(t) {
        function e(e) {
            return e = t(e[0] * Ls, e[1] * Ls), e[0] *= Rs, e[1] *= Rs, e
        }
        return t = cr(t[0] % 360 * Ls, t[1] * Ls, t.length > 2 ? t[2] * Ls : 0), e.invert = function(e) {
            return e = t.invert(e[0] * Ls, e[1] * Ls), e[0] *= Rs, e[1] *= Rs, e
        }, e
    }, lr.invert = ur, ns.geo.circle = function() {
        function t() {
            var t = "function" == typeof r ? r.apply(this, arguments) : r,
                e = cr(-t[0] * Ls, -t[1] * Ls, 0).invert,
                i = [];
            return n(null, null, 1, {
                point: function(t, n) {
                    i.push(t = e(t, n)), t[0] *= Rs, t[1] *= Rs
                }
            }), {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var e, n, r = [0, 0],
            i = 6;
        return t.origin = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.angle = function(r) {
            return arguments.length ? (n = dr((e = +r) * Ls, i * Ls), t) : e
        }, t.precision = function(r) {
            return arguments.length ? (n = dr(e * Ls, (i = +r) * Ls), t) : i
        }, t.angle(90)
    }, ns.geo.distance = function(t, e) {
        var n, r = (e[0] - t[0]) * Ls,
            i = t[1] * Ls,
            o = e[1] * Ls,
            a = Math.sin(r),
            s = Math.cos(r),
            u = Math.sin(i),
            l = Math.cos(i),
            c = Math.sin(o),
            f = Math.cos(o);
        return Math.atan2(Math.sqrt((n = f * a) * n + (n = l * c - u * f * s) * n), u * c + l * f * s)
    }, ns.geo.graticule = function() {
        function t() {
            return {
                type: "MultiLineString",
                coordinates: e()
            }
        }

        function e() {
            return ns.range(Math.ceil(o / v) * v, i, v).map(h).concat(ns.range(Math.ceil(l / m) * m, u, m).map(p)).concat(ns.range(Math.ceil(r / d) * d, n, d).filter(function(t) {
                return ds(t % v) > As
            }).map(c)).concat(ns.range(Math.ceil(s / g) * g, a, g).filter(function(t) {
                return ds(t % m) > As
            }).map(f))
        }
        var n, r, i, o, a, s, u, l, c, f, h, p, d = 10,
            g = d,
            v = 90,
            m = 360,
            y = 2.5;
        return t.lines = function() {
            return e().map(function(t) {
                return {
                    type: "LineString",
                    coordinates: t
                }
            })
        }, t.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(o).concat(p(u).slice(1), h(i).reverse().slice(1), p(l).reverse().slice(1))]
            }
        }, t.extent = function(e) {
            return arguments.length ? t.majorExtent(e).minorExtent(e) : t.minorExtent()
        }, t.majorExtent = function(e) {
            return arguments.length ? (o = +e[0][0], i = +e[1][0], l = +e[0][1], u = +e[1][1], o > i && (e = o, o = i, i = e), l > u && (e = l, l = u, u = e), t.precision(y)) : [
                [o, l],
                [i, u]
            ]
        }, t.minorExtent = function(e) {
            return arguments.length ? (r = +e[0][0], n = +e[1][0], s = +e[0][1], a = +e[1][1], r > n && (e = r, r = n, n = e), s > a && (e = s, s = a, a = e), t.precision(y)) : [
                [r, s],
                [n, a]
            ]
        }, t.step = function(e) {
            return arguments.length ? t.majorStep(e).minorStep(e) : t.minorStep()
        }, t.majorStep = function(e) {
            return arguments.length ? (v = +e[0], m = +e[1], t) : [v, m]
        }, t.minorStep = function(e) {
            return arguments.length ? (d = +e[0], g = +e[1], t) : [d, g]
        }, t.precision = function(e) {
            return arguments.length ? (y = +e, c = vr(s, a, 90), f = mr(r, n, y), h = vr(l, u, 90), p = mr(o, i, y), t) : y
        }, t.majorExtent([
            [-180, -90 + As],
            [180, 90 - As]
        ]).minorExtent([
            [-180, -80 - As],
            [180, 80 + As]
        ])
    }, ns.geo.greatArc = function() {
        function t() {
            return {
                type: "LineString",
                coordinates: [e || r.apply(this, arguments), n || i.apply(this, arguments)]
            }
        }
        var e, n, r = yr,
            i = br;
        return t.distance = function() {
            return ns.geo.distance(e || r.apply(this, arguments), n || i.apply(this, arguments))
        }, t.source = function(n) {
            return arguments.length ? (r = n, e = "function" == typeof n ? null : n, t) : r
        }, t.target = function(e) {
            return arguments.length ? (i = e, n = "function" == typeof e ? null : e, t) : i
        }, t.precision = function() {
            return arguments.length ? t : 0
        }, t
    }, ns.geo.interpolate = function(t, e) {
        return xr(t[0] * Ls, t[1] * Ls, e[0] * Ls, e[1] * Ls)
    }, ns.geo.length = function(t) {
        return Wu = 0, ns.geo.stream(t, Bu), Wu
    };
    var Wu, Bu = {
            sphere: w,
            point: w,
            lineStart: wr,
            lineEnd: w,
            polygonStart: w,
            polygonEnd: w
        },
        Vu = _r(function(t) {
            return Math.sqrt(2 / (1 + t))
        }, function(t) {
            return 2 * Math.asin(t / 2)
        });
    (ns.geo.azimuthalEqualArea = function() {
        return or(Vu)
    }).raw = Vu;
    var Yu = _r(function(t) {
        var e = Math.acos(t);
        return e && e / Math.sin(e)
    }, y);
    (ns.geo.azimuthalEquidistant = function() {
        return or(Yu)
    }).raw = Yu, (ns.geo.conicConformal = function() {
        return Wn(Sr)
    }).raw = Sr, (ns.geo.conicEquidistant = function() {
        return Wn(Mr)
    }).raw = Mr;
    var Xu = _r(function(t) {
        return 1 / t
    }, Math.atan);
    (ns.geo.gnomonic = function() {
        return or(Xu)
    }).raw = Xu, kr.invert = function(t, e) {
        return [t, 2 * Math.atan(Math.exp(e)) - js]
    }, (ns.geo.mercator = function() {
        return Tr(kr)
    }).raw = kr;
    var Qu = _r(function() {
        return 1
    }, Math.asin);
    (ns.geo.orthographic = function() {
        return or(Qu)
    }).raw = Qu;
    var Zu = _r(function(t) {
        return 1 / (1 + t)
    }, function(t) {
        return 2 * Math.atan(t)
    });
    (ns.geo.stereographic = function() {
        return or(Zu)
    }).raw = Zu, Cr.invert = function(t, e) {
        return [-e, 2 * Math.atan(Math.exp(t)) - js]
    }, (ns.geo.transverseMercator = function() {
        var t = Tr(Cr),
            e = t.center,
            n = t.rotate;
        return t.center = function(t) {
            return t ? e([-t[1], t[0]]) : (t = e(), [t[1], -t[0]])
        }, t.rotate = function(t) {
            return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = n(), [t[0], t[1], t[2] - 90])
        }, n([0, 0, 90])
    }).raw = Cr, ns.geom = {}, ns.geom.hull = function(t) {
        function e(t) {
            if (t.length < 3) return [];
            var e, i = Te(n),
                o = Te(r),
                a = t.length,
                s = [],
                u = [];
            for (e = 0; a > e; e++) s.push([+i.call(this, t[e], e), +o.call(this, t[e], e), e]);
            for (s.sort(Dr), e = 0; a > e; e++) u.push([s[e][0], -s[e][1]]);
            var l = Ar(s),
                c = Ar(u),
                f = c[0] === l[0],
                h = c[c.length - 1] === l[l.length - 1],
                p = [];
            for (e = l.length - 1; e >= 0; --e) p.push(t[s[l[e]][2]]);
            for (e = +f; e < c.length - h; ++e) p.push(t[s[c[e]][2]]);
            return p
        }
        var n = Er,
            r = Nr;
        return arguments.length ? e(t) : (e.x = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.y = function(t) {
            return arguments.length ? (r = t, e) : r
        }, e)
    }, ns.geom.polygon = function(t) {
        return bs(t, Gu), t
    };
    var Gu = ns.geom.polygon.prototype = [];
    Gu.area = function() {
        for (var t, e = -1, n = this.length, r = this[n - 1], i = 0; ++e < n;) t = r, r = this[e], i += t[1] * r[0] - t[0] * r[1];
        return .5 * i
    }, Gu.centroid = function(t) {
        var e, n, r = -1,
            i = this.length,
            o = 0,
            a = 0,
            s = this[i - 1];
        for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) e = s, s = this[r], n = e[0] * s[1] - s[0] * e[1], o += (e[0] + s[0]) * n, a += (e[1] + s[1]) * n;
        return [o * t, a * t]
    }, Gu.clip = function(t) {
        for (var e, n, r, i, o, a, s = Or(t), u = -1, l = this.length - Or(this), c = this[l - 1]; ++u < l;) {
            for (e = t.slice(), t.length = 0, i = this[u], o = e[(r = e.length - s) - 1], n = -1; ++n < r;) a = e[n], $r(a, c, i) ? ($r(o, c, i) || t.push(Pr(o, a, c, i)), t.push(a)) : $r(o, c, i) && t.push(Pr(o, a, c, i)), o = a;
            s && t.push(t[0]), c = i
        }
        return t
    };
    var Ju, Ku, tl, el, nl, rl = [],
        il = [];
    zr.prototype.prepare = function() {
        for (var t, e = this.edges, n = e.length; n--;) t = e[n].edge, t.b && t.a || e.splice(n, 1);
        return e.sort(Wr), e.length
    }, ti.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, ei.prototype = {
        insert: function(t, e) {
            var n, r, i;
            if (t) {
                if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = e
                } else t.R = e;
                n = t
            } else this._ ? (t = oi(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
            for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) r = n.U, n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (ri(this, n), t = n, n = t.U), n.C = !1, r.C = !0, ii(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (ii(this, n), t = n, n = t.U), n.C = !1, r.C = !0, ri(this, r))), n = t.U;
            this._.C = !1
        },
        remove: function(t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var e, n, r, i = t.U,
                o = t.L,
                a = t.R;
            if (n = o ? a ? oi(a) : o : a, i ? i.L === t ? i.L = n : i.R = n : this._ = n, o && a ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = a, a.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r) {
                if (t && t.C) return void(t.C = !1);
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if (e = i.R, e.C && (e.C = !1, i.C = !0, ri(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
                            e.R && e.R.C || (e.L.C = !1, e.C = !0, ii(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, ri(this, i), t = this._;
                            break
                        }
                    } else if (e = i.L, e.C && (e.C = !1, i.C = !0, ii(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
                        e.L && e.L.C || (e.R.C = !1, e.C = !0, ri(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, ii(this, i), t = this._;
                        break
                    }
                    e.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    }, ns.geom.voronoi = function(t) {
        function e(t) {
            var e = new Array(t.length),
                r = s[0][0],
                i = s[0][1],
                o = s[1][0],
                a = s[1][1];
            return ai(n(t), s).cells.forEach(function(n, s) {
                var u = n.edges,
                    l = n.site,
                    c = e[s] = u.length ? u.map(function(t) {
                        var e = t.start();
                        return [e.x, e.y]
                    }) : l.x >= r && l.x <= o && l.y >= i && l.y <= a ? [
                        [r, a],
                        [o, a],
                        [o, i],
                        [r, i]
                    ] : [];
                c.point = t[s]
            }), e
        }

        function n(t) {
            return t.map(function(t, e) {
                return {
                    x: Math.round(o(t, e) / As) * As,
                    y: Math.round(a(t, e) / As) * As,
                    i: e
                }
            })
        }
        var r = Er,
            i = Nr,
            o = r,
            a = i,
            s = ol;
        return t ? e(t) : (e.links = function(t) {
            return ai(n(t)).edges.filter(function(t) {
                return t.l && t.r
            }).map(function(e) {
                return {
                    source: t[e.l.i],
                    target: t[e.r.i]
                }
            })
        }, e.triangles = function(t) {
            var e = [];
            return ai(n(t)).cells.forEach(function(n, r) {
                for (var i, o, a = n.site, s = n.edges.sort(Wr), u = -1, l = s.length, c = s[l - 1].edge, f = c.l === a ? c.r : c.l; ++u < l;) i = c, o = f, c = s[u].edge, f = c.l === a ? c.r : c.l, r < o.i && r < f.i && ui(a, o, f) < 0 && e.push([t[r], t[o.i], t[f.i]])
            }), e
        }, e.x = function(t) {
            return arguments.length ? (o = Te(r = t), e) : r
        }, e.y = function(t) {
            return arguments.length ? (a = Te(i = t), e) : i
        }, e.clipExtent = function(t) {
            return arguments.length ? (s = null == t ? ol : t, e) : s === ol ? null : s
        }, e.size = function(t) {
            return arguments.length ? e.clipExtent(t && [
                [0, 0], t
            ]) : s === ol ? null : s && s[1]
        }, e)
    };
    var ol = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    ns.geom.delaunay = function(t) {
        return ns.geom.voronoi().triangles(t)
    }, ns.geom.quadtree = function(t, e, n, r, i) {
        function o(t) {
            function o(t, e, n, r, i, o, a, s) {
                if (!isNaN(n) && !isNaN(r))
                    if (t.leaf) {
                        var u = t.x,
                            c = t.y;
                        if (null != u)
                            if (ds(u - n) + ds(c - r) < .01) l(t, e, n, r, i, o, a, s);
                            else {
                                var f = t.point;
                                t.x = t.y = t.point = null, l(t, f, u, c, i, o, a, s), l(t, e, n, r, i, o, a, s)
                            } else t.x = n, t.y = r, t.point = e
                    } else l(t, e, n, r, i, o, a, s)
            }

            function l(t, e, n, r, i, a, s, u) {
                var l = .5 * (i + s),
                    c = .5 * (a + u),
                    f = n >= l,
                    h = r >= c,
                    p = h << 1 | f;
                t.leaf = !1, t = t.nodes[p] || (t.nodes[p] = fi()), f ? i = l : s = l, h ? a = c : u = c, o(t, e, n, r, i, a, s, u)
            }
            var c, f, h, p, d, g, v, m, y, b = Te(s),
                x = Te(u);
            if (null != e) g = e, v = n, m = r, y = i;
            else if (m = y = -(g = v = 1 / 0), f = [], h = [], d = t.length, a)
                for (p = 0; d > p; ++p) c = t[p], c.x < g && (g = c.x), c.y < v && (v = c.y), c.x > m && (m = c.x), c.y > y && (y = c.y), f.push(c.x), h.push(c.y);
            else
                for (p = 0; d > p; ++p) {
                    var w = +b(c = t[p], p),
                        _ = +x(c, p);
                    g > w && (g = w), v > _ && (v = _), w > m && (m = w), _ > y && (y = _), f.push(w), h.push(_)
                }
            var S = m - g,
                M = y - v;
            S > M ? y = v + S : m = g + M;
            var k = fi();
            if (k.add = function(t) {
                o(k, t, +b(t, ++p), +x(t, p), g, v, m, y)
            }, k.visit = function(t) {
                hi(t, k, g, v, m, y)
            }, k.find = function(t) {
                return pi(k, t[0], t[1], g, v, m, y)
            }, p = -1, null == e) {
                for (; ++p < d;) o(k, t[p], f[p], h[p], g, v, m, y);
                --p
            } else t.forEach(k.add);
            return f = h = t = c = null, k
        }
        var a, s = Er,
            u = Nr;
        return (a = arguments.length) ? (s = li, u = ci, 3 === a && (i = n, r = e, n = e = 0), o(t)) : (o.x = function(t) {
            return arguments.length ? (s = t, o) : s
        }, o.y = function(t) {
            return arguments.length ? (u = t, o) : u
        }, o.extent = function(t) {
            return arguments.length ? (null == t ? e = n = r = i = null : (e = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), o) : null == e ? null : [
                [e, n],
                [r, i]
            ]
        }, o.size = function(t) {
            return arguments.length ? (null == t ? e = n = r = i = null : (e = n = 0, r = +t[0], i = +t[1]), o) : null == e ? null : [r - e, i - n]
        }, o)
    }, ns.interpolateRgb = di, ns.interpolateObject = gi, ns.interpolateNumber = vi, ns.interpolateString = mi;
    var al = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        sl = new RegExp(al.source, "g");
    ns.interpolate = yi, ns.interpolators = [function(t, e) {
        var n = typeof e;
        return ("string" === n ? Js.has(e) || /^(#|rgb\(|hsl\()/.test(e) ? di : mi : e instanceof ae ? di : Array.isArray(e) ? bi : "object" === n && isNaN(e) ? gi : vi)(t, e)
    }], ns.interpolateArray = bi;
    var ul = function() {
            return y
        },
        ll = ns.map({
            linear: ul,
            poly: Ti,
            quad: function() {
                return Si
            },
            cubic: function() {
                return Mi
            },
            sin: function() {
                return Ci
            },
            exp: function() {
                return Ei
            },
            circle: function() {
                return Ni
            },
            elastic: Ai,
            back: Di,
            bounce: function() {
                return $i
            }
        }),
        cl = ns.map({
            "in": y,
            out: wi,
            "in-out": _i,
            "out-in": function(t) {
                return _i(wi(t))
            }
        });
    ns.ease = function(t) {
        var e = t.indexOf("-"),
            n = e >= 0 ? t.slice(0, e) : t,
            r = e >= 0 ? t.slice(e + 1) : "in";
        return n = ll.get(n) || ul, r = cl.get(r) || y, xi(r(n.apply(null, rs.call(arguments, 1))))
    }, ns.interpolateHcl = Pi, ns.interpolateHsl = Oi, ns.interpolateLab = ji, ns.interpolateRound = Li, ns.transform = function(t) {
        var e = os.createElementNS(ns.ns.prefix.svg, "g");
        return (ns.transform = function(t) {
            if (null != t) {
                e.setAttribute("transform", t);
                var n = e.transform.baseVal.consolidate()
            }
            return new Ri(n ? n.matrix : fl)
        })(t)
    }, Ri.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var fl = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    ns.interpolateTransform = Fi, ns.layout = {}, ns.layout.bundle = function() {
        return function(t) {
            for (var e = [], n = -1, r = t.length; ++n < r;) e.push(Wi(t[n]));
            return e
        }
    }, ns.layout.chord = function() {
        function t() {
            var t, l, f, h, p, d = {},
                g = [],
                v = ns.range(o),
                m = [];
            for (n = [], r = [], t = 0, h = -1; ++h < o;) {
                for (l = 0, p = -1; ++p < o;) l += i[h][p];
                g.push(l), m.push(ns.range(o)), t += l
            }
            for (a && v.sort(function(t, e) {
                return a(g[t], g[e])
            }), s && m.forEach(function(t, e) {
                t.sort(function(t, n) {
                    return s(i[e][t], i[e][n])
                })
            }), t = (Ps - c * o) / t, l = 0, h = -1; ++h < o;) {
                for (f = l, p = -1; ++p < o;) {
                    var y = v[h],
                        b = m[y][p],
                        x = i[y][b],
                        w = l,
                        _ = l += x * t;
                    d[y + "-" + b] = {
                        index: y,
                        subindex: b,
                        startAngle: w,
                        endAngle: _,
                        value: x
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: l,
                    value: (l - f) / t
                }, l += c
            }
            for (h = -1; ++h < o;)
                for (p = h - 1; ++p < o;) {
                    var S = d[h + "-" + p],
                        M = d[p + "-" + h];
                    (S.value || M.value) && n.push(S.value < M.value ? {
                        source: M,
                        target: S
                    } : {
                        source: S,
                        target: M
                    })
                }
            u && e()
        }

        function e() {
            n.sort(function(t, e) {
                return u((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
            })
        }
        var n, r, i, o, a, s, u, l = {},
            c = 0;
        return l.matrix = function(t) {
            return arguments.length ? (o = (i = t) && i.length, n = r = null, l) : i
        }, l.padding = function(t) {
            return arguments.length ? (c = t, n = r = null, l) : c
        }, l.sortGroups = function(t) {
            return arguments.length ? (a = t, n = r = null, l) : a
        }, l.sortSubgroups = function(t) {
            return arguments.length ? (s = t, n = null, l) : s
        }, l.sortChords = function(t) {
            return arguments.length ? (u = t, n && e(), l) : u
        }, l.chords = function() {
            return n || t(), n
        }, l.groups = function() {
            return r || t(), r
        }, l
    }, ns.layout.force = function() {
        function t(t) {
            return function(e, n, r, i) {
                if (e.point !== t) {
                    var o = e.cx - t.x,
                        a = e.cy - t.y,
                        s = i - n,
                        u = o * o + a * a;
                    if (u > s * s / v) {
                        if (d > u) {
                            var l = e.charge / u;
                            t.px -= o * l, t.py -= a * l
                        }
                        return !0
                    }
                    if (e.point && u && d > u) {
                        var l = e.pointCharge / u;
                        t.px -= o * l, t.py -= a * l
                    }
                }
                return !e.charge
            }
        }

        function e(t) {
            t.px = ns.event.x, t.py = ns.event.y, s.resume()
        }
        var n, r, i, o, a, s = {},
            u = ns.dispatch("start", "tick", "end"),
            l = [1, 1],
            c = .9,
            f = hl,
            h = pl,
            p = -30,
            d = dl,
            g = .1,
            v = .64,
            m = [],
            b = [];
        return s.tick = function() {
            if ((r *= .99) < .005) return u.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var e, n, s, f, h, d, v, y, x, w = m.length,
                _ = b.length;
            for (n = 0; _ > n; ++n) s = b[n], f = s.source, h = s.target, y = h.x - f.x, x = h.y - f.y, (d = y * y + x * x) && (d = r * o[n] * ((d = Math.sqrt(d)) - i[n]) / d, y *= d, x *= d, h.x -= y * (v = f.weight / (h.weight + f.weight)), h.y -= x * v, f.x += y * (v = 1 - v), f.y += x * v);
            if ((v = r * g) && (y = l[0] / 2, x = l[1] / 2, n = -1, v))
                for (; ++n < w;) s = m[n], s.x += (y - s.x) * v, s.y += (x - s.y) * v;
            if (p)
                for (Gi(e = ns.geom.quadtree(m), r, a), n = -1; ++n < w;)(s = m[n]).fixed || e.visit(t(s));
            for (n = -1; ++n < w;) s = m[n], s.fixed ? (s.x = s.px, s.y = s.py) : (s.x -= (s.px - (s.px = s.x)) * c, s.y -= (s.py - (s.py = s.y)) * c);
            u.tick({
                type: "tick",
                alpha: r
            })
        }, s.nodes = function(t) {
            return arguments.length ? (m = t, s) : m
        }, s.links = function(t) {
            return arguments.length ? (b = t, s) : b
        }, s.size = function(t) {
            return arguments.length ? (l = t, s) : l
        }, s.linkDistance = function(t) {
            return arguments.length ? (f = "function" == typeof t ? t : +t, s) : f
        }, s.distance = s.linkDistance, s.linkStrength = function(t) {
            return arguments.length ? (h = "function" == typeof t ? t : +t, s) : h
        }, s.friction = function(t) {
            return arguments.length ? (c = +t, s) : c
        }, s.charge = function(t) {
            return arguments.length ? (p = "function" == typeof t ? t : +t, s) : p
        }, s.chargeDistance = function(t) {
            return arguments.length ? (d = t * t, s) : Math.sqrt(d)
        }, s.gravity = function(t) {
            return arguments.length ? (g = +t, s) : g
        }, s.theta = function(t) {
            return arguments.length ? (v = t * t, s) : Math.sqrt(v)
        }, s.alpha = function(t) {
            return arguments.length ? (t = +t, r ? r = t > 0 ? t : 0 : t > 0 && (u.start({
                type: "start",
                alpha: r = t
            }), ns.timer(s.tick)), s) : r
        }, s.start = function() {
            function t(t, r) {
                if (!n) {
                    for (n = new Array(u), s = 0; u > s; ++s) n[s] = [];
                    for (s = 0; c > s; ++s) {
                        var i = b[s];
                        n[i.source.index].push(i.target), n[i.target.index].push(i.source)
                    }
                }
                for (var o, a = n[e], s = -1, l = a.length; ++s < l;)
                    if (!isNaN(o = a[s][t])) return o;
                return Math.random() * r
            }
            var e, n, r, u = m.length,
                c = b.length,
                d = l[0],
                g = l[1];
            for (e = 0; u > e; ++e)(r = m[e]).index = e, r.weight = 0;
            for (e = 0; c > e; ++e) r = b[e], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (e = 0; u > e; ++e) r = m[e], isNaN(r.x) && (r.x = t("x", d)), isNaN(r.y) && (r.y = t("y", g)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (i = [], "function" == typeof f)
                for (e = 0; c > e; ++e) i[e] = +f.call(this, b[e], e);
            else
                for (e = 0; c > e; ++e) i[e] = f;
            if (o = [], "function" == typeof h)
                for (e = 0; c > e; ++e) o[e] = +h.call(this, b[e], e);
            else
                for (e = 0; c > e; ++e) o[e] = h;
            if (a = [], "function" == typeof p)
                for (e = 0; u > e; ++e) a[e] = +p.call(this, m[e], e);
            else
                for (e = 0; u > e; ++e) a[e] = p;
            return s.resume()
        }, s.resume = function() {
            return s.alpha(.1)
        }, s.stop = function() {
            return s.alpha(0)
        }, s.drag = function() {
            return n || (n = ns.behavior.drag().origin(y).on("dragstart.force", Yi).on("drag.force", e).on("dragend.force", Xi)), arguments.length ? void this.on("mouseover.force", Qi).on("mouseout.force", Zi).call(n) : n
        }, ns.rebind(s, u, "on")
    };
    var hl = 20,
        pl = 1,
        dl = 1 / 0;
    ns.layout.hierarchy = function() {
        function t(i) {
            var o, a = [i],
                s = [];
            for (i.depth = 0; null != (o = a.pop());)
                if (s.push(o), (l = n.call(t, o, o.depth)) && (u = l.length)) {
                    for (var u, l, c; --u >= 0;) a.push(c = l[u]), c.parent = o, c.depth = o.depth + 1;
                    r && (o.value = 0), o.children = l
                } else r && (o.value = +r.call(t, o, o.depth) || 0), delete o.children;
            return to(i, function(t) {
                var n, i;
                e && (n = t.children) && n.sort(e), r && (i = t.parent) && (i.value += t.value)
            }), s
        }
        var e = ro,
            n = eo,
            r = no;
        return t.sort = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.children = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.value = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.revalue = function(e) {
            return r && (Ki(e, function(t) {
                t.children && (t.value = 0)
            }), to(e, function(e) {
                var n;
                e.children || (e.value = +r.call(t, e, e.depth) || 0), (n = e.parent) && (n.value += e.value)
            })), e
        }, t
    }, ns.layout.partition = function() {
        function t(e, n, r, i) {
            var o = e.children;
            if (e.x = n, e.y = e.depth * i, e.dx = r, e.dy = i, o && (a = o.length)) {
                var a, s, u, l = -1;
                for (r = e.value ? r / e.value : 0; ++l < a;) t(s = o[l], n, u = s.value * r, i), n += u
            }
        }

        function e(t) {
            var n = t.children,
                r = 0;
            if (n && (i = n.length))
                for (var i, o = -1; ++o < i;) r = Math.max(r, e(n[o]));
            return 1 + r
        }

        function n(n, o) {
            var a = r.call(this, n, o);
            return t(a[0], 0, i[0], i[1] / e(a[0])), a
        }
        var r = ns.layout.hierarchy(),
            i = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (i = t, n) : i
        }, Ji(n, r)
    }, ns.layout.pie = function() {
        function t(a) {
            var s, u = a.length,
                l = a.map(function(n, r) {
                    return +e.call(t, n, r)
                }),
                c = +("function" == typeof r ? r.apply(this, arguments) : r),
                f = ("function" == typeof i ? i.apply(this, arguments) : i) - c,
                h = Math.min(Math.abs(f) / u, +("function" == typeof o ? o.apply(this, arguments) : o)),
                p = h * (0 > f ? -1 : 1),
                d = (f - u * p) / ns.sum(l),
                g = ns.range(u),
                v = [];
            return null != n && g.sort(n === gl ? function(t, e) {
                return l[e] - l[t]
            } : function(t, e) {
                return n(a[t], a[e])
            }), g.forEach(function(t) {
                v[t] = {
                    data: a[t],
                    value: s = l[t],
                    startAngle: c,
                    endAngle: c += s * d + p,
                    padAngle: h
                }
            }), v
        }
        var e = Number,
            n = gl,
            r = 0,
            i = Ps,
            o = 0;
        return t.value = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.sort = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.startAngle = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.endAngle = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.padAngle = function(e) {
            return arguments.length ? (o = e, t) : o
        }, t
    };
    var gl = {};
    ns.layout.stack = function() {
        function t(s, u) {
            if (!(h = s.length)) return s;
            var l = s.map(function(n, r) {
                    return e.call(t, n, r)
                }),
                c = l.map(function(e) {
                    return e.map(function(e, n) {
                        return [o.call(t, e, n), a.call(t, e, n)]
                    })
                }),
                f = n.call(t, c, u);
            l = ns.permute(l, f), c = ns.permute(c, f);
            var h, p, d, g, v = r.call(t, c, u),
                m = l[0].length;
            for (d = 0; m > d; ++d)
                for (i.call(t, l[0][d], g = v[d], c[0][d][1]), p = 1; h > p; ++p) i.call(t, l[p][d], g += c[p - 1][d][1], c[p][d][1]);
            return s
        }
        var e = y,
            n = uo,
            r = lo,
            i = so,
            o = oo,
            a = ao;
        return t.values = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.order = function(e) {
            return arguments.length ? (n = "function" == typeof e ? e : vl.get(e) || uo, t) : n
        }, t.offset = function(e) {
            return arguments.length ? (r = "function" == typeof e ? e : ml.get(e) || lo, t) : r
        }, t.x = function(e) {
            return arguments.length ? (o = e, t) : o
        }, t.y = function(e) {
            return arguments.length ? (a = e, t) : a
        }, t.out = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t
    };
    var vl = ns.map({
            "inside-out": function(t) {
                var e, n, r = t.length,
                    i = t.map(co),
                    o = t.map(fo),
                    a = ns.range(r).sort(function(t, e) {
                        return i[t] - i[e]
                    }),
                    s = 0,
                    u = 0,
                    l = [],
                    c = [];
                for (e = 0; r > e; ++e) n = a[e], u > s ? (s += o[n], l.push(n)) : (u += o[n], c.push(n));
                return c.reverse().concat(l)
            },
            reverse: function(t) {
                return ns.range(t.length).reverse()
            },
            "default": uo
        }),
        ml = ns.map({
            silhouette: function(t) {
                var e, n, r, i = t.length,
                    o = t[0].length,
                    a = [],
                    s = 0,
                    u = [];
                for (n = 0; o > n; ++n) {
                    for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
                    r > s && (s = r), a.push(r)
                }
                for (n = 0; o > n; ++n) u[n] = (s - a[n]) / 2;
                return u
            },
            wiggle: function(t) {
                var e, n, r, i, o, a, s, u, l, c = t.length,
                    f = t[0],
                    h = f.length,
                    p = [];
                for (p[0] = u = l = 0, n = 1; h > n; ++n) {
                    for (e = 0, i = 0; c > e; ++e) i += t[e][n][1];
                    for (e = 0, o = 0, s = f[n][0] - f[n - 1][0]; c > e; ++e) {
                        for (r = 0, a = (t[e][n][1] - t[e][n - 1][1]) / (2 * s); e > r; ++r) a += (t[r][n][1] - t[r][n - 1][1]) / s;
                        o += a * t[e][n][1]
                    }
                    p[n] = u -= i ? o / i * s : 0, l > u && (l = u)
                }
                for (n = 0; h > n; ++n) p[n] -= l;
                return p
            },
            expand: function(t) {
                var e, n, r, i = t.length,
                    o = t[0].length,
                    a = 1 / i,
                    s = [];
                for (n = 0; o > n; ++n) {
                    for (e = 0, r = 0; i > e; e++) r += t[e][n][1];
                    if (r)
                        for (e = 0; i > e; e++) t[e][n][1] /= r;
                    else
                        for (e = 0; i > e; e++) t[e][n][1] = a
                }
                for (n = 0; o > n; ++n) s[n] = 0;
                return s
            },
            zero: lo
        });
    ns.layout.histogram = function() {
        function t(t, o) {
            for (var a, s, u = [], l = t.map(n, this), c = r.call(this, l, o), f = i.call(this, c, l, o), o = -1, h = l.length, p = f.length - 1, d = e ? 1 : 1 / h; ++o < p;) a = u[o] = [], a.dx = f[o + 1] - (a.x = f[o]), a.y = 0;
            if (p > 0)
                for (o = -1; ++o < h;) s = l[o], s >= c[0] && s <= c[1] && (a = u[ns.bisect(f, s, 1, p) - 1], a.y += d, a.push(t[o]));
            return u
        }
        var e = !0,
            n = Number,
            r = vo,
            i = po;
        return t.value = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.range = function(e) {
            return arguments.length ? (r = Te(e), t) : r
        }, t.bins = function(e) {
            return arguments.length ? (i = "number" == typeof e ? function(t) {
                return go(t, e)
            } : Te(e), t) : i
        }, t.frequency = function(n) {
            return arguments.length ? (e = !!n, t) : e
        }, t
    }, ns.layout.pack = function() {
        function t(t, o) {
            var a = n.call(this, t, o),
                s = a[0],
                u = i[0],
                l = i[1],
                c = null == e ? Math.sqrt : "function" == typeof e ? e : function() {
                    return e
                };
            if (s.x = s.y = 0, to(s, function(t) {
                t.r = +c(t.value)
            }), to(s, wo), r) {
                var f = r * (e ? 1 : Math.max(2 * s.r / u, 2 * s.r / l)) / 2;
                to(s, function(t) {
                    t.r += f
                }), to(s, wo), to(s, function(t) {
                    t.r -= f
                })
            }
            return Mo(s, u / 2, l / 2, e ? 1 : 1 / Math.max(2 * s.r / u, 2 * s.r / l)), a
        }
        var e, n = ns.layout.hierarchy().sort(mo),
            r = 0,
            i = [1, 1];
        return t.size = function(e) {
            return arguments.length ? (i = e, t) : i
        }, t.radius = function(n) {
            return arguments.length ? (e = null == n || "function" == typeof n ? n : +n, t) : e
        }, t.padding = function(e) {
            return arguments.length ? (r = +e, t) : r
        }, Ji(t, n)
    }, ns.layout.tree = function() {
        function t(t, i) {
            var c = a.call(this, t, i),
                f = c[0],
                h = e(f);
            if (to(h, n), h.parent.m = -h.z, Ki(h, r), l) Ki(f, o);
            else {
                var p = f,
                    d = f,
                    g = f;
                Ki(f, function(t) {
                    t.x < p.x && (p = t), t.x > d.x && (d = t), t.depth > g.depth && (g = t)
                });
                var v = s(p, d) / 2 - p.x,
                    m = u[0] / (d.x + s(d, p) / 2 + v),
                    y = u[1] / (g.depth || 1);
                Ki(f, function(t) {
                    t.x = (t.x + v) * m, t.y = t.depth * y
                })
            }
            return c
        }

        function e(t) {
            for (var e, n = {
                A: null,
                children: [t]
            }, r = [n]; null != (e = r.pop());)
                for (var i, o = e.children, a = 0, s = o.length; s > a; ++a) r.push((o[a] = i = {
                    _: o[a],
                    parent: e,
                    children: (i = o[a].children) && i.slice() || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: a
                }).a = i);
            return n.children[0]
        }

        function n(t) {
            var e = t.children,
                n = t.parent.children,
                r = t.i ? n[t.i - 1] : null;
            if (e.length) {
                Ao(t);
                var o = (e[0].z + e[e.length - 1].z) / 2;
                r ? (t.z = r.z + s(t._, r._), t.m = t.z - o) : t.z = o
            } else r && (t.z = r.z + s(t._, r._));
            t.parent.A = i(t, r, t.parent.A || n[0])
        }

        function r(t) {
            t._.x = t.z + t.parent.m, t.m += t.parent.m
        }

        function i(t, e, n) {
            if (e) {
                for (var r, i = t, o = t, a = e, u = i.parent.children[0], l = i.m, c = o.m, f = a.m, h = u.m; a = Eo(a), i = Co(i), a && i;) u = Co(u), o = Eo(o), o.a = t, r = a.z + f - i.z - l + s(a._, i._), r > 0 && (No(Do(a, t, n), t, r), l += r, c += r), f += a.m, l += i.m, h += u.m, c += o.m;
                a && !Eo(o) && (o.t = a, o.m += f - c), i && !Co(u) && (u.t = i, u.m += l - h, n = t)
            }
            return n
        }

        function o(t) {
            t.x *= u[0], t.y = t.depth * u[1]
        }
        var a = ns.layout.hierarchy().sort(null).value(null),
            s = To,
            u = [1, 1],
            l = null;
        return t.separation = function(e) {
            return arguments.length ? (s = e, t) : s
        }, t.size = function(e) {
            return arguments.length ? (l = null == (u = e) ? o : null, t) : l ? null : u
        }, t.nodeSize = function(e) {
            return arguments.length ? (l = null == (u = e) ? null : o, t) : l ? u : null
        }, Ji(t, a)
    }, ns.layout.cluster = function() {
        function t(t, o) {
            var a, s = e.call(this, t, o),
                u = s[0],
                l = 0;
            to(u, function(t) {
                var e = t.children;
                e && e.length ? (t.x = Po(e), t.y = $o(e)) : (t.x = a ? l += n(t, a) : 0, t.y = 0, a = t)
            });
            var c = Oo(u),
                f = jo(u),
                h = c.x - n(c, f) / 2,
                p = f.x + n(f, c) / 2;
            return to(u, i ? function(t) {
                t.x = (t.x - u.x) * r[0], t.y = (u.y - t.y) * r[1]
            } : function(t) {
                t.x = (t.x - h) / (p - h) * r[0], t.y = (1 - (u.y ? t.y / u.y : 1)) * r[1]
            }), s
        }
        var e = ns.layout.hierarchy().sort(null).value(null),
            n = To,
            r = [1, 1],
            i = !1;
        return t.separation = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.size = function(e) {
            return arguments.length ? (i = null == (r = e), t) : i ? null : r
        }, t.nodeSize = function(e) {
            return arguments.length ? (i = null != (r = e), t) : i ? r : null
        }, Ji(t, e)
    }, ns.layout.treemap = function() {
        function t(t, e) {
            for (var n, r, i = -1, o = t.length; ++i < o;) r = (n = t[i]).value * (0 > e ? 0 : e), n.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function e(n) {
            var o = n.children;
            if (o && o.length) {
                var a, s, u, l = f(n),
                    c = [],
                    h = o.slice(),
                    d = 1 / 0,
                    g = "slice" === p ? l.dx : "dice" === p ? l.dy : "slice-dice" === p ? 1 & n.depth ? l.dy : l.dx : Math.min(l.dx, l.dy);
                for (t(h, l.dx * l.dy / n.value), c.area = 0;
                     (u = h.length) > 0;) c.push(a = h[u - 1]), c.area += a.area, "squarify" !== p || (s = r(c, g)) <= d ? (h.pop(), d = s) : (c.area -= c.pop().area, i(c, g, l, !1), g = Math.min(l.dx, l.dy), c.length = c.area = 0, d = 1 / 0);
                c.length && (i(c, g, l, !0), c.length = c.area = 0), o.forEach(e)
            }
        }

        function n(e) {
            var r = e.children;
            if (r && r.length) {
                var o, a = f(e),
                    s = r.slice(),
                    u = [];
                for (t(s, a.dx * a.dy / e.value), u.area = 0; o = s.pop();) u.push(o), u.area += o.area, null != o.z && (i(u, o.z ? a.dx : a.dy, a, !s.length), u.length = u.area = 0);
                r.forEach(n)
            }
        }

        function r(t, e) {
            for (var n, r = t.area, i = 0, o = 1 / 0, a = -1, s = t.length; ++a < s;)(n = t[a].area) && (o > n && (o = n), n > i && (i = n));
            return r *= r, e *= e, r ? Math.max(e * i * d / r, r / (e * o * d)) : 1 / 0
        }

        function i(t, e, n, r) {
            var i, o = -1,
                a = t.length,
                s = n.x,
                l = n.y,
                c = e ? u(t.area / e) : 0;
            if (e == n.dx) {
                for ((r || c > n.dy) && (c = n.dy); ++o < a;) i = t[o], i.x = s, i.y = l, i.dy = c, s += i.dx = Math.min(n.x + n.dx - s, c ? u(i.area / c) : 0);
                i.z = !0, i.dx += n.x + n.dx - s, n.y += c, n.dy -= c
            } else {
                for ((r || c > n.dx) && (c = n.dx); ++o < a;) i = t[o], i.x = s, i.y = l, i.dx = c, l += i.dy = Math.min(n.y + n.dy - l, c ? u(i.area / c) : 0);
                i.z = !1, i.dy += n.y + n.dy - l, n.x += c, n.dx -= c
            }
        }

        function o(r) {
            var i = a || s(r),
                o = i[0];
            return o.x = 0, o.y = 0, o.dx = l[0], o.dy = l[1], a && s.revalue(o), t([o], o.dx * o.dy / o.value), (a ? n : e)(o), h && (a = i), i
        }
        var a, s = ns.layout.hierarchy(),
            u = Math.round,
            l = [1, 1],
            c = null,
            f = Lo,
            h = !1,
            p = "squarify",
            d = .5 * (1 + Math.sqrt(5));
        return o.size = function(t) {
            return arguments.length ? (l = t, o) : l
        }, o.padding = function(t) {
            function e(e) {
                var n = t.call(o, e, e.depth);
                return null == n ? Lo(e) : Ro(e, "number" == typeof n ? [n, n, n, n] : n)
            }

            function n(e) {
                return Ro(e, t)
            }
            if (!arguments.length) return c;
            var r;
            return f = null == (c = t) ? Lo : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, o
        }, o.round = function(t) {
            return arguments.length ? (u = t ? Math.round : Number, o) : u != Number
        }, o.sticky = function(t) {
            return arguments.length ? (h = t, a = null, o) : h
        }, o.ratio = function(t) {
            return arguments.length ? (d = t, o) : d
        }, o.mode = function(t) {
            return arguments.length ? (p = t + "", o) : p
        }, Ji(o, s)
    }, ns.random = {
        normal: function(t, e) {
            var n = arguments.length;
            return 2 > n && (e = 1), 1 > n && (t = 0),
                function() {
                    var n, r, i;
                    do n = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = n * n + r * r; while (!i || i > 1);
                    return t + e * n * Math.sqrt(-2 * Math.log(i) / i)
                }
        },
        logNormal: function() {
            var t = ns.random.normal.apply(ns, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        bates: function(t) {
            var e = ns.random.irwinHall(t);
            return function() {
                return e() / t
            }
        },
        irwinHall: function(t) {
            return function() {
                for (var e = 0, n = 0; t > n; n++) e += Math.random();
                return e
            }
        }
    }, ns.scale = {};
    var yl = {
        floor: y,
        ceil: y
    };
    ns.scale.linear = function() {
        return Wo([0, 1], [0, 1], yi, !1)
    };
    var bl = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    ns.scale.log = function() {
        return Jo(ns.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var xl = ns.format(".0e"),
        wl = {
            floor: function(t) {
                return -Math.ceil(-t)
            },
            ceil: function(t) {
                return -Math.floor(-t)
            }
        };
    ns.scale.pow = function() {
        return Ko(ns.scale.linear(), 1, [0, 1])
    }, ns.scale.sqrt = function() {
        return ns.scale.pow().exponent(.5)
    }, ns.scale.ordinal = function() {
        return ea([], {
            t: "range",
            a: [
                []
            ]
        })
    }, ns.scale.category10 = function() {
        return ns.scale.ordinal().range(_l)
    }, ns.scale.category20 = function() {
        return ns.scale.ordinal().range(Sl)
    }, ns.scale.category20b = function() {
        return ns.scale.ordinal().range(Ml)
    }, ns.scale.category20c = function() {
        return ns.scale.ordinal().range(kl)
    };
    var _l = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(be),
        Sl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(be),
        Ml = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(be),
        kl = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(be);
    ns.scale.quantile = function() {
        return na([], [])
    }, ns.scale.quantize = function() {
        return ra(0, 1, [0, 1])
    }, ns.scale.threshold = function() {
        return ia([.5], [0, 1])
    }, ns.scale.identity = function() {
        return oa([0, 1])
    }, ns.svg = {}, ns.svg.arc = function() {
        function t() {
            var t = Math.max(0, +n.apply(this, arguments)),
                l = Math.max(0, +r.apply(this, arguments)),
                c = a.apply(this, arguments) - js,
                f = s.apply(this, arguments) - js,
                h = Math.abs(f - c),
                p = c > f ? 0 : 1;
            if (t > l && (d = l, l = t, t = d), h >= Os) return e(l, p) + (t ? e(t, 1 - p) : "") + "Z";
            var d, g, v, m, y, b, x, w, _, S, M, k, T = 0,
                C = 0,
                E = [];
            if ((m = (+u.apply(this, arguments) || 0) / 2) && (v = o === Tl ? Math.sqrt(t * t + l * l) : +o.apply(this, arguments), p || (C *= -1), l && (C = ee(v / l * Math.sin(m))), t && (T = ee(v / t * Math.sin(m)))), l) {
                y = l * Math.cos(c + C), b = l * Math.sin(c + C), x = l * Math.cos(f - C), w = l * Math.sin(f - C);
                var N = Math.abs(f - c - 2 * C) <= $s ? 0 : 1;
                if (C && ha(y, b, x, w) === p ^ N) {
                    var A = (c + f) / 2;
                    y = l * Math.cos(A), b = l * Math.sin(A), x = w = null
                }
            } else y = b = 0;
            if (t) {
                _ = t * Math.cos(f - T), S = t * Math.sin(f - T), M = t * Math.cos(c + T), k = t * Math.sin(c + T);
                var D = Math.abs(c - f + 2 * T) <= $s ? 0 : 1;
                if (T && ha(_, S, M, k) === 1 - p ^ D) {
                    var $ = (c + f) / 2;
                    _ = t * Math.cos($), S = t * Math.sin($), M = k = null
                }
            } else _ = S = 0;
            if ((d = Math.min(Math.abs(l - t) / 2, +i.apply(this, arguments))) > .001) {
                g = l > t ^ p ? 0 : 1;
                var P = null == M ? [_, S] : null == x ? [y, b] : Pr([y, b], [M, k], [x, w], [_, S]),
                    O = y - P[0],
                    j = b - P[1],
                    L = x - P[0],
                    R = w - P[1],
                    q = 1 / Math.sin(Math.acos((O * L + j * R) / (Math.sqrt(O * O + j * j) * Math.sqrt(L * L + R * R))) / 2),
                    I = Math.sqrt(P[0] * P[0] + P[1] * P[1]);
                if (null != x) {
                    var H = Math.min(d, (l - I) / (q + 1)),
                        F = pa(null == M ? [_, S] : [M, k], [y, b], l, H, p),
                        z = pa([x, w], [_, S], l, H, p);
                    d === H ? E.push("M", F[0], "A", H, ",", H, " 0 0,", g, " ", F[1], "A", l, ",", l, " 0 ", 1 - p ^ ha(F[1][0], F[1][1], z[1][0], z[1][1]), ",", p, " ", z[1], "A", H, ",", H, " 0 0,", g, " ", z[0]) : E.push("M", F[0], "A", H, ",", H, " 0 1,", g, " ", z[0])
                } else E.push("M", y, ",", b);
                if (null != M) {
                    var U = Math.min(d, (t - I) / (q - 1)),
                        W = pa([y, b], [M, k], t, -U, p),
                        B = pa([_, S], null == x ? [y, b] : [x, w], t, -U, p);
                    d === U ? E.push("L", B[0], "A", U, ",", U, " 0 0,", g, " ", B[1], "A", t, ",", t, " 0 ", p ^ ha(B[1][0], B[1][1], W[1][0], W[1][1]), ",", 1 - p, " ", W[1], "A", U, ",", U, " 0 0,", g, " ", W[0]) : E.push("L", B[0], "A", U, ",", U, " 0 0,", g, " ", W[0])
                } else E.push("L", _, ",", S)
            } else E.push("M", y, ",", b), null != x && E.push("A", l, ",", l, " 0 ", N, ",", p, " ", x, ",", w), E.push("L", _, ",", S), null != M && E.push("A", t, ",", t, " 0 ", D, ",", 1 - p, " ", M, ",", k);
            return E.push("Z"), E.join("")
        }

        function e(t, e) {
            return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
        }
        var n = sa,
            r = ua,
            i = aa,
            o = Tl,
            a = la,
            s = ca,
            u = fa;
        return t.innerRadius = function(e) {
            return arguments.length ? (n = Te(e), t) : n
        }, t.outerRadius = function(e) {
            return arguments.length ? (r = Te(e), t) : r
        }, t.cornerRadius = function(e) {
            return arguments.length ? (i = Te(e), t) : i
        }, t.padRadius = function(e) {
            return arguments.length ? (o = e == Tl ? Tl : Te(e), t) : o
        }, t.startAngle = function(e) {
            return arguments.length ? (a = Te(e), t) : a
        }, t.endAngle = function(e) {
            return arguments.length ? (s = Te(e), t) : s
        }, t.padAngle = function(e) {
            return arguments.length ? (u = Te(e), t) : u
        }, t.centroid = function() {
            var t = (+n.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                e = (+a.apply(this, arguments) + +s.apply(this, arguments)) / 2 - js;
            return [Math.cos(e) * t, Math.sin(e) * t]
        }, t
    };
    var Tl = "auto";
    ns.svg.line = function() {
        return da(y)
    };
    var Cl = ns.map({
        linear: ga,
        "linear-closed": va,
        step: ma,
        "step-before": ya,
        "step-after": ba,
        basis: ka,
        "basis-open": Ta,
        "basis-closed": Ca,
        bundle: Ea,
        cardinal: _a,
        "cardinal-open": xa,
        "cardinal-closed": wa,
        monotone: Oa
    });
    Cl.forEach(function(t, e) {
        e.key = t, e.closed = /-closed$/.test(t)
    });
    var El = [0, 2 / 3, 1 / 3, 0],
        Nl = [0, 1 / 3, 2 / 3, 0],
        Al = [0, 1 / 6, 2 / 3, 1 / 6];
    ns.svg.line.radial = function() {
        var t = da(ja);
        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
    }, ya.reverse = ba, ba.reverse = ya, ns.svg.area = function() {
        return La(y)
    }, ns.svg.area.radial = function() {
        var t = La(ja);
        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
    }, ns.svg.chord = function() {
        function t(t, s) {
            var u = e(this, o, t, s),
                l = e(this, a, t, s);
            return "M" + u.p0 + r(u.r, u.p1, u.a1 - u.a0) + (n(u, l) ? i(u.r, u.p1, u.r, u.p0) : i(u.r, u.p1, l.r, l.p0) + r(l.r, l.p1, l.a1 - l.a0) + i(l.r, l.p1, u.r, u.p0)) + "Z"
        }

        function e(t, e, n, r) {
            var i = e.call(t, n, r),
                o = s.call(t, i, r),
                a = u.call(t, i, r) - js,
                c = l.call(t, i, r) - js;
            return {
                r: o,
                a0: a,
                a1: c,
                p0: [o * Math.cos(a), o * Math.sin(a)],
                p1: [o * Math.cos(c), o * Math.sin(c)]
            }
        }

        function n(t, e) {
            return t.a0 == e.a0 && t.a1 == e.a1
        }

        function r(t, e, n) {
            return "A" + t + "," + t + " 0 " + +(n > $s) + ",1 " + e
        }

        function i(t, e, n, r) {
            return "Q 0,0 " + r
        }
        var o = yr,
            a = br,
            s = Ra,
            u = la,
            l = ca;
        return t.radius = function(e) {
            return arguments.length ? (s = Te(e), t) : s
        }, t.source = function(e) {
            return arguments.length ? (o = Te(e), t) : o
        }, t.target = function(e) {
            return arguments.length ? (a = Te(e), t) : a
        }, t.startAngle = function(e) {
            return arguments.length ? (u = Te(e), t) : u
        }, t.endAngle = function(e) {
            return arguments.length ? (l = Te(e), t) : l
        }, t
    }, ns.svg.diagonal = function() {
        function t(t, i) {
            var o = e.call(this, t, i),
                a = n.call(this, t, i),
                s = (o.y + a.y) / 2,
                u = [o, {
                    x: o.x,
                    y: s
                }, {
                    x: a.x,
                    y: s
                }, a];
            return u = u.map(r), "M" + u[0] + "C" + u[1] + " " + u[2] + " " + u[3]
        }
        var e = yr,
            n = br,
            r = qa;
        return t.source = function(n) {
            return arguments.length ? (e = Te(n), t) : e
        }, t.target = function(e) {
            return arguments.length ? (n = Te(e), t) : n
        }, t.projection = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t
    }, ns.svg.diagonal.radial = function() {
        var t = ns.svg.diagonal(),
            e = qa,
            n = t.projection;
        return t.projection = function(t) {
            return arguments.length ? n(Ia(e = t)) : e
        }, t
    }, ns.svg.symbol = function() {
        function t(t, r) {
            return (Dl.get(e.call(this, t, r)) || za)(n.call(this, t, r))
        }
        var e = Fa,
            n = Ha;
        return t.type = function(n) {
            return arguments.length ? (e = Te(n), t) : e
        }, t.size = function(e) {
            return arguments.length ? (n = Te(e), t) : n
        }, t
    };
    var Dl = ns.map({
        circle: za,
        cross: function(t) {
            var e = Math.sqrt(t / 5) / 2;
            return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
        },
        diamond: function(t) {
            var e = Math.sqrt(t / (2 * Pl)),
                n = e * Pl;
            return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
        },
        square: function(t) {
            var e = Math.sqrt(t) / 2;
            return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
        },
        "triangle-down": function(t) {
            var e = Math.sqrt(t / $l),
                n = e * $l / 2;
            return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
        },
        "triangle-up": function(t) {
            var e = Math.sqrt(t / $l),
                n = e * $l / 2;
            return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
        }
    });
    ns.svg.symbolTypes = Dl.keys();
    var $l = Math.sqrt(3),
        Pl = Math.tan(30 * Ls);
    Ss.transition = function(t) {
        for (var e, n, r = Ol || ++ql, i = Ya(t), o = [], a = jl || {
            time: Date.now(),
            ease: ki,
            delay: 0,
            duration: 250
        }, s = -1, u = this.length; ++s < u;) {
            o.push(e = []);
            for (var l = this[s], c = -1, f = l.length; ++c < f;)(n = l[c]) && Xa(n, c, i, r, a), e.push(n)
        }
        return Wa(o, i, r)
    }, Ss.interrupt = function(t) {
        return this.each(null == t ? Ll : Ua(Ya(t)))
    };
    var Ol, jl, Ll = Ua(Ya()),
        Rl = [],
        ql = 0;
    Rl.call = Ss.call, Rl.empty = Ss.empty, Rl.node = Ss.node, Rl.size = Ss.size, ns.transition = function(t, e) {
        return t && t.transition ? Ol ? t.transition(e) : t : ns.selection().transition(t)
    }, ns.transition.prototype = Rl, Rl.select = function(t) {
        var e, n, r, i = this.id,
            o = this.namespace,
            a = [];
        t = E(t);
        for (var s = -1, u = this.length; ++s < u;) {
            a.push(e = []);
            for (var l = this[s], c = -1, f = l.length; ++c < f;)(r = l[c]) && (n = t.call(r, r.__data__, c, s)) ? ("__data__" in r && (n.__data__ = r.__data__), Xa(n, c, o, i, r[o][i]), e.push(n)) : e.push(null)
        }
        return Wa(a, o, i)
    }, Rl.selectAll = function(t) {
        var e, n, r, i, o, a = this.id,
            s = this.namespace,
            u = [];
        t = N(t);
        for (var l = -1, c = this.length; ++l < c;)
            for (var f = this[l], h = -1, p = f.length; ++h < p;)
                if (r = f[h]) {
                    o = r[s][a], n = t.call(r, r.__data__, h, l), u.push(e = []);
                    for (var d = -1, g = n.length; ++d < g;)(i = n[d]) && Xa(i, d, s, a, o), e.push(i)
                }
        return Wa(u, s, a)
    }, Rl.filter = function(t) {
        var e, n, r, i = [];
        "function" != typeof t && (t = F(t));
        for (var o = 0, a = this.length; a > o; o++) {
            i.push(e = []);
            for (var n = this[o], s = 0, u = n.length; u > s; s++)(r = n[s]) && t.call(r, r.__data__, s, o) && e.push(r)
        }
        return Wa(i, this.namespace, this.id)
    }, Rl.tween = function(t, e) {
        var n = this.id,
            r = this.namespace;
        return arguments.length < 2 ? this.node()[r][n].tween.get(t) : U(this, null == e ? function(e) {
            e[r][n].tween.remove(t)
        } : function(i) {
            i[r][n].tween.set(t, e)
        })
    }, Rl.attr = function(t, e) {
        function n() {
            this.removeAttribute(s)
        }

        function r() {
            this.removeAttributeNS(s.space, s.local)
        }

        function i(t) {
            return null == t ? n : (t += "", function() {
                var e, n = this.getAttribute(s);
                return n !== t && (e = a(n, t), function(t) {
                    this.setAttribute(s, e(t))
                })
            })
        }

        function o(t) {
            return null == t ? r : (t += "", function() {
                var e, n = this.getAttributeNS(s.space, s.local);
                return n !== t && (e = a(n, t), function(t) {
                    this.setAttributeNS(s.space, s.local, e(t))
                })
            })
        }
        if (arguments.length < 2) {
            for (e in t) this.attr(e, t[e]);
            return this
        }
        var a = "transform" == t ? Fi : yi,
            s = ns.ns.qualify(t);
        return Ba(this, "attr." + t, e, s.local ? o : i)
    }, Rl.attrTween = function(t, e) {
        function n(t, n) {
            var r = e.call(this, t, n, this.getAttribute(i));
            return r && function(t) {
                this.setAttribute(i, r(t))
            }
        }

        function r(t, n) {
            var r = e.call(this, t, n, this.getAttributeNS(i.space, i.local));
            return r && function(t) {
                this.setAttributeNS(i.space, i.local, r(t))
            }
        }
        var i = ns.ns.qualify(t);
        return this.tween("attr." + t, i.local ? r : n)
    }, Rl.style = function(t, n, r) {
        function i() {
            this.style.removeProperty(t)
        }

        function o(n) {
            return null == n ? i : (n += "", function() {
                var i, o = e(this).getComputedStyle(this, null).getPropertyValue(t);
                return o !== n && (i = yi(o, n), function(e) {
                    this.style.setProperty(t, i(e), r)
                })
            })
        }
        var a = arguments.length;
        if (3 > a) {
            if ("string" != typeof t) {
                2 > a && (n = "");
                for (r in t) this.style(r, t[r], n);
                return this
            }
            r = ""
        }
        return Ba(this, "style." + t, n, o)
    }, Rl.styleTween = function(t, n, r) {
        function i(i, o) {
            var a = n.call(this, i, o, e(this).getComputedStyle(this, null).getPropertyValue(t));
            return a && function(e) {
                this.style.setProperty(t, a(e), r)
            }
        }
        return arguments.length < 3 && (r = ""), this.tween("style." + t, i)
    }, Rl.text = function(t) {
        return Ba(this, "text", t, Va)
    }, Rl.remove = function() {
        var t = this.namespace;
        return this.each("end.transition", function() {
            var e;
            this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
        })
    }, Rl.ease = function(t) {
        var e = this.id,
            n = this.namespace;
        return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = ns.ease.apply(ns, arguments)), U(this, function(r) {
            r[n][e].ease = t
        }))
    }, Rl.delay = function(t) {
        var e = this.id,
            n = this.namespace;
        return arguments.length < 1 ? this.node()[n][e].delay : U(this, "function" == typeof t ? function(r, i, o) {
            r[n][e].delay = +t.call(r, r.__data__, i, o)
        } : (t = +t, function(r) {
            r[n][e].delay = t
        }))
    }, Rl.duration = function(t) {
        var e = this.id,
            n = this.namespace;
        return arguments.length < 1 ? this.node()[n][e].duration : U(this, "function" == typeof t ? function(r, i, o) {
            r[n][e].duration = Math.max(1, t.call(r, r.__data__, i, o))
        } : (t = Math.max(1, t), function(r) {
            r[n][e].duration = t
        }))
    }, Rl.each = function(t, e) {
        var n = this.id,
            r = this.namespace;
        if (arguments.length < 2) {
            var i = jl,
                o = Ol;
            try {
                Ol = n, U(this, function(e, i, o) {
                    jl = e[r][n], t.call(e, e.__data__, i, o)
                })
            } finally {
                jl = i, Ol = o
            }
        } else U(this, function(i) {
            var o = i[r][n];
            (o.event || (o.event = ns.dispatch("start", "end", "interrupt"))).on(t, e)
        });
        return this
    }, Rl.transition = function() {
        for (var t, e, n, r, i = this.id, o = ++ql, a = this.namespace, s = [], u = 0, l = this.length; l > u; u++) {
            s.push(t = []);
            for (var e = this[u], c = 0, f = e.length; f > c; c++)(n = e[c]) && (r = n[a][i], Xa(n, c, a, o, {
                time: r.time,
                ease: r.ease,
                delay: r.delay + r.duration,
                duration: r.duration
            })), t.push(n)
        }
        return Wa(s, a, o)
    }, ns.svg.axis = function() {
        function t(t) {
            t.each(function() {
                var t, l = ns.select(this),
                    c = this.__chart__ || n,
                    f = this.__chart__ = n.copy(),
                    h = null == u ? f.ticks ? f.ticks.apply(f, s) : f.domain() : u,
                    p = null == e ? f.tickFormat ? f.tickFormat.apply(f, s) : y : e,
                    d = l.selectAll(".tick").data(h, f),
                    g = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", As),
                    v = ns.transition(d.exit()).style("opacity", As).remove(),
                    m = ns.transition(d.order()).style("opacity", 1),
                    b = Math.max(i, 0) + a,
                    x = Io(f),
                    w = l.selectAll(".domain").data([0]),
                    _ = (w.enter().append("path").attr("class", "domain"), ns.transition(w));
                g.append("line"), g.append("text");
                var S, M, k, T, C = g.select("line"),
                    E = m.select("line"),
                    N = d.select("text").text(p),
                    A = g.select("text"),
                    D = m.select("text"),
                    $ = "top" === r || "left" === r ? -1 : 1;
                if ("bottom" === r || "top" === r ? (t = Qa, S = "x", k = "y", M = "x2", T = "y2", N.attr("dy", 0 > $ ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + $ * o + "V0H" + x[1] + "V" + $ * o)) : (t = Za, S = "y", k = "x", M = "y2", T = "x2", N.attr("dy", ".32em").style("text-anchor", 0 > $ ? "end" : "start"), _.attr("d", "M" + $ * o + "," + x[0] + "H0V" + x[1] + "H" + $ * o)), C.attr(T, $ * i), A.attr(k, $ * b), E.attr(M, 0).attr(T, $ * i), D.attr(S, 0).attr(k, $ * b), f.rangeBand) {
                    var P = f,
                        O = P.rangeBand() / 2;
                    c = f = function(t) {
                        return P(t) + O
                    }
                } else c.rangeBand ? c = f : v.call(t, f, c);
                g.call(t, c, f), m.call(t, f, f)
            })
        }
        var e, n = ns.scale.linear(),
            r = Il,
            i = 6,
            o = 6,
            a = 3,
            s = [10],
            u = null;
        return t.scale = function(e) {
            return arguments.length ? (n = e, t) : n
        }, t.orient = function(e) {
            return arguments.length ? (r = e in Hl ? e + "" : Il, t) : r
        }, t.ticks = function() {
            return arguments.length ? (s = arguments, t) : s
        }, t.tickValues = function(e) {
            return arguments.length ? (u = e, t) : u
        }, t.tickFormat = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.tickSize = function(e) {
            var n = arguments.length;
            return n ? (i = +e, o = +arguments[n - 1], t) : i
        }, t.innerTickSize = function(e) {
            return arguments.length ? (i = +e, t) : i
        }, t.outerTickSize = function(e) {
            return arguments.length ? (o = +e, t) : o
        }, t.tickPadding = function(e) {
            return arguments.length ? (a = +e, t) : a
        }, t.tickSubdivide = function() {
            return arguments.length && t
        }, t
    };
    var Il = "bottom",
        Hl = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    ns.svg.brush = function() {
        function t(e) {
            e.each(function() {
                var e = ns.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", o).on("touchstart.brush", o),
                    a = e.selectAll(".background").data([0]);
                a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), e.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var s = e.selectAll(".resize").data(g, y);
                s.exit().remove(), s.enter().append("g").attr("class", function(t) {
                    return "resize " + t
                }).style("cursor", function(t) {
                    return Fl[t]
                }).append("rect").attr("x", function(t) {
                    return /[ew]$/.test(t) ? -3 : null
                }).attr("y", function(t) {
                    return /^[ns]/.test(t) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", t.empty() ? "none" : null);
                var u, f = ns.transition(e),
                    h = ns.transition(a);
                l && (u = Io(l), h.attr("x", u[0]).attr("width", u[1] - u[0]), r(f)), c && (u = Io(c), h.attr("y", u[0]).attr("height", u[1] - u[0]), i(f)), n(f)
            })
        }

        function n(t) {
            t.selectAll(".resize").attr("transform", function(t) {
                return "translate(" + f[+/e$/.test(t)] + "," + h[+/^s/.test(t)] + ")"
            })
        }

        function r(t) {
            t.select(".extent").attr("x", f[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", f[1] - f[0])
        }

        function i(t) {
            t.select(".extent").attr("y", h[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0])
        }

        function o() {
            function o() {
                32 == ns.event.keyCode && (N || (b = null, D[0] -= f[1], D[1] -= h[1], N = 2), M())
            }

            function g() {
                32 == ns.event.keyCode && 2 == N && (D[0] += f[1], D[1] += h[1], N = 0, M())
            }

            function v() {
                var t = ns.mouse(w),
                    e = !1;
                x && (t[0] += x[0], t[1] += x[1]), N || (ns.event.altKey ? (b || (b = [(f[0] + f[1]) / 2, (h[0] + h[1]) / 2]), D[0] = f[+(t[0] < b[0])], D[1] = h[+(t[1] < b[1])]) : b = null), C && m(t, l, 0) && (r(k), e = !0), E && m(t, c, 1) && (i(k), e = !0), e && (n(k), S({
                    type: "brush",
                    mode: N ? "move" : "resize"
                }))
            }

            function m(t, e, n) {
                var r, i, o = Io(e),
                    u = o[0],
                    l = o[1],
                    c = D[n],
                    g = n ? h : f,
                    v = g[1] - g[0];
                return N && (u -= c, l -= v + c), r = (n ? d : p) ? Math.max(u, Math.min(l, t[n])) : t[n], N ? i = (r += c) + v : (b && (c = Math.max(u, Math.min(l, 2 * b[n] - r))), r > c ? (i = r, r = c) : i = c), g[0] != r || g[1] != i ? (n ? s = null : a = null, g[0] = r, g[1] = i, !0) : void 0
            }

            function y() {
                v(), k.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), ns.select("body").style("cursor", null), $.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), A(), S({
                    type: "brushend"
                })
            }
            var b, x, w = this,
                _ = ns.select(ns.event.target),
                S = u.of(w, arguments),
                k = ns.select(w),
                T = _.datum(),
                C = !/^(n|s)$/.test(T) && l,
                E = !/^(e|w)$/.test(T) && c,
                N = _.classed("extent"),
                A = Q(w),
                D = ns.mouse(w),
                $ = ns.select(e(w)).on("keydown.brush", o).on("keyup.brush", g);
            if (ns.event.changedTouches ? $.on("touchmove.brush", v).on("touchend.brush", y) : $.on("mousemove.brush", v).on("mouseup.brush", y), k.interrupt().selectAll("*").interrupt(), N) D[0] = f[0] - D[0], D[1] = h[0] - D[1];
            else if (T) {
                var P = +/w$/.test(T),
                    O = +/^n/.test(T);
                x = [f[1 - P] - D[0], h[1 - O] - D[1]], D[0] = f[P], D[1] = h[O]
            } else ns.event.altKey && (b = D.slice());
            k.style("pointer-events", "none").selectAll(".resize").style("display", null), ns.select("body").style("cursor", _.style("cursor")), S({
                type: "brushstart"
            }), v()
        }
        var a, s, u = T(t, "brushstart", "brush", "brushend"),
            l = null,
            c = null,
            f = [0, 0],
            h = [0, 0],
            p = !0,
            d = !0,
            g = zl[0];
        return t.event = function(t) {
            t.each(function() {
                var t = u.of(this, arguments),
                    e = {
                        x: f,
                        y: h,
                        i: a,
                        j: s
                    },
                    n = this.__chart__ || e;
                this.__chart__ = e, Ol ? ns.select(this).transition().each("start.brush", function() {
                    a = n.i, s = n.j, f = n.x, h = n.y, t({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var n = bi(f, e.x),
                        r = bi(h, e.y);
                    return a = s = null,
                        function(i) {
                            f = e.x = n(i), h = e.y = r(i), t({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    a = e.i, s = e.j, t({
                        type: "brush",
                        mode: "resize"
                    }), t({
                        type: "brushend"
                    })
                }) : (t({
                    type: "brushstart"
                }), t({
                    type: "brush",
                    mode: "resize"
                }), t({
                    type: "brushend"
                }))
            })
        }, t.x = function(e) {
            return arguments.length ? (l = e, g = zl[!l << 1 | !c], t) : l
        }, t.y = function(e) {
            return arguments.length ? (c = e, g = zl[!l << 1 | !c], t) : c
        }, t.clamp = function(e) {
            return arguments.length ? (l && c ? (p = !!e[0], d = !!e[1]) : l ? p = !!e : c && (d = !!e), t) : l && c ? [p, d] : l ? p : c ? d : null
        }, t.extent = function(e) {
            var n, r, i, o, u;
            return arguments.length ? (l && (n = e[0], r = e[1], c && (n = n[0], r = r[0]), a = [n, r], l.invert && (n = l(n), r = l(r)), n > r && (u = n, n = r, r = u), (n != f[0] || r != f[1]) && (f = [n, r])), c && (i = e[0], o = e[1], l && (i = i[1], o = o[1]), s = [i, o], c.invert && (i = c(i), o = c(o)), i > o && (u = i, i = o, o = u), (i != h[0] || o != h[1]) && (h = [i, o])), t) : (l && (a ? (n = a[0], r = a[1]) : (n = f[0], r = f[1], l.invert && (n = l.invert(n), r = l.invert(r)), n > r && (u = n, n = r, r = u))), c && (s ? (i = s[0], o = s[1]) : (i = h[0], o = h[1], c.invert && (i = c.invert(i), o = c.invert(o)), i > o && (u = i, i = o, o = u))), l && c ? [
                [n, i],
                [r, o]
            ] : l ? [n, r] : c && [i, o])
        }, t.clear = function() {
            return t.empty() || (f = [0, 0], h = [0, 0], a = s = null), t
        }, t.empty = function() {
            return !!l && f[0] == f[1] || !!c && h[0] == h[1]
        }, ns.rebind(t, u, "on")
    };
    var Fl = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        zl = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Ul = uu.format = du.timeFormat,
        Wl = Ul.utc,
        Bl = Wl("%Y-%m-%dT%H:%M:%S.%LZ");
    Ul.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Ga : Bl, Ga.parse = function(t) {
        var e = new Date(t);
        return isNaN(e) ? null : e
    }, Ga.toString = Bl.toString, uu.second = Ie(function(t) {
        return new lu(1e3 * Math.floor(t / 1e3))
    }, function(t, e) {
        t.setTime(t.getTime() + 1e3 * Math.floor(e))
    }, function(t) {
        return t.getSeconds()
    }), uu.seconds = uu.second.range, uu.seconds.utc = uu.second.utc.range, uu.minute = Ie(function(t) {
        return new lu(6e4 * Math.floor(t / 6e4))
    }, function(t, e) {
        t.setTime(t.getTime() + 6e4 * Math.floor(e))
    }, function(t) {
        return t.getMinutes()
    }), uu.minutes = uu.minute.range, uu.minutes.utc = uu.minute.utc.range, uu.hour = Ie(function(t) {
        var e = t.getTimezoneOffset() / 60;
        return new lu(36e5 * (Math.floor(t / 36e5 - e) + e))
    }, function(t, e) {
        t.setTime(t.getTime() + 36e5 * Math.floor(e))
    }, function(t) {
        return t.getHours()
    }), uu.hours = uu.hour.range, uu.hours.utc = uu.hour.utc.range, uu.month = Ie(function(t) {
        return t = uu.day(t), t.setDate(1), t
    }, function(t, e) {
        t.setMonth(t.getMonth() + e)
    }, function(t) {
        return t.getMonth()
    }), uu.months = uu.month.range, uu.months.utc = uu.month.utc.range;
    var Vl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Yl = [
            [uu.second, 1],
            [uu.second, 5],
            [uu.second, 15],
            [uu.second, 30],
            [uu.minute, 1],
            [uu.minute, 5],
            [uu.minute, 15],
            [uu.minute, 30],
            [uu.hour, 1],
            [uu.hour, 3],
            [uu.hour, 6],
            [uu.hour, 12],
            [uu.day, 1],
            [uu.day, 2],
            [uu.week, 1],
            [uu.month, 1],
            [uu.month, 3],
            [uu.year, 1]
        ],
        Xl = Ul.multi([
            [".%L", function(t) {
                return t.getMilliseconds()
            }],
            [":%S", function(t) {
                return t.getSeconds()
            }],
            ["%I:%M", function(t) {
                return t.getMinutes()
            }],
            ["%I %p", function(t) {
                return t.getHours()
            }],
            ["%a %d", function(t) {
                return t.getDay() && 1 != t.getDate()
            }],
            ["%b %d", function(t) {
                return 1 != t.getDate()
            }],
            ["%B", function(t) {
                return t.getMonth()
            }],
            ["%Y", Nn]
        ]),
        Ql = {
            range: function(t, e, n) {
                return ns.range(Math.ceil(t / n) * n, +e, n).map(Ka)
            },
            floor: y,
            ceil: y
        };
    Yl.year = uu.year, uu.scale = function() {
        return Ja(ns.scale.linear(), Yl, Xl)
    };
    var Zl = Yl.map(function(t) {
            return [t[0].utc, t[1]]
        }),
        Gl = Wl.multi([
            [".%L", function(t) {
                return t.getUTCMilliseconds()
            }],
            [":%S", function(t) {
                return t.getUTCSeconds()
            }],
            ["%I:%M", function(t) {
                return t.getUTCMinutes()
            }],
            ["%I %p", function(t) {
                return t.getUTCHours()
            }],
            ["%a %d", function(t) {
                return t.getUTCDay() && 1 != t.getUTCDate()
            }],
            ["%b %d", function(t) {
                return 1 != t.getUTCDate()
            }],
            ["%B", function(t) {
                return t.getUTCMonth()
            }],
            ["%Y", Nn]
        ]);
    Zl.year = uu.year.utc, uu.scale.utc = function() {
        return Ja(ns.scale.linear(), Zl, Gl)
    }, ns.text = Ce(function(t) {
        return t.responseText
    }), ns.json = function(t, e) {
        return Ee(t, "application/json", ts, e)
    }, ns.html = function(t, e) {
        return Ee(t, "text/html", es, e)
    }, ns.xml = Ce(function(t) {
        return t.responseXML
    }), "function" == typeof define && define.amd ? define(ns) : "object" == typeof module && module.exports && (module.exports = ns), this.d3 = ns
}(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            r = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        r = function(e) {
            t(e).on("click", n, this.close)
        };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 150, r.prototype.close = function(e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
            o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(o);
        e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function() {
        return t.fn.alert = i, this
    }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.button"),
                o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
    };
    n.VERSION = "3.3.4", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function() {
            r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = r, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target);
        r.hasClass("btn") || (r = r.closest(".btn")), e.call(r, "toggle"), n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (r && !this.options.wrap) return e;
        var i = "prev" == t ? -1 : 1,
            o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function(e, r) {
        var i = this.$element.find(".item.active"),
            o = r || this.getItemForDirection(e, i),
            a = this.interval,
            s = "next" == e ? "left" : "right",
            u = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var l = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: l,
                direction: s
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function() {
                o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function() {
                    u.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r, this
    };
    var i = function(n) {
        var r, i = t(this),
            o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(r)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.collapse"),
                o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
            !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
        })
    }
    var r = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.4", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
        toggle: !0
    }, r.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var u = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, r) {
            var i = t(r);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = t(this);
        i.attr("data-target") || r.preventDefault();
        var o = e(i),
            a = o.data("bs.collapse"),
            s = a ? "toggle" : i.data();
        n.call(o, s)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        e && 3 === e.which || (t(i).remove(), t(o).each(function() {
            var r = t(this),
                i = n(r),
                o = {
                    relatedTarget: this
                };
            i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", o)), e.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", o)))
        }))
    }

    function n(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && t(n);
        return r && r.length ? r : e.parent()
    }

    function r(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        a = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.4", a.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                a = o.hasClass("open");
            if (e(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", s)
            }
            return !1
        }
    }, a.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var r = t(this);
            if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = n(r),
                    a = i.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a",
                    u = i.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                if (u.length) {
                    var l = u.index(e.target);
                    38 == e.which && l > 0 && l--, 40 == e.which && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, r) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.modal"),
                a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var r = this,
            i = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var i = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in").attr("aria-hidden", !1), r.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var r = this,
            i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                r.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var r = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = r, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this),
            i = r.attr("href"),
            o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(i) && i
            }, o.data(), r.data());
        r.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport), this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    u = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n && n.$tip && n.$tip.is(":visible") ? void(n.hoverState = "in") : (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !r) return;
            var i = this,
                o = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                u = /\s?auto?\s?/i,
                l = u.test(s);
            l && (s = s.replace(u, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element);
            var c = this.getPosition(),
                f = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (l) {
                var p = s,
                    d = this.options.container ? t(this.options.container) : this.$element.parent(),
                    g = this.getPosition(d);
                s = "bottom" == s && c.bottom + h > g.bottom ? "top" : "top" == s && c.top - h < g.top ? "bottom" : "right" == s && c.right + f > g.width ? "left" : "left" == s && c.left - f < g.left ? "right" : s, o.removeClass(p).addClass(s)
            }
            var v = this.getCalculatedOffset(s, c, f, h);
            this.applyPlacement(v, s);
            var m = function() {
                var t = i.hoverState;
                i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var u = r[0].offsetWidth,
            l = r[0].offsetHeight;
        "top" == n && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
            h = f ? 2 * c.left - i + u : 2 * c.top - o + l,
            p = f ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(h, r[0][p], f)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function r() {
            "in" != i.hoverState && o.detach(), i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
        }
        var i = this,
            o = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            r = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var o = r ? {
                top: 0,
                left: 0
            } : e.offset(),
            a = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            s = r ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, i, a, s, o)
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
                u = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
        } else {
            var l = e.left - o,
                c = e.left + o + n;
            l < a.left ? i.left = a.left - l : c > a.width && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.popover"),
                o = "object" == typeof e && e;
            (i || !/destroy|hide/.test(e)) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.4", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, r) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.3.4", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            r = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                i = e.data("target") || e.attr("href"),
                o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + r, i]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            r = this.options.offset + n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < i[0]) return this.activeTarget = null, this.clear();
        for (t = i.length; t--;) a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.4", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(r);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var a = r.find("> .active"),
            s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.affix"),
                o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.4", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, r) {
        var i = this.$target.scrollTop(),
            o = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return n > i ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? i + this.unpin <= o.top ? !1 : "bottom" : t - r >= i + a ? !1 : "bottom";
        var s = null == this.affixed,
            u = s ? i : o.top,
            l = s ? a : e;
        return null != n && n >= i ? "top" : null != r && u + l >= t - r ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                r = this.options.offset,
                i = r.top,
                o = r.bottom,
                a = t(document.body).height();
            "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
            var s = this.getState(a, e, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (s ? "-" + s : ""),
                    l = t.Event(u + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - e - o
            })
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = r, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                r = n.data();
            r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
        })
    })
}(jQuery),
    function(t, e) {
        var n, r;
        return r = e.document, n = function() {
            function n(n) {
                var r;
                try {
                    r = e.localStorage
                } catch (i) {
                    r = !1
                }
                this._options = t.extend({
                    name: "tour",
                    steps: [],
                    container: "body",
                    autoscroll: !0,
                    keyboard: !0,
                    storage: r,
                    debug: !1,
                    backdrop: !1,
                    backdropPadding: 0,
                    redirect: !0,
                    orphan: !1,
                    duration: !1,
                    delay: !1,
                    basePath: "",
                    template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-default" data-role="prev">&laquo; Prev</button> <button class="btn btn-sm btn-default" data-role="next">Next &raquo;</button> <button class="btn btn-sm btn-default" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-default" data-role="end">End tour</button> </div> </div>',
                    afterSetState: function() {},
                    afterGetState: function() {},
                    afterRemoveState: function() {},
                    onStart: function() {},
                    onEnd: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onHide: function() {},
                    onHidden: function() {},
                    onNext: function() {},
                    onPrev: function() {},
                    onPause: function() {},
                    onResume: function() {}
                }, n), this._force = !1, this._inited = !1, this.backdrop = {
                    overlay: null,
                    $element: null,
                    $background: null,
                    backgroundShown: !1,
                    overlayElementShown: !1
                }
            }
            return n.prototype.addSteps = function(t) {
                var e, n, r;
                for (n = 0, r = t.length; r > n; n++) e = t[n], this.addStep(e);
                return this
            }, n.prototype.addStep = function(t) {
                return this._options.steps.push(t), this
            }, n.prototype.getStep = function(e) {
                return null != this._options.steps[e] ? t.extend({
                    id: "step-" + e,
                    path: "",
                    placement: "right",
                    title: "",
                    content: "<p></p>",
                    next: e === this._options.steps.length - 1 ? -1 : e + 1,
                    prev: e - 1,
                    animation: !0,
                    container: this._options.container,
                    autoscroll: this._options.autoscroll,
                    backdrop: this._options.backdrop,
                    backdropPadding: this._options.backdropPadding,
                    redirect: this._options.redirect,
                    orphan: this._options.orphan,
                    duration: this._options.duration,
                    delay: this._options.delay,
                    template: this._options.template,
                    onShow: this._options.onShow,
                    onShown: this._options.onShown,
                    onHide: this._options.onHide,
                    onHidden: this._options.onHidden,
                    onNext: this._options.onNext,
                    onPrev: this._options.onPrev,
                    onPause: this._options.onPause,
                    onResume: this._options.onResume
                }, this._options.steps[e]) : void 0
            }, n.prototype.init = function(t) {
                return this._force = t, this.ended() ? (this._debug("Tour ended, init prevented."), this) : (this.setCurrentStep(), this._initMouseNavigation(), this._initKeyboardNavigation(), this._onResize(function(t) {
                    return function() {
                        return t.showStep(t._current)
                    }
                }(this)), null !== this._current && this.showStep(this._current), this._inited = !0, this)
            }, n.prototype.start = function(t) {
                var e;
                return null == t && (t = !1), this._inited || this.init(t), null === this._current && (e = this._makePromise(null != this._options.onStart ? this._options.onStart(this) : void 0), this._callOnPromiseDone(e, this.showStep, 0)), this
            }, n.prototype.next = function() {
                var t;
                return t = this.hideStep(this._current), this._callOnPromiseDone(t, this._showNextStep)
            }, n.prototype.prev = function() {
                var t;
                return t = this.hideStep(this._current), this._callOnPromiseDone(t, this._showPrevStep)
            }, n.prototype.goTo = function(t) {
                var e;
                return e = this.hideStep(this._current), this._callOnPromiseDone(e, this.showStep, t)
            }, n.prototype.end = function() {
                var n, i;
                return n = function(n) {
                    return function() {
                        return t(r).off("click.tour-" + n._options.name), t(r).off("keyup.tour-" + n._options.name), t(e).off("resize.tour-" + n._options.name), n._setState("end", "yes"), n._inited = !1, n._force = !1, n._clearTimer(), null != n._options.onEnd ? n._options.onEnd(n) : void 0
                    }
                }(this), i = this.hideStep(this._current), this._callOnPromiseDone(i, n)
            }, n.prototype.ended = function() {
                return !this._force && !!this._getState("end")
            }, n.prototype.restart = function() {
                return this._removeState("current_step"), this._removeState("end"), this.start()
            }, n.prototype.pause = function() {
                var t;
                return t = this.getStep(this._current), t && t.duration ? (this._paused = !0, this._duration -= (new Date).getTime() - this._start, e.clearTimeout(this._timer), this._debug("Paused/Stopped step " + (this._current + 1) + " timer (" + this._duration + " remaining)."), null != t.onPause ? t.onPause(this, this._duration) : void 0) : this
            }, n.prototype.resume = function() {
                var t;
                return t = this.getStep(this._current), t && t.duration ? (this._paused = !1, this._start = (new Date).getTime(), this._duration = this._duration || t.duration, this._timer = e.setTimeout(function(t) {
                    return function() {
                        return t._isLast() ? t.next() : t.end()
                    }
                }(this), this._duration), this._debug("Started step " + (this._current + 1) + " timer with duration " + this._duration), null != t.onResume && this._duration !== t.duration ? t.onResume(this, this._duration) : void 0) : this
            }, n.prototype.hideStep = function(e) {
                var n, r, i;
                return (i = this.getStep(e)) ? (this._clearTimer(), r = this._makePromise(null != i.onHide ? i.onHide(this, e) : void 0), n = function(n) {
                    return function() {
                        var r;
                        return r = t(i.element), r.data("bs.popover") || r.data("popover") || (r = t("body")), r.popover("destroy").removeClass("tour-" + n._options.name + "-element tour-" + n._options.name + "-" + e + "-element"), i.reflex && r.removeClass("tour-step-element-reflex").off("" + n._reflexEvent(i.reflex) + ".tour-" + n._options.name), i.backdrop && n._hideBackdrop(), null != i.onHidden ? i.onHidden(n) : void 0
                    }
                }(this), this._callOnPromiseDone(r, n), r) : void 0
            }, n.prototype.showStep = function(t) {
                var n, i, o, a;
                return this.ended() ? (this._debug("Tour ended, showStep prevented."), this) : (a = this.getStep(t)) ? (o = t < this._current, n = this._makePromise(null != a.onShow ? a.onShow(this, t) : void 0), i = function(e) {
                    return function() {
                        var n, i, s;
                        if (e.setCurrentStep(t), i = function() {
                            switch ({}.toString.call(a.path)) {
                                case "[object Function]":
                                    return a.path();
                                case "[object String]":
                                    return this._options.basePath + a.path;
                                default:
                                    return a.path
                            }
                        }.call(e), n = [r.location.pathname, r.location.hash].join(""), e._isRedirect(i, n)) return void e._redirect(a, i);
                        if (e._isOrphan(a)) {
                            if (!a.orphan) return e._debug("Skip the orphan step " + (e._current + 1) + ".\nOrphan option is false and the element does not exist or is hidden."), void(o ? e._showPrevStep() : e._showNextStep());
                            e._debug("Show the orphan step " + (e._current + 1) + ". Orphans option is true.")
                        }
                        return a.backdrop && e._showBackdrop(e._isOrphan(a) ? void 0 : a.element), s = function() {
                            return e.getCurrentStep() === t ? (null != a.element && a.backdrop && e._showOverlayElement(a), e._showPopover(a, t), null != a.onShown && a.onShown(e), e._debug("Step " + (e._current + 1) + " of " + e._options.steps.length)) : void 0
                        }, a.autoscroll ? e._scrollIntoView(a.element, s) : s(), a.duration ? e.resume() : void 0
                    }
                }(this), a.delay ? (this._debug("Wait " + a.delay + " milliseconds to show the step " + (this._current + 1)), e.setTimeout(function(t) {
                    return function() {
                        return t._callOnPromiseDone(n, i)
                    }
                }(this), a.delay)) : this._callOnPromiseDone(n, i), n) : void 0
            }, n.prototype.getCurrentStep = function() {
                return this._current
            }, n.prototype.setCurrentStep = function(t) {
                return null != t ? (this._current = t, this._setState("current_step", t)) : (this._current = this._getState("current_step"), this._current = null === this._current ? null : parseInt(this._current, 10)), this
            }, n.prototype._setState = function(t, e) {
                var n, r;
                if (this._options.storage) {
                    r = "" + this._options.name + "_" + t;
                    try {
                        this._options.storage.setItem(r, e)
                    } catch (i) {
                        n = i, n.code === DOMException.QUOTA_EXCEEDED_ERR && this._debug("LocalStorage quota exceeded. State storage failed.")
                    }
                    return this._options.afterSetState(r, e)
                }
                return null == this._state && (this._state = {}), this._state[t] = e
            }, n.prototype._removeState = function(t) {
                var e;
                return this._options.storage ? (e = "" + this._options.name + "_" + t, this._options.storage.removeItem(e), this._options.afterRemoveState(e)) : null != this._state ? delete this._state[t] : void 0
            }, n.prototype._getState = function(t) {
                var e, n;
                return this._options.storage ? (e = "" + this._options.name + "_" + t, n = this._options.storage.getItem(e)) : null != this._state && (n = this._state[t]), (void 0 === n || "null" === n) && (n = null), this._options.afterGetState(t, n), n
            }, n.prototype._showNextStep = function() {
                var t, e, n;
                return n = this.getStep(this._current), e = function(t) {
                    return function() {
                        return t.showStep(n.next)
                    }
                }(this), t = this._makePromise(null != n.onNext ? n.onNext(this) : void 0), this._callOnPromiseDone(t, e)
            }, n.prototype._showPrevStep = function() {
                var t, e, n;
                return n = this.getStep(this._current), e = function(t) {
                    return function() {
                        return t.showStep(n.prev)
                    }
                }(this), t = this._makePromise(null != n.onPrev ? n.onPrev(this) : void 0), this._callOnPromiseDone(t, e)
            }, n.prototype._debug = function(t) {
                return this._options.debug ? e.console.log("Bootstrap Tour '" + this._options.name + "' | " + t) : void 0
            }, n.prototype._isRedirect = function(t, e) {
                return null != t && "" !== t && ("[object RegExp]" === {}.toString.call(t) && !t.test(e) || "[object String]" === {}.toString.call(t) && t.replace(/\?.*$/, "").replace(/\/?$/, "") !== e.replace(/\/?$/, ""))
            }, n.prototype._redirect = function(e, n) {
                return t.isFunction(e.redirect) ? e.redirect.call(this, n) : e.redirect === !0 ? (this._debug("Redirect to " + n), r.location.href = n) : void 0
            }, n.prototype._isOrphan = function(e) {
                return null == e.element || !t(e.element).length || t(e.element).is(":hidden") && "http://www.w3.org/2000/svg" !== t(e.element)[0].namespaceURI
            }, n.prototype._isLast = function() {
                return this._current < this._options.steps.length - 1
            }, n.prototype._showPopover = function(e, n) {
                var r, i, o, a;
                return t(".tour-" + this._options.name).remove(), a = t.extend({}, this._options), o = this._isOrphan(e), e.template = this._template(e, n), o && (e.element = "body", e.placement = "top"), r = t(e.element), r.addClass("tour-" + this._options.name + "-element tour-" + this._options.name + "-" + n + "-element"), e.options && t.extend(a, e.options), e.reflex && !o && (r.addClass("tour-step-element-reflex"), r.off("" + this._reflexEvent(e.reflex) + ".tour-" + this._options.name), r.on("" + this._reflexEvent(e.reflex) + ".tour-" + this._options.name, function(t) {
                    return function() {
                        return t._isLast() ? t.next() : t.end()
                    }
                }(this))), r.popover({
                    placement: e.placement,
                    trigger: "manual",
                    title: e.title,
                    content: e.content,
                    html: !0,
                    animation: e.animation,
                    container: e.container,
                    template: e.template,
                    selector: e.element
                }).popover("show"), i = r.data("bs.popover") ? r.data("bs.popover").tip() : r.data("popover").tip(), i.attr("id", e.id), this._reposition(i, e), o ? this._center(i) : void 0
            }, n.prototype._template = function(e, n) {
                var r, i, o, a, s;
                return s = t(t.isFunction(e.template) ? e.template(n, e) : e.template), r = s.find(".popover-navigation"), o = r.find('[data-role="prev"]'), i = r.find('[data-role="next"]'), a = r.find('[data-role="pause-resume"]'), this._isOrphan(e) && s.addClass("orphan"), s.addClass("tour-" + this._options.name + " tour-" + this._options.name + "-" + n), e.prev < 0 && o.addClass("disabled"), e.next < 0 && i.addClass("disabled"), e.duration || a.remove(), s.clone().wrap("<div>").parent().html()
            }, n.prototype._reflexEvent = function(t) {
                return "[object Boolean]" === {}.toString.call(t) ? "click" : t
            }, n.prototype._reposition = function(e, n) {
                var i, o, a, s, u, l, c;
                if (s = e[0].offsetWidth, o = e[0].offsetHeight, c = e.offset(), u = c.left, l = c.top, i = t(r).outerHeight() - c.top - e.outerHeight(), 0 > i && (c.top = c.top + i), a = t("html").outerWidth() - c.left - e.outerWidth(), 0 > a && (c.left = c.left + a), c.top < 0 && (c.top = 0), c.left < 0 && (c.left = 0), e.offset(c), "bottom" === n.placement || "top" === n.placement) {
                    if (u !== c.left) return this._replaceArrow(e, 2 * (c.left - u), s, "left")
                } else if (l !== c.top) return this._replaceArrow(e, 2 * (c.top - l), o, "top")
            }, n.prototype._center = function(n) {
                return n.css("top", t(e).outerHeight() / 2 - n.outerHeight() / 2)
            }, n.prototype._replaceArrow = function(t, e, n, r) {
                return t.find(".arrow").css(r, e ? 50 * (1 - e / n) + "%" : "")
            }, n.prototype._scrollIntoView = function(n, r) {
                var i, o, a, s, u, l;
                return i = t(n), i.length ? (o = t(e), s = i.offset().top, l = o.height(), u = Math.max(0, s - l / 2), this._debug("Scroll into view. ScrollTop: " + u + ". Element offset: " + s + ". Window height: " + l + "."), a = 0, t("body, html").stop(!0, !0).animate({
                    scrollTop: Math.ceil(u)
                }, function(t) {
                    return function() {
                        return 2 === ++a ? (r(), t._debug("Scroll into view.\nAnimation end element offset: " + i.offset().top + ".\nWindow height: " + o.height() + ".")) : void 0
                    }
                }(this))) : r()
            }, n.prototype._onResize = function(n, r) {
                return t(e).on("resize.tour-" + this._options.name, function() {
                    return clearTimeout(r), r = setTimeout(n, 100)
                })
            }, n.prototype._initMouseNavigation = function() {
                var e;
                return e = this, t(r).off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='prev']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='next']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='end']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='pause-resume']").on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='next']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.next()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='prev']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.prev()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='end']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.end()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='pause-resume']", function(n) {
                    var r;
                    return n.preventDefault(), r = t(this), r.text(r.data(e._paused ? "pause-text" : "resume-text")), e._paused ? e.resume() : e.pause()
                })
            }, n.prototype._initKeyboardNavigation = function() {
                return this._options.keyboard ? t(r).on("keyup.tour-" + this._options.name, function(t) {
                    return function(e) {
                        if (e.which) switch (e.which) {
                            case 39:
                                return e.preventDefault(), t._isLast() ? t.next() : t.end();
                            case 37:
                                if (e.preventDefault(), t._current > 0) return t.prev();
                                break;
                            case 27:
                                return e.preventDefault(), t.end()
                        }
                    }
                }(this)) : void 0
            }, n.prototype._makePromise = function(e) {
                return e && t.isFunction(e.then) ? e : null
            }, n.prototype._callOnPromiseDone = function(t, e, n) {
                return t ? t.then(function(t) {
                    return function() {
                        return e.call(t, n)
                    }
                }(this)) : e.call(this, n)
            }, n.prototype._showBackdrop = function() {
                return this.backdrop.backgroundShown ? void 0 : (this.backdrop = t("<div>", {
                    "class": "tour-backdrop"
                }), this.backdrop.backgroundShown = !0, t("body").append(this.backdrop))
            }, n.prototype._hideBackdrop = function() {
                return this._hideOverlayElement(), this._hideBackground()
            }, n.prototype._hideBackground = function() {
                return this.backdrop ? (this.backdrop.remove(), this.backdrop.overlay = null, this.backdrop.backgroundShown = !1) : void 0
            }, n.prototype._showOverlayElement = function(e) {
                var n, r;
                return n = t(e.element), n && 0 !== n.length && !this.backdrop.overlayElementShown ? (this.backdrop.overlayElementShown = !0, this.backdrop.$element = n.addClass("tour-step-backdrop"), this.backdrop.$background = t("<div>", {
                    "class": "tour-step-background"
                }), r = {
                    width: n.innerWidth(),
                    height: n.innerHeight(),
                    offset: n.offset()
                }, this.backdrop.$background.appendTo("body"), e.backdropPadding && (r = this._applyBackdropPadding(e.backdropPadding, r)), this.backdrop.$background.width(r.width).height(r.height).offset(r.offset)) : void 0
            }, n.prototype._hideOverlayElement = function() {
                return this.backdrop.overlayElementShown ? (this.backdrop.$element.removeClass("tour-step-backdrop"), this.backdrop.$background.remove(), this.backdrop.$element = null, this.backdrop.$background = null, this.backdrop.overlayElementShown = !1) : void 0
            }, n.prototype._applyBackdropPadding = function(t, e) {
                return "object" == typeof t ? (null == t.top && (t.top = 0), null == t.right && (t.right = 0), null == t.bottom && (t.bottom = 0), null == t.left && (t.left = 0), e.offset.top = e.offset.top - t.top, e.offset.left = e.offset.left - t.left, e.width = e.width + t.left + t.right, e.height = e.height + t.top + t.bottom) : (e.offset.top = e.offset.top - t, e.offset.left = e.offset.left - t, e.width = e.width + 2 * t, e.height = e.height + 2 * t), e
            }, n.prototype._clearTimer = function() {
                return e.clearTimeout(this._timer), this._timer = null, this._duration = null
            }, n
        }(), e.Tour = n
    }(jQuery, window), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.2.0", n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, r) {
        this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var a = i[o];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    u = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show()
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(document.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var r = this,
                i = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), i.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && i.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                s = /\s?auto?\s?/i,
                u = s.test(a);
            u && (a = a.replace(s, "") || "top"), i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
            var l = this.getPosition(),
                c = i[0].offsetWidth,
                f = i[0].offsetHeight;
            if (u) {
                var h = a,
                    p = this.$element.parent(),
                    d = this.getPosition(p);
                a = "bottom" == a && l.top + l.height + f - d.scroll > d.height ? "top" : "top" == a && l.top - d.scroll - f < 0 ? "bottom" : "right" == a && l.right + c > d.width ? "left" : "left" == a && l.left - c < d.left ? "right" : a, i.removeClass(h).addClass(a)
            }
            var g = this.getCalculatedOffset(a, l, c, f);
            this.applyPlacement(g, a);
            var v = function() {
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", v).emulateTransitionEnd(150) : v()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            a = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top = e.top + a, e.left = e.left + s, t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), r.addClass("in");
        var u = r[0].offsetWidth,
            l = r[0].offsetHeight;
        "top" == n && l != o && (e.top = e.top + o - l);
        var c = this.getViewportAdjustedDelta(n, e, u, l);
        c.left ? e.left += c.left : e.top += c.top;
        var f = c.left ? 2 * c.left - i + u : 2 * c.top - o + l,
            h = c.left ? "left" : "top",
            p = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(e), this.replaceArrow(f, r[0][p], h)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function() {
        function e() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = t.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            r = "BODY" == n.tagName;
        return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
            width: r ? t(window).width() : e.outerWidth(),
            height: r ? t(window).height() : e.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : e.offset())
    }, n.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
                u = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
        } else {
            var l = e.left - o,
                c = e.left + o + n;
            l < a.left ? i.left = a.left - l : c > a.width && (i.left = a.left + a.width - c)
        }
        return i
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var r = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = r, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var r = t(this),
                i = r.data("bs.popover"),
                o = "object" == typeof e && e;
            (i || "destroy" != e) && (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, n.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip
    };
    var r = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = r, this
    }
}(jQuery),
    function(t, e) {
        var n, r;
        return r = e.document, n = function() {
            function n(n) {
                var r;
                try {
                    r = e.localStorage
                } catch (i) {
                    r = !1
                }
                this._options = t.extend({
                    name: "tour",
                    steps: [],
                    container: "body",
                    autoscroll: !0,
                    keyboard: !0,
                    storage: r,
                    debug: !1,
                    backdrop: !1,
                    backdropPadding: 0,
                    redirect: !0,
                    orphan: !1,
                    duration: !1,
                    delay: !1,
                    basePath: "",
                    template: '<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-title"></h3> <div class="popover-content"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-default" data-role="prev">&laquo; Prev</button> <button class="btn btn-sm btn-default" data-role="next">Next &raquo;</button> <button class="btn btn-sm btn-default" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-default" data-role="end">End tour</button> </div> </div>',
                    afterSetState: function() {},
                    afterGetState: function() {},
                    afterRemoveState: function() {},
                    onStart: function() {},
                    onEnd: function() {},
                    onShow: function() {},
                    onShown: function() {},
                    onHide: function() {},
                    onHidden: function() {},
                    onNext: function() {},
                    onPrev: function() {},
                    onPause: function() {},
                    onResume: function() {}
                }, n), this._force = !1, this._inited = !1, this.backdrop = {
                    overlay: null,
                    $element: null,
                    $background: null,
                    backgroundShown: !1,
                    overlayElementShown: !1
                }
            }
            return n.prototype.addSteps = function(t) {
                var e, n, r;
                for (n = 0, r = t.length; r > n; n++) e = t[n], this.addStep(e);
                return this
            }, n.prototype.addStep = function(t) {
                return this._options.steps.push(t), this
            }, n.prototype.getStep = function(e) {
                return null != this._options.steps[e] ? t.extend({
                    id: "step-" + e,
                    path: "",
                    placement: "right",
                    title: "",
                    content: "<p></p>",
                    next: e === this._options.steps.length - 1 ? -1 : e + 1,
                    prev: e - 1,
                    animation: !0,
                    container: this._options.container,
                    autoscroll: this._options.autoscroll,
                    backdrop: this._options.backdrop,
                    backdropPadding: this._options.backdropPadding,
                    redirect: this._options.redirect,
                    orphan: this._options.orphan,
                    duration: this._options.duration,
                    delay: this._options.delay,
                    template: this._options.template,
                    onShow: this._options.onShow,
                    onShown: this._options.onShown,
                    onHide: this._options.onHide,
                    onHidden: this._options.onHidden,
                    onNext: this._options.onNext,
                    onPrev: this._options.onPrev,
                    onPause: this._options.onPause,
                    onResume: this._options.onResume
                }, this._options.steps[e]) : void 0
            }, n.prototype.init = function(t) {
                return this._force = t, this.ended() ? (this._debug("Tour ended, init prevented."), this) : (this.setCurrentStep(), this._initMouseNavigation(), this._initKeyboardNavigation(), this._onResize(function(t) {
                    return function() {
                        return t.showStep(t._current)
                    }
                }(this)), null !== this._current && this.showStep(this._current), this._inited = !0, this)
            }, n.prototype.start = function(t) {
                var e;
                return null == t && (t = !1), this._inited || this.init(t), null === this._current && (e = this._makePromise(null != this._options.onStart ? this._options.onStart(this) : void 0), this._callOnPromiseDone(e, this.showStep, 0)), this
            }, n.prototype.next = function() {
                var t;
                return t = this.hideStep(this._current), this._callOnPromiseDone(t, this._showNextStep)
            }, n.prototype.prev = function() {
                var t;
                return t = this.hideStep(this._current), this._callOnPromiseDone(t, this._showPrevStep)
            }, n.prototype.goTo = function(t) {
                var e;
                return e = this.hideStep(this._current), this._callOnPromiseDone(e, this.showStep, t)
            }, n.prototype.end = function() {
                var n, i;
                return n = function(n) {
                    return function() {
                        return t(r).off("click.tour-" + n._options.name), t(r).off("keyup.tour-" + n._options.name), t(e).off("resize.tour-" + n._options.name), n._setState("end", "yes"), n._inited = !1, n._force = !1, n._clearTimer(), null != n._options.onEnd ? n._options.onEnd(n) : void 0
                    }
                }(this), i = this.hideStep(this._current), this._callOnPromiseDone(i, n)
            }, n.prototype.ended = function() {
                return !this._force && !!this._getState("end")
            }, n.prototype.restart = function() {
                return this._removeState("current_step"), this._removeState("end"), this.start()
            }, n.prototype.pause = function() {
                var t;
                return t = this.getStep(this._current), t && t.duration ? (this._paused = !0, this._duration -= (new Date).getTime() - this._start, e.clearTimeout(this._timer), this._debug("Paused/Stopped step " + (this._current + 1) + " timer (" + this._duration + " remaining)."), null != t.onPause ? t.onPause(this, this._duration) : void 0) : this
            }, n.prototype.resume = function() {
                var t;
                return t = this.getStep(this._current), t && t.duration ? (this._paused = !1, this._start = (new Date).getTime(), this._duration = this._duration || t.duration, this._timer = e.setTimeout(function(t) {
                    return function() {
                        return t._isLast() ? t.next() : t.end()
                    }
                }(this), this._duration), this._debug("Started step " + (this._current + 1) + " timer with duration " + this._duration), null != t.onResume && this._duration !== t.duration ? t.onResume(this, this._duration) : void 0) : this
            }, n.prototype.hideStep = function(e) {
                var n, r, i;
                return (i = this.getStep(e)) ? (this._clearTimer(), r = this._makePromise(null != i.onHide ? i.onHide(this, e) : void 0), n = function(n) {
                    return function() {
                        var r;
                        return r = t(i.element), r.data("bs.popover") || r.data("popover") || (r = t("body")), r.popover("destroy").removeClass("tour-" + n._options.name + "-element tour-" + n._options.name + "-" + e + "-element"), i.reflex && r.removeClass("tour-step-element-reflex").off("" + n._reflexEvent(i.reflex) + ".tour-" + n._options.name), i.backdrop && n._hideBackdrop(), null != i.onHidden ? i.onHidden(n) : void 0
                    }
                }(this), this._callOnPromiseDone(r, n), r) : void 0
            }, n.prototype.showStep = function(t) {
                var n, i, o, a;
                return this.ended() ? (this._debug("Tour ended, showStep prevented."), this) : (a = this.getStep(t)) ? (o = t < this._current, n = this._makePromise(null != a.onShow ? a.onShow(this, t) : void 0), i = function(e) {
                    return function() {
                        var n, i, s;
                        if (e.setCurrentStep(t), i = function() {
                            switch ({}.toString.call(a.path)) {
                                case "[object Function]":
                                    return a.path();
                                case "[object String]":
                                    return this._options.basePath + a.path;
                                default:
                                    return a.path
                            }
                        }.call(e), n = [r.location.pathname, r.location.hash].join(""), e._isRedirect(i, n)) return void e._redirect(a, i);
                        if (e._isOrphan(a)) {
                            if (!a.orphan) return e._debug("Skip the orphan step " + (e._current + 1) + ".\nOrphan option is false and the element does not exist or is hidden."), void(o ? e._showPrevStep() : e._showNextStep());
                            e._debug("Show the orphan step " + (e._current + 1) + ". Orphans option is true.")
                        }
                        return a.backdrop && e._showBackdrop(e._isOrphan(a) ? void 0 : a.element), s = function() {
                            return e.getCurrentStep() === t ? (null != a.element && a.backdrop && e._showOverlayElement(a), e._showPopover(a, t), null != a.onShown && a.onShown(e), e._debug("Step " + (e._current + 1) + " of " + e._options.steps.length)) : void 0
                        }, a.autoscroll ? e._scrollIntoView(a.element, s) : s(), a.duration ? e.resume() : void 0
                    }
                }(this), a.delay ? (this._debug("Wait " + a.delay + " milliseconds to show the step " + (this._current + 1)), e.setTimeout(function(t) {
                    return function() {
                        return t._callOnPromiseDone(n, i)
                    }
                }(this), a.delay)) : this._callOnPromiseDone(n, i), n) : void 0
            }, n.prototype.getCurrentStep = function() {
                return this._current
            }, n.prototype.setCurrentStep = function(t) {
                return null != t ? (this._current = t, this._setState("current_step", t)) : (this._current = this._getState("current_step"), this._current = null === this._current ? null : parseInt(this._current, 10)), this
            }, n.prototype._setState = function(t, e) {
                var n, r;
                if (this._options.storage) {
                    r = "" + this._options.name + "_" + t;
                    try {
                        this._options.storage.setItem(r, e)
                    } catch (i) {
                        n = i, n.code === DOMException.QUOTA_EXCEEDED_ERR && this._debug("LocalStorage quota exceeded. State storage failed.")
                    }
                    return this._options.afterSetState(r, e)
                }
                return null == this._state && (this._state = {}), this._state[t] = e
            }, n.prototype._removeState = function(t) {
                var e;
                return this._options.storage ? (e = "" + this._options.name + "_" + t, this._options.storage.removeItem(e), this._options.afterRemoveState(e)) : null != this._state ? delete this._state[t] : void 0
            }, n.prototype._getState = function(t) {
                var e, n;
                return this._options.storage ? (e = "" + this._options.name + "_" + t, n = this._options.storage.getItem(e)) : null != this._state && (n = this._state[t]), (void 0 === n || "null" === n) && (n = null), this._options.afterGetState(t, n), n
            }, n.prototype._showNextStep = function() {
                var t, e, n;
                return n = this.getStep(this._current), e = function(t) {
                    return function() {
                        return t.showStep(n.next)
                    }
                }(this), t = this._makePromise(null != n.onNext ? n.onNext(this) : void 0), this._callOnPromiseDone(t, e)
            }, n.prototype._showPrevStep = function() {
                var t, e, n;
                return n = this.getStep(this._current), e = function(t) {
                    return function() {
                        return t.showStep(n.prev)
                    }
                }(this), t = this._makePromise(null != n.onPrev ? n.onPrev(this) : void 0), this._callOnPromiseDone(t, e)
            }, n.prototype._debug = function(t) {
                return this._options.debug ? e.console.log("Bootstrap Tour '" + this._options.name + "' | " + t) : void 0
            }, n.prototype._isRedirect = function(t, e) {
                return null != t && "" !== t && ("[object RegExp]" === {}.toString.call(t) && !t.test(e) || "[object String]" === {}.toString.call(t) && t.replace(/\?.*$/, "").replace(/\/?$/, "") !== e.replace(/\/?$/, ""))
            }, n.prototype._redirect = function(e, n) {
                return t.isFunction(e.redirect) ? e.redirect.call(this, n) : e.redirect === !0 ? (this._debug("Redirect to " + n), r.location.href = n) : void 0
            }, n.prototype._isOrphan = function(e) {
                return null == e.element || !t(e.element).length || t(e.element).is(":hidden") && "http://www.w3.org/2000/svg" !== t(e.element)[0].namespaceURI
            }, n.prototype._isLast = function() {
                return this._current < this._options.steps.length - 1
            }, n.prototype._showPopover = function(e, n) {
                var r, i, o, a;
                return t(".tour-" + this._options.name).remove(), a = t.extend({}, this._options), o = this._isOrphan(e), e.template = this._template(e, n), o && (e.element = "body", e.placement = "top"), r = t(e.element), r.addClass("tour-" + this._options.name + "-element tour-" + this._options.name + "-" + n + "-element"), e.options && t.extend(a, e.options), e.reflex && !o && (r.addClass("tour-step-element-reflex"), r.off("" + this._reflexEvent(e.reflex) + ".tour-" + this._options.name), r.on("" + this._reflexEvent(e.reflex) + ".tour-" + this._options.name, function(t) {
                    return function() {
                        return t._isLast() ? t.next() : t.end()
                    }
                }(this))), r.popover({
                    placement: e.placement,
                    trigger: "manual",
                    title: e.title,
                    content: e.content,
                    html: !0,
                    animation: e.animation,
                    container: e.container,
                    template: e.template,
                    selector: e.element
                }).popover("show"), i = r.data("bs.popover") ? r.data("bs.popover").tip() : r.data("popover").tip(), i.attr("id", e.id), this._reposition(i, e), o ? this._center(i) : void 0
            }, n.prototype._template = function(e, n) {
                var r, i, o, a, s;
                return s = t(t.isFunction(e.template) ? e.template(n, e) : e.template), r = s.find(".popover-navigation"), o = r.find('[data-role="prev"]'), i = r.find('[data-role="next"]'), a = r.find('[data-role="pause-resume"]'), this._isOrphan(e) && s.addClass("orphan"), s.addClass("tour-" + this._options.name + " tour-" + this._options.name + "-" + n), e.prev < 0 && o.addClass("disabled"), e.next < 0 && i.addClass("disabled"), e.duration || a.remove(), s.clone().wrap("<div>").parent().html()
            }, n.prototype._reflexEvent = function(t) {
                return "[object Boolean]" === {}.toString.call(t) ? "click" : t
            }, n.prototype._reposition = function(e, n) {
                var i, o, a, s, u, l, c;
                if (s = e[0].offsetWidth, o = e[0].offsetHeight, c = e.offset(), u = c.left, l = c.top, i = t(r).outerHeight() - c.top - e.outerHeight(), 0 > i && (c.top = c.top + i), a = t("html").outerWidth() - c.left - e.outerWidth(), 0 > a && (c.left = c.left + a), c.top < 0 && (c.top = 0), c.left < 0 && (c.left = 0), e.offset(c), "bottom" === n.placement || "top" === n.placement) {
                    if (u !== c.left) return this._replaceArrow(e, 2 * (c.left - u), s, "left")
                } else if (l !== c.top) return this._replaceArrow(e, 2 * (c.top - l), o, "top")
            }, n.prototype._center = function(n) {
                return n.css("top", t(e).outerHeight() / 2 - n.outerHeight() / 2)
            }, n.prototype._replaceArrow = function(t, e, n, r) {
                return t.find(".arrow").css(r, e ? 50 * (1 - e / n) + "%" : "")
            }, n.prototype._scrollIntoView = function(n, r) {
                var i, o, a, s, u, l;
                return i = t(n), i.length ? (o = t(e), s = i.offset().top, l = o.height(), u = Math.max(0, s - l / 2), this._debug("Scroll into view. ScrollTop: " + u + ". Element offset: " + s + ". Window height: " + l + "."), a = 0, t("body, html").stop(!0, !0).animate({
                    scrollTop: Math.ceil(u)
                }, function(t) {
                    return function() {
                        return 2 === ++a ? (r(), t._debug("Scroll into view.\nAnimation end element offset: " + i.offset().top + ".\nWindow height: " + o.height() + ".")) : void 0
                    }
                }(this))) : r()
            }, n.prototype._onResize = function(n, r) {
                return t(e).on("resize.tour-" + this._options.name, function() {
                    return clearTimeout(r), r = setTimeout(n, 100)
                })
            }, n.prototype._initMouseNavigation = function() {
                var e;
                return e = this, t(r).off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='prev']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='next']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='end']").off("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='pause-resume']").on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='next']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.next()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='prev']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.prev()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='end']", function(t) {
                    return function(e) {
                        return e.preventDefault(), t.end()
                    }
                }(this)).on("click.tour-" + this._options.name, ".popover.tour-" + this._options.name + " *[data-role='pause-resume']", function(n) {
                    var r;
                    return n.preventDefault(), r = t(this), r.text(r.data(e._paused ? "pause-text" : "resume-text")), e._paused ? e.resume() : e.pause()
                })
            }, n.prototype._initKeyboardNavigation = function() {
                return this._options.keyboard ? t(r).on("keyup.tour-" + this._options.name, function(t) {
                    return function(e) {
                        if (e.which) switch (e.which) {
                            case 39:
                                return e.preventDefault(), t._isLast() ? t.next() : t.end();
                            case 37:
                                if (e.preventDefault(), t._current > 0) return t.prev();
                                break;
                            case 27:
                                return e.preventDefault(), t.end()
                        }
                    }
                }(this)) : void 0
            }, n.prototype._makePromise = function(e) {
                return e && t.isFunction(e.then) ? e : null
            }, n.prototype._callOnPromiseDone = function(t, e, n) {
                return t ? t.then(function(t) {
                    return function() {
                        return e.call(t, n)
                    }
                }(this)) : e.call(this, n)
            }, n.prototype._showBackdrop = function() {
                return this.backdrop.backgroundShown ? void 0 : (this.backdrop = t("<div>", {
                    "class": "tour-backdrop"
                }), this.backdrop.backgroundShown = !0, t("body").append(this.backdrop))
            }, n.prototype._hideBackdrop = function() {
                return this._hideOverlayElement(), this._hideBackground()
            }, n.prototype._hideBackground = function() {
                return this.backdrop ? (this.backdrop.remove(), this.backdrop.overlay = null, this.backdrop.backgroundShown = !1) : void 0
            }, n.prototype._showOverlayElement = function(e) {
                var n, r;
                return n = t(e.element), n && 0 !== n.length && !this.backdrop.overlayElementShown ? (this.backdrop.overlayElementShown = !0, this.backdrop.$element = n.addClass("tour-step-backdrop"), this.backdrop.$background = t("<div>", {
                    "class": "tour-step-background"
                }), r = {
                    width: n.innerWidth(),
                    height: n.innerHeight(),
                    offset: n.offset()
                }, this.backdrop.$background.appendTo("body"), e.backdropPadding && (r = this._applyBackdropPadding(e.backdropPadding, r)), this.backdrop.$background.width(r.width).height(r.height).offset(r.offset)) : void 0
            }, n.prototype._hideOverlayElement = function() {
                return this.backdrop.overlayElementShown ? (this.backdrop.$element.removeClass("tour-step-backdrop"), this.backdrop.$background.remove(), this.backdrop.$element = null, this.backdrop.$background = null, this.backdrop.overlayElementShown = !1) : void 0
            }, n.prototype._applyBackdropPadding = function(t, e) {
                return "object" == typeof t ? (null == t.top && (t.top = 0), null == t.right && (t.right = 0), null == t.bottom && (t.bottom = 0), null == t.left && (t.left = 0), e.offset.top = e.offset.top - t.top, e.offset.left = e.offset.left - t.left, e.width = e.width + t.left + t.right, e.height = e.height + t.top + t.bottom) : (e.offset.top = e.offset.top - t, e.offset.left = e.offset.left - t, e.width = e.width + 2 * t, e.height = e.height + 2 * t), e
            }, n.prototype._clearTimer = function() {
                return e.clearTimeout(this._timer), this._timer = null, this._duration = null
            }, n
        }(), e.Tour = n
    }(jQuery, window);