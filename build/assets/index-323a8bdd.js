function SA(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, i);
                    l && Object.defineProperty(e, i, l.get ? l : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
})();
var Eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function io(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var uS = {
        exports: {}
    },
    Zc = {},
    sS = {
        exports: {}
    },
    Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks = Symbol.for("react.element"),
    EA = Symbol.for("react.portal"),
    CA = Symbol.for("react.fragment"),
    kA = Symbol.for("react.strict_mode"),
    bA = Symbol.for("react.profiler"),
    _A = Symbol.for("react.provider"),
    OA = Symbol.for("react.context"),
    TA = Symbol.for("react.forward_ref"),
    IA = Symbol.for("react.suspense"),
    RA = Symbol.for("react.memo"),
    PA = Symbol.for("react.lazy"),
    c1 = Symbol.iterator;

function AA(e) {
    return e === null || typeof e != "object" ? null : (e = c1 && e[c1] || e["@@iterator"], typeof e == "function" ? e : null)
}
var aS = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    cS = Object.assign,
    fS = {};

function Zl(e, t, n) {
    this.props = e, this.context = t, this.refs = fS, this.updater = n || aS
}
Zl.prototype.isReactComponent = {};
Zl.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Zl.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function dS() {}
dS.prototype = Zl.prototype;

function jg(e, t, n) {
    this.props = e, this.context = t, this.refs = fS, this.updater = n || aS
}
var Hg = jg.prototype = new dS;
Hg.constructor = jg;
cS(Hg, Zl.prototype);
Hg.isPureReactComponent = !0;
var f1 = Array.isArray,
    pS = Object.prototype.hasOwnProperty,
    Wg = {
        current: null
    },
    hS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function gS(e, t, n) {
    var r, i = {},
        l = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = "" + t.key), t) pS.call(t, r) && !hS.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var f = Array(a), d = 0; d < a; d++) f[d] = arguments[d + 2];
        i.children = f
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: ks,
        type: e,
        key: l,
        ref: s,
        props: i,
        _owner: Wg.current
    }
}

function DA(e, t) {
    return {
        $$typeof: ks,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Vg(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ks
}

function NA(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var d1 = /\/+/g;

function yp(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? NA("" + e.key) : t.toString(36)
}

function qa(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (l) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ks:
                case EA:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + yp(s, 0) : r, f1(i) ? (n = "", e != null && (n = e.replace(d1, "$&/") + "/"), qa(i, t, n, "", function(d) {
        return d
    })) : i != null && (Vg(i) && (i = DA(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(d1, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", f1(e))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var f = r + yp(l, a);
            s += qa(l, t, n, f, i)
        } else if (f = AA(e), typeof f == "function")
            for (e = f.call(e), a = 0; !(l = e.next()).done;) l = l.value, f = r + yp(l, a++), s += qa(l, t, n, f, i);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Ca(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return qa(e, r, "", "", function(l) {
        return t.call(n, l, i++)
    }), r
}

function MA(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var cn = {
        current: null
    },
    Ga = {
        transition: null
    },
    LA = {
        ReactCurrentDispatcher: cn,
        ReactCurrentBatchConfig: Ga,
        ReactCurrentOwner: Wg
    };
Le.Children = {
    map: Ca,
    forEach: function(e, t, n) {
        Ca(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ca(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ca(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Vg(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Le.Component = Zl;
Le.Fragment = CA;
Le.Profiler = bA;
Le.PureComponent = jg;
Le.StrictMode = kA;
Le.Suspense = IA;
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LA;
Le.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = cS({}, e.props),
        i = e.key,
        l = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, s = Wg.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (f in t) pS.call(t, f) && !hS.hasOwnProperty(f) && (r[f] = t[f] === void 0 && a !== void 0 ? a[f] : t[f])
    }
    var f = arguments.length - 2;
    if (f === 1) r.children = n;
    else if (1 < f) {
        a = Array(f);
        for (var d = 0; d < f; d++) a[d] = arguments[d + 2];
        r.children = a
    }
    return {
        $$typeof: ks,
        type: e.type,
        key: i,
        ref: l,
        props: r,
        _owner: s
    }
};
Le.createContext = function(e) {
    return e = {
        $$typeof: OA,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: _A,
        _context: e
    }, e.Consumer = e
};
Le.createElement = gS;
Le.createFactory = function(e) {
    var t = gS.bind(null, e);
    return t.type = e, t
};
Le.createRef = function() {
    return {
        current: null
    }
};
Le.forwardRef = function(e) {
    return {
        $$typeof: TA,
        render: e
    }
};
Le.isValidElement = Vg;
Le.lazy = function(e) {
    return {
        $$typeof: PA,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: MA
    }
};
Le.memo = function(e, t) {
    return {
        $$typeof: RA,
        type: e,
        compare: t === void 0 ? null : t
    }
};
Le.startTransition = function(e) {
    var t = Ga.transition;
    Ga.transition = {};
    try {
        e()
    } finally {
        Ga.transition = t
    }
};
Le.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
Le.useCallback = function(e, t) {
    return cn.current.useCallback(e, t)
};
Le.useContext = function(e) {
    return cn.current.useContext(e)
};
Le.useDebugValue = function() {};
Le.useDeferredValue = function(e) {
    return cn.current.useDeferredValue(e)
};
Le.useEffect = function(e, t) {
    return cn.current.useEffect(e, t)
};
Le.useId = function() {
    return cn.current.useId()
};
Le.useImperativeHandle = function(e, t, n) {
    return cn.current.useImperativeHandle(e, t, n)
};
Le.useInsertionEffect = function(e, t) {
    return cn.current.useInsertionEffect(e, t)
};
Le.useLayoutEffect = function(e, t) {
    return cn.current.useLayoutEffect(e, t)
};
Le.useMemo = function(e, t) {
    return cn.current.useMemo(e, t)
};
Le.useReducer = function(e, t, n) {
    return cn.current.useReducer(e, t, n)
};
Le.useRef = function(e) {
    return cn.current.useRef(e)
};
Le.useState = function(e) {
    return cn.current.useState(e)
};
Le.useSyncExternalStore = function(e, t, n) {
    return cn.current.useSyncExternalStore(e, t, n)
};
Le.useTransition = function() {
    return cn.current.useTransition()
};
Le.version = "18.2.0";
sS.exports = Le;
var R = sS.exports;
const _e = io(R),
    mS = SA({
        __proto__: null,
        default: _e
    }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FA = R,
    zA = Symbol.for("react.element"),
    $A = Symbol.for("react.fragment"),
    BA = Object.prototype.hasOwnProperty,
    UA = FA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    jA = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function vS(e, t, n) {
    var r, i = {},
        l = null,
        s = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) BA.call(t, r) && !jA.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: zA,
        type: e,
        key: l,
        ref: s,
        props: i,
        _owner: UA.current
    }
}
Zc.Fragment = $A;
Zc.jsx = vS;
Zc.jsxs = vS;
uS.exports = Zc;
var qg = uS.exports;
const Bn = qg.Fragment,
    $ = qg.jsx,
    Se = qg.jsxs;
var yS = {
        exports: {}
    },
    Wn = {},
    wS = {
        exports: {}
    },
    xS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(W, ee) {
        var _ = W.length;
        W.push(ee);
        e: for (; 0 < _;) {
            var ne = _ - 1 >>> 1,
                ae = W[ne];
            if (0 < i(ae, ee)) W[ne] = ee, W[_] = ae, _ = ne;
            else break e
        }
    }

    function n(W) {
        return W.length === 0 ? null : W[0]
    }

    function r(W) {
        if (W.length === 0) return null;
        var ee = W[0],
            _ = W.pop();
        if (_ !== ee) {
            W[0] = _;
            e: for (var ne = 0, ae = W.length, O = ae >>> 1; ne < O;) {
                var de = 2 * (ne + 1) - 1,
                    Pe = W[de],
                    me = de + 1,
                    De = W[me];
                if (0 > i(Pe, _)) me < ae && 0 > i(De, Pe) ? (W[ne] = De, W[me] = _, ne = me) : (W[ne] = Pe, W[de] = _, ne = de);
                else if (me < ae && 0 > i(De, _)) W[ne] = De, W[me] = _, ne = me;
                else break e
            }
        }
        return ee
    }

    function i(W, ee) {
        var _ = W.sortIndex - ee.sortIndex;
        return _ !== 0 ? _ : W.id - ee.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var f = [],
        d = [],
        p = 1,
        g = null,
        v = 3,
        m = !1,
        E = !1,
        S = !1,
        A = typeof setTimeout == "function" ? setTimeout : null,
        y = typeof clearTimeout == "function" ? clearTimeout : null,
        x = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function k(W) {
        for (var ee = n(d); ee !== null;) {
            if (ee.callback === null) r(d);
            else if (ee.startTime <= W) r(d), ee.sortIndex = ee.expirationTime, t(f, ee);
            else break;
            ee = n(d)
        }
    }

    function P(W) {
        if (S = !1, k(W), !E)
            if (n(f) !== null) E = !0, oe(N);
            else {
                var ee = n(d);
                ee !== null && le(P, ee.startTime - W)
            }
    }

    function N(W, ee) {
        E = !1, S && (S = !1, y(z), z = -1), m = !0;
        var _ = v;
        try {
            for (k(ee), g = n(f); g !== null && (!(g.expirationTime > ee) || W && !B());) {
                var ne = g.callback;
                if (typeof ne == "function") {
                    g.callback = null, v = g.priorityLevel;
                    var ae = ne(g.expirationTime <= ee);
                    ee = e.unstable_now(), typeof ae == "function" ? g.callback = ae : g === n(f) && r(f), k(ee)
                } else r(f);
                g = n(f)
            }
            if (g !== null) var O = !0;
            else {
                var de = n(d);
                de !== null && le(P, de.startTime - ee), O = !1
            }
            return O
        } finally {
            g = null, v = _, m = !1
        }
    }
    var T = !1,
        F = null,
        z = -1,
        q = 5,
        Q = -1;

    function B() {
        return !(e.unstable_now() - Q < q)
    }

    function K() {
        if (F !== null) {
            var W = e.unstable_now();
            Q = W;
            var ee = !0;
            try {
                ee = F(!0, W)
            } finally {
                ee ? j() : (T = !1, F = null)
            }
        } else T = !1
    }
    var j;
    if (typeof x == "function") j = function() {
        x(K)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            J = U.port2;
        U.port1.onmessage = K, j = function() {
            J.postMessage(null)
        }
    } else j = function() {
        A(K, 0)
    };

    function oe(W) {
        F = W, T || (T = !0, j())
    }

    function le(W, ee) {
        z = A(function() {
            W(e.unstable_now())
        }, ee)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(W) {
        W.callback = null
    }, e.unstable_continueExecution = function() {
        E || m || (E = !0, oe(N))
    }, e.unstable_forceFrameRate = function(W) {
        0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : q = 0 < W ? Math.floor(1e3 / W) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(f)
    }, e.unstable_next = function(W) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var ee = 3;
                break;
            default:
                ee = v
        }
        var _ = v;
        v = ee;
        try {
            return W()
        } finally {
            v = _
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(W, ee) {
        switch (W) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                W = 3
        }
        var _ = v;
        v = W;
        try {
            return ee()
        } finally {
            v = _
        }
    }, e.unstable_scheduleCallback = function(W, ee, _) {
        var ne = e.unstable_now();
        switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? ne + _ : ne) : _ = ne, W) {
            case 1:
                var ae = -1;
                break;
            case 2:
                ae = 250;
                break;
            case 5:
                ae = 1073741823;
                break;
            case 4:
                ae = 1e4;
                break;
            default:
                ae = 5e3
        }
        return ae = _ + ae, W = {
            id: p++,
            callback: ee,
            priorityLevel: W,
            startTime: _,
            expirationTime: ae,
            sortIndex: -1
        }, _ > ne ? (W.sortIndex = _, t(d, W), n(f) === null && W === n(d) && (S ? (y(z), z = -1) : S = !0, le(P, _ - ne))) : (W.sortIndex = ae, t(f, W), E || m || (E = !0, oe(N))), W
    }, e.unstable_shouldYield = B, e.unstable_wrapCallback = function(W) {
        var ee = v;
        return function() {
            var _ = v;
            v = ee;
            try {
                return W.apply(this, arguments)
            } finally {
                v = _
            }
        }
    }
})(xS);
wS.exports = xS;
var HA = wS.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var SS = R,
    Un = HA;

function te(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ES = new Set,
    ns = {};

function Wo(e, t) {
    Bl(e, t), Bl(e + "Capture", t)
}

function Bl(e, t) {
    for (ns[e] = t, e = 0; e < t.length; e++) ES.add(t[e])
}
var ai = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Eh = Object.prototype.hasOwnProperty,
    WA = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    p1 = {},
    h1 = {};

function VA(e) {
    return Eh.call(h1, e) ? !0 : Eh.call(p1, e) ? !1 : WA.test(e) ? h1[e] = !0 : (p1[e] = !0, !1)
}

function qA(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function GA(e, t, n, r) {
    if (t === null || typeof t > "u" || qA(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function fn(e, t, n, r, i, l, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = s
}
var jt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    jt[e] = new fn(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    jt[t] = new fn(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    jt[e] = new fn(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    jt[e] = new fn(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    jt[e] = new fn(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    jt[e] = new fn(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    jt[e] = new fn(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    jt[e] = new fn(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    jt[e] = new fn(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Gg = /[\-:]([a-z])/g;

function Kg(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Gg, Kg);
    jt[t] = new fn(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Gg, Kg);
    jt[t] = new fn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Gg, Kg);
    jt[t] = new fn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    jt[e] = new fn(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
jt.xlinkHref = new fn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    jt[e] = new fn(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Qg(e, t, n, r) {
    var i = jt.hasOwnProperty(t) ? jt[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (GA(t, n, i, r) && (n = null), r || i === null ? VA(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var hi = SS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ka = Symbol.for("react.element"),
    gl = Symbol.for("react.portal"),
    ml = Symbol.for("react.fragment"),
    Yg = Symbol.for("react.strict_mode"),
    Ch = Symbol.for("react.profiler"),
    CS = Symbol.for("react.provider"),
    kS = Symbol.for("react.context"),
    Xg = Symbol.for("react.forward_ref"),
    kh = Symbol.for("react.suspense"),
    bh = Symbol.for("react.suspense_list"),
    Zg = Symbol.for("react.memo"),
    Pi = Symbol.for("react.lazy"),
    bS = Symbol.for("react.offscreen"),
    g1 = Symbol.iterator;

function Cu(e) {
    return e === null || typeof e != "object" ? null : (e = g1 && e[g1] || e["@@iterator"], typeof e == "function" ? e : null)
}
var yt = Object.assign,
    wp;

function Du(e) {
    if (wp === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        wp = t && t[1] || ""
    }
    return `
` + wp + e
}
var xp = !1;

function Sp(e, t) {
    if (!e || xp) return "";
    xp = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var i = d.stack.split(`
`), l = r.stack.split(`
`), s = i.length - 1, a = l.length - 1; 1 <= s && 0 <= a && i[s] !== l[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== l[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || i[s] !== l[a]) {
                                var f = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f
                            } while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        xp = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Du(e) : ""
}

function KA(e) {
    switch (e.tag) {
        case 5:
            return Du(e.type);
        case 16:
            return Du("Lazy");
        case 13:
            return Du("Suspense");
        case 19:
            return Du("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Sp(e.type, !1), e;
        case 11:
            return e = Sp(e.type.render, !1), e;
        case 1:
            return e = Sp(e.type, !0), e;
        default:
            return ""
    }
}

function _h(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case ml:
            return "Fragment";
        case gl:
            return "Portal";
        case Ch:
            return "Profiler";
        case Yg:
            return "StrictMode";
        case kh:
            return "Suspense";
        case bh:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case kS:
            return (e.displayName || "Context") + ".Consumer";
        case CS:
            return (e._context.displayName || "Context") + ".Provider";
        case Xg:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Zg:
            return t = e.displayName || null, t !== null ? t : _h(e.type) || "Memo";
        case Pi:
            t = e._payload, e = e._init;
            try {
                return _h(e(t))
            } catch {}
    }
    return null
}

function QA(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return _h(t);
        case 8:
            return t === Yg ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Zi(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function _S(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function YA(e) {
    var t = _S(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, l.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function ba(e) {
    e._valueTracker || (e._valueTracker = YA(e))
}

function OS(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = _S(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ac(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Oh(e, t) {
    var n = t.checked;
    return yt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function m1(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Zi(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function TS(e, t) {
    t = t.checked, t != null && Qg(e, "checked", t, !1)
}

function Th(e, t) {
    TS(e, t);
    var n = Zi(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ih(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ih(e, t.type, Zi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function v1(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ih(e, t, n) {
    (t !== "number" || ac(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nu = Array.isArray;

function Tl(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Zi(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Rh(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(te(91));
    return yt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function y1(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(te(92));
            if (Nu(n)) {
                if (1 < n.length) throw Error(te(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Zi(n)
    }
}

function IS(e, t) {
    var n = Zi(t.value),
        r = Zi(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function w1(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function RS(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Ph(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? RS(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var _a, PS = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (_a = _a || document.createElement("div"), _a.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _a.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function rs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Bu = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    XA = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bu).forEach(function(e) {
    XA.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Bu[t] = Bu[e]
    })
});

function AS(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bu.hasOwnProperty(e) && Bu[e] ? ("" + t).trim() : t + "px"
}

function DS(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = AS(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var ZA = yt({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Ah(e, t) {
    if (t) {
        if (ZA[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(te(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(te(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(te(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(te(62))
    }
}

function Dh(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Nh = null;

function Jg(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Mh = null,
    Il = null,
    Rl = null;

function x1(e) {
    if (e = Os(e)) {
        if (typeof Mh != "function") throw Error(te(280));
        var t = e.stateNode;
        t && (t = rf(t), Mh(e.stateNode, e.type, t))
    }
}

function NS(e) {
    Il ? Rl ? Rl.push(e) : Rl = [e] : Il = e
}

function MS() {
    if (Il) {
        var e = Il,
            t = Rl;
        if (Rl = Il = null, x1(e), t)
            for (e = 0; e < t.length; e++) x1(t[e])
    }
}

function LS(e, t) {
    return e(t)
}

function FS() {}
var Ep = !1;

function zS(e, t, n) {
    if (Ep) return e(t, n);
    Ep = !0;
    try {
        return LS(e, t, n)
    } finally {
        Ep = !1, (Il !== null || Rl !== null) && (FS(), MS())
    }
}

function is(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = rf(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(te(231, t, typeof n));
    return n
}
var Lh = !1;
if (ai) try {
    var ku = {};
    Object.defineProperty(ku, "passive", {
        get: function() {
            Lh = !0
        }
    }), window.addEventListener("test", ku, ku), window.removeEventListener("test", ku, ku)
} catch {
    Lh = !1
}

function JA(e, t, n, r, i, l, s, a, f) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (p) {
        this.onError(p)
    }
}
var Uu = !1,
    cc = null,
    fc = !1,
    Fh = null,
    eD = {
        onError: function(e) {
            Uu = !0, cc = e
        }
    };

function tD(e, t, n, r, i, l, s, a, f) {
    Uu = !1, cc = null, JA.apply(eD, arguments)
}

function nD(e, t, n, r, i, l, s, a, f) {
    if (tD.apply(this, arguments), Uu) {
        if (Uu) {
            var d = cc;
            Uu = !1, cc = null
        } else throw Error(te(198));
        fc || (fc = !0, Fh = d)
    }
}

function Vo(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function $S(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function S1(e) {
    if (Vo(e) !== e) throw Error(te(188))
}

function rD(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Vo(e), t === null) throw Error(te(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l;) {
                if (l === n) return S1(i), e;
                if (l === r) return S1(i), t;
                l = l.sibling
            }
            throw Error(te(188))
        }
        if (n.return !== r.return) n = i, r = l;
        else {
            for (var s = !1, a = i.child; a;) {
                if (a === n) {
                    s = !0, n = i, r = l;
                    break
                }
                if (a === r) {
                    s = !0, r = i, n = l;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = l.child; a;) {
                    if (a === n) {
                        s = !0, n = l, r = i;
                        break
                    }
                    if (a === r) {
                        s = !0, r = l, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(te(189))
            }
        }
        if (n.alternate !== r) throw Error(te(190))
    }
    if (n.tag !== 3) throw Error(te(188));
    return n.stateNode.current === n ? e : t
}

function BS(e) {
    return e = rD(e), e !== null ? US(e) : null
}

function US(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = US(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var jS = Un.unstable_scheduleCallback,
    E1 = Un.unstable_cancelCallback,
    iD = Un.unstable_shouldYield,
    oD = Un.unstable_requestPaint,
    kt = Un.unstable_now,
    lD = Un.unstable_getCurrentPriorityLevel,
    em = Un.unstable_ImmediatePriority,
    HS = Un.unstable_UserBlockingPriority,
    dc = Un.unstable_NormalPriority,
    uD = Un.unstable_LowPriority,
    WS = Un.unstable_IdlePriority,
    Jc = null,
    Ur = null;

function sD(e) {
    if (Ur && typeof Ur.onCommitFiberRoot == "function") try {
        Ur.onCommitFiberRoot(Jc, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Or = Math.clz32 ? Math.clz32 : fD,
    aD = Math.log,
    cD = Math.LN2;

function fD(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (aD(e) / cD | 0) | 0
}
var Oa = 64,
    Ta = 4194304;

function Mu(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function pc(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = Mu(a) : (l &= s, l !== 0 && (r = Mu(l)))
    } else s = n & ~i, s !== 0 ? r = Mu(s) : l !== 0 && (r = Mu(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Or(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function dD(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function pD(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var s = 31 - Or(l),
            a = 1 << s,
            f = i[s];
        f === -1 ? (!(a & n) || a & r) && (i[s] = dD(a, t)) : f <= t && (e.expiredLanes |= a), l &= ~a
    }
}

function zh(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function VS() {
    var e = Oa;
    return Oa <<= 1, !(Oa & 4194240) && (Oa = 64), e
}

function Cp(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function bs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Or(t), e[t] = n
}

function hD(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Or(n),
            l = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
    }
}

function tm(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Or(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var Ye = 0;

function qS(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var GS, nm, KS, QS, YS, $h = !1,
    Ia = [],
    $i = null,
    Bi = null,
    Ui = null,
    os = new Map,
    ls = new Map,
    Di = [],
    gD = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function C1(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            $i = null;
            break;
        case "dragenter":
        case "dragleave":
            Bi = null;
            break;
        case "mouseover":
        case "mouseout":
            Ui = null;
            break;
        case "pointerover":
        case "pointerout":
            os.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ls.delete(t.pointerId)
    }
}

function bu(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    }, t !== null && (t = Os(t), t !== null && nm(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function mD(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return $i = bu($i, e, t, n, r, i), !0;
        case "dragenter":
            return Bi = bu(Bi, e, t, n, r, i), !0;
        case "mouseover":
            return Ui = bu(Ui, e, t, n, r, i), !0;
        case "pointerover":
            var l = i.pointerId;
            return os.set(l, bu(os.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return l = i.pointerId, ls.set(l, bu(ls.get(l) || null, e, t, n, r, i)), !0
    }
    return !1
}

function XS(e) {
    var t = _o(e.target);
    if (t !== null) {
        var n = Vo(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = $S(n), t !== null) {
                    e.blockedOn = t, YS(e.priority, function() {
                        KS(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ka(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Bh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Nh = r, n.target.dispatchEvent(r), Nh = null
        } else return t = Os(n), t !== null && nm(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function k1(e, t, n) {
    Ka(e) && n.delete(t)
}

function vD() {
    $h = !1, $i !== null && Ka($i) && ($i = null), Bi !== null && Ka(Bi) && (Bi = null), Ui !== null && Ka(Ui) && (Ui = null), os.forEach(k1), ls.forEach(k1)
}

function _u(e, t) {
    e.blockedOn === t && (e.blockedOn = null, $h || ($h = !0, Un.unstable_scheduleCallback(Un.unstable_NormalPriority, vD)))
}

function us(e) {
    function t(i) {
        return _u(i, e)
    }
    if (0 < Ia.length) {
        _u(Ia[0], e);
        for (var n = 1; n < Ia.length; n++) {
            var r = Ia[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for ($i !== null && _u($i, e), Bi !== null && _u(Bi, e), Ui !== null && _u(Ui, e), os.forEach(t), ls.forEach(t), n = 0; n < Di.length; n++) r = Di[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Di.length && (n = Di[0], n.blockedOn === null);) XS(n), n.blockedOn === null && Di.shift()
}
var Pl = hi.ReactCurrentBatchConfig,
    hc = !0;

function yD(e, t, n, r) {
    var i = Ye,
        l = Pl.transition;
    Pl.transition = null;
    try {
        Ye = 1, rm(e, t, n, r)
    } finally {
        Ye = i, Pl.transition = l
    }
}

function wD(e, t, n, r) {
    var i = Ye,
        l = Pl.transition;
    Pl.transition = null;
    try {
        Ye = 4, rm(e, t, n, r)
    } finally {
        Ye = i, Pl.transition = l
    }
}

function rm(e, t, n, r) {
    if (hc) {
        var i = Bh(e, t, n, r);
        if (i === null) Dp(e, t, r, gc, n), C1(e, r);
        else if (mD(i, e, t, n, r)) r.stopPropagation();
        else if (C1(e, r), t & 4 && -1 < gD.indexOf(e)) {
            for (; i !== null;) {
                var l = Os(i);
                if (l !== null && GS(l), l = Bh(e, t, n, r), l === null && Dp(e, t, r, gc, n), l === i) break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else Dp(e, t, r, null, n)
    }
}
var gc = null;

function Bh(e, t, n, r) {
    if (gc = null, e = Jg(r), e = _o(e), e !== null)
        if (t = Vo(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = $S(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return gc = e, null
}

function ZS(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (lD()) {
                case em:
                    return 1;
                case HS:
                    return 4;
                case dc:
                case uD:
                    return 16;
                case WS:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Fi = null,
    im = null,
    Qa = null;

function JS() {
    if (Qa) return Qa;
    var e, t = im,
        n = t.length,
        r, i = "value" in Fi ? Fi.value : Fi.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
    return Qa = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ya(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ra() {
    return !0
}

function b1() {
    return !1
}

function Vn(e) {
    function t(n, r, i, l, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(l) : l[a]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Ra : b1, this.isPropagationStopped = b1, this
    }
    return yt(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ra)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ra)
        },
        persist: function() {},
        isPersistent: Ra
    }), t
}
var Jl = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    om = Vn(Jl),
    _s = yt({}, Jl, {
        view: 0,
        detail: 0
    }),
    xD = Vn(_s),
    kp, bp, Ou, ef = yt({}, _s, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: lm,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ou && (Ou && e.type === "mousemove" ? (kp = e.screenX - Ou.screenX, bp = e.screenY - Ou.screenY) : bp = kp = 0, Ou = e), kp)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : bp
        }
    }),
    _1 = Vn(ef),
    SD = yt({}, ef, {
        dataTransfer: 0
    }),
    ED = Vn(SD),
    CD = yt({}, _s, {
        relatedTarget: 0
    }),
    _p = Vn(CD),
    kD = yt({}, Jl, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    bD = Vn(kD),
    _D = yt({}, Jl, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    OD = Vn(_D),
    TD = yt({}, Jl, {
        data: 0
    }),
    O1 = Vn(TD),
    ID = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    RD = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    PD = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function AD(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = PD[e]) ? !!t[e] : !1
}

function lm() {
    return AD
}
var DD = yt({}, _s, {
        key: function(e) {
            if (e.key) {
                var t = ID[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ya(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? RD[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: lm,
        charCode: function(e) {
            return e.type === "keypress" ? Ya(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ya(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    ND = Vn(DD),
    MD = yt({}, ef, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    T1 = Vn(MD),
    LD = yt({}, _s, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: lm
    }),
    FD = Vn(LD),
    zD = yt({}, Jl, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    $D = Vn(zD),
    BD = yt({}, ef, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    UD = Vn(BD),
    jD = [9, 13, 27, 32],
    um = ai && "CompositionEvent" in window,
    ju = null;
ai && "documentMode" in document && (ju = document.documentMode);
var HD = ai && "TextEvent" in window && !ju,
    eE = ai && (!um || ju && 8 < ju && 11 >= ju),
    I1 = String.fromCharCode(32),
    R1 = !1;

function tE(e, t) {
    switch (e) {
        case "keyup":
            return jD.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function nE(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var vl = !1;

function WD(e, t) {
    switch (e) {
        case "compositionend":
            return nE(t);
        case "keypress":
            return t.which !== 32 ? null : (R1 = !0, I1);
        case "textInput":
            return e = t.data, e === I1 && R1 ? null : e;
        default:
            return null
    }
}

function VD(e, t) {
    if (vl) return e === "compositionend" || !um && tE(e, t) ? (e = JS(), Qa = im = Fi = null, vl = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return eE && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var qD = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function P1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qD[e.type] : t === "textarea"
}

function rE(e, t, n, r) {
    NS(r), t = mc(t, "onChange"), 0 < t.length && (n = new om("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Hu = null,
    ss = null;

function GD(e) {
    hE(e, 0)
}

function tf(e) {
    var t = xl(e);
    if (OS(t)) return e
}

function KD(e, t) {
    if (e === "change") return t
}
var iE = !1;
if (ai) {
    var Op;
    if (ai) {
        var Tp = "oninput" in document;
        if (!Tp) {
            var A1 = document.createElement("div");
            A1.setAttribute("oninput", "return;"), Tp = typeof A1.oninput == "function"
        }
        Op = Tp
    } else Op = !1;
    iE = Op && (!document.documentMode || 9 < document.documentMode)
}

function D1() {
    Hu && (Hu.detachEvent("onpropertychange", oE), ss = Hu = null)
}

function oE(e) {
    if (e.propertyName === "value" && tf(ss)) {
        var t = [];
        rE(t, ss, e, Jg(e)), zS(GD, t)
    }
}

function QD(e, t, n) {
    e === "focusin" ? (D1(), Hu = t, ss = n, Hu.attachEvent("onpropertychange", oE)) : e === "focusout" && D1()
}

function YD(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return tf(ss)
}

function XD(e, t) {
    if (e === "click") return tf(t)
}

function ZD(e, t) {
    if (e === "input" || e === "change") return tf(t)
}

function JD(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ir = typeof Object.is == "function" ? Object.is : JD;

function as(e, t) {
    if (Ir(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Eh.call(t, i) || !Ir(e[i], t[i])) return !1
    }
    return !0
}

function N1(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function M1(e, t) {
    var n = N1(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = N1(n)
    }
}

function lE(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function uE() {
    for (var e = window, t = ac(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ac(e.document)
    }
    return t
}

function sm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function eN(e) {
    var t = uE(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && lE(n.ownerDocument.documentElement, n)) {
        if (r !== null && sm(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = M1(n, l);
                var s = M1(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var tN = ai && "documentMode" in document && 11 >= document.documentMode,
    yl = null,
    Uh = null,
    Wu = null,
    jh = !1;

function L1(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jh || yl == null || yl !== ac(r) || (r = yl, "selectionStart" in r && sm(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Wu && as(Wu, r) || (Wu = r, r = mc(Uh, "onSelect"), 0 < r.length && (t = new om("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = yl)))
}

function Pa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var wl = {
        animationend: Pa("Animation", "AnimationEnd"),
        animationiteration: Pa("Animation", "AnimationIteration"),
        animationstart: Pa("Animation", "AnimationStart"),
        transitionend: Pa("Transition", "TransitionEnd")
    },
    Ip = {},
    sE = {};
ai && (sE = document.createElement("div").style, "AnimationEvent" in window || (delete wl.animationend.animation, delete wl.animationiteration.animation, delete wl.animationstart.animation), "TransitionEvent" in window || delete wl.transitionend.transition);

function nf(e) {
    if (Ip[e]) return Ip[e];
    if (!wl[e]) return e;
    var t = wl[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in sE) return Ip[e] = t[n];
    return e
}
var aE = nf("animationend"),
    cE = nf("animationiteration"),
    fE = nf("animationstart"),
    dE = nf("transitionend"),
    pE = new Map,
    F1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function oo(e, t) {
    pE.set(e, t), Wo(t, [e])
}
for (var Rp = 0; Rp < F1.length; Rp++) {
    var Pp = F1[Rp],
        nN = Pp.toLowerCase(),
        rN = Pp[0].toUpperCase() + Pp.slice(1);
    oo(nN, "on" + rN)
}
oo(aE, "onAnimationEnd");
oo(cE, "onAnimationIteration");
oo(fE, "onAnimationStart");
oo("dblclick", "onDoubleClick");
oo("focusin", "onFocus");
oo("focusout", "onBlur");
oo(dE, "onTransitionEnd");
Bl("onMouseEnter", ["mouseout", "mouseover"]);
Bl("onMouseLeave", ["mouseout", "mouseover"]);
Bl("onPointerEnter", ["pointerout", "pointerover"]);
Bl("onPointerLeave", ["pointerout", "pointerover"]);
Wo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Wo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Wo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Wo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Wo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Lu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    iN = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lu));

function z1(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, nD(r, t, void 0, e), e.currentTarget = null
}

function hE(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        f = a.instance,
                        d = a.currentTarget;
                    if (a = a.listener, f !== l && i.isPropagationStopped()) break e;
                    z1(i, a, d), l = f
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], f = a.instance, d = a.currentTarget, a = a.listener, f !== l && i.isPropagationStopped()) break e;
                        z1(i, a, d), l = f
                    }
        }
    }
    if (fc) throw e = Fh, fc = !1, Fh = null, e
}

function ut(e, t) {
    var n = t[Gh];
    n === void 0 && (n = t[Gh] = new Set);
    var r = e + "__bubble";
    n.has(r) || (gE(t, e, 2, !1), n.add(r))
}

function Ap(e, t, n) {
    var r = 0;
    t && (r |= 4), gE(n, e, r, t)
}
var Aa = "_reactListening" + Math.random().toString(36).slice(2);

function cs(e) {
    if (!e[Aa]) {
        e[Aa] = !0, ES.forEach(function(n) {
            n !== "selectionchange" && (iN.has(n) || Ap(n, !1, e), Ap(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Aa] || (t[Aa] = !0, Ap("selectionchange", !1, t))
    }
}

function gE(e, t, n, r) {
    switch (ZS(t)) {
        case 1:
            var i = yD;
            break;
        case 4:
            i = wD;
            break;
        default:
            i = rm
    }
    n = i.bind(null, t, n, e), i = void 0, !Lh || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Dp(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var f = s.tag;
                    if ((f === 3 || f === 4) && (f = s.stateNode.containerInfo, f === i || f.nodeType === 8 && f.parentNode === i)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = _o(a), s === null) return;
                if (f = s.tag, f === 5 || f === 6) {
                    r = l = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    zS(function() {
        var d = l,
            p = Jg(n),
            g = [];
        e: {
            var v = pE.get(e);
            if (v !== void 0) {
                var m = om,
                    E = e;
                switch (e) {
                    case "keypress":
                        if (Ya(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = ND;
                        break;
                    case "focusin":
                        E = "focus", m = _p;
                        break;
                    case "focusout":
                        E = "blur", m = _p;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = _p;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = _1;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = ED;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = FD;
                        break;
                    case aE:
                    case cE:
                    case fE:
                        m = bD;
                        break;
                    case dE:
                        m = $D;
                        break;
                    case "scroll":
                        m = xD;
                        break;
                    case "wheel":
                        m = UD;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = OD;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = T1
                }
                var S = (t & 4) !== 0,
                    A = !S && e === "scroll",
                    y = S ? v !== null ? v + "Capture" : null : v;
                S = [];
                for (var x = d, k; x !== null;) {
                    k = x;
                    var P = k.stateNode;
                    if (k.tag === 5 && P !== null && (k = P, y !== null && (P = is(x, y), P != null && S.push(fs(x, P, k)))), A) break;
                    x = x.return
                }
                0 < S.length && (v = new m(v, E, null, n, p), g.push({
                    event: v,
                    listeners: S
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", v && n !== Nh && (E = n.relatedTarget || n.fromElement) && (_o(E) || E[ci])) break e;
                if ((m || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, m ? (E = n.relatedTarget || n.toElement, m = d, E = E ? _o(E) : null, E !== null && (A = Vo(E), E !== A || E.tag !== 5 && E.tag !== 6) && (E = null)) : (m = null, E = d), m !== E)) {
                    if (S = _1, P = "onMouseLeave", y = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (S = T1, P = "onPointerLeave", y = "onPointerEnter", x = "pointer"), A = m == null ? v : xl(m), k = E == null ? v : xl(E), v = new S(P, x + "leave", m, n, p), v.target = A, v.relatedTarget = k, P = null, _o(p) === d && (S = new S(y, x + "enter", E, n, p), S.target = k, S.relatedTarget = A, P = S), A = P, m && E) t: {
                        for (S = m, y = E, x = 0, k = S; k; k = al(k)) x++;
                        for (k = 0, P = y; P; P = al(P)) k++;
                        for (; 0 < x - k;) S = al(S),
                        x--;
                        for (; 0 < k - x;) y = al(y),
                        k--;
                        for (; x--;) {
                            if (S === y || y !== null && S === y.alternate) break t;
                            S = al(S), y = al(y)
                        }
                        S = null
                    }
                    else S = null;
                    m !== null && $1(g, v, m, S, !1), E !== null && A !== null && $1(g, A, E, S, !0)
                }
            }
            e: {
                if (v = d ? xl(d) : window, m = v.nodeName && v.nodeName.toLowerCase(), m === "select" || m === "input" && v.type === "file") var N = KD;
                else if (P1(v))
                    if (iE) N = ZD;
                    else {
                        N = YD;
                        var T = QD
                    }
                else(m = v.nodeName) && m.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (N = XD);
                if (N && (N = N(e, d))) {
                    rE(g, N, n, p);
                    break e
                }
                T && T(e, v, d),
                e === "focusout" && (T = v._wrapperState) && T.controlled && v.type === "number" && Ih(v, "number", v.value)
            }
            switch (T = d ? xl(d) : window, e) {
                case "focusin":
                    (P1(T) || T.contentEditable === "true") && (yl = T, Uh = d, Wu = null);
                    break;
                case "focusout":
                    Wu = Uh = yl = null;
                    break;
                case "mousedown":
                    jh = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    jh = !1, L1(g, n, p);
                    break;
                case "selectionchange":
                    if (tN) break;
                case "keydown":
                case "keyup":
                    L1(g, n, p)
            }
            var F;
            if (um) e: {
                switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                }
                z = void 0
            }
            else vl ? tE(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");z && (eE && n.locale !== "ko" && (vl || z !== "onCompositionStart" ? z === "onCompositionEnd" && vl && (F = JS()) : (Fi = p, im = "value" in Fi ? Fi.value : Fi.textContent, vl = !0)), T = mc(d, z), 0 < T.length && (z = new O1(z, e, null, n, p), g.push({
                event: z,
                listeners: T
            }), F ? z.data = F : (F = nE(n), F !== null && (z.data = F)))),
            (F = HD ? WD(e, n) : VD(e, n)) && (d = mc(d, "onBeforeInput"), 0 < d.length && (p = new O1("onBeforeInput", "beforeinput", null, n, p), g.push({
                event: p,
                listeners: d
            }), p.data = F))
        }
        hE(g, t)
    })
}

function fs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function mc(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && (i = l, l = is(e, n), l != null && r.unshift(fs(e, l, i)), l = is(e, t), l != null && r.push(fs(e, l, i))), e = e.return
    }
    return r
}

function al(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function $1(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            f = a.alternate,
            d = a.stateNode;
        if (f !== null && f === r) break;
        a.tag === 5 && d !== null && (a = d, i ? (f = is(n, l), f != null && s.unshift(fs(n, f, a))) : i || (f = is(n, l), f != null && s.push(fs(n, f, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var oN = /\r\n?/g,
    lN = /\u0000|\uFFFD/g;

function B1(e) {
    return (typeof e == "string" ? e : "" + e).replace(oN, `
`).replace(lN, "")
}

function Da(e, t, n) {
    if (t = B1(t), B1(e) !== t && n) throw Error(te(425))
}

function vc() {}
var Hh = null,
    Wh = null;

function Vh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var qh = typeof setTimeout == "function" ? setTimeout : void 0,
    uN = typeof clearTimeout == "function" ? clearTimeout : void 0,
    U1 = typeof Promise == "function" ? Promise : void 0,
    sN = typeof queueMicrotask == "function" ? queueMicrotask : typeof U1 < "u" ? function(e) {
        return U1.resolve(null).then(e).catch(aN)
    } : qh;

function aN(e) {
    setTimeout(function() {
        throw e
    })
}

function Np(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), us(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    us(t)
}

function ji(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function j1(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var eu = Math.random().toString(36).slice(2),
    zr = "__reactFiber$" + eu,
    ds = "__reactProps$" + eu,
    ci = "__reactContainer$" + eu,
    Gh = "__reactEvents$" + eu,
    cN = "__reactListeners$" + eu,
    fN = "__reactHandles$" + eu;

function _o(e) {
    var t = e[zr];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ci] || n[zr]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = j1(e); e !== null;) {
                    if (n = e[zr]) return n;
                    e = j1(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Os(e) {
    return e = e[zr] || e[ci], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function xl(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(te(33))
}

function rf(e) {
    return e[ds] || null
}
var Kh = [],
    Sl = -1;

function lo(e) {
    return {
        current: e
    }
}

function st(e) {
    0 > Sl || (e.current = Kh[Sl], Kh[Sl] = null, Sl--)
}

function rt(e, t) {
    Sl++, Kh[Sl] = e.current, e.current = t
}
var Ji = {},
    Jt = lo(Ji),
    xn = lo(!1),
    No = Ji;

function Ul(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ji;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Sn(e) {
    return e = e.childContextTypes, e != null
}

function yc() {
    st(xn), st(Jt)
}

function H1(e, t, n) {
    if (Jt.current !== Ji) throw Error(te(168));
    rt(Jt, t), rt(xn, n)
}

function mE(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(te(108, QA(e) || "Unknown", i));
    return yt({}, n, r)
}

function wc(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ji, No = Jt.current, rt(Jt, e), rt(xn, xn.current), !0
}

function W1(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(te(169));
    n ? (e = mE(e, t, No), r.__reactInternalMemoizedMergedChildContext = e, st(xn), st(Jt), rt(Jt, e)) : st(xn), rt(xn, n)
}
var oi = null,
    of = !1,
    Mp = !1;

function vE(e) {
    oi === null ? oi = [e] : oi.push(e)
}

function dN(e) {
    of = !0, vE(e)
}

function uo() {
    if (!Mp && oi !== null) {
        Mp = !0;
        var e = 0,
            t = Ye;
        try {
            var n = oi;
            for (Ye = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            oi = null, of = !1
        } catch (i) {
            throw oi !== null && (oi = oi.slice(e + 1)), jS(em, uo), i
        } finally {
            Ye = t, Mp = !1
        }
    }
    return null
}
var El = [],
    Cl = 0,
    xc = null,
    Sc = 0,
    ir = [],
    or = 0,
    Mo = null,
    li = 1,
    ui = "";

function xo(e, t) {
    El[Cl++] = Sc, El[Cl++] = xc, xc = e, Sc = t
}

function yE(e, t, n) {
    ir[or++] = li, ir[or++] = ui, ir[or++] = Mo, Mo = e;
    var r = li;
    e = ui;
    var i = 32 - Or(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - Or(t) + i;
    if (30 < l) {
        var s = i - i % 5;
        l = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, li = 1 << 32 - Or(t) + i | n << i | r, ui = l + e
    } else li = 1 << l | n << i | r, ui = e
}

function am(e) {
    e.return !== null && (xo(e, 1), yE(e, 1, 0))
}

function cm(e) {
    for (; e === xc;) xc = El[--Cl], El[Cl] = null, Sc = El[--Cl], El[Cl] = null;
    for (; e === Mo;) Mo = ir[--or], ir[or] = null, ui = ir[--or], ir[or] = null, li = ir[--or], ir[or] = null
}
var zn = null,
    Ln = null,
    pt = !1,
    br = null;

function wE(e, t) {
    var n = sr(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function V1(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, zn = e, Ln = ji(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, zn = e, Ln = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mo !== null ? {
                id: li,
                overflow: ui
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = sr(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, zn = e, Ln = null, !0) : !1;
        default:
            return !1
    }
}

function Qh(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Yh(e) {
    if (pt) {
        var t = Ln;
        if (t) {
            var n = t;
            if (!V1(e, t)) {
                if (Qh(e)) throw Error(te(418));
                t = ji(n.nextSibling);
                var r = zn;
                t && V1(e, t) ? wE(r, n) : (e.flags = e.flags & -4097 | 2, pt = !1, zn = e)
            }
        } else {
            if (Qh(e)) throw Error(te(418));
            e.flags = e.flags & -4097 | 2, pt = !1, zn = e
        }
    }
}

function q1(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    zn = e
}

function Na(e) {
    if (e !== zn) return !1;
    if (!pt) return q1(e), pt = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vh(e.type, e.memoizedProps)), t && (t = Ln)) {
        if (Qh(e)) throw xE(), Error(te(418));
        for (; t;) wE(e, t), t = ji(t.nextSibling)
    }
    if (q1(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(te(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ln = ji(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ln = null
        }
    } else Ln = zn ? ji(e.stateNode.nextSibling) : null;
    return !0
}

function xE() {
    for (var e = Ln; e;) e = ji(e.nextSibling)
}

function jl() {
    Ln = zn = null, pt = !1
}

function fm(e) {
    br === null ? br = [e] : br.push(e)
}
var pN = hi.ReactCurrentBatchConfig;

function Cr(e, t) {
    if (e && e.defaultProps) {
        t = yt({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Ec = lo(null),
    Cc = null,
    kl = null,
    dm = null;

function pm() {
    dm = kl = Cc = null
}

function hm(e) {
    var t = Ec.current;
    st(Ec), e._currentValue = t
}

function Xh(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Al(e, t) {
    Cc = e, dm = kl = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (yn = !0), e.firstContext = null)
}

function fr(e) {
    var t = e._currentValue;
    if (dm !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, kl === null) {
            if (Cc === null) throw Error(te(308));
            kl = e, Cc.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else kl = kl.next = e;
    return t
}
var Oo = null;

function gm(e) {
    Oo === null ? Oo = [e] : Oo.push(e)
}

function SE(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, gm(t)) : (n.next = i.next, i.next = n), t.interleaved = n, fi(e, r)
}

function fi(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Ai = !1;

function mm(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function EE(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function si(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Hi(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Be & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, fi(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, gm(r)) : (t.next = i.next, i.next = t), r.interleaved = t, fi(e, n)
}

function Xa(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, tm(e, n)
    }
}

function G1(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            l = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = s : l = l.next = s, n = n.next
            } while (n !== null);
            l === null ? i = l = t : l = l.next = t
        } else i = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function kc(e, t, n, r) {
    var i = e.updateQueue;
    Ai = !1;
    var l = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var f = a,
            d = f.next;
        f.next = null, s === null ? l = d : s.next = d, s = f;
        var p = e.alternate;
        p !== null && (p = p.updateQueue, a = p.lastBaseUpdate, a !== s && (a === null ? p.firstBaseUpdate = d : a.next = d, p.lastBaseUpdate = f))
    }
    if (l !== null) {
        var g = i.baseState;
        s = 0, p = d = f = null, a = l;
        do {
            var v = a.lane,
                m = a.eventTime;
            if ((r & v) === v) {
                p !== null && (p = p.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var E = e,
                        S = a;
                    switch (v = t, m = n, S.tag) {
                        case 1:
                            if (E = S.payload, typeof E == "function") {
                                g = E.call(m, g, v);
                                break e
                            }
                            g = E;
                            break e;
                        case 3:
                            E.flags = E.flags & -65537 | 128;
                        case 0:
                            if (E = S.payload, v = typeof E == "function" ? E.call(m, g, v) : E, v == null) break e;
                            g = yt({}, g, v);
                            break e;
                        case 2:
                            Ai = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, v = i.effects, v === null ? i.effects = [a] : v.push(a))
            } else m = {
                eventTime: m,
                lane: v,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, p === null ? (d = p = m, f = g) : p = p.next = m, s |= v;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                v = a, a = v.next, v.next = null, i.lastBaseUpdate = v, i.shared.pending = null
            }
        } while (1);
        if (p === null && (f = g), i.baseState = f, i.firstBaseUpdate = d, i.lastBaseUpdate = p, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else l === null && (i.shared.lanes = 0);
        Fo |= s, e.lanes = s, e.memoizedState = g
    }
}

function K1(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(te(191, i));
                i.call(r)
            }
        }
}
var CE = new SS.Component().refs;

function Zh(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : yt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var lf = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Vo(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = an(),
            i = Vi(e),
            l = si(r, i);
        l.payload = t, n != null && (l.callback = n), t = Hi(e, l, i), t !== null && (Tr(t, e, i, r), Xa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = an(),
            i = Vi(e),
            l = si(r, i);
        l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Hi(e, l, i), t !== null && (Tr(t, e, i, r), Xa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = an(),
            r = Vi(e),
            i = si(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Hi(e, i, r), t !== null && (Tr(t, e, r, n), Xa(t, e, r))
    }
};

function Q1(e, t, n, r, i, l, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !as(n, r) || !as(i, l) : !0
}

function kE(e, t, n) {
    var r = !1,
        i = Ji,
        l = t.contextType;
    return typeof l == "object" && l !== null ? l = fr(l) : (i = Sn(t) ? No : Jt.current, r = t.contextTypes, l = (r = r != null) ? Ul(e, i) : Ji), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lf, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Y1(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lf.enqueueReplaceState(t, t.state, null)
}

function Jh(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = CE, mm(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = fr(l) : (l = Sn(t) ? No : Jt.current, i.context = Ul(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Zh(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && lf.enqueueReplaceState(i, i.state, null), kc(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Tu(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(te(309));
                var r = n.stateNode
            }
            if (!r) throw Error(te(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(s) {
                var a = i.refs;
                a === CE && (a = i.refs = {}), s === null ? delete a[l] : a[l] = s
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(te(284));
        if (!n._owner) throw Error(te(290, e))
    }
    return e
}

function Ma(e, t) {
    throw e = Object.prototype.toString.call(t), Error(te(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function X1(e) {
    var t = e._init;
    return t(e._payload)
}

function bE(e) {
    function t(y, x) {
        if (e) {
            var k = y.deletions;
            k === null ? (y.deletions = [x], y.flags |= 16) : k.push(x)
        }
    }

    function n(y, x) {
        if (!e) return null;
        for (; x !== null;) t(y, x), x = x.sibling;
        return null
    }

    function r(y, x) {
        for (y = new Map; x !== null;) x.key !== null ? y.set(x.key, x) : y.set(x.index, x), x = x.sibling;
        return y
    }

    function i(y, x) {
        return y = qi(y, x), y.index = 0, y.sibling = null, y
    }

    function l(y, x, k) {
        return y.index = k, e ? (k = y.alternate, k !== null ? (k = k.index, k < x ? (y.flags |= 2, x) : k) : (y.flags |= 2, x)) : (y.flags |= 1048576, x)
    }

    function s(y) {
        return e && y.alternate === null && (y.flags |= 2), y
    }

    function a(y, x, k, P) {
        return x === null || x.tag !== 6 ? (x = jp(k, y.mode, P), x.return = y, x) : (x = i(x, k), x.return = y, x)
    }

    function f(y, x, k, P) {
        var N = k.type;
        return N === ml ? p(y, x, k.props.children, P, k.key) : x !== null && (x.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Pi && X1(N) === x.type) ? (P = i(x, k.props), P.ref = Tu(y, x, k), P.return = y, P) : (P = rc(k.type, k.key, k.props, null, y.mode, P), P.ref = Tu(y, x, k), P.return = y, P)
    }

    function d(y, x, k, P) {
        return x === null || x.tag !== 4 || x.stateNode.containerInfo !== k.containerInfo || x.stateNode.implementation !== k.implementation ? (x = Hp(k, y.mode, P), x.return = y, x) : (x = i(x, k.children || []), x.return = y, x)
    }

    function p(y, x, k, P, N) {
        return x === null || x.tag !== 7 ? (x = Po(k, y.mode, P, N), x.return = y, x) : (x = i(x, k), x.return = y, x)
    }

    function g(y, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number") return x = jp("" + x, y.mode, k), x.return = y, x;
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case ka:
                    return k = rc(x.type, x.key, x.props, null, y.mode, k), k.ref = Tu(y, null, x), k.return = y, k;
                case gl:
                    return x = Hp(x, y.mode, k), x.return = y, x;
                case Pi:
                    var P = x._init;
                    return g(y, P(x._payload), k)
            }
            if (Nu(x) || Cu(x)) return x = Po(x, y.mode, k, null), x.return = y, x;
            Ma(y, x)
        }
        return null
    }

    function v(y, x, k, P) {
        var N = x !== null ? x.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number") return N !== null ? null : a(y, x, "" + k, P);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case ka:
                    return k.key === N ? f(y, x, k, P) : null;
                case gl:
                    return k.key === N ? d(y, x, k, P) : null;
                case Pi:
                    return N = k._init, v(y, x, N(k._payload), P)
            }
            if (Nu(k) || Cu(k)) return N !== null ? null : p(y, x, k, P, null);
            Ma(y, k)
        }
        return null
    }

    function m(y, x, k, P, N) {
        if (typeof P == "string" && P !== "" || typeof P == "number") return y = y.get(k) || null, a(x, y, "" + P, N);
        if (typeof P == "object" && P !== null) {
            switch (P.$$typeof) {
                case ka:
                    return y = y.get(P.key === null ? k : P.key) || null, f(x, y, P, N);
                case gl:
                    return y = y.get(P.key === null ? k : P.key) || null, d(x, y, P, N);
                case Pi:
                    var T = P._init;
                    return m(y, x, k, T(P._payload), N)
            }
            if (Nu(P) || Cu(P)) return y = y.get(k) || null, p(x, y, P, N, null);
            Ma(x, P)
        }
        return null
    }

    function E(y, x, k, P) {
        for (var N = null, T = null, F = x, z = x = 0, q = null; F !== null && z < k.length; z++) {
            F.index > z ? (q = F, F = null) : q = F.sibling;
            var Q = v(y, F, k[z], P);
            if (Q === null) {
                F === null && (F = q);
                break
            }
            e && F && Q.alternate === null && t(y, F), x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q, F = q
        }
        if (z === k.length) return n(y, F), pt && xo(y, z), N;
        if (F === null) {
            for (; z < k.length; z++) F = g(y, k[z], P), F !== null && (x = l(F, x, z), T === null ? N = F : T.sibling = F, T = F);
            return pt && xo(y, z), N
        }
        for (F = r(y, F); z < k.length; z++) q = m(F, y, z, k[z], P), q !== null && (e && q.alternate !== null && F.delete(q.key === null ? z : q.key), x = l(q, x, z), T === null ? N = q : T.sibling = q, T = q);
        return e && F.forEach(function(B) {
            return t(y, B)
        }), pt && xo(y, z), N
    }

    function S(y, x, k, P) {
        var N = Cu(k);
        if (typeof N != "function") throw Error(te(150));
        if (k = N.call(k), k == null) throw Error(te(151));
        for (var T = N = null, F = x, z = x = 0, q = null, Q = k.next(); F !== null && !Q.done; z++, Q = k.next()) {
            F.index > z ? (q = F, F = null) : q = F.sibling;
            var B = v(y, F, Q.value, P);
            if (B === null) {
                F === null && (F = q);
                break
            }
            e && F && B.alternate === null && t(y, F), x = l(B, x, z), T === null ? N = B : T.sibling = B, T = B, F = q
        }
        if (Q.done) return n(y, F), pt && xo(y, z), N;
        if (F === null) {
            for (; !Q.done; z++, Q = k.next()) Q = g(y, Q.value, P), Q !== null && (x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q);
            return pt && xo(y, z), N
        }
        for (F = r(y, F); !Q.done; z++, Q = k.next()) Q = m(F, y, z, Q.value, P), Q !== null && (e && Q.alternate !== null && F.delete(Q.key === null ? z : Q.key), x = l(Q, x, z), T === null ? N = Q : T.sibling = Q, T = Q);
        return e && F.forEach(function(K) {
            return t(y, K)
        }), pt && xo(y, z), N
    }

    function A(y, x, k, P) {
        if (typeof k == "object" && k !== null && k.type === ml && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case ka:
                    e: {
                        for (var N = k.key, T = x; T !== null;) {
                            if (T.key === N) {
                                if (N = k.type, N === ml) {
                                    if (T.tag === 7) {
                                        n(y, T.sibling), x = i(T, k.props.children), x.return = y, y = x;
                                        break e
                                    }
                                } else if (T.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Pi && X1(N) === T.type) {
                                    n(y, T.sibling), x = i(T, k.props), x.ref = Tu(y, T, k), x.return = y, y = x;
                                    break e
                                }
                                n(y, T);
                                break
                            } else t(y, T);
                            T = T.sibling
                        }
                        k.type === ml ? (x = Po(k.props.children, y.mode, P, k.key), x.return = y, y = x) : (P = rc(k.type, k.key, k.props, null, y.mode, P), P.ref = Tu(y, x, k), P.return = y, y = P)
                    }
                    return s(y);
                case gl:
                    e: {
                        for (T = k.key; x !== null;) {
                            if (x.key === T)
                                if (x.tag === 4 && x.stateNode.containerInfo === k.containerInfo && x.stateNode.implementation === k.implementation) {
                                    n(y, x.sibling), x = i(x, k.children || []), x.return = y, y = x;
                                    break e
                                } else {
                                    n(y, x);
                                    break
                                }
                            else t(y, x);
                            x = x.sibling
                        }
                        x = Hp(k, y.mode, P),
                        x.return = y,
                        y = x
                    }
                    return s(y);
                case Pi:
                    return T = k._init, A(y, x, T(k._payload), P)
            }
            if (Nu(k)) return E(y, x, k, P);
            if (Cu(k)) return S(y, x, k, P);
            Ma(y, k)
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? (k = "" + k, x !== null && x.tag === 6 ? (n(y, x.sibling), x = i(x, k), x.return = y, y = x) : (n(y, x), x = jp(k, y.mode, P), x.return = y, y = x), s(y)) : n(y, x)
    }
    return A
}
var Hl = bE(!0),
    _E = bE(!1),
    Ts = {},
    jr = lo(Ts),
    ps = lo(Ts),
    hs = lo(Ts);

function To(e) {
    if (e === Ts) throw Error(te(174));
    return e
}

function vm(e, t) {
    switch (rt(hs, t), rt(ps, e), rt(jr, Ts), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ph(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ph(t, e)
    }
    st(jr), rt(jr, t)
}

function Wl() {
    st(jr), st(ps), st(hs)
}

function OE(e) {
    To(hs.current);
    var t = To(jr.current),
        n = Ph(t, e.type);
    t !== n && (rt(ps, e), rt(jr, n))
}

function ym(e) {
    ps.current === e && (st(jr), st(ps))
}
var gt = lo(0);

function bc(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Lp = [];

function wm() {
    for (var e = 0; e < Lp.length; e++) Lp[e]._workInProgressVersionPrimary = null;
    Lp.length = 0
}
var Za = hi.ReactCurrentDispatcher,
    Fp = hi.ReactCurrentBatchConfig,
    Lo = 0,
    vt = null,
    It = null,
    Dt = null,
    _c = !1,
    Vu = !1,
    gs = 0,
    hN = 0;

function qt() {
    throw Error(te(321))
}

function xm(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ir(e[n], t[n])) return !1;
    return !0
}

function Sm(e, t, n, r, i, l) {
    if (Lo = l, vt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Za.current = e === null || e.memoizedState === null ? yN : wN, e = n(r, i), Vu) {
        l = 0;
        do {
            if (Vu = !1, gs = 0, 25 <= l) throw Error(te(301));
            l += 1, Dt = It = null, t.updateQueue = null, Za.current = xN, e = n(r, i)
        } while (Vu)
    }
    if (Za.current = Oc, t = It !== null && It.next !== null, Lo = 0, Dt = It = vt = null, _c = !1, t) throw Error(te(300));
    return e
}

function Em() {
    var e = gs !== 0;
    return gs = 0, e
}

function Lr() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Dt === null ? vt.memoizedState = Dt = e : Dt = Dt.next = e, Dt
}

function dr() {
    if (It === null) {
        var e = vt.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = It.next;
    var t = Dt === null ? vt.memoizedState : Dt.next;
    if (t !== null) Dt = t, It = e;
    else {
        if (e === null) throw Error(te(310));
        It = e, e = {
            memoizedState: It.memoizedState,
            baseState: It.baseState,
            baseQueue: It.baseQueue,
            queue: It.queue,
            next: null
        }, Dt === null ? vt.memoizedState = Dt = e : Dt = Dt.next = e
    }
    return Dt
}

function ms(e, t) {
    return typeof t == "function" ? t(e) : t
}

function zp(e) {
    var t = dr(),
        n = t.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = e;
    var r = It,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = l.next, l.next = s
        }
        r.baseQueue = i = l, n.pending = null
    }
    if (i !== null) {
        l = i.next, r = r.baseState;
        var a = s = null,
            f = null,
            d = l;
        do {
            var p = d.lane;
            if ((Lo & p) === p) f !== null && (f = f.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var g = {
                    lane: p,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                f === null ? (a = f = g, s = r) : f = f.next = g, vt.lanes |= p, Fo |= p
            }
            d = d.next
        } while (d !== null && d !== l);
        f === null ? s = r : f.next = a, Ir(r, t.memoizedState) || (yn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = f, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do l = i.lane, vt.lanes |= l, Fo |= l, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function $p(e) {
    var t = dr(),
        n = t.queue;
    if (n === null) throw Error(te(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do l = e(l, s.action), s = s.next; while (s !== i);
        Ir(l, t.memoizedState) || (yn = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function TE() {}

function IE(e, t) {
    var n = vt,
        r = dr(),
        i = t(),
        l = !Ir(r.memoizedState, i);
    if (l && (r.memoizedState = i, yn = !0), r = r.queue, Cm(AE.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || Dt !== null && Dt.memoizedState.tag & 1) {
        if (n.flags |= 2048, vs(9, PE.bind(null, n, r, i, t), void 0, null), Nt === null) throw Error(te(349));
        Lo & 30 || RE(n, t, i)
    }
    return i
}

function RE(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = vt.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, vt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function PE(e, t, n, r) {
    t.value = n, t.getSnapshot = r, DE(t) && NE(e)
}

function AE(e, t, n) {
    return n(function() {
        DE(t) && NE(e)
    })
}

function DE(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ir(e, n)
    } catch {
        return !0
    }
}

function NE(e) {
    var t = fi(e, 1);
    t !== null && Tr(t, e, 1, -1)
}

function Z1(e) {
    var t = Lr();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ms,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = vN.bind(null, vt, e), [t.memoizedState, e]
}

function vs(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = vt.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, vt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ME() {
    return dr().memoizedState
}

function Ja(e, t, n, r) {
    var i = Lr();
    vt.flags |= e, i.memoizedState = vs(1 | t, n, void 0, r === void 0 ? null : r)
}

function uf(e, t, n, r) {
    var i = dr();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (It !== null) {
        var s = It.memoizedState;
        if (l = s.destroy, r !== null && xm(r, s.deps)) {
            i.memoizedState = vs(t, n, l, r);
            return
        }
    }
    vt.flags |= e, i.memoizedState = vs(1 | t, n, l, r)
}

function J1(e, t) {
    return Ja(8390656, 8, e, t)
}

function Cm(e, t) {
    return uf(2048, 8, e, t)
}

function LE(e, t) {
    return uf(4, 2, e, t)
}

function FE(e, t) {
    return uf(4, 4, e, t)
}

function zE(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function $E(e, t, n) {
    return n = n != null ? n.concat([e]) : null, uf(4, 4, zE.bind(null, t, e), n)
}

function km() {}

function BE(e, t) {
    var n = dr();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xm(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function UE(e, t) {
    var n = dr();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xm(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function jE(e, t, n) {
    return Lo & 21 ? (Ir(n, t) || (n = VS(), vt.lanes |= n, Fo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, yn = !0), e.memoizedState = n)
}

function gN(e, t) {
    var n = Ye;
    Ye = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Fp.transition;
    Fp.transition = {};
    try {
        e(!1), t()
    } finally {
        Ye = n, Fp.transition = r
    }
}

function HE() {
    return dr().memoizedState
}

function mN(e, t, n) {
    var r = Vi(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, WE(e)) VE(t, n);
    else if (n = SE(e, t, n, r), n !== null) {
        var i = an();
        Tr(n, e, r, i), qE(n, t, r)
    }
}

function vN(e, t, n) {
    var r = Vi(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (WE(e)) VE(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var s = t.lastRenderedState,
                a = l(s, n);
            if (i.hasEagerState = !0, i.eagerState = a, Ir(a, s)) {
                var f = t.interleaved;
                f === null ? (i.next = i, gm(t)) : (i.next = f.next, f.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = SE(e, t, i, r), n !== null && (i = an(), Tr(n, e, r, i), qE(n, t, r))
    }
}

function WE(e) {
    var t = e.alternate;
    return e === vt || t !== null && t === vt
}

function VE(e, t) {
    Vu = _c = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function qE(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, tm(e, n)
    }
}
var Oc = {
        readContext: fr,
        useCallback: qt,
        useContext: qt,
        useEffect: qt,
        useImperativeHandle: qt,
        useInsertionEffect: qt,
        useLayoutEffect: qt,
        useMemo: qt,
        useReducer: qt,
        useRef: qt,
        useState: qt,
        useDebugValue: qt,
        useDeferredValue: qt,
        useTransition: qt,
        useMutableSource: qt,
        useSyncExternalStore: qt,
        useId: qt,
        unstable_isNewReconciler: !1
    },
    yN = {
        readContext: fr,
        useCallback: function(e, t) {
            return Lr().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: fr,
        useEffect: J1,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ja(4194308, 4, zE.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ja(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ja(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Lr();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Lr();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = mN.bind(null, vt, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Lr();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Z1,
        useDebugValue: km,
        useDeferredValue: function(e) {
            return Lr().memoizedState = e
        },
        useTransition: function() {
            var e = Z1(!1),
                t = e[0];
            return e = gN.bind(null, e[1]), Lr().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = vt,
                i = Lr();
            if (pt) {
                if (n === void 0) throw Error(te(407));
                n = n()
            } else {
                if (n = t(), Nt === null) throw Error(te(349));
                Lo & 30 || RE(r, t, n)
            }
            i.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return i.queue = l, J1(AE.bind(null, r, l, e), [e]), r.flags |= 2048, vs(9, PE.bind(null, r, l, n, t), void 0, null), n
        },
        useId: function() {
            var e = Lr(),
                t = Nt.identifierPrefix;
            if (pt) {
                var n = ui,
                    r = li;
                n = (r & ~(1 << 32 - Or(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gs++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = hN++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    wN = {
        readContext: fr,
        useCallback: BE,
        useContext: fr,
        useEffect: Cm,
        useImperativeHandle: $E,
        useInsertionEffect: LE,
        useLayoutEffect: FE,
        useMemo: UE,
        useReducer: zp,
        useRef: ME,
        useState: function() {
            return zp(ms)
        },
        useDebugValue: km,
        useDeferredValue: function(e) {
            var t = dr();
            return jE(t, It.memoizedState, e)
        },
        useTransition: function() {
            var e = zp(ms)[0],
                t = dr().memoizedState;
            return [e, t]
        },
        useMutableSource: TE,
        useSyncExternalStore: IE,
        useId: HE,
        unstable_isNewReconciler: !1
    },
    xN = {
        readContext: fr,
        useCallback: BE,
        useContext: fr,
        useEffect: Cm,
        useImperativeHandle: $E,
        useInsertionEffect: LE,
        useLayoutEffect: FE,
        useMemo: UE,
        useReducer: $p,
        useRef: ME,
        useState: function() {
            return $p(ms)
        },
        useDebugValue: km,
        useDeferredValue: function(e) {
            var t = dr();
            return It === null ? t.memoizedState = e : jE(t, It.memoizedState, e)
        },
        useTransition: function() {
            var e = $p(ms)[0],
                t = dr().memoizedState;
            return [e, t]
        },
        useMutableSource: TE,
        useSyncExternalStore: IE,
        useId: HE,
        unstable_isNewReconciler: !1
    };

function Vl(e, t) {
    try {
        var n = "",
            r = t;
        do n += KA(r), r = r.return; while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Bp(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function eg(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var SN = typeof WeakMap == "function" ? WeakMap : Map;

function GE(e, t, n) {
    n = si(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ic || (Ic = !0, cg = r), eg(e, t)
    }, n
}

function KE(e, t, n) {
    n = si(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            eg(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        eg(e, t), typeof r != "function" && (Wi === null ? Wi = new Set([this]) : Wi.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function ew(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new SN;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = MN.bind(null, e, t, n), t.then(e, e))
}

function tw(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function nw(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = si(-1, 1), t.tag = 2, Hi(n, t, 1))), n.lanes |= 1), e)
}
var EN = hi.ReactCurrentOwner,
    yn = !1;

function ln(e, t, n, r) {
    t.child = e === null ? _E(t, null, n, r) : Hl(t, e.child, n, r)
}

function rw(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return Al(t, i), r = Sm(e, t, n, r, l, i), n = Em(), e !== null && !yn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, di(e, t, i)) : (pt && n && am(t), t.flags |= 1, ln(e, t, r, i), t.child)
}

function iw(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Am(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, QE(e, t, l, r, i)) : (e = rc(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, !(e.lanes & i)) {
        var s = l.memoizedProps;
        if (n = n.compare, n = n !== null ? n : as, n(s, r) && e.ref === t.ref) return di(e, t, i)
    }
    return t.flags |= 1, e = qi(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function QE(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (as(l, r) && e.ref === t.ref)
            if (yn = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (yn = !0);
            else return t.lanes = e.lanes, di(e, t, i)
    }
    return tg(e, t, n, r, i)
}

function YE(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, rt(_l, Nn), Nn |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, rt(_l, Nn), Nn |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, rt(_l, Nn), Nn |= r
        }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, rt(_l, Nn), Nn |= r;
    return ln(e, t, i, n), t.child
}

function XE(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function tg(e, t, n, r, i) {
    var l = Sn(n) ? No : Jt.current;
    return l = Ul(t, l), Al(t, i), n = Sm(e, t, n, r, l, i), r = Em(), e !== null && !yn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, di(e, t, i)) : (pt && r && am(t), t.flags |= 1, ln(e, t, n, i), t.child)
}

function ow(e, t, n, r, i) {
    if (Sn(n)) {
        var l = !0;
        wc(t)
    } else l = !1;
    if (Al(t, i), t.stateNode === null) ec(e, t), kE(t, n, r), Jh(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var f = s.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = fr(d) : (d = Sn(n) ? No : Jt.current, d = Ul(t, d));
        var p = n.getDerivedStateFromProps,
            g = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        g || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || f !== d) && Y1(t, s, r, d), Ai = !1;
        var v = t.memoizedState;
        s.state = v, kc(t, r, s, i), f = t.memoizedState, a !== r || v !== f || xn.current || Ai ? (typeof p == "function" && (Zh(t, n, p, r), f = t.memoizedState), (a = Ai || Q1(t, n, a, r, v, f, d)) ? (g || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = f), s.props = r, s.state = f, s.context = d, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, EE(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : Cr(t.type, a), s.props = d, g = t.pendingProps, v = s.context, f = n.contextType, typeof f == "object" && f !== null ? f = fr(f) : (f = Sn(n) ? No : Jt.current, f = Ul(t, f));
        var m = n.getDerivedStateFromProps;
        (p = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== g || v !== f) && Y1(t, s, r, f), Ai = !1, v = t.memoizedState, s.state = v, kc(t, r, s, i);
        var E = t.memoizedState;
        a !== g || v !== E || xn.current || Ai ? (typeof m == "function" && (Zh(t, n, m, r), E = t.memoizedState), (d = Ai || Q1(t, n, d, r, v, E, f) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, E, f), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, E, f)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = E), s.props = r, s.state = E, s.context = f, r = d) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ng(e, t, n, r, l, i)
}

function ng(e, t, n, r, i, l) {
    XE(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && W1(t, n, !1), di(e, t, l);
    r = t.stateNode, EN.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Hl(t, e.child, null, l), t.child = Hl(t, null, a, l)) : ln(e, t, a, l), t.memoizedState = r.state, i && W1(t, n, !0), t.child
}

function ZE(e) {
    var t = e.stateNode;
    t.pendingContext ? H1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && H1(e, t.context, !1), vm(e, t.containerInfo)
}

function lw(e, t, n, r, i) {
    return jl(), fm(i), t.flags |= 256, ln(e, t, n, r), t.child
}
var rg = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ig(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function JE(e, t, n) {
    var r = t.pendingProps,
        i = gt.current,
        l = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), rt(gt, i & 1), e === null) return Yh(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = s) : l = cf(s, r, 0, null), e = Po(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ig(n), t.memoizedState = rg, e) : bm(t, s));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return CN(e, t, s, r, a, i, n);
    if (l) {
        l = r.fallback, s = t.mode, i = e.child, a = i.sibling;
        var f = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = f, t.deletions = null) : (r = qi(i, f), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? l = qi(a, l) : (l = Po(l, s, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, s = e.child.memoizedState, s = s === null ? ig(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, l.memoizedState = s, l.childLanes = e.childLanes & ~n, t.memoizedState = rg, r
    }
    return l = e.child, e = l.sibling, r = qi(l, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function bm(e, t) {
    return t = cf({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function La(e, t, n, r) {
    return r !== null && fm(r), Hl(t, e.child, null, n), e = bm(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function CN(e, t, n, r, i, l, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Bp(Error(te(422))), La(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = cf({
        mode: "visible",
        children: r.children
    }, i, 0, null), l = Po(l, i, s, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Hl(t, e.child, null, s), t.child.memoizedState = ig(s), t.memoizedState = rg, l);
    if (!(t.mode & 1)) return La(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, l = Error(te(419)), r = Bp(l, r, void 0), La(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, yn || a) {
        if (r = Nt, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, fi(e, i), Tr(r, e, i, -1))
        }
        return Pm(), r = Bp(Error(te(421))), La(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = LN.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Ln = ji(i.nextSibling), zn = t, pt = !0, br = null, e !== null && (ir[or++] = li, ir[or++] = ui, ir[or++] = Mo, li = e.id, ui = e.overflow, Mo = t), t = bm(t, r.children), t.flags |= 4096, t)
}

function uw(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Xh(e.return, t, n)
}

function Up(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function eC(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if (ln(e, t, r.children, n), r = gt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && uw(e, n, t);
            else if (e.tag === 19) uw(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (rt(gt, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && bc(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Up(t, !1, i, n, l);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && bc(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Up(t, !0, n, null, l);
            break;
        case "together":
            Up(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function ec(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function di(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fo |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(te(153));
    if (t.child !== null) {
        for (e = t.child, n = qi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = qi(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function kN(e, t, n) {
    switch (t.tag) {
        case 3:
            ZE(t), jl();
            break;
        case 5:
            OE(t);
            break;
        case 1:
            Sn(t.type) && wc(t);
            break;
        case 4:
            vm(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            rt(Ec, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (rt(gt, gt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? JE(e, t, n) : (rt(gt, gt.current & 1), e = di(e, t, n), e !== null ? e.sibling : null);
            rt(gt, gt.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return eC(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), rt(gt, gt.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, YE(e, t, n)
    }
    return di(e, t, n)
}
var tC, og, nC, rC;
tC = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
og = function() {};
nC = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, To(jr.current);
        var l = null;
        switch (n) {
            case "input":
                i = Oh(e, i), r = Oh(e, r), l = [];
                break;
            case "select":
                i = yt({}, i, {
                    value: void 0
                }), r = yt({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                i = Rh(e, i), r = Rh(e, r), l = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vc)
        }
        Ah(n, r);
        var s;
        n = null;
        for (d in i)
            if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
                if (d === "style") {
                    var a = i[d];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ns.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
        for (d in r) {
            var f = r[d];
            if (a = i?.[d], r.hasOwnProperty(d) && f !== a && (f != null || a != null))
                if (d === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || f && f.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in f) f.hasOwnProperty(s) && a[s] !== f[s] && (n || (n = {}), n[s] = f[s])
                    } else n || (l || (l = []), l.push(d, n)), n = f;
            else d === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, a = a ? a.__html : void 0, f != null && a !== f && (l = l || []).push(d, f)) : d === "children" ? typeof f != "string" && typeof f != "number" || (l = l || []).push(d, "" + f) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (ns.hasOwnProperty(d) ? (f != null && d === "onScroll" && ut("scroll", e), l || a === f || (l = [])) : (l = l || []).push(d, f))
        }
        n && (l = l || []).push("style", n);
        var d = l;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
rC = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Iu(e, t) {
    if (!pt) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Gt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function bN(e, t, n) {
    var r = t.pendingProps;
    switch (cm(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Gt(t), null;
        case 1:
            return Sn(t.type) && yc(), Gt(t), null;
        case 3:
            return r = t.stateNode, Wl(), st(xn), st(Jt), wm(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Na(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, br !== null && (pg(br), br = null))), og(e, t), Gt(t), null;
        case 5:
            ym(t);
            var i = To(hs.current);
            if (n = t.type, e !== null && t.stateNode != null) nC(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(te(166));
                    return Gt(t), null
                }
                if (e = To(jr.current), Na(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[zr] = t, r[ds] = l, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ut("cancel", r), ut("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ut("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Lu.length; i++) ut(Lu[i], r);
                            break;
                        case "source":
                            ut("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ut("error", r), ut("load", r);
                            break;
                        case "details":
                            ut("toggle", r);
                            break;
                        case "input":
                            m1(r, l), ut("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, ut("invalid", r);
                            break;
                        case "textarea":
                            y1(r, l), ut("invalid", r)
                    }
                    Ah(n, l), i = null;
                    for (var s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && Da(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Da(r.textContent, a, e), i = ["children", "" + a]) : ns.hasOwnProperty(s) && a != null && s === "onScroll" && ut("scroll", r)
                        } switch (n) {
                        case "input":
                            ba(r), v1(r, l, !0);
                            break;
                        case "textarea":
                            ba(r), w1(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = vc)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = RS(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[zr] = t, e[ds] = r, tC(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Dh(n, r), n) {
                            case "dialog":
                                ut("cancel", e), ut("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ut("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Lu.length; i++) ut(Lu[i], e);
                                i = r;
                                break;
                            case "source":
                                ut("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ut("error", e), ut("load", e), i = r;
                                break;
                            case "details":
                                ut("toggle", e), i = r;
                                break;
                            case "input":
                                m1(e, r), i = Oh(e, r), ut("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = yt({}, r, {
                                    value: void 0
                                }), ut("invalid", e);
                                break;
                            case "textarea":
                                y1(e, r), i = Rh(e, r), ut("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Ah(n, i),
                        a = i;
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var f = a[l];
                                l === "style" ? DS(e, f) : l === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0, f != null && PS(e, f)) : l === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && rs(e, f) : typeof f == "number" && rs(e, "" + f) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ns.hasOwnProperty(l) ? f != null && l === "onScroll" && ut("scroll", e) : f != null && Qg(e, l, f, s))
                            } switch (n) {
                            case "input":
                                ba(e), v1(e, r, !1);
                                break;
                            case "textarea":
                                ba(e), w1(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Zi(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, l = r.value, l != null ? Tl(e, !!r.multiple, l, !1) : r.defaultValue != null && Tl(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = vc)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Gt(t), null;
        case 6:
            if (e && t.stateNode != null) rC(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(te(166));
                if (n = To(hs.current), To(jr.current), Na(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[zr] = t, (l = r.nodeValue !== n) && (e = zn, e !== null)) switch (e.tag) {
                        case 3:
                            Da(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Da(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    l && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[zr] = t, t.stateNode = r
            }
            return Gt(t), null;
        case 13:
            if (st(gt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (pt && Ln !== null && t.mode & 1 && !(t.flags & 128)) xE(), jl(), t.flags |= 98560, l = !1;
                else if (l = Na(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l) throw Error(te(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(te(317));
                        l[zr] = t
                    } else jl(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Gt(t), l = !1
                } else br !== null && (pg(br), br = null), l = !0;
                if (!l) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || gt.current & 1 ? Rt === 0 && (Rt = 3) : Pm())), t.updateQueue !== null && (t.flags |= 4), Gt(t), null);
        case 4:
            return Wl(), og(e, t), e === null && cs(t.stateNode.containerInfo), Gt(t), null;
        case 10:
            return hm(t.type._context), Gt(t), null;
        case 17:
            return Sn(t.type) && yc(), Gt(t), null;
        case 19:
            if (st(gt), l = t.memoizedState, l === null) return Gt(t), null;
            if (r = (t.flags & 128) !== 0, s = l.rendering, s === null)
                if (r) Iu(l, !1);
                else {
                    if (Rt !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = bc(e), s !== null) {
                                for (t.flags |= 128, Iu(l, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, s = l.alternate, s === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = s.childLanes, l.lanes = s.lanes, l.child = s.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = s.memoizedProps, l.memoizedState = s.memoizedState, l.updateQueue = s.updateQueue, l.type = s.type, e = s.dependencies, l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return rt(gt, gt.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && kt() > ql && (t.flags |= 128, r = !0, Iu(l, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = bc(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Iu(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !pt) return Gt(t), null
                    } else 2 * kt() - l.renderingStartTime > ql && n !== 1073741824 && (t.flags |= 128, r = !0, Iu(l, !1), t.lanes = 4194304);
                l.isBackwards ? (s.sibling = t.child, t.child = s) : (n = l.last, n !== null ? n.sibling = s : t.child = s, l.last = s)
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = kt(), t.sibling = null, n = gt.current, rt(gt, r ? n & 1 | 2 : n & 1), t) : (Gt(t), null);
        case 22:
        case 23:
            return Rm(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Nn & 1073741824 && (Gt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Gt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(te(156, t.tag))
}

function _N(e, t) {
    switch (cm(t), t.tag) {
        case 1:
            return Sn(t.type) && yc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Wl(), st(xn), st(Jt), wm(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ym(t), null;
        case 13:
            if (st(gt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(te(340));
                jl()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return st(gt), null;
        case 4:
            return Wl(), null;
        case 10:
            return hm(t.type._context), null;
        case 22:
        case 23:
            return Rm(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Fa = !1,
    Yt = !1,
    ON = typeof WeakSet == "function" ? WeakSet : Set,
    ce = null;

function bl(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            St(e, t, r)
        } else n.current = null
}

function lg(e, t, n) {
    try {
        n()
    } catch (r) {
        St(e, t, r)
    }
}
var sw = !1;

function TN(e, t) {
    if (Hh = hc, e = uE(), sm(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    f = -1,
                    d = 0,
                    p = 0,
                    g = e,
                    v = null;
                t: for (;;) {
                    for (var m; g !== n || i !== 0 && g.nodeType !== 3 || (a = s + i), g !== l || r !== 0 && g.nodeType !== 3 || (f = s + r), g.nodeType === 3 && (s += g.nodeValue.length), (m = g.firstChild) !== null;) v = g, g = m;
                    for (;;) {
                        if (g === e) break t;
                        if (v === n && ++d === i && (a = s), v === l && ++p === r && (f = s), (m = g.nextSibling) !== null) break;
                        g = v, v = g.parentNode
                    }
                    g = m
                }
                n = a === -1 || f === -1 ? null : {
                    start: a,
                    end: f
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Wh = {
            focusedElem: e,
            selectionRange: n
        }, hc = !1, ce = t; ce !== null;)
        if (t = ce, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ce = e;
        else
            for (; ce !== null;) {
                t = ce;
                try {
                    var E = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (E !== null) {
                                var S = E.memoizedProps,
                                    A = E.memoizedState,
                                    y = t.stateNode,
                                    x = y.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Cr(t.type, S), A);
                                y.__reactInternalSnapshotBeforeUpdate = x
                            }
                            break;
                        case 3:
                            var k = t.stateNode.containerInfo;
                            k.nodeType === 1 ? k.textContent = "" : k.nodeType === 9 && k.documentElement && k.removeChild(k.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(te(163))
                    }
                } catch (P) {
                    St(t, t.return, P)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, ce = e;
                    break
                }
                ce = t.return
            }
    return E = sw, sw = !1, E
}

function qu(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                i.destroy = void 0, l !== void 0 && lg(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}

function sf(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ug(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function iC(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, iC(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[zr], delete t[ds], delete t[Gh], delete t[cN], delete t[fN])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function oC(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function aw(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || oC(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function sg(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vc));
    else if (r !== 4 && (e = e.child, e !== null))
        for (sg(e, t, n), e = e.sibling; e !== null;) sg(e, t, n), e = e.sibling
}

function ag(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ag(e, t, n), e = e.sibling; e !== null;) ag(e, t, n), e = e.sibling
}
var $t = null,
    kr = !1;

function Ti(e, t, n) {
    for (n = n.child; n !== null;) lC(e, t, n), n = n.sibling
}

function lC(e, t, n) {
    if (Ur && typeof Ur.onCommitFiberUnmount == "function") try {
        Ur.onCommitFiberUnmount(Jc, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Yt || bl(n, t);
        case 6:
            var r = $t,
                i = kr;
            $t = null, Ti(e, t, n), $t = r, kr = i, $t !== null && (kr ? (e = $t, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : $t.removeChild(n.stateNode));
            break;
        case 18:
            $t !== null && (kr ? (e = $t, n = n.stateNode, e.nodeType === 8 ? Np(e.parentNode, n) : e.nodeType === 1 && Np(e, n), us(e)) : Np($t, n.stateNode));
            break;
        case 4:
            r = $t, i = kr, $t = n.stateNode.containerInfo, kr = !0, Ti(e, t, n), $t = r, kr = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        s = l.destroy;
                    l = l.tag, s !== void 0 && (l & 2 || l & 4) && lg(n, t, s), i = i.next
                } while (i !== r)
            }
            Ti(e, t, n);
            break;
        case 1:
            if (!Yt && (bl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                St(n, t, a)
            }
            Ti(e, t, n);
            break;
        case 21:
            Ti(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Yt = (r = Yt) || n.memoizedState !== null, Ti(e, t, n), Yt = r) : Ti(e, t, n);
            break;
        default:
            Ti(e, t, n)
    }
}

function cw(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ON), t.forEach(function(r) {
            var i = FN.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Er(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            $t = a.stateNode, kr = !1;
                            break e;
                        case 3:
                            $t = a.stateNode.containerInfo, kr = !0;
                            break e;
                        case 4:
                            $t = a.stateNode.containerInfo, kr = !0;
                            break e
                    }
                    a = a.return
                }
                if ($t === null) throw Error(te(160));
                lC(l, s, i), $t = null, kr = !1;
                var f = i.alternate;
                f !== null && (f.return = null), i.return = null
            } catch (d) {
                St(i, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) uC(t, e), t = t.sibling
}

function uC(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Er(t, e), Mr(e), r & 4) {
                try {
                    qu(3, e, e.return), sf(3, e)
                } catch (S) {
                    St(e, e.return, S)
                }
                try {
                    qu(5, e, e.return)
                } catch (S) {
                    St(e, e.return, S)
                }
            }
            break;
        case 1:
            Er(t, e), Mr(e), r & 512 && n !== null && bl(n, n.return);
            break;
        case 5:
            if (Er(t, e), Mr(e), r & 512 && n !== null && bl(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    rs(i, "")
                } catch (S) {
                    St(e, e.return, S)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var l = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : l,
                    a = e.type,
                    f = e.updateQueue;
                if (e.updateQueue = null, f !== null) try {
                    a === "input" && l.type === "radio" && l.name != null && TS(i, l), Dh(a, s);
                    var d = Dh(a, l);
                    for (s = 0; s < f.length; s += 2) {
                        var p = f[s],
                            g = f[s + 1];
                        p === "style" ? DS(i, g) : p === "dangerouslySetInnerHTML" ? PS(i, g) : p === "children" ? rs(i, g) : Qg(i, p, g, d)
                    }
                    switch (a) {
                        case "input":
                            Th(i, l);
                            break;
                        case "textarea":
                            IS(i, l);
                            break;
                        case "select":
                            var v = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!l.multiple;
                            var m = l.value;
                            m != null ? Tl(i, !!l.multiple, m, !1) : v !== !!l.multiple && (l.defaultValue != null ? Tl(i, !!l.multiple, l.defaultValue, !0) : Tl(i, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    i[ds] = l
                } catch (S) {
                    St(e, e.return, S)
                }
            }
            break;
        case 6:
            if (Er(t, e), Mr(e), r & 4) {
                if (e.stateNode === null) throw Error(te(162));
                i = e.stateNode, l = e.memoizedProps;
                try {
                    i.nodeValue = l
                } catch (S) {
                    St(e, e.return, S)
                }
            }
            break;
        case 3:
            if (Er(t, e), Mr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                us(t.containerInfo)
            } catch (S) {
                St(e, e.return, S)
            }
            break;
        case 4:
            Er(t, e), Mr(e);
            break;
        case 13:
            Er(t, e), Mr(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Tm = kt())), r & 4 && cw(e);
            break;
        case 22:
            if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Yt = (d = Yt) || p, Er(t, e), Yt = d) : Er(t, e), Mr(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1)
                    for (ce = e, p = e.child; p !== null;) {
                        for (g = ce = p; ce !== null;) {
                            switch (v = ce, m = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qu(4, v, v.return);
                                    break;
                                case 1:
                                    bl(v, v.return);
                                    var E = v.stateNode;
                                    if (typeof E.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, E.props = t.memoizedProps, E.state = t.memoizedState, E.componentWillUnmount()
                                        } catch (S) {
                                            St(r, n, S)
                                        }
                                    }
                                    break;
                                case 5:
                                    bl(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        dw(g);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = v, ce = m) : dw(g)
                        }
                        p = p.sibling
                    }
                e: for (p = null, g = e;;) {
                    if (g.tag === 5) {
                        if (p === null) {
                            p = g;
                            try {
                                i = g.stateNode, d ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (a = g.stateNode, f = g.memoizedProps.style, s = f != null && f.hasOwnProperty("display") ? f.display : null, a.style.display = AS("display", s))
                            } catch (S) {
                                St(e, e.return, S)
                            }
                        }
                    } else if (g.tag === 6) {
                        if (p === null) try {
                            g.stateNode.nodeValue = d ? "" : g.memoizedProps
                        } catch (S) {
                            St(e, e.return, S)
                        }
                    } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                        g.child.return = g, g = g.child;
                        continue
                    }
                    if (g === e) break e;
                    for (; g.sibling === null;) {
                        if (g.return === null || g.return === e) break e;
                        p === g && (p = null), g = g.return
                    }
                    p === g && (p = null), g.sibling.return = g.return, g = g.sibling
                }
            }
            break;
        case 19:
            Er(t, e), Mr(e), r & 4 && cw(e);
            break;
        case 21:
            break;
        default:
            Er(t, e), Mr(e)
    }
}

function Mr(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (oC(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(te(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (rs(i, ""), r.flags &= -33);
                    var l = aw(e);
                    ag(e, l, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = aw(e);
                    sg(e, a, s);
                    break;
                default:
                    throw Error(te(161))
            }
        }
        catch (f) {
            St(e, e.return, f)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function IN(e, t, n) {
    ce = e, sC(e)
}

function sC(e, t, n) {
    for (var r = (e.mode & 1) !== 0; ce !== null;) {
        var i = ce,
            l = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Fa;
            if (!s) {
                var a = i.alternate,
                    f = a !== null && a.memoizedState !== null || Yt;
                a = Fa;
                var d = Yt;
                if (Fa = s, (Yt = f) && !d)
                    for (ce = i; ce !== null;) s = ce, f = s.child, s.tag === 22 && s.memoizedState !== null ? pw(i) : f !== null ? (f.return = s, ce = f) : pw(i);
                for (; l !== null;) ce = l, sC(l), l = l.sibling;
                ce = i, Fa = a, Yt = d
            }
            fw(e)
        } else i.subtreeFlags & 8772 && l !== null ? (l.return = i, ce = l) : fw(e)
    }
}

function fw(e) {
    for (; ce !== null;) {
        var t = ce;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Yt || sf(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Yt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Cr(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var l = t.updateQueue;
                        l !== null && K1(t, l, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            K1(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var f = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    f.autoFocus && n.focus();
                                    break;
                                case "img":
                                    f.src && (n.src = f.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var p = d.memoizedState;
                                if (p !== null) {
                                    var g = p.dehydrated;
                                    g !== null && us(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(te(163))
                }
                Yt || t.flags & 512 && ug(t)
            } catch (v) {
                St(t, t.return, v)
            }
        }
        if (t === e) {
            ce = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, ce = n;
            break
        }
        ce = t.return
    }
}

function dw(e) {
    for (; ce !== null;) {
        var t = ce;
        if (t === e) {
            ce = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, ce = n;
            break
        }
        ce = t.return
    }
}

function pw(e) {
    for (; ce !== null;) {
        var t = ce;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        sf(4, t)
                    } catch (f) {
                        St(t, n, f)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (f) {
                            St(t, i, f)
                        }
                    }
                    var l = t.return;
                    try {
                        ug(t)
                    } catch (f) {
                        St(t, l, f)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        ug(t)
                    } catch (f) {
                        St(t, s, f)
                    }
            }
        } catch (f) {
            St(t, t.return, f)
        }
        if (t === e) {
            ce = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, ce = a;
            break
        }
        ce = t.return
    }
}
var RN = Math.ceil,
    Tc = hi.ReactCurrentDispatcher,
    _m = hi.ReactCurrentOwner,
    ar = hi.ReactCurrentBatchConfig,
    Be = 0,
    Nt = null,
    _t = null,
    Ut = 0,
    Nn = 0,
    _l = lo(0),
    Rt = 0,
    ys = null,
    Fo = 0,
    af = 0,
    Om = 0,
    Gu = null,
    vn = null,
    Tm = 0,
    ql = 1 / 0,
    ri = null,
    Ic = !1,
    cg = null,
    Wi = null,
    za = !1,
    zi = null,
    Rc = 0,
    Ku = 0,
    fg = null,
    tc = -1,
    nc = 0;

function an() {
    return Be & 6 ? kt() : tc !== -1 ? tc : tc = kt()
}

function Vi(e) {
    return e.mode & 1 ? Be & 2 && Ut !== 0 ? Ut & -Ut : pN.transition !== null ? (nc === 0 && (nc = VS()), nc) : (e = Ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ZS(e.type)), e) : 1
}

function Tr(e, t, n, r) {
    if (50 < Ku) throw Ku = 0, fg = null, Error(te(185));
    bs(e, n, r), (!(Be & 2) || e !== Nt) && (e === Nt && (!(Be & 2) && (af |= n), Rt === 4 && Ni(e, Ut)), En(e, r), n === 1 && Be === 0 && !(t.mode & 1) && (ql = kt() + 500, of && uo()))
}

function En(e, t) {
    var n = e.callbackNode;
    pD(e, t);
    var r = pc(e, e === Nt ? Ut : 0);
    if (r === 0) n !== null && E1(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && E1(n), t === 1) e.tag === 0 ? dN(hw.bind(null, e)) : vE(hw.bind(null, e)), sN(function() {
            !(Be & 6) && uo()
        }), n = null;
        else {
            switch (qS(r)) {
                case 1:
                    n = em;
                    break;
                case 4:
                    n = HS;
                    break;
                case 16:
                    n = dc;
                    break;
                case 536870912:
                    n = WS;
                    break;
                default:
                    n = dc
            }
            n = mC(n, aC.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function aC(e, t) {
    if (tc = -1, nc = 0, Be & 6) throw Error(te(327));
    var n = e.callbackNode;
    if (Dl() && e.callbackNode !== n) return null;
    var r = pc(e, e === Nt ? Ut : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Pc(e, r);
    else {
        t = r;
        var i = Be;
        Be |= 2;
        var l = fC();
        (Nt !== e || Ut !== t) && (ri = null, ql = kt() + 500, Ro(e, t));
        do try {
            DN();
            break
        } catch (a) {
            cC(e, a)
        }
        while (1);
        pm(), Tc.current = l, Be = i, _t !== null ? t = 0 : (Nt = null, Ut = 0, t = Rt)
    }
    if (t !== 0) {
        if (t === 2 && (i = zh(e), i !== 0 && (r = i, t = dg(e, i))), t === 1) throw n = ys, Ro(e, 0), Ni(e, r), En(e, kt()), n;
        if (t === 6) Ni(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !PN(i) && (t = Pc(e, r), t === 2 && (l = zh(e), l !== 0 && (r = l, t = dg(e, l))), t === 1)) throw n = ys, Ro(e, 0), Ni(e, r), En(e, kt()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(te(345));
                case 2:
                    So(e, vn, ri);
                    break;
                case 3:
                    if (Ni(e, r), (r & 130023424) === r && (t = Tm + 500 - kt(), 10 < t)) {
                        if (pc(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            an(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = qh(So.bind(null, e, vn, ri), t);
                        break
                    }
                    So(e, vn, ri);
                    break;
                case 4:
                    if (Ni(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - Or(r);
                        l = 1 << s, s = t[s], s > i && (i = s), r &= ~l
                    }
                    if (r = i, r = kt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * RN(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = qh(So.bind(null, e, vn, ri), r);
                        break
                    }
                    So(e, vn, ri);
                    break;
                case 5:
                    So(e, vn, ri);
                    break;
                default:
                    throw Error(te(329))
            }
        }
    }
    return En(e, kt()), e.callbackNode === n ? aC.bind(null, e) : null
}

function dg(e, t) {
    var n = Gu;
    return e.current.memoizedState.isDehydrated && (Ro(e, t).flags |= 256), e = Pc(e, t), e !== 2 && (t = vn, vn = n, t !== null && pg(t)), e
}

function pg(e) {
    vn === null ? vn = e : vn.push.apply(vn, e)
}

function PN(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ir(l(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Ni(e, t) {
    for (t &= ~Om, t &= ~af, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Or(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function hw(e) {
    if (Be & 6) throw Error(te(327));
    Dl();
    var t = pc(e, 0);
    if (!(t & 1)) return En(e, kt()), null;
    var n = Pc(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = zh(e);
        r !== 0 && (t = r, n = dg(e, r))
    }
    if (n === 1) throw n = ys, Ro(e, 0), Ni(e, t), En(e, kt()), n;
    if (n === 6) throw Error(te(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, vn, ri), En(e, kt()), null
}

function Im(e, t) {
    var n = Be;
    Be |= 1;
    try {
        return e(t)
    } finally {
        Be = n, Be === 0 && (ql = kt() + 500, of && uo())
    }
}

function zo(e) {
    zi !== null && zi.tag === 0 && !(Be & 6) && Dl();
    var t = Be;
    Be |= 1;
    var n = ar.transition,
        r = Ye;
    try {
        if (ar.transition = null, Ye = 1, e) return e()
    } finally {
        Ye = r, ar.transition = n, Be = t, !(Be & 6) && uo()
    }
}

function Rm() {
    Nn = _l.current, st(_l)
}

function Ro(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, uN(n)), _t !== null)
        for (n = _t.return; n !== null;) {
            var r = n;
            switch (cm(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && yc();
                    break;
                case 3:
                    Wl(), st(xn), st(Jt), wm();
                    break;
                case 5:
                    ym(r);
                    break;
                case 4:
                    Wl();
                    break;
                case 13:
                    st(gt);
                    break;
                case 19:
                    st(gt);
                    break;
                case 10:
                    hm(r.type._context);
                    break;
                case 22:
                case 23:
                    Rm()
            }
            n = n.return
        }
    if (Nt = e, _t = e = qi(e.current, null), Ut = Nn = t, Rt = 0, ys = null, Om = af = Fo = 0, vn = Gu = null, Oo !== null) {
        for (t = 0; t < Oo.length; t++)
            if (n = Oo[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var s = l.next;
                    l.next = i, r.next = s
                }
                n.pending = r
            } Oo = null
    }
    return e
}

function cC(e, t) {
    do {
        var n = _t;
        try {
            if (pm(), Za.current = Oc, _c) {
                for (var r = vt.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                _c = !1
            }
            if (Lo = 0, Dt = It = vt = null, Vu = !1, gs = 0, _m.current = null, n === null || n.return === null) {
                Rt = 1, ys = t, _t = null;
                break
            }
            e: {
                var l = e,
                    s = n.return,
                    a = n,
                    f = t;
                if (t = Ut, a.flags |= 32768, f !== null && typeof f == "object" && typeof f.then == "function") {
                    var d = f,
                        p = a,
                        g = p.tag;
                    if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var v = p.alternate;
                        v ? (p.updateQueue = v.updateQueue, p.memoizedState = v.memoizedState, p.lanes = v.lanes) : (p.updateQueue = null, p.memoizedState = null)
                    }
                    var m = tw(s);
                    if (m !== null) {
                        m.flags &= -257, nw(m, s, a, l, t), m.mode & 1 && ew(l, d, t), t = m, f = d;
                        var E = t.updateQueue;
                        if (E === null) {
                            var S = new Set;
                            S.add(f), t.updateQueue = S
                        } else E.add(f);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ew(l, d, t), Pm();
                            break e
                        }
                        f = Error(te(426))
                    }
                } else if (pt && a.mode & 1) {
                    var A = tw(s);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256), nw(A, s, a, l, t), fm(Vl(f, a));
                        break e
                    }
                }
                l = f = Vl(f, a),
                Rt !== 4 && (Rt = 2),
                Gu === null ? Gu = [l] : Gu.push(l),
                l = s;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var y = GE(l, f, t);
                            G1(l, y);
                            break e;
                        case 1:
                            a = f;
                            var x = l.type,
                                k = l.stateNode;
                            if (!(l.flags & 128) && (typeof x.getDerivedStateFromError == "function" || k !== null && typeof k.componentDidCatch == "function" && (Wi === null || !Wi.has(k)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var P = KE(l, a, t);
                                G1(l, P);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            pC(n)
        } catch (N) {
            t = N, _t === n && n !== null && (_t = n = n.return);
            continue
        }
        break
    } while (1)
}

function fC() {
    var e = Tc.current;
    return Tc.current = Oc, e === null ? Oc : e
}

function Pm() {
    (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), Nt === null || !(Fo & 268435455) && !(af & 268435455) || Ni(Nt, Ut)
}

function Pc(e, t) {
    var n = Be;
    Be |= 2;
    var r = fC();
    (Nt !== e || Ut !== t) && (ri = null, Ro(e, t));
    do try {
        AN();
        break
    } catch (i) {
        cC(e, i)
    }
    while (1);
    if (pm(), Be = n, Tc.current = r, _t !== null) throw Error(te(261));
    return Nt = null, Ut = 0, Rt
}

function AN() {
    for (; _t !== null;) dC(_t)
}

function DN() {
    for (; _t !== null && !iD();) dC(_t)
}

function dC(e) {
    var t = gC(e.alternate, e, Nn);
    e.memoizedProps = e.pendingProps, t === null ? pC(e) : _t = t, _m.current = null
}

function pC(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = _N(n, t), n !== null) {
                n.flags &= 32767, _t = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Rt = 6, _t = null;
                return
            }
        } else if (n = bN(n, t, Nn), n !== null) {
            _t = n;
            return
        }
        if (t = t.sibling, t !== null) {
            _t = t;
            return
        }
        _t = t = e
    } while (t !== null);
    Rt === 0 && (Rt = 5)
}

function So(e, t, n) {
    var r = Ye,
        i = ar.transition;
    try {
        ar.transition = null, Ye = 1, NN(e, t, n, r)
    } finally {
        ar.transition = i, Ye = r
    }
    return null
}

function NN(e, t, n, r) {
    do Dl(); while (zi !== null);
    if (Be & 6) throw Error(te(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(te(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (hD(e, l), e === Nt && (_t = Nt = null, Ut = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || za || (za = !0, mC(dc, function() {
            return Dl(), null
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
        l = ar.transition, ar.transition = null;
        var s = Ye;
        Ye = 1;
        var a = Be;
        Be |= 4, _m.current = null, TN(e, n), uC(n, e), eN(Wh), hc = !!Hh, Wh = Hh = null, e.current = n, IN(n), oD(), Be = a, Ye = s, ar.transition = l
    } else e.current = n;
    if (za && (za = !1, zi = e, Rc = i), l = e.pendingLanes, l === 0 && (Wi = null), sD(n.stateNode), En(e, kt()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ic) throw Ic = !1, e = cg, cg = null, e;
    return Rc & 1 && e.tag !== 0 && Dl(), l = e.pendingLanes, l & 1 ? e === fg ? Ku++ : (Ku = 0, fg = e) : Ku = 0, uo(), null
}

function Dl() {
    if (zi !== null) {
        var e = qS(Rc),
            t = ar.transition,
            n = Ye;
        try {
            if (ar.transition = null, Ye = 16 > e ? 16 : e, zi === null) var r = !1;
            else {
                if (e = zi, zi = null, Rc = 0, Be & 6) throw Error(te(331));
                var i = Be;
                for (Be |= 4, ce = e.current; ce !== null;) {
                    var l = ce,
                        s = l.child;
                    if (ce.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var f = 0; f < a.length; f++) {
                                var d = a[f];
                                for (ce = d; ce !== null;) {
                                    var p = ce;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qu(8, p, l)
                                    }
                                    var g = p.child;
                                    if (g !== null) g.return = p, ce = g;
                                    else
                                        for (; ce !== null;) {
                                            p = ce;
                                            var v = p.sibling,
                                                m = p.return;
                                            if (iC(p), p === d) {
                                                ce = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = m, ce = v;
                                                break
                                            }
                                            ce = m
                                        }
                                }
                            }
                            var E = l.alternate;
                            if (E !== null) {
                                var S = E.child;
                                if (S !== null) {
                                    E.child = null;
                                    do {
                                        var A = S.sibling;
                                        S.sibling = null, S = A
                                    } while (S !== null)
                                }
                            }
                            ce = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && s !== null) s.return = l, ce = s;
                    else e: for (; ce !== null;) {
                        if (l = ce, l.flags & 2048) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                qu(9, l, l.return)
                        }
                        var y = l.sibling;
                        if (y !== null) {
                            y.return = l.return, ce = y;
                            break e
                        }
                        ce = l.return
                    }
                }
                var x = e.current;
                for (ce = x; ce !== null;) {
                    s = ce;
                    var k = s.child;
                    if (s.subtreeFlags & 2064 && k !== null) k.return = s, ce = k;
                    else e: for (s = x; ce !== null;) {
                        if (a = ce, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    sf(9, a)
                            }
                        } catch (N) {
                            St(a, a.return, N)
                        }
                        if (a === s) {
                            ce = null;
                            break e
                        }
                        var P = a.sibling;
                        if (P !== null) {
                            P.return = a.return, ce = P;
                            break e
                        }
                        ce = a.return
                    }
                }
                if (Be = i, uo(), Ur && typeof Ur.onPostCommitFiberRoot == "function") try {
                    Ur.onPostCommitFiberRoot(Jc, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Ye = n, ar.transition = t
        }
    }
    return !1
}

function gw(e, t, n) {
    t = Vl(n, t), t = GE(e, t, 1), e = Hi(e, t, 1), t = an(), e !== null && (bs(e, 1, t), En(e, t))
}

function St(e, t, n) {
    if (e.tag === 3) gw(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                gw(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wi === null || !Wi.has(r))) {
                    e = Vl(n, e), e = KE(t, e, 1), t = Hi(t, e, 1), e = an(), t !== null && (bs(t, 1, e), En(t, e));
                    break
                }
            }
            t = t.return
        }
}

function MN(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = an(), e.pingedLanes |= e.suspendedLanes & n, Nt === e && (Ut & n) === n && (Rt === 4 || Rt === 3 && (Ut & 130023424) === Ut && 500 > kt() - Tm ? Ro(e, 0) : Om |= n), En(e, t)
}

function hC(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ta, Ta <<= 1, !(Ta & 130023424) && (Ta = 4194304)) : t = 1);
    var n = an();
    e = fi(e, t), e !== null && (bs(e, t, n), En(e, n))
}

function LN(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), hC(e, n)
}

function FN(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(te(314))
    }
    r !== null && r.delete(t), hC(e, n)
}
var gC;
gC = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || xn.current) yn = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return yn = !1, kN(e, t, n);
            yn = !!(e.flags & 131072)
        }
    else yn = !1, pt && t.flags & 1048576 && yE(t, Sc, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            ec(e, t), e = t.pendingProps;
            var i = Ul(t, Jt.current);
            Al(t, n), i = Sm(null, t, r, e, i, n);
            var l = Em();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Sn(r) ? (l = !0, wc(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, mm(t), i.updater = lf, t.stateNode = i, i._reactInternals = t, Jh(t, r, e, n), t = ng(null, t, r, !0, l, n)) : (t.tag = 0, pt && l && am(t), ln(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (ec(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = $N(r), e = Cr(r, e), i) {
                    case 0:
                        t = tg(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ow(null, t, r, e, n);
                        break e;
                    case 11:
                        t = rw(null, t, r, e, n);
                        break e;
                    case 14:
                        t = iw(null, t, r, Cr(r.type, e), n);
                        break e
                }
                throw Error(te(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Cr(r, i), tg(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Cr(r, i), ow(e, t, r, i, n);
        case 3:
            e: {
                if (ZE(t), e === null) throw Error(te(387));r = t.pendingProps,
                l = t.memoizedState,
                i = l.element,
                EE(e, t),
                kc(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, l.isDehydrated)
                    if (l = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        i = Vl(Error(te(423)), t), t = lw(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Vl(Error(te(424)), t), t = lw(e, t, r, n, i);
                    break e
                } else
                    for (Ln = ji(t.stateNode.containerInfo.firstChild), zn = t, pt = !0, br = null, n = _E(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (jl(), r === i) {
                        t = di(e, t, n);
                        break e
                    }
                    ln(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return OE(t), e === null && Yh(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, s = i.children, Vh(r, i) ? s = null : l !== null && Vh(r, l) && (t.flags |= 32), XE(e, t), ln(e, t, s, n), t.child;
        case 6:
            return e === null && Yh(t), null;
        case 13:
            return JE(e, t, n);
        case 4:
            return vm(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hl(t, null, r, n) : ln(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Cr(r, i), rw(e, t, r, i, n);
        case 7:
            return ln(e, t, t.pendingProps, n), t.child;
        case 8:
            return ln(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ln(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, s = i.value, rt(Ec, r._currentValue), r._currentValue = s, l !== null)
                    if (Ir(l.value, s)) {
                        if (l.children === i.children && !xn.current) {
                            t = di(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null;) {
                            var a = l.dependencies;
                            if (a !== null) {
                                s = l.child;
                                for (var f = a.firstContext; f !== null;) {
                                    if (f.context === r) {
                                        if (l.tag === 1) {
                                            f = si(-1, n & -n), f.tag = 2;
                                            var d = l.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var p = d.pending;
                                                p === null ? f.next = f : (f.next = p.next, p.next = f), d.pending = f
                                            }
                                        }
                                        l.lanes |= n, f = l.alternate, f !== null && (f.lanes |= n), Xh(l.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    f = f.next
                                }
                            } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (s = l.return, s === null) throw Error(te(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Xh(s, n, t), s = l.sibling
                            } else s = l.child;
                            if (s !== null) s.return = l;
                            else
                                for (s = l; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (l = s.sibling, l !== null) {
                                        l.return = s.return, s = l;
                                        break
                                    }
                                    s = s.return
                                }
                            l = s
                        }
                ln(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Al(t, n), i = fr(i), r = r(i), t.flags |= 1, ln(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Cr(r, t.pendingProps), i = Cr(r.type, i), iw(e, t, r, i, n);
        case 15:
            return QE(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Cr(r, i), ec(e, t), t.tag = 1, Sn(r) ? (e = !0, wc(t)) : e = !1, Al(t, n), kE(t, r, i), Jh(t, r, i, n), ng(null, t, r, !0, e, n);
        case 19:
            return eC(e, t, n);
        case 22:
            return YE(e, t, n)
    }
    throw Error(te(156, t.tag))
};

function mC(e, t) {
    return jS(e, t)
}

function zN(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function sr(e, t, n, r) {
    return new zN(e, t, n, r)
}

function Am(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function $N(e) {
    if (typeof e == "function") return Am(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Xg) return 11;
        if (e === Zg) return 14
    }
    return 2
}

function qi(e, t) {
    var n = e.alternate;
    return n === null ? (n = sr(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function rc(e, t, n, r, i, l) {
    var s = 2;
    if (r = e, typeof e == "function") Am(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case ml:
            return Po(n.children, i, l, t);
        case Yg:
            s = 8, i |= 8;
            break;
        case Ch:
            return e = sr(12, n, t, i | 2), e.elementType = Ch, e.lanes = l, e;
        case kh:
            return e = sr(13, n, t, i), e.elementType = kh, e.lanes = l, e;
        case bh:
            return e = sr(19, n, t, i), e.elementType = bh, e.lanes = l, e;
        case bS:
            return cf(n, i, l, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case CS:
                    s = 10;
                    break e;
                case kS:
                    s = 9;
                    break e;
                case Xg:
                    s = 11;
                    break e;
                case Zg:
                    s = 14;
                    break e;
                case Pi:
                    s = 16, r = null;
                    break e
            }
            throw Error(te(130, e == null ? e : typeof e, ""))
    }
    return t = sr(s, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function Po(e, t, n, r) {
    return e = sr(7, e, r, t), e.lanes = n, e
}

function cf(e, t, n, r) {
    return e = sr(22, e, r, t), e.elementType = bS, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function jp(e, t, n) {
    return e = sr(6, e, null, t), e.lanes = n, e
}

function Hp(e, t, n) {
    return t = sr(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function BN(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cp(0), this.expirationTimes = Cp(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cp(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Dm(e, t, n, r, i, l, s, a, f) {
    return e = new BN(e, t, n, a, f), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = sr(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, mm(l), e
}

function UN(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: gl,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function vC(e) {
    if (!e) return Ji;
    e = e._reactInternals;
    e: {
        if (Vo(e) !== e || e.tag !== 1) throw Error(te(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Sn(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(te(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Sn(n)) return mE(e, n, t)
    }
    return t
}

function yC(e, t, n, r, i, l, s, a, f) {
    return e = Dm(n, r, !0, e, i, l, s, a, f), e.context = vC(null), n = e.current, r = an(), i = Vi(n), l = si(r, i), l.callback = t ?? null, Hi(n, l, i), e.current.lanes = i, bs(e, i, r), En(e, r), e
}

function ff(e, t, n, r) {
    var i = t.current,
        l = an(),
        s = Vi(i);
    return n = vC(n), t.context === null ? t.context = n : t.pendingContext = n, t = si(l, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Hi(i, t, s), e !== null && (Tr(e, i, s, l), Xa(e, i, s)), s
}

function Ac(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function mw(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Nm(e, t) {
    mw(e, t), (e = e.alternate) && mw(e, t)
}

function jN() {
    return null
}
var wC = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Mm(e) {
    this._internalRoot = e
}
df.prototype.render = Mm.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(te(409));
    ff(e, t, null, null)
};
df.prototype.unmount = Mm.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        zo(function() {
            ff(null, e, null, null)
        }), t[ci] = null
    }
};

function df(e) {
    this._internalRoot = e
}
df.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = QS();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Di.length && t !== 0 && t < Di[n].priority; n++);
        Di.splice(n, 0, e), n === 0 && XS(e)
    }
};

function Lm(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function pf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function vw() {}

function HN(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var d = Ac(s);
                l.call(d)
            }
        }
        var s = yC(t, r, e, 0, null, !1, !1, "", vw);
        return e._reactRootContainer = s, e[ci] = s.current, cs(e.nodeType === 8 ? e.parentNode : e), zo(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var d = Ac(f);
            a.call(d)
        }
    }
    var f = Dm(e, 0, !1, null, null, !1, !1, "", vw);
    return e._reactRootContainer = f, e[ci] = f.current, cs(e.nodeType === 8 ? e.parentNode : e), zo(function() {
        ff(t, f, n, r)
    }), f
}

function hf(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var s = l;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var f = Ac(s);
                a.call(f)
            }
        }
        ff(t, s, e, i)
    } else s = HN(n, t, e, i, r);
    return Ac(s)
}
GS = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Mu(t.pendingLanes);
                n !== 0 && (tm(t, n | 1), En(t, kt()), !(Be & 6) && (ql = kt() + 500, uo()))
            }
            break;
        case 13:
            zo(function() {
                var r = fi(e, 1);
                if (r !== null) {
                    var i = an();
                    Tr(r, e, 1, i)
                }
            }), Nm(e, 1)
    }
};
nm = function(e) {
    if (e.tag === 13) {
        var t = fi(e, 134217728);
        if (t !== null) {
            var n = an();
            Tr(t, e, 134217728, n)
        }
        Nm(e, 134217728)
    }
};
KS = function(e) {
    if (e.tag === 13) {
        var t = Vi(e),
            n = fi(e, t);
        if (n !== null) {
            var r = an();
            Tr(n, e, t, r)
        }
        Nm(e, t)
    }
};
QS = function() {
    return Ye
};
YS = function(e, t) {
    var n = Ye;
    try {
        return Ye = e, t()
    } finally {
        Ye = n
    }
};
Mh = function(e, t, n) {
    switch (t) {
        case "input":
            if (Th(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = rf(r);
                        if (!i) throw Error(te(90));
                        OS(r), Th(r, i)
                    }
                }
            }
            break;
        case "textarea":
            IS(e, n);
            break;
        case "select":
            t = n.value, t != null && Tl(e, !!n.multiple, t, !1)
    }
};
LS = Im;
FS = zo;
var WN = {
        usingClientEntryPoint: !1,
        Events: [Os, xl, rf, NS, MS, Im]
    },
    Ru = {
        findFiberByHostInstance: _o,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    VN = {
        bundleType: Ru.bundleType,
        version: Ru.version,
        rendererPackageName: Ru.rendererPackageName,
        rendererConfig: Ru.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: hi.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = BS(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Ru.findFiberByHostInstance || jN,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$a.isDisabled && $a.supportsFiber) try {
        Jc = $a.inject(VN), Ur = $a
    } catch {}
}
Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WN;
Wn.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lm(t)) throw Error(te(200));
    return UN(e, t, null, n)
};
Wn.createRoot = function(e, t) {
    if (!Lm(e)) throw Error(te(299));
    var n = !1,
        r = "",
        i = wC;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Dm(e, 1, !1, null, null, n, !1, r, i), e[ci] = t.current, cs(e.nodeType === 8 ? e.parentNode : e), new Mm(t)
};
Wn.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(te(188)) : (e = Object.keys(e).join(","), Error(te(268, e)));
    return e = BS(t), e = e === null ? null : e.stateNode, e
};
Wn.flushSync = function(e) {
    return zo(e)
};
Wn.hydrate = function(e, t, n) {
    if (!pf(t)) throw Error(te(200));
    return hf(null, e, t, !0, n)
};
Wn.hydrateRoot = function(e, t, n) {
    if (!Lm(e)) throw Error(te(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        l = "",
        s = wC;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = yC(t, null, e, 1, n ?? null, i, !1, l, s), e[ci] = t.current, cs(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new df(t)
};
Wn.render = function(e, t, n) {
    if (!pf(t)) throw Error(te(200));
    return hf(null, e, t, !1, n)
};
Wn.unmountComponentAtNode = function(e) {
    if (!pf(e)) throw Error(te(40));
    return e._reactRootContainer ? (zo(function() {
        hf(null, null, e, !1, function() {
            e._reactRootContainer = null, e[ci] = null
        })
    }), !0) : !1
};
Wn.unstable_batchedUpdates = Im;
Wn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!pf(n)) throw Error(te(200));
    if (e == null || e._reactInternals === void 0) throw Error(te(38));
    return hf(e, t, n, !1, r)
};
Wn.version = "18.2.0-next-9e3b772b8-20220608";

function xC() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xC)
    } catch (e) {
        console.error(e)
    }
}
xC(), yS.exports = Wn;
var tu = yS.exports;
const Ba = io(tu);
var SC, yw = tu;
SC = yw.createRoot, yw.hydrateRoot;
var EC = {
        exports: {}
    },
    CC = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gl = R;

function qN(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var GN = typeof Object.is == "function" ? Object.is : qN,
    KN = Gl.useState,
    QN = Gl.useEffect,
    YN = Gl.useLayoutEffect,
    XN = Gl.useDebugValue;

function ZN(e, t) {
    var n = t(),
        r = KN({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        l = r[1];
    return YN(function() {
        i.value = n, i.getSnapshot = t, Wp(i) && l({
            inst: i
        })
    }, [e, n, t]), QN(function() {
        return Wp(i) && l({
            inst: i
        }), e(function() {
            Wp(i) && l({
                inst: i
            })
        })
    }, [e]), XN(n), n
}

function Wp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !GN(e, n)
    } catch {
        return !0
    }
}

function JN(e, t) {
    return t()
}
var eM = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? JN : ZN;
CC.useSyncExternalStore = Gl.useSyncExternalStore !== void 0 ? Gl.useSyncExternalStore : eM;
EC.exports = CC;
var tM = EC.exports,
    kC = {
        exports: {}
    },
    bC = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf = R,
    nM = tM;

function rM(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var iM = typeof Object.is == "function" ? Object.is : rM,
    oM = nM.useSyncExternalStore,
    lM = gf.useRef,
    uM = gf.useEffect,
    sM = gf.useMemo,
    aM = gf.useDebugValue;
bC.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
    var l = lM(null);
    if (l.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        l.current = s
    } else s = l.current;
    l = sM(function() {
        function f(m) {
            if (!d) {
                if (d = !0, p = m, m = r(m), i !== void 0 && s.hasValue) {
                    var E = s.value;
                    if (i(E, m)) return g = E
                }
                return g = m
            }
            if (E = g, iM(p, m)) return E;
            var S = r(m);
            return i !== void 0 && i(E, S) ? E : (p = m, g = S)
        }
        var d = !1,
            p, g, v = n === void 0 ? null : n;
        return [function() {
            return f(t())
        }, v === null ? void 0 : function() {
            return f(v())
        }]
    }, [t, n, r, i]);
    var a = oM(e, l[0], l[1]);
    return uM(function() {
        s.hasValue = !0, s.value = a
    }, [a]), aM(a), a
};
kC.exports = bC;
var cM = kC.exports;

function fM(e) {
    e()
}
let _C = fM;
const dM = e => _C = e,
    pM = () => _C,
    ww = Symbol.for("react-redux-context"),
    xw = typeof globalThis < "u" ? globalThis : {};

function hM() {
    var e;
    if (!R.createContext) return {};
    const t = (e = xw[ww]) != null ? e : xw[ww] = new Map;
    let n = t.get(R.createContext);
    return n || (n = R.createContext(null), t.set(R.createContext, n)), n
}
const eo = hM();

function Fm(e = eo) {
    return function() {
        return R.useContext(e)
    }
}
const OC = Fm(),
    gM = () => {
        throw new Error("uSES not initialized!")
    };
let TC = gM;
const mM = e => {
        TC = e
    },
    vM = (e, t) => e === t;

function yM(e = eo) {
    const t = e === eo ? OC : Fm(e);
    return function(r, i = {}) {
        const {
            equalityFn: l = vM,
            stabilityCheck: s = void 0,
            noopCheck: a = void 0
        } = typeof i == "function" ? {
            equalityFn: i
        } : i, {
            store: f,
            subscription: d,
            getServerState: p,
            stabilityCheck: g,
            noopCheck: v
        } = t();
        R.useRef(!0);
        const m = R.useCallback({
                [r.name](S) {
                    return r(S)
                }
            } [r.name], [r, g, s]),
            E = TC(d.addNestedSub, f.getState, p || f.getState, m, l);
        return R.useDebugValue(E), E
    }
}
const wM = yM();

function Dc() {
    return Dc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Dc.apply(this, arguments)
}

function zm(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, l;
    for (l = 0; l < r.length; l++) i = r[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
var IC = {
        exports: {}
    },
    Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = typeof Symbol == "function" && Symbol.for,
    $m = Mt ? Symbol.for("react.element") : 60103,
    Bm = Mt ? Symbol.for("react.portal") : 60106,
    mf = Mt ? Symbol.for("react.fragment") : 60107,
    vf = Mt ? Symbol.for("react.strict_mode") : 60108,
    yf = Mt ? Symbol.for("react.profiler") : 60114,
    wf = Mt ? Symbol.for("react.provider") : 60109,
    xf = Mt ? Symbol.for("react.context") : 60110,
    Um = Mt ? Symbol.for("react.async_mode") : 60111,
    Sf = Mt ? Symbol.for("react.concurrent_mode") : 60111,
    Ef = Mt ? Symbol.for("react.forward_ref") : 60112,
    Cf = Mt ? Symbol.for("react.suspense") : 60113,
    xM = Mt ? Symbol.for("react.suspense_list") : 60120,
    kf = Mt ? Symbol.for("react.memo") : 60115,
    bf = Mt ? Symbol.for("react.lazy") : 60116,
    SM = Mt ? Symbol.for("react.block") : 60121,
    EM = Mt ? Symbol.for("react.fundamental") : 60117,
    CM = Mt ? Symbol.for("react.responder") : 60118,
    kM = Mt ? Symbol.for("react.scope") : 60119;

function qn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case $m:
                switch (e = e.type, e) {
                    case Um:
                    case Sf:
                    case mf:
                    case yf:
                    case vf:
                    case Cf:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case xf:
                            case Ef:
                            case bf:
                            case kf:
                            case wf:
                                return e;
                            default:
                                return t
                        }
                }
            case Bm:
                return t
        }
    }
}

function RC(e) {
    return qn(e) === Sf
}
Xe.AsyncMode = Um;
Xe.ConcurrentMode = Sf;
Xe.ContextConsumer = xf;
Xe.ContextProvider = wf;
Xe.Element = $m;
Xe.ForwardRef = Ef;
Xe.Fragment = mf;
Xe.Lazy = bf;
Xe.Memo = kf;
Xe.Portal = Bm;
Xe.Profiler = yf;
Xe.StrictMode = vf;
Xe.Suspense = Cf;
Xe.isAsyncMode = function(e) {
    return RC(e) || qn(e) === Um
};
Xe.isConcurrentMode = RC;
Xe.isContextConsumer = function(e) {
    return qn(e) === xf
};
Xe.isContextProvider = function(e) {
    return qn(e) === wf
};
Xe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === $m
};
Xe.isForwardRef = function(e) {
    return qn(e) === Ef
};
Xe.isFragment = function(e) {
    return qn(e) === mf
};
Xe.isLazy = function(e) {
    return qn(e) === bf
};
Xe.isMemo = function(e) {
    return qn(e) === kf
};
Xe.isPortal = function(e) {
    return qn(e) === Bm
};
Xe.isProfiler = function(e) {
    return qn(e) === yf
};
Xe.isStrictMode = function(e) {
    return qn(e) === vf
};
Xe.isSuspense = function(e) {
    return qn(e) === Cf
};
Xe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === mf || e === Sf || e === yf || e === vf || e === Cf || e === xM || typeof e == "object" && e !== null && (e.$$typeof === bf || e.$$typeof === kf || e.$$typeof === wf || e.$$typeof === xf || e.$$typeof === Ef || e.$$typeof === EM || e.$$typeof === CM || e.$$typeof === kM || e.$$typeof === SM)
};
Xe.typeOf = qn;
IC.exports = Xe;
var bM = IC.exports,
    PC = bM,
    _M = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    OM = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    AC = {};
AC[PC.ForwardRef] = _M;
AC[PC.Memo] = OM;
var Je = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jm = Symbol.for("react.element"),
    Hm = Symbol.for("react.portal"),
    _f = Symbol.for("react.fragment"),
    Of = Symbol.for("react.strict_mode"),
    Tf = Symbol.for("react.profiler"),
    If = Symbol.for("react.provider"),
    Rf = Symbol.for("react.context"),
    TM = Symbol.for("react.server_context"),
    Pf = Symbol.for("react.forward_ref"),
    Af = Symbol.for("react.suspense"),
    Df = Symbol.for("react.suspense_list"),
    Nf = Symbol.for("react.memo"),
    Mf = Symbol.for("react.lazy"),
    IM = Symbol.for("react.offscreen"),
    DC;
DC = Symbol.for("react.module.reference");

function pr(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case jm:
                switch (e = e.type, e) {
                    case _f:
                    case Tf:
                    case Of:
                    case Af:
                    case Df:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case TM:
                            case Rf:
                            case Pf:
                            case Mf:
                            case Nf:
                            case If:
                                return e;
                            default:
                                return t
                        }
                }
            case Hm:
                return t
        }
    }
}
Je.ContextConsumer = Rf;
Je.ContextProvider = If;
Je.Element = jm;
Je.ForwardRef = Pf;
Je.Fragment = _f;
Je.Lazy = Mf;
Je.Memo = Nf;
Je.Portal = Hm;
Je.Profiler = Tf;
Je.StrictMode = Of;
Je.Suspense = Af;
Je.SuspenseList = Df;
Je.isAsyncMode = function() {
    return !1
};
Je.isConcurrentMode = function() {
    return !1
};
Je.isContextConsumer = function(e) {
    return pr(e) === Rf
};
Je.isContextProvider = function(e) {
    return pr(e) === If
};
Je.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jm
};
Je.isForwardRef = function(e) {
    return pr(e) === Pf
};
Je.isFragment = function(e) {
    return pr(e) === _f
};
Je.isLazy = function(e) {
    return pr(e) === Mf
};
Je.isMemo = function(e) {
    return pr(e) === Nf
};
Je.isPortal = function(e) {
    return pr(e) === Hm
};
Je.isProfiler = function(e) {
    return pr(e) === Tf
};
Je.isStrictMode = function(e) {
    return pr(e) === Of
};
Je.isSuspense = function(e) {
    return pr(e) === Af
};
Je.isSuspenseList = function(e) {
    return pr(e) === Df
};
Je.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === _f || e === Tf || e === Of || e === Af || e === Df || e === IM || typeof e == "object" && e !== null && (e.$$typeof === Mf || e.$$typeof === Nf || e.$$typeof === If || e.$$typeof === Rf || e.$$typeof === Pf || e.$$typeof === DC || e.getModuleId !== void 0)
};
Je.typeOf = pr;

function RM() {
    const e = pM();
    let t = null,
        n = null;
    return {
        clear() {
            t = null, n = null
        },
        notify() {
            e(() => {
                let r = t;
                for (; r;) r.callback(), r = r.next
            })
        },
        get() {
            let r = [],
                i = t;
            for (; i;) r.push(i), i = i.next;
            return r
        },
        subscribe(r) {
            let i = !0,
                l = n = {
                    callback: r,
                    next: null,
                    prev: n
                };
            return l.prev ? l.prev.next = l : t = l,
                function() {
                    !i || t === null || (i = !1, l.next ? l.next.prev = l.prev : n = l.prev, l.prev ? l.prev.next = l.next : t = l.next)
                }
        }
    }
}
const Sw = {
    notify() {},
    get: () => []
};

function PM(e, t) {
    let n, r = Sw,
        i = 0,
        l = !1;

    function s(S) {
        p();
        const A = r.subscribe(S);
        let y = !1;
        return () => {
            y || (y = !0, A(), g())
        }
    }

    function a() {
        r.notify()
    }

    function f() {
        E.onStateChange && E.onStateChange()
    }

    function d() {
        return l
    }

    function p() {
        i++, n || (n = t ? t.addNestedSub(f) : e.subscribe(f), r = RM())
    }

    function g() {
        i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Sw)
    }

    function v() {
        l || (l = !0, p())
    }

    function m() {
        l && (l = !1, g())
    }
    const E = {
        addNestedSub: s,
        notifyNestedSubs: a,
        handleChangeWrapper: f,
        isSubscribed: d,
        trySubscribe: v,
        tryUnsubscribe: m,
        getListeners: () => r
    };
    return E
}
const AM = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    DM = AM ? R.useLayoutEffect : R.useEffect;

function NM({
    store: e,
    context: t,
    children: n,
    serverState: r,
    stabilityCheck: i = "once",
    noopCheck: l = "once"
}) {
    const s = R.useMemo(() => {
            const d = PM(e);
            return {
                store: e,
                subscription: d,
                getServerState: r ? () => r : void 0,
                stabilityCheck: i,
                noopCheck: l
            }
        }, [e, r, i, l]),
        a = R.useMemo(() => e.getState(), [e]);
    DM(() => {
        const {
            subscription: d
        } = s;
        return d.onStateChange = d.notifyNestedSubs, d.trySubscribe(), a !== e.getState() && d.notifyNestedSubs(), () => {
            d.tryUnsubscribe(), d.onStateChange = void 0
        }
    }, [s, a]);
    const f = t || eo;
    return R.createElement(f.Provider, {
        value: s
    }, n)
}

function NC(e = eo) {
    const t = e === eo ? OC : Fm(e);
    return function() {
        const {
            store: r
        } = t();
        return r
    }
}
const MM = NC();

function LM(e = eo) {
    const t = e === eo ? MM : NC(e);
    return function() {
        return t().dispatch
    }
}
const FM = LM();
mM(cM.useSyncExternalStoreWithSelector);
dM(tu.unstable_batchedUpdates);
const MC = R.createContext({
    dragDropManager: void 0
});

function ws(e) {
    "@babel/helpers - typeof";
    return ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, ws(e)
}

function zM(e, t) {
    if (ws(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (ws(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function $M(e) {
    var t = zM(e, "string");
    return ws(t) === "symbol" ? t : String(t)
}

function BM(e, t, n) {
    return t = $M(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Ew(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Cw(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ew(Object(n), !0).forEach(function(r) {
            BM(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ew(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function Kt(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var kw = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }(),
    Vp = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    },
    Nc = {
        INIT: "@@redux/INIT" + Vp(),
        REPLACE: "@@redux/REPLACE" + Vp(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + Vp()
        }
    };

function UM(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}

function Wm(e, t, n) {
    var r;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(Kt(0));
    if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
        if (typeof n != "function") throw new Error(Kt(1));
        return n(Wm)(e, t)
    }
    if (typeof e != "function") throw new Error(Kt(2));
    var i = e,
        l = t,
        s = [],
        a = s,
        f = !1;

    function d() {
        a === s && (a = s.slice())
    }

    function p() {
        if (f) throw new Error(Kt(3));
        return l
    }

    function g(S) {
        if (typeof S != "function") throw new Error(Kt(4));
        if (f) throw new Error(Kt(5));
        var A = !0;
        return d(), a.push(S),
            function() {
                if (A) {
                    if (f) throw new Error(Kt(6));
                    A = !1, d();
                    var x = a.indexOf(S);
                    a.splice(x, 1), s = null
                }
            }
    }

    function v(S) {
        if (!UM(S)) throw new Error(Kt(7));
        if (typeof S.type > "u") throw new Error(Kt(8));
        if (f) throw new Error(Kt(9));
        try {
            f = !0, l = i(l, S)
        } finally {
            f = !1
        }
        for (var A = s = a, y = 0; y < A.length; y++) {
            var x = A[y];
            x()
        }
        return S
    }

    function m(S) {
        if (typeof S != "function") throw new Error(Kt(10));
        i = S, v({
            type: Nc.REPLACE
        })
    }

    function E() {
        var S, A = g;
        return S = {
            subscribe: function(x) {
                if (typeof x != "object" || x === null) throw new Error(Kt(11));

                function k() {
                    x.next && x.next(p())
                }
                k();
                var P = A(k);
                return {
                    unsubscribe: P
                }
            }
        }, S[kw] = function() {
            return this
        }, S
    }
    return v({
        type: Nc.INIT
    }), r = {
        dispatch: v,
        subscribe: g,
        getState: p,
        replaceReducer: m
    }, r[kw] = E, r
}

function jM(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t],
            r = n(void 0, {
                type: Nc.INIT
            });
        if (typeof r > "u") throw new Error(Kt(12));
        if (typeof n(void 0, {
                type: Nc.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(Kt(13))
    })
}

function HM(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i])
    }
    var l = Object.keys(n),
        s;
    try {
        jM(n)
    } catch (a) {
        s = a
    }
    return function(f, d) {
        if (f === void 0 && (f = {}), s) throw s;
        for (var p = !1, g = {}, v = 0; v < l.length; v++) {
            var m = l[v],
                E = n[m],
                S = f[m],
                A = E(S, d);
            if (typeof A > "u") throw d && d.type, new Error(Kt(14));
            g[m] = A, p = p || A !== S
        }
        return p = p || l.length !== Object.keys(f).length, p ? g : f
    }
}

function Mc() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.length === 0 ? function(r) {
        return r
    } : t.length === 1 ? t[0] : t.reduce(function(r, i) {
        return function() {
            return r(i.apply(void 0, arguments))
        }
    })
}

function WM() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(r) {
        return function() {
            var i = r.apply(void 0, arguments),
                l = function() {
                    throw new Error(Kt(15))
                },
                s = {
                    getState: i.getState,
                    dispatch: function() {
                        return l.apply(void 0, arguments)
                    }
                },
                a = t.map(function(f) {
                    return f(s)
                });
            return l = Mc.apply(void 0, a)(i.dispatch), Cw(Cw({}, i), {}, {
                dispatch: l
            })
        }
    }
}

function be(e, t, ...n) {
    if (VM() && t === void 0) throw new Error("invariant requires an error message argument");
    if (!e) {
        let r;
        if (t === void 0) r = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            let i = 0;
            r = new Error(t.replace(/%s/g, function() {
                return n[i++]
            })), r.name = "Invariant Violation"
        }
        throw r.framesToPop = 1, r
    }
}

function VM() {
    return typeof process < "u" && {}.NODE_ENV === "production"
}

function qM(e, t, n) {
    return t.split(".").reduce((r, i) => r && r[i] ? r[i] : n || null, e)
}

function GM(e, t) {
    return e.filter(n => n !== t)
}

function LC(e) {
    return typeof e == "object"
}

function KM(e, t) {
    const n = new Map,
        r = l => {
            n.set(l, n.has(l) ? n.get(l) + 1 : 1)
        };
    e.forEach(r), t.forEach(r);
    const i = [];
    return n.forEach((l, s) => {
        l === 1 && i.push(s)
    }), i
}

function QM(e, t) {
    return e.filter(n => t.indexOf(n) > -1)
}
const Vm = "dnd-core/INIT_COORDS",
    Lf = "dnd-core/BEGIN_DRAG",
    qm = "dnd-core/PUBLISH_DRAG_SOURCE",
    Ff = "dnd-core/HOVER",
    zf = "dnd-core/DROP",
    $f = "dnd-core/END_DRAG";

function bw(e, t) {
    return {
        type: Vm,
        payload: {
            sourceClientOffset: t || null,
            clientOffset: e || null
        }
    }
}
const YM = {
    type: Vm,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};

function XM(e) {
    return function(n = [], r = {
        publishSource: !0
    }) {
        const {
            publishSource: i = !0,
            clientOffset: l,
            getSourceClientOffset: s
        } = r, a = e.getMonitor(), f = e.getRegistry();
        e.dispatch(bw(l)), ZM(n, a, f);
        const d = tL(n, a);
        if (d == null) {
            e.dispatch(YM);
            return
        }
        let p = null;
        if (l) {
            if (!s) throw new Error("getSourceClientOffset must be defined");
            JM(s), p = s(d)
        }
        e.dispatch(bw(l, p));
        const v = f.getSource(d).beginDrag(a, d);
        if (v == null) return;
        eL(v), f.pinSource(d);
        const m = f.getSourceType(d);
        return {
            type: Lf,
            payload: {
                itemType: m,
                item: v,
                sourceId: d,
                clientOffset: l || null,
                sourceClientOffset: p || null,
                isSourcePublic: !!i
            }
        }
    }
}

function ZM(e, t, n) {
    be(!t.isDragging(), "Cannot call beginDrag while dragging."), e.forEach(function(r) {
        be(n.getSource(r), "Expected sourceIds to be registered.")
    })
}

function JM(e) {
    be(typeof e == "function", "When clientOffset is provided, getSourceClientOffset must be a function.")
}

function eL(e) {
    be(LC(e), "Item must be an object.")
}

function tL(e, t) {
    let n = null;
    for (let r = e.length - 1; r >= 0; r--)
        if (t.canDragSource(e[r])) {
            n = e[r];
            break
        } return n
}

function nL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function rL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            nL(e, i, n[i])
        })
    }
    return e
}

function iL(e) {
    return function(n = {}) {
        const r = e.getMonitor(),
            i = e.getRegistry();
        oL(r), sL(r).forEach((s, a) => {
            const f = lL(s, a, i, r),
                d = {
                    type: zf,
                    payload: {
                        dropResult: rL({}, n, f)
                    }
                };
            e.dispatch(d)
        })
    }
}

function oL(e) {
    be(e.isDragging(), "Cannot call drop while not dragging."), be(!e.didDrop(), "Cannot call drop twice during one drag operation.")
}

function lL(e, t, n, r) {
    const i = n.getTarget(e);
    let l = i ? i.drop(r, e) : void 0;
    return uL(l), typeof l > "u" && (l = t === 0 ? {} : r.getDropResult()), l
}

function uL(e) {
    be(typeof e > "u" || LC(e), "Drop result must either be an object or undefined.")
}

function sL(e) {
    const t = e.getTargetIds().filter(e.canDropOnTarget, e);
    return t.reverse(), t
}

function aL(e) {
    return function() {
        const n = e.getMonitor(),
            r = e.getRegistry();
        cL(n);
        const i = n.getSourceId();
        return i != null && (r.getSource(i, !0).endDrag(n, i), r.unpinSource()), {
            type: $f
        }
    }
}

function cL(e) {
    be(e.isDragging(), "Cannot call endDrag while not dragging.")
}

function hg(e, t) {
    return t === null ? e === null : Array.isArray(e) ? e.some(n => n === t) : e === t
}

function fL(e) {
    return function(n, {
        clientOffset: r
    } = {}) {
        dL(n);
        const i = n.slice(0),
            l = e.getMonitor(),
            s = e.getRegistry(),
            a = l.getItemType();
        return hL(i, s, a), pL(i, l, s), gL(i, l, s), {
            type: Ff,
            payload: {
                targetIds: i,
                clientOffset: r || null
            }
        }
    }
}

function dL(e) {
    be(Array.isArray(e), "Expected targetIds to be an array.")
}

function pL(e, t, n) {
    be(t.isDragging(), "Cannot call hover while not dragging."), be(!t.didDrop(), "Cannot call hover after drop.");
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        be(e.lastIndexOf(i) === r, "Expected targetIds to be unique in the passed array.");
        const l = n.getTarget(i);
        be(l, "Expected targetIds to be registered.")
    }
}

function hL(e, t, n) {
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r],
            l = t.getTargetType(i);
        hg(l, n) || e.splice(r, 1)
    }
}

function gL(e, t, n) {
    e.forEach(function(r) {
        n.getTarget(r).hover(t, r)
    })
}

function mL(e) {
    return function() {
        if (e.getMonitor().isDragging()) return {
            type: qm
        }
    }
}

function vL(e) {
    return {
        beginDrag: XM(e),
        publishDragSource: mL(e),
        hover: fL(e),
        drop: iL(e),
        endDrag: aL(e)
    }
}
class yL {
    receiveBackend(t) {
        this.backend = t
    }
    getMonitor() {
        return this.monitor
    }
    getBackend() {
        return this.backend
    }
    getRegistry() {
        return this.monitor.registry
    }
    getActions() {
        const t = this,
            {
                dispatch: n
            } = this.store;

        function r(l) {
            return (...s) => {
                const a = l.apply(t, s);
                typeof a < "u" && n(a)
            }
        }
        const i = vL(this);
        return Object.keys(i).reduce((l, s) => {
            const a = i[s];
            return l[s] = r(a), l
        }, {})
    }
    dispatch(t) {
        this.store.dispatch(t)
    }
    constructor(t, n) {
        this.isSetUp = !1, this.handleRefCountChange = () => {
            const r = this.store.getState().refCount > 0;
            this.backend && (r && !this.isSetUp ? (this.backend.setup(), this.isSetUp = !0) : !r && this.isSetUp && (this.backend.teardown(), this.isSetUp = !1))
        }, this.store = t, this.monitor = n, t.subscribe(this.handleRefCountChange)
    }
}

function wL(e, t) {
    return {
        x: e.x + t.x,
        y: e.y + t.y
    }
}

function FC(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function xL(e) {
    const {
        clientOffset: t,
        initialClientOffset: n,
        initialSourceClientOffset: r
    } = e;
    return !t || !n || !r ? null : FC(wL(t, r), n)
}

function SL(e) {
    const {
        clientOffset: t,
        initialClientOffset: n
    } = e;
    return !t || !n ? null : FC(t, n)
}
const Qu = [],
    Gm = [];
Qu.__IS_NONE__ = !0;
Gm.__IS_ALL__ = !0;

function EL(e, t) {
    return e === Qu ? !1 : e === Gm || typeof t > "u" ? !0 : QM(t, e).length > 0
}
class CL {
    subscribeToStateChange(t, n = {}) {
        const {
            handlerIds: r
        } = n;
        be(typeof t == "function", "listener must be a function."), be(typeof r > "u" || Array.isArray(r), "handlerIds, when specified, must be an array of strings.");
        let i = this.store.getState().stateId;
        const l = () => {
            const s = this.store.getState(),
                a = s.stateId;
            try {
                a === i || a === i + 1 && !EL(s.dirtyHandlerIds, r) || t()
            } finally {
                i = a
            }
        };
        return this.store.subscribe(l)
    }
    subscribeToOffsetChange(t) {
        be(typeof t == "function", "listener must be a function.");
        let n = this.store.getState().dragOffset;
        const r = () => {
            const i = this.store.getState().dragOffset;
            i !== n && (n = i, t())
        };
        return this.store.subscribe(r)
    }
    canDragSource(t) {
        if (!t) return !1;
        const n = this.registry.getSource(t);
        return be(n, `Expected to find a valid source. sourceId=${t}`), this.isDragging() ? !1 : n.canDrag(this, t)
    }
    canDropOnTarget(t) {
        if (!t) return !1;
        const n = this.registry.getTarget(t);
        if (be(n, `Expected to find a valid target. targetId=${t}`), !this.isDragging() || this.didDrop()) return !1;
        const r = this.registry.getTargetType(t),
            i = this.getItemType();
        return hg(r, i) && n.canDrop(this, t)
    }
    isDragging() {
        return !!this.getItemType()
    }
    isDraggingSource(t) {
        if (!t) return !1;
        const n = this.registry.getSource(t, !0);
        if (be(n, `Expected to find a valid source. sourceId=${t}`), !this.isDragging() || !this.isSourcePublic()) return !1;
        const r = this.registry.getSourceType(t),
            i = this.getItemType();
        return r !== i ? !1 : n.isDragging(this, t)
    }
    isOverTarget(t, n = {
        shallow: !1
    }) {
        if (!t) return !1;
        const {
            shallow: r
        } = n;
        if (!this.isDragging()) return !1;
        const i = this.registry.getTargetType(t),
            l = this.getItemType();
        if (l && !hg(i, l)) return !1;
        const s = this.getTargetIds();
        if (!s.length) return !1;
        const a = s.indexOf(t);
        return r ? a === s.length - 1 : a > -1
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType
    }
    getItem() {
        return this.store.getState().dragOperation.item
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop
    }
    isSourcePublic() {
        return !!this.store.getState().dragOperation.isSourcePublic
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset
    }
    getSourceClientOffset() {
        return xL(this.store.getState().dragOffset)
    }
    getDifferenceFromInitialOffset() {
        return SL(this.store.getState().dragOffset)
    }
    constructor(t, n) {
        this.store = t, this.registry = n
    }
}
const _w = typeof global < "u" ? global : self,
    zC = _w.MutationObserver || _w.WebKitMutationObserver;

function $C(e) {
    return function() {
        const n = setTimeout(i, 0),
            r = setInterval(i, 50);

        function i() {
            clearTimeout(n), clearInterval(r), e()
        }
    }
}

function kL(e) {
    let t = 1;
    const n = new zC(e),
        r = document.createTextNode("");
    return n.observe(r, {
            characterData: !0
        }),
        function() {
            t = -t, r.data = t
        }
}
const bL = typeof zC == "function" ? kL : $C;
class _L {
    enqueueTask(t) {
        const {
            queue: n,
            requestFlush: r
        } = this;
        n.length || (r(), this.flushing = !0), n[n.length] = t
    }
    constructor() {
        this.queue = [], this.pendingErrors = [], this.flushing = !1, this.index = 0, this.capacity = 1024, this.flush = () => {
            const {
                queue: t
            } = this;
            for (; this.index < t.length;) {
                const n = this.index;
                if (this.index++, t[n].call(), this.index > this.capacity) {
                    for (let r = 0, i = t.length - this.index; r < i; r++) t[r] = t[r + this.index];
                    t.length -= this.index, this.index = 0
                }
            }
            t.length = 0, this.index = 0, this.flushing = !1
        }, this.registerPendingError = t => {
            this.pendingErrors.push(t), this.requestErrorThrow()
        }, this.requestFlush = bL(this.flush), this.requestErrorThrow = $C(() => {
            if (this.pendingErrors.length) throw this.pendingErrors.shift()
        })
    }
}
class OL {
    call() {
        try {
            this.task && this.task()
        } catch (t) {
            this.onError(t)
        } finally {
            this.task = null, this.release(this)
        }
    }
    constructor(t, n) {
        this.onError = t, this.release = n, this.task = null
    }
}
class TL {
    create(t) {
        const n = this.freeTasks,
            r = n.length ? n.pop() : new OL(this.onError, i => n[n.length] = i);
        return r.task = t, r
    }
    constructor(t) {
        this.onError = t, this.freeTasks = []
    }
}
const BC = new _L,
    IL = new TL(BC.registerPendingError);

function RL(e) {
    BC.enqueueTask(IL.create(e))
}
const Km = "dnd-core/ADD_SOURCE",
    Qm = "dnd-core/ADD_TARGET",
    Ym = "dnd-core/REMOVE_SOURCE",
    Bf = "dnd-core/REMOVE_TARGET";

function PL(e) {
    return {
        type: Km,
        payload: {
            sourceId: e
        }
    }
}

function AL(e) {
    return {
        type: Qm,
        payload: {
            targetId: e
        }
    }
}

function DL(e) {
    return {
        type: Ym,
        payload: {
            sourceId: e
        }
    }
}

function NL(e) {
    return {
        type: Bf,
        payload: {
            targetId: e
        }
    }
}

function ML(e) {
    be(typeof e.canDrag == "function", "Expected canDrag to be a function."), be(typeof e.beginDrag == "function", "Expected beginDrag to be a function."), be(typeof e.endDrag == "function", "Expected endDrag to be a function.")
}

function LL(e) {
    be(typeof e.canDrop == "function", "Expected canDrop to be a function."), be(typeof e.hover == "function", "Expected hover to be a function."), be(typeof e.drop == "function", "Expected beginDrag to be a function.")
}

function gg(e, t) {
    if (t && Array.isArray(e)) {
        e.forEach(n => gg(n, !1));
        return
    }
    be(typeof e == "string" || typeof e == "symbol", t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
}
var lr;
(function(e) {
    e.SOURCE = "SOURCE", e.TARGET = "TARGET"
})(lr || (lr = {}));
let FL = 0;

function zL() {
    return FL++
}

function $L(e) {
    const t = zL().toString();
    switch (e) {
        case lr.SOURCE:
            return `S${t}`;
        case lr.TARGET:
            return `T${t}`;
        default:
            throw new Error(`Unknown Handler Role: ${e}`)
    }
}

function Ow(e) {
    switch (e[0]) {
        case "S":
            return lr.SOURCE;
        case "T":
            return lr.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${e}`)
    }
}

function Tw(e, t) {
    const n = e.entries();
    let r = !1;
    do {
        const {
            done: i,
            value: [, l]
        } = n.next();
        if (l === t) return !0;
        r = !!i
    } while (!r);
    return !1
}
class BL {
    addSource(t, n) {
        gg(t), ML(n);
        const r = this.addHandler(lr.SOURCE, t, n);
        return this.store.dispatch(PL(r)), r
    }
    addTarget(t, n) {
        gg(t, !0), LL(n);
        const r = this.addHandler(lr.TARGET, t, n);
        return this.store.dispatch(AL(r)), r
    }
    containsHandler(t) {
        return Tw(this.dragSources, t) || Tw(this.dropTargets, t)
    }
    getSource(t, n = !1) {
        return be(this.isSourceId(t), "Expected a valid source ID."), n && t === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(t)
    }
    getTarget(t) {
        return be(this.isTargetId(t), "Expected a valid target ID."), this.dropTargets.get(t)
    }
    getSourceType(t) {
        return be(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t)
    }
    getTargetType(t) {
        return be(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t)
    }
    isSourceId(t) {
        return Ow(t) === lr.SOURCE
    }
    isTargetId(t) {
        return Ow(t) === lr.TARGET
    }
    removeSource(t) {
        be(this.getSource(t), "Expected an existing source."), this.store.dispatch(DL(t)), RL(() => {
            this.dragSources.delete(t), this.types.delete(t)
        })
    }
    removeTarget(t) {
        be(this.getTarget(t), "Expected an existing target."), this.store.dispatch(NL(t)), this.dropTargets.delete(t), this.types.delete(t)
    }
    pinSource(t) {
        const n = this.getSource(t);
        be(n, "Expected an existing source."), this.pinnedSourceId = t, this.pinnedSource = n
    }
    unpinSource() {
        be(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
    }
    addHandler(t, n, r) {
        const i = $L(t);
        return this.types.set(i, n), t === lr.SOURCE ? this.dragSources.set(i, r) : t === lr.TARGET && this.dropTargets.set(i, r), i
    }
    constructor(t) {
        this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = t
    }
}
const UL = (e, t) => e === t;

function jL(e, t) {
    return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y
}

function HL(e, t, n = UL) {
    if (e.length !== t.length) return !1;
    for (let r = 0; r < e.length; ++r)
        if (!n(e[r], t[r])) return !1;
    return !0
}

function WL(e = Qu, t) {
    switch (t.type) {
        case Ff:
            break;
        case Km:
        case Qm:
        case Bf:
        case Ym:
            return Qu;
        case Lf:
        case qm:
        case $f:
        case zf:
        default:
            return Gm
    }
    const {
        targetIds: n = [],
        prevTargetIds: r = []
    } = t.payload, i = KM(n, r);
    if (!(i.length > 0 || !HL(n, r))) return Qu;
    const s = r[r.length - 1],
        a = n[n.length - 1];
    return s !== a && (s && i.push(s), a && i.push(a)), i
}

function VL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function qL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            VL(e, i, n[i])
        })
    }
    return e
}
const Iw = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};

function GL(e = Iw, t) {
    const {
        payload: n
    } = t;
    switch (t.type) {
        case Vm:
        case Lf:
            return {
                initialSourceClientOffset: n.sourceClientOffset, initialClientOffset: n.clientOffset, clientOffset: n.clientOffset
            };
        case Ff:
            return jL(e.clientOffset, n.clientOffset) ? e : qL({}, e, {
                clientOffset: n.clientOffset
            });
        case $f:
        case zf:
            return Iw;
        default:
            return e
    }
}

function KL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function cl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            KL(e, i, n[i])
        })
    }
    return e
}
const QL = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: !1,
    isSourcePublic: null
};

function YL(e = QL, t) {
    const {
        payload: n
    } = t;
    switch (t.type) {
        case Lf:
            return cl({}, e, {
                itemType: n.itemType,
                item: n.item,
                sourceId: n.sourceId,
                isSourcePublic: n.isSourcePublic,
                dropResult: null,
                didDrop: !1
            });
        case qm:
            return cl({}, e, {
                isSourcePublic: !0
            });
        case Ff:
            return cl({}, e, {
                targetIds: n.targetIds
            });
        case Bf:
            return e.targetIds.indexOf(n.targetId) === -1 ? e : cl({}, e, {
                targetIds: GM(e.targetIds, n.targetId)
            });
        case zf:
            return cl({}, e, {
                dropResult: n.dropResult,
                didDrop: !0,
                targetIds: []
            });
        case $f:
            return cl({}, e, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: !1,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return e
    }
}

function XL(e = 0, t) {
    switch (t.type) {
        case Km:
        case Qm:
            return e + 1;
        case Ym:
        case Bf:
            return e - 1;
        default:
            return e
    }
}

function ZL(e = 0) {
    return e + 1
}

function JL(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function e3(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {},
            r = Object.keys(n);
        typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
            return Object.getOwnPropertyDescriptor(n, i).enumerable
        }))), r.forEach(function(i) {
            JL(e, i, n[i])
        })
    }
    return e
}

function t3(e = {}, t) {
    return {
        dirtyHandlerIds: WL(e.dirtyHandlerIds, {
            type: t.type,
            payload: e3({}, t.payload, {
                prevTargetIds: qM(e, "dragOperation.targetIds", [])
            })
        }),
        dragOffset: GL(e.dragOffset, t),
        refCount: XL(e.refCount, t),
        dragOperation: YL(e.dragOperation, t),
        stateId: ZL(e.stateId)
    }
}

function n3(e, t = void 0, n = {}, r = !1) {
    const i = r3(r),
        l = new CL(i, new BL(i)),
        s = new yL(i, l),
        a = e(s, t, n);
    return s.receiveBackend(a), s
}

function r3(e) {
    const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
    return Wm(t3, e && t && t({
        name: "dnd-core",
        instanceId: "dnd-core"
    }))
}

function i3(e, t) {
    if (e == null) return {};
    var n = o3(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++) r = l[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function o3(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, l;
    for (l = 0; l < r.length; l++) i = r[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
let Rw = 0;
const ic = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var l3 = R.memo(function(t) {
    var {
        children: n
    } = t, r = i3(t, ["children"]);
    const [i, l] = u3(r);
    return R.useEffect(() => {
        if (l) {
            const s = UC();
            return ++Rw, () => {
                --Rw === 0 && (s[ic] = null)
            }
        }
    }, []), $(MC.Provider, {
        value: i,
        children: n
    })
});

function u3(e) {
    if ("manager" in e) return [{
        dragDropManager: e.manager
    }, !1];
    const t = s3(e.backend, e.context, e.options, e.debugMode),
        n = !e.context;
    return [t, n]
}

function s3(e, t = UC(), n, r) {
    const i = t;
    return i[ic] || (i[ic] = {
        dragDropManager: n3(e, t, n, r)
    }), i[ic]
}

function UC() {
    return typeof global < "u" ? global : window
}
var a3 = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1;
        var r, i, l;
        if (Array.isArray(t)) {
            if (r = t.length, r != n.length) return !1;
            for (i = r; i-- !== 0;)
                if (!e(t[i], n[i])) return !1;
            return !0
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if (l = Object.keys(t), r = l.length, r !== Object.keys(n).length) return !1;
        for (i = r; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(n, l[i])) return !1;
        for (i = r; i-- !== 0;) {
            var s = l[i];
            if (!e(t[s], n[s])) return !1
        }
        return !0
    }
    return t !== t && n !== n
};
const c3 = io(a3),
    $o = typeof window < "u" ? R.useLayoutEffect : R.useEffect;

function jC(e, t, n) {
    const [r, i] = R.useState(() => t(e)), l = R.useCallback(() => {
        const s = t(e);
        c3(r, s) || (i(s), n && n())
    }, [r, e, n]);
    return $o(l), [r, l]
}

function f3(e, t, n) {
    const [r, i] = jC(e, t, n);
    return $o(function() {
        const s = e.getHandlerId();
        if (s != null) return e.subscribeToStateChange(i, {
            handlerIds: [s]
        })
    }, [e, i]), r
}

function HC(e, t, n) {
    return f3(t, e || (() => ({})), () => n.reconnect())
}

function WC(e, t) {
    const n = [...t || []];
    return t == null && typeof e != "function" && n.push(e), R.useMemo(() => typeof e == "function" ? e() : e, n)
}

function d3(e) {
    return R.useMemo(() => e.hooks.dragSource(), [e])
}

function p3(e) {
    return R.useMemo(() => e.hooks.dragPreview(), [e])
}
let qp = !1,
    Gp = !1;
class h3 {
    receiveHandlerId(t) {
        this.sourceId = t
    }
    getHandlerId() {
        return this.sourceId
    }
    canDrag() {
        be(!qp, "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            return qp = !0, this.internalMonitor.canDragSource(this.sourceId)
        } finally {
            qp = !1
        }
    }
    isDragging() {
        if (!this.sourceId) return !1;
        be(!Gp, "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");
        try {
            return Gp = !0, this.internalMonitor.isDraggingSource(this.sourceId)
        } finally {
            Gp = !1
        }
    }
    subscribeToStateChange(t, n) {
        return this.internalMonitor.subscribeToStateChange(t, n)
    }
    isDraggingSource(t) {
        return this.internalMonitor.isDraggingSource(t)
    }
    isOverTarget(t, n) {
        return this.internalMonitor.isOverTarget(t, n)
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds()
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic()
    }
    getSourceId() {
        return this.internalMonitor.getSourceId()
    }
    subscribeToOffsetChange(t) {
        return this.internalMonitor.subscribeToOffsetChange(t)
    }
    canDragSource(t) {
        return this.internalMonitor.canDragSource(t)
    }
    canDropOnTarget(t) {
        return this.internalMonitor.canDropOnTarget(t)
    }
    getItemType() {
        return this.internalMonitor.getItemType()
    }
    getItem() {
        return this.internalMonitor.getItem()
    }
    getDropResult() {
        return this.internalMonitor.getDropResult()
    }
    didDrop() {
        return this.internalMonitor.didDrop()
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset()
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset()
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset()
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset()
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset()
    }
    constructor(t) {
        this.sourceId = null, this.internalMonitor = t.getMonitor()
    }
}
let Kp = !1;
class g3 {
    receiveHandlerId(t) {
        this.targetId = t
    }
    getHandlerId() {
        return this.targetId
    }
    subscribeToStateChange(t, n) {
        return this.internalMonitor.subscribeToStateChange(t, n)
    }
    canDrop() {
        if (!this.targetId) return !1;
        be(!Kp, "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");
        try {
            return Kp = !0, this.internalMonitor.canDropOnTarget(this.targetId)
        } finally {
            Kp = !1
        }
    }
    isOver(t) {
        return this.targetId ? this.internalMonitor.isOverTarget(this.targetId, t) : !1
    }
    getItemType() {
        return this.internalMonitor.getItemType()
    }
    getItem() {
        return this.internalMonitor.getItem()
    }
    getDropResult() {
        return this.internalMonitor.getDropResult()
    }
    didDrop() {
        return this.internalMonitor.didDrop()
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset()
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset()
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset()
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset()
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset()
    }
    constructor(t) {
        this.targetId = null, this.internalMonitor = t.getMonitor()
    }
}

function m3(e, t, n) {
    const r = n.getRegistry(),
        i = r.addTarget(e, t);
    return [i, () => r.removeTarget(i)]
}

function v3(e, t, n) {
    const r = n.getRegistry(),
        i = r.addSource(e, t);
    return [i, () => r.removeSource(i)]
}

function mg(e, t, n, r) {
    let i = n ? n.call(r, e, t) : void 0;
    if (i !== void 0) return !!i;
    if (e === t) return !0;
    if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
    const l = Object.keys(e),
        s = Object.keys(t);
    if (l.length !== s.length) return !1;
    const a = Object.prototype.hasOwnProperty.bind(t);
    for (let f = 0; f < l.length; f++) {
        const d = l[f];
        if (!a(d)) return !1;
        const p = e[d],
            g = t[d];
        if (i = n ? n.call(r, p, g, d) : void 0, i === !1 || i === void 0 && p !== g) return !1
    }
    return !0
}

function vg(e) {
    return e !== null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function y3(e) {
    if (typeof e.type == "string") return;
    const t = e.type.displayName || e.type.name || "the component";
    throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)
}

function w3(e) {
    return (t = null, n = null) => {
        if (!R.isValidElement(t)) {
            const l = t;
            return e(l, n), l
        }
        const r = t;
        return y3(r), x3(r, n ? l => e(l, n) : e)
    }
}

function VC(e) {
    const t = {};
    return Object.keys(e).forEach(n => {
        const r = e[n];
        if (n.endsWith("Ref")) t[n] = e[n];
        else {
            const i = w3(r);
            t[n] = () => i
        }
    }), t
}

function Pw(e, t) {
    typeof e == "function" ? e(t) : e.current = t
}

function x3(e, t) {
    const n = e.ref;
    return be(typeof n != "string", "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n ? R.cloneElement(e, {
        ref: r => {
            Pw(n, r), Pw(t, r)
        }
    }) : R.cloneElement(e, {
        ref: t
    })
}
class S3 {
    receiveHandlerId(t) {
        this.handlerId !== t && (this.handlerId = t, this.reconnect())
    }
    get connectTarget() {
        return this.dragSource
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal
    }
    set dragSourceOptions(t) {
        this.dragSourceOptionsInternal = t
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal
    }
    set dragPreviewOptions(t) {
        this.dragPreviewOptionsInternal = t
    }
    reconnect() {
        const t = this.reconnectDragSource();
        this.reconnectDragPreview(t)
    }
    reconnectDragSource() {
        const t = this.dragSource,
            n = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        return n && this.disconnectDragSource(), this.handlerId ? t ? (n && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragSource = t, this.lastConnectedDragSourceOptions = this.dragSourceOptions, this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, t, this.dragSourceOptions)), n) : (this.lastConnectedDragSource = t, n) : n
    }
    reconnectDragPreview(t = !1) {
        const n = this.dragPreview,
            r = t || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (r && this.disconnectDragPreview(), !!this.handlerId) {
            if (!n) {
                this.lastConnectedDragPreview = n;
                return
            }
            r && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDragPreview = n, this.lastConnectedDragPreviewOptions = this.dragPreviewOptions, this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, n, this.dragPreviewOptions))
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview
    }
    didDragSourceOptionsChange() {
        return !mg(this.lastConnectedDragSourceOptions, this.dragSourceOptions)
    }
    didDragPreviewOptionsChange() {
        return !mg(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions)
    }
    disconnectDragSource() {
        this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), this.dragSourceUnsubscribe = void 0)
    }
    disconnectDragPreview() {
        this.dragPreviewUnsubscribe && (this.dragPreviewUnsubscribe(), this.dragPreviewUnsubscribe = void 0, this.dragPreviewNode = null, this.dragPreviewRef = null)
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current
    }
    clearDragSource() {
        this.dragSourceNode = null, this.dragSourceRef = null
    }
    clearDragPreview() {
        this.dragPreviewNode = null, this.dragPreviewRef = null
    }
    constructor(t) {
        this.hooks = VC({
            dragSource: (n, r) => {
                this.clearDragSource(), this.dragSourceOptions = r || null, vg(n) ? this.dragSourceRef = n : this.dragSourceNode = n, this.reconnectDragSource()
            },
            dragPreview: (n, r) => {
                this.clearDragPreview(), this.dragPreviewOptions = r || null, vg(n) ? this.dragPreviewRef = n : this.dragPreviewNode = n, this.reconnectDragPreview()
            }
        }), this.handlerId = null, this.dragSourceRef = null, this.dragSourceOptionsInternal = null, this.dragPreviewRef = null, this.dragPreviewOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDragSource = null, this.lastConnectedDragSourceOptions = null, this.lastConnectedDragPreview = null, this.lastConnectedDragPreviewOptions = null, this.backend = t
    }
}
class E3 {
    get connectTarget() {
        return this.dropTarget
    }
    reconnect() {
        const t = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        t && this.disconnectDropTarget();
        const n = this.dropTarget;
        if (this.handlerId) {
            if (!n) {
                this.lastConnectedDropTarget = n;
                return
            }
            t && (this.lastConnectedHandlerId = this.handlerId, this.lastConnectedDropTarget = n, this.lastConnectedDropTargetOptions = this.dropTargetOptions, this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, n, this.dropTargetOptions))
        }
    }
    receiveHandlerId(t) {
        t !== this.handlerId && (this.handlerId = t, this.reconnect())
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal
    }
    set dropTargetOptions(t) {
        this.dropTargetOptionsInternal = t
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget
    }
    didOptionsChange() {
        return !mg(this.lastConnectedDropTargetOptions, this.dropTargetOptions)
    }
    disconnectDropTarget() {
        this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), this.unsubscribeDropTarget = void 0)
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current
    }
    clearDropTarget() {
        this.dropTargetRef = null, this.dropTargetNode = null
    }
    constructor(t) {
        this.hooks = VC({
            dropTarget: (n, r) => {
                this.clearDropTarget(), this.dropTargetOptions = r, vg(n) ? this.dropTargetRef = n : this.dropTargetNode = n, this.reconnect()
            }
        }), this.handlerId = null, this.dropTargetRef = null, this.dropTargetOptionsInternal = null, this.lastConnectedHandlerId = null, this.lastConnectedDropTarget = null, this.lastConnectedDropTargetOptions = null, this.backend = t
    }
}

function gi() {
    const {
        dragDropManager: e
    } = R.useContext(MC);
    return be(e != null, "Expected drag drop context"), e
}

function C3(e, t) {
    const n = gi(),
        r = R.useMemo(() => new S3(n.getBackend()), [n]);
    return $o(() => (r.dragSourceOptions = e || null, r.reconnect(), () => r.disconnectDragSource()), [r, e]), $o(() => (r.dragPreviewOptions = t || null, r.reconnect(), () => r.disconnectDragPreview()), [r, t]), r
}

function k3() {
    const e = gi();
    return R.useMemo(() => new h3(e), [e])
}
class b3 {
    beginDrag() {
        const t = this.spec,
            n = this.monitor;
        let r = null;
        return typeof t.item == "object" ? r = t.item : typeof t.item == "function" ? r = t.item(n) : r = {}, r ?? null
    }
    canDrag() {
        const t = this.spec,
            n = this.monitor;
        return typeof t.canDrag == "boolean" ? t.canDrag : typeof t.canDrag == "function" ? t.canDrag(n) : !0
    }
    isDragging(t, n) {
        const r = this.spec,
            i = this.monitor,
            {
                isDragging: l
            } = r;
        return l ? l(i) : n === t.getSourceId()
    }
    endDrag() {
        const t = this.spec,
            n = this.monitor,
            r = this.connector,
            {
                end: i
            } = t;
        i && i(n.getItem(), n), r.reconnect()
    }
    constructor(t, n, r) {
        this.spec = t, this.monitor = n, this.connector = r
    }
}

function _3(e, t, n) {
    const r = R.useMemo(() => new b3(e, t, n), [t, n]);
    return R.useEffect(() => {
        r.spec = e
    }, [e]), r
}

function O3(e) {
    return R.useMemo(() => {
        const t = e.type;
        return be(t != null, "spec.type must be defined"), t
    }, [e])
}

function T3(e, t, n) {
    const r = gi(),
        i = _3(e, t, n),
        l = O3(e);
    $o(function() {
        if (l != null) {
            const [a, f] = v3(l, i, r);
            return t.receiveHandlerId(a), n.receiveHandlerId(a), f
        }
    }, [r, t, n, i, l])
}

function I3(e, t) {
    const n = WC(e, t);
    be(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
    const r = k3(),
        i = C3(n.options, n.previewOptions);
    return T3(n, r, i), [HC(n.collect, r, i), d3(i), p3(i)]
}

function R3(e) {
    const n = gi().getMonitor(),
        [r, i] = jC(n, e);
    return R.useEffect(() => n.subscribeToOffsetChange(i)), R.useEffect(() => n.subscribeToStateChange(i)), r
}

function P3(e) {
    return R.useMemo(() => e.hooks.dropTarget(), [e])
}

function A3(e) {
    const t = gi(),
        n = R.useMemo(() => new E3(t.getBackend()), [t]);
    return $o(() => (n.dropTargetOptions = e || null, n.reconnect(), () => n.disconnectDropTarget()), [e]), n
}

function D3() {
    const e = gi();
    return R.useMemo(() => new g3(e), [e])
}

function N3(e) {
    const {
        accept: t
    } = e;
    return R.useMemo(() => (be(e.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t]), [t])
}
class M3 {
    canDrop() {
        const t = this.spec,
            n = this.monitor;
        return t.canDrop ? t.canDrop(n.getItem(), n) : !0
    }
    hover() {
        const t = this.spec,
            n = this.monitor;
        t.hover && t.hover(n.getItem(), n)
    }
    drop() {
        const t = this.spec,
            n = this.monitor;
        if (t.drop) return t.drop(n.getItem(), n)
    }
    constructor(t, n) {
        this.spec = t, this.monitor = n
    }
}

function L3(e, t) {
    const n = R.useMemo(() => new M3(e, t), [t]);
    return R.useEffect(() => {
        n.spec = e
    }, [e]), n
}

function F3(e, t, n) {
    const r = gi(),
        i = L3(e, t),
        l = N3(e);
    $o(function() {
        const [a, f] = m3(l, i, r);
        return t.receiveHandlerId(a), n.receiveHandlerId(a), f
    }, [r, t, i, n, l.map(s => s.toString()).join("|")])
}

function yg(e, t) {
    const n = WC(e, t),
        r = D3(),
        i = A3(n.options);
    return F3(n, r, i), [HC(n.collect, r, i), P3(i)]
}
var Gi;
(function(e) {
    e.mouse = "mouse", e.touch = "touch", e.keyboard = "keyboard"
})(Gi || (Gi = {}));
class z3 {
    get delay() {
        var t;
        return (t = this.args.delay) !== null && t !== void 0 ? t : 0
    }
    get scrollAngleRanges() {
        return this.args.scrollAngleRanges
    }
    get getDropTargetElementsAtPoint() {
        return this.args.getDropTargetElementsAtPoint
    }
    get ignoreContextMenu() {
        var t;
        return (t = this.args.ignoreContextMenu) !== null && t !== void 0 ? t : !1
    }
    get enableHoverOutsideTarget() {
        var t;
        return (t = this.args.enableHoverOutsideTarget) !== null && t !== void 0 ? t : !1
    }
    get enableKeyboardEvents() {
        var t;
        return (t = this.args.enableKeyboardEvents) !== null && t !== void 0 ? t : !1
    }
    get enableMouseEvents() {
        var t;
        return (t = this.args.enableMouseEvents) !== null && t !== void 0 ? t : !1
    }
    get enableTouchEvents() {
        var t;
        return (t = this.args.enableTouchEvents) !== null && t !== void 0 ? t : !0
    }
    get touchSlop() {
        return this.args.touchSlop || 0
    }
    get delayTouchStart() {
        var t, n, r, i;
        return (i = (r = (t = this.args) === null || t === void 0 ? void 0 : t.delayTouchStart) !== null && r !== void 0 ? r : (n = this.args) === null || n === void 0 ? void 0 : n.delay) !== null && i !== void 0 ? i : 0
    }
    get delayMouseStart() {
        var t, n, r, i;
        return (i = (r = (t = this.args) === null || t === void 0 ? void 0 : t.delayMouseStart) !== null && r !== void 0 ? r : (n = this.args) === null || n === void 0 ? void 0 : n.delay) !== null && i !== void 0 ? i : 0
    }
    get window() {
        if (this.context && this.context.window) return this.context.window;
        if (typeof window < "u") return window
    }
    get document() {
        var t;
        if (!((t = this.context) === null || t === void 0) && t.document) return this.context.document;
        if (this.window) return this.window.document
    }
    get rootElement() {
        var t;
        return ((t = this.args) === null || t === void 0 ? void 0 : t.rootElement) || this.document
    }
    constructor(t, n) {
        this.args = t, this.context = n
    }
}

function $3(e, t, n, r) {
    return Math.sqrt(Math.pow(Math.abs(n - e), 2) + Math.pow(Math.abs(r - t), 2))
}

function B3(e, t, n, r, i) {
    if (!i) return !1;
    const l = Math.atan2(r - t, n - e) * 180 / Math.PI + 180;
    for (let s = 0; s < i.length; ++s) {
        const a = i[s];
        if (a && (a.start == null || l >= a.start) && (a.end == null || l <= a.end)) return !0
    }
    return !1
}
const U3 = {
        Left: 1,
        Right: 2,
        Center: 4
    },
    j3 = {
        Left: 0,
        Center: 1,
        Right: 2
    };

function Qp(e) {
    return e.button === void 0 || e.button === j3.Left
}

function H3(e) {
    return e.buttons === void 0 || (e.buttons & U3.Left) === 0
}

function qC(e) {
    return !!e.targetTouches
}
const W3 = 1;

function V3(e) {
    const t = e.nodeType === W3 ? e : e.parentElement;
    if (!t) return;
    const {
        top: n,
        left: r
    } = t.getBoundingClientRect();
    return {
        x: r,
        y: n
    }
}

function q3(e, t) {
    if (e.targetTouches.length === 1) return Lc(e.targetTouches[0]);
    if (t && e.touches.length === 1 && e.touches[0].target === t.target) return Lc(e.touches[0])
}

function Lc(e, t) {
    return qC(e) ? q3(e, t) : {
        x: e.clientX,
        y: e.clientY
    }
}
const Aw = (() => {
        let e = !1;
        try {
            addEventListener("test", () => {}, Object.defineProperty({}, "passive", {
                get() {
                    return e = !0, !0
                }
            }))
        } catch {}
        return e
    })(),
    Pu = {
        [Gi.mouse]: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
            contextmenu: "contextmenu"
        },
        [Gi.touch]: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend"
        },
        [Gi.keyboard]: {
            keydown: "keydown"
        }
    };
class Yu {
    profile() {
        var t;
        return {
            sourceNodes: this.sourceNodes.size,
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            targetNodes: this.targetNodes.size,
            dragOverTargetIds: ((t = this.dragOverTargetIds) === null || t === void 0 ? void 0 : t.length) || 0
        }
    }
    get document() {
        return this.options.document
    }
    setup() {
        const t = this.options.rootElement;
        t && (be(!Yu.isSetUp, "Cannot have two Touch backends at the same time."), Yu.isSetUp = !0, this.addEventListener(t, "start", this.getTopMoveStartHandler()), this.addEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.addEventListener(t, "move", this.handleTopMove), this.addEventListener(t, "move", this.handleTopMoveCapture, !0), this.addEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.addEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.addEventListener(t, "keydown", this.handleCancelOnEscape, !0))
    }
    teardown() {
        const t = this.options.rootElement;
        t && (Yu.isSetUp = !1, this._mouseClientOffset = {}, this.removeEventListener(t, "start", this.handleTopMoveStartCapture, !0), this.removeEventListener(t, "start", this.handleTopMoveStart), this.removeEventListener(t, "move", this.handleTopMoveCapture, !0), this.removeEventListener(t, "move", this.handleTopMove), this.removeEventListener(t, "end", this.handleTopMoveEndCapture, !0), this.options.enableMouseEvents && !this.options.ignoreContextMenu && this.removeEventListener(t, "contextmenu", this.handleTopMoveEndCapture), this.options.enableKeyboardEvents && this.removeEventListener(t, "keydown", this.handleCancelOnEscape, !0), this.uninstallSourceNodeRemovalObserver())
    }
    addEventListener(t, n, r, i = !1) {
        const l = Aw ? {
            capture: i,
            passive: !1
        } : i;
        this.listenerTypes.forEach(function(s) {
            const a = Pu[s][n];
            a && t.addEventListener(a, r, l)
        })
    }
    removeEventListener(t, n, r, i = !1) {
        const l = Aw ? {
            capture: i,
            passive: !1
        } : i;
        this.listenerTypes.forEach(function(s) {
            const a = Pu[s][n];
            a && t.removeEventListener(a, r, l)
        })
    }
    connectDragSource(t, n) {
        const r = this.handleMoveStart.bind(this, t);
        return this.sourceNodes.set(t, n), this.addEventListener(n, "start", r), () => {
            this.sourceNodes.delete(t), this.removeEventListener(n, "start", r)
        }
    }
    connectDragPreview(t, n, r) {
        return this.sourcePreviewNodeOptions.set(t, r), this.sourcePreviewNodes.set(t, n), () => {
            this.sourcePreviewNodes.delete(t), this.sourcePreviewNodeOptions.delete(t)
        }
    }
    connectDropTarget(t, n) {
        const r = this.options.rootElement;
        if (!this.document || !r) return () => {};
        const i = l => {
            if (!this.document || !r || !this.monitor.isDragging()) return;
            let s;
            switch (l.type) {
                case Pu.mouse.move:
                    s = {
                        x: l.clientX,
                        y: l.clientY
                    };
                    break;
                case Pu.touch.move:
                    var a, f;
                    s = {
                        x: ((a = l.touches[0]) === null || a === void 0 ? void 0 : a.clientX) || 0,
                        y: ((f = l.touches[0]) === null || f === void 0 ? void 0 : f.clientY) || 0
                    };
                    break
            }
            const d = s != null ? this.document.elementFromPoint(s.x, s.y) : void 0,
                p = d && n.contains(d);
            if (d === n || p) return this.handleMove(l, t)
        };
        return this.addEventListener(this.document.body, "move", i), this.targetNodes.set(t, n), () => {
            this.document && (this.targetNodes.delete(t), this.removeEventListener(this.document.body, "move", i))
        }
    }
    getTopMoveStartHandler() {
        return !this.options.delayTouchStart && !this.options.delayMouseStart ? this.handleTopMoveStart : this.handleTopMoveStartDelay
    }
    installSourceNodeRemovalObserver(t) {
        this.uninstallSourceNodeRemovalObserver(), this.draggedSourceNode = t, this.draggedSourceNodeRemovalObserver = new MutationObserver(() => {
            t && !t.parentElement && (this.resurrectSourceNode(), this.uninstallSourceNodeRemovalObserver())
        }), !(!t || !t.parentElement) && this.draggedSourceNodeRemovalObserver.observe(t.parentElement, {
            childList: !0
        })
    }
    resurrectSourceNode() {
        this.document && this.draggedSourceNode && (this.draggedSourceNode.style.display = "none", this.draggedSourceNode.removeAttribute("data-reactid"), this.document.body.appendChild(this.draggedSourceNode))
    }
    uninstallSourceNodeRemovalObserver() {
        this.draggedSourceNodeRemovalObserver && this.draggedSourceNodeRemovalObserver.disconnect(), this.draggedSourceNodeRemovalObserver = void 0, this.draggedSourceNode = void 0
    }
    constructor(t, n, r) {
        this.getSourceClientOffset = i => {
            const l = this.sourceNodes.get(i);
            return l && V3(l)
        }, this.handleTopMoveStartCapture = i => {
            Qp(i) && (this.moveStartSourceIds = [])
        }, this.handleMoveStart = i => {
            Array.isArray(this.moveStartSourceIds) && this.moveStartSourceIds.unshift(i)
        }, this.handleTopMoveStart = i => {
            if (!Qp(i)) return;
            const l = Lc(i);
            l && (qC(i) && (this.lastTargetTouchFallback = i.targetTouches[0]), this._mouseClientOffset = l), this.waitingForDelay = !1
        }, this.handleTopMoveStartDelay = i => {
            if (!Qp(i)) return;
            const l = i.type === Pu.touch.start ? this.options.delayTouchStart : this.options.delayMouseStart;
            this.timeout = setTimeout(this.handleTopMoveStart.bind(this, i), l), this.waitingForDelay = !0
        }, this.handleTopMoveCapture = () => {
            this.dragOverTargetIds = []
        }, this.handleMove = (i, l) => {
            this.dragOverTargetIds && this.dragOverTargetIds.unshift(l)
        }, this.handleTopMove = i => {
            if (this.timeout && clearTimeout(this.timeout), !this.document || this.waitingForDelay) return;
            const {
                moveStartSourceIds: l,
                dragOverTargetIds: s
            } = this, a = this.options.enableHoverOutsideTarget, f = Lc(i, this.lastTargetTouchFallback);
            if (!f) return;
            if (this._isScrolling || !this.monitor.isDragging() && B3(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, f.x, f.y, this.options.scrollAngleRanges)) {
                this._isScrolling = !0;
                return
            }
            if (!this.monitor.isDragging() && this._mouseClientOffset.hasOwnProperty("x") && l && $3(this._mouseClientOffset.x || 0, this._mouseClientOffset.y || 0, f.x, f.y) > (this.options.touchSlop ? this.options.touchSlop : 0) && (this.moveStartSourceIds = void 0, this.actions.beginDrag(l, {
                    clientOffset: this._mouseClientOffset,
                    getSourceClientOffset: this.getSourceClientOffset,
                    publishSource: !1
                })), !this.monitor.isDragging()) return;
            const d = this.sourceNodes.get(this.monitor.getSourceId());
            this.installSourceNodeRemovalObserver(d), this.actions.publishDragSource(), i.cancelable && i.preventDefault();
            const p = (s || []).map(E => this.targetNodes.get(E)).filter(E => !!E),
                g = this.options.getDropTargetElementsAtPoint ? this.options.getDropTargetElementsAtPoint(f.x, f.y, p) : this.document.elementsFromPoint(f.x, f.y),
                v = [];
            for (const E in g) {
                if (!g.hasOwnProperty(E)) continue;
                let S = g[E];
                for (S != null && v.push(S); S;) S = S.parentElement, S && v.indexOf(S) === -1 && v.push(S)
            }
            const m = v.filter(E => p.indexOf(E) > -1).map(E => this._getDropTargetId(E)).filter(E => !!E).filter((E, S, A) => A.indexOf(E) === S);
            if (a)
                for (const E in this.targetNodes) {
                    const S = this.targetNodes.get(E);
                    if (d && S && S.contains(d) && m.indexOf(E) === -1) {
                        m.unshift(E);
                        break
                    }
                }
            m.reverse(), this.actions.hover(m, {
                clientOffset: f
            })
        }, this._getDropTargetId = i => {
            const l = this.targetNodes.keys();
            let s = l.next();
            for (; s.done === !1;) {
                const a = s.value;
                if (i === this.targetNodes.get(a)) return a;
                s = l.next()
            }
        }, this.handleTopMoveEndCapture = i => {
            if (this._isScrolling = !1, this.lastTargetTouchFallback = void 0, !!H3(i)) {
                if (!this.monitor.isDragging() || this.monitor.didDrop()) {
                    this.moveStartSourceIds = void 0;
                    return
                }
                i.cancelable && i.preventDefault(), this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.drop(), this.actions.endDrag()
            }
        }, this.handleCancelOnEscape = i => {
            i.key === "Escape" && this.monitor.isDragging() && (this._mouseClientOffset = {}, this.uninstallSourceNodeRemovalObserver(), this.actions.endDrag())
        }, this.options = new z3(r, n), this.actions = t.getActions(), this.monitor = t.getMonitor(), this.sourceNodes = new Map, this.sourcePreviewNodes = new Map, this.sourcePreviewNodeOptions = new Map, this.targetNodes = new Map, this.listenerTypes = [], this._mouseClientOffset = {}, this._isScrolling = !1, this.options.enableMouseEvents && this.listenerTypes.push(Gi.mouse), this.options.enableTouchEvents && this.listenerTypes.push(Gi.touch), this.options.enableKeyboardEvents && this.listenerTypes.push(Gi.keyboard)
    }
}
const G3 = function(t, n = {}, r = {}) {
    return new Yu(t, n, r)
};

function _r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map(function(i) {
        return "'" + i + "'"
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function to(e) {
    return !!e && !!e[ft]
}

function pi(e) {
    var t;
    return !!e && (function(n) {
        if (!n || typeof n != "object") return !1;
        var r = Object.getPrototypeOf(n);
        if (r === null) return !0;
        var i = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return i === Object || typeof i == "function" && Function.toString.call(i) === t4
    }(e) || Array.isArray(e) || !!e[$w] || !!(!((t = e.constructor) === null || t === void 0) && t[$w]) || Xm(e) || Zm(e))
}

function Bo(e, t, n) {
    n === void 0 && (n = !1), nu(e) === 0 ? (n ? Object.keys : Ml)(e).forEach(function(r) {
        n && typeof r == "symbol" || t(r, e[r], e)
    }) : e.forEach(function(r, i) {
        return t(i, r, e)
    })
}

function nu(e) {
    var t = e[ft];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Xm(e) ? 2 : Zm(e) ? 3 : 0
}

function Nl(e, t) {
    return nu(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function K3(e, t) {
    return nu(e) === 2 ? e.get(t) : e[t]
}

function GC(e, t, n) {
    var r = nu(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function KC(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}

function Xm(e) {
    return J3 && e instanceof Map
}

function Zm(e) {
    return e4 && e instanceof Set
}

function Eo(e) {
    return e.o || e.t
}

function Jm(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = YC(e);
    delete t[ft];
    for (var n = Ml(t), r = 0; r < n.length; r++) {
        var i = n[r],
            l = t[i];
        l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[i]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}

function ev(e, t) {
    return t === void 0 && (t = !1), tv(e) || to(e) || !pi(e) || (nu(e) > 1 && (e.set = e.add = e.clear = e.delete = Q3), Object.freeze(e), t && Bo(e, function(n, r) {
        return ev(r, !0)
    }, !0)), e
}

function Q3() {
    _r(2)
}

function tv(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}

function Hr(e) {
    var t = Cg[e];
    return t || _r(18, e), t
}

function Y3(e, t) {
    Cg[e] || (Cg[e] = t)
}

function wg() {
    return xs
}

function Yp(e, t) {
    t && (Hr("Patches"), e.u = [], e.s = [], e.v = t)
}

function Fc(e) {
    xg(e), e.p.forEach(X3), e.p = null
}

function xg(e) {
    e === xs && (xs = e.l)
}

function Dw(e) {
    return xs = {
        p: [],
        l: xs,
        h: e,
        m: !0,
        _: 0
    }
}

function X3(e) {
    var t = e[ft];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}

function Xp(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = e !== void 0 && e !== n;
    return t.h.O || Hr("ES5").S(t, e, r), r ? (n[ft].P && (Fc(t), _r(4)), pi(e) && (e = zc(t, e), t.l || $c(t, e)), t.u && Hr("Patches").M(n[ft].t, e, t.u, t.s)) : e = zc(t, n, []), Fc(t), t.u && t.v(t.u, t.s), e !== QC ? e : void 0
}

function zc(e, t, n) {
    if (tv(t)) return t;
    var r = t[ft];
    if (!r) return Bo(t, function(a, f) {
        return Nw(e, r, t, a, f, n)
    }, !0), t;
    if (r.A !== e) return t;
    if (!r.P) return $c(e, r.t, !0), r.t;
    if (!r.I) {
        r.I = !0, r.A._--;
        var i = r.i === 4 || r.i === 5 ? r.o = Jm(r.k) : r.o,
            l = i,
            s = !1;
        r.i === 3 && (l = new Set(i), i.clear(), s = !0), Bo(l, function(a, f) {
            return Nw(e, r, i, a, f, n, s)
        }), $c(e, i, !1), n && e.u && Hr("Patches").N(r, n, e.u, e.s)
    }
    return r.o
}

function Nw(e, t, n, r, i, l, s) {
    if (to(i)) {
        var a = zc(e, i, l && t && t.i !== 3 && !Nl(t.R, r) ? l.concat(r) : void 0);
        if (GC(n, r, a), !to(a)) return;
        e.m = !1
    } else s && n.add(i);
    if (pi(i) && !tv(i)) {
        if (!e.h.D && e._ < 1) return;
        zc(e, i), t && t.A.l || $c(e, i)
    }
}

function $c(e, t, n) {
    n === void 0 && (n = !1), !e.l && e.h.D && e.m && ev(t, n)
}

function Zp(e, t) {
    var n = e[ft];
    return (n ? Eo(n) : e)[t]
}

function Mw(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n)
        }
}

function Mi(e) {
    e.P || (e.P = !0, e.l && Mi(e.l))
}

function Jp(e) {
    e.o || (e.o = Jm(e.t))
}

function Sg(e, t, n) {
    var r = Xm(t) ? Hr("MapSet").F(t, n) : Zm(t) ? Hr("MapSet").T(t, n) : e.O ? function(i, l) {
        var s = Array.isArray(i),
            a = {
                i: s ? 1 : 0,
                A: l ? l.A : wg(),
                P: !1,
                I: !1,
                R: {},
                l,
                t: i,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            f = a,
            d = Ss;
        s && (f = [a], d = Fu);
        var p = Proxy.revocable(f, d),
            g = p.revoke,
            v = p.proxy;
        return a.k = v, a.j = g, v
    }(t, n) : Hr("ES5").J(t, n);
    return (n ? n.A : wg()).p.push(r), r
}

function Eg(e) {
    return to(e) || _r(22, e),
        function t(n) {
            if (!pi(n)) return n;
            var r, i = n[ft],
                l = nu(n);
            if (i) {
                if (!i.P && (i.i < 4 || !Hr("ES5").K(i))) return i.t;
                i.I = !0, r = Lw(n, l), i.I = !1
            } else r = Lw(n, l);
            return Bo(r, function(s, a) {
                i && K3(i.t, s) === a || GC(r, s, t(a))
            }), l === 3 ? new Set(r) : r
        }(e)
}

function Lw(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e)
    }
    return Jm(e)
}

function Z3() {
    function e(l, s) {
        var a = i[l];
        return a ? a.enumerable = s : i[l] = a = {
            configurable: !0,
            enumerable: s,
            get: function() {
                var f = this[ft];
                return Ss.get(f, l)
            },
            set: function(f) {
                var d = this[ft];
                Ss.set(d, l, f)
            }
        }, a
    }

    function t(l) {
        for (var s = l.length - 1; s >= 0; s--) {
            var a = l[s][ft];
            if (!a.P) switch (a.i) {
                case 5:
                    r(a) && Mi(a);
                    break;
                case 4:
                    n(a) && Mi(a)
            }
        }
    }

    function n(l) {
        for (var s = l.t, a = l.k, f = Ml(a), d = f.length - 1; d >= 0; d--) {
            var p = f[d];
            if (p !== ft) {
                var g = s[p];
                if (g === void 0 && !Nl(s, p)) return !0;
                var v = a[p],
                    m = v && v[ft];
                if (m ? m.t !== g : !KC(v, g)) return !0
            }
        }
        var E = !!s[ft];
        return f.length !== Ml(s).length + (E ? 0 : 1)
    }

    function r(l) {
        var s = l.k;
        if (s.length !== l.t.length) return !0;
        var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
        if (a && !a.get) return !0;
        for (var f = 0; f < s.length; f++)
            if (!s.hasOwnProperty(f)) return !0;
        return !1
    }
    var i = {};
    Y3("ES5", {
        J: function(l, s) {
            var a = Array.isArray(l),
                f = function(p, g) {
                    if (p) {
                        for (var v = Array(g.length), m = 0; m < g.length; m++) Object.defineProperty(v, "" + m, e(m, !0));
                        return v
                    }
                    var E = YC(g);
                    delete E[ft];
                    for (var S = Ml(E), A = 0; A < S.length; A++) {
                        var y = S[A];
                        E[y] = e(y, p || !!E[y].enumerable)
                    }
                    return Object.create(Object.getPrototypeOf(g), E)
                }(a, l),
                d = {
                    i: a ? 5 : 4,
                    A: s ? s.A : wg(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: s,
                    t: l,
                    k: f,
                    o: null,
                    g: !1,
                    C: !1
                };
            return Object.defineProperty(f, ft, {
                value: d,
                writable: !0
            }), f
        },
        S: function(l, s, a) {
            a ? to(s) && s[ft].A === l && t(l.p) : (l.u && function f(d) {
                if (d && typeof d == "object") {
                    var p = d[ft];
                    if (p) {
                        var g = p.t,
                            v = p.k,
                            m = p.R,
                            E = p.i;
                        if (E === 4) Bo(v, function(k) {
                            k !== ft && (g[k] !== void 0 || Nl(g, k) ? m[k] || f(v[k]) : (m[k] = !0, Mi(p)))
                        }), Bo(g, function(k) {
                            v[k] !== void 0 || Nl(v, k) || (m[k] = !1, Mi(p))
                        });
                        else if (E === 5) {
                            if (r(p) && (Mi(p), m.length = !0), v.length < g.length)
                                for (var S = v.length; S < g.length; S++) m[S] = !1;
                            else
                                for (var A = g.length; A < v.length; A++) m[A] = !0;
                            for (var y = Math.min(v.length, g.length), x = 0; x < y; x++) v.hasOwnProperty(x) || (m[x] = !0), m[x] === void 0 && f(v[x])
                        }
                    }
                }
            }(l.p[0]), t(l.p))
        },
        K: function(l) {
            return l.i === 4 ? n(l) : r(l)
        }
    })
}
var Fw, xs, nv = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    J3 = typeof Map < "u",
    e4 = typeof Set < "u",
    zw = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
    QC = nv ? Symbol.for("immer-nothing") : ((Fw = {})["immer-nothing"] = !0, Fw),
    $w = nv ? Symbol.for("immer-draftable") : "__$immer_draftable",
    ft = nv ? Symbol.for("immer-state") : "__$immer_state",
    t4 = "" + Object.prototype.constructor,
    Ml = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Object.getOwnPropertyNames,
    YC = Object.getOwnPropertyDescriptors || function(e) {
        var t = {};
        return Ml(e).forEach(function(n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n)
        }), t
    },
    Cg = {},
    Ss = {
        get: function(e, t) {
            if (t === ft) return e;
            var n = Eo(e);
            if (!Nl(n, t)) return function(i, l, s) {
                var a, f = Mw(l, s);
                return f ? "value" in f ? f.value : (a = f.get) === null || a === void 0 ? void 0 : a.call(i.k) : void 0
            }(e, n, t);
            var r = n[t];
            return e.I || !pi(r) ? r : r === Zp(e.t, t) ? (Jp(e), e.o[t] = Sg(e.A.h, r, e)) : r
        },
        has: function(e, t) {
            return t in Eo(e)
        },
        ownKeys: function(e) {
            return Reflect.ownKeys(Eo(e))
        },
        set: function(e, t, n) {
            var r = Mw(Eo(e), t);
            if (r?.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = Zp(Eo(e), t),
                    l = i?.[ft];
                if (l && l.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                if (KC(n, i) && (n !== void 0 || Nl(e.t, t))) return !0;
                Jp(e), Mi(e)
            }
            return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
        },
        deleteProperty: function(e, t) {
            return Zp(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, Jp(e), Mi(e)) : delete e.R[t], e.o && delete e.o[t], !0
        },
        getOwnPropertyDescriptor: function(e, t) {
            var n = Eo(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && {
                writable: !0,
                configurable: e.i !== 1 || t !== "length",
                enumerable: r.enumerable,
                value: n[t]
            }
        },
        defineProperty: function() {
            _r(11)
        },
        getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t)
        },
        setPrototypeOf: function() {
            _r(12)
        }
    },
    Fu = {};
Bo(Ss, function(e, t) {
    Fu[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
}), Fu.deleteProperty = function(e, t) {
    return Fu.set.call(this, e, t, void 0)
}, Fu.set = function(e, t, n) {
    return Ss.set.call(this, e[0], t, n, e[0])
};
var n4 = function() {
        function e(n) {
            var r = this;
            this.O = zw, this.D = !0, this.produce = function(i, l, s) {
                if (typeof i == "function" && typeof l != "function") {
                    var a = l;
                    l = i;
                    var f = r;
                    return function(S) {
                        var A = this;
                        S === void 0 && (S = a);
                        for (var y = arguments.length, x = Array(y > 1 ? y - 1 : 0), k = 1; k < y; k++) x[k - 1] = arguments[k];
                        return f.produce(S, function(P) {
                            var N;
                            return (N = l).call.apply(N, [A, P].concat(x))
                        })
                    }
                }
                var d;
                if (typeof l != "function" && _r(6), s !== void 0 && typeof s != "function" && _r(7), pi(i)) {
                    var p = Dw(r),
                        g = Sg(r, i, void 0),
                        v = !0;
                    try {
                        d = l(g), v = !1
                    } finally {
                        v ? Fc(p) : xg(p)
                    }
                    return typeof Promise < "u" && d instanceof Promise ? d.then(function(S) {
                        return Yp(p, s), Xp(S, p)
                    }, function(S) {
                        throw Fc(p), S
                    }) : (Yp(p, s), Xp(d, p))
                }
                if (!i || typeof i != "object") {
                    if ((d = l(i)) === void 0 && (d = i), d === QC && (d = void 0), r.D && ev(d, !0), s) {
                        var m = [],
                            E = [];
                        Hr("Patches").M(i, d, m, E), s(m, E)
                    }
                    return d
                }
                _r(21, i)
            }, this.produceWithPatches = function(i, l) {
                if (typeof i == "function") return function(d) {
                    for (var p = arguments.length, g = Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++) g[v - 1] = arguments[v];
                    return r.produceWithPatches(d, function(m) {
                        return i.apply(void 0, [m].concat(g))
                    })
                };
                var s, a, f = r.produce(i, l, function(d, p) {
                    s = d, a = p
                });
                return typeof Promise < "u" && f instanceof Promise ? f.then(function(d) {
                    return [d, s, a]
                }) : [f, s, a]
            }, typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies), typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze)
        }
        var t = e.prototype;
        return t.createDraft = function(n) {
            pi(n) || _r(8), to(n) && (n = Eg(n));
            var r = Dw(this),
                i = Sg(this, n, void 0);
            return i[ft].C = !0, xg(r), i
        }, t.finishDraft = function(n, r) {
            var i = n && n[ft],
                l = i.A;
            return Yp(l, r), Xp(void 0, l)
        }, t.setAutoFreeze = function(n) {
            this.D = n
        }, t.setUseProxies = function(n) {
            n && !zw && _r(20), this.O = n
        }, t.applyPatches = function(n, r) {
            var i;
            for (i = r.length - 1; i >= 0; i--) {
                var l = r[i];
                if (l.path.length === 0 && l.op === "replace") {
                    n = l.value;
                    break
                }
            }
            i > -1 && (r = r.slice(i + 1));
            var s = Hr("Patches").$;
            return to(n) ? s(n, r) : this.produce(n, function(a) {
                return s(a, r)
            })
        }, e
    }(),
    jn = new n4,
    XC = jn.produce;
jn.produceWithPatches.bind(jn);
jn.setAutoFreeze.bind(jn);
jn.setUseProxies.bind(jn);
jn.applyPatches.bind(jn);
jn.createDraft.bind(jn);
jn.finishDraft.bind(jn);

function ZC(e) {
    var t = function(r) {
        var i = r.dispatch,
            l = r.getState;
        return function(s) {
            return function(a) {
                return typeof a == "function" ? a(i, l, e) : s(a)
            }
        }
    };
    return t
}
var JC = ZC();
JC.withExtraArgument = ZC;
const Bw = JC;
var ek = globalThis && globalThis.__extends || function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(r, i) {
                r.__proto__ = i
            } || function(r, i) {
                for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l])
            }, e(t, n)
        };
        return function(t, n) {
            if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            e(t, n);

            function r() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }(),
    r4 = globalThis && globalThis.__generator || function(e, t) {
        var n = {
                label: 0,
                sent: function() {
                    if (l[0] & 1) throw l[1];
                    return l[1]
                },
                trys: [],
                ops: []
            },
            r, i, l, s;
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(d) {
            return function(p) {
                return f([d, p])
            }
        }

        function f(d) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; n;) try {
                if (r = 1, i && (l = d[0] & 2 ? i.return : d[0] ? i.throw || ((l = i.return) && l.call(i), 0) : i.next) && !(l = l.call(i, d[1])).done) return l;
                switch (i = 0, l && (d = [d[0] & 2, l.value]), d[0]) {
                    case 0:
                    case 1:
                        l = d;
                        break;
                    case 4:
                        return n.label++, {
                            value: d[1],
                            done: !1
                        };
                    case 5:
                        n.label++, i = d[1], d = [0];
                        continue;
                    case 7:
                        d = n.ops.pop(), n.trys.pop();
                        continue;
                    default:
                        if (l = n.trys, !(l = l.length > 0 && l[l.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (d[0] === 3 && (!l || d[1] > l[0] && d[1] < l[3])) {
                            n.label = d[1];
                            break
                        }
                        if (d[0] === 6 && n.label < l[1]) {
                            n.label = l[1], l = d;
                            break
                        }
                        if (l && n.label < l[2]) {
                            n.label = l[2], n.ops.push(d);
                            break
                        }
                        l[2] && n.ops.pop(), n.trys.pop();
                        continue
                }
                d = t.call(e, n)
            } catch (p) {
                d = [6, p], i = 0
            } finally {
                r = l = 0
            }
            if (d[0] & 5) throw d[1];
            return {
                value: d[0] ? d[1] : void 0,
                done: !0
            }
        }
    },
    Kl = globalThis && globalThis.__spreadArray || function(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
        return e
    },
    i4 = Object.defineProperty,
    o4 = Object.defineProperties,
    l4 = Object.getOwnPropertyDescriptors,
    Uw = Object.getOwnPropertySymbols,
    u4 = Object.prototype.hasOwnProperty,
    s4 = Object.prototype.propertyIsEnumerable,
    jw = function(e, t, n) {
        return t in e ? i4(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    Ki = function(e, t) {
        for (var n in t || (t = {})) u4.call(t, n) && jw(e, n, t[n]);
        if (Uw)
            for (var r = 0, i = Uw(t); r < i.length; r++) {
                var n = i[r];
                s4.call(t, n) && jw(e, n, t[n])
            }
        return e
    },
    eh = function(e, t) {
        return o4(e, l4(t))
    },
    a4 = function(e, t, n) {
        return new Promise(function(r, i) {
            var l = function(f) {
                    try {
                        a(n.next(f))
                    } catch (d) {
                        i(d)
                    }
                },
                s = function(f) {
                    try {
                        a(n.throw(f))
                    } catch (d) {
                        i(d)
                    }
                },
                a = function(f) {
                    return f.done ? r(f.value) : Promise.resolve(f.value).then(l, s)
                };
            a((n = n.apply(e, t)).next())
        })
    },
    c4 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? Mc : Mc.apply(null, arguments)
    };

function f4(e) {
    if (typeof e != "object" || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
    return t === n
}
var d4 = function(e) {
    return e && typeof e.match == "function"
};

function Qi(e, t) {
    function n() {
        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
        if (t) {
            var l = t.apply(void 0, r);
            if (!l) throw new Error("prepareAction did not return an object");
            return Ki(Ki({
                type: e,
                payload: l.payload
            }, "meta" in l && {
                meta: l.meta
            }), "error" in l && {
                error: l.error
            })
        }
        return {
            type: e,
            payload: r[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }, n.type = e, n.match = function(r) {
        return r.type === e
    }, n
}
var p4 = function(e) {
        ek(t, e);

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, Kl([void 0], n[0].concat(this)))) : new(t.bind.apply(t, Kl([void 0], n.concat(this))))
        }, t
    }(Array),
    h4 = function(e) {
        ek(t, e);

        function t() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var i = e.apply(this, n) || this;
            return Object.setPrototypeOf(i, t.prototype), i
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, Kl([void 0], n[0].concat(this)))) : new(t.bind.apply(t, Kl([void 0], n.concat(this))))
        }, t
    }(Array);

function kg(e) {
    return pi(e) ? XC(e, function() {}) : e
}

function g4(e) {
    return typeof e == "boolean"
}

function m4() {
    return function(t) {
        return v4(t)
    }
}

function v4(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
        n = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
    var r = new p4;
    return n && (g4(n) ? r.push(Bw) : r.push(Bw.withExtraArgument(n.extraArgument))), r
}
var y4 = !0;

function w4(e) {
    var t = m4(),
        n = e || {},
        r = n.reducer,
        i = r === void 0 ? void 0 : r,
        l = n.middleware,
        s = l === void 0 ? t() : l,
        a = n.devTools,
        f = a === void 0 ? !0 : a,
        d = n.preloadedState,
        p = d === void 0 ? void 0 : d,
        g = n.enhancers,
        v = g === void 0 ? void 0 : g,
        m;
    if (typeof i == "function") m = i;
    else if (f4(i)) m = HM(i);
    else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var E = s;
    typeof E == "function" && (E = E(t));
    var S = WM.apply(void 0, E),
        A = Mc;
    f && (A = c4(Ki({
        trace: !y4
    }, typeof f == "object" && f)));
    var y = new h4(S),
        x = y;
    Array.isArray(v) ? x = Kl([S], v) : typeof v == "function" && (x = v(y));
    var k = A.apply(void 0, x);
    return Wm(m, p, k)
}

function tk(e) {
    var t = {},
        n = [],
        r, i = {
            addCase: function(l, s) {
                var a = typeof l == "string" ? l : l.type;
                if (!a) throw new Error("`builder.addCase` cannot be called with an empty action type");
                if (a in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
                return t[a] = s, i
            },
            addMatcher: function(l, s) {
                return n.push({
                    matcher: l,
                    reducer: s
                }), i
            },
            addDefaultCase: function(l) {
                return r = l, i
            }
        };
    return e(i), [t, n, r]
}

function x4(e) {
    return typeof e == "function"
}

function S4(e, t, n, r) {
    n === void 0 && (n = []);
    var i = typeof t == "function" ? tk(t) : [t, n, r],
        l = i[0],
        s = i[1],
        a = i[2],
        f;
    if (x4(e)) f = function() {
        return kg(e())
    };
    else {
        var d = kg(e);
        f = function() {
            return d
        }
    }

    function p(g, v) {
        g === void 0 && (g = f());
        var m = Kl([l[v.type]], s.filter(function(E) {
            var S = E.matcher;
            return S(v)
        }).map(function(E) {
            var S = E.reducer;
            return S
        }));
        return m.filter(function(E) {
            return !!E
        }).length === 0 && (m = [a]), m.reduce(function(E, S) {
            if (S)
                if (to(E)) {
                    var A = E,
                        y = S(A, v);
                    return y === void 0 ? E : y
                } else {
                    if (pi(E)) return XC(E, function(x) {
                        return S(x, v)
                    });
                    var y = S(E, v);
                    if (y === void 0) {
                        if (E === null) return E;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return y
                } return E
        }, g)
    }
    return p.getInitialState = f, p
}

function E4(e, t) {
    return e + "/" + t
}

function rv(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n = typeof e.initialState == "function" ? e.initialState : kg(e.initialState),
        r = e.reducers || {},
        i = Object.keys(r),
        l = {},
        s = {},
        a = {};
    i.forEach(function(p) {
        var g = r[p],
            v = E4(t, p),
            m, E;
        "reducer" in g ? (m = g.reducer, E = g.prepare) : m = g, l[p] = m, s[v] = m, a[p] = E ? Qi(v, E) : Qi(v)
    });

    function f() {
        var p = typeof e.extraReducers == "function" ? tk(e.extraReducers) : [e.extraReducers],
            g = p[0],
            v = g === void 0 ? {} : g,
            m = p[1],
            E = m === void 0 ? [] : m,
            S = p[2],
            A = S === void 0 ? void 0 : S,
            y = Ki(Ki({}, v), s);
        return S4(n, function(x) {
            for (var k in y) x.addCase(k, y[k]);
            for (var P = 0, N = E; P < N.length; P++) {
                var T = N[P];
                x.addMatcher(T.matcher, T.reducer)
            }
            A && x.addDefaultCase(A)
        })
    }
    var d;
    return {
        name: t,
        reducer: function(p, g) {
            return d || (d = f()), d(p, g)
        },
        actions: a,
        caseReducers: l,
        getInitialState: function() {
            return d || (d = f()), d.getInitialState()
        }
    }
}
var C4 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    k4 = function(e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--;) t += C4[Math.random() * 64 | 0];
        return t
    },
    b4 = ["name", "message", "stack", "code"],
    th = function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    }(),
    Hw = function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    }(),
    _4 = function(e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = b4; n < r.length; n++) {
                var i = r[n];
                typeof e[i] == "string" && (t[i] = e[i])
            }
            return t
        }
        return {
            message: String(e)
        }
    },
    iv = function() {
        function e(t, n, r) {
            var i = Qi(t + "/fulfilled", function(d, p, g, v) {
                    return {
                        payload: d,
                        meta: eh(Ki({}, v || {}), {
                            arg: g,
                            requestId: p,
                            requestStatus: "fulfilled"
                        })
                    }
                }),
                l = Qi(t + "/pending", function(d, p, g) {
                    return {
                        payload: void 0,
                        meta: eh(Ki({}, g || {}), {
                            arg: p,
                            requestId: d,
                            requestStatus: "pending"
                        })
                    }
                }),
                s = Qi(t + "/rejected", function(d, p, g, v, m) {
                    return {
                        payload: v,
                        error: (r && r.serializeError || _4)(d || "Rejected"),
                        meta: eh(Ki({}, m || {}), {
                            arg: g,
                            requestId: p,
                            rejectedWithValue: !!v,
                            requestStatus: "rejected",
                            aborted: d?.name === "AbortError",
                            condition: d?.name === "ConditionError"
                        })
                    }
                }),
                a = typeof AbortController < "u" ? AbortController : function() {
                    function d() {
                        this.signal = {
                            aborted: !1,
                            addEventListener: function() {},
                            dispatchEvent: function() {
                                return !1
                            },
                            onabort: function() {},
                            removeEventListener: function() {},
                            reason: void 0,
                            throwIfAborted: function() {}
                        }
                    }
                    return d.prototype.abort = function() {}, d
                }();

            function f(d) {
                return function(p, g, v) {
                    var m = r?.idGenerator ? r.idGenerator(d) : k4(),
                        E = new a,
                        S;

                    function A(x) {
                        S = x, E.abort()
                    }
                    var y = function() {
                        return a4(this, null, function() {
                            var x, k, P, N, T, F, z;
                            return r4(this, function(q) {
                                switch (q.label) {
                                    case 0:
                                        return q.trys.push([0, 4, , 5]), N = (x = r?.condition) == null ? void 0 : x.call(r, d, {
                                            getState: g,
                                            extra: v
                                        }), T4(N) ? [4, N] : [3, 2];
                                    case 1:
                                        N = q.sent(), q.label = 2;
                                    case 2:
                                        if (N === !1 || E.signal.aborted) throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                        return T = new Promise(function(Q, B) {
                                            return E.signal.addEventListener("abort", function() {
                                                return B({
                                                    name: "AbortError",
                                                    message: S || "Aborted"
                                                })
                                            })
                                        }), p(l(m, d, (k = r?.getPendingMeta) == null ? void 0 : k.call(r, {
                                            requestId: m,
                                            arg: d
                                        }, {
                                            getState: g,
                                            extra: v
                                        }))), [4, Promise.race([T, Promise.resolve(n(d, {
                                            dispatch: p,
                                            getState: g,
                                            extra: v,
                                            requestId: m,
                                            signal: E.signal,
                                            abort: A,
                                            rejectWithValue: function(Q, B) {
                                                return new th(Q, B)
                                            },
                                            fulfillWithValue: function(Q, B) {
                                                return new Hw(Q, B)
                                            }
                                        })).then(function(Q) {
                                            if (Q instanceof th) throw Q;
                                            return Q instanceof Hw ? i(Q.payload, m, d, Q.meta) : i(Q, m, d)
                                        })])];
                                    case 3:
                                        return P = q.sent(), [3, 5];
                                    case 4:
                                        return F = q.sent(), P = F instanceof th ? s(null, m, d, F.payload, F.meta) : s(F, m, d), [3, 5];
                                    case 5:
                                        return z = r && !r.dispatchConditionRejection && s.match(P) && P.meta.condition, z || p(P), [2, P]
                                }
                            })
                        })
                    }();
                    return Object.assign(y, {
                        abort: A,
                        requestId: m,
                        arg: d,
                        unwrap: function() {
                            return y.then(O4)
                        }
                    })
                }
            }
            return Object.assign(f, {
                pending: l,
                rejected: s,
                fulfilled: i,
                typePrefix: t
            })
        }
        return e.withTypes = function() {
            return e
        }, e
    }();

function O4(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload
}

function T4(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var I4 = function(e, t) {
    return d4(e) ? e.match(t) : e(t)
};

function ov() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function(n) {
        return e.some(function(r) {
            return I4(r, n)
        })
    }
}

function lv(e, t) {
    if (!e || !e.meta) return !1;
    var n = typeof e.meta.requestId == "string",
        r = t.indexOf(e.meta.requestStatus) > -1;
    return n && r
}

function uv(e) {
    return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0]
}

function nk() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return lv(n, ["pending"])
    } : uv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.pending
            }),
            i = ov.apply(void 0, r);
        return i(n)
    } : nk()(e[0])
}

function rk() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return lv(n, ["rejected"])
    } : uv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.rejected
            }),
            i = ov.apply(void 0, r);
        return i(n)
    } : rk()(e[0])
}

function ik() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.length === 0 ? function(n) {
        return lv(n, ["fulfilled"])
    } : uv(e) ? function(n) {
        var r = e.map(function(l) {
                return l.fulfilled
            }),
            i = ov.apply(void 0, r);
        return i(n)
    } : ik()(e[0])
}
var sv = "listenerMiddleware";
Qi(sv + "/add");
Qi(sv + "/removeAll");
Qi(sv + "/remove");
var Ww;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
Z3();
var Zt = (e => (e.PLAYER = "player", e.SHOP = "shop", e.CONTAINER = "container", e.CRAFTING = "crafting", e))(Zt || {}),
    Bc = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Bc.exports;
(function(e, t) {
    (function() {
        var n, r = "4.17.21",
            i = 200,
            l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            s = "Expected a function",
            a = "Invalid `variable` option passed into `_.template`",
            f = "__lodash_hash_undefined__",
            d = 500,
            p = "__lodash_placeholder__",
            g = 1,
            v = 2,
            m = 4,
            E = 1,
            S = 2,
            A = 1,
            y = 2,
            x = 4,
            k = 8,
            P = 16,
            N = 32,
            T = 64,
            F = 128,
            z = 256,
            q = 512,
            Q = 30,
            B = "...",
            K = 800,
            j = 16,
            U = 1,
            J = 2,
            oe = 3,
            le = 1 / 0,
            W = 9007199254740991,
            ee = 17976931348623157e292,
            _ = 0 / 0,
            ne = 4294967295,
            ae = ne - 1,
            O = ne >>> 1,
            de = [
                ["ary", F],
                ["bind", A],
                ["bindKey", y],
                ["curry", k],
                ["curryRight", P],
                ["flip", q],
                ["partial", N],
                ["partialRight", T],
                ["rearg", z]
            ],
            Pe = "[object Arguments]",
            me = "[object Array]",
            De = "[object AsyncFunction]",
            xe = "[object Boolean]",
            Fe = "[object Date]",
            Ie = "[object DOMException]",
            Ue = "[object Error]",
            ze = "[object Function]",
            Ge = "[object GeneratorFunction]",
            wt = "[object Map]",
            Gn = "[object Number]",
            he = "[object Null]",
            at = "[object Object]",
            Lt = "[object Promise]",
            kn = "[object Proxy]",
            bn = "[object RegExp]",
            Ht = "[object Set]",
            Rr = "[object String]",
            Vr = "[object Symbol]",
            Ko = "[object Undefined]",
            Pr = "[object WeakMap]",
            Kn = "[object WeakSet]",
            V = "[object ArrayBuffer]",
            re = "[object DataView]",
            pe = "[object Float32Array]",
            je = "[object Float64Array]",
            He = "[object Int8Array]",
            tn = "[object Int16Array]",
            Qn = "[object Int32Array]",
            _n = "[object Uint8Array]",
            qr = "[object Uint8ClampedArray]",
            Gr = "[object Uint16Array]",
            ot = "[object Uint32Array]",
            lu = /\b__p \+= '';/g,
            vr = /\b(__p \+=) '' \+/g,
            Wb = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Mv = /&(?:amp|lt|gt|quot|#39);/g,
            Lv = /[&<>"']/g,
            Vb = RegExp(Mv.source),
            qb = RegExp(Lv.source),
            Gb = /<%-([\s\S]+?)%>/g,
            Kb = /<%([\s\S]+?)%>/g,
            Fv = /<%=([\s\S]+?)%>/g,
            Qb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Yb = /^\w*$/,
            Xb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            ld = /[\\^$.*+?()[\]{}|]/g,
            Zb = RegExp(ld.source),
            ud = /^\s+/,
            Jb = /\s/,
            e_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            t_ = /\{\n\/\* \[wrapped with (.+)\] \*/,
            n_ = /,? & /,
            r_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            i_ = /[()=,{}\[\]\/\s]/,
            o_ = /\\(\\)?/g,
            l_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            zv = /\w*$/,
            u_ = /^[-+]0x[0-9a-f]+$/i,
            s_ = /^0b[01]+$/i,
            a_ = /^\[object .+?Constructor\]$/,
            c_ = /^0o[0-7]+$/i,
            f_ = /^(?:0|[1-9]\d*)$/,
            d_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ms = /($^)/,
            p_ = /['\n\r\u2028\u2029\\]/g,
            Ls = "\\ud800-\\udfff",
            h_ = "\\u0300-\\u036f",
            g_ = "\\ufe20-\\ufe2f",
            m_ = "\\u20d0-\\u20ff",
            $v = h_ + g_ + m_,
            Bv = "\\u2700-\\u27bf",
            Uv = "a-z\\xdf-\\xf6\\xf8-\\xff",
            v_ = "\\xac\\xb1\\xd7\\xf7",
            y_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            w_ = "\\u2000-\\u206f",
            x_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            jv = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Hv = "\\ufe0e\\ufe0f",
            Wv = v_ + y_ + w_ + x_,
            sd = "['’]",
            S_ = "[" + Ls + "]",
            Vv = "[" + Wv + "]",
            Fs = "[" + $v + "]",
            qv = "\\d+",
            E_ = "[" + Bv + "]",
            Gv = "[" + Uv + "]",
            Kv = "[^" + Ls + Wv + qv + Bv + Uv + jv + "]",
            ad = "\\ud83c[\\udffb-\\udfff]",
            C_ = "(?:" + Fs + "|" + ad + ")",
            Qv = "[^" + Ls + "]",
            cd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            fd = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Qo = "[" + jv + "]",
            Yv = "\\u200d",
            Xv = "(?:" + Gv + "|" + Kv + ")",
            k_ = "(?:" + Qo + "|" + Kv + ")",
            Zv = "(?:" + sd + "(?:d|ll|m|re|s|t|ve))?",
            Jv = "(?:" + sd + "(?:D|LL|M|RE|S|T|VE))?",
            ey = C_ + "?",
            ty = "[" + Hv + "]?",
            b_ = "(?:" + Yv + "(?:" + [Qv, cd, fd].join("|") + ")" + ty + ey + ")*",
            __ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            O_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            ny = ty + ey + b_,
            T_ = "(?:" + [E_, cd, fd].join("|") + ")" + ny,
            I_ = "(?:" + [Qv + Fs + "?", Fs, cd, fd, S_].join("|") + ")",
            R_ = RegExp(sd, "g"),
            P_ = RegExp(Fs, "g"),
            dd = RegExp(ad + "(?=" + ad + ")|" + I_ + ny, "g"),
            A_ = RegExp([Qo + "?" + Gv + "+" + Zv + "(?=" + [Vv, Qo, "$"].join("|") + ")", k_ + "+" + Jv + "(?=" + [Vv, Qo + Xv, "$"].join("|") + ")", Qo + "?" + Xv + "+" + Zv, Qo + "+" + Jv, O_, __, qv, T_].join("|"), "g"),
            D_ = RegExp("[" + Yv + Ls + $v + Hv + "]"),
            N_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            M_ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            L_ = -1,
            lt = {};
        lt[pe] = lt[je] = lt[He] = lt[tn] = lt[Qn] = lt[_n] = lt[qr] = lt[Gr] = lt[ot] = !0, lt[Pe] = lt[me] = lt[V] = lt[xe] = lt[re] = lt[Fe] = lt[Ue] = lt[ze] = lt[wt] = lt[Gn] = lt[at] = lt[bn] = lt[Ht] = lt[Rr] = lt[Pr] = !1;
        var tt = {};
        tt[Pe] = tt[me] = tt[V] = tt[re] = tt[xe] = tt[Fe] = tt[pe] = tt[je] = tt[He] = tt[tn] = tt[Qn] = tt[wt] = tt[Gn] = tt[at] = tt[bn] = tt[Ht] = tt[Rr] = tt[Vr] = tt[_n] = tt[qr] = tt[Gr] = tt[ot] = !0, tt[Ue] = tt[ze] = tt[Pr] = !1;
        var F_ = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            z_ = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            $_ = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            B_ = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            U_ = parseFloat,
            j_ = parseInt,
            ry = typeof Eu == "object" && Eu && Eu.Object === Object && Eu,
            H_ = typeof self == "object" && self && self.Object === Object && self,
            Ft = ry || H_ || Function("return this")(),
            pd = t && !t.nodeType && t,
            co = pd && !0 && e && !e.nodeType && e,
            iy = co && co.exports === pd,
            hd = iy && ry.process,
            Yn = function() {
                try {
                    var M = co && co.require && co.require("util").types;
                    return M || hd && hd.binding && hd.binding("util")
                } catch {}
            }(),
            oy = Yn && Yn.isArrayBuffer,
            ly = Yn && Yn.isDate,
            uy = Yn && Yn.isMap,
            sy = Yn && Yn.isRegExp,
            ay = Yn && Yn.isSet,
            cy = Yn && Yn.isTypedArray;

        function On(M, G, H) {
            switch (H.length) {
                case 0:
                    return M.call(G);
                case 1:
                    return M.call(G, H[0]);
                case 2:
                    return M.call(G, H[0], H[1]);
                case 3:
                    return M.call(G, H[0], H[1], H[2])
            }
            return M.apply(G, H)
        }

        function W_(M, G, H, se) {
            for (var Ee = -1, We = M == null ? 0 : M.length; ++Ee < We;) {
                var Ot = M[Ee];
                G(se, Ot, H(Ot), M)
            }
            return se
        }

        function Xn(M, G) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se && G(M[H], H, M) !== !1;);
            return M
        }

        function V_(M, G) {
            for (var H = M == null ? 0 : M.length; H-- && G(M[H], H, M) !== !1;);
            return M
        }

        function fy(M, G) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se;)
                if (!G(M[H], H, M)) return !1;
            return !0
        }

        function wi(M, G) {
            for (var H = -1, se = M == null ? 0 : M.length, Ee = 0, We = []; ++H < se;) {
                var Ot = M[H];
                G(Ot, H, M) && (We[Ee++] = Ot)
            }
            return We
        }

        function zs(M, G) {
            var H = M == null ? 0 : M.length;
            return !!H && Yo(M, G, 0) > -1
        }

        function gd(M, G, H) {
            for (var se = -1, Ee = M == null ? 0 : M.length; ++se < Ee;)
                if (H(G, M[se])) return !0;
            return !1
        }

        function ct(M, G) {
            for (var H = -1, se = M == null ? 0 : M.length, Ee = Array(se); ++H < se;) Ee[H] = G(M[H], H, M);
            return Ee
        }

        function xi(M, G) {
            for (var H = -1, se = G.length, Ee = M.length; ++H < se;) M[Ee + H] = G[H];
            return M
        }

        function md(M, G, H, se) {
            var Ee = -1,
                We = M == null ? 0 : M.length;
            for (se && We && (H = M[++Ee]); ++Ee < We;) H = G(H, M[Ee], Ee, M);
            return H
        }

        function q_(M, G, H, se) {
            var Ee = M == null ? 0 : M.length;
            for (se && Ee && (H = M[--Ee]); Ee--;) H = G(H, M[Ee], Ee, M);
            return H
        }

        function vd(M, G) {
            for (var H = -1, se = M == null ? 0 : M.length; ++H < se;)
                if (G(M[H], H, M)) return !0;
            return !1
        }
        var G_ = yd("length");

        function K_(M) {
            return M.split("")
        }

        function Q_(M) {
            return M.match(r_) || []
        }

        function dy(M, G, H) {
            var se;
            return H(M, function(Ee, We, Ot) {
                if (G(Ee, We, Ot)) return se = We, !1
            }), se
        }

        function $s(M, G, H, se) {
            for (var Ee = M.length, We = H + (se ? 1 : -1); se ? We-- : ++We < Ee;)
                if (G(M[We], We, M)) return We;
            return -1
        }

        function Yo(M, G, H) {
            return G === G ? uO(M, G, H) : $s(M, py, H)
        }

        function Y_(M, G, H, se) {
            for (var Ee = H - 1, We = M.length; ++Ee < We;)
                if (se(M[Ee], G)) return Ee;
            return -1
        }

        function py(M) {
            return M !== M
        }

        function hy(M, G) {
            var H = M == null ? 0 : M.length;
            return H ? xd(M, G) / H : _
        }

        function yd(M) {
            return function(G) {
                return G == null ? n : G[M]
            }
        }

        function wd(M) {
            return function(G) {
                return M == null ? n : M[G]
            }
        }

        function gy(M, G, H, se, Ee) {
            return Ee(M, function(We, Ot, et) {
                H = se ? (se = !1, We) : G(H, We, Ot, et)
            }), H
        }

        function X_(M, G) {
            var H = M.length;
            for (M.sort(G); H--;) M[H] = M[H].value;
            return M
        }

        function xd(M, G) {
            for (var H, se = -1, Ee = M.length; ++se < Ee;) {
                var We = G(M[se]);
                We !== n && (H = H === n ? We : H + We)
            }
            return H
        }

        function Sd(M, G) {
            for (var H = -1, se = Array(M); ++H < M;) se[H] = G(H);
            return se
        }

        function Z_(M, G) {
            return ct(G, function(H) {
                return [H, M[H]]
            })
        }

        function my(M) {
            return M && M.slice(0, xy(M) + 1).replace(ud, "")
        }

        function Tn(M) {
            return function(G) {
                return M(G)
            }
        }

        function Ed(M, G) {
            return ct(G, function(H) {
                return M[H]
            })
        }

        function uu(M, G) {
            return M.has(G)
        }

        function vy(M, G) {
            for (var H = -1, se = M.length; ++H < se && Yo(G, M[H], 0) > -1;);
            return H
        }

        function yy(M, G) {
            for (var H = M.length; H-- && Yo(G, M[H], 0) > -1;);
            return H
        }

        function J_(M, G) {
            for (var H = M.length, se = 0; H--;) M[H] === G && ++se;
            return se
        }
        var eO = wd(F_),
            tO = wd(z_);

        function nO(M) {
            return "\\" + B_[M]
        }

        function rO(M, G) {
            return M == null ? n : M[G]
        }

        function Xo(M) {
            return D_.test(M)
        }

        function iO(M) {
            return N_.test(M)
        }

        function oO(M) {
            for (var G, H = []; !(G = M.next()).done;) H.push(G.value);
            return H
        }

        function Cd(M) {
            var G = -1,
                H = Array(M.size);
            return M.forEach(function(se, Ee) {
                H[++G] = [Ee, se]
            }), H
        }

        function wy(M, G) {
            return function(H) {
                return M(G(H))
            }
        }

        function Si(M, G) {
            for (var H = -1, se = M.length, Ee = 0, We = []; ++H < se;) {
                var Ot = M[H];
                (Ot === G || Ot === p) && (M[H] = p, We[Ee++] = H)
            }
            return We
        }

        function Bs(M) {
            var G = -1,
                H = Array(M.size);
            return M.forEach(function(se) {
                H[++G] = se
            }), H
        }

        function lO(M) {
            var G = -1,
                H = Array(M.size);
            return M.forEach(function(se) {
                H[++G] = [se, se]
            }), H
        }

        function uO(M, G, H) {
            for (var se = H - 1, Ee = M.length; ++se < Ee;)
                if (M[se] === G) return se;
            return -1
        }

        function sO(M, G, H) {
            for (var se = H + 1; se--;)
                if (M[se] === G) return se;
            return se
        }

        function Zo(M) {
            return Xo(M) ? cO(M) : G_(M)
        }

        function yr(M) {
            return Xo(M) ? fO(M) : K_(M)
        }

        function xy(M) {
            for (var G = M.length; G-- && Jb.test(M.charAt(G)););
            return G
        }
        var aO = wd($_);

        function cO(M) {
            for (var G = dd.lastIndex = 0; dd.test(M);) ++G;
            return G
        }

        function fO(M) {
            return M.match(dd) || []
        }

        function dO(M) {
            return M.match(A_) || []
        }
        var pO = function M(G) {
                G = G == null ? Ft : Jo.defaults(Ft.Object(), G, Jo.pick(Ft, M_));
                var H = G.Array,
                    se = G.Date,
                    Ee = G.Error,
                    We = G.Function,
                    Ot = G.Math,
                    et = G.Object,
                    kd = G.RegExp,
                    hO = G.String,
                    Zn = G.TypeError,
                    Us = H.prototype,
                    gO = We.prototype,
                    el = et.prototype,
                    js = G["__core-js_shared__"],
                    Hs = gO.toString,
                    Ke = el.hasOwnProperty,
                    mO = 0,
                    Sy = function() {
                        var o = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
                        return o ? "Symbol(src)_1." + o : ""
                    }(),
                    Ws = el.toString,
                    vO = Hs.call(et),
                    yO = Ft._,
                    wO = kd("^" + Hs.call(Ke).replace(ld, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Vs = iy ? G.Buffer : n,
                    Ei = G.Symbol,
                    qs = G.Uint8Array,
                    Ey = Vs ? Vs.allocUnsafe : n,
                    Gs = wy(et.getPrototypeOf, et),
                    Cy = et.create,
                    ky = el.propertyIsEnumerable,
                    Ks = Us.splice,
                    by = Ei ? Ei.isConcatSpreadable : n,
                    su = Ei ? Ei.iterator : n,
                    fo = Ei ? Ei.toStringTag : n,
                    Qs = function() {
                        try {
                            var o = vo(et, "defineProperty");
                            return o({}, "", {}), o
                        } catch {}
                    }(),
                    xO = G.clearTimeout !== Ft.clearTimeout && G.clearTimeout,
                    SO = se && se.now !== Ft.Date.now && se.now,
                    EO = G.setTimeout !== Ft.setTimeout && G.setTimeout,
                    Ys = Ot.ceil,
                    Xs = Ot.floor,
                    bd = et.getOwnPropertySymbols,
                    CO = Vs ? Vs.isBuffer : n,
                    _y = G.isFinite,
                    kO = Us.join,
                    bO = wy(et.keys, et),
                    Tt = Ot.max,
                    Wt = Ot.min,
                    _O = se.now,
                    OO = G.parseInt,
                    Oy = Ot.random,
                    TO = Us.reverse,
                    _d = vo(G, "DataView"),
                    au = vo(G, "Map"),
                    Od = vo(G, "Promise"),
                    tl = vo(G, "Set"),
                    cu = vo(G, "WeakMap"),
                    fu = vo(et, "create"),
                    Zs = cu && new cu,
                    nl = {},
                    IO = yo(_d),
                    RO = yo(au),
                    PO = yo(Od),
                    AO = yo(tl),
                    DO = yo(cu),
                    Js = Ei ? Ei.prototype : n,
                    du = Js ? Js.valueOf : n,
                    Ty = Js ? Js.toString : n;

                function C(o) {
                    if (xt(o) && !ke(o) && !(o instanceof Me)) {
                        if (o instanceof Jn) return o;
                        if (Ke.call(o, "__wrapped__")) return I0(o)
                    }
                    return new Jn(o)
                }
                var rl = function() {
                    function o() {}
                    return function(u) {
                        if (!ht(u)) return {};
                        if (Cy) return Cy(u);
                        o.prototype = u;
                        var c = new o;
                        return o.prototype = n, c
                    }
                }();

                function ea() {}

                function Jn(o, u) {
                    this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!u, this.__index__ = 0, this.__values__ = n
                }
                C.templateSettings = {
                    escape: Gb,
                    evaluate: Kb,
                    interpolate: Fv,
                    variable: "",
                    imports: {
                        _: C
                    }
                }, C.prototype = ea.prototype, C.prototype.constructor = C, Jn.prototype = rl(ea.prototype), Jn.prototype.constructor = Jn;

                function Me(o) {
                    this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ne, this.__views__ = []
                }

                function NO() {
                    var o = new Me(this.__wrapped__);
                    return o.__actions__ = dn(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = dn(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = dn(this.__views__), o
                }

                function MO() {
                    if (this.__filtered__) {
                        var o = new Me(this);
                        o.__dir__ = -1, o.__filtered__ = !0
                    } else o = this.clone(), o.__dir__ *= -1;
                    return o
                }

                function LO() {
                    var o = this.__wrapped__.value(),
                        u = this.__dir__,
                        c = ke(o),
                        h = u < 0,
                        w = c ? o.length : 0,
                        b = KT(0, w, this.__views__),
                        I = b.start,
                        D = b.end,
                        L = D - I,
                        Y = h ? D : I - 1,
                        X = this.__iteratees__,
                        Z = X.length,
                        ue = 0,
                        fe = Wt(L, this.__takeCount__);
                    if (!c || !h && w == L && fe == L) return Zy(o, this.__actions__);
                    var ve = [];
                    e: for (; L-- && ue < fe;) {
                        Y += u;
                        for (var Re = -1, ye = o[Y]; ++Re < Z;) {
                            var Ne = X[Re],
                                $e = Ne.iteratee,
                                Pn = Ne.type,
                                on = $e(ye);
                            if (Pn == J) ye = on;
                            else if (!on) {
                                if (Pn == U) continue e;
                                break e
                            }
                        }
                        ve[ue++] = ye
                    }
                    return ve
                }
                Me.prototype = rl(ea.prototype), Me.prototype.constructor = Me;

                function po(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function FO() {
                    this.__data__ = fu ? fu(null) : {}, this.size = 0
                }

                function zO(o) {
                    var u = this.has(o) && delete this.__data__[o];
                    return this.size -= u ? 1 : 0, u
                }

                function $O(o) {
                    var u = this.__data__;
                    if (fu) {
                        var c = u[o];
                        return c === f ? n : c
                    }
                    return Ke.call(u, o) ? u[o] : n
                }

                function BO(o) {
                    var u = this.__data__;
                    return fu ? u[o] !== n : Ke.call(u, o)
                }

                function UO(o, u) {
                    var c = this.__data__;
                    return this.size += this.has(o) ? 0 : 1, c[o] = fu && u === n ? f : u, this
                }
                po.prototype.clear = FO, po.prototype.delete = zO, po.prototype.get = $O, po.prototype.has = BO, po.prototype.set = UO;

                function Kr(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function jO() {
                    this.__data__ = [], this.size = 0
                }

                function HO(o) {
                    var u = this.__data__,
                        c = ta(u, o);
                    if (c < 0) return !1;
                    var h = u.length - 1;
                    return c == h ? u.pop() : Ks.call(u, c, 1), --this.size, !0
                }

                function WO(o) {
                    var u = this.__data__,
                        c = ta(u, o);
                    return c < 0 ? n : u[c][1]
                }

                function VO(o) {
                    return ta(this.__data__, o) > -1
                }

                function qO(o, u) {
                    var c = this.__data__,
                        h = ta(c, o);
                    return h < 0 ? (++this.size, c.push([o, u])) : c[h][1] = u, this
                }
                Kr.prototype.clear = jO, Kr.prototype.delete = HO, Kr.prototype.get = WO, Kr.prototype.has = VO, Kr.prototype.set = qO;

                function Qr(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.clear(); ++u < c;) {
                        var h = o[u];
                        this.set(h[0], h[1])
                    }
                }

                function GO() {
                    this.size = 0, this.__data__ = {
                        hash: new po,
                        map: new(au || Kr),
                        string: new po
                    }
                }

                function KO(o) {
                    var u = pa(this, o).delete(o);
                    return this.size -= u ? 1 : 0, u
                }

                function QO(o) {
                    return pa(this, o).get(o)
                }

                function YO(o) {
                    return pa(this, o).has(o)
                }

                function XO(o, u) {
                    var c = pa(this, o),
                        h = c.size;
                    return c.set(o, u), this.size += c.size == h ? 0 : 1, this
                }
                Qr.prototype.clear = GO, Qr.prototype.delete = KO, Qr.prototype.get = QO, Qr.prototype.has = YO, Qr.prototype.set = XO;

                function ho(o) {
                    var u = -1,
                        c = o == null ? 0 : o.length;
                    for (this.__data__ = new Qr; ++u < c;) this.add(o[u])
                }

                function ZO(o) {
                    return this.__data__.set(o, f), this
                }

                function JO(o) {
                    return this.__data__.has(o)
                }
                ho.prototype.add = ho.prototype.push = ZO, ho.prototype.has = JO;

                function wr(o) {
                    var u = this.__data__ = new Kr(o);
                    this.size = u.size
                }

                function eT() {
                    this.__data__ = new Kr, this.size = 0
                }

                function tT(o) {
                    var u = this.__data__,
                        c = u.delete(o);
                    return this.size = u.size, c
                }

                function nT(o) {
                    return this.__data__.get(o)
                }

                function rT(o) {
                    return this.__data__.has(o)
                }

                function iT(o, u) {
                    var c = this.__data__;
                    if (c instanceof Kr) {
                        var h = c.__data__;
                        if (!au || h.length < i - 1) return h.push([o, u]), this.size = ++c.size, this;
                        c = this.__data__ = new Qr(h)
                    }
                    return c.set(o, u), this.size = c.size, this
                }
                wr.prototype.clear = eT, wr.prototype.delete = tT, wr.prototype.get = nT, wr.prototype.has = rT, wr.prototype.set = iT;

                function Iy(o, u) {
                    var c = ke(o),
                        h = !c && wo(o),
                        w = !c && !h && Oi(o),
                        b = !c && !h && !w && ul(o),
                        I = c || h || w || b,
                        D = I ? Sd(o.length, hO) : [],
                        L = D.length;
                    for (var Y in o)(u || Ke.call(o, Y)) && !(I && (Y == "length" || w && (Y == "offset" || Y == "parent") || b && (Y == "buffer" || Y == "byteLength" || Y == "byteOffset") || Jr(Y, L))) && D.push(Y);
                    return D
                }

                function Ry(o) {
                    var u = o.length;
                    return u ? o[zd(0, u - 1)] : n
                }

                function oT(o, u) {
                    return ha(dn(o), go(u, 0, o.length))
                }

                function lT(o) {
                    return ha(dn(o))
                }

                function Td(o, u, c) {
                    (c !== n && !xr(o[u], c) || c === n && !(u in o)) && Yr(o, u, c)
                }

                function pu(o, u, c) {
                    var h = o[u];
                    (!(Ke.call(o, u) && xr(h, c)) || c === n && !(u in o)) && Yr(o, u, c)
                }

                function ta(o, u) {
                    for (var c = o.length; c--;)
                        if (xr(o[c][0], u)) return c;
                    return -1
                }

                function uT(o, u, c, h) {
                    return Ci(o, function(w, b, I) {
                        u(h, w, c(w), I)
                    }), h
                }

                function Py(o, u) {
                    return o && Dr(u, Pt(u), o)
                }

                function sT(o, u) {
                    return o && Dr(u, hn(u), o)
                }

                function Yr(o, u, c) {
                    u == "__proto__" && Qs ? Qs(o, u, {
                        configurable: !0,
                        enumerable: !0,
                        value: c,
                        writable: !0
                    }) : o[u] = c
                }

                function Id(o, u) {
                    for (var c = -1, h = u.length, w = H(h), b = o == null; ++c < h;) w[c] = b ? n : ap(o, u[c]);
                    return w
                }

                function go(o, u, c) {
                    return o === o && (c !== n && (o = o <= c ? o : c), u !== n && (o = o >= u ? o : u)), o
                }

                function er(o, u, c, h, w, b) {
                    var I, D = u & g,
                        L = u & v,
                        Y = u & m;
                    if (c && (I = w ? c(o, h, w, b) : c(o)), I !== n) return I;
                    if (!ht(o)) return o;
                    var X = ke(o);
                    if (X) {
                        if (I = YT(o), !D) return dn(o, I)
                    } else {
                        var Z = Vt(o),
                            ue = Z == ze || Z == Ge;
                        if (Oi(o)) return t0(o, D);
                        if (Z == at || Z == Pe || ue && !w) {
                            if (I = L || ue ? {} : x0(o), !D) return L ? $T(o, sT(I, o)) : zT(o, Py(I, o))
                        } else {
                            if (!tt[Z]) return w ? o : {};
                            I = XT(o, Z, D)
                        }
                    }
                    b || (b = new wr);
                    var fe = b.get(o);
                    if (fe) return fe;
                    b.set(o, I), Q0(o) ? o.forEach(function(ye) {
                        I.add(er(ye, u, c, ye, o, b))
                    }) : G0(o) && o.forEach(function(ye, Ne) {
                        I.set(Ne, er(ye, u, c, Ne, o, b))
                    });
                    var ve = Y ? L ? Qd : Kd : L ? hn : Pt,
                        Re = X ? n : ve(o);
                    return Xn(Re || o, function(ye, Ne) {
                        Re && (Ne = ye, ye = o[Ne]), pu(I, Ne, er(ye, u, c, Ne, o, b))
                    }), I
                }

                function aT(o) {
                    var u = Pt(o);
                    return function(c) {
                        return Ay(c, o, u)
                    }
                }

                function Ay(o, u, c) {
                    var h = c.length;
                    if (o == null) return !h;
                    for (o = et(o); h--;) {
                        var w = c[h],
                            b = u[w],
                            I = o[w];
                        if (I === n && !(w in o) || !b(I)) return !1
                    }
                    return !0
                }

                function Dy(o, u, c) {
                    if (typeof o != "function") throw new Zn(s);
                    return xu(function() {
                        o.apply(n, c)
                    }, u)
                }

                function hu(o, u, c, h) {
                    var w = -1,
                        b = zs,
                        I = !0,
                        D = o.length,
                        L = [],
                        Y = u.length;
                    if (!D) return L;
                    c && (u = ct(u, Tn(c))), h ? (b = gd, I = !1) : u.length >= i && (b = uu, I = !1, u = new ho(u));
                    e: for (; ++w < D;) {
                        var X = o[w],
                            Z = c == null ? X : c(X);
                        if (X = h || X !== 0 ? X : 0, I && Z === Z) {
                            for (var ue = Y; ue--;)
                                if (u[ue] === Z) continue e;
                            L.push(X)
                        } else b(u, Z, h) || L.push(X)
                    }
                    return L
                }
                var Ci = l0(Ar),
                    Ny = l0(Pd, !0);

                function cT(o, u) {
                    var c = !0;
                    return Ci(o, function(h, w, b) {
                        return c = !!u(h, w, b), c
                    }), c
                }

                function na(o, u, c) {
                    for (var h = -1, w = o.length; ++h < w;) {
                        var b = o[h],
                            I = u(b);
                        if (I != null && (D === n ? I === I && !Rn(I) : c(I, D))) var D = I,
                            L = b
                    }
                    return L
                }

                function fT(o, u, c, h) {
                    var w = o.length;
                    for (c = Te(c), c < 0 && (c = -c > w ? 0 : w + c), h = h === n || h > w ? w : Te(h), h < 0 && (h += w), h = c > h ? 0 : X0(h); c < h;) o[c++] = u;
                    return o
                }

                function My(o, u) {
                    var c = [];
                    return Ci(o, function(h, w, b) {
                        u(h, w, b) && c.push(h)
                    }), c
                }

                function zt(o, u, c, h, w) {
                    var b = -1,
                        I = o.length;
                    for (c || (c = JT), w || (w = []); ++b < I;) {
                        var D = o[b];
                        u > 0 && c(D) ? u > 1 ? zt(D, u - 1, c, h, w) : xi(w, D) : h || (w[w.length] = D)
                    }
                    return w
                }
                var Rd = u0(),
                    Ly = u0(!0);

                function Ar(o, u) {
                    return o && Rd(o, u, Pt)
                }

                function Pd(o, u) {
                    return o && Ly(o, u, Pt)
                }

                function ra(o, u) {
                    return wi(u, function(c) {
                        return ei(o[c])
                    })
                }

                function mo(o, u) {
                    u = bi(u, o);
                    for (var c = 0, h = u.length; o != null && c < h;) o = o[Nr(u[c++])];
                    return c && c == h ? o : n
                }

                function Fy(o, u, c) {
                    var h = u(o);
                    return ke(o) ? h : xi(h, c(o))
                }

                function nn(o) {
                    return o == null ? o === n ? Ko : he : fo && fo in et(o) ? GT(o) : lI(o)
                }

                function Ad(o, u) {
                    return o > u
                }

                function dT(o, u) {
                    return o != null && Ke.call(o, u)
                }

                function pT(o, u) {
                    return o != null && u in et(o)
                }

                function hT(o, u, c) {
                    return o >= Wt(u, c) && o < Tt(u, c)
                }

                function Dd(o, u, c) {
                    for (var h = c ? gd : zs, w = o[0].length, b = o.length, I = b, D = H(b), L = 1 / 0, Y = []; I--;) {
                        var X = o[I];
                        I && u && (X = ct(X, Tn(u))), L = Wt(X.length, L), D[I] = !c && (u || w >= 120 && X.length >= 120) ? new ho(I && X) : n
                    }
                    X = o[0];
                    var Z = -1,
                        ue = D[0];
                    e: for (; ++Z < w && Y.length < L;) {
                        var fe = X[Z],
                            ve = u ? u(fe) : fe;
                        if (fe = c || fe !== 0 ? fe : 0, !(ue ? uu(ue, ve) : h(Y, ve, c))) {
                            for (I = b; --I;) {
                                var Re = D[I];
                                if (!(Re ? uu(Re, ve) : h(o[I], ve, c))) continue e
                            }
                            ue && ue.push(ve), Y.push(fe)
                        }
                    }
                    return Y
                }

                function gT(o, u, c, h) {
                    return Ar(o, function(w, b, I) {
                        u(h, c(w), b, I)
                    }), h
                }

                function gu(o, u, c) {
                    u = bi(u, o), o = k0(o, u);
                    var h = o == null ? o : o[Nr(nr(u))];
                    return h == null ? n : On(h, o, c)
                }

                function zy(o) {
                    return xt(o) && nn(o) == Pe
                }

                function mT(o) {
                    return xt(o) && nn(o) == V
                }

                function vT(o) {
                    return xt(o) && nn(o) == Fe
                }

                function mu(o, u, c, h, w) {
                    return o === u ? !0 : o == null || u == null || !xt(o) && !xt(u) ? o !== o && u !== u : yT(o, u, c, h, mu, w)
                }

                function yT(o, u, c, h, w, b) {
                    var I = ke(o),
                        D = ke(u),
                        L = I ? me : Vt(o),
                        Y = D ? me : Vt(u);
                    L = L == Pe ? at : L, Y = Y == Pe ? at : Y;
                    var X = L == at,
                        Z = Y == at,
                        ue = L == Y;
                    if (ue && Oi(o)) {
                        if (!Oi(u)) return !1;
                        I = !0, X = !1
                    }
                    if (ue && !X) return b || (b = new wr), I || ul(o) ? v0(o, u, c, h, w, b) : VT(o, u, L, c, h, w, b);
                    if (!(c & E)) {
                        var fe = X && Ke.call(o, "__wrapped__"),
                            ve = Z && Ke.call(u, "__wrapped__");
                        if (fe || ve) {
                            var Re = fe ? o.value() : o,
                                ye = ve ? u.value() : u;
                            return b || (b = new wr), w(Re, ye, c, h, b)
                        }
                    }
                    return ue ? (b || (b = new wr), qT(o, u, c, h, w, b)) : !1
                }

                function wT(o) {
                    return xt(o) && Vt(o) == wt
                }

                function Nd(o, u, c, h) {
                    var w = c.length,
                        b = w,
                        I = !h;
                    if (o == null) return !b;
                    for (o = et(o); w--;) {
                        var D = c[w];
                        if (I && D[2] ? D[1] !== o[D[0]] : !(D[0] in o)) return !1
                    }
                    for (; ++w < b;) {
                        D = c[w];
                        var L = D[0],
                            Y = o[L],
                            X = D[1];
                        if (I && D[2]) {
                            if (Y === n && !(L in o)) return !1
                        } else {
                            var Z = new wr;
                            if (h) var ue = h(Y, X, L, o, u, Z);
                            if (!(ue === n ? mu(X, Y, E | S, h, Z) : ue)) return !1
                        }
                    }
                    return !0
                }

                function $y(o) {
                    if (!ht(o) || tI(o)) return !1;
                    var u = ei(o) ? wO : a_;
                    return u.test(yo(o))
                }

                function xT(o) {
                    return xt(o) && nn(o) == bn
                }

                function ST(o) {
                    return xt(o) && Vt(o) == Ht
                }

                function ET(o) {
                    return xt(o) && xa(o.length) && !!lt[nn(o)]
                }

                function By(o) {
                    return typeof o == "function" ? o : o == null ? gn : typeof o == "object" ? ke(o) ? Hy(o[0], o[1]) : jy(o) : s1(o)
                }

                function Md(o) {
                    if (!wu(o)) return bO(o);
                    var u = [];
                    for (var c in et(o)) Ke.call(o, c) && c != "constructor" && u.push(c);
                    return u
                }

                function CT(o) {
                    if (!ht(o)) return oI(o);
                    var u = wu(o),
                        c = [];
                    for (var h in o) h == "constructor" && (u || !Ke.call(o, h)) || c.push(h);
                    return c
                }

                function Ld(o, u) {
                    return o < u
                }

                function Uy(o, u) {
                    var c = -1,
                        h = pn(o) ? H(o.length) : [];
                    return Ci(o, function(w, b, I) {
                        h[++c] = u(w, b, I)
                    }), h
                }

                function jy(o) {
                    var u = Xd(o);
                    return u.length == 1 && u[0][2] ? E0(u[0][0], u[0][1]) : function(c) {
                        return c === o || Nd(c, o, u)
                    }
                }

                function Hy(o, u) {
                    return Jd(o) && S0(u) ? E0(Nr(o), u) : function(c) {
                        var h = ap(c, o);
                        return h === n && h === u ? cp(c, o) : mu(u, h, E | S)
                    }
                }

                function ia(o, u, c, h, w) {
                    o !== u && Rd(u, function(b, I) {
                        if (w || (w = new wr), ht(b)) kT(o, u, I, c, ia, h, w);
                        else {
                            var D = h ? h(tp(o, I), b, I + "", o, u, w) : n;
                            D === n && (D = b), Td(o, I, D)
                        }
                    }, hn)
                }

                function kT(o, u, c, h, w, b, I) {
                    var D = tp(o, c),
                        L = tp(u, c),
                        Y = I.get(L);
                    if (Y) {
                        Td(o, c, Y);
                        return
                    }
                    var X = b ? b(D, L, c + "", o, u, I) : n,
                        Z = X === n;
                    if (Z) {
                        var ue = ke(L),
                            fe = !ue && Oi(L),
                            ve = !ue && !fe && ul(L);
                        X = L, ue || fe || ve ? ke(D) ? X = D : Et(D) ? X = dn(D) : fe ? (Z = !1, X = t0(L, !0)) : ve ? (Z = !1, X = n0(L, !0)) : X = [] : Su(L) || wo(L) ? (X = D, wo(D) ? X = Z0(D) : (!ht(D) || ei(D)) && (X = x0(L))) : Z = !1
                    }
                    Z && (I.set(L, X), w(X, L, h, b, I), I.delete(L)), Td(o, c, X)
                }

                function Wy(o, u) {
                    var c = o.length;
                    if (c) return u += u < 0 ? c : 0, Jr(u, c) ? o[u] : n
                }

                function Vy(o, u, c) {
                    u.length ? u = ct(u, function(b) {
                        return ke(b) ? function(I) {
                            return mo(I, b.length === 1 ? b[0] : b)
                        } : b
                    }) : u = [gn];
                    var h = -1;
                    u = ct(u, Tn(ge()));
                    var w = Uy(o, function(b, I, D) {
                        var L = ct(u, function(Y) {
                            return Y(b)
                        });
                        return {
                            criteria: L,
                            index: ++h,
                            value: b
                        }
                    });
                    return X_(w, function(b, I) {
                        return FT(b, I, c)
                    })
                }

                function bT(o, u) {
                    return qy(o, u, function(c, h) {
                        return cp(o, h)
                    })
                }

                function qy(o, u, c) {
                    for (var h = -1, w = u.length, b = {}; ++h < w;) {
                        var I = u[h],
                            D = mo(o, I);
                        c(D, I) && vu(b, bi(I, o), D)
                    }
                    return b
                }

                function _T(o) {
                    return function(u) {
                        return mo(u, o)
                    }
                }

                function Fd(o, u, c, h) {
                    var w = h ? Y_ : Yo,
                        b = -1,
                        I = u.length,
                        D = o;
                    for (o === u && (u = dn(u)), c && (D = ct(o, Tn(c))); ++b < I;)
                        for (var L = 0, Y = u[b], X = c ? c(Y) : Y;
                            (L = w(D, X, L, h)) > -1;) D !== o && Ks.call(D, L, 1), Ks.call(o, L, 1);
                    return o
                }

                function Gy(o, u) {
                    for (var c = o ? u.length : 0, h = c - 1; c--;) {
                        var w = u[c];
                        if (c == h || w !== b) {
                            var b = w;
                            Jr(w) ? Ks.call(o, w, 1) : Ud(o, w)
                        }
                    }
                    return o
                }

                function zd(o, u) {
                    return o + Xs(Oy() * (u - o + 1))
                }

                function OT(o, u, c, h) {
                    for (var w = -1, b = Tt(Ys((u - o) / (c || 1)), 0), I = H(b); b--;) I[h ? b : ++w] = o, o += c;
                    return I
                }

                function $d(o, u) {
                    var c = "";
                    if (!o || u < 1 || u > W) return c;
                    do u % 2 && (c += o), u = Xs(u / 2), u && (o += o); while (u);
                    return c
                }

                function Ae(o, u) {
                    return np(C0(o, u, gn), o + "")
                }

                function TT(o) {
                    return Ry(sl(o))
                }

                function IT(o, u) {
                    var c = sl(o);
                    return ha(c, go(u, 0, c.length))
                }

                function vu(o, u, c, h) {
                    if (!ht(o)) return o;
                    u = bi(u, o);
                    for (var w = -1, b = u.length, I = b - 1, D = o; D != null && ++w < b;) {
                        var L = Nr(u[w]),
                            Y = c;
                        if (L === "__proto__" || L === "constructor" || L === "prototype") return o;
                        if (w != I) {
                            var X = D[L];
                            Y = h ? h(X, L, D) : n, Y === n && (Y = ht(X) ? X : Jr(u[w + 1]) ? [] : {})
                        }
                        pu(D, L, Y), D = D[L]
                    }
                    return o
                }
                var Ky = Zs ? function(o, u) {
                        return Zs.set(o, u), o
                    } : gn,
                    RT = Qs ? function(o, u) {
                        return Qs(o, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: dp(u),
                            writable: !0
                        })
                    } : gn;

                function PT(o) {
                    return ha(sl(o))
                }

                function tr(o, u, c) {
                    var h = -1,
                        w = o.length;
                    u < 0 && (u = -u > w ? 0 : w + u), c = c > w ? w : c, c < 0 && (c += w), w = u > c ? 0 : c - u >>> 0, u >>>= 0;
                    for (var b = H(w); ++h < w;) b[h] = o[h + u];
                    return b
                }

                function AT(o, u) {
                    var c;
                    return Ci(o, function(h, w, b) {
                        return c = u(h, w, b), !c
                    }), !!c
                }

                function oa(o, u, c) {
                    var h = 0,
                        w = o == null ? h : o.length;
                    if (typeof u == "number" && u === u && w <= O) {
                        for (; h < w;) {
                            var b = h + w >>> 1,
                                I = o[b];
                            I !== null && !Rn(I) && (c ? I <= u : I < u) ? h = b + 1 : w = b
                        }
                        return w
                    }
                    return Bd(o, u, gn, c)
                }

                function Bd(o, u, c, h) {
                    var w = 0,
                        b = o == null ? 0 : o.length;
                    if (b === 0) return 0;
                    u = c(u);
                    for (var I = u !== u, D = u === null, L = Rn(u), Y = u === n; w < b;) {
                        var X = Xs((w + b) / 2),
                            Z = c(o[X]),
                            ue = Z !== n,
                            fe = Z === null,
                            ve = Z === Z,
                            Re = Rn(Z);
                        if (I) var ye = h || ve;
                        else Y ? ye = ve && (h || ue) : D ? ye = ve && ue && (h || !fe) : L ? ye = ve && ue && !fe && (h || !Re) : fe || Re ? ye = !1 : ye = h ? Z <= u : Z < u;
                        ye ? w = X + 1 : b = X
                    }
                    return Wt(b, ae)
                }

                function Qy(o, u) {
                    for (var c = -1, h = o.length, w = 0, b = []; ++c < h;) {
                        var I = o[c],
                            D = u ? u(I) : I;
                        if (!c || !xr(D, L)) {
                            var L = D;
                            b[w++] = I === 0 ? 0 : I
                        }
                    }
                    return b
                }

                function Yy(o) {
                    return typeof o == "number" ? o : Rn(o) ? _ : +o
                }

                function In(o) {
                    if (typeof o == "string") return o;
                    if (ke(o)) return ct(o, In) + "";
                    if (Rn(o)) return Ty ? Ty.call(o) : "";
                    var u = o + "";
                    return u == "0" && 1 / o == -le ? "-0" : u
                }

                function ki(o, u, c) {
                    var h = -1,
                        w = zs,
                        b = o.length,
                        I = !0,
                        D = [],
                        L = D;
                    if (c) I = !1, w = gd;
                    else if (b >= i) {
                        var Y = u ? null : HT(o);
                        if (Y) return Bs(Y);
                        I = !1, w = uu, L = new ho
                    } else L = u ? [] : D;
                    e: for (; ++h < b;) {
                        var X = o[h],
                            Z = u ? u(X) : X;
                        if (X = c || X !== 0 ? X : 0, I && Z === Z) {
                            for (var ue = L.length; ue--;)
                                if (L[ue] === Z) continue e;
                            u && L.push(Z), D.push(X)
                        } else w(L, Z, c) || (L !== D && L.push(Z), D.push(X))
                    }
                    return D
                }

                function Ud(o, u) {
                    return u = bi(u, o), o = k0(o, u), o == null || delete o[Nr(nr(u))]
                }

                function Xy(o, u, c, h) {
                    return vu(o, u, c(mo(o, u)), h)
                }

                function la(o, u, c, h) {
                    for (var w = o.length, b = h ? w : -1;
                        (h ? b-- : ++b < w) && u(o[b], b, o););
                    return c ? tr(o, h ? 0 : b, h ? b + 1 : w) : tr(o, h ? b + 1 : 0, h ? w : b)
                }

                function Zy(o, u) {
                    var c = o;
                    return c instanceof Me && (c = c.value()), md(u, function(h, w) {
                        return w.func.apply(w.thisArg, xi([h], w.args))
                    }, c)
                }

                function jd(o, u, c) {
                    var h = o.length;
                    if (h < 2) return h ? ki(o[0]) : [];
                    for (var w = -1, b = H(h); ++w < h;)
                        for (var I = o[w], D = -1; ++D < h;) D != w && (b[w] = hu(b[w] || I, o[D], u, c));
                    return ki(zt(b, 1), u, c)
                }

                function Jy(o, u, c) {
                    for (var h = -1, w = o.length, b = u.length, I = {}; ++h < w;) {
                        var D = h < b ? u[h] : n;
                        c(I, o[h], D)
                    }
                    return I
                }

                function Hd(o) {
                    return Et(o) ? o : []
                }

                function Wd(o) {
                    return typeof o == "function" ? o : gn
                }

                function bi(o, u) {
                    return ke(o) ? o : Jd(o, u) ? [o] : T0(qe(o))
                }
                var DT = Ae;

                function _i(o, u, c) {
                    var h = o.length;
                    return c = c === n ? h : c, !u && c >= h ? o : tr(o, u, c)
                }
                var e0 = xO || function(o) {
                    return Ft.clearTimeout(o)
                };

                function t0(o, u) {
                    if (u) return o.slice();
                    var c = o.length,
                        h = Ey ? Ey(c) : new o.constructor(c);
                    return o.copy(h), h
                }

                function Vd(o) {
                    var u = new o.constructor(o.byteLength);
                    return new qs(u).set(new qs(o)), u
                }

                function NT(o, u) {
                    var c = u ? Vd(o.buffer) : o.buffer;
                    return new o.constructor(c, o.byteOffset, o.byteLength)
                }

                function MT(o) {
                    var u = new o.constructor(o.source, zv.exec(o));
                    return u.lastIndex = o.lastIndex, u
                }

                function LT(o) {
                    return du ? et(du.call(o)) : {}
                }

                function n0(o, u) {
                    var c = u ? Vd(o.buffer) : o.buffer;
                    return new o.constructor(c, o.byteOffset, o.length)
                }

                function r0(o, u) {
                    if (o !== u) {
                        var c = o !== n,
                            h = o === null,
                            w = o === o,
                            b = Rn(o),
                            I = u !== n,
                            D = u === null,
                            L = u === u,
                            Y = Rn(u);
                        if (!D && !Y && !b && o > u || b && I && L && !D && !Y || h && I && L || !c && L || !w) return 1;
                        if (!h && !b && !Y && o < u || Y && c && w && !h && !b || D && c && w || !I && w || !L) return -1
                    }
                    return 0
                }

                function FT(o, u, c) {
                    for (var h = -1, w = o.criteria, b = u.criteria, I = w.length, D = c.length; ++h < I;) {
                        var L = r0(w[h], b[h]);
                        if (L) {
                            if (h >= D) return L;
                            var Y = c[h];
                            return L * (Y == "desc" ? -1 : 1)
                        }
                    }
                    return o.index - u.index
                }

                function i0(o, u, c, h) {
                    for (var w = -1, b = o.length, I = c.length, D = -1, L = u.length, Y = Tt(b - I, 0), X = H(L + Y), Z = !h; ++D < L;) X[D] = u[D];
                    for (; ++w < I;)(Z || w < b) && (X[c[w]] = o[w]);
                    for (; Y--;) X[D++] = o[w++];
                    return X
                }

                function o0(o, u, c, h) {
                    for (var w = -1, b = o.length, I = -1, D = c.length, L = -1, Y = u.length, X = Tt(b - D, 0), Z = H(X + Y), ue = !h; ++w < X;) Z[w] = o[w];
                    for (var fe = w; ++L < Y;) Z[fe + L] = u[L];
                    for (; ++I < D;)(ue || w < b) && (Z[fe + c[I]] = o[w++]);
                    return Z
                }

                function dn(o, u) {
                    var c = -1,
                        h = o.length;
                    for (u || (u = H(h)); ++c < h;) u[c] = o[c];
                    return u
                }

                function Dr(o, u, c, h) {
                    var w = !c;
                    c || (c = {});
                    for (var b = -1, I = u.length; ++b < I;) {
                        var D = u[b],
                            L = h ? h(c[D], o[D], D, c, o) : n;
                        L === n && (L = o[D]), w ? Yr(c, D, L) : pu(c, D, L)
                    }
                    return c
                }

                function zT(o, u) {
                    return Dr(o, Zd(o), u)
                }

                function $T(o, u) {
                    return Dr(o, y0(o), u)
                }

                function ua(o, u) {
                    return function(c, h) {
                        var w = ke(c) ? W_ : uT,
                            b = u ? u() : {};
                        return w(c, o, ge(h, 2), b)
                    }
                }

                function il(o) {
                    return Ae(function(u, c) {
                        var h = -1,
                            w = c.length,
                            b = w > 1 ? c[w - 1] : n,
                            I = w > 2 ? c[2] : n;
                        for (b = o.length > 3 && typeof b == "function" ? (w--, b) : n, I && rn(c[0], c[1], I) && (b = w < 3 ? n : b, w = 1), u = et(u); ++h < w;) {
                            var D = c[h];
                            D && o(u, D, h, b)
                        }
                        return u
                    })
                }

                function l0(o, u) {
                    return function(c, h) {
                        if (c == null) return c;
                        if (!pn(c)) return o(c, h);
                        for (var w = c.length, b = u ? w : -1, I = et(c);
                            (u ? b-- : ++b < w) && h(I[b], b, I) !== !1;);
                        return c
                    }
                }

                function u0(o) {
                    return function(u, c, h) {
                        for (var w = -1, b = et(u), I = h(u), D = I.length; D--;) {
                            var L = I[o ? D : ++w];
                            if (c(b[L], L, b) === !1) break
                        }
                        return u
                    }
                }

                function BT(o, u, c) {
                    var h = u & A,
                        w = yu(o);

                    function b() {
                        var I = this && this !== Ft && this instanceof b ? w : o;
                        return I.apply(h ? c : this, arguments)
                    }
                    return b
                }

                function s0(o) {
                    return function(u) {
                        u = qe(u);
                        var c = Xo(u) ? yr(u) : n,
                            h = c ? c[0] : u.charAt(0),
                            w = c ? _i(c, 1).join("") : u.slice(1);
                        return h[o]() + w
                    }
                }

                function ol(o) {
                    return function(u) {
                        return md(l1(o1(u).replace(R_, "")), o, "")
                    }
                }

                function yu(o) {
                    return function() {
                        var u = arguments;
                        switch (u.length) {
                            case 0:
                                return new o;
                            case 1:
                                return new o(u[0]);
                            case 2:
                                return new o(u[0], u[1]);
                            case 3:
                                return new o(u[0], u[1], u[2]);
                            case 4:
                                return new o(u[0], u[1], u[2], u[3]);
                            case 5:
                                return new o(u[0], u[1], u[2], u[3], u[4]);
                            case 6:
                                return new o(u[0], u[1], u[2], u[3], u[4], u[5]);
                            case 7:
                                return new o(u[0], u[1], u[2], u[3], u[4], u[5], u[6])
                        }
                        var c = rl(o.prototype),
                            h = o.apply(c, u);
                        return ht(h) ? h : c
                    }
                }

                function UT(o, u, c) {
                    var h = yu(o);

                    function w() {
                        for (var b = arguments.length, I = H(b), D = b, L = ll(w); D--;) I[D] = arguments[D];
                        var Y = b < 3 && I[0] !== L && I[b - 1] !== L ? [] : Si(I, L);
                        if (b -= Y.length, b < c) return p0(o, u, sa, w.placeholder, n, I, Y, n, n, c - b);
                        var X = this && this !== Ft && this instanceof w ? h : o;
                        return On(X, this, I)
                    }
                    return w
                }

                function a0(o) {
                    return function(u, c, h) {
                        var w = et(u);
                        if (!pn(u)) {
                            var b = ge(c, 3);
                            u = Pt(u), c = function(D) {
                                return b(w[D], D, w)
                            }
                        }
                        var I = o(u, c, h);
                        return I > -1 ? w[b ? u[I] : I] : n
                    }
                }

                function c0(o) {
                    return Zr(function(u) {
                        var c = u.length,
                            h = c,
                            w = Jn.prototype.thru;
                        for (o && u.reverse(); h--;) {
                            var b = u[h];
                            if (typeof b != "function") throw new Zn(s);
                            if (w && !I && da(b) == "wrapper") var I = new Jn([], !0)
                        }
                        for (h = I ? h : c; ++h < c;) {
                            b = u[h];
                            var D = da(b),
                                L = D == "wrapper" ? Yd(b) : n;
                            L && ep(L[0]) && L[1] == (F | k | N | z) && !L[4].length && L[9] == 1 ? I = I[da(L[0])].apply(I, L[3]) : I = b.length == 1 && ep(b) ? I[D]() : I.thru(b)
                        }
                        return function() {
                            var Y = arguments,
                                X = Y[0];
                            if (I && Y.length == 1 && ke(X)) return I.plant(X).value();
                            for (var Z = 0, ue = c ? u[Z].apply(this, Y) : X; ++Z < c;) ue = u[Z].call(this, ue);
                            return ue
                        }
                    })
                }

                function sa(o, u, c, h, w, b, I, D, L, Y) {
                    var X = u & F,
                        Z = u & A,
                        ue = u & y,
                        fe = u & (k | P),
                        ve = u & q,
                        Re = ue ? n : yu(o);

                    function ye() {
                        for (var Ne = arguments.length, $e = H(Ne), Pn = Ne; Pn--;) $e[Pn] = arguments[Pn];
                        if (fe) var on = ll(ye),
                            An = J_($e, on);
                        if (h && ($e = i0($e, h, w, fe)), b && ($e = o0($e, b, I, fe)), Ne -= An, fe && Ne < Y) {
                            var Ct = Si($e, on);
                            return p0(o, u, sa, ye.placeholder, c, $e, Ct, D, L, Y - Ne)
                        }
                        var Sr = Z ? c : this,
                            ni = ue ? Sr[o] : o;
                        return Ne = $e.length, D ? $e = uI($e, D) : ve && Ne > 1 && $e.reverse(), X && L < Ne && ($e.length = L), this && this !== Ft && this instanceof ye && (ni = Re || yu(ni)), ni.apply(Sr, $e)
                    }
                    return ye
                }

                function f0(o, u) {
                    return function(c, h) {
                        return gT(c, o, u(h), {})
                    }
                }

                function aa(o, u) {
                    return function(c, h) {
                        var w;
                        if (c === n && h === n) return u;
                        if (c !== n && (w = c), h !== n) {
                            if (w === n) return h;
                            typeof c == "string" || typeof h == "string" ? (c = In(c), h = In(h)) : (c = Yy(c), h = Yy(h)), w = o(c, h)
                        }
                        return w
                    }
                }

                function qd(o) {
                    return Zr(function(u) {
                        return u = ct(u, Tn(ge())), Ae(function(c) {
                            var h = this;
                            return o(u, function(w) {
                                return On(w, h, c)
                            })
                        })
                    })
                }

                function ca(o, u) {
                    u = u === n ? " " : In(u);
                    var c = u.length;
                    if (c < 2) return c ? $d(u, o) : u;
                    var h = $d(u, Ys(o / Zo(u)));
                    return Xo(u) ? _i(yr(h), 0, o).join("") : h.slice(0, o)
                }

                function jT(o, u, c, h) {
                    var w = u & A,
                        b = yu(o);

                    function I() {
                        for (var D = -1, L = arguments.length, Y = -1, X = h.length, Z = H(X + L), ue = this && this !== Ft && this instanceof I ? b : o; ++Y < X;) Z[Y] = h[Y];
                        for (; L--;) Z[Y++] = arguments[++D];
                        return On(ue, w ? c : this, Z)
                    }
                    return I
                }

                function d0(o) {
                    return function(u, c, h) {
                        return h && typeof h != "number" && rn(u, c, h) && (c = h = n), u = ti(u), c === n ? (c = u, u = 0) : c = ti(c), h = h === n ? u < c ? 1 : -1 : ti(h), OT(u, c, h, o)
                    }
                }

                function fa(o) {
                    return function(u, c) {
                        return typeof u == "string" && typeof c == "string" || (u = rr(u), c = rr(c)), o(u, c)
                    }
                }

                function p0(o, u, c, h, w, b, I, D, L, Y) {
                    var X = u & k,
                        Z = X ? I : n,
                        ue = X ? n : I,
                        fe = X ? b : n,
                        ve = X ? n : b;
                    u |= X ? N : T, u &= ~(X ? T : N), u & x || (u &= ~(A | y));
                    var Re = [o, u, w, fe, Z, ve, ue, D, L, Y],
                        ye = c.apply(n, Re);
                    return ep(o) && b0(ye, Re), ye.placeholder = h, _0(ye, o, u)
                }

                function Gd(o) {
                    var u = Ot[o];
                    return function(c, h) {
                        if (c = rr(c), h = h == null ? 0 : Wt(Te(h), 292), h && _y(c)) {
                            var w = (qe(c) + "e").split("e"),
                                b = u(w[0] + "e" + (+w[1] + h));
                            return w = (qe(b) + "e").split("e"), +(w[0] + "e" + (+w[1] - h))
                        }
                        return u(c)
                    }
                }
                var HT = tl && 1 / Bs(new tl([, -0]))[1] == le ? function(o) {
                    return new tl(o)
                } : gp;

                function h0(o) {
                    return function(u) {
                        var c = Vt(u);
                        return c == wt ? Cd(u) : c == Ht ? lO(u) : Z_(u, o(u))
                    }
                }

                function Xr(o, u, c, h, w, b, I, D) {
                    var L = u & y;
                    if (!L && typeof o != "function") throw new Zn(s);
                    var Y = h ? h.length : 0;
                    if (Y || (u &= ~(N | T), h = w = n), I = I === n ? I : Tt(Te(I), 0), D = D === n ? D : Te(D), Y -= w ? w.length : 0, u & T) {
                        var X = h,
                            Z = w;
                        h = w = n
                    }
                    var ue = L ? n : Yd(o),
                        fe = [o, u, c, h, w, X, Z, b, I, D];
                    if (ue && iI(fe, ue), o = fe[0], u = fe[1], c = fe[2], h = fe[3], w = fe[4], D = fe[9] = fe[9] === n ? L ? 0 : o.length : Tt(fe[9] - Y, 0), !D && u & (k | P) && (u &= ~(k | P)), !u || u == A) var ve = BT(o, u, c);
                    else u == k || u == P ? ve = UT(o, u, D) : (u == N || u == (A | N)) && !w.length ? ve = jT(o, u, c, h) : ve = sa.apply(n, fe);
                    var Re = ue ? Ky : b0;
                    return _0(Re(ve, fe), o, u)
                }

                function g0(o, u, c, h) {
                    return o === n || xr(o, el[c]) && !Ke.call(h, c) ? u : o
                }

                function m0(o, u, c, h, w, b) {
                    return ht(o) && ht(u) && (b.set(u, o), ia(o, u, n, m0, b), b.delete(u)), o
                }

                function WT(o) {
                    return Su(o) ? n : o
                }

                function v0(o, u, c, h, w, b) {
                    var I = c & E,
                        D = o.length,
                        L = u.length;
                    if (D != L && !(I && L > D)) return !1;
                    var Y = b.get(o),
                        X = b.get(u);
                    if (Y && X) return Y == u && X == o;
                    var Z = -1,
                        ue = !0,
                        fe = c & S ? new ho : n;
                    for (b.set(o, u), b.set(u, o); ++Z < D;) {
                        var ve = o[Z],
                            Re = u[Z];
                        if (h) var ye = I ? h(Re, ve, Z, u, o, b) : h(ve, Re, Z, o, u, b);
                        if (ye !== n) {
                            if (ye) continue;
                            ue = !1;
                            break
                        }
                        if (fe) {
                            if (!vd(u, function(Ne, $e) {
                                    if (!uu(fe, $e) && (ve === Ne || w(ve, Ne, c, h, b))) return fe.push($e)
                                })) {
                                ue = !1;
                                break
                            }
                        } else if (!(ve === Re || w(ve, Re, c, h, b))) {
                            ue = !1;
                            break
                        }
                    }
                    return b.delete(o), b.delete(u), ue
                }

                function VT(o, u, c, h, w, b, I) {
                    switch (c) {
                        case re:
                            if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset) return !1;
                            o = o.buffer, u = u.buffer;
                        case V:
                            return !(o.byteLength != u.byteLength || !b(new qs(o), new qs(u)));
                        case xe:
                        case Fe:
                        case Gn:
                            return xr(+o, +u);
                        case Ue:
                            return o.name == u.name && o.message == u.message;
                        case bn:
                        case Rr:
                            return o == u + "";
                        case wt:
                            var D = Cd;
                        case Ht:
                            var L = h & E;
                            if (D || (D = Bs), o.size != u.size && !L) return !1;
                            var Y = I.get(o);
                            if (Y) return Y == u;
                            h |= S, I.set(o, u);
                            var X = v0(D(o), D(u), h, w, b, I);
                            return I.delete(o), X;
                        case Vr:
                            if (du) return du.call(o) == du.call(u)
                    }
                    return !1
                }

                function qT(o, u, c, h, w, b) {
                    var I = c & E,
                        D = Kd(o),
                        L = D.length,
                        Y = Kd(u),
                        X = Y.length;
                    if (L != X && !I) return !1;
                    for (var Z = L; Z--;) {
                        var ue = D[Z];
                        if (!(I ? ue in u : Ke.call(u, ue))) return !1
                    }
                    var fe = b.get(o),
                        ve = b.get(u);
                    if (fe && ve) return fe == u && ve == o;
                    var Re = !0;
                    b.set(o, u), b.set(u, o);
                    for (var ye = I; ++Z < L;) {
                        ue = D[Z];
                        var Ne = o[ue],
                            $e = u[ue];
                        if (h) var Pn = I ? h($e, Ne, ue, u, o, b) : h(Ne, $e, ue, o, u, b);
                        if (!(Pn === n ? Ne === $e || w(Ne, $e, c, h, b) : Pn)) {
                            Re = !1;
                            break
                        }
                        ye || (ye = ue == "constructor")
                    }
                    if (Re && !ye) {
                        var on = o.constructor,
                            An = u.constructor;
                        on != An && "constructor" in o && "constructor" in u && !(typeof on == "function" && on instanceof on && typeof An == "function" && An instanceof An) && (Re = !1)
                    }
                    return b.delete(o), b.delete(u), Re
                }

                function Zr(o) {
                    return np(C0(o, n, A0), o + "")
                }

                function Kd(o) {
                    return Fy(o, Pt, Zd)
                }

                function Qd(o) {
                    return Fy(o, hn, y0)
                }
                var Yd = Zs ? function(o) {
                    return Zs.get(o)
                } : gp;

                function da(o) {
                    for (var u = o.name + "", c = nl[u], h = Ke.call(nl, u) ? c.length : 0; h--;) {
                        var w = c[h],
                            b = w.func;
                        if (b == null || b == o) return w.name
                    }
                    return u
                }

                function ll(o) {
                    var u = Ke.call(C, "placeholder") ? C : o;
                    return u.placeholder
                }

                function ge() {
                    var o = C.iteratee || pp;
                    return o = o === pp ? By : o, arguments.length ? o(arguments[0], arguments[1]) : o
                }

                function pa(o, u) {
                    var c = o.__data__;
                    return eI(u) ? c[typeof u == "string" ? "string" : "hash"] : c.map
                }

                function Xd(o) {
                    for (var u = Pt(o), c = u.length; c--;) {
                        var h = u[c],
                            w = o[h];
                        u[c] = [h, w, S0(w)]
                    }
                    return u
                }

                function vo(o, u) {
                    var c = rO(o, u);
                    return $y(c) ? c : n
                }

                function GT(o) {
                    var u = Ke.call(o, fo),
                        c = o[fo];
                    try {
                        o[fo] = n;
                        var h = !0
                    } catch {}
                    var w = Ws.call(o);
                    return h && (u ? o[fo] = c : delete o[fo]), w
                }
                var Zd = bd ? function(o) {
                        return o == null ? [] : (o = et(o), wi(bd(o), function(u) {
                            return ky.call(o, u)
                        }))
                    } : mp,
                    y0 = bd ? function(o) {
                        for (var u = []; o;) xi(u, Zd(o)), o = Gs(o);
                        return u
                    } : mp,
                    Vt = nn;
                (_d && Vt(new _d(new ArrayBuffer(1))) != re || au && Vt(new au) != wt || Od && Vt(Od.resolve()) != Lt || tl && Vt(new tl) != Ht || cu && Vt(new cu) != Pr) && (Vt = function(o) {
                    var u = nn(o),
                        c = u == at ? o.constructor : n,
                        h = c ? yo(c) : "";
                    if (h) switch (h) {
                        case IO:
                            return re;
                        case RO:
                            return wt;
                        case PO:
                            return Lt;
                        case AO:
                            return Ht;
                        case DO:
                            return Pr
                    }
                    return u
                });

                function KT(o, u, c) {
                    for (var h = -1, w = c.length; ++h < w;) {
                        var b = c[h],
                            I = b.size;
                        switch (b.type) {
                            case "drop":
                                o += I;
                                break;
                            case "dropRight":
                                u -= I;
                                break;
                            case "take":
                                u = Wt(u, o + I);
                                break;
                            case "takeRight":
                                o = Tt(o, u - I);
                                break
                        }
                    }
                    return {
                        start: o,
                        end: u
                    }
                }

                function QT(o) {
                    var u = o.match(t_);
                    return u ? u[1].split(n_) : []
                }

                function w0(o, u, c) {
                    u = bi(u, o);
                    for (var h = -1, w = u.length, b = !1; ++h < w;) {
                        var I = Nr(u[h]);
                        if (!(b = o != null && c(o, I))) break;
                        o = o[I]
                    }
                    return b || ++h != w ? b : (w = o == null ? 0 : o.length, !!w && xa(w) && Jr(I, w) && (ke(o) || wo(o)))
                }

                function YT(o) {
                    var u = o.length,
                        c = new o.constructor(u);
                    return u && typeof o[0] == "string" && Ke.call(o, "index") && (c.index = o.index, c.input = o.input), c
                }

                function x0(o) {
                    return typeof o.constructor == "function" && !wu(o) ? rl(Gs(o)) : {}
                }

                function XT(o, u, c) {
                    var h = o.constructor;
                    switch (u) {
                        case V:
                            return Vd(o);
                        case xe:
                        case Fe:
                            return new h(+o);
                        case re:
                            return NT(o, c);
                        case pe:
                        case je:
                        case He:
                        case tn:
                        case Qn:
                        case _n:
                        case qr:
                        case Gr:
                        case ot:
                            return n0(o, c);
                        case wt:
                            return new h;
                        case Gn:
                        case Rr:
                            return new h(o);
                        case bn:
                            return MT(o);
                        case Ht:
                            return new h;
                        case Vr:
                            return LT(o)
                    }
                }

                function ZT(o, u) {
                    var c = u.length;
                    if (!c) return o;
                    var h = c - 1;
                    return u[h] = (c > 1 ? "& " : "") + u[h], u = u.join(c > 2 ? ", " : " "), o.replace(e_, `{
/* [wrapped with ` + u + `] */
`)
                }

                function JT(o) {
                    return ke(o) || wo(o) || !!(by && o && o[by])
                }

                function Jr(o, u) {
                    var c = typeof o;
                    return u = u ?? W, !!u && (c == "number" || c != "symbol" && f_.test(o)) && o > -1 && o % 1 == 0 && o < u
                }

                function rn(o, u, c) {
                    if (!ht(c)) return !1;
                    var h = typeof u;
                    return (h == "number" ? pn(c) && Jr(u, c.length) : h == "string" && u in c) ? xr(c[u], o) : !1
                }

                function Jd(o, u) {
                    if (ke(o)) return !1;
                    var c = typeof o;
                    return c == "number" || c == "symbol" || c == "boolean" || o == null || Rn(o) ? !0 : Yb.test(o) || !Qb.test(o) || u != null && o in et(u)
                }

                function eI(o) {
                    var u = typeof o;
                    return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null
                }

                function ep(o) {
                    var u = da(o),
                        c = C[u];
                    if (typeof c != "function" || !(u in Me.prototype)) return !1;
                    if (o === c) return !0;
                    var h = Yd(c);
                    return !!h && o === h[0]
                }

                function tI(o) {
                    return !!Sy && Sy in o
                }
                var nI = js ? ei : vp;

                function wu(o) {
                    var u = o && o.constructor,
                        c = typeof u == "function" && u.prototype || el;
                    return o === c
                }

                function S0(o) {
                    return o === o && !ht(o)
                }

                function E0(o, u) {
                    return function(c) {
                        return c == null ? !1 : c[o] === u && (u !== n || o in et(c))
                    }
                }

                function rI(o) {
                    var u = ya(o, function(h) {
                            return c.size === d && c.clear(), h
                        }),
                        c = u.cache;
                    return u
                }

                function iI(o, u) {
                    var c = o[1],
                        h = u[1],
                        w = c | h,
                        b = w < (A | y | F),
                        I = h == F && c == k || h == F && c == z && o[7].length <= u[8] || h == (F | z) && u[7].length <= u[8] && c == k;
                    if (!(b || I)) return o;
                    h & A && (o[2] = u[2], w |= c & A ? 0 : x);
                    var D = u[3];
                    if (D) {
                        var L = o[3];
                        o[3] = L ? i0(L, D, u[4]) : D, o[4] = L ? Si(o[3], p) : u[4]
                    }
                    return D = u[5], D && (L = o[5], o[5] = L ? o0(L, D, u[6]) : D, o[6] = L ? Si(o[5], p) : u[6]), D = u[7], D && (o[7] = D), h & F && (o[8] = o[8] == null ? u[8] : Wt(o[8], u[8])), o[9] == null && (o[9] = u[9]), o[0] = u[0], o[1] = w, o
                }

                function oI(o) {
                    var u = [];
                    if (o != null)
                        for (var c in et(o)) u.push(c);
                    return u
                }

                function lI(o) {
                    return Ws.call(o)
                }

                function C0(o, u, c) {
                    return u = Tt(u === n ? o.length - 1 : u, 0),
                        function() {
                            for (var h = arguments, w = -1, b = Tt(h.length - u, 0), I = H(b); ++w < b;) I[w] = h[u + w];
                            w = -1;
                            for (var D = H(u + 1); ++w < u;) D[w] = h[w];
                            return D[u] = c(I), On(o, this, D)
                        }
                }

                function k0(o, u) {
                    return u.length < 2 ? o : mo(o, tr(u, 0, -1))
                }

                function uI(o, u) {
                    for (var c = o.length, h = Wt(u.length, c), w = dn(o); h--;) {
                        var b = u[h];
                        o[h] = Jr(b, c) ? w[b] : n
                    }
                    return o
                }

                function tp(o, u) {
                    if (!(u === "constructor" && typeof o[u] == "function") && u != "__proto__") return o[u]
                }
                var b0 = O0(Ky),
                    xu = EO || function(o, u) {
                        return Ft.setTimeout(o, u)
                    },
                    np = O0(RT);

                function _0(o, u, c) {
                    var h = u + "";
                    return np(o, ZT(h, sI(QT(h), c)))
                }

                function O0(o) {
                    var u = 0,
                        c = 0;
                    return function() {
                        var h = _O(),
                            w = j - (h - c);
                        if (c = h, w > 0) {
                            if (++u >= K) return arguments[0]
                        } else u = 0;
                        return o.apply(n, arguments)
                    }
                }

                function ha(o, u) {
                    var c = -1,
                        h = o.length,
                        w = h - 1;
                    for (u = u === n ? h : u; ++c < u;) {
                        var b = zd(c, w),
                            I = o[b];
                        o[b] = o[c], o[c] = I
                    }
                    return o.length = u, o
                }
                var T0 = rI(function(o) {
                    var u = [];
                    return o.charCodeAt(0) === 46 && u.push(""), o.replace(Xb, function(c, h, w, b) {
                        u.push(w ? b.replace(o_, "$1") : h || c)
                    }), u
                });

                function Nr(o) {
                    if (typeof o == "string" || Rn(o)) return o;
                    var u = o + "";
                    return u == "0" && 1 / o == -le ? "-0" : u
                }

                function yo(o) {
                    if (o != null) {
                        try {
                            return Hs.call(o)
                        } catch {}
                        try {
                            return o + ""
                        } catch {}
                    }
                    return ""
                }

                function sI(o, u) {
                    return Xn(de, function(c) {
                        var h = "_." + c[0];
                        u & c[1] && !zs(o, h) && o.push(h)
                    }), o.sort()
                }

                function I0(o) {
                    if (o instanceof Me) return o.clone();
                    var u = new Jn(o.__wrapped__, o.__chain__);
                    return u.__actions__ = dn(o.__actions__), u.__index__ = o.__index__, u.__values__ = o.__values__, u
                }

                function aI(o, u, c) {
                    (c ? rn(o, u, c) : u === n) ? u = 1: u = Tt(Te(u), 0);
                    var h = o == null ? 0 : o.length;
                    if (!h || u < 1) return [];
                    for (var w = 0, b = 0, I = H(Ys(h / u)); w < h;) I[b++] = tr(o, w, w += u);
                    return I
                }

                function cI(o) {
                    for (var u = -1, c = o == null ? 0 : o.length, h = 0, w = []; ++u < c;) {
                        var b = o[u];
                        b && (w[h++] = b)
                    }
                    return w
                }

                function fI() {
                    var o = arguments.length;
                    if (!o) return [];
                    for (var u = H(o - 1), c = arguments[0], h = o; h--;) u[h - 1] = arguments[h];
                    return xi(ke(c) ? dn(c) : [c], zt(u, 1))
                }
                var dI = Ae(function(o, u) {
                        return Et(o) ? hu(o, zt(u, 1, Et, !0)) : []
                    }),
                    pI = Ae(function(o, u) {
                        var c = nr(u);
                        return Et(c) && (c = n), Et(o) ? hu(o, zt(u, 1, Et, !0), ge(c, 2)) : []
                    }),
                    hI = Ae(function(o, u) {
                        var c = nr(u);
                        return Et(c) && (c = n), Et(o) ? hu(o, zt(u, 1, Et, !0), n, c) : []
                    });

                function gI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Te(u), tr(o, u < 0 ? 0 : u, h)) : []
                }

                function mI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Te(u), u = h - u, tr(o, 0, u < 0 ? 0 : u)) : []
                }

                function vI(o, u) {
                    return o && o.length ? la(o, ge(u, 3), !0, !0) : []
                }

                function yI(o, u) {
                    return o && o.length ? la(o, ge(u, 3), !0) : []
                }

                function wI(o, u, c, h) {
                    var w = o == null ? 0 : o.length;
                    return w ? (c && typeof c != "number" && rn(o, u, c) && (c = 0, h = w), fT(o, u, c, h)) : []
                }

                function R0(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = c == null ? 0 : Te(c);
                    return w < 0 && (w = Tt(h + w, 0)), $s(o, ge(u, 3), w)
                }

                function P0(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = h - 1;
                    return c !== n && (w = Te(c), w = c < 0 ? Tt(h + w, 0) : Wt(w, h - 1)), $s(o, ge(u, 3), w, !0)
                }

                function A0(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? zt(o, 1) : []
                }

                function xI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? zt(o, le) : []
                }

                function SI(o, u) {
                    var c = o == null ? 0 : o.length;
                    return c ? (u = u === n ? 1 : Te(u), zt(o, u)) : []
                }

                function EI(o) {
                    for (var u = -1, c = o == null ? 0 : o.length, h = {}; ++u < c;) {
                        var w = o[u];
                        h[w[0]] = w[1]
                    }
                    return h
                }

                function D0(o) {
                    return o && o.length ? o[0] : n
                }

                function CI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = c == null ? 0 : Te(c);
                    return w < 0 && (w = Tt(h + w, 0)), Yo(o, u, w)
                }

                function kI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? tr(o, 0, -1) : []
                }
                var bI = Ae(function(o) {
                        var u = ct(o, Hd);
                        return u.length && u[0] === o[0] ? Dd(u) : []
                    }),
                    _I = Ae(function(o) {
                        var u = nr(o),
                            c = ct(o, Hd);
                        return u === nr(c) ? u = n : c.pop(), c.length && c[0] === o[0] ? Dd(c, ge(u, 2)) : []
                    }),
                    OI = Ae(function(o) {
                        var u = nr(o),
                            c = ct(o, Hd);
                        return u = typeof u == "function" ? u : n, u && c.pop(), c.length && c[0] === o[0] ? Dd(c, n, u) : []
                    });

                function TI(o, u) {
                    return o == null ? "" : kO.call(o, u)
                }

                function nr(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? o[u - 1] : n
                }

                function II(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    if (!h) return -1;
                    var w = h;
                    return c !== n && (w = Te(c), w = w < 0 ? Tt(h + w, 0) : Wt(w, h - 1)), u === u ? sO(o, u, w) : $s(o, py, w, !0)
                }

                function RI(o, u) {
                    return o && o.length ? Wy(o, Te(u)) : n
                }
                var PI = Ae(N0);

                function N0(o, u) {
                    return o && o.length && u && u.length ? Fd(o, u) : o
                }

                function AI(o, u, c) {
                    return o && o.length && u && u.length ? Fd(o, u, ge(c, 2)) : o
                }

                function DI(o, u, c) {
                    return o && o.length && u && u.length ? Fd(o, u, n, c) : o
                }
                var NI = Zr(function(o, u) {
                    var c = o == null ? 0 : o.length,
                        h = Id(o, u);
                    return Gy(o, ct(u, function(w) {
                        return Jr(w, c) ? +w : w
                    }).sort(r0)), h
                });

                function MI(o, u) {
                    var c = [];
                    if (!(o && o.length)) return c;
                    var h = -1,
                        w = [],
                        b = o.length;
                    for (u = ge(u, 3); ++h < b;) {
                        var I = o[h];
                        u(I, h, o) && (c.push(I), w.push(h))
                    }
                    return Gy(o, w), c
                }

                function rp(o) {
                    return o == null ? o : TO.call(o)
                }

                function LI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (c && typeof c != "number" && rn(o, u, c) ? (u = 0, c = h) : (u = u == null ? 0 : Te(u), c = c === n ? h : Te(c)), tr(o, u, c)) : []
                }

                function FI(o, u) {
                    return oa(o, u)
                }

                function zI(o, u, c) {
                    return Bd(o, u, ge(c, 2))
                }

                function $I(o, u) {
                    var c = o == null ? 0 : o.length;
                    if (c) {
                        var h = oa(o, u);
                        if (h < c && xr(o[h], u)) return h
                    }
                    return -1
                }

                function BI(o, u) {
                    return oa(o, u, !0)
                }

                function UI(o, u, c) {
                    return Bd(o, u, ge(c, 2), !0)
                }

                function jI(o, u) {
                    var c = o == null ? 0 : o.length;
                    if (c) {
                        var h = oa(o, u, !0) - 1;
                        if (xr(o[h], u)) return h
                    }
                    return -1
                }

                function HI(o) {
                    return o && o.length ? Qy(o) : []
                }

                function WI(o, u) {
                    return o && o.length ? Qy(o, ge(u, 2)) : []
                }

                function VI(o) {
                    var u = o == null ? 0 : o.length;
                    return u ? tr(o, 1, u) : []
                }

                function qI(o, u, c) {
                    return o && o.length ? (u = c || u === n ? 1 : Te(u), tr(o, 0, u < 0 ? 0 : u)) : []
                }

                function GI(o, u, c) {
                    var h = o == null ? 0 : o.length;
                    return h ? (u = c || u === n ? 1 : Te(u), u = h - u, tr(o, u < 0 ? 0 : u, h)) : []
                }

                function KI(o, u) {
                    return o && o.length ? la(o, ge(u, 3), !1, !0) : []
                }

                function QI(o, u) {
                    return o && o.length ? la(o, ge(u, 3)) : []
                }
                var YI = Ae(function(o) {
                        return ki(zt(o, 1, Et, !0))
                    }),
                    XI = Ae(function(o) {
                        var u = nr(o);
                        return Et(u) && (u = n), ki(zt(o, 1, Et, !0), ge(u, 2))
                    }),
                    ZI = Ae(function(o) {
                        var u = nr(o);
                        return u = typeof u == "function" ? u : n, ki(zt(o, 1, Et, !0), n, u)
                    });

                function JI(o) {
                    return o && o.length ? ki(o) : []
                }

                function e2(o, u) {
                    return o && o.length ? ki(o, ge(u, 2)) : []
                }

                function t2(o, u) {
                    return u = typeof u == "function" ? u : n, o && o.length ? ki(o, n, u) : []
                }

                function ip(o) {
                    if (!(o && o.length)) return [];
                    var u = 0;
                    return o = wi(o, function(c) {
                        if (Et(c)) return u = Tt(c.length, u), !0
                    }), Sd(u, function(c) {
                        return ct(o, yd(c))
                    })
                }

                function M0(o, u) {
                    if (!(o && o.length)) return [];
                    var c = ip(o);
                    return u == null ? c : ct(c, function(h) {
                        return On(u, n, h)
                    })
                }
                var n2 = Ae(function(o, u) {
                        return Et(o) ? hu(o, u) : []
                    }),
                    r2 = Ae(function(o) {
                        return jd(wi(o, Et))
                    }),
                    i2 = Ae(function(o) {
                        var u = nr(o);
                        return Et(u) && (u = n), jd(wi(o, Et), ge(u, 2))
                    }),
                    o2 = Ae(function(o) {
                        var u = nr(o);
                        return u = typeof u == "function" ? u : n, jd(wi(o, Et), n, u)
                    }),
                    l2 = Ae(ip);

                function u2(o, u) {
                    return Jy(o || [], u || [], pu)
                }

                function s2(o, u) {
                    return Jy(o || [], u || [], vu)
                }
                var a2 = Ae(function(o) {
                    var u = o.length,
                        c = u > 1 ? o[u - 1] : n;
                    return c = typeof c == "function" ? (o.pop(), c) : n, M0(o, c)
                });

                function L0(o) {
                    var u = C(o);
                    return u.__chain__ = !0, u
                }

                function c2(o, u) {
                    return u(o), o
                }

                function ga(o, u) {
                    return u(o)
                }
                var f2 = Zr(function(o) {
                    var u = o.length,
                        c = u ? o[0] : 0,
                        h = this.__wrapped__,
                        w = function(b) {
                            return Id(b, o)
                        };
                    return u > 1 || this.__actions__.length || !(h instanceof Me) || !Jr(c) ? this.thru(w) : (h = h.slice(c, +c + (u ? 1 : 0)), h.__actions__.push({
                        func: ga,
                        args: [w],
                        thisArg: n
                    }), new Jn(h, this.__chain__).thru(function(b) {
                        return u && !b.length && b.push(n), b
                    }))
                });

                function d2() {
                    return L0(this)
                }

                function p2() {
                    return new Jn(this.value(), this.__chain__)
                }

                function h2() {
                    this.__values__ === n && (this.__values__ = Y0(this.value()));
                    var o = this.__index__ >= this.__values__.length,
                        u = o ? n : this.__values__[this.__index__++];
                    return {
                        done: o,
                        value: u
                    }
                }

                function g2() {
                    return this
                }

                function m2(o) {
                    for (var u, c = this; c instanceof ea;) {
                        var h = I0(c);
                        h.__index__ = 0, h.__values__ = n, u ? w.__wrapped__ = h : u = h;
                        var w = h;
                        c = c.__wrapped__
                    }
                    return w.__wrapped__ = o, u
                }

                function v2() {
                    var o = this.__wrapped__;
                    if (o instanceof Me) {
                        var u = o;
                        return this.__actions__.length && (u = new Me(this)), u = u.reverse(), u.__actions__.push({
                            func: ga,
                            args: [rp],
                            thisArg: n
                        }), new Jn(u, this.__chain__)
                    }
                    return this.thru(rp)
                }

                function y2() {
                    return Zy(this.__wrapped__, this.__actions__)
                }
                var w2 = ua(function(o, u, c) {
                    Ke.call(o, c) ? ++o[c] : Yr(o, c, 1)
                });

                function x2(o, u, c) {
                    var h = ke(o) ? fy : cT;
                    return c && rn(o, u, c) && (u = n), h(o, ge(u, 3))
                }

                function S2(o, u) {
                    var c = ke(o) ? wi : My;
                    return c(o, ge(u, 3))
                }
                var E2 = a0(R0),
                    C2 = a0(P0);

                function k2(o, u) {
                    return zt(ma(o, u), 1)
                }

                function b2(o, u) {
                    return zt(ma(o, u), le)
                }

                function _2(o, u, c) {
                    return c = c === n ? 1 : Te(c), zt(ma(o, u), c)
                }

                function F0(o, u) {
                    var c = ke(o) ? Xn : Ci;
                    return c(o, ge(u, 3))
                }

                function z0(o, u) {
                    var c = ke(o) ? V_ : Ny;
                    return c(o, ge(u, 3))
                }
                var O2 = ua(function(o, u, c) {
                    Ke.call(o, c) ? o[c].push(u) : Yr(o, c, [u])
                });

                function T2(o, u, c, h) {
                    o = pn(o) ? o : sl(o), c = c && !h ? Te(c) : 0;
                    var w = o.length;
                    return c < 0 && (c = Tt(w + c, 0)), Sa(o) ? c <= w && o.indexOf(u, c) > -1 : !!w && Yo(o, u, c) > -1
                }
                var I2 = Ae(function(o, u, c) {
                        var h = -1,
                            w = typeof u == "function",
                            b = pn(o) ? H(o.length) : [];
                        return Ci(o, function(I) {
                            b[++h] = w ? On(u, I, c) : gu(I, u, c)
                        }), b
                    }),
                    R2 = ua(function(o, u, c) {
                        Yr(o, c, u)
                    });

                function ma(o, u) {
                    var c = ke(o) ? ct : Uy;
                    return c(o, ge(u, 3))
                }

                function P2(o, u, c, h) {
                    return o == null ? [] : (ke(u) || (u = u == null ? [] : [u]), c = h ? n : c, ke(c) || (c = c == null ? [] : [c]), Vy(o, u, c))
                }
                var A2 = ua(function(o, u, c) {
                    o[c ? 0 : 1].push(u)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function D2(o, u, c) {
                    var h = ke(o) ? md : gy,
                        w = arguments.length < 3;
                    return h(o, ge(u, 4), c, w, Ci)
                }

                function N2(o, u, c) {
                    var h = ke(o) ? q_ : gy,
                        w = arguments.length < 3;
                    return h(o, ge(u, 4), c, w, Ny)
                }

                function M2(o, u) {
                    var c = ke(o) ? wi : My;
                    return c(o, wa(ge(u, 3)))
                }

                function L2(o) {
                    var u = ke(o) ? Ry : TT;
                    return u(o)
                }

                function F2(o, u, c) {
                    (c ? rn(o, u, c) : u === n) ? u = 1: u = Te(u);
                    var h = ke(o) ? oT : IT;
                    return h(o, u)
                }

                function z2(o) {
                    var u = ke(o) ? lT : PT;
                    return u(o)
                }

                function $2(o) {
                    if (o == null) return 0;
                    if (pn(o)) return Sa(o) ? Zo(o) : o.length;
                    var u = Vt(o);
                    return u == wt || u == Ht ? o.size : Md(o).length
                }

                function B2(o, u, c) {
                    var h = ke(o) ? vd : AT;
                    return c && rn(o, u, c) && (u = n), h(o, ge(u, 3))
                }
                var U2 = Ae(function(o, u) {
                        if (o == null) return [];
                        var c = u.length;
                        return c > 1 && rn(o, u[0], u[1]) ? u = [] : c > 2 && rn(u[0], u[1], u[2]) && (u = [u[0]]), Vy(o, zt(u, 1), [])
                    }),
                    va = SO || function() {
                        return Ft.Date.now()
                    };

                function j2(o, u) {
                    if (typeof u != "function") throw new Zn(s);
                    return o = Te(o),
                        function() {
                            if (--o < 1) return u.apply(this, arguments)
                        }
                }

                function $0(o, u, c) {
                    return u = c ? n : u, u = o && u == null ? o.length : u, Xr(o, F, n, n, n, n, u)
                }

                function B0(o, u) {
                    var c;
                    if (typeof u != "function") throw new Zn(s);
                    return o = Te(o),
                        function() {
                            return --o > 0 && (c = u.apply(this, arguments)), o <= 1 && (u = n), c
                        }
                }
                var op = Ae(function(o, u, c) {
                        var h = A;
                        if (c.length) {
                            var w = Si(c, ll(op));
                            h |= N
                        }
                        return Xr(o, h, u, c, w)
                    }),
                    U0 = Ae(function(o, u, c) {
                        var h = A | y;
                        if (c.length) {
                            var w = Si(c, ll(U0));
                            h |= N
                        }
                        return Xr(u, h, o, c, w)
                    });

                function j0(o, u, c) {
                    u = c ? n : u;
                    var h = Xr(o, k, n, n, n, n, n, u);
                    return h.placeholder = j0.placeholder, h
                }

                function H0(o, u, c) {
                    u = c ? n : u;
                    var h = Xr(o, P, n, n, n, n, n, u);
                    return h.placeholder = H0.placeholder, h
                }

                function W0(o, u, c) {
                    var h, w, b, I, D, L, Y = 0,
                        X = !1,
                        Z = !1,
                        ue = !0;
                    if (typeof o != "function") throw new Zn(s);
                    u = rr(u) || 0, ht(c) && (X = !!c.leading, Z = "maxWait" in c, b = Z ? Tt(rr(c.maxWait) || 0, u) : b, ue = "trailing" in c ? !!c.trailing : ue);

                    function fe(Ct) {
                        var Sr = h,
                            ni = w;
                        return h = w = n, Y = Ct, I = o.apply(ni, Sr), I
                    }

                    function ve(Ct) {
                        return Y = Ct, D = xu(Ne, u), X ? fe(Ct) : I
                    }

                    function Re(Ct) {
                        var Sr = Ct - L,
                            ni = Ct - Y,
                            a1 = u - Sr;
                        return Z ? Wt(a1, b - ni) : a1
                    }

                    function ye(Ct) {
                        var Sr = Ct - L,
                            ni = Ct - Y;
                        return L === n || Sr >= u || Sr < 0 || Z && ni >= b
                    }

                    function Ne() {
                        var Ct = va();
                        if (ye(Ct)) return $e(Ct);
                        D = xu(Ne, Re(Ct))
                    }

                    function $e(Ct) {
                        return D = n, ue && h ? fe(Ct) : (h = w = n, I)
                    }

                    function Pn() {
                        D !== n && e0(D), Y = 0, h = L = w = D = n
                    }

                    function on() {
                        return D === n ? I : $e(va())
                    }

                    function An() {
                        var Ct = va(),
                            Sr = ye(Ct);
                        if (h = arguments, w = this, L = Ct, Sr) {
                            if (D === n) return ve(L);
                            if (Z) return e0(D), D = xu(Ne, u), fe(L)
                        }
                        return D === n && (D = xu(Ne, u)), I
                    }
                    return An.cancel = Pn, An.flush = on, An
                }
                var H2 = Ae(function(o, u) {
                        return Dy(o, 1, u)
                    }),
                    W2 = Ae(function(o, u, c) {
                        return Dy(o, rr(u) || 0, c)
                    });

                function V2(o) {
                    return Xr(o, q)
                }

                function ya(o, u) {
                    if (typeof o != "function" || u != null && typeof u != "function") throw new Zn(s);
                    var c = function() {
                        var h = arguments,
                            w = u ? u.apply(this, h) : h[0],
                            b = c.cache;
                        if (b.has(w)) return b.get(w);
                        var I = o.apply(this, h);
                        return c.cache = b.set(w, I) || b, I
                    };
                    return c.cache = new(ya.Cache || Qr), c
                }
                ya.Cache = Qr;

                function wa(o) {
                    if (typeof o != "function") throw new Zn(s);
                    return function() {
                        var u = arguments;
                        switch (u.length) {
                            case 0:
                                return !o.call(this);
                            case 1:
                                return !o.call(this, u[0]);
                            case 2:
                                return !o.call(this, u[0], u[1]);
                            case 3:
                                return !o.call(this, u[0], u[1], u[2])
                        }
                        return !o.apply(this, u)
                    }
                }

                function q2(o) {
                    return B0(2, o)
                }
                var G2 = DT(function(o, u) {
                        u = u.length == 1 && ke(u[0]) ? ct(u[0], Tn(ge())) : ct(zt(u, 1), Tn(ge()));
                        var c = u.length;
                        return Ae(function(h) {
                            for (var w = -1, b = Wt(h.length, c); ++w < b;) h[w] = u[w].call(this, h[w]);
                            return On(o, this, h)
                        })
                    }),
                    lp = Ae(function(o, u) {
                        var c = Si(u, ll(lp));
                        return Xr(o, N, n, u, c)
                    }),
                    V0 = Ae(function(o, u) {
                        var c = Si(u, ll(V0));
                        return Xr(o, T, n, u, c)
                    }),
                    K2 = Zr(function(o, u) {
                        return Xr(o, z, n, n, n, u)
                    });

                function Q2(o, u) {
                    if (typeof o != "function") throw new Zn(s);
                    return u = u === n ? u : Te(u), Ae(o, u)
                }

                function Y2(o, u) {
                    if (typeof o != "function") throw new Zn(s);
                    return u = u == null ? 0 : Tt(Te(u), 0), Ae(function(c) {
                        var h = c[u],
                            w = _i(c, 0, u);
                        return h && xi(w, h), On(o, this, w)
                    })
                }

                function X2(o, u, c) {
                    var h = !0,
                        w = !0;
                    if (typeof o != "function") throw new Zn(s);
                    return ht(c) && (h = "leading" in c ? !!c.leading : h, w = "trailing" in c ? !!c.trailing : w), W0(o, u, {
                        leading: h,
                        maxWait: u,
                        trailing: w
                    })
                }

                function Z2(o) {
                    return $0(o, 1)
                }

                function J2(o, u) {
                    return lp(Wd(u), o)
                }

                function eR() {
                    if (!arguments.length) return [];
                    var o = arguments[0];
                    return ke(o) ? o : [o]
                }

                function tR(o) {
                    return er(o, m)
                }

                function nR(o, u) {
                    return u = typeof u == "function" ? u : n, er(o, m, u)
                }

                function rR(o) {
                    return er(o, g | m)
                }

                function iR(o, u) {
                    return u = typeof u == "function" ? u : n, er(o, g | m, u)
                }

                function oR(o, u) {
                    return u == null || Ay(o, u, Pt(u))
                }

                function xr(o, u) {
                    return o === u || o !== o && u !== u
                }
                var lR = fa(Ad),
                    uR = fa(function(o, u) {
                        return o >= u
                    }),
                    wo = zy(function() {
                        return arguments
                    }()) ? zy : function(o) {
                        return xt(o) && Ke.call(o, "callee") && !ky.call(o, "callee")
                    },
                    ke = H.isArray,
                    sR = oy ? Tn(oy) : mT;

                function pn(o) {
                    return o != null && xa(o.length) && !ei(o)
                }

                function Et(o) {
                    return xt(o) && pn(o)
                }

                function aR(o) {
                    return o === !0 || o === !1 || xt(o) && nn(o) == xe
                }
                var Oi = CO || vp,
                    cR = ly ? Tn(ly) : vT;

                function fR(o) {
                    return xt(o) && o.nodeType === 1 && !Su(o)
                }

                function dR(o) {
                    if (o == null) return !0;
                    if (pn(o) && (ke(o) || typeof o == "string" || typeof o.splice == "function" || Oi(o) || ul(o) || wo(o))) return !o.length;
                    var u = Vt(o);
                    if (u == wt || u == Ht) return !o.size;
                    if (wu(o)) return !Md(o).length;
                    for (var c in o)
                        if (Ke.call(o, c)) return !1;
                    return !0
                }

                function pR(o, u) {
                    return mu(o, u)
                }

                function hR(o, u, c) {
                    c = typeof c == "function" ? c : n;
                    var h = c ? c(o, u) : n;
                    return h === n ? mu(o, u, n, c) : !!h
                }

                function up(o) {
                    if (!xt(o)) return !1;
                    var u = nn(o);
                    return u == Ue || u == Ie || typeof o.message == "string" && typeof o.name == "string" && !Su(o)
                }

                function gR(o) {
                    return typeof o == "number" && _y(o)
                }

                function ei(o) {
                    if (!ht(o)) return !1;
                    var u = nn(o);
                    return u == ze || u == Ge || u == De || u == kn
                }

                function q0(o) {
                    return typeof o == "number" && o == Te(o)
                }

                function xa(o) {
                    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= W
                }

                function ht(o) {
                    var u = typeof o;
                    return o != null && (u == "object" || u == "function")
                }

                function xt(o) {
                    return o != null && typeof o == "object"
                }
                var G0 = uy ? Tn(uy) : wT;

                function mR(o, u) {
                    return o === u || Nd(o, u, Xd(u))
                }

                function vR(o, u, c) {
                    return c = typeof c == "function" ? c : n, Nd(o, u, Xd(u), c)
                }

                function yR(o) {
                    return K0(o) && o != +o
                }

                function wR(o) {
                    if (nI(o)) throw new Ee(l);
                    return $y(o)
                }

                function xR(o) {
                    return o === null
                }

                function SR(o) {
                    return o == null
                }

                function K0(o) {
                    return typeof o == "number" || xt(o) && nn(o) == Gn
                }

                function Su(o) {
                    if (!xt(o) || nn(o) != at) return !1;
                    var u = Gs(o);
                    if (u === null) return !0;
                    var c = Ke.call(u, "constructor") && u.constructor;
                    return typeof c == "function" && c instanceof c && Hs.call(c) == vO
                }
                var sp = sy ? Tn(sy) : xT;

                function ER(o) {
                    return q0(o) && o >= -W && o <= W
                }
                var Q0 = ay ? Tn(ay) : ST;

                function Sa(o) {
                    return typeof o == "string" || !ke(o) && xt(o) && nn(o) == Rr
                }

                function Rn(o) {
                    return typeof o == "symbol" || xt(o) && nn(o) == Vr
                }
                var ul = cy ? Tn(cy) : ET;

                function CR(o) {
                    return o === n
                }

                function kR(o) {
                    return xt(o) && Vt(o) == Pr
                }

                function bR(o) {
                    return xt(o) && nn(o) == Kn
                }
                var _R = fa(Ld),
                    OR = fa(function(o, u) {
                        return o <= u
                    });

                function Y0(o) {
                    if (!o) return [];
                    if (pn(o)) return Sa(o) ? yr(o) : dn(o);
                    if (su && o[su]) return oO(o[su]());
                    var u = Vt(o),
                        c = u == wt ? Cd : u == Ht ? Bs : sl;
                    return c(o)
                }

                function ti(o) {
                    if (!o) return o === 0 ? o : 0;
                    if (o = rr(o), o === le || o === -le) {
                        var u = o < 0 ? -1 : 1;
                        return u * ee
                    }
                    return o === o ? o : 0
                }

                function Te(o) {
                    var u = ti(o),
                        c = u % 1;
                    return u === u ? c ? u - c : u : 0
                }

                function X0(o) {
                    return o ? go(Te(o), 0, ne) : 0
                }

                function rr(o) {
                    if (typeof o == "number") return o;
                    if (Rn(o)) return _;
                    if (ht(o)) {
                        var u = typeof o.valueOf == "function" ? o.valueOf() : o;
                        o = ht(u) ? u + "" : u
                    }
                    if (typeof o != "string") return o === 0 ? o : +o;
                    o = my(o);
                    var c = s_.test(o);
                    return c || c_.test(o) ? j_(o.slice(2), c ? 2 : 8) : u_.test(o) ? _ : +o
                }

                function Z0(o) {
                    return Dr(o, hn(o))
                }

                function TR(o) {
                    return o ? go(Te(o), -W, W) : o === 0 ? o : 0
                }

                function qe(o) {
                    return o == null ? "" : In(o)
                }
                var IR = il(function(o, u) {
                        if (wu(u) || pn(u)) {
                            Dr(u, Pt(u), o);
                            return
                        }
                        for (var c in u) Ke.call(u, c) && pu(o, c, u[c])
                    }),
                    J0 = il(function(o, u) {
                        Dr(u, hn(u), o)
                    }),
                    Ea = il(function(o, u, c, h) {
                        Dr(u, hn(u), o, h)
                    }),
                    RR = il(function(o, u, c, h) {
                        Dr(u, Pt(u), o, h)
                    }),
                    PR = Zr(Id);

                function AR(o, u) {
                    var c = rl(o);
                    return u == null ? c : Py(c, u)
                }
                var DR = Ae(function(o, u) {
                        o = et(o);
                        var c = -1,
                            h = u.length,
                            w = h > 2 ? u[2] : n;
                        for (w && rn(u[0], u[1], w) && (h = 1); ++c < h;)
                            for (var b = u[c], I = hn(b), D = -1, L = I.length; ++D < L;) {
                                var Y = I[D],
                                    X = o[Y];
                                (X === n || xr(X, el[Y]) && !Ke.call(o, Y)) && (o[Y] = b[Y])
                            }
                        return o
                    }),
                    NR = Ae(function(o) {
                        return o.push(n, m0), On(e1, n, o)
                    });

                function MR(o, u) {
                    return dy(o, ge(u, 3), Ar)
                }

                function LR(o, u) {
                    return dy(o, ge(u, 3), Pd)
                }

                function FR(o, u) {
                    return o == null ? o : Rd(o, ge(u, 3), hn)
                }

                function zR(o, u) {
                    return o == null ? o : Ly(o, ge(u, 3), hn)
                }

                function $R(o, u) {
                    return o && Ar(o, ge(u, 3))
                }

                function BR(o, u) {
                    return o && Pd(o, ge(u, 3))
                }

                function UR(o) {
                    return o == null ? [] : ra(o, Pt(o))
                }

                function jR(o) {
                    return o == null ? [] : ra(o, hn(o))
                }

                function ap(o, u, c) {
                    var h = o == null ? n : mo(o, u);
                    return h === n ? c : h
                }

                function HR(o, u) {
                    return o != null && w0(o, u, dT)
                }

                function cp(o, u) {
                    return o != null && w0(o, u, pT)
                }
                var WR = f0(function(o, u, c) {
                        u != null && typeof u.toString != "function" && (u = Ws.call(u)), o[u] = c
                    }, dp(gn)),
                    VR = f0(function(o, u, c) {
                        u != null && typeof u.toString != "function" && (u = Ws.call(u)), Ke.call(o, u) ? o[u].push(c) : o[u] = [c]
                    }, ge),
                    qR = Ae(gu);

                function Pt(o) {
                    return pn(o) ? Iy(o) : Md(o)
                }

                function hn(o) {
                    return pn(o) ? Iy(o, !0) : CT(o)
                }

                function GR(o, u) {
                    var c = {};
                    return u = ge(u, 3), Ar(o, function(h, w, b) {
                        Yr(c, u(h, w, b), h)
                    }), c
                }

                function KR(o, u) {
                    var c = {};
                    return u = ge(u, 3), Ar(o, function(h, w, b) {
                        Yr(c, w, u(h, w, b))
                    }), c
                }
                var QR = il(function(o, u, c) {
                        ia(o, u, c)
                    }),
                    e1 = il(function(o, u, c, h) {
                        ia(o, u, c, h)
                    }),
                    YR = Zr(function(o, u) {
                        var c = {};
                        if (o == null) return c;
                        var h = !1;
                        u = ct(u, function(b) {
                            return b = bi(b, o), h || (h = b.length > 1), b
                        }), Dr(o, Qd(o), c), h && (c = er(c, g | v | m, WT));
                        for (var w = u.length; w--;) Ud(c, u[w]);
                        return c
                    });

                function XR(o, u) {
                    return t1(o, wa(ge(u)))
                }
                var ZR = Zr(function(o, u) {
                    return o == null ? {} : bT(o, u)
                });

                function t1(o, u) {
                    if (o == null) return {};
                    var c = ct(Qd(o), function(h) {
                        return [h]
                    });
                    return u = ge(u), qy(o, c, function(h, w) {
                        return u(h, w[0])
                    })
                }

                function JR(o, u, c) {
                    u = bi(u, o);
                    var h = -1,
                        w = u.length;
                    for (w || (w = 1, o = n); ++h < w;) {
                        var b = o == null ? n : o[Nr(u[h])];
                        b === n && (h = w, b = c), o = ei(b) ? b.call(o) : b
                    }
                    return o
                }

                function eP(o, u, c) {
                    return o == null ? o : vu(o, u, c)
                }

                function tP(o, u, c, h) {
                    return h = typeof h == "function" ? h : n, o == null ? o : vu(o, u, c, h)
                }
                var n1 = h0(Pt),
                    r1 = h0(hn);

                function nP(o, u, c) {
                    var h = ke(o),
                        w = h || Oi(o) || ul(o);
                    if (u = ge(u, 4), c == null) {
                        var b = o && o.constructor;
                        w ? c = h ? new b : [] : ht(o) ? c = ei(b) ? rl(Gs(o)) : {} : c = {}
                    }
                    return (w ? Xn : Ar)(o, function(I, D, L) {
                        return u(c, I, D, L)
                    }), c
                }

                function rP(o, u) {
                    return o == null ? !0 : Ud(o, u)
                }

                function iP(o, u, c) {
                    return o == null ? o : Xy(o, u, Wd(c))
                }

                function oP(o, u, c, h) {
                    return h = typeof h == "function" ? h : n, o == null ? o : Xy(o, u, Wd(c), h)
                }

                function sl(o) {
                    return o == null ? [] : Ed(o, Pt(o))
                }

                function lP(o) {
                    return o == null ? [] : Ed(o, hn(o))
                }

                function uP(o, u, c) {
                    return c === n && (c = u, u = n), c !== n && (c = rr(c), c = c === c ? c : 0), u !== n && (u = rr(u), u = u === u ? u : 0), go(rr(o), u, c)
                }

                function sP(o, u, c) {
                    return u = ti(u), c === n ? (c = u, u = 0) : c = ti(c), o = rr(o), hT(o, u, c)
                }

                function aP(o, u, c) {
                    if (c && typeof c != "boolean" && rn(o, u, c) && (u = c = n), c === n && (typeof u == "boolean" ? (c = u, u = n) : typeof o == "boolean" && (c = o, o = n)), o === n && u === n ? (o = 0, u = 1) : (o = ti(o), u === n ? (u = o, o = 0) : u = ti(u)), o > u) {
                        var h = o;
                        o = u, u = h
                    }
                    if (c || o % 1 || u % 1) {
                        var w = Oy();
                        return Wt(o + w * (u - o + U_("1e-" + ((w + "").length - 1))), u)
                    }
                    return zd(o, u)
                }
                var cP = ol(function(o, u, c) {
                    return u = u.toLowerCase(), o + (c ? i1(u) : u)
                });

                function i1(o) {
                    return fp(qe(o).toLowerCase())
                }

                function o1(o) {
                    return o = qe(o), o && o.replace(d_, eO).replace(P_, "")
                }

                function fP(o, u, c) {
                    o = qe(o), u = In(u);
                    var h = o.length;
                    c = c === n ? h : go(Te(c), 0, h);
                    var w = c;
                    return c -= u.length, c >= 0 && o.slice(c, w) == u
                }

                function dP(o) {
                    return o = qe(o), o && qb.test(o) ? o.replace(Lv, tO) : o
                }

                function pP(o) {
                    return o = qe(o), o && Zb.test(o) ? o.replace(ld, "\\$&") : o
                }
                var hP = ol(function(o, u, c) {
                        return o + (c ? "-" : "") + u.toLowerCase()
                    }),
                    gP = ol(function(o, u, c) {
                        return o + (c ? " " : "") + u.toLowerCase()
                    }),
                    mP = s0("toLowerCase");

                function vP(o, u, c) {
                    o = qe(o), u = Te(u);
                    var h = u ? Zo(o) : 0;
                    if (!u || h >= u) return o;
                    var w = (u - h) / 2;
                    return ca(Xs(w), c) + o + ca(Ys(w), c)
                }

                function yP(o, u, c) {
                    o = qe(o), u = Te(u);
                    var h = u ? Zo(o) : 0;
                    return u && h < u ? o + ca(u - h, c) : o
                }

                function wP(o, u, c) {
                    o = qe(o), u = Te(u);
                    var h = u ? Zo(o) : 0;
                    return u && h < u ? ca(u - h, c) + o : o
                }

                function xP(o, u, c) {
                    return c || u == null ? u = 0 : u && (u = +u), OO(qe(o).replace(ud, ""), u || 0)
                }

                function SP(o, u, c) {
                    return (c ? rn(o, u, c) : u === n) ? u = 1 : u = Te(u), $d(qe(o), u)
                }

                function EP() {
                    var o = arguments,
                        u = qe(o[0]);
                    return o.length < 3 ? u : u.replace(o[1], o[2])
                }
                var CP = ol(function(o, u, c) {
                    return o + (c ? "_" : "") + u.toLowerCase()
                });

                function kP(o, u, c) {
                    return c && typeof c != "number" && rn(o, u, c) && (u = c = n), c = c === n ? ne : c >>> 0, c ? (o = qe(o), o && (typeof u == "string" || u != null && !sp(u)) && (u = In(u), !u && Xo(o)) ? _i(yr(o), 0, c) : o.split(u, c)) : []
                }
                var bP = ol(function(o, u, c) {
                    return o + (c ? " " : "") + fp(u)
                });

                function _P(o, u, c) {
                    return o = qe(o), c = c == null ? 0 : go(Te(c), 0, o.length), u = In(u), o.slice(c, c + u.length) == u
                }

                function OP(o, u, c) {
                    var h = C.templateSettings;
                    c && rn(o, u, c) && (u = n), o = qe(o), u = Ea({}, u, h, g0);
                    var w = Ea({}, u.imports, h.imports, g0),
                        b = Pt(w),
                        I = Ed(w, b),
                        D, L, Y = 0,
                        X = u.interpolate || Ms,
                        Z = "__p += '",
                        ue = kd((u.escape || Ms).source + "|" + X.source + "|" + (X === Fv ? l_ : Ms).source + "|" + (u.evaluate || Ms).source + "|$", "g"),
                        fe = "//# sourceURL=" + (Ke.call(u, "sourceURL") ? (u.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++L_ + "]") + `
`;
                    o.replace(ue, function(ye, Ne, $e, Pn, on, An) {
                        return $e || ($e = Pn), Z += o.slice(Y, An).replace(p_, nO), Ne && (D = !0, Z += `' +
__e(` + Ne + `) +
'`), on && (L = !0, Z += `';
` + on + `;
__p += '`), $e && (Z += `' +
((__t = (` + $e + `)) == null ? '' : __t) +
'`), Y = An + ye.length, ye
                    }), Z += `';
`;
                    var ve = Ke.call(u, "variable") && u.variable;
                    if (!ve) Z = `with (obj) {
` + Z + `
}
`;
                    else if (i_.test(ve)) throw new Ee(a);
                    Z = (L ? Z.replace(lu, "") : Z).replace(vr, "$1").replace(Wb, "$1;"), Z = "function(" + (ve || "obj") + `) {
` + (ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (L ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Z + `return __p
}`;
                    var Re = u1(function() {
                        return We(b, fe + "return " + Z).apply(n, I)
                    });
                    if (Re.source = Z, up(Re)) throw Re;
                    return Re
                }

                function TP(o) {
                    return qe(o).toLowerCase()
                }

                function IP(o) {
                    return qe(o).toUpperCase()
                }

                function RP(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return my(o);
                    if (!o || !(u = In(u))) return o;
                    var h = yr(o),
                        w = yr(u),
                        b = vy(h, w),
                        I = yy(h, w) + 1;
                    return _i(h, b, I).join("")
                }

                function PP(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return o.slice(0, xy(o) + 1);
                    if (!o || !(u = In(u))) return o;
                    var h = yr(o),
                        w = yy(h, yr(u)) + 1;
                    return _i(h, 0, w).join("")
                }

                function AP(o, u, c) {
                    if (o = qe(o), o && (c || u === n)) return o.replace(ud, "");
                    if (!o || !(u = In(u))) return o;
                    var h = yr(o),
                        w = vy(h, yr(u));
                    return _i(h, w).join("")
                }

                function DP(o, u) {
                    var c = Q,
                        h = B;
                    if (ht(u)) {
                        var w = "separator" in u ? u.separator : w;
                        c = "length" in u ? Te(u.length) : c, h = "omission" in u ? In(u.omission) : h
                    }
                    o = qe(o);
                    var b = o.length;
                    if (Xo(o)) {
                        var I = yr(o);
                        b = I.length
                    }
                    if (c >= b) return o;
                    var D = c - Zo(h);
                    if (D < 1) return h;
                    var L = I ? _i(I, 0, D).join("") : o.slice(0, D);
                    if (w === n) return L + h;
                    if (I && (D += L.length - D), sp(w)) {
                        if (o.slice(D).search(w)) {
                            var Y, X = L;
                            for (w.global || (w = kd(w.source, qe(zv.exec(w)) + "g")), w.lastIndex = 0; Y = w.exec(X);) var Z = Y.index;
                            L = L.slice(0, Z === n ? D : Z)
                        }
                    } else if (o.indexOf(In(w), D) != D) {
                        var ue = L.lastIndexOf(w);
                        ue > -1 && (L = L.slice(0, ue))
                    }
                    return L + h
                }

                function NP(o) {
                    return o = qe(o), o && Vb.test(o) ? o.replace(Mv, aO) : o
                }
                var MP = ol(function(o, u, c) {
                        return o + (c ? " " : "") + u.toUpperCase()
                    }),
                    fp = s0("toUpperCase");

                function l1(o, u, c) {
                    return o = qe(o), u = c ? n : u, u === n ? iO(o) ? dO(o) : Q_(o) : o.match(u) || []
                }
                var u1 = Ae(function(o, u) {
                        try {
                            return On(o, n, u)
                        } catch (c) {
                            return up(c) ? c : new Ee(c)
                        }
                    }),
                    LP = Zr(function(o, u) {
                        return Xn(u, function(c) {
                            c = Nr(c), Yr(o, c, op(o[c], o))
                        }), o
                    });

                function FP(o) {
                    var u = o == null ? 0 : o.length,
                        c = ge();
                    return o = u ? ct(o, function(h) {
                        if (typeof h[1] != "function") throw new Zn(s);
                        return [c(h[0]), h[1]]
                    }) : [], Ae(function(h) {
                        for (var w = -1; ++w < u;) {
                            var b = o[w];
                            if (On(b[0], this, h)) return On(b[1], this, h)
                        }
                    })
                }

                function zP(o) {
                    return aT(er(o, g))
                }

                function dp(o) {
                    return function() {
                        return o
                    }
                }

                function $P(o, u) {
                    return o == null || o !== o ? u : o
                }
                var BP = c0(),
                    UP = c0(!0);

                function gn(o) {
                    return o
                }

                function pp(o) {
                    return By(typeof o == "function" ? o : er(o, g))
                }

                function jP(o) {
                    return jy(er(o, g))
                }

                function HP(o, u) {
                    return Hy(o, er(u, g))
                }
                var WP = Ae(function(o, u) {
                        return function(c) {
                            return gu(c, o, u)
                        }
                    }),
                    VP = Ae(function(o, u) {
                        return function(c) {
                            return gu(o, c, u)
                        }
                    });

                function hp(o, u, c) {
                    var h = Pt(u),
                        w = ra(u, h);
                    c == null && !(ht(u) && (w.length || !h.length)) && (c = u, u = o, o = this, w = ra(u, Pt(u)));
                    var b = !(ht(c) && "chain" in c) || !!c.chain,
                        I = ei(o);
                    return Xn(w, function(D) {
                        var L = u[D];
                        o[D] = L, I && (o.prototype[D] = function() {
                            var Y = this.__chain__;
                            if (b || Y) {
                                var X = o(this.__wrapped__),
                                    Z = X.__actions__ = dn(this.__actions__);
                                return Z.push({
                                    func: L,
                                    args: arguments,
                                    thisArg: o
                                }), X.__chain__ = Y, X
                            }
                            return L.apply(o, xi([this.value()], arguments))
                        })
                    }), o
                }

                function qP() {
                    return Ft._ === this && (Ft._ = yO), this
                }

                function gp() {}

                function GP(o) {
                    return o = Te(o), Ae(function(u) {
                        return Wy(u, o)
                    })
                }
                var KP = qd(ct),
                    QP = qd(fy),
                    YP = qd(vd);

                function s1(o) {
                    return Jd(o) ? yd(Nr(o)) : _T(o)
                }

                function XP(o) {
                    return function(u) {
                        return o == null ? n : mo(o, u)
                    }
                }
                var ZP = d0(),
                    JP = d0(!0);

                function mp() {
                    return []
                }

                function vp() {
                    return !1
                }

                function eA() {
                    return {}
                }

                function tA() {
                    return ""
                }

                function nA() {
                    return !0
                }

                function rA(o, u) {
                    if (o = Te(o), o < 1 || o > W) return [];
                    var c = ne,
                        h = Wt(o, ne);
                    u = ge(u), o -= ne;
                    for (var w = Sd(h, u); ++c < o;) u(c);
                    return w
                }

                function iA(o) {
                    return ke(o) ? ct(o, Nr) : Rn(o) ? [o] : dn(T0(qe(o)))
                }

                function oA(o) {
                    var u = ++mO;
                    return qe(o) + u
                }
                var lA = aa(function(o, u) {
                        return o + u
                    }, 0),
                    uA = Gd("ceil"),
                    sA = aa(function(o, u) {
                        return o / u
                    }, 1),
                    aA = Gd("floor");

                function cA(o) {
                    return o && o.length ? na(o, gn, Ad) : n
                }

                function fA(o, u) {
                    return o && o.length ? na(o, ge(u, 2), Ad) : n
                }

                function dA(o) {
                    return hy(o, gn)
                }

                function pA(o, u) {
                    return hy(o, ge(u, 2))
                }

                function hA(o) {
                    return o && o.length ? na(o, gn, Ld) : n
                }

                function gA(o, u) {
                    return o && o.length ? na(o, ge(u, 2), Ld) : n
                }
                var mA = aa(function(o, u) {
                        return o * u
                    }, 1),
                    vA = Gd("round"),
                    yA = aa(function(o, u) {
                        return o - u
                    }, 0);

                function wA(o) {
                    return o && o.length ? xd(o, gn) : 0
                }

                function xA(o, u) {
                    return o && o.length ? xd(o, ge(u, 2)) : 0
                }
                return C.after = j2, C.ary = $0, C.assign = IR, C.assignIn = J0, C.assignInWith = Ea, C.assignWith = RR, C.at = PR, C.before = B0, C.bind = op, C.bindAll = LP, C.bindKey = U0, C.castArray = eR, C.chain = L0, C.chunk = aI, C.compact = cI, C.concat = fI, C.cond = FP, C.conforms = zP, C.constant = dp, C.countBy = w2, C.create = AR, C.curry = j0, C.curryRight = H0, C.debounce = W0, C.defaults = DR, C.defaultsDeep = NR, C.defer = H2, C.delay = W2, C.difference = dI, C.differenceBy = pI, C.differenceWith = hI, C.drop = gI, C.dropRight = mI, C.dropRightWhile = vI, C.dropWhile = yI, C.fill = wI, C.filter = S2, C.flatMap = k2, C.flatMapDeep = b2, C.flatMapDepth = _2, C.flatten = A0, C.flattenDeep = xI, C.flattenDepth = SI, C.flip = V2, C.flow = BP, C.flowRight = UP, C.fromPairs = EI, C.functions = UR, C.functionsIn = jR, C.groupBy = O2, C.initial = kI, C.intersection = bI, C.intersectionBy = _I, C.intersectionWith = OI, C.invert = WR, C.invertBy = VR, C.invokeMap = I2, C.iteratee = pp, C.keyBy = R2, C.keys = Pt, C.keysIn = hn, C.map = ma, C.mapKeys = GR, C.mapValues = KR, C.matches = jP, C.matchesProperty = HP, C.memoize = ya, C.merge = QR, C.mergeWith = e1, C.method = WP, C.methodOf = VP, C.mixin = hp, C.negate = wa, C.nthArg = GP, C.omit = YR, C.omitBy = XR, C.once = q2, C.orderBy = P2, C.over = KP, C.overArgs = G2, C.overEvery = QP, C.overSome = YP, C.partial = lp, C.partialRight = V0, C.partition = A2, C.pick = ZR, C.pickBy = t1, C.property = s1, C.propertyOf = XP, C.pull = PI, C.pullAll = N0, C.pullAllBy = AI, C.pullAllWith = DI, C.pullAt = NI, C.range = ZP, C.rangeRight = JP, C.rearg = K2, C.reject = M2, C.remove = MI, C.rest = Q2, C.reverse = rp, C.sampleSize = F2, C.set = eP, C.setWith = tP, C.shuffle = z2, C.slice = LI, C.sortBy = U2, C.sortedUniq = HI, C.sortedUniqBy = WI, C.split = kP, C.spread = Y2, C.tail = VI, C.take = qI, C.takeRight = GI, C.takeRightWhile = KI, C.takeWhile = QI, C.tap = c2, C.throttle = X2, C.thru = ga, C.toArray = Y0, C.toPairs = n1, C.toPairsIn = r1, C.toPath = iA, C.toPlainObject = Z0, C.transform = nP, C.unary = Z2, C.union = YI, C.unionBy = XI, C.unionWith = ZI, C.uniq = JI, C.uniqBy = e2, C.uniqWith = t2, C.unset = rP, C.unzip = ip, C.unzipWith = M0, C.update = iP, C.updateWith = oP, C.values = sl, C.valuesIn = lP, C.without = n2, C.words = l1, C.wrap = J2, C.xor = r2, C.xorBy = i2, C.xorWith = o2, C.zip = l2, C.zipObject = u2, C.zipObjectDeep = s2, C.zipWith = a2, C.entries = n1, C.entriesIn = r1, C.extend = J0, C.extendWith = Ea, hp(C, C), C.add = lA, C.attempt = u1, C.camelCase = cP, C.capitalize = i1, C.ceil = uA, C.clamp = uP, C.clone = tR, C.cloneDeep = rR, C.cloneDeepWith = iR, C.cloneWith = nR, C.conformsTo = oR, C.deburr = o1, C.defaultTo = $P, C.divide = sA, C.endsWith = fP, C.eq = xr, C.escape = dP, C.escapeRegExp = pP, C.every = x2, C.find = E2, C.findIndex = R0, C.findKey = MR, C.findLast = C2, C.findLastIndex = P0, C.findLastKey = LR, C.floor = aA, C.forEach = F0, C.forEachRight = z0, C.forIn = FR, C.forInRight = zR, C.forOwn = $R, C.forOwnRight = BR, C.get = ap, C.gt = lR, C.gte = uR, C.has = HR, C.hasIn = cp, C.head = D0, C.identity = gn, C.includes = T2, C.indexOf = CI, C.inRange = sP, C.invoke = qR, C.isArguments = wo, C.isArray = ke, C.isArrayBuffer = sR, C.isArrayLike = pn, C.isArrayLikeObject = Et, C.isBoolean = aR, C.isBuffer = Oi, C.isDate = cR, C.isElement = fR, C.isEmpty = dR, C.isEqual = pR, C.isEqualWith = hR, C.isError = up, C.isFinite = gR, C.isFunction = ei, C.isInteger = q0, C.isLength = xa, C.isMap = G0, C.isMatch = mR, C.isMatchWith = vR, C.isNaN = yR, C.isNative = wR, C.isNil = SR, C.isNull = xR, C.isNumber = K0, C.isObject = ht, C.isObjectLike = xt, C.isPlainObject = Su, C.isRegExp = sp, C.isSafeInteger = ER, C.isSet = Q0, C.isString = Sa, C.isSymbol = Rn, C.isTypedArray = ul, C.isUndefined = CR, C.isWeakMap = kR, C.isWeakSet = bR, C.join = TI, C.kebabCase = hP, C.last = nr, C.lastIndexOf = II, C.lowerCase = gP, C.lowerFirst = mP, C.lt = _R, C.lte = OR, C.max = cA, C.maxBy = fA, C.mean = dA, C.meanBy = pA, C.min = hA, C.minBy = gA, C.stubArray = mp, C.stubFalse = vp, C.stubObject = eA, C.stubString = tA, C.stubTrue = nA, C.multiply = mA, C.nth = RI, C.noConflict = qP, C.noop = gp, C.now = va, C.pad = vP, C.padEnd = yP, C.padStart = wP, C.parseInt = xP, C.random = aP, C.reduce = D2, C.reduceRight = N2, C.repeat = SP, C.replace = EP, C.result = JR, C.round = vA, C.runInContext = M, C.sample = L2, C.size = $2, C.snakeCase = CP, C.some = B2, C.sortedIndex = FI, C.sortedIndexBy = zI, C.sortedIndexOf = $I, C.sortedLastIndex = BI, C.sortedLastIndexBy = UI, C.sortedLastIndexOf = jI, C.startCase = bP, C.startsWith = _P, C.subtract = yA, C.sum = wA, C.sumBy = xA, C.template = OP, C.times = rA, C.toFinite = ti, C.toInteger = Te, C.toLength = X0, C.toLower = TP, C.toNumber = rr, C.toSafeInteger = TR, C.toString = qe, C.toUpper = IP, C.trim = RP, C.trimEnd = PP, C.trimStart = AP, C.truncate = DP, C.unescape = NP, C.uniqueId = oA, C.upperCase = MP, C.upperFirst = fp, C.each = F0, C.eachRight = z0, C.first = D0, hp(C, function() {
                    var o = {};
                    return Ar(C, function(u, c) {
                        Ke.call(C.prototype, c) || (o[c] = u)
                    }), o
                }(), {
                    chain: !1
                }), C.VERSION = r, Xn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
                    C[o].placeholder = C
                }), Xn(["drop", "take"], function(o, u) {
                    Me.prototype[o] = function(c) {
                        c = c === n ? 1 : Tt(Te(c), 0);
                        var h = this.__filtered__ && !u ? new Me(this) : this.clone();
                        return h.__filtered__ ? h.__takeCount__ = Wt(c, h.__takeCount__) : h.__views__.push({
                            size: Wt(c, ne),
                            type: o + (h.__dir__ < 0 ? "Right" : "")
                        }), h
                    }, Me.prototype[o + "Right"] = function(c) {
                        return this.reverse()[o](c).reverse()
                    }
                }), Xn(["filter", "map", "takeWhile"], function(o, u) {
                    var c = u + 1,
                        h = c == U || c == oe;
                    Me.prototype[o] = function(w) {
                        var b = this.clone();
                        return b.__iteratees__.push({
                            iteratee: ge(w, 3),
                            type: c
                        }), b.__filtered__ = b.__filtered__ || h, b
                    }
                }), Xn(["head", "last"], function(o, u) {
                    var c = "take" + (u ? "Right" : "");
                    Me.prototype[o] = function() {
                        return this[c](1).value()[0]
                    }
                }), Xn(["initial", "tail"], function(o, u) {
                    var c = "drop" + (u ? "" : "Right");
                    Me.prototype[o] = function() {
                        return this.__filtered__ ? new Me(this) : this[c](1)
                    }
                }), Me.prototype.compact = function() {
                    return this.filter(gn)
                }, Me.prototype.find = function(o) {
                    return this.filter(o).head()
                }, Me.prototype.findLast = function(o) {
                    return this.reverse().find(o)
                }, Me.prototype.invokeMap = Ae(function(o, u) {
                    return typeof o == "function" ? new Me(this) : this.map(function(c) {
                        return gu(c, o, u)
                    })
                }), Me.prototype.reject = function(o) {
                    return this.filter(wa(ge(o)))
                }, Me.prototype.slice = function(o, u) {
                    o = Te(o);
                    var c = this;
                    return c.__filtered__ && (o > 0 || u < 0) ? new Me(c) : (o < 0 ? c = c.takeRight(-o) : o && (c = c.drop(o)), u !== n && (u = Te(u), c = u < 0 ? c.dropRight(-u) : c.take(u - o)), c)
                }, Me.prototype.takeRightWhile = function(o) {
                    return this.reverse().takeWhile(o).reverse()
                }, Me.prototype.toArray = function() {
                    return this.take(ne)
                }, Ar(Me.prototype, function(o, u) {
                    var c = /^(?:filter|find|map|reject)|While$/.test(u),
                        h = /^(?:head|last)$/.test(u),
                        w = C[h ? "take" + (u == "last" ? "Right" : "") : u],
                        b = h || /^find/.test(u);
                    w && (C.prototype[u] = function() {
                        var I = this.__wrapped__,
                            D = h ? [1] : arguments,
                            L = I instanceof Me,
                            Y = D[0],
                            X = L || ke(I),
                            Z = function(Ne) {
                                var $e = w.apply(C, xi([Ne], D));
                                return h && ue ? $e[0] : $e
                            };
                        X && c && typeof Y == "function" && Y.length != 1 && (L = X = !1);
                        var ue = this.__chain__,
                            fe = !!this.__actions__.length,
                            ve = b && !ue,
                            Re = L && !fe;
                        if (!b && X) {
                            I = Re ? I : new Me(this);
                            var ye = o.apply(I, D);
                            return ye.__actions__.push({
                                func: ga,
                                args: [Z],
                                thisArg: n
                            }), new Jn(ye, ue)
                        }
                        return ve && Re ? o.apply(this, D) : (ye = this.thru(Z), ve ? h ? ye.value()[0] : ye.value() : ye)
                    })
                }), Xn(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
                    var u = Us[o],
                        c = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru",
                        h = /^(?:pop|shift)$/.test(o);
                    C.prototype[o] = function() {
                        var w = arguments;
                        if (h && !this.__chain__) {
                            var b = this.value();
                            return u.apply(ke(b) ? b : [], w)
                        }
                        return this[c](function(I) {
                            return u.apply(ke(I) ? I : [], w)
                        })
                    }
                }), Ar(Me.prototype, function(o, u) {
                    var c = C[u];
                    if (c) {
                        var h = c.name + "";
                        Ke.call(nl, h) || (nl[h] = []), nl[h].push({
                            name: u,
                            func: c
                        })
                    }
                }), nl[sa(n, y).name] = [{
                    name: "wrapper",
                    func: n
                }], Me.prototype.clone = NO, Me.prototype.reverse = MO, Me.prototype.value = LO, C.prototype.at = f2, C.prototype.chain = d2, C.prototype.commit = p2, C.prototype.next = h2, C.prototype.plant = m2, C.prototype.reverse = v2, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = y2, C.prototype.first = C.prototype.head, su && (C.prototype[su] = g2), C
            },
            Jo = pO();
        co ? ((co.exports = Jo)._ = Jo, pd._ = Jo) : Ft._ = Jo
    }).call(Eu)
})(Bc, Bc.exports);
var ok = Bc.exports;
const dt = {
    water: {
        name: "water",
        close: !1,
        label: "VODA",
        stack: !0,
        usable: !0,
        count: 0
    },
    burger: {
        name: "burger",
        close: !1,
        label: "BURGR",
        stack: !1,
        usable: !1,
        count: 0
    }
};
let oc = "images";

function R4(e) {
    e && e !== "" && (oc = e)
}
const lk = () => !window.invokeNative,
    uk = () => {},
    P4 = window.GetParentResourceName ? window.GetParentResourceName() : "ox_inventory";
async function cr(e, t) {
    if (!lk()) try {
        return await (await fetch(`https://${P4}/${e}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(t)
        })).json()
    } catch (n) {
        throw Error(`Failed to fetch NUI callback ${e}! (${n})`)
    }
}
const Vw = (e, t) => {
        if (t.type !== "shop" || !un(e)) return !0;
        if (e.count !== void 0 && e.count === 0) return !1;
        if (e.grade === void 0 || !t.groups) return !0;
        const n = Mn.getState().inventory.leftInventory;
        if (!n.groups) return !1;
        const r = Object.keys(t.groups);
        if (Array.isArray(e.grade)) {
            for (let i = 0; i < r.length; i++) {
                const l = r[i];
                if (n.groups[l] !== void 0) {
                    const s = n.groups[l];
                    for (let a = 0; a < e.grade.length; a++) {
                        const f = e.grade[a];
                        if (s === f) return !0
                    }
                }
            }
            return !1
        } else {
            for (let i = 0; i < r.length; i++) {
                const l = r[i];
                if (n.groups[l] !== void 0 && n.groups[l] >= e.grade) return !0
            }
            return !1
        }
    },
    qw = (e, t) => {
        if (!un(e) || t !== "crafting" || !e.ingredients) return !0;
        const n = Mn.getState().inventory.leftInventory;
        return Object.entries(e.ingredients).filter(l => {
            const [s, a] = [l[0], l[1]], f = dt[s];
            return a >= 1 && f && f.count >= a ? !1 : !n.items.find(p => {
                if (un(p) && p.name === s && a < 1) return p.metadata?.durability >= a * 100
            })
        }).length === 0
    },
    un = (e, t = !1) => e.name !== void 0 && e.weight !== void 0 || t && e.name !== void 0 && e.count !== void 0 && e.weight !== void 0,
    A4 = (e, t) => e.name === t.name && ok.isEqual(e.metadata, t.metadata),
    D4 = (e, t, n) => t.stack ? n.find(i => i.name === e.name && ok.isEqual(i.metadata, e.metadata)) || n.find(i => i.name === void 0) : n.find(i => i.name === void 0),
    Uf = (e, t, n) => ({
        sourceInventory: t === Zt.PLAYER ? e.leftInventory : e.rightInventory,
        targetInventory: n ? n === Zt.PLAYER ? e.leftInventory : e.rightInventory : t === Zt.PLAYER ? e.rightInventory : e.leftInventory
    }),
    Ql = (e, t) => {
        if (e?.durability === void 0) return;
        let n = e.durability;
        return n > 100 && e.degrade && (n = (e.durability - t) / (60 * e.degrade) * 100), n < 0 && (n = 0), n
    },
    N4 = e => e.reduce((t, n) => un(n) ? t + n.weight : t, 0),
    Gw = async e => {
        const t = await cr("getItemData", e);
        if (t?.name) return dt[e] = t, t
    }, Ll = e => {
        const t = typeof e == "object";
        if (t) {
            if (!e.name) return;
            const i = e.metadata;
            if (i?.imageurl) return `${i.imageurl}`;
            if (i?.image) return `${oc}/${i.image}.png`
        }
        const n = t ? e.name : e,
            r = dt[n];
        return r ? (r.image || (r.image = `${oc}/${n}.png`), r.image) : `${oc}/${n}.png`
    }, M4 = (e, t) => {
        const {
            leftInventory: n,
            rightInventory: r
        } = t.payload, i = Math.floor(Date.now() / 1e3);
        n && (e.leftInventory = {
            ...n,
            items: Array.from(Array(n.slots), (l, s) => {
                const a = Object.values(n.items).find(f => f?.slot === s + 1) || {
                    slot: s + 1
                };
                return a.name && (typeof dt[a.name] > "u" && Gw(a.name), a.durability = Ql(a.metadata, i)), a
            })
        }), r && (e.rightInventory = {
            ...r,
            items: Array.from(Array(r.slots), (l, s) => {
                const a = Object.values(r.items).find(f => f?.slot === s + 1) || {
                    slot: s + 1
                };
                return a.name && (typeof dt[a.name] > "u" && Gw(a.name), a.durability = Ql(a.metadata, i)), a
            })
        }), r?.type === "admin" ? e.isBusy = !0 : e.isBusy = !1
    }, L4 = (e, t) => {
        if (t.payload.items) {
            Array.isArray(t.payload.items) || (t.payload.items = [t.payload.items]);
            const n = Math.floor(Date.now() / 1e3);
            Object.values(t.payload.items).filter(r => !!r).forEach(r => {
                const i = r.inventory && r.inventory !== Zt.PLAYER ? e.rightInventory : e.leftInventory;
                r.item.durability = Ql(r.item.metadata, n), i.items[r.item.slot - 1] = r.item
            }), e.rightInventory.type === Zt.CRAFTING && (e.rightInventory = {
                ...e.rightInventory
            })
        }
        if (t.payload.itemCount) {
            const n = Object.entries(t.payload.itemCount);
            for (let r = 0; r < n.length; r++) {
                const i = n[r][0],
                    l = n[r][1];
                dt[i] ? dt[i].count += l : console.log(`Item data for ${i} is undefined`)
            }
        }
        if (t.payload.weightData) {
            const n = t.payload.weightData.inventoryId,
                r = t.payload.weightData.maxWeight,
                i = n === e.leftInventory.id ? "leftInventory" : n === e.rightInventory.id ? "rightInventory" : null;
            if (!i) return;
            e[i].maxWeight = r
        }
    }, F4 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l
        } = t.payload, {
            sourceInventory: s,
            targetInventory: a
        } = Uf(e, r, l), f = Math.floor(Date.now() / 1e3);
        [s.items[n.slot - 1], a.items[i.slot - 1]] = [{
            ...a.items[i.slot - 1],
            slot: n.slot,
            durability: Ql(i.metadata, f)
        }, {
            ...s.items[n.slot - 1],
            slot: i.slot,
            durability: Ql(n.metadata, f)
        }]
    }, z4 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l,
            count: s
        } = t.payload, {
            sourceInventory: a,
            targetInventory: f
        } = Uf(e, r, l), d = n.weight / n.count;
        f.items[i.slot - 1] = {
            ...f.items[i.slot - 1],
            count: i.count + s,
            weight: d * (i.count + s)
        }, !(r === Zt.SHOP || r === Zt.CRAFTING) && (a.items[n.slot - 1] = n.count - s > 0 ? {
            ...a.items[n.slot - 1],
            count: n.count - s,
            weight: d * (n.count - s)
        } : {
            slot: n.slot
        })
    }, $4 = (e, t) => {
        const {
            fromSlot: n,
            fromType: r,
            toSlot: i,
            toType: l,
            count: s
        } = t.payload, {
            sourceInventory: a,
            targetInventory: f
        } = Uf(e, r, l), d = n.weight / n.count, p = Math.floor(Date.now() / 1e3), g = a.items[n.slot - 1];
        f.items[i.slot - 1] = {
            ...g,
            count: s,
            weight: d * s,
            slot: i.slot,
            durability: Ql(g.metadata, p)
        }, !(r === Zt.SHOP || r === Zt.CRAFTING) && (a.items[n.slot - 1] = n.count - s > 0 ? {
            ...a.items[n.slot - 1],
            count: n.count - s,
            weight: d * (n.count - s)
        } : {
            slot: n.slot
        })
    }, B4 = {
        leftInventory: {
            id: "",
            type: "",
            slots: 0,
            maxWeight: 0,
            items: []
        },
        rightInventory: {
            id: "",
            type: "",
            slots: 0,
            maxWeight: 0,
            items: []
        },
        additionalMetadata: new Array,
        itemAmount: 0,
        shiftPressed: !1,
        isBusy: !1
    }, sk = rv({
        name: "inventory",
        initialState: B4,
        reducers: {
            stackSlots: z4,
            swapSlots: F4,
            setupInventory: M4,
            moveSlots: $4,
            refreshSlots: L4,
            setAdditionalMetadata: (e, t) => {
                const n = [];
                for (let r = 0; r < t.payload.length; r++) {
                    const i = t.payload[r];
                    e.additionalMetadata.find(l => l.value === i.value) || n.push(i)
                }
                e.additionalMetadata = [...e.additionalMetadata, ...n]
            },
            setItemAmount: (e, t) => {
                e.itemAmount = t.payload
            },
            setShiftPressed: (e, t) => {
                e.shiftPressed = t.payload
            },
            setContainerWeight: (e, t) => {
                const n = e.leftInventory.items.find(r => r.metadata?.container === e.rightInventory.id);
                n && (n.weight = t.payload)
            }
        },
        extraReducers: e => {
            e.addMatcher(nk, t => {
                t.isBusy = !0, t.history = {
                    leftInventory: Eg(t.leftInventory),
                    rightInventory: Eg(t.rightInventory)
                }
            }), e.addMatcher(ik, t => {
                t.isBusy = !1
            }), e.addMatcher(rk, t => {
                t.history && t.history.leftInventory && t.history.rightInventory && (t.leftInventory = t.history.leftInventory, t.rightInventory = t.history.rightInventory), t.isBusy = !1
            })
        }
    }), {
        setAdditionalMetadata: U4,
        setItemAmount: j4,
        setShiftPressed: H4,
        setupInventory: ak,
        swapSlots: W4,
        moveSlots: V4,
        stackSlots: q4,
        refreshSlots: G4,
        setContainerWeight: K4
    } = sk.actions, ck = e => e.inventory.leftInventory, Q4 = e => e.inventory.rightInventory, Y4 = e => e.inventory.itemAmount, X4 = sk.reducer, Z4 = {
        open: !1,
        item: null,
        inventoryType: null
    }, fk = rv({
        name: "tooltip",
        initialState: Z4,
        reducers: {
            openTooltip(e, t) {
                e.open = !0, e.item = t.payload.item, e.inventoryType = t.payload.inventoryType
            },
            closeTooltip(e) {
                e.open = !1
            }
        }
    }), {
        openTooltip: J4,
        closeTooltip: Xu
    } = fk.actions, eF = fk.reducer, tF = {
        coords: null,
        item: null
    }, dk = rv({
        name: "contextMenu",
        initialState: tF,
        reducers: {
            openContextMenu(e, t) {
                e.coords = t.payload.coords, e.item = t.payload.item
            },
            closeContextMenu(e) {
                e.coords = null
            }
        }
    }), {
        openContextMenu: nF,
        closeContextMenu: pk
    } = dk.actions, rF = dk.reducer, Mn = w4({
        reducer: {
            inventory: X4,
            tooltip: eF,
            contextMenu: rF
        }
    }), ru = () => FM(), mi = wM, $r = (e, t) => {
        const n = R.useRef(uk);
        R.useEffect(() => {
            n.current = t
        }, [t]), R.useEffect(() => {
            const r = i => {
                const {
                    action: l,
                    data: s
                } = i.data;
                n.current && l === e && n.current(s)
            };
            return window.addEventListener("message", r), () => window.removeEventListener("message", r)
        }, [e])
    }, av = e => {
        cr("useItem", e.slot)
    }, hk = e => {
        const {
            inventory: {
                itemAmount: t
            }
        } = Mn.getState();
        cr("giveItem", {
            slot: e.slot,
            count: t
        })
    }, iF = () => {
        const e = mi(Y4),
            t = ru();
        R.useState(!1);
        const [, n] = yg(() => ({
            accept: "SLOT",
            drop: l => {
                l.inventory === "player" && av(l.item)
            }
        })), [, r] = yg(() => ({
            accept: "SLOT",
            drop: l => {
                l.inventory === "player" && hk(l.item)
            }
        }));
        return $(Bn, {
            children: $("div", {
                className: "inventory-control flex items-center justify-center px-3",
                children: Se("div", {
                    className: "grid grid-cols-1 gap-2.5",
                    children: [$("input", {
                        className: "w-28 2k:w-32 4k:w-40 px-1 py-2.5 2k:py-4 4k:py-6 2k:text-xl 4k:text-3xl bg-dark border-zinc-700 bg-opacity-80 rounded-md text-center mb-8 focus:outline-none hover:border-gray-500 border border-transparent focus:border-indigo-400 transition-colors duration-300",
                        type: "number",
                        defaultValue: e,
                        onChange: l => {
                            l.target.valueAsNumber = isNaN(l.target.valueAsNumber) || l.target.valueAsNumber < 0 ? 0 : Math.floor(l.target.valueAsNumber), t(j4(l.target.valueAsNumber))
                        }
                    }), Se("div", {
                        className: "flex items-center justify-between flex-col space-y-3",
                        children: [$("button", {
                            className: "inventory-control__button inventory-control__button--use",
                            ref: n,
                            children: Se("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [$("path", {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none"
                                }), $("path", {
                                    d: "M8 11v-3.5a1.5 1.5 0 0 1 3 0v2.5"
                                }), $("path", {
                                    d: "M11 9.5v-3a1.5 1.5 0 0 1 3 0v3.5"
                                }), $("path", {
                                    d: "M14 7.5a1.5 1.5 0 0 1 3 0v2.5"
                                }), $("path", {
                                    d: "M17 9.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
                                })]
                            })
                        }), $("button", {
                            className: "inventory-control__button",
                            ref: r,
                            children: Se("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [$("path", {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none"
                                }), $("path", {
                                    d: "M21 17l-18 0"
                                }), $("path", {
                                    d: "M6 10l-3 -3l3 -3"
                                }), $("path", {
                                    d: "M3 7l18 0"
                                }), $("path", {
                                    d: "M18 20l3 -3l-3 -3"
                                })]
                            })
                        }), $("button", {
                            className: "inventory-control__button inventory-control__button--close",
                            onClick: () => cr("exit"),
                            children: Se("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [$("path", {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none"
                                }), $("path", {
                                    d: "M18 6l-12 12"
                                }), $("path", {
                                    d: "M6 6l12 12"
                                })]
                            })
                        })]
                    })]
                })
            })
        })
    }, gk = ({
        percent: e,
        durability: t
    }) => {
        const n = _e.useMemo(() => t ? e < 50 ? "bg-orange-600" : "bg-green-400" : e > 50 ? "bg-orange-600" : "bg-green-400", [t, e]);
        return $("div", {
            className: `rounded-md mt-0.5 ${t?"durability-bar":"weight-bar"}`,
            children: $("div", {
                className: `rounded-md ${n}`,
                style: {
                    visibility: e > 0 ? "visible" : "hidden",
                    height: "100%",
                    width: `${e}%`,
                    transition: `background ${.3}s ease, width ${.3}s ease`
                }
            })
        })
    };

function bg(e, t) {
    return bg = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i, r
    }, bg(e, t)
}

function cv(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, bg(e, t)
}
var mk = {
        exports: {}
    },
    oF = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    lF = oF,
    uF = lF;

function vk() {}

function yk() {}
yk.resetWarningCache = vk;
var sF = function() {
    function e(r, i, l, s, a, f) {
        if (f !== uF) {
            var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw d.name = "Invariant Violation", d
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: yk,
        resetWarningCache: vk
    };
    return n.PropTypes = n, n
};
mk.exports = sF();
var aF = mk.exports;
const Ce = io(aF);

function cF(e, t) {
    return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1
}

function fF(e, t) {
    e.classList ? e.classList.add(t) : cF(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
}

function Kw(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}

function dF(e, t) {
    e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = Kw(e.className, t) : e.setAttribute("class", Kw(e.className && e.className.baseVal || "", t))
}
const Qw = {
        disabled: !1
    },
    Uc = _e.createContext(null);
var wk = function(t) {
        return t.scrollTop
    },
    zu = "unmounted",
    Co = "exited",
    ko = "entering",
    hl = "entered",
    _g = "exiting",
    vi = function(e) {
        cv(t, e);

        function t(r, i) {
            var l;
            l = e.call(this, r, i) || this;
            var s = i,
                a = s && !s.isMounting ? r.enter : r.appear,
                f;
            return l.appearStatus = null, r.in ? a ? (f = Co, l.appearStatus = ko) : f = hl : r.unmountOnExit || r.mountOnEnter ? f = zu : f = Co, l.state = {
                status: f
            }, l.nextCallback = null, l
        }
        t.getDerivedStateFromProps = function(i, l) {
            var s = i.in;
            return s && l.status === zu ? {
                status: Co
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(i) {
            var l = null;
            if (i !== this.props) {
                var s = this.state.status;
                this.props.in ? s !== ko && s !== hl && (l = ko) : (s === ko || s === hl) && (l = _g)
            }
            this.updateStatus(!1, l)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var i = this.props.timeout,
                l, s, a;
            return l = s = a = i, i != null && typeof i != "number" && (l = i.exit, s = i.enter, a = i.appear !== void 0 ? i.appear : s), {
                exit: l,
                enter: s,
                appear: a
            }
        }, n.updateStatus = function(i, l) {
            if (i === void 0 && (i = !1), l !== null)
                if (this.cancelNextCallback(), l === ko) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var s = this.props.nodeRef ? this.props.nodeRef.current : Ba.findDOMNode(this);
                        s && wk(s)
                    }
                    this.performEnter(i)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === Co && this.setState({
                status: zu
            })
        }, n.performEnter = function(i) {
            var l = this,
                s = this.props.enter,
                a = this.context ? this.context.isMounting : i,
                f = this.props.nodeRef ? [a] : [Ba.findDOMNode(this), a],
                d = f[0],
                p = f[1],
                g = this.getTimeouts(),
                v = a ? g.appear : g.enter;
            if (!i && !s || Qw.disabled) {
                this.safeSetState({
                    status: hl
                }, function() {
                    l.props.onEntered(d)
                });
                return
            }
            this.props.onEnter(d, p), this.safeSetState({
                status: ko
            }, function() {
                l.props.onEntering(d, p), l.onTransitionEnd(v, function() {
                    l.safeSetState({
                        status: hl
                    }, function() {
                        l.props.onEntered(d, p)
                    })
                })
            })
        }, n.performExit = function() {
            var i = this,
                l = this.props.exit,
                s = this.getTimeouts(),
                a = this.props.nodeRef ? void 0 : Ba.findDOMNode(this);
            if (!l || Qw.disabled) {
                this.safeSetState({
                    status: Co
                }, function() {
                    i.props.onExited(a)
                });
                return
            }
            this.props.onExit(a), this.safeSetState({
                status: _g
            }, function() {
                i.props.onExiting(a), i.onTransitionEnd(s.exit, function() {
                    i.safeSetState({
                        status: Co
                    }, function() {
                        i.props.onExited(a)
                    })
                })
            })
        }, n.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(i, l) {
            l = this.setNextCallback(l), this.setState(i, l)
        }, n.setNextCallback = function(i) {
            var l = this,
                s = !0;
            return this.nextCallback = function(a) {
                s && (s = !1, l.nextCallback = null, i(a))
            }, this.nextCallback.cancel = function() {
                s = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(i, l) {
            this.setNextCallback(l);
            var s = this.props.nodeRef ? this.props.nodeRef.current : Ba.findDOMNode(this),
                a = i == null && !this.props.addEndListener;
            if (!s || a) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var f = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
                    d = f[0],
                    p = f[1];
                this.props.addEndListener(d, p)
            }
            i != null && setTimeout(this.nextCallback, i)
        }, n.render = function() {
            var i = this.state.status;
            if (i === zu) return null;
            var l = this.props,
                s = l.children;
            l.in, l.mountOnEnter, l.unmountOnExit, l.appear, l.enter, l.exit, l.timeout, l.addEndListener, l.onEnter, l.onEntering, l.onEntered, l.onExit, l.onExiting, l.onExited, l.nodeRef;
            var a = zm(l, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return _e.createElement(Uc.Provider, {
                value: null
            }, typeof s == "function" ? s(i, a) : _e.cloneElement(_e.Children.only(s), a))
        }, t
    }(_e.Component);
vi.contextType = Uc;
vi.propTypes = {};

function fl() {}
vi.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: fl,
    onEntering: fl,
    onEntered: fl,
    onExit: fl,
    onExiting: fl,
    onExited: fl
};
vi.UNMOUNTED = zu;
vi.EXITED = Co;
vi.ENTERING = ko;
vi.ENTERED = hl;
vi.EXITING = _g;
const pF = vi;
var hF = function(t, n) {
        return t && n && n.split(" ").forEach(function(r) {
            return fF(t, r)
        })
    },
    nh = function(t, n) {
        return t && n && n.split(" ").forEach(function(r) {
            return dF(t, r)
        })
    },
    fv = function(e) {
        cv(t, e);

        function t() {
            for (var r, i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
            return r = e.call.apply(e, [this].concat(l)) || this, r.appliedClasses = {
                appear: {},
                enter: {},
                exit: {}
            }, r.onEnter = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1];
                r.removeClasses(p, "exit"), r.addClass(p, g ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(a, f)
            }, r.onEntering = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1],
                    v = g ? "appear" : "enter";
                r.addClass(p, v, "active"), r.props.onEntering && r.props.onEntering(a, f)
            }, r.onEntered = function(a, f) {
                var d = r.resolveArguments(a, f),
                    p = d[0],
                    g = d[1],
                    v = g ? "appear" : "enter";
                r.removeClasses(p, v), r.addClass(p, v, "done"), r.props.onEntered && r.props.onEntered(a, f)
            }, r.onExit = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.removeClasses(d, "appear"), r.removeClasses(d, "enter"), r.addClass(d, "exit", "base"), r.props.onExit && r.props.onExit(a)
            }, r.onExiting = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.addClass(d, "exit", "active"), r.props.onExiting && r.props.onExiting(a)
            }, r.onExited = function(a) {
                var f = r.resolveArguments(a),
                    d = f[0];
                r.removeClasses(d, "exit"), r.addClass(d, "exit", "done"), r.props.onExited && r.props.onExited(a)
            }, r.resolveArguments = function(a, f) {
                return r.props.nodeRef ? [r.props.nodeRef.current, a] : [a, f]
            }, r.getClassNames = function(a) {
                var f = r.props.classNames,
                    d = typeof f == "string",
                    p = d && f ? f + "-" : "",
                    g = d ? "" + p + a : f[a],
                    v = d ? g + "-active" : f[a + "Active"],
                    m = d ? g + "-done" : f[a + "Done"];
                return {
                    baseClassName: g,
                    activeClassName: v,
                    doneClassName: m
                }
            }, r
        }
        var n = t.prototype;
        return n.addClass = function(i, l, s) {
            var a = this.getClassNames(l)[s + "ClassName"],
                f = this.getClassNames("enter"),
                d = f.doneClassName;
            l === "appear" && s === "done" && d && (a += " " + d), s === "active" && i && wk(i), a && (this.appliedClasses[l][s] = a, hF(i, a))
        }, n.removeClasses = function(i, l) {
            var s = this.appliedClasses[l],
                a = s.base,
                f = s.active,
                d = s.done;
            this.appliedClasses[l] = {}, a && nh(i, a), f && nh(i, f), d && nh(i, d)
        }, n.render = function() {
            var i = this.props;
            i.classNames;
            var l = zm(i, ["classNames"]);
            return _e.createElement(pF, Dc({}, l, {
                onEnter: this.onEnter,
                onEntered: this.onEntered,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited
            }))
        }, t
    }(_e.Component);
fv.defaultProps = {
    classNames: ""
};
fv.propTypes = {};
const xk = fv;

function gF(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function dv(e, t) {
    var n = function(l) {
            return t && R.isValidElement(l) ? t(l) : l
        },
        r = Object.create(null);
    return e && R.Children.map(e, function(i) {
        return i
    }).forEach(function(i) {
        r[i.key] = n(i)
    }), r
}

function mF(e, t) {
    e = e || {}, t = t || {};

    function n(p) {
        return p in t ? t[p] : e[p]
    }
    var r = Object.create(null),
        i = [];
    for (var l in e) l in t ? i.length && (r[l] = i, i = []) : i.push(l);
    var s, a = {};
    for (var f in t) {
        if (r[f])
            for (s = 0; s < r[f].length; s++) {
                var d = r[f][s];
                a[r[f][s]] = n(d)
            }
        a[f] = n(f)
    }
    for (s = 0; s < i.length; s++) a[i[s]] = n(i[s]);
    return a
}

function Io(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}

function vF(e, t) {
    return dv(e.children, function(n) {
        return R.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Io(n, "appear", e),
            enter: Io(n, "enter", e),
            exit: Io(n, "exit", e)
        })
    })
}

function yF(e, t, n) {
    var r = dv(e.children),
        i = mF(t, r);
    return Object.keys(i).forEach(function(l) {
        var s = i[l];
        if (R.isValidElement(s)) {
            var a = l in t,
                f = l in r,
                d = t[l],
                p = R.isValidElement(d) && !d.props.in;
            f && (!a || p) ? i[l] = R.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: Io(s, "exit", e),
                enter: Io(s, "enter", e)
            }) : !f && a && !p ? i[l] = R.cloneElement(s, {
                in: !1
            }) : f && a && R.isValidElement(d) && (i[l] = R.cloneElement(s, {
                onExited: n.bind(null, s),
                in: d.props.in,
                exit: Io(s, "exit", e),
                enter: Io(s, "enter", e)
            }))
        }
    }), i
}
var wF = Object.values || function(e) {
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    },
    xF = {
        component: "div",
        childFactory: function(t) {
            return t
        }
    },
    pv = function(e) {
        cv(t, e);

        function t(r, i) {
            var l;
            l = e.call(this, r, i) || this;
            var s = l.handleExited.bind(gF(l));
            return l.state = {
                contextValue: {
                    isMounting: !0
                },
                handleExited: s,
                firstRender: !0
            }, l
        }
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.mounted = !0, this.setState({
                contextValue: {
                    isMounting: !1
                }
            })
        }, n.componentWillUnmount = function() {
            this.mounted = !1
        }, t.getDerivedStateFromProps = function(i, l) {
            var s = l.children,
                a = l.handleExited,
                f = l.firstRender;
            return {
                children: f ? vF(i, a) : yF(i, s, a),
                firstRender: !1
            }
        }, n.handleExited = function(i, l) {
            var s = dv(this.props.children);
            i.key in s || (i.props.onExited && i.props.onExited(l), this.mounted && this.setState(function(a) {
                var f = Dc({}, a.children);
                return delete f[i.key], {
                    children: f
                }
            }))
        }, n.render = function() {
            var i = this.props,
                l = i.component,
                s = i.childFactory,
                a = zm(i, ["component", "childFactory"]),
                f = this.state.contextValue,
                d = wF(this.state.children).map(s);
            return delete a.appear, delete a.enter, delete a.exit, l === null ? _e.createElement(Uc.Provider, {
                value: f
            }, d) : _e.createElement(Uc.Provider, {
                value: f
            }, _e.createElement(l, a, d))
        }, t
    }(_e.Component);
pv.propTypes = {};
pv.defaultProps = xF;
const SF = pv,
    EF = e => {
        const t = _e.useRef(null);
        return $(xk, {
            nodeRef: t,
            in: e.in,
            timeout: 200,
            classNames: "transition-slide-up",
            unmountOnExit: !0,
            children: _e.cloneElement(e.children, {
                ref: t
            })
        })
    },
    CF = () => {
        const [e, t] = R.useState(!1), n = mi(ck).items.slice(0, 5), [r, i] = R.useState();
        return $r("toggleHotbar", () => {
            e ? t(!1) : (r && clearTimeout(r), t(!0), i(setTimeout(() => t(!1), 3e3)))
        }), $(EF, {
            in: e,
            children: $("div", {
                className: "hotbar-container",
                children: n.map(l => $("div", {
                    className: "hotbar-item-slot",
                    style: {
                        backgroundImage: `url(${l?.name?Ll(l):"none"}`
                    },
                    children: un(l) && Se("div", {
                        className: "item-slot-wrapper",
                        children: [Se("div", {
                            className: "hotbar-slot-header-wrapper",
                            children: [$("div", {
                                className: "inventory-slot-number",
                                children: l.slot
                            }), l.count && $("div", {
                                className: `inventory-weight ${l.name=="money"?"inventory-weight--money":"inventory-weight--amount"}`,
                                children: l.count.toLocaleString("en-us") + ` ${l.name=="money"?"$":"x"}`
                            })]
                        }), Se("div", {
                            children: [$("div", {
                                className: "inventory-slot-label-box mx-0.5 mb-0.5",
                                children: $("div", {
                                    className: "inventory-slot-label-text",
                                    children: l.metadata?.label ? l.metadata.label : dt[l.name]?.label || l.name
                                })
                            }), l?.durability !== void 0 && $(gk, {
                                percent: l.durability,
                                durability: !0
                            })]
                        })]
                    })
                }, `hotbar-${l.slot}`))
            })
        })
    },
    kF = ["Escape"],
    bF = e => {
        const t = R.useRef(uk),
            n = ru();
        R.useEffect(() => {
            t.current = e
        }, [e]), R.useEffect(() => {
            const r = i => {
                kF.includes(i.code) && (t.current(!1), n(Xu()), n(pk()), cr("exit"))
            };
            return window.addEventListener("keyup", r), () => window.removeEventListener("keyup", r)
        }, [])
    },
    _F = iv("inventory/validateMove", async (e, {
        rejectWithValue: t,
        dispatch: n
    }) => {
        try {
            const r = await cr("swapItems", e);
            if (r === !1) return t(r);
            typeof r == "number" && n(K4(r))
        } catch {
            return t(!1)
        }
    }),
    Og = (e, t) => {
        const {
            inventory: n
        } = Mn.getState(), {
            sourceInventory: r,
            targetInventory: i
        } = Uf(n, e.inventory, t?.inventory), l = r.items[e.item.slot - 1], s = dt[l.name];
        if (s === void 0) return console.error(`${l.name} item data undefined!`);
        if (l.metadata?.container !== void 0) {
            if (i.type === Zt.CONTAINER) return console.log(`Cannot store container ${l.name} inside another container`);
            if (n.rightInventory.id === l.metadata.container) return console.log(`Cannot move container ${l.name} when opened`)
        }
        const a = t ? i.items[t.item.slot - 1] : D4(l, s, i.items);
        if (a === void 0) return console.error("Target slot undefined!");
        if (a.metadata?.container !== void 0 && n.rightInventory.id === a.metadata.container) return console.log(`Cannot swap item ${l.name} with container ${a.name} when opened`);
        const f = n.shiftPressed && l.count > 1 && r.type !== "shop" ? Math.floor(l.count / 2) : n.itemAmount === 0 || n.itemAmount > l.count ? l.count : n.itemAmount,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Mn.dispatch(_F({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        })), un(a, !0) ? s.stack && A4(l, a) ? Mn.dispatch(q4({
            ...d,
            toSlot: a
        })) : Mn.dispatch(W4({
            ...d,
            toSlot: a
        })) : Mn.dispatch(V4(d))
    },
    OF = iv("inventory/buyItem", async (e, {
        rejectWithValue: t
    }) => {
        try {
            const n = await cr("buyItem", e);
            if (n === !1) return t(n)
        } catch {
            return t(!1)
        }
    }),
    TF = (e, t) => {
        const {
            inventory: n
        } = Mn.getState(), r = n.rightInventory, i = n.leftInventory, l = r.items[e.item.slot - 1];
        if (!un(l)) throw new Error(`Item ${l.slot} name === undefined`);
        if (l.count === 0) return;
        if (dt[l.name] === void 0) return console.error(`Item ${l.name} data undefined!`);
        const a = i.items[t.item.slot - 1];
        if (a === void 0) return console.error("Target slot undefined");
        const f = n.itemAmount !== 0 ? l.count && n.itemAmount > l.count ? l.count : n.itemAmount : 1,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Mn.dispatch(OF({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        }))
    },
    Xt = {},
    IF = iv("inventory/craftItem", async (e, {
        rejectWithValue: t
    }) => {
        try {
            const n = await cr("craftItem", e);
            if (n === !1) return t(n)
        } catch {
            return t(!1)
        }
    }),
    RF = (e, t) => {
        const {
            inventory: n
        } = Mn.getState(), r = n.rightInventory, i = n.leftInventory, l = r.items[e.item.slot - 1];
        if (!un(l)) throw new Error(`Item ${l.slot} name === undefined`);
        if (l.count === 0) return;
        if (dt[l.name] === void 0) return console.error(`Item ${l.name} data undefined!`);
        const a = i.items[t.item.slot - 1];
        if (a === void 0) return console.error("Target slot undefined");
        const f = n.itemAmount === 0 ? 1 : n.itemAmount,
            d = {
                fromSlot: l,
                toSlot: a,
                fromType: r.type,
                toType: i.type,
                count: f
            };
        Mn.dispatch(IF({
            ...d,
            fromSlot: l.slot,
            toSlot: a.slot
        }))
    },
    jc = Math.min,
    Ao = Math.max,
    Hc = Math.round,
    Ol = Math.floor,
    no = e => ({
        x: e,
        y: e
    }),
    PF = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    AF = {
        start: "end",
        end: "start"
    };

function Yw(e, t, n) {
    return Ao(e, jc(t, n))
}

function jf(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Uo(e) {
    return e.split("-")[0]
}

function Hf(e) {
    return e.split("-")[1]
}

function Sk(e) {
    return e === "x" ? "y" : "x"
}

function Ek(e) {
    return e === "y" ? "height" : "width"
}

function Wf(e) {
    return ["top", "bottom"].includes(Uo(e)) ? "y" : "x"
}

function Ck(e) {
    return Sk(Wf(e))
}

function DF(e, t, n) {
    n === void 0 && (n = !1);
    const r = Hf(e),
        i = Ck(e),
        l = Ek(i);
    let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[l] > t.floating[l] && (s = Wc(s)), [s, Wc(s)]
}

function NF(e) {
    const t = Wc(e);
    return [Tg(e), t, Tg(t)]
}

function Tg(e) {
    return e.replace(/start|end/g, t => AF[t])
}

function MF(e, t, n) {
    const r = ["left", "right"],
        i = ["right", "left"],
        l = ["top", "bottom"],
        s = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? i : r : t ? r : i;
        case "left":
        case "right":
            return t ? l : s;
        default:
            return []
    }
}

function LF(e, t, n, r) {
    const i = Hf(e);
    let l = MF(Uo(e), n === "start", r);
    return i && (l = l.map(s => s + "-" + i), t && (l = l.concat(l.map(Tg)))), l
}

function Wc(e) {
    return e.replace(/left|right|bottom|top/g, t => PF[t])
}

function FF(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function zF(e) {
    return typeof e != "number" ? FF(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Vc(e) {
    return {
        ...e,
        top: e.y,
        left: e.x,
        right: e.x + e.width,
        bottom: e.y + e.height
    }
}

function ro(e) {
    return kk(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function $n(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function yi(e) {
    var t;
    return (t = (kk(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function kk(e) {
    return e instanceof Node || e instanceof $n(e).Node
}

function mt(e) {
    return e instanceof Element || e instanceof $n(e).Element
}

function en(e) {
    return e instanceof HTMLElement || e instanceof $n(e).HTMLElement
}

function Ig(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $n(e).ShadowRoot
}

function Is(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: i
    } = Hn(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}

function $F(e) {
    return ["table", "td", "th"].includes(ro(e))
}

function hv(e) {
    const t = gv(),
        n = Hn(e);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function BF(e) {
    let t = jo(e);
    for (; en(t) && !Rs(t);) {
        if (hv(t)) return t;
        t = jo(t)
    }
    return null
}

function gv() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Rs(e) {
    return ["html", "body", "#document"].includes(ro(e))
}

function Hn(e) {
    return $n(e).getComputedStyle(e)
}

function Vf(e) {
    return mt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function jo(e) {
    if (ro(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Ig(e) && e.host || yi(e);
    return Ig(t) ? t.host : t
}

function bk(e) {
    const t = jo(e);
    return Rs(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : en(t) && Is(t) ? t : bk(t)
}

function Yi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const i = bk(e),
        l = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = $n(i);
    return l ? t.concat(s, s.visualViewport || [], Is(i) ? i : [], s.frameElement && n ? Yi(s.frameElement) : []) : t.concat(i, Yi(i, [], n))
}

function Li(e) {
    let t = e.activeElement;
    for (;
        ((n = t) == null || (r = n.shadowRoot) == null ? void 0 : r.activeElement) != null;) {
        var n, r;
        t = t.shadowRoot.activeElement
    }
    return t
}

function At(e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Ig(n)) {
        let r = t;
        for (; r;) {
            if (e === r) return !0;
            r = r.parentNode || r.host
        }
    }
    return !1
}

function mv() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function UF() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: n,
            version: r
        } = t;
        return n + "/" + r
    }).join(" ") : navigator.userAgent
}

function _k(e) {
    if (e.mozInputSource === 0 && e.isTrusted) return !0;
    const t = /Android/i;
    return (t.test(mv()) || t.test(UF())) && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function Ok(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0
}

function Tk() {
    return /apple/i.test(navigator.vendor)
}

function jF() {
    return mv().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
}

function qc(e, t) {
    const n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e)
}

function HF(e) {
    return "nativeEvent" in e
}

function WF(e) {
    return e.matches("html,body")
}

function sn(e) {
    return e?.ownerDocument || document
}

function rh(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}

function vv(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const VF = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function Ik(e) {
    return en(e) && e.matches(VF)
}

function Bt(e) {
    e.preventDefault(), e.stopPropagation()
}

function Xw(e, t, n) {
    let {
        reference: r,
        floating: i
    } = e;
    const l = Wf(t),
        s = Ck(t),
        a = Ek(s),
        f = Uo(t),
        d = l === "y",
        p = r.x + r.width / 2 - i.width / 2,
        g = r.y + r.height / 2 - i.height / 2,
        v = r[a] / 2 - i[a] / 2;
    let m;
    switch (f) {
        case "top":
            m = {
                x: p,
                y: r.y - i.height
            };
            break;
        case "bottom":
            m = {
                x: p,
                y: r.y + r.height
            };
            break;
        case "right":
            m = {
                x: r.x + r.width,
                y: g
            };
            break;
        case "left":
            m = {
                x: r.x - i.width,
                y: g
            };
            break;
        default:
            m = {
                x: r.x,
                y: r.y
            }
    }
    switch (Hf(t)) {
        case "start":
            m[s] -= v * (n && d ? -1 : 1);
            break;
        case "end":
            m[s] += v * (n && d ? -1 : 1);
            break
    }
    return m
}
const qF = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: i = "absolute",
        middleware: l = [],
        platform: s
    } = n, a = l.filter(Boolean), f = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let d = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }),
        {
            x: p,
            y: g
        } = Xw(d, r, f),
        v = r,
        m = {},
        E = 0;
    for (let S = 0; S < a.length; S++) {
        const {
            name: A,
            fn: y
        } = a[S], {
            x,
            y: k,
            data: P,
            reset: N
        } = await y({
            x: p,
            y: g,
            initialPlacement: r,
            placement: v,
            strategy: i,
            middlewareData: m,
            rects: d,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        if (p = x ?? p, g = k ?? g, m = {
                ...m,
                [A]: {
                    ...m[A],
                    ...P
                }
            }, N && E <= 50) {
            E++, typeof N == "object" && (N.placement && (v = N.placement), N.rects && (d = N.rects === !0 ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: i
            }) : N.rects), {
                x: p,
                y: g
            } = Xw(d, v, f)), S = -1;
            continue
        }
    }
    return {
        x: p,
        y: g,
        placement: v,
        strategy: i,
        middlewareData: m
    }
};
async function Rk(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: i,
        platform: l,
        rects: s,
        elements: a,
        strategy: f
    } = e, {
        boundary: d = "clippingAncestors",
        rootBoundary: p = "viewport",
        elementContext: g = "floating",
        altBoundary: v = !1,
        padding: m = 0
    } = jf(t, e), E = zF(m), A = a[v ? g === "floating" ? "reference" : "floating" : g], y = Vc(await l.getClippingRect({
        element: (n = await (l.isElement == null ? void 0 : l.isElement(A))) == null || n ? A : A.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(a.floating)),
        boundary: d,
        rootBoundary: p,
        strategy: f
    })), x = g === "floating" ? {
        ...s.floating,
        x: r,
        y: i
    } : s.reference, k = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a.floating)), P = await (l.isElement == null ? void 0 : l.isElement(k)) ? await (l.getScale == null ? void 0 : l.getScale(k)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, N = Vc(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: x,
        offsetParent: k,
        strategy: f
    }) : x);
    return {
        top: (y.top - N.top + E.top) / P.y,
        bottom: (N.bottom - y.bottom + E.bottom) / P.y,
        left: (y.left - N.left + E.left) / P.x,
        right: (N.right - y.right + E.right) / P.x
    }
}
const Pk = function(e) {
    return e === void 0 && (e = {}), {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {
                placement: i,
                middlewareData: l,
                rects: s,
                initialPlacement: a,
                platform: f,
                elements: d
            } = t, {
                mainAxis: p = !0,
                crossAxis: g = !0,
                fallbackPlacements: v,
                fallbackStrategy: m = "bestFit",
                fallbackAxisSideDirection: E = "none",
                flipAlignment: S = !0,
                ...A
            } = jf(e, t);
            if ((n = l.arrow) != null && n.alignmentOffset) return {};
            const y = Uo(i),
                x = Uo(a) === a,
                k = await (f.isRTL == null ? void 0 : f.isRTL(d.floating)),
                P = v || (x || !S ? [Wc(a)] : NF(a));
            !v && E !== "none" && P.push(...LF(a, S, E, k));
            const N = [a, ...P],
                T = await Rk(t, A),
                F = [];
            let z = ((r = l.flip) == null ? void 0 : r.overflows) || [];
            if (p && F.push(T[y]), g) {
                const K = DF(i, s, k);
                F.push(T[K[0]], T[K[1]])
            }
            if (z = [...z, {
                    placement: i,
                    overflows: F
                }], !F.every(K => K <= 0)) {
                var q, Q;
                const K = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1,
                    j = N[K];
                if (j) return {
                    data: {
                        index: K,
                        overflows: z
                    },
                    reset: {
                        placement: j
                    }
                };
                let U = (Q = z.filter(J => J.overflows[0] <= 0).sort((J, oe) => J.overflows[1] - oe.overflows[1])[0]) == null ? void 0 : Q.placement;
                if (!U) switch (m) {
                    case "bestFit": {
                        var B;
                        const J = (B = z.map(oe => [oe.placement, oe.overflows.filter(le => le > 0).reduce((le, W) => le + W, 0)]).sort((oe, le) => oe[1] - le[1])[0]) == null ? void 0 : B[0];
                        J && (U = J);
                        break
                    }
                    case "initialPlacement":
                        U = a;
                        break
                }
                if (i !== U) return {
                    reset: {
                        placement: U
                    }
                }
            }
            return {}
        }
    }
};
async function GF(e, t) {
    const {
        placement: n,
        platform: r,
        elements: i
    } = e, l = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = Uo(n), a = Hf(n), f = Wf(n) === "y", d = ["left", "top"].includes(s) ? -1 : 1, p = l && f ? -1 : 1, g = jf(t, e);
    let {
        mainAxis: v,
        crossAxis: m,
        alignmentAxis: E
    } = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...g
    };
    return a && typeof E == "number" && (m = a === "end" ? E * -1 : E), f ? {
        x: m * p,
        y: v * d
    } : {
        x: v * d,
        y: m * p
    }
}
const Ak = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r
                } = t, i = await GF(t, e);
                return {
                    x: n + i.x,
                    y: r + i.y,
                    data: i
                }
            }
        }
    },
    Dk = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: i
                } = t, {
                    mainAxis: l = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: A => {
                            let {
                                x: y,
                                y: x
                            } = A;
                            return {
                                x: y,
                                y: x
                            }
                        }
                    },
                    ...f
                } = jf(e, t), d = {
                    x: n,
                    y: r
                }, p = await Rk(t, f), g = Wf(Uo(i)), v = Sk(g);
                let m = d[v],
                    E = d[g];
                if (l) {
                    const A = v === "y" ? "top" : "left",
                        y = v === "y" ? "bottom" : "right",
                        x = m + p[A],
                        k = m - p[y];
                    m = Yw(x, m, k)
                }
                if (s) {
                    const A = g === "y" ? "top" : "left",
                        y = g === "y" ? "bottom" : "right",
                        x = E + p[A],
                        k = E - p[y];
                    E = Yw(x, E, k)
                }
                const S = a.fn({
                    ...t,
                    [v]: m,
                    [g]: E
                });
                return {
                    ...S,
                    data: {
                        x: S.x - n,
                        y: S.y - r
                    }
                }
            }
        }
    };

function Nk(e) {
    const t = Hn(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const i = en(e),
        l = i ? e.offsetWidth : n,
        s = i ? e.offsetHeight : r,
        a = Hc(n) !== l || Hc(r) !== s;
    return a && (n = l, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function yv(e) {
    return mt(e) ? e : e.contextElement
}

function Fl(e) {
    const t = yv(e);
    if (!en(t)) return no(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: i,
            $: l
        } = Nk(t);
    let s = (l ? Hc(n.width) : n.width) / r,
        a = (l ? Hc(n.height) : n.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const KF = no(0);

function Mk(e) {
    const t = $n(e);
    return !gv() || !t.visualViewport ? KF : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function QF(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== $n(e) ? !1 : t
}

function Ho(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const i = e.getBoundingClientRect(),
        l = yv(e);
    let s = no(1);
    t && (r ? mt(r) && (s = Fl(r)) : s = Fl(e));
    const a = QF(l, n, r) ? Mk(l) : no(0);
    let f = (i.left + a.x) / s.x,
        d = (i.top + a.y) / s.y,
        p = i.width / s.x,
        g = i.height / s.y;
    if (l) {
        const v = $n(l),
            m = r && mt(r) ? $n(r) : r;
        let E = v.frameElement;
        for (; E && r && m !== v;) {
            const S = Fl(E),
                A = E.getBoundingClientRect(),
                y = Hn(E),
                x = A.left + (E.clientLeft + parseFloat(y.paddingLeft)) * S.x,
                k = A.top + (E.clientTop + parseFloat(y.paddingTop)) * S.y;
            f *= S.x, d *= S.y, p *= S.x, g *= S.y, f += x, d += k, E = $n(E).frameElement
        }
    }
    return Vc({
        width: p,
        height: g,
        x: f,
        y: d
    })
}

function YF(e) {
    let {
        rect: t,
        offsetParent: n,
        strategy: r
    } = e;
    const i = en(n),
        l = yi(n);
    if (n === l) return t;
    let s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        a = no(1);
    const f = no(0);
    if ((i || !i && r !== "fixed") && ((ro(n) !== "body" || Is(l)) && (s = Vf(n)), en(n))) {
        const d = Ho(n);
        a = Fl(n), f.x = d.x + n.clientLeft, f.y = d.y + n.clientTop
    }
    return {
        width: t.width * a.x,
        height: t.height * a.y,
        x: t.x * a.x - s.scrollLeft * a.x + f.x,
        y: t.y * a.y - s.scrollTop * a.y + f.y
    }
}

function XF(e) {
    return Array.from(e.getClientRects())
}

function Lk(e) {
    return Ho(yi(e)).left + Vf(e).scrollLeft
}

function ZF(e) {
    const t = yi(e),
        n = Vf(e),
        r = e.ownerDocument.body,
        i = Ao(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        l = Ao(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Lk(e);
    const a = -n.scrollTop;
    return Hn(r).direction === "rtl" && (s += Ao(t.clientWidth, r.clientWidth) - i), {
        width: i,
        height: l,
        x: s,
        y: a
    }
}

function JF(e, t) {
    const n = $n(e),
        r = yi(e),
        i = n.visualViewport;
    let l = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        f = 0;
    if (i) {
        l = i.width, s = i.height;
        const d = gv();
        (!d || d && t === "fixed") && (a = i.offsetLeft, f = i.offsetTop)
    }
    return {
        width: l,
        height: s,
        x: a,
        y: f
    }
}

function e6(e, t) {
    const n = Ho(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        i = n.left + e.clientLeft,
        l = en(e) ? Fl(e) : no(1),
        s = e.clientWidth * l.x,
        a = e.clientHeight * l.y,
        f = i * l.x,
        d = r * l.y;
    return {
        width: s,
        height: a,
        x: f,
        y: d
    }
}

function Zw(e, t, n) {
    let r;
    if (t === "viewport") r = JF(e, n);
    else if (t === "document") r = ZF(yi(e));
    else if (mt(t)) r = e6(t, n);
    else {
        const i = Mk(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    return Vc(r)
}

function Fk(e, t) {
    const n = jo(e);
    return n === t || !mt(n) || Rs(n) ? !1 : Hn(n).position === "fixed" || Fk(n, t)
}

function t6(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Yi(e, [], !1).filter(a => mt(a) && ro(a) !== "body"),
        i = null;
    const l = Hn(e).position === "fixed";
    let s = l ? jo(e) : e;
    for (; mt(s) && !Rs(s);) {
        const a = Hn(s),
            f = hv(s);
        !f && a.position === "fixed" && (i = null), (l ? !f && !i : !f && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Is(s) && !f && Fk(e, s)) ? r = r.filter(p => p !== s) : i = a, s = jo(s)
    }
    return t.set(e, r), r
}

function n6(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: i
    } = e;
    const s = [...n === "clippingAncestors" ? t6(t, this._c) : [].concat(n), r],
        a = s[0],
        f = s.reduce((d, p) => {
            const g = Zw(t, p, i);
            return d.top = Ao(g.top, d.top), d.right = jc(g.right, d.right), d.bottom = jc(g.bottom, d.bottom), d.left = Ao(g.left, d.left), d
        }, Zw(t, a, i));
    return {
        width: f.right - f.left,
        height: f.bottom - f.top,
        x: f.left,
        y: f.top
    }
}

function r6(e) {
    return Nk(e)
}

function i6(e, t, n) {
    const r = en(t),
        i = yi(t),
        l = n === "fixed",
        s = Ho(e, !0, l, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const f = no(0);
    if (r || !r && !l)
        if ((ro(t) !== "body" || Is(i)) && (a = Vf(t)), r) {
            const d = Ho(t, !0, l, t);
            f.x = d.x + t.clientLeft, f.y = d.y + t.clientTop
        } else i && (f.x = Lk(i));
    return {
        x: s.left + a.scrollLeft - f.x,
        y: s.top + a.scrollTop - f.y,
        width: s.width,
        height: s.height
    }
}

function Jw(e, t) {
    return !en(e) || Hn(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function zk(e, t) {
    const n = $n(e);
    if (!en(e)) return n;
    let r = Jw(e, t);
    for (; r && $F(r) && Hn(r).position === "static";) r = Jw(r, t);
    return r && (ro(r) === "html" || ro(r) === "body" && Hn(r).position === "static" && !hv(r)) ? n : r || BF(e) || n
}
const o6 = async function(e) {
    let {
        reference: t,
        floating: n,
        strategy: r
    } = e;
    const i = this.getOffsetParent || zk,
        l = this.getDimensions;
    return {
        reference: i6(t, await i(n), r),
        floating: {
            x: 0,
            y: 0,
            ...await l(n)
        }
    }
};

function l6(e) {
    return Hn(e).direction === "rtl"
}
const u6 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: YF,
    getDocumentElement: yi,
    getClippingRect: n6,
    getOffsetParent: zk,
    getElementRects: o6,
    getClientRects: XF,
    getDimensions: r6,
    getScale: Fl,
    isElement: mt,
    isRTL: l6
};

function s6(e, t) {
    let n = null,
        r;
    const i = yi(e);

    function l() {
        clearTimeout(r), n && n.disconnect(), n = null
    }

    function s(a, f) {
        a === void 0 && (a = !1), f === void 0 && (f = 1), l();
        const {
            left: d,
            top: p,
            width: g,
            height: v
        } = e.getBoundingClientRect();
        if (a || t(), !g || !v) return;
        const m = Ol(p),
            E = Ol(i.clientWidth - (d + g)),
            S = Ol(i.clientHeight - (p + v)),
            A = Ol(d),
            x = {
                rootMargin: -m + "px " + -E + "px " + -S + "px " + -A + "px",
                threshold: Ao(0, jc(1, f)) || 1
            };
        let k = !0;

        function P(N) {
            const T = N[0].intersectionRatio;
            if (T !== f) {
                if (!k) return s();
                T ? s(!1, T) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 100)
            }
            k = !1
        }
        try {
            n = new IntersectionObserver(P, {
                ...x,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(P, x)
        }
        n.observe(e)
    }
    return s(!0), l
}

function a6(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: i = !0,
        ancestorResize: l = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: f = !1
    } = r, d = yv(e), p = i || l ? [...d ? Yi(d) : [], ...Yi(t)] : [];
    p.forEach(y => {
        i && y.addEventListener("scroll", n, {
            passive: !0
        }), l && y.addEventListener("resize", n)
    });
    const g = d && a ? s6(d, n) : null;
    let v = -1,
        m = null;
    s && (m = new ResizeObserver(y => {
        let [x] = y;
        x && x.target === d && m && (m.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
            m && m.observe(t)
        })), n()
    }), d && !f && m.observe(d), m.observe(t));
    let E, S = f ? Ho(e) : null;
    f && A();

    function A() {
        const y = Ho(e);
        S && (y.x !== S.x || y.y !== S.y || y.width !== S.width || y.height !== S.height) && n(), S = y, E = requestAnimationFrame(A)
    }
    return n(), () => {
        p.forEach(y => {
            i && y.removeEventListener("scroll", n), l && y.removeEventListener("resize", n)
        }), g && g(), m && m.disconnect(), m = null, f && cancelAnimationFrame(E)
    }
}
const c6 = (e, t, n) => {
    const r = new Map,
        i = {
            platform: u6,
            ...n
        },
        l = {
            ...i.platform,
            _c: r
        };
    return qF(e, t, {
        ...i,
        platform: l
    })
};
var lc = typeof document < "u" ? R.useLayoutEffect : R.useEffect;

function Gc(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Gc(e[r], t[r])) return !1;
            return !0
        }
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; r-- !== 0;) {
            const l = i[r];
            if (!(l === "_owner" && e.$$typeof) && !Gc(e[l], t[l])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function $k(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function ex(e, t) {
    const n = $k(e);
    return Math.round(t * n) / n
}

function tx(e) {
    const t = R.useRef(e);
    return lc(() => {
        t.current = e
    }), t
}

function f6(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: i,
        elements: {
            reference: l,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: f,
        open: d
    } = e, [p, g] = R.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [v, m] = R.useState(r);
    Gc(v, r) || m(r);
    const [E, S] = R.useState(null), [A, y] = R.useState(null), x = R.useCallback(oe => {
        oe != T.current && (T.current = oe, S(oe))
    }, [S]), k = R.useCallback(oe => {
        oe !== F.current && (F.current = oe, y(oe))
    }, [y]), P = l || E, N = s || A, T = R.useRef(null), F = R.useRef(null), z = R.useRef(p), q = tx(f), Q = tx(i), B = R.useCallback(() => {
        if (!T.current || !F.current) return;
        const oe = {
            placement: t,
            strategy: n,
            middleware: v
        };
        Q.current && (oe.platform = Q.current), c6(T.current, F.current, oe).then(le => {
            const W = {
                ...le,
                isPositioned: !0
            };
            K.current && !Gc(z.current, W) && (z.current = W, tu.flushSync(() => {
                g(W)
            }))
        })
    }, [v, t, n, Q]);
    lc(() => {
        d === !1 && z.current.isPositioned && (z.current.isPositioned = !1, g(oe => ({
            ...oe,
            isPositioned: !1
        })))
    }, [d]);
    const K = R.useRef(!1);
    lc(() => (K.current = !0, () => {
        K.current = !1
    }), []), lc(() => {
        if (P && (T.current = P), N && (F.current = N), P && N) {
            if (q.current) return q.current(P, N, B);
            B()
        }
    }, [P, N, B, q]);
    const j = R.useMemo(() => ({
            reference: T,
            floating: F,
            setReference: x,
            setFloating: k
        }), [x, k]),
        U = R.useMemo(() => ({
            reference: P,
            floating: N
        }), [P, N]),
        J = R.useMemo(() => {
            const oe = {
                position: n,
                left: 0,
                top: 0
            };
            if (!U.floating) return oe;
            const le = ex(U.floating, p.x),
                W = ex(U.floating, p.y);
            return a ? {
                ...oe,
                transform: "translate(" + le + "px, " + W + "px)",
                ...$k(U.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: le,
                top: W
            }
        }, [n, a, U.floating, p.x, p.y]);
    return R.useMemo(() => ({
        ...p,
        update: B,
        refs: j,
        elements: U,
        floatingStyles: J
    }), [p, B, j, U, J])
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var d6 = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Rg = d6.join(","),
    Bk = typeof Element > "u",
    Es = Bk ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Kc = !Bk && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e?.ownerDocument
    },
    Qc = function e(t, n) {
        var r;
        n === void 0 && (n = !0);
        var i = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"),
            l = i === "" || i === "true",
            s = l || n && t && e(t.parentNode);
        return s
    },
    p6 = function(t) {
        var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
        return r === "" || r === "true"
    },
    h6 = function(t, n, r) {
        if (Qc(t)) return [];
        var i = Array.prototype.slice.apply(t.querySelectorAll(Rg));
        return n && Es.call(t, Rg) && i.unshift(t), i = i.filter(r), i
    },
    g6 = function e(t, n, r) {
        for (var i = [], l = Array.from(t); l.length;) {
            var s = l.shift();
            if (!Qc(s, !1))
                if (s.tagName === "SLOT") {
                    var a = s.assignedElements(),
                        f = a.length ? a : s.children,
                        d = e(f, !0, r);
                    r.flatten ? i.push.apply(i, d) : i.push({
                        scopeParent: s,
                        candidates: d
                    })
                } else {
                    var p = Es.call(s, Rg);
                    p && r.filter(s) && (n || !t.includes(s)) && i.push(s);
                    var g = s.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(s),
                        v = !Qc(g, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
                    if (g && v) {
                        var m = e(g === !0 ? s.children : g.children, !0, r);
                        r.flatten ? i.push.apply(i, m) : i.push({
                            scopeParent: s,
                            candidates: m
                        })
                    } else l.unshift.apply(l, s.children)
                }
        }
        return i
    },
    Uk = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    jk = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || p6(t)) && !Uk(t) ? 0 : t.tabIndex
    },
    m6 = function(t, n) {
        var r = jk(t);
        return r < 0 && n && !Uk(t) ? 0 : r
    },
    v6 = function(t, n) {
        return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
    },
    Hk = function(t) {
        return t.tagName === "INPUT"
    },
    y6 = function(t) {
        return Hk(t) && t.type === "hidden"
    },
    w6 = function(t) {
        var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
            return r.tagName === "SUMMARY"
        });
        return n
    },
    x6 = function(t, n) {
        for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r]
    },
    S6 = function(t) {
        if (!t.name) return !0;
        var n = t.form || Kc(t),
            r = function(a) {
                return n.querySelectorAll('input[type="radio"][name="' + a + '"]')
            },
            i;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") i = r(window.CSS.escape(t.name));
        else try {
            i = r(t.name)
        } catch (s) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1
        }
        var l = x6(i, t.form);
        return !l || l === t
    },
    E6 = function(t) {
        return Hk(t) && t.type === "radio"
    },
    C6 = function(t) {
        return E6(t) && !S6(t)
    },
    k6 = function(t) {
        var n, r = t && Kc(t),
            i = (n = r) === null || n === void 0 ? void 0 : n.host,
            l = !1;
        if (r && r !== t) {
            var s, a, f;
            for (l = !!((s = i) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(i) || t != null && (f = t.ownerDocument) !== null && f !== void 0 && f.contains(t)); !l && i;) {
                var d, p, g;
                r = Kc(i), i = (d = r) === null || d === void 0 ? void 0 : d.host, l = !!((p = i) !== null && p !== void 0 && (g = p.ownerDocument) !== null && g !== void 0 && g.contains(i))
            }
        }
        return l
    },
    nx = function(t) {
        var n = t.getBoundingClientRect(),
            r = n.width,
            i = n.height;
        return r === 0 && i === 0
    },
    b6 = function(t, n) {
        var r = n.displayCheck,
            i = n.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var l = Es.call(t, "details>summary:first-of-type"),
            s = l ? t.parentElement : t;
        if (Es.call(s, "details:not([open]) *")) return !0;
        if (!r || r === "full" || r === "legacy-full") {
            if (typeof i == "function") {
                for (var a = t; t;) {
                    var f = t.parentElement,
                        d = Kc(t);
                    if (f && !f.shadowRoot && i(f) === !0) return nx(t);
                    t.assignedSlot ? t = t.assignedSlot : !f && d !== t.ownerDocument ? t = d.host : t = f
                }
                t = a
            }
            if (k6(t)) return !t.getClientRects().length;
            if (r !== "legacy-full") return !0
        } else if (r === "non-zero-area") return nx(t);
        return !1
    },
    _6 = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                    for (var r = 0; r < n.children.length; r++) {
                        var i = n.children.item(r);
                        if (i.tagName === "LEGEND") return Es.call(n, "fieldset[disabled] *") ? !0 : !i.contains(t)
                    }
                    return !0
                }
                n = n.parentElement
            }
        return !1
    },
    O6 = function(t, n) {
        return !(n.disabled || Qc(n) || y6(n) || b6(n, t) || w6(n) || _6(n))
    },
    rx = function(t, n) {
        return !(C6(n) || jk(n) < 0 || !O6(t, n))
    },
    T6 = function(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(n) || n >= 0)
    },
    I6 = function e(t) {
        var n = [],
            r = [];
        return t.forEach(function(i, l) {
            var s = !!i.scopeParent,
                a = s ? i.scopeParent : i,
                f = m6(a, s),
                d = s ? e(i.candidates) : a;
            f === 0 ? s ? n.push.apply(n, d) : n.push(a) : r.push({
                documentOrder: l,
                tabIndex: f,
                item: i,
                isScope: s,
                content: d
            })
        }), r.sort(v6).reduce(function(i, l) {
            return l.isScope ? i.push.apply(i, l.content) : i.push(l.content), i
        }, []).concat(n)
    },
    wv = function(t, n) {
        n = n || {};
        var r;
        return n.getShadowRoot ? r = g6([t], n.includeContainer, {
            filter: rx.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: T6
        }) : r = h6(t, n.includeContainer, rx.bind(null, n)), I6(r)
    };

function xv(e) {
    return R.useMemo(() => e.every(t => t == null) ? null : t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        })
    }, e)
}
const Sv = "ArrowUp",
    qf = "ArrowDown",
    Yl = "ArrowLeft",
    Ps = "ArrowRight";

function Ua(e, t, n) {
    return Math.floor(e / t) !== n
}

function Zu(e, t) {
    return t < 0 || t >= e.current.length
}

function ih(e, t) {
    return Qt(e, {
        disabledIndices: t
    })
}

function ix(e, t) {
    return Qt(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Qt(e, t) {
    let {
        startingIndex: n = -1,
        decrement: r = !1,
        disabledIndices: i,
        amount: l = 1
    } = t === void 0 ? {} : t;
    const s = e.current;
    let a = n;
    do {
        var f, d;
        a = a + (r ? -l : l)
    } while (a >= 0 && a <= s.length - 1 && (i ? i.includes(a) : s[a] == null || (f = s[a]) != null && f.hasAttribute("disabled") || ((d = s[a]) == null ? void 0 : d.getAttribute("aria-disabled")) === "true"));
    return a
}

function R6(e, t) {
    let {
        event: n,
        orientation: r,
        loop: i,
        cols: l,
        disabledIndices: s,
        minIndex: a,
        maxIndex: f,
        prevIndex: d,
        stopEvent: p = !1
    } = t, g = d;
    if (n.key === Sv) {
        if (p && Bt(n), d === -1) g = f;
        else if (g = Qt(e, {
                startingIndex: g,
                amount: l,
                decrement: !0,
                disabledIndices: s
            }), i && (d - l < a || g < 0)) {
            const v = d % l,
                m = f % l,
                E = f - (m - v);
            m === v ? g = f : g = m > v ? E : E - l
        }
        Zu(e, g) && (g = d)
    }
    if (n.key === qf && (p && Bt(n), d === -1 ? g = a : (g = Qt(e, {
            startingIndex: d,
            amount: l,
            disabledIndices: s
        }), i && d + l > f && (g = Qt(e, {
            startingIndex: d % l - l,
            amount: l,
            disabledIndices: s
        }))), Zu(e, g) && (g = d)), r === "both") {
        const v = Ol(d / l);
        n.key === Ps && (p && Bt(n), d % l !== l - 1 ? (g = Qt(e, {
            startingIndex: d,
            disabledIndices: s
        }), i && Ua(g, l, v) && (g = Qt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        }))) : i && (g = Qt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        })), Ua(g, l, v) && (g = d)), n.key === Yl && (p && Bt(n), d % l !== 0 ? (g = Qt(e, {
            startingIndex: d,
            disabledIndices: s,
            decrement: !0
        }), i && Ua(g, l, v) && (g = Qt(e, {
            startingIndex: d + (l - d % l),
            decrement: !0,
            disabledIndices: s
        }))) : i && (g = Qt(e, {
            startingIndex: d + (l - d % l),
            decrement: !0,
            disabledIndices: s
        })), Ua(g, l, v) && (g = d));
        const m = Ol(f / l) === v;
        Zu(e, g) && (i && m ? g = n.key === Yl ? f : Qt(e, {
            startingIndex: d - d % l - 1,
            disabledIndices: s
        }) : g = d)
    }
    return g
}
let ox = 0;

function ii(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: n = !1,
        cancelPrevious: r = !0,
        sync: i = !1
    } = t;
    r && cancelAnimationFrame(ox);
    const l = () => e?.focus({
        preventScroll: n
    });
    i ? l() : ox = requestAnimationFrame(l)
}
var Qe = typeof document < "u" ? R.useLayoutEffect : R.useEffect;

function P6(e, t) {
    const n = e.compareDocumentPosition(t);
    return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
}

function A6(e, t) {
    if (e.size !== t.size) return !1;
    for (const [n, r] of e.entries())
        if (r !== t.get(n)) return !1;
    return !0
}
const Wk = R.createContext({
    register: () => {},
    unregister: () => {},
    map: new Map,
    elementsRef: {
        current: []
    }
});

function D6(e) {
    let {
        children: t,
        elementsRef: n,
        labelsRef: r
    } = e;
    const [i, l] = R.useState(() => new Map), s = R.useCallback(f => {
        l(d => new Map(d).set(f, null))
    }, []), a = R.useCallback(f => {
        l(d => {
            const p = new Map(d);
            return p.delete(f), p
        })
    }, []);
    return Qe(() => {
        const f = new Map(i);
        Array.from(f.keys()).sort(P6).forEach((p, g) => {
            f.set(p, g)
        }), A6(i, f) || l(f)
    }, [i]), R.createElement(Wk.Provider, {
        value: R.useMemo(() => ({
            register: s,
            unregister: a,
            map: i,
            elementsRef: n,
            labelsRef: r
        }), [s, a, i, n, r])
    }, t)
}

function Vk(e) {
    let {
        label: t
    } = e === void 0 ? {} : e;
    const [n, r] = R.useState(null), i = R.useRef(null), {
        register: l,
        unregister: s,
        map: a,
        elementsRef: f,
        labelsRef: d
    } = R.useContext(Wk), p = R.useCallback(g => {
        if (i.current = g, n !== null && (f.current[n] = g, d)) {
            var v;
            const m = t !== void 0;
            d.current[n] = m ? t : (v = g?.textContent) != null ? v : null
        }
    }, [n, f, d, t]);
    return Qe(() => {
        const g = i.current;
        if (g) return l(g), () => {
            s(g)
        }
    }, [l, s]), Qe(() => {
        const g = i.current ? a.get(i.current) : null;
        g != null && r(g)
    }, [a]), R.useMemo(() => ({
        ref: p,
        index: n ?? -1
    }), [n, p])
}

function Cs() {
    return Cs = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Cs.apply(this, arguments)
}
let oh = !1,
    N6 = 0;
const lx = () => "floating-ui-" + N6++;

function M6() {
    const [e, t] = R.useState(() => oh ? lx() : void 0);
    return Qe(() => {
        e == null && t(lx())
    }, []), R.useEffect(() => {
        oh || (oh = !0)
    }, []), e
}
const L6 = mS["useId".toString()],
    As = L6 || M6;

function qk() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(i => i(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(i => i !== n)) || [])
        }
    }
}
const Gk = R.createContext(null),
    Kk = R.createContext(null),
    qo = () => {
        var e;
        return ((e = R.useContext(Gk)) == null ? void 0 : e.id) || null
    },
    so = () => R.useContext(Kk);

function F6(e) {
    const t = As(),
        n = so(),
        r = qo(),
        i = e || r;
    return Qe(() => {
        const l = {
            id: t,
            parentId: i
        };
        return n?.addNode(l), () => {
            n?.removeNode(l)
        }
    }, [n, t, i]), t
}

function z6(e) {
    let {
        children: t,
        id: n
    } = e;
    const r = qo();
    return R.createElement(Gk.Provider, {
        value: R.useMemo(() => ({
            id: n,
            parentId: r
        }), [n, r])
    }, t)
}

function $6(e) {
    let {
        children: t
    } = e;
    const n = R.useRef([]),
        r = R.useCallback(s => {
            n.current = [...n.current, s]
        }, []),
        i = R.useCallback(s => {
            n.current = n.current.filter(a => a !== s)
        }, []),
        l = R.useState(() => qk())[0];
    return R.createElement(Kk.Provider, {
        value: R.useMemo(() => ({
            nodesRef: n,
            addNode: r,
            removeNode: i,
            events: l
        }), [n, r, i, l])
    }, t)
}

function Xl(e) {
    return "data-floating-ui-" + e
}

function wn(e) {
    const t = R.useRef(e);
    return Qe(() => {
        t.current = e
    }), t
}
const ux = Xl("safe-polygon");

function lh(e, t, n) {
    return n && !qc(n) ? 0 : typeof e == "number" ? e : e?.[t]
}

function B6(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        dataRef: i,
        events: l,
        elements: {
            domReference: s,
            floating: a
        },
        refs: f
    } = e, {
        enabled: d = !0,
        delay: p = 0,
        handleClose: g = null,
        mouseOnly: v = !1,
        restMs: m = 0,
        move: E = !0
    } = t, S = so(), A = qo(), y = wn(g), x = wn(p), k = R.useRef(), P = R.useRef(), N = R.useRef(), T = R.useRef(), F = R.useRef(!0), z = R.useRef(!1), q = R.useRef(() => {}), Q = R.useCallback(() => {
        var U;
        const J = (U = i.current.openEvent) == null ? void 0 : U.type;
        return J?.includes("mouse") && J !== "mousedown"
    }, [i]);
    R.useEffect(() => {
        if (!d) return;

        function U() {
            clearTimeout(P.current), clearTimeout(T.current), F.current = !0
        }
        return l.on("dismiss", U), () => {
            l.off("dismiss", U)
        }
    }, [d, l]), R.useEffect(() => {
        if (!d || !y.current || !n) return;

        function U(oe) {
            Q() && r(!1, oe)
        }
        const J = sn(a).documentElement;
        return J.addEventListener("mouseleave", U), () => {
            J.removeEventListener("mouseleave", U)
        }
    }, [a, n, r, d, y, i, Q]);
    const B = R.useCallback(function(U, J) {
            J === void 0 && (J = !0);
            const oe = lh(x.current, "close", k.current);
            oe && !N.current ? (clearTimeout(P.current), P.current = setTimeout(() => r(!1, U), oe)) : J && (clearTimeout(P.current), r(!1, U))
        }, [x, r]),
        K = R.useCallback(() => {
            q.current(), N.current = void 0
        }, []),
        j = R.useCallback(() => {
            if (z.current) {
                const U = sn(f.floating.current).body;
                U.style.pointerEvents = "", U.removeAttribute(ux), z.current = !1
            }
        }, [f]);
    return R.useEffect(() => {
        if (!d) return;

        function U() {
            return i.current.openEvent ? ["click", "mousedown"].includes(i.current.openEvent.type) : !1
        }

        function J(W) {
            if (clearTimeout(P.current), F.current = !1, v && !qc(k.current) || m > 0 && lh(x.current, "open") === 0) return;
            const ee = lh(x.current, "open", k.current);
            ee ? P.current = setTimeout(() => {
                r(!0, W)
            }, ee) : r(!0, W)
        }

        function oe(W) {
            if (U()) return;
            q.current();
            const ee = sn(a);
            if (clearTimeout(T.current), y.current) {
                n || clearTimeout(P.current), N.current = y.current({
                    ...e,
                    tree: S,
                    x: W.clientX,
                    y: W.clientY,
                    onClose() {
                        j(), K(), B(W)
                    }
                });
                const ne = N.current;
                ee.addEventListener("mousemove", ne), q.current = () => {
                    ee.removeEventListener("mousemove", ne)
                };
                return
            }(k.current === "touch" ? !At(a, W.relatedTarget) : !0) && B(W)
        }

        function le(W) {
            U() || y.current == null || y.current({
                ...e,
                tree: S,
                x: W.clientX,
                y: W.clientY,
                onClose() {
                    j(), K(), B(W)
                }
            })(W)
        }
        if (mt(s)) {
            const W = s;
            return n && W.addEventListener("mouseleave", le), a?.addEventListener("mouseleave", le), E && W.addEventListener("mousemove", J, {
                once: !0
            }), W.addEventListener("mouseenter", J), W.addEventListener("mouseleave", oe), () => {
                n && W.removeEventListener("mouseleave", le), a?.removeEventListener("mouseleave", le), E && W.removeEventListener("mousemove", J), W.removeEventListener("mouseenter", J), W.removeEventListener("mouseleave", oe)
            }
        }
    }, [s, a, d, e, v, m, E, B, K, j, r, n, S, x, y, i]), Qe(() => {
        var U;
        if (d && n && (U = y.current) != null && U.__options.blockPointerEvents && Q()) {
            const le = sn(a).body;
            if (le.setAttribute(ux, ""), le.style.pointerEvents = "none", z.current = !0, mt(s) && a) {
                var J, oe;
                const W = s,
                    ee = S == null || (J = S.nodesRef.current.find(_ => _.id === A)) == null || (oe = J.context) == null ? void 0 : oe.elements.floating;
                return ee && (ee.style.pointerEvents = ""), W.style.pointerEvents = "auto", a.style.pointerEvents = "auto", () => {
                    W.style.pointerEvents = "", a.style.pointerEvents = ""
                }
            }
        }
    }, [d, n, A, a, s, S, y, i, Q]), Qe(() => {
        n || (k.current = void 0, K(), j())
    }, [n, K, j]), R.useEffect(() => () => {
        K(), clearTimeout(P.current), clearTimeout(T.current), j()
    }, [d, s, K, j]), R.useMemo(() => {
        if (!d) return {};

        function U(J) {
            k.current = J.pointerType
        }
        return {
            reference: {
                onPointerDown: U,
                onPointerEnter: U,
                onMouseMove(J) {
                    n || m === 0 || (clearTimeout(T.current), T.current = setTimeout(() => {
                        F.current || r(!0, J.nativeEvent)
                    }, m))
                }
            },
            floating: {
                onMouseEnter() {
                    clearTimeout(P.current)
                },
                onMouseLeave(J) {
                    l.emit("dismiss", {
                        type: "mouseLeave",
                        data: {
                            returnFocus: !1
                        }
                    }), B(J.nativeEvent, !1)
                }
            }
        }
    }, [l, d, m, n, r, B])
}

function U6(e, t) {
    var n;
    let r = [],
        i = (n = e.find(l => l.id === t)) == null ? void 0 : n.parentId;
    for (; i;) {
        const l = e.find(s => s.id === i);
        i = l?.parentId, l && (r = r.concat(l))
    }
    return r
}

function Do(e, t) {
    let n = e.filter(i => {
            var l;
            return i.parentId === t && ((l = i.context) == null ? void 0 : l.open)
        }),
        r = n;
    for (; r.length;) r = e.filter(i => {
        var l;
        return (l = r) == null ? void 0 : l.some(s => {
            var a;
            return i.parentId === s.id && ((a = i.context) == null ? void 0 : a.open)
        })
    }), n = n.concat(r);
    return n
}

function j6(e, t) {
    let n, r = -1;

    function i(l, s) {
        s > r && (n = l, r = s), Do(e, l).forEach(f => {
            i(f.id, s + 1)
        })
    }
    return i(t, 0), e.find(l => l.id === n)
}
let dl = new WeakMap,
    ja = new WeakSet,
    Ha = {},
    uh = 0;
const H6 = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
    Qk = e => e && (e.host || Qk(e.parentNode)),
    W6 = (e, t) => t.map(n => {
        if (e.contains(n)) return n;
        const r = Qk(n);
        return e.contains(r) ? r : null
    }).filter(n => n != null);

function V6(e, t, n, r) {
    const i = "data-floating-ui-inert",
        l = r ? "inert" : n ? "aria-hidden" : null,
        s = W6(t, e),
        a = new Set,
        f = new Set(s),
        d = [];
    Ha[i] || (Ha[i] = new WeakMap);
    const p = Ha[i];
    s.forEach(g), v(t), a.clear();

    function g(m) {
        !m || a.has(m) || (a.add(m), m.parentNode && g(m.parentNode))
    }

    function v(m) {
        !m || f.has(m) || Array.prototype.forEach.call(m.children, E => {
            if (a.has(E)) v(E);
            else {
                const S = l ? E.getAttribute(l) : null,
                    A = S !== null && S !== "false",
                    y = (dl.get(E) || 0) + 1,
                    x = (p.get(E) || 0) + 1;
                dl.set(E, y), p.set(E, x), d.push(E), y === 1 && A && ja.add(E), x === 1 && E.setAttribute(i, ""), !A && l && E.setAttribute(l, "true")
            }
        })
    }
    return uh++, () => {
        d.forEach(m => {
            const E = (dl.get(m) || 0) - 1,
                S = (p.get(m) || 0) - 1;
            dl.set(m, E), p.set(m, S), E || (!ja.has(m) && l && m.removeAttribute(l), ja.delete(m)), S || m.removeAttribute(i)
        }), uh--, uh || (dl = new WeakMap, dl = new WeakMap, ja = new WeakSet, Ha = {})
    }
}

function sx(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = sn(e[0]).body;
    return V6(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
}
const Ev = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function Yk(e, t) {
    const n = wv(e, Ev());
    t === "prev" && n.reverse();
    const r = n.indexOf(Li(sn(e)));
    return n.slice(r + 1)[0]
}

function Xk() {
    return Yk(document.body, "next")
}

function Zk() {
    return Yk(document.body, "prev")
}

function Ju(e, t) {
    const n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !At(n, r)
}

function q6(e) {
    wv(e, Ev()).forEach(n => {
        n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1")
    })
}

function G6(e) {
    e.querySelectorAll("[data-tabindex]").forEach(n => {
        const r = n.dataset.tabindex;
        delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex")
    })
}
const Cv = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
};
let K6;

function ax(e) {
    e.key === "Tab" && (e.target, clearTimeout(K6))
}
const Yc = R.forwardRef(function(t, n) {
        const [r, i] = R.useState();
        Qe(() => (Tk() && i("button"), document.addEventListener("keydown", ax), () => {
            document.removeEventListener("keydown", ax)
        }), []);
        const l = {
            ref: n,
            tabIndex: 0,
            role: r,
            "aria-hidden": r ? void 0 : !0,
            [Xl("focus-guard")]: "",
            style: Cv
        };
        return R.createElement("span", Cs({}, t, l))
    }),
    Jk = R.createContext(null);

function Q6(e) {
    let {
        id: t,
        root: n
    } = e === void 0 ? {} : e;
    const [r, i] = R.useState(null), l = As(), s = tb(), a = R.useMemo(() => ({
        id: t,
        root: n,
        portalContext: s,
        uniqueId: l
    }), [t, n, s, l]), f = R.useRef();
    return Qe(() => () => {
        r?.remove()
    }, [r, a]), Qe(() => {
        if (f.current === a) return;
        f.current = a;
        const {
            id: d,
            root: p,
            portalContext: g,
            uniqueId: v
        } = a, m = d ? document.getElementById(d) : null, E = Xl("portal");
        if (m) {
            const S = document.createElement("div");
            S.id = v, S.setAttribute(E, ""), m.appendChild(S), i(S)
        } else {
            let S = p || g?.portalNode;
            S && !mt(S) && (S = S.current), S = S || document.body;
            let A = null;
            d && (A = document.createElement("div"), A.id = d, S.appendChild(A));
            const y = document.createElement("div");
            y.id = v, y.setAttribute(E, ""), S = A || S, S.appendChild(y), i(y)
        }
    }, [a]), r
}

function eb(e) {
    let {
        children: t,
        id: n,
        root: r = null,
        preserveTabOrder: i = !0
    } = e;
    const l = Q6({
            id: n,
            root: r
        }),
        [s, a] = R.useState(null),
        f = R.useRef(null),
        d = R.useRef(null),
        p = R.useRef(null),
        g = R.useRef(null),
        v = !!s && !s.modal && s.open && i && !!(r || l);
    return R.useEffect(() => {
        if (!l || !i || s != null && s.modal) return;

        function m(E) {
            l && Ju(E) && (E.type === "focusin" ? G6 : q6)(l)
        }
        return l.addEventListener("focusin", m, !0), l.addEventListener("focusout", m, !0), () => {
            l.removeEventListener("focusin", m, !0), l.removeEventListener("focusout", m, !0)
        }
    }, [l, i, s?.modal]), R.createElement(Jk.Provider, {
        value: R.useMemo(() => ({
            preserveTabOrder: i,
            beforeOutsideRef: f,
            afterOutsideRef: d,
            beforeInsideRef: p,
            afterInsideRef: g,
            portalNode: l,
            setFocusManagerState: a
        }), [i, l])
    }, v && l && R.createElement(Yc, {
        "data-type": "outside",
        ref: f,
        onFocus: m => {
            if (Ju(m, l)) {
                var E;
                (E = p.current) == null || E.focus()
            } else {
                const S = Zk() || s?.refs.domReference.current;
                S?.focus()
            }
        }
    }), v && l && R.createElement("span", {
        "aria-owns": l.id,
        style: Cv
    }), l && tu.createPortal(t, l), v && l && R.createElement(Yc, {
        "data-type": "outside",
        ref: d,
        onFocus: m => {
            if (Ju(m, l)) {
                var E;
                (E = g.current) == null || E.focus()
            } else {
                const S = Xk() || s?.refs.domReference.current;
                S?.focus(), s?.closeOnFocusOut && s?.onOpenChange(!1, m.nativeEvent)
            }
        }
    }))
}
const tb = () => R.useContext(Jk),
    Y6 = R.forwardRef(function(t, n) {
        return R.createElement("button", Cs({}, t, {
            type: "button",
            ref: n,
            tabIndex: -1,
            style: Cv
        }))
    });

function X6(e) {
    const {
        context: t,
        children: n,
        disabled: r = !1,
        order: i = ["content"],
        guards: l = !0,
        initialFocus: s = 0,
        returnFocus: a = !0,
        modal: f = !0,
        visuallyHiddenDismiss: d = !1,
        closeOnFocusOut: p = !0
    } = e, {
        open: g,
        refs: v,
        nodeId: m,
        onOpenChange: E,
        events: S,
        dataRef: A,
        elements: {
            domReference: y,
            floating: x
        }
    } = t, k = H6() ? l : !0, P = wn(i), N = wn(s), T = wn(a), F = so(), z = tb(), q = typeof s == "number" && s < 0, Q = R.useRef(null), B = R.useRef(null), K = R.useRef(!1), j = R.useRef(null), U = R.useRef(!1), J = z != null, oe = y && y.getAttribute("role") === "combobox" && Ik(y) && q, le = R.useCallback(function(ne) {
        return ne === void 0 && (ne = x), ne ? wv(ne, Ev()) : []
    }, [x]), W = R.useCallback(ne => {
        const ae = le(ne);
        return P.current.map(O => y && O === "reference" ? y : x && O === "floating" ? x : ae).filter(Boolean).flat()
    }, [y, x, P, le]);
    R.useEffect(() => {
        if (r || !f) return;

        function ne(O) {
            if (O.key === "Tab") {
                At(x, Li(sn(x))) && le().length === 0 && !oe && Bt(O);
                const de = W(),
                    Pe = vv(O);
                P.current[0] === "reference" && Pe === y && (Bt(O), O.shiftKey ? ii(de[de.length - 1]) : ii(de[1])), P.current[1] === "floating" && Pe === x && O.shiftKey && (Bt(O), ii(de[0]))
            }
        }
        const ae = sn(x);
        return ae.addEventListener("keydown", ne), () => {
            ae.removeEventListener("keydown", ne)
        }
    }, [r, y, x, f, P, v, oe, le, W]), R.useEffect(() => {
        if (r || !p) return;

        function ne() {
            U.current = !0, setTimeout(() => {
                U.current = !1
            })
        }

        function ae(O) {
            const de = O.relatedTarget;
            queueMicrotask(() => {
                const Pe = !(At(y, de) || At(x, de) || At(de, x) || At(z?.portalNode, de) || de != null && de.hasAttribute(Xl("focus-guard")) || F && (Do(F.nodesRef.current, m).find(me => {
                    var De, xe;
                    return At((De = me.context) == null ? void 0 : De.elements.floating, de) || At((xe = me.context) == null ? void 0 : xe.elements.domReference, de)
                }) || U6(F.nodesRef.current, m).find(me => {
                    var De, xe;
                    return ((De = me.context) == null ? void 0 : De.elements.floating) === de || ((xe = me.context) == null ? void 0 : xe.elements.domReference) === de
                })));
                de && Pe && !U.current && de !== j.current && (K.current = !0, E(!1, O))
            })
        }
        if (x && en(y)) return y.addEventListener("focusout", ae), y.addEventListener("pointerdown", ne), !f && x.addEventListener("focusout", ae), () => {
            y.removeEventListener("focusout", ae), y.removeEventListener("pointerdown", ne), !f && x.removeEventListener("focusout", ae)
        }
    }, [r, y, x, f, m, F, z, E, p]), R.useEffect(() => {
        var ne;
        if (r) return;
        const ae = Array.from((z == null || (ne = z.portalNode) == null ? void 0 : ne.querySelectorAll("[" + Xl("portal") + "]")) || []);
        if (x) {
            const O = [x, ...ae, Q.current, B.current, P.current.includes("reference") || oe ? y : null].filter(Pe => Pe != null),
                de = f ? sx(O, k, !k) : sx(O);
            return () => {
                de()
            }
        }
    }, [r, y, x, f, P, z, oe, k]), Qe(() => {
        if (r || !x) return;
        const ne = sn(x),
            ae = Li(ne);
        queueMicrotask(() => {
            const O = W(x),
                de = N.current,
                Pe = (typeof de == "number" ? O[de] : de.current) || x,
                me = At(x, ae);
            !q && !me && g && ii(Pe, {
                preventScroll: Pe === x
            })
        })
    }, [r, g, x, q, W, N]), Qe(() => {
        if (r || !x) return;
        let ne = !1;
        const ae = sn(x),
            O = Li(ae),
            de = A.current;
        j.current = O;

        function Pe(me) {
            if (me.type === "escapeKey" && v.domReference.current && (j.current = v.domReference.current), ["referencePress", "escapeKey"].includes(me.type)) return;
            const De = me.data.returnFocus;
            typeof De == "object" ? (K.current = !1, ne = De.preventScroll) : K.current = !De
        }
        return S.on("dismiss", Pe), () => {
            S.off("dismiss", Pe);
            const me = Li(ae);
            (At(x, me) || F && Do(F.nodesRef.current, m).some(xe => {
                var Fe;
                return At((Fe = xe.context) == null ? void 0 : Fe.elements.floating, me)
            }) || de.openEvent && ["click", "mousedown"].includes(de.openEvent.type)) && v.domReference.current && (j.current = v.domReference.current), T.current && en(j.current) && !K.current && ii(j.current, {
                cancelPrevious: !1,
                preventScroll: ne
            })
        }
    }, [r, x, T, A, v, S, F, m]), Qe(() => {
        if (!(r || !z)) return z.setFocusManagerState({
            modal: f,
            closeOnFocusOut: p,
            open: g,
            onOpenChange: E,
            refs: v
        }), () => {
            z.setFocusManagerState(null)
        }
    }, [r, z, f, g, E, v, p]), Qe(() => {
        if (!r && x && typeof MutationObserver == "function" && !q) {
            const ne = () => {
                const O = x.getAttribute("tabindex");
                P.current.includes("floating") || Li(sn(x)) !== v.domReference.current && le().length === 0 ? O !== "0" && x.setAttribute("tabindex", "0") : O !== "-1" && x.setAttribute("tabindex", "-1")
            };
            ne();
            const ae = new MutationObserver(ne);
            return ae.observe(x, {
                childList: !0,
                subtree: !0,
                attributes: !0
            }), () => {
                ae.disconnect()
            }
        }
    }, [r, x, v, P, le, q]);

    function ee(ne) {
        return r || !d || !f ? null : R.createElement(Y6, {
            ref: ne === "start" ? Q : B,
            onClick: ae => E(!1, ae.nativeEvent)
        }, typeof d == "string" ? d : "Dismiss")
    }
    const _ = !r && k && !oe && (J || f);
    return R.createElement(R.Fragment, null, _ && R.createElement(Yc, {
        "data-type": "inside",
        ref: z?.beforeInsideRef,
        onFocus: ne => {
            if (f) {
                const O = W();
                ii(i[0] === "reference" ? O[0] : O[O.length - 1])
            } else if (z != null && z.preserveTabOrder && z.portalNode)
                if (K.current = !1, Ju(ne, z.portalNode)) {
                    const O = Xk() || y;
                    O?.focus()
                } else {
                    var ae;
                    (ae = z.beforeOutsideRef.current) == null || ae.focus()
                }
        }
    }), !oe && ee("start"), n, ee("end"), _ && R.createElement(Yc, {
        "data-type": "inside",
        ref: z?.afterInsideRef,
        onFocus: ne => {
            if (f) ii(W()[0]);
            else if (z != null && z.preserveTabOrder && z.portalNode)
                if (p && (K.current = !0), Ju(ne, z.portalNode)) {
                    const O = Zk() || y;
                    O?.focus()
                } else {
                    var ae;
                    (ae = z.afterOutsideRef.current) == null || ae.focus()
                }
        }
    }))
}
const sh = new Set,
    Z6 = R.forwardRef(function(t, n) {
        let {
            lockScroll: r = !1,
            ...i
        } = t;
        const l = As();
        return Qe(() => {
            if (!r) return;
            sh.add(l);
            const s = /iP(hone|ad|od)|iOS/.test(mv()),
                a = document.body.style,
                d = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
                p = window.innerWidth - document.documentElement.clientWidth,
                g = a.left ? parseFloat(a.left) : window.pageXOffset,
                v = a.top ? parseFloat(a.top) : window.pageYOffset;
            if (a.overflow = "hidden", p && (a[d] = p + "px"), s) {
                var m, E;
                const S = ((m = window.visualViewport) == null ? void 0 : m.offsetLeft) || 0,
                    A = ((E = window.visualViewport) == null ? void 0 : E.offsetTop) || 0;
                Object.assign(a, {
                    position: "fixed",
                    top: -(v - Math.floor(A)) + "px",
                    left: -(g - Math.floor(S)) + "px",
                    right: "0"
                })
            }
            return () => {
                sh.delete(l), sh.size === 0 && (Object.assign(a, {
                    overflow: "",
                    [d]: ""
                }), s && (Object.assign(a, {
                    position: "",
                    top: "",
                    left: "",
                    right: ""
                }), window.scrollTo(g, v)))
            }
        }, [l, r]), R.createElement("div", Cs({
            ref: n
        }, i, {
            style: {
                position: "fixed",
                overflow: "auto",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ...i.style
            }
        }))
    });

function cx(e) {
    return en(e.target) && e.target.tagName === "BUTTON"
}

function fx(e) {
    return Ik(e)
}

function J6(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        dataRef: i,
        elements: {
            domReference: l
        }
    } = e, {
        enabled: s = !0,
        event: a = "click",
        toggle: f = !0,
        ignoreMouse: d = !1,
        keyboardHandlers: p = !0
    } = t, g = R.useRef(), v = R.useRef(!1);
    return R.useMemo(() => s ? {
        reference: {
            onPointerDown(m) {
                g.current = m.pointerType
            },
            onMouseDown(m) {
                m.button === 0 && (qc(g.current, !0) && d || a !== "click" && (n && f && (!i.current.openEvent || i.current.openEvent.type === "mousedown") ? r(!1, m.nativeEvent) : (m.preventDefault(), r(!0, m.nativeEvent))))
            },
            onClick(m) {
                if (a === "mousedown" && g.current) {
                    g.current = void 0;
                    return
                }
                qc(g.current, !0) && d || (n && f && (!i.current.openEvent || i.current.openEvent.type === "click") ? r(!1, m.nativeEvent) : r(!0, m.nativeEvent))
            },
            onKeyDown(m) {
                g.current = void 0, !(m.defaultPrevented || !p || cx(m)) && (m.key === " " && !fx(l) && (m.preventDefault(), v.current = !0), m.key === "Enter" && r(!(n && f), m.nativeEvent))
            },
            onKeyUp(m) {
                m.defaultPrevented || !p || cx(m) || fx(l) || m.key === " " && v.current && (v.current = !1, r(!(n && f), m.nativeEvent))
            }
        }
    } : {}, [s, i, a, d, p, l, f, n, r])
}
const e5 = mS["useInsertionEffect".toString()],
    t5 = e5 || (e => e());

function Xi(e) {
    const t = R.useRef(() => {});
    return t5(() => {
        t.current = e
    }), R.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
const n5 = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    r5 = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    i5 = e => {
        var t, n;
        return {
            escapeKeyBubbles: typeof e == "boolean" ? e : (t = e?.escapeKey) != null ? t : !1,
            outsidePressBubbles: typeof e == "boolean" ? e : (n = e?.outsidePress) != null ? n : !0
        }
    };

function o5(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        events: i,
        nodeId: l,
        elements: {
            reference: s,
            domReference: a,
            floating: f
        },
        dataRef: d
    } = e, {
        enabled: p = !0,
        escapeKey: g = !0,
        outsidePress: v = !0,
        outsidePressEvent: m = "pointerdown",
        referencePress: E = !1,
        referencePressEvent: S = "pointerdown",
        ancestorScroll: A = !1,
        bubbles: y
    } = t, x = so(), k = qo() != null, P = Xi(typeof v == "function" ? v : () => !1), N = typeof v == "function" ? P : v, T = R.useRef(!1), {
        escapeKeyBubbles: F,
        outsidePressBubbles: z
    } = i5(y), q = Xi(B => {
        if (!n || !p || !g || B.key !== "Escape") return;
        const K = x ? Do(x.nodesRef.current, l) : [];
        if (!F && (B.stopPropagation(), K.length > 0)) {
            let j = !0;
            if (K.forEach(U => {
                    var J;
                    if ((J = U.context) != null && J.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                        j = !1;
                        return
                    }
                }), !j) return
        }
        i.emit("dismiss", {
            type: "escapeKey",
            data: {
                returnFocus: {
                    preventScroll: !1
                }
            }
        }), r(!1, HF(B) ? B.nativeEvent : B)
    }), Q = Xi(B => {
        const K = T.current;
        if (T.current = !1, K || typeof N == "function" && !N(B)) return;
        const j = vv(B),
            U = "[" + Xl("inert") + "]",
            J = sn(f).querySelectorAll(U);
        let oe = mt(j) ? j : null;
        for (; oe && !Rs(oe);) {
            const ee = jo(oe);
            if (ee === sn(f).body || !mt(ee)) break;
            oe = ee
        }
        if (J.length && mt(j) && !WF(j) && !At(j, f) && Array.from(J).every(ee => !At(oe, ee))) return;
        if (en(j) && f) {
            const ee = j.clientWidth > 0 && j.scrollWidth > j.clientWidth,
                _ = j.clientHeight > 0 && j.scrollHeight > j.clientHeight;
            let ne = _ && B.offsetX > j.clientWidth;
            if (_ && Hn(j).direction === "rtl" && (ne = B.offsetX <= j.offsetWidth - j.clientWidth), ne || ee && B.offsetY > j.clientHeight) return
        }
        const le = x && Do(x.nodesRef.current, l).some(ee => {
            var _;
            return rh(B, (_ = ee.context) == null ? void 0 : _.elements.floating)
        });
        if (rh(B, f) || rh(B, a) || le) return;
        const W = x ? Do(x.nodesRef.current, l) : [];
        if (W.length > 0) {
            let ee = !0;
            if (W.forEach(_ => {
                    var ne;
                    if ((ne = _.context) != null && ne.open && !_.context.dataRef.current.__outsidePressBubbles) {
                        ee = !1;
                        return
                    }
                }), !ee) return
        }
        i.emit("dismiss", {
            type: "outsidePress",
            data: {
                returnFocus: k ? {
                    preventScroll: !0
                } : _k(B) || Ok(B)
            }
        }), r(!1, B)
    });
    return R.useEffect(() => {
        if (!n || !p) return;
        d.current.__escapeKeyBubbles = F, d.current.__outsidePressBubbles = z;

        function B(U) {
            r(!1, U)
        }
        const K = sn(f);
        g && K.addEventListener("keydown", q), N && K.addEventListener(m, Q);
        let j = [];
        return A && (mt(a) && (j = Yi(a)), mt(f) && (j = j.concat(Yi(f))), !mt(s) && s && s.contextElement && (j = j.concat(Yi(s.contextElement)))), j = j.filter(U => {
            var J;
            return U !== ((J = K.defaultView) == null ? void 0 : J.visualViewport)
        }), j.forEach(U => {
            U.addEventListener("scroll", B, {
                passive: !0
            })
        }), () => {
            g && K.removeEventListener("keydown", q), N && K.removeEventListener(m, Q), j.forEach(U => {
                U.removeEventListener("scroll", B)
            })
        }
    }, [d, f, a, s, g, N, m, n, r, A, p, F, z, q, Q]), R.useEffect(() => {
        T.current = !1
    }, [N, m]), R.useMemo(() => p ? {
        reference: {
            onKeyDown: q,
            [n5[S]]: B => {
                E && (i.emit("dismiss", {
                    type: "referencePress",
                    data: {
                        returnFocus: !1
                    }
                }), r(!1, B.nativeEvent))
            }
        },
        floating: {
            onKeyDown: q,
            [r5[m]]: () => {
                T.current = !0
            }
        }
    } : {}, [p, i, E, m, S, r, q])
}

function nb(e) {
    var t;
    e === void 0 && (e = {});
    const {
        open: n = !1,
        onOpenChange: r,
        nodeId: i
    } = e, [l, s] = R.useState(null), a = ((t = e.elements) == null ? void 0 : t.reference) || l, f = f6(e), d = so(), p = Xi((P, N) => {
        P && (v.current.openEvent = N), r?.(P, N)
    }), g = R.useRef(null), v = R.useRef({}), m = R.useState(() => qk())[0], E = As(), S = R.useCallback(P => {
        const N = mt(P) ? {
            getBoundingClientRect: () => P.getBoundingClientRect(),
            contextElement: P
        } : P;
        f.refs.setReference(N)
    }, [f.refs]), A = R.useCallback(P => {
        (mt(P) || P === null) && (g.current = P, s(P)), (mt(f.refs.reference.current) || f.refs.reference.current === null || P !== null && !mt(P)) && f.refs.setReference(P)
    }, [f.refs]), y = R.useMemo(() => ({
        ...f.refs,
        setReference: A,
        setPositionReference: S,
        domReference: g
    }), [f.refs, A, S]), x = R.useMemo(() => ({
        ...f.elements,
        domReference: a
    }), [f.elements, a]), k = R.useMemo(() => ({
        ...f,
        refs: y,
        elements: x,
        dataRef: v,
        nodeId: i,
        floatingId: E,
        events: m,
        open: n,
        onOpenChange: p
    }), [f, i, E, m, n, p, y, x]);
    return Qe(() => {
        const P = d?.nodesRef.current.find(N => N.id === i);
        P && (P.context = k)
    }), R.useMemo(() => ({
        ...f,
        context: k,
        refs: y,
        elements: x
    }), [f, y, x, k])
}

function ah(e, t, n) {
    const r = new Map;
    return {
        ...n === "floating" && {
            tabIndex: -1
        },
        ...e,
        ...t.map(i => i ? i[n] : null).concat(e).reduce((i, l) => (l && Object.entries(l).forEach(s => {
            let [a, f] = s;
            if (a.indexOf("on") === 0) {
                if (r.has(a) || r.set(a, []), typeof f == "function") {
                    var d;
                    (d = r.get(a)) == null || d.push(f), i[a] = function() {
                        for (var p, g = arguments.length, v = new Array(g), m = 0; m < g; m++) v[m] = arguments[m];
                        return (p = r.get(a)) == null ? void 0 : p.map(E => E(...v)).find(E => E !== void 0)
                    }
                }
            } else i[a] = f
        }), i), {})
    }
}

function l5(e) {
    e === void 0 && (e = []);
    const t = e,
        n = R.useCallback(l => ah(l, e, "reference"), t),
        r = R.useCallback(l => ah(l, e, "floating"), t),
        i = R.useCallback(l => ah(l, e, "item"), e.map(l => l?.item));
    return R.useMemo(() => ({
        getReferenceProps: n,
        getFloatingProps: r,
        getItemProps: i
    }), [n, r, i])
}
let dx = !1;

function Gf(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n
    }
}

function px(e, t) {
    return Gf(t, e === Sv || e === qf, e === Yl || e === Ps)
}

function ch(e, t, n) {
    return Gf(t, e === qf, n ? e === Yl : e === Ps) || e === "Enter" || e == " " || e === ""
}

function u5(e, t, n) {
    return Gf(t, n ? e === Yl : e === Ps, e === qf)
}

function hx(e, t, n) {
    return Gf(t, n ? e === Ps : e === Yl, e === Sv)
}

function s5(e, t) {
    const {
        open: n,
        onOpenChange: r,
        refs: i,
        elements: {
            domReference: l,
            floating: s
        }
    } = e, {
        listRef: a,
        activeIndex: f,
        onNavigate: d = () => {},
        enabled: p = !0,
        selectedIndex: g = null,
        allowEscape: v = !1,
        loop: m = !1,
        nested: E = !1,
        rtl: S = !1,
        virtual: A = !1,
        focusItemOnOpen: y = "auto",
        focusItemOnHover: x = !0,
        openOnArrowKeyDown: k = !0,
        disabledIndices: P = void 0,
        orientation: N = "vertical",
        cols: T = 1,
        scrollItemIntoView: F = !0,
        virtualItemRef: z
    } = t, q = qo(), Q = so(), B = Xi(d), K = R.useRef(y), j = R.useRef(g ?? -1), U = R.useRef(null), J = R.useRef(!0), oe = R.useRef(B), le = R.useRef(!!s), W = R.useRef(!1), ee = R.useRef(!1), _ = wn(P), ne = wn(n), ae = wn(F), [O, de] = R.useState(), [Pe, me] = R.useState(), De = Xi(function(Ie, Ue, ze) {
        ze === void 0 && (ze = !1);
        const Ge = Ie.current[Ue.current];
        Ge && (A ? (de(Ge.id), Q?.events.emit("virtualfocus", Ge), z && (z.current = Ge)) : ii(Ge, {
            preventScroll: !0,
            sync: jF() && Tk() ? dx || W.current : !1
        }), requestAnimationFrame(() => {
            const wt = ae.current;
            wt && Ge && (ze || !J.current) && (Ge.scrollIntoView == null || Ge.scrollIntoView(typeof wt == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : wt))
        }))
    });
    Qe(() => {
        document.createElement("div").focus({
            get preventScroll() {
                return dx = !0, !1
            }
        })
    }, []), Qe(() => {
        p && (n && s ? K.current && g != null && (ee.current = !0, B(g)) : le.current && (j.current = -1, oe.current(null)))
    }, [p, n, s, g, B]), Qe(() => {
        if (p && n && s)
            if (f == null) {
                if (W.current = !1, g != null) return;
                if (le.current && (j.current = -1, De(a, j)), !le.current && K.current && (U.current != null || K.current === !0 && U.current == null)) {
                    let Ie = 0;
                    const Ue = () => {
                        a.current[0] == null ? (Ie < 2 && (Ie ? requestAnimationFrame : queueMicrotask)(Ue), Ie++) : (j.current = U.current == null || ch(U.current, N, S) || E ? ih(a, _.current) : ix(a, _.current), U.current = null, B(j.current))
                    };
                    Ue()
                }
            } else Zu(a, f) || (j.current = f, De(a, j, ee.current), ee.current = !1)
    }, [p, n, s, f, g, E, a, N, S, B, De, _]), Qe(() => {
        var Ie, Ue;
        if (!p || s || !Q || A || !le.current) return;
        const ze = Q.nodesRef.current,
            Ge = (Ie = ze.find(he => he.id === q)) == null || (Ue = Ie.context) == null ? void 0 : Ue.elements.floating,
            wt = Li(sn(s)),
            Gn = ze.some(he => he.context && At(he.context.elements.floating, wt));
        Ge && !Gn && J.current && Ge.focus({
            preventScroll: !0
        })
    }, [p, s, Q, q, A]), Qe(() => {
        if (!p || !Q || !A || q) return;

        function Ie(Ue) {
            me(Ue.id), z && (z.current = Ue)
        }
        return Q.events.on("virtualfocus", Ie), () => {
            Q.events.off("virtualfocus", Ie)
        }
    }, [p, Q, A, q, z]), Qe(() => {
        oe.current = B, le.current = !!s
    }), Qe(() => {
        n || (U.current = null)
    }, [n]);
    const xe = f != null,
        Fe = R.useMemo(() => {
            function Ie(ze) {
                if (!n) return;
                const Ge = a.current.indexOf(ze);
                Ge !== -1 && B(Ge)
            }
            return {
                onFocus(ze) {
                    let {
                        currentTarget: Ge
                    } = ze;
                    Ie(Ge)
                },
                onClick: ze => {
                    let {
                        currentTarget: Ge
                    } = ze;
                    return Ge.focus({
                        preventScroll: !0
                    })
                },
                ...x && {
                    onMouseMove(ze) {
                        let {
                            currentTarget: Ge
                        } = ze;
                        Ie(Ge)
                    },
                    onPointerLeave(ze) {
                        let {
                            pointerType: Ge
                        } = ze;
                        !J.current || Ge === "touch" || (j.current = -1, De(a, j), B(null), A || ii(i.floating.current, {
                            preventScroll: !0
                        }))
                    }
                }
            }
        }, [n, i, De, x, a, B, A]);
    return R.useMemo(() => {
        if (!p) return {};
        const Ie = _.current;

        function Ue(he) {
            if (J.current = !1, W.current = !0, !ne.current && he.currentTarget === i.floating.current) return;
            if (E && hx(he.key, N, S)) {
                Bt(he), r(!1, he.nativeEvent), en(l) && !A && l.focus();
                return
            }
            const at = j.current,
                Lt = ih(a, Ie),
                kn = ix(a, Ie);
            if (he.key === "Home" && (Bt(he), j.current = Lt, B(j.current)), he.key === "End" && (Bt(he), j.current = kn, B(j.current)), !(T > 1 && (j.current = R6(a, {
                    event: he,
                    orientation: N,
                    loop: m,
                    cols: T,
                    disabledIndices: Ie,
                    minIndex: Lt,
                    maxIndex: kn,
                    prevIndex: j.current,
                    stopEvent: !0
                }), B(j.current), N === "both")) && px(he.key, N)) {
                if (Bt(he), n && !A && Li(he.currentTarget.ownerDocument) === he.currentTarget) {
                    j.current = ch(he.key, N, S) ? Lt : kn, B(j.current);
                    return
                }
                ch(he.key, N, S) ? m ? j.current = at >= kn ? v && at !== a.current.length ? -1 : Lt : Qt(a, {
                    startingIndex: at,
                    disabledIndices: Ie
                }) : j.current = Math.min(kn, Qt(a, {
                    startingIndex: at,
                    disabledIndices: Ie
                })) : m ? j.current = at <= Lt ? v && at !== -1 ? a.current.length : kn : Qt(a, {
                    startingIndex: at,
                    decrement: !0,
                    disabledIndices: Ie
                }) : j.current = Math.max(Lt, Qt(a, {
                    startingIndex: at,
                    decrement: !0,
                    disabledIndices: Ie
                })), Zu(a, j.current) ? B(null) : B(j.current)
            }
        }

        function ze(he) {
            y === "auto" && _k(he.nativeEvent) && (K.current = !0)
        }

        function Ge(he) {
            K.current = y, y === "auto" && Ok(he.nativeEvent) && (K.current = !0)
        }
        const wt = A && n && xe && {
                "aria-activedescendant": Pe || O
            },
            Gn = a.current.find(he => he?.id === O);
        return {
            reference: {
                ...wt,
                onKeyDown(he) {
                    J.current = !1;
                    const at = he.key.indexOf("Arrow") === 0,
                        Lt = u5(he.key, N, S),
                        kn = hx(he.key, N, S),
                        bn = px(he.key, N),
                        Ht = (E ? Lt : bn) || he.key === "Enter" || he.key.trim() === "";
                    if (A && n) {
                        const Pr = Q?.nodesRef.current.find(V => V.parentId == null),
                            Kn = Q && Pr ? j6(Q.nodesRef.current, Pr.id) : null;
                        if (at && Kn && z) {
                            const V = new KeyboardEvent("keydown", {
                                key: he.key,
                                bubbles: !0
                            });
                            if (Lt || kn) {
                                var Rr, Vr;
                                const re = ((Rr = Kn.context) == null ? void 0 : Rr.elements.domReference) === he.currentTarget,
                                    pe = kn && !re ? (Vr = Kn.context) == null ? void 0 : Vr.elements.domReference : Lt ? Gn : null;
                                pe && (Bt(he), pe.dispatchEvent(V), me(void 0))
                            }
                            if (bn && Kn.context && Kn.context.open && Kn.parentId && he.currentTarget !== Kn.context.elements.domReference) {
                                var Ko;
                                Bt(he), (Ko = Kn.context.elements.domReference) == null || Ko.dispatchEvent(V);
                                return
                            }
                        }
                        return Ue(he)
                    }
                    if (!(!n && !k && at)) {
                        if (Ht && (U.current = E && bn ? null : he.key), E) {
                            Lt && (Bt(he), n ? (j.current = ih(a, Ie), B(j.current)) : r(!0, he.nativeEvent));
                            return
                        }
                        bn && (g != null && (j.current = g), Bt(he), !n && k ? r(!0, he.nativeEvent) : Ue(he), n && B(j.current))
                    }
                },
                onFocus() {
                    n && B(null)
                },
                onPointerDown: Ge,
                onMouseDown: ze,
                onClick: ze
            },
            floating: {
                "aria-orientation": N === "both" ? void 0 : N,
                ...wt,
                onKeyDown: Ue,
                onPointerMove() {
                    J.current = !0
                }
            },
            item: Fe
        }
    }, [l, i, O, Pe, _, ne, a, p, N, S, A, n, xe, E, g, k, v, T, m, y, B, r, Fe, Q, z])
}

function a5(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        floatingId: r
    } = e, {
        enabled: i = !0,
        role: l = "dialog"
    } = t, s = As();
    return R.useMemo(() => {
        const a = {
            id: r,
            role: l
        };
        return i ? l === "tooltip" ? {
            reference: {
                "aria-describedby": n ? r : void 0
            },
            floating: a
        } : {
            reference: {
                "aria-expanded": n ? "true" : "false",
                "aria-haspopup": l === "alertdialog" ? "dialog" : l,
                "aria-controls": n ? r : void 0,
                ...l === "listbox" && {
                    role: "combobox"
                },
                ...l === "menu" && {
                    id: s
                }
            },
            floating: {
                ...a,
                ...l === "menu" && {
                    "aria-labelledby": s
                }
            }
        } : {}
    }, [i, l, n, r, s])
}
const gx = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (t, n) => (n ? "-" : "") + t.toLowerCase());

function pl(e, t) {
    return typeof e == "function" ? e(t) : e
}

function c5(e, t) {
    const [n, r] = R.useState(e);
    return e && !n && r(!0), R.useEffect(() => {
        if (!e) {
            const i = setTimeout(() => r(!1), t);
            return () => clearTimeout(i)
        }
    }, [e, t]), n
}

function f5(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        elements: {
            floating: r
        }
    } = e, {
        duration: i = 250
    } = t, s = (typeof i == "number" ? i : i.close) || 0, [a, f] = R.useState(!1), [d, p] = R.useState("unmounted"), g = c5(n, s);
    return Qe(() => {
        a && !g && p("unmounted")
    }, [a, g]), Qe(() => {
        if (r)
            if (n) {
                p("initial");
                const v = requestAnimationFrame(() => {
                    p("open")
                });
                return () => {
                    cancelAnimationFrame(v)
                }
            } else f(!0), p("close")
    }, [n, r]), {
        isMounted: g,
        status: d
    }
}

function rb(e, t) {
    t === void 0 && (t = {});
    const {
        initial: n = {
            opacity: 0
        },
        open: r,
        close: i,
        common: l,
        duration: s = 250
    } = t, a = e.placement, f = a.split("-")[0], d = R.useMemo(() => ({
        side: f,
        placement: a
    }), [f, a]), p = typeof s == "number", g = (p ? s : s.open) || 0, v = (p ? s : s.close) || 0, [m, E] = R.useState(() => ({
        ...pl(l, d),
        ...pl(n, d)
    })), {
        isMounted: S,
        status: A
    } = f5(e, {
        duration: s
    }), y = wn(n), x = wn(r), k = wn(i), P = wn(l);
    return Qe(() => {
        const N = pl(y.current, d),
            T = pl(k.current, d),
            F = pl(P.current, d),
            z = pl(x.current, d) || Object.keys(N).reduce((q, Q) => (q[Q] = "", q), {});
        if (A === "initial" && E(q => ({
                transitionProperty: q.transitionProperty,
                ...F,
                ...N
            })), A === "open" && E({
                transitionProperty: Object.keys(z).map(gx).join(","),
                transitionDuration: g + "ms",
                ...F,
                ...z
            }), A === "close") {
            const q = T || N;
            E({
                transitionProperty: Object.keys(q).map(gx).join(","),
                transitionDuration: v + "ms",
                ...F,
                ...q
            })
        }
    }, [v, k, y, x, P, g, A, d]), {
        isMounted: S,
        styles: m
    }
}

function d5(e, t) {
    var n;
    const {
        open: r,
        dataRef: i
    } = e, {
        listRef: l,
        activeIndex: s,
        onMatch: a,
        onTypingChange: f,
        enabled: d = !0,
        findMatch: p = null,
        resetMs: g = 750,
        ignoreKeys: v = [],
        selectedIndex: m = null
    } = t, E = R.useRef(), S = R.useRef(""), A = R.useRef((n = m ?? s) != null ? n : -1), y = R.useRef(null), x = Xi(a), k = Xi(f), P = wn(p), N = wn(v);
    return Qe(() => {
        r && (clearTimeout(E.current), y.current = null, S.current = "")
    }, [r]), Qe(() => {
        if (r && S.current === "") {
            var T;
            A.current = (T = m ?? s) != null ? T : -1
        }
    }, [r, m, s]), R.useMemo(() => {
        if (!d) return {};

        function T(q) {
            q ? i.current.typing || (i.current.typing = q, k(q)) : i.current.typing && (i.current.typing = q, k(q))
        }

        function F(q, Q, B) {
            const K = P.current ? P.current(Q, B) : Q.find(j => j?.toLocaleLowerCase().indexOf(B.toLocaleLowerCase()) === 0);
            return K ? q.indexOf(K) : -1
        }

        function z(q) {
            const Q = l.current;
            if (S.current.length > 0 && S.current[0] !== " " && (F(Q, Q, S.current) === -1 ? T(!1) : q.key === " " && Bt(q)), Q == null || N.current.includes(q.key) || q.key.length !== 1 || q.ctrlKey || q.metaKey || q.altKey) return;
            r && q.key !== " " && (Bt(q), T(!0)), Q.every(U => {
                var J, oe;
                return U ? ((J = U[0]) == null ? void 0 : J.toLocaleLowerCase()) !== ((oe = U[1]) == null ? void 0 : oe.toLocaleLowerCase()) : !0
            }) && S.current === q.key && (S.current = "", A.current = y.current), S.current += q.key, clearTimeout(E.current), E.current = setTimeout(() => {
                S.current = "", A.current = y.current, T(!1)
            }, g);
            const K = A.current,
                j = F(Q, [...Q.slice((K || 0) + 1), ...Q.slice(0, (K || 0) + 1)], S.current);
            j !== -1 ? (x(j), y.current = j) : q.key !== " " && (S.current = "", T(!1))
        }
        return {
            reference: {
                onKeyDown: z
            },
            floating: {
                onKeyDown: z,
                onKeyUp(q) {
                    q.key === " " && T(!1)
                }
            }
        }
    }, [d, r, i, l, g, N, P, x, k])
}

function mx(e, t) {
    const [n, r] = e;
    let i = !1;
    const l = t.length;
    for (let s = 0, a = l - 1; s < l; a = s++) {
        const [f, d] = t[s] || [0, 0], [p, g] = t[a] || [0, 0];
        d >= r != g >= r && n <= (p - f) * (r - d) / (g - d) + f && (i = !i)
    }
    return i
}

function p5(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
}

function h5(e) {
    e === void 0 && (e = {});
    const {
        buffer: t = .5,
        blockPointerEvents: n = !1,
        requireIntent: r = !0
    } = e;
    let i, l = !1,
        s = null,
        a = null,
        f = performance.now();

    function d(g, v) {
        const m = performance.now(),
            E = m - f;
        if (s === null || a === null || E === 0) return s = g, a = v, f = m, null;
        const S = g - s,
            A = v - a,
            x = Math.sqrt(S * S + A * A) / E;
        return s = g, a = v, f = m, x
    }
    const p = g => {
        let {
            x: v,
            y: m,
            placement: E,
            elements: S,
            onClose: A,
            nodeId: y,
            tree: x
        } = g;
        return function(P) {
            function N() {
                clearTimeout(i), A()
            }
            if (clearTimeout(i), !S.domReference || !S.floating || E == null || v == null || m == null) return;
            const {
                clientX: T,
                clientY: F
            } = P, z = [T, F], q = vv(P), Q = P.type === "mouseleave", B = At(S.floating, q), K = At(S.domReference, q), j = S.domReference.getBoundingClientRect(), U = S.floating.getBoundingClientRect(), J = E.split("-")[0], oe = v > U.right - U.width / 2, le = m > U.bottom - U.height / 2, W = p5(z, j), ee = U.width > j.width, _ = U.height > j.height, ne = (ee ? j : U).left, ae = (ee ? j : U).right, O = (_ ? j : U).top, de = (_ ? j : U).bottom;
            if (B && (l = !0, !Q)) return;
            if (K && (l = !1), K && !Q) {
                l = !0;
                return
            }
            if (Q && mt(P.relatedTarget) && At(S.floating, P.relatedTarget) || x && Do(x.nodesRef.current, y).some(De => {
                    let {
                        context: xe
                    } = De;
                    return xe?.open
                })) return;
            if (J === "top" && m >= j.bottom - 1 || J === "bottom" && m <= j.top + 1 || J === "left" && v >= j.right - 1 || J === "right" && v <= j.left + 1) return N();
            let Pe = [];
            switch (J) {
                case "top":
                    Pe = [
                        [ne, j.top + 1],
                        [ne, U.bottom - 1],
                        [ae, U.bottom - 1],
                        [ae, j.top + 1]
                    ];
                    break;
                case "bottom":
                    Pe = [
                        [ne, U.top + 1],
                        [ne, j.bottom - 1],
                        [ae, j.bottom - 1],
                        [ae, U.top + 1]
                    ];
                    break;
                case "left":
                    Pe = [
                        [U.right - 1, de],
                        [U.right - 1, O],
                        [j.left + 1, O],
                        [j.left + 1, de]
                    ];
                    break;
                case "right":
                    Pe = [
                        [j.right - 1, de],
                        [j.right - 1, O],
                        [U.left + 1, O],
                        [U.left + 1, de]
                    ];
                    break
            }

            function me(De) {
                let [xe, Fe] = De;
                switch (J) {
                    case "top": {
                        const Ie = [ee ? xe + t / 2 : oe ? xe + t * 4 : xe - t * 4, Fe + t + 1],
                            Ue = [ee ? xe - t / 2 : oe ? xe + t * 4 : xe - t * 4, Fe + t + 1],
                            ze = [
                                [U.left, oe || ee ? U.bottom - t : U.top],
                                [U.right, oe ? ee ? U.bottom - t : U.top : U.bottom - t]
                            ];
                        return [Ie, Ue, ...ze]
                    }
                    case "bottom": {
                        const Ie = [ee ? xe + t / 2 : oe ? xe + t * 4 : xe - t * 4, Fe - t],
                            Ue = [ee ? xe - t / 2 : oe ? xe + t * 4 : xe - t * 4, Fe - t],
                            ze = [
                                [U.left, oe || ee ? U.top + t : U.bottom],
                                [U.right, oe ? ee ? U.top + t : U.bottom : U.top + t]
                            ];
                        return [Ie, Ue, ...ze]
                    }
                    case "left": {
                        const Ie = [xe + t + 1, _ ? Fe + t / 2 : le ? Fe + t * 4 : Fe - t * 4],
                            Ue = [xe + t + 1, _ ? Fe - t / 2 : le ? Fe + t * 4 : Fe - t * 4];
                        return [...[
                            [le || _ ? U.right - t : U.left, U.top],
                            [le ? _ ? U.right - t : U.left : U.right - t, U.bottom]
                        ], Ie, Ue]
                    }
                    case "right": {
                        const Ie = [xe - t, _ ? Fe + t / 2 : le ? Fe + t * 4 : Fe - t * 4],
                            Ue = [xe - t, _ ? Fe - t / 2 : le ? Fe + t * 4 : Fe - t * 4],
                            ze = [
                                [le || _ ? U.left + t : U.right, U.top],
                                [le ? _ ? U.left + t : U.right : U.left + t, U.bottom]
                            ];
                        return [Ie, Ue, ...ze]
                    }
                }
            }
            if (!mx([T, F], Pe)) {
                if (l && !W) return N();
                if (!Q && r) {
                    const De = d(P.clientX, P.clientY);
                    if (De !== null && De < .1) return N()
                }
                mx([T, F], me([v, m])) ? !l && r && (i = window.setTimeout(N, 40)) : N()
            }
        }
    };
    return p.__options = {
        blockPointerEvents: n
    }, p
}
const g5 = ({
        item: e,
        inventoryId: t,
        inventoryType: n,
        inventoryGroups: r
    }, i) => {
        const l = gi(),
            s = ru(),
            a = R.useRef(null),
            f = _e.useCallback(() => Vw(e, {
                type: n,
                groups: r
            }) && qw(e, n), [e, n, r]),
            [{
                isDragging: d
            }, p] = I3(() => ({
                type: "SLOT",
                collect: y => ({
                    isDragging: y.isDragging()
                }),
                item: () => un(e, n !== Zt.SHOP) ? {
                    inventory: n,
                    item: {
                        name: e.name,
                        slot: e.slot
                    },
                    image: e?.name && `url(${Ll(e)||"none"}`
                } : null,
                canDrag: f
            }), [n, e]),
            [{
                isOver: g
            }, v] = yg(() => ({
                accept: "SLOT",
                collect: y => ({
                    isOver: y.isOver()
                }),
                drop: y => {
                    switch (s(Xu()), y.inventory) {
                        case Zt.SHOP:
                            TF(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break;
                        case Zt.CRAFTING:
                            RF(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break;
                        default:
                            Og(y, {
                                inventory: n,
                                item: {
                                    slot: e.slot
                                }
                            });
                            break
                    }
                },
                canDrop: y => (y.item.slot !== e.slot || y.inventory !== n) && n !== Zt.SHOP && n !== Zt.CRAFTING
            }), [n, e]);
        $r("refreshSlots", y => {
            !d && !y.items || !Array.isArray(y.items) || !y.items.find(k => k.item.slot === e.slot && k.inventory === t) || l.dispatch({
                type: "dnd-core/END_DRAG"
            })
        });
        const m = y => p(v(y)),
            E = y => {
                y.preventDefault(), !(n !== "player" || !un(e)) && s(nF({
                    item: e,
                    coords: {
                        x: y.clientX,
                        y: y.clientY
                    }
                }))
            },
            S = y => {
                s(Xu()), a.current && clearTimeout(a.current), y.ctrlKey && un(e) && n !== "shop" && n !== "crafting" ? Og({
                    item: e,
                    inventory: n
                }) : y.altKey && un(e) && n === "player" && av(e)
            },
            A = xv([m, i]);
        return $("div", {
            ref: A,
            onContextMenu: E,
            onClick: S,
            className: `inventory-slot ${!un(e)&&"inventory-slot--empty"}`,
            style: {
                filter: !Vw(e, {
                    type: n,
                    groups: r
                }) || !qw(e, n) ? "brightness(80%) grayscale(100%)" : void 0,
                opacity: d ? .4 : 1,
                backgroundImage: `url(${e?.name?Ll(e):"none"}`,
                border: g ? "1px solid rgba(34, 197, 94,0.4)" : ""
            },
            children: un(e) && Se("div", {
                className: "item-slot-wrapper",
                onMouseEnter: () => {
                    a.current = setTimeout(() => {
                        s(J4({
                            item: e,
                            inventoryType: n
                        }))
                    }, 500)
                },
                onMouseLeave: () => {
                    s(Xu()), a.current && (clearTimeout(a.current), a.current = null)
                },
                children: [Se("div", {
                    className: "px-1 pt-1 flex items-start justify-between flex-wrap gap-1",
                    children: [e.weight > 0 && $("span", {
                        className: "inventory-weight",
                        children: e.weight >= 1e3 ? `${(e.weight/1e3).toLocaleString("en-us",{maximumFractionDigits:1})} kg ` : `${e.weight.toLocaleString("en-us",{minimumFractionDigits:0,maximumFractionDigits:1})} g `
                    }), Se("div", {
                        className: "flex flex-col items-end gap-1",
                        children: [n === "shop" && e?.price !== void 0 && $(Bn, {
                            children: e?.currency !== "money" && e.currency !== "black_money" && e.price > 0 && e.currency ? Se("div", {
                                className: "item-slot-currency-wrapper",
                                children: [$("img", {
                                    src: e.currency ? Ll(e.currency) : "none",
                                    alt: "item-image",
                                    style: {
                                        imageRendering: "-webkit-optimize-contrast",
                                        height: "auto",
                                        width: "2vh",
                                        backfaceVisibility: "hidden",
                                        transform: "translateZ(0)"
                                    }
                                }), $("p", {
                                    children: e.price.toLocaleString("en-us")
                                })]
                            }) : $(Bn, {
                                children: e.price > 0 && $("div", {
                                    className: `item-slot-price-wrapper ${e.currency==="money"||!e.currency?"text-green-400":"text-red-400"}`,
                                    children: Se("p", {
                                        children: [Xt.$ || "$", e.price.toLocaleString("en-us")]
                                    })
                                })
                            })
                        }), e.count && $("span", {
                            className: `inventory-weight ${e.name=="money"?"inventory-weight--money":"inventory-weight--amount"}`,
                            children: e.count.toLocaleString("en-us") + ` ${e.name=="money"?"$":"x"}`
                        })]
                    })]
                }), Se("div", {
                    children: [$("div", {
                        className: "px-0.5 pb-0.5 flex items-center justify-between flex-wrap gap-1",
                        children: $("div", {
                            className: "inventory-slot-label-box",
                            children: $("div", {
                                className: "inventory-slot-label-text",
                                children: e.metadata?.label ? e.metadata.label : dt[e.name]?.label || e.name
                            })
                        })
                    }), n !== "shop" && e?.durability !== void 0 && $(gk, {
                        percent: e.durability,
                        durability: !0
                    })]
                })]
            })
        })
    },
    m5 = _e.memo(_e.forwardRef(g5));

function v5(e) {
    const [t, n] = R.useState(null), r = R.useRef(null);
    return {
        ref: R.useCallback(l => {
            if (r.current && (r.current.disconnect(), r.current = null), l === null) {
                n(null);
                return
            }
            r.current = new IntersectionObserver(([s]) => {
                n(s)
            }, e), r.current.observe(l)
        }, [e?.rootMargin, e?.root, e?.threshold]),
        entry: t
    }
}
const y5 = () => $("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        children: $("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        })
    }),
    w5 = () => Se("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "192",
        height: "192",
        fill: "#000000",
        viewBox: "0 0 256 256",
        children: [$("rect", {
            width: "256",
            height: "256",
            fill: "none"
        }), $("path", {
            d: "M48,139.6V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V139.6",
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), $("path", {
            d: "M54,40H202a8.1,8.1,0,0,1,7.7,5.8L224,96H32L46.3,45.8A8.1,8.1,0,0,1,54,40Z",
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), $("path", {
            d: "M96,96v16a32,32,0,0,1-64,0V96",
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), $("path", {
            d: "M160,96v16a32,32,0,0,1-64,0V96",
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), $("path", {
            d: "M224,96v16a32,32,0,0,1-64,0V96",
            fill: "none",
            stroke: "#000000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })]
    }),
    x5 = () => Se("svg", {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        color: "#000000",
        children: [$("path", {
            d: "M10.05 10.607l-7.07 7.07a2 2 0 000 2.83v0a2 2 0 002.828 0l7.07-7.072M17.193 13.8l3.878 3.878a2 2 0 010 2.828v0a2 2 0 01-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61 2.49 3.075l1.414-1.414L7.44 3.782l-.707 2.122zm0 0l2.83 2.83",
            stroke: "#000000",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), $("path", {
            d: "M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718 1.74-1.74 4.95-2.121 6.717-1.06l-3.04 3.04-.283 3.111 3.111-.282 3.04-3.041c1.062 1.768.68 4.978-1.06 6.717-1.74 1.74-4.564 1.905-6.717 1.061",
            stroke: "#000000",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }),
    S5 = () => $("svg", {
        height: "21",
        viewBox: "0 0 21 21",
        width: "21",
        xmlns: "http://www.w3.org/2000/svg",
        children: Se("g", {
            fill: "none",
            fillRule: "evenodd",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            transform: "translate(3 3)",
            children: [$("path", {
                d: "m8.49227788 1.06701593 5.00000002 2.85714286c.62315.35608571 1.0077221 1.01877259 1.0077221 1.73648628v4.67870983c0 .7177137-.3845721 1.3804006-1.0077221 1.7364863l-5.00000002 2.8571429c-.61486534.3513516-1.36969042.3513516-1.98455576 0l-5-2.8571429c-.62314999-.3560857-1.00772212-1.0187726-1.00772212-1.7364863v-4.67870983c0-.71771369.38457213-1.38040057 1.00772212-1.73648628l5-2.85714286c.61486534-.35135162 1.36969042-.35135162 1.98455576 0z"
            }), $("path", {
                d: "m11 6.5-7-4"
            }), $("path", {
                d: "m1 5 5.55180035 2.98943096c.59195265.31874373 1.30444665.31874373 1.8963993 0l5.55180035-2.98943096"
            }), $("path", {
                d: "m7.5 8.5v6.5"
            })]
        })
    }),
    vx = 30,
    ib = ({
        inventory: e
    }) => {
        const t = _e.useMemo(() => e.maxWeight !== void 0 ? Math.floor(N4(e.items) * 1e3) / 1e3 : 0, [e.maxWeight, e.items]),
            n = _e.useMemo(() => e.maxWeight ? t / e.maxWeight * 100 : 0, [t]),
            r = _e.useMemo(() => {
                switch (e.type) {
                    case "player":
                        return $(y5, {});
                    case "shop":
                        return $(w5, {});
                    case "crafting":
                        return $(x5, {});
                    default:
                        return $(S5, {})
                }
            }, [e.type]),
            [i, l] = _e.useState(0),
            s = R.useRef(null),
            {
                ref: a,
                entry: f
            } = v5({
                threshold: .5
            }),
            d = mi(p => p.inventory.isBusy);
        return _e.useEffect(() => {
            f && f.isIntersecting && l(p => ++p)
        }, [f]), $(Bn, {
            children: Se("div", {
                className: "inventory-grid-wrapper col-span-3",
                style: {
                    pointerEvents: d ? "none" : "auto"
                },
                children: [Se("div", {
                    className: `flex items-center ${e.label?"justify-between":"justify-end"}`,
                    children: [e.type && e.label && Se("div", {
                        className: "pl-2 pr-4 py-2 rounded-md bg-light bg-opacity-60 font-semibold text-sm text-gray-300 inline-flex items-center space-x-3",
                        children: [$("div", {
                            className: "p-1.5 rounded-md bg-slate-50 bar-icon",
                            children: r
                        }), $("span", {
                            children: e.label
                        })]
                    }), Se("div", {
                        className: "inline-flex items-center space-x-4 pl-2 pr-4 py-2 bg-light bg-opacity-60 rounded-md float-right",
                        children: [$("div", {
                            className: "p-1.5 rounded-md bg-slate-50",
                            children: Se("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 text-gray-800",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                strokeWidth: "2",
                                stroke: "currentColor",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [$("path", {
                                    stroke: "none",
                                    d: "M0 0h24v24H0z",
                                    fill: "none"
                                }), $("path", {
                                    d: "M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"
                                }), $("path", {
                                    d: "M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z"
                                })]
                            })
                        }), $("div", {
                            className: "px-2 py-3 bg-gray-300 bg-opacity-20 rounded-md",
                            children: $("div", {
                                className: "overflow-hidden rounded-md bg-zinc-700 h-2 w-24",
                                children: $("div", {
                                    className: `h-full transition-all duration-150 rounded-md ${n>=90?"bg-red-400":"bg-slate-200"}`,
                                    style: {
                                        width: `${n}%`
                                    }
                                })
                            })
                        }), $("div", {
                            className: "text-sm text-gray-300",
                            children: $("p", {
                                children: e.maxWeight ? `${Number((t/1e3).toFixed(2))}/${e.maxWeight/1e3} kg` : "∞ kg"
                            })
                        })]
                    })]
                }), $("div", {
                    className: "inventory-grid-container",
                    ref: s,
                    children: $(Bn, {
                        children: e.items.slice(0, (i + 1) * vx).map((p, g) => $(m5, {
                            item: p,
                            ref: g === (i + 1) * vx - 1 ? a : null,
                            inventoryType: e.type,
                            inventoryGroups: e.groups,
                            inventoryId: e.id
                        }, `${e.type}-${e.id}-${p.slot}`))
                    })
                })]
            })
        })
    },
    E5 = () => {
        const e = mi(Q4);
        return $(ib, {
            inventory: e
        })
    },
    C5 = () => {
        const e = mi(ck);
        return $(ib, {
            inventory: e
        })
    },
    yx = ["http", "https", "mailto", "tel"];

function k5(e) {
    const t = (e || "").trim(),
        n = t.charAt(0);
    if (n === "#" || n === "/") return t;
    const r = t.indexOf(":");
    if (r === -1) return t;
    let i = -1;
    for (; ++i < yx.length;) {
        const l = yx[i];
        if (r === l.length && t.slice(0, l.length).toLowerCase() === l) return t
    }
    return i = t.indexOf("?"), i !== -1 && r > i || (i = t.indexOf("#"), i !== -1 && r > i) ? t : "javascript:void(0)"
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var b5 = function(t) {
    return t != null && t.constructor != null && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t)
};
const ob = io(b5);

function es(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? wx(e.position) : "start" in e || "end" in e ? wx(e) : "line" in e || "column" in e ? Pg(e) : ""
}

function Pg(e) {
    return xx(e && e.line) + ":" + xx(e && e.column)
}

function wx(e) {
    return Pg(e && e.start) + "-" + Pg(e && e.end)
}

function xx(e) {
    return e && typeof e == "number" ? e : 1
}
class hr extends Error {
    constructor(t, n, r) {
        const i = [null, null];
        let l = {
            start: {
                line: null,
                column: null
            },
            end: {
                line: null,
                column: null
            }
        };
        if (super(), typeof n == "string" && (r = n, n = void 0), typeof r == "string") {
            const s = r.indexOf(":");
            s === -1 ? i[1] = r : (i[0] = r.slice(0, s), i[1] = r.slice(s + 1))
        }
        n && ("type" in n || "position" in n ? n.position && (l = n.position) : "start" in n || "end" in n ? l = n : ("line" in n || "column" in n) && (l.start = n)), this.name = es(n) || "1:1", this.message = typeof t == "object" ? t.message : t, this.stack = "", typeof t == "object" && t.stack && (this.stack = t.stack), this.reason = this.message, this.fatal, this.line = l.start.line, this.column = l.start.column, this.position = l, this.source = i[0], this.ruleId = i[1], this.file, this.actual, this.expected, this.url, this.note
    }
}
hr.prototype.file = "";
hr.prototype.name = "";
hr.prototype.reason = "";
hr.prototype.message = "";
hr.prototype.stack = "";
hr.prototype.fatal = null;
hr.prototype.column = null;
hr.prototype.line = null;
hr.prototype.source = null;
hr.prototype.ruleId = null;
hr.prototype.position = null;
const Fr = {
    basename: _5,
    dirname: O5,
    extname: T5,
    join: I5,
    sep: "/"
};

function _5(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    Ds(e);
    let n = 0,
        r = -1,
        i = e.length,
        l;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
        for (; i--;)
            if (e.charCodeAt(i) === 47) {
                if (l) {
                    n = i + 1;
                    break
                }
            } else r < 0 && (l = !0, r = i + 1);
        return r < 0 ? "" : e.slice(n, r)
    }
    if (t === e) return "";
    let s = -1,
        a = t.length - 1;
    for (; i--;)
        if (e.charCodeAt(i) === 47) {
            if (l) {
                n = i + 1;
                break
            }
        } else s < 0 && (l = !0, s = i + 1), a > -1 && (e.charCodeAt(i) === t.charCodeAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
    return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r)
}

function O5(e) {
    if (Ds(e), e.length === 0) return ".";
    let t = -1,
        n = e.length,
        r;
    for (; --n;)
        if (e.charCodeAt(n) === 47) {
            if (r) {
                t = n;
                break
            }
        } else r || (r = !0);
    return t < 0 ? e.charCodeAt(0) === 47 ? "/" : "." : t === 1 && e.charCodeAt(0) === 47 ? "//" : e.slice(0, t)
}

function T5(e) {
    Ds(e);
    let t = e.length,
        n = -1,
        r = 0,
        i = -1,
        l = 0,
        s;
    for (; t--;) {
        const a = e.charCodeAt(t);
        if (a === 47) {
            if (s) {
                r = t + 1;
                break
            }
            continue
        }
        n < 0 && (s = !0, n = t + 1), a === 46 ? i < 0 ? i = t : l !== 1 && (l = 1) : i > -1 && (l = -1)
    }
    return i < 0 || n < 0 || l === 0 || l === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n)
}

function I5(...e) {
    let t = -1,
        n;
    for (; ++t < e.length;) Ds(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : R5(n)
}

function R5(e) {
    Ds(e);
    const t = e.charCodeAt(0) === 47;
    let n = P5(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n
}

function P5(e, t) {
    let n = "",
        r = 0,
        i = -1,
        l = 0,
        s = -1,
        a, f;
    for (; ++s <= e.length;) {
        if (s < e.length) a = e.charCodeAt(s);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(i === s - 1 || l === 1))
                if (i !== s - 1 && l === 2) {
                    if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                        if (n.length > 2) {
                            if (f = n.lastIndexOf("/"), f !== n.length - 1) {
                                f < 0 ? (n = "", r = 0) : (n = n.slice(0, f), r = n.length - 1 - n.lastIndexOf("/")), i = s, l = 0;
                                continue
                            }
                        } else if (n.length > 0) {
                            n = "", r = 0, i = s, l = 0;
                            continue
                        }
                    }
                    t && (n = n.length > 0 ? n + "/.." : "..", r = 2)
                } else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
            i = s, l = 0
        } else a === 46 && l > -1 ? l++ : l = -1
    }
    return n
}

function Ds(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const A5 = {
    cwd: D5
};

function D5() {
    return "/"
}

function Ag(e) {
    return e !== null && typeof e == "object" && e.href && e.origin
}

function N5(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Ag(e)) {
        const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw t.code = "ERR_INVALID_ARG_TYPE", t
    }
    if (e.protocol !== "file:") {
        const t = new TypeError("The URL must be of scheme file");
        throw t.code = "ERR_INVALID_URL_SCHEME", t
    }
    return M5(e)
}

function M5(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length;)
        if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
            const r = t.charCodeAt(n + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        } return decodeURIComponent(t)
}
const fh = ["history", "path", "basename", "stem", "extname", "dirname"];
class lb {
    constructor(t) {
        let n;
        t ? typeof t == "string" || L5(t) ? n = {
            value: t
        } : Ag(t) ? n = {
            path: t
        } : n = t : n = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = A5.cwd(), this.value, this.stored, this.result, this.map;
        let r = -1;
        for (; ++r < fh.length;) {
            const l = fh[r];
            l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l])
        }
        let i;
        for (i in n) fh.includes(i) || (this[i] = n[i])
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(t) {
        Ag(t) && (t = N5(t)), ph(t, "path"), this.path !== t && this.history.push(t)
    }
    get dirname() {
        return typeof this.path == "string" ? Fr.dirname(this.path) : void 0
    }
    set dirname(t) {
        Sx(this.basename, "dirname"), this.path = Fr.join(t || "", this.basename)
    }
    get basename() {
        return typeof this.path == "string" ? Fr.basename(this.path) : void 0
    }
    set basename(t) {
        ph(t, "basename"), dh(t, "basename"), this.path = Fr.join(this.dirname || "", t)
    }
    get extname() {
        return typeof this.path == "string" ? Fr.extname(this.path) : void 0
    }
    set extname(t) {
        if (dh(t, "extname"), Sx(this.dirname, "extname"), t) {
            if (t.charCodeAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = Fr.join(this.dirname, this.stem + (t || ""))
    }
    get stem() {
        return typeof this.path == "string" ? Fr.basename(this.path, this.extname) : void 0
    }
    set stem(t) {
        ph(t, "stem"), dh(t, "stem"), this.path = Fr.join(this.dirname || "", t + (this.extname || ""))
    }
    toString(t) {
        return (this.value || "").toString(t || void 0)
    }
    message(t, n, r) {
        const i = new hr(t, n, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    info(t, n, r) {
        const i = this.message(t, n, r);
        return i.fatal = null, i
    }
    fail(t, n, r) {
        const i = this.message(t, n, r);
        throw i.fatal = !0, i
    }
}

function dh(e, t) {
    if (e && e.includes(Fr.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Fr.sep + "`")
}

function ph(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty")
}

function Sx(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
}

function L5(e) {
    return ob(e)
}

function Ex(e) {
    if (e) throw e
}
var uc = Object.prototype.hasOwnProperty,
    ub = Object.prototype.toString,
    Cx = Object.defineProperty,
    kx = Object.getOwnPropertyDescriptor,
    bx = function(t) {
        return typeof Array.isArray == "function" ? Array.isArray(t) : ub.call(t) === "[object Array]"
    },
    _x = function(t) {
        if (!t || ub.call(t) !== "[object Object]") return !1;
        var n = uc.call(t, "constructor"),
            r = t.constructor && t.constructor.prototype && uc.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !r) return !1;
        var i;
        for (i in t);
        return typeof i > "u" || uc.call(t, i)
    },
    Ox = function(t, n) {
        Cx && n.name === "__proto__" ? Cx(t, n.name, {
            enumerable: !0,
            configurable: !0,
            value: n.newValue,
            writable: !0
        }) : t[n.name] = n.newValue
    },
    Tx = function(t, n) {
        if (n === "__proto__")
            if (uc.call(t, n)) {
                if (kx) return kx(t, n).value
            } else return;
        return t[n]
    },
    F5 = function e() {
        var t, n, r, i, l, s, a = arguments[0],
            f = 1,
            d = arguments.length,
            p = !1;
        for (typeof a == "boolean" && (p = a, a = arguments[1] || {}, f = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); f < d; ++f)
            if (t = arguments[f], t != null)
                for (n in t) r = Tx(a, n), i = Tx(t, n), a !== i && (p && i && (_x(i) || (l = bx(i))) ? (l ? (l = !1, s = r && bx(r) ? r : []) : s = r && _x(r) ? r : {}, Ox(a, {
                    name: n,
                    newValue: e(p, s, i)
                })) : typeof i < "u" && Ox(a, {
                    name: n,
                    newValue: i
                }));
        return a
    };
const Ix = io(F5);

function Dg(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function z5() {
    const e = [],
        t = {
            run: n,
            use: r
        };
    return t;

    function n(...i) {
        let l = -1;
        const s = i.pop();
        if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
        a(null, ...i);

        function a(f, ...d) {
            const p = e[++l];
            let g = -1;
            if (f) {
                s(f);
                return
            }
            for (; ++g < i.length;)(d[g] === null || d[g] === void 0) && (d[g] = i[g]);
            i = d, p ? $5(p, a)(...d) : s(null, ...d)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), t
    }
}

function $5(e, t) {
    let n;
    return r;

    function r(...s) {
        const a = e.length > s.length;
        let f;
        a && s.push(i);
        try {
            f = e.apply(this, s)
        } catch (d) {
            const p = d;
            if (a && n) throw p;
            return i(p)
        }
        a || (f instanceof Promise ? f.then(l, i) : f instanceof Error ? i(f) : l(f))
    }

    function i(s, ...a) {
        n || (n = !0, t(s, ...a))
    }

    function l(s) {
        i(null, s)
    }
}
const B5 = ab().freeze(),
    sb = {}.hasOwnProperty;

function ab() {
    const e = z5(),
        t = [];
    let n = {},
        r, i = -1;
    return l.data = s, l.Parser = void 0, l.Compiler = void 0, l.freeze = a, l.attachers = t, l.use = f, l.parse = d, l.stringify = p, l.run = g, l.runSync = v, l.process = m, l.processSync = E, l;

    function l() {
        const S = ab();
        let A = -1;
        for (; ++A < t.length;) S.use(...t[A]);
        return S.data(Ix(!0, {}, n)), S
    }

    function s(S, A) {
        return typeof S == "string" ? arguments.length === 2 ? (mh("data", r), n[S] = A, l) : sb.call(n, S) && n[S] || null : S ? (mh("data", r), n = S, l) : n
    }

    function a() {
        if (r) return l;
        for (; ++i < t.length;) {
            const [S, ...A] = t[i];
            if (A[0] === !1) continue;
            A[0] === !0 && (A[0] = void 0);
            const y = S.call(l, ...A);
            typeof y == "function" && e.use(y)
        }
        return r = !0, i = Number.POSITIVE_INFINITY, l
    }

    function f(S, ...A) {
        let y;
        if (mh("use", r), S != null)
            if (typeof S == "function") N(S, ...A);
            else if (typeof S == "object") Array.isArray(S) ? P(S) : k(S);
        else throw new TypeError("Expected usable value, not `" + S + "`");
        return y && (n.settings = Object.assign(n.settings || {}, y)), l;

        function x(T) {
            if (typeof T == "function") N(T);
            else if (typeof T == "object")
                if (Array.isArray(T)) {
                    const [F, ...z] = T;
                    N(F, ...z)
                } else k(T);
            else throw new TypeError("Expected usable value, not `" + T + "`")
        }

        function k(T) {
            P(T.plugins), T.settings && (y = Object.assign(y || {}, T.settings))
        }

        function P(T) {
            let F = -1;
            if (T != null)
                if (Array.isArray(T))
                    for (; ++F < T.length;) {
                        const z = T[F];
                        x(z)
                    } else throw new TypeError("Expected a list of plugins, not `" + T + "`")
        }

        function N(T, F) {
            let z = -1,
                q;
            for (; ++z < t.length;)
                if (t[z][0] === T) {
                    q = t[z];
                    break
                } q ? (Dg(q[1]) && Dg(F) && (F = Ix(!0, q[1], F)), q[1] = F) : t.push([...arguments])
        }
    }

    function d(S) {
        l.freeze();
        const A = Au(S),
            y = l.Parser;
        return hh("parse", y), Rx(y, "parse") ? new y(String(A), A).parse() : y(String(A), A)
    }

    function p(S, A) {
        l.freeze();
        const y = Au(A),
            x = l.Compiler;
        return gh("stringify", x), Px(S), Rx(x, "compile") ? new x(S, y).compile() : x(S, y)
    }

    function g(S, A, y) {
        if (Px(S), l.freeze(), !y && typeof A == "function" && (y = A, A = void 0), !y) return new Promise(x);
        x(null, y);

        function x(k, P) {
            e.run(S, Au(A), N);

            function N(T, F, z) {
                F = F || S, T ? P(T) : k ? k(F) : y(null, F, z)
            }
        }
    }

    function v(S, A) {
        let y, x;
        return l.run(S, A, k), Ax("runSync", "run", x), y;

        function k(P, N) {
            Ex(P), y = N, x = !0
        }
    }

    function m(S, A) {
        if (l.freeze(), hh("process", l.Parser), gh("process", l.Compiler), !A) return new Promise(y);
        y(null, A);

        function y(x, k) {
            const P = Au(S);
            l.run(l.parse(P), P, (T, F, z) => {
                if (T || !F || !z) N(T);
                else {
                    const q = l.stringify(F, z);
                    q == null || (H5(q) ? z.value = q : z.result = q), N(T, z)
                }
            });

            function N(T, F) {
                T || !F ? k(T) : x ? x(F) : A(null, F)
            }
        }
    }

    function E(S) {
        let A;
        l.freeze(), hh("processSync", l.Parser), gh("processSync", l.Compiler);
        const y = Au(S);
        return l.process(y, x), Ax("processSync", "process", A), y;

        function x(k) {
            A = !0, Ex(k)
        }
    }
}

function Rx(e, t) {
    return typeof e == "function" && e.prototype && (U5(e.prototype) || t in e.prototype)
}

function U5(e) {
    let t;
    for (t in e)
        if (sb.call(e, t)) return !0;
    return !1
}

function hh(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Parser`")
}

function gh(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `Compiler`")
}

function mh(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function Px(e) {
    if (!Dg(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function Ax(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
}

function Au(e) {
    return j5(e) ? e : new lb(e)
}

function j5(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function H5(e) {
    return typeof e == "string" || ob(e)
}
const W5 = {};

function V5(e, t) {
    const n = t || W5,
        r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0,
        i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
    return cb(e, r, i)
}

function cb(e, t, n) {
    if (q5(e)) {
        if ("value" in e) return e.type === "html" && !n ? "" : e.value;
        if (t && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Dx(e.children, t, n)
    }
    return Array.isArray(e) ? Dx(e, t, n) : ""
}

function Dx(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = cb(e[i], t, n);
    return r.join("")
}

function q5(e) {
    return !!(e && typeof e == "object")
}

function Wr(e, t, n, r) {
    const i = e.length;
    let l = 0,
        s;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), e.splice(...s);
    else
        for (n && e.splice(t, n); l < r.length;) s = r.slice(l, l + 1e4), s.unshift(t, 0), e.splice(...s), l += 1e4, t += 1e4
}

function ur(e, t) {
    return e.length > 0 ? (Wr(e, e.length, 0, t), e) : t
}
const Nx = {}.hasOwnProperty;

function G5(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length;) K5(t, e[n]);
    return t
}

function K5(e, t) {
    let n;
    for (n in t) {
        const i = (Nx.call(e, n) ? e[n] : void 0) || (e[n] = {}),
            l = t[n];
        let s;
        if (l)
            for (s in l) {
                Nx.call(i, s) || (i[s] = []);
                const a = l[s];
                Q5(i[s], Array.isArray(a) ? a : a ? [a] : [])
            }
    }
}

function Q5(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length;)(t[n].add === "after" ? e : r).push(t[n]);
    Wr(e, 0, 0, r)
}
const Y5 = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    Br = ao(/[A-Za-z]/),
    Fn = ao(/[\dA-Za-z]/),
    X5 = ao(/[#-'*+\--9=?A-Z^-~]/);

function Ng(e) {
    return e !== null && (e < 32 || e === 127)
}
const Mg = ao(/\d/),
    Z5 = ao(/[\dA-Fa-f]/),
    J5 = ao(/[!-/:-@[-`{-~]/);

function we(e) {
    return e !== null && e < -2
}

function Cn(e) {
    return e !== null && (e < 0 || e === 32)
}

function Ve(e) {
    return e === -2 || e === -1 || e === 32
}
const ez = ao(Y5),
    tz = ao(/\s/);

function ao(e) {
    return t;

    function t(n) {
        return n !== null && e.test(String.fromCharCode(n))
    }
}

function it(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let l = 0;
    return s;

    function s(f) {
        return Ve(f) ? (e.enter(n), a(f)) : t(f)
    }

    function a(f) {
        return Ve(f) && l++ < i ? (e.consume(f), a) : (e.exit(n), t(f))
    }
}
const nz = {
    tokenize: rz
};

function rz(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;

    function r(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), it(e, t, "linePrefix")
    }

    function i(a) {
        return e.enter("paragraph"), l(a)
    }

    function l(a) {
        const f = e.enter("chunkText", {
            contentType: "text",
            previous: n
        });
        return n && (n.next = f), n = f, s(a)
    }

    function s(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return
        }
        return we(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), s)
    }
}
const iz = {
        tokenize: oz
    },
    Mx = {
        tokenize: lz
    };

function oz(e) {
    const t = this,
        n = [];
    let r = 0,
        i, l, s;
    return a;

    function a(k) {
        if (r < n.length) {
            const P = n[r];
            return t.containerState = P[1], e.attempt(P[0].continuation, f, d)(k)
        }
        return d(k)
    }

    function f(k) {
        if (r++, t.containerState._closeFlow) {
            t.containerState._closeFlow = void 0, i && x();
            const P = t.events.length;
            let N = P,
                T;
            for (; N--;)
                if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
                    T = t.events[N][1].end;
                    break
                } y(r);
            let F = P;
            for (; F < t.events.length;) t.events[F][1].end = Object.assign({}, T), F++;
            return Wr(t.events, N + 1, 0, t.events.slice(P)), t.events.length = F, d(k)
        }
        return a(k)
    }

    function d(k) {
        if (r === n.length) {
            if (!i) return v(k);
            if (i.currentConstruct && i.currentConstruct.concrete) return E(k);
            t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return t.containerState = {}, e.check(Mx, p, g)(k)
    }

    function p(k) {
        return i && x(), y(r), v(k)
    }

    function g(k) {
        return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, E(k)
    }

    function v(k) {
        return t.containerState = {}, e.attempt(Mx, m, E)(k)
    }

    function m(k) {
        return r++, n.push([t.currentConstruct, t.containerState]), v(k)
    }

    function E(k) {
        if (k === null) {
            i && x(), y(0), e.consume(k);
            return
        }
        return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: l,
            _tokenizer: i
        }), S(k)
    }

    function S(k) {
        if (k === null) {
            A(e.exit("chunkFlow"), !0), y(0), e.consume(k);
            return
        }
        return we(k) ? (e.consume(k), A(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(k), S)
    }

    function A(k, P) {
        const N = t.sliceStream(k);
        if (P && N.push(null), k.previous = l, l && (l.next = k), l = k, i.defineSkip(k.start), i.write(N), t.parser.lazy[k.start.line]) {
            let T = i.events.length;
            for (; T--;)
                if (i.events[T][1].start.offset < s && (!i.events[T][1].end || i.events[T][1].end.offset > s)) return;
            const F = t.events.length;
            let z = F,
                q, Q;
            for (; z--;)
                if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
                    if (q) {
                        Q = t.events[z][1].end;
                        break
                    }
                    q = !0
                } for (y(r), T = F; T < t.events.length;) t.events[T][1].end = Object.assign({}, Q), T++;
            Wr(t.events, z + 1, 0, t.events.slice(F)), t.events.length = T
        }
    }

    function y(k) {
        let P = n.length;
        for (; P-- > k;) {
            const N = n[P];
            t.containerState = N[1], N[0].exit.call(t, e)
        }
        n.length = k
    }

    function x() {
        i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0
    }
}

function lz(e, t, n) {
    return it(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Lx(e) {
    if (e === null || Cn(e) || tz(e)) return 1;
    if (ez(e)) return 2
}

function kv(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const l = e[i].resolveAll;
        l && !r.includes(l) && (t = l(t, n), r.push(l))
    }
    return t
}
const Lg = {
    name: "attention",
    tokenize: sz,
    resolveAll: uz
};

function uz(e, t) {
    let n = -1,
        r, i, l, s, a, f, d, p;
    for (; ++n < e.length;)
        if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
            for (r = n; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
                    f = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                    const g = Object.assign({}, e[r][1].end),
                        v = Object.assign({}, e[n][1].start);
                    Fx(g, -f), Fx(v, f), s = {
                        type: f > 1 ? "strongSequence" : "emphasisSequence",
                        start: g,
                        end: Object.assign({}, e[r][1].end)
                    }, a = {
                        type: f > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, e[n][1].start),
                        end: v
                    }, l = {
                        type: f > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[n][1].start)
                    }, i = {
                        type: f > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, s.start),
                        end: Object.assign({}, a.end)
                    }, e[r][1].end = Object.assign({}, s.start), e[n][1].start = Object.assign({}, a.end), d = [], e[r][1].end.offset - e[r][1].start.offset && (d = ur(d, [
                        ["enter", e[r][1], t],
                        ["exit", e[r][1], t]
                    ])), d = ur(d, [
                        ["enter", i, t],
                        ["enter", s, t],
                        ["exit", s, t],
                        ["enter", l, t]
                    ]), d = ur(d, kv(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), d = ur(d, [
                        ["exit", l, t],
                        ["enter", a, t],
                        ["exit", a, t],
                        ["exit", i, t]
                    ]), e[n][1].end.offset - e[n][1].start.offset ? (p = 2, d = ur(d, [
                        ["enter", e[n][1], t],
                        ["exit", e[n][1], t]
                    ])) : p = 0, Wr(e, r - 1, n - r + 3, d), n = r + d.length - p - 2;
                    break
                }
        } for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e
}

function sz(e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Lx(r);
    let l;
    return s;

    function s(f) {
        return l = f, e.enter("attentionSequence"), a(f)
    }

    function a(f) {
        if (f === l) return e.consume(f), a;
        const d = e.exit("attentionSequence"),
            p = Lx(f),
            g = !p || p === 2 && i || n.includes(f),
            v = !i || i === 2 && p || n.includes(r);
        return d._open = !!(l === 42 ? g : g && (i || !v)), d._close = !!(l === 42 ? v : v && (p || !g)), t(f)
    }
}

function Fx(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t
}
const az = {
    name: "autolink",
    tokenize: cz
};

function cz(e, t, n) {
    let r = 0;
    return i;

    function i(m) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l
    }

    function l(m) {
        return Br(m) ? (e.consume(m), s) : d(m)
    }

    function s(m) {
        return m === 43 || m === 45 || m === 46 || Fn(m) ? (r = 1, a(m)) : d(m)
    }

    function a(m) {
        return m === 58 ? (e.consume(m), r = 0, f) : (m === 43 || m === 45 || m === 46 || Fn(m)) && r++ < 32 ? (e.consume(m), a) : (r = 0, d(m))
    }

    function f(m) {
        return m === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : m === null || m === 32 || m === 60 || Ng(m) ? n(m) : (e.consume(m), f)
    }

    function d(m) {
        return m === 64 ? (e.consume(m), p) : X5(m) ? (e.consume(m), d) : n(m)
    }

    function p(m) {
        return Fn(m) ? g(m) : n(m)
    }

    function g(m) {
        return m === 46 ? (e.consume(m), r = 0, p) : m === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(m), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(m)
    }

    function v(m) {
        if ((m === 45 || Fn(m)) && r++ < 63) {
            const E = m === 45 ? v : g;
            return e.consume(m), E
        }
        return n(m)
    }
}
const Kf = {
    tokenize: fz,
    partial: !0
};

function fz(e, t, n) {
    return r;

    function r(l) {
        return Ve(l) ? it(e, i, "linePrefix")(l) : i(l)
    }

    function i(l) {
        return l === null || we(l) ? t(l) : n(l)
    }
}
const fb = {
    name: "blockQuote",
    tokenize: dz,
    continuation: {
        tokenize: pz
    },
    exit: hz
};

function dz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        if (s === 62) {
            const a = r.containerState;
            return a.open || (e.enter("blockQuote", {
                _container: !0
            }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), l
        }
        return n(s)
    }

    function l(s) {
        return Ve(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s))
    }
}

function pz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return Ve(s) ? it(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : l(s)
    }

    function l(s) {
        return e.attempt(fb, t, n)(s)
    }
}

function hz(e) {
    e.exit("blockQuote")
}
const db = {
    name: "characterEscape",
    tokenize: gz
};

function gz(e, t, n) {
    return r;

    function r(l) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i
    }

    function i(l) {
        return J5(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l)
    }
}
const zx = document.createElement("i");

function bv(e) {
    const t = "&" + e + ";";
    zx.innerHTML = t;
    const n = zx.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
}
const pb = {
    name: "characterReference",
    tokenize: mz
};

function mz(e, t, n) {
    const r = this;
    let i = 0,
        l, s;
    return a;

    function a(g) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f
    }

    function f(g) {
        return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), d) : (e.enter("characterReferenceValue"), l = 31, s = Fn, p(g))
    }

    function d(g) {
        return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, s = Z5, p) : (e.enter("characterReferenceValue"), l = 7, s = Mg, p(g))
    }

    function p(g) {
        if (g === 59 && i) {
            const v = e.exit("characterReferenceValue");
            return s === Fn && !bv(r.sliceSerialize(v)) ? n(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t)
        }
        return s(g) && i++ < l ? (e.consume(g), p) : n(g)
    }
}
const $x = {
        tokenize: yz,
        partial: !0
    },
    Bx = {
        name: "codeFenced",
        tokenize: vz,
        concrete: !0
    };

function vz(e, t, n) {
    const r = this,
        i = {
            tokenize: N,
            partial: !0
        };
    let l = 0,
        s = 0,
        a;
    return f;

    function f(T) {
        return d(T)
    }

    function d(T) {
        const F = r.events[r.events.length - 1];
        return l = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, a = T, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(T)
    }

    function p(T) {
        return T === a ? (s++, e.consume(T), p) : s < 3 ? n(T) : (e.exit("codeFencedFenceSequence"), Ve(T) ? it(e, g, "whitespace")(T) : g(T))
    }

    function g(T) {
        return T === null || we(T) ? (e.exit("codeFencedFence"), r.interrupt ? t(T) : e.check($x, S, P)(T)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), v(T))
    }

    function v(T) {
        return T === null || we(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(T)) : Ve(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), it(e, m, "whitespace")(T)) : T === 96 && T === a ? n(T) : (e.consume(T), v)
    }

    function m(T) {
        return T === null || we(T) ? g(T) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), E(T))
    }

    function E(T) {
        return T === null || we(T) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(T)) : T === 96 && T === a ? n(T) : (e.consume(T), E)
    }

    function S(T) {
        return e.attempt(i, P, A)(T)
    }

    function A(T) {
        return e.enter("lineEnding"), e.consume(T), e.exit("lineEnding"), y
    }

    function y(T) {
        return l > 0 && Ve(T) ? it(e, x, "linePrefix", l + 1)(T) : x(T)
    }

    function x(T) {
        return T === null || we(T) ? e.check($x, S, P)(T) : (e.enter("codeFlowValue"), k(T))
    }

    function k(T) {
        return T === null || we(T) ? (e.exit("codeFlowValue"), x(T)) : (e.consume(T), k)
    }

    function P(T) {
        return e.exit("codeFenced"), t(T)
    }

    function N(T, F, z) {
        let q = 0;
        return Q;

        function Q(J) {
            return T.enter("lineEnding"), T.consume(J), T.exit("lineEnding"), B
        }

        function B(J) {
            return T.enter("codeFencedFence"), Ve(J) ? it(T, K, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(J) : K(J)
        }

        function K(J) {
            return J === a ? (T.enter("codeFencedFenceSequence"), j(J)) : z(J)
        }

        function j(J) {
            return J === a ? (q++, T.consume(J), j) : q >= s ? (T.exit("codeFencedFenceSequence"), Ve(J) ? it(T, U, "whitespace")(J) : U(J)) : z(J)
        }

        function U(J) {
            return J === null || we(J) ? (T.exit("codeFencedFence"), F(J)) : z(J)
        }
    }
}

function yz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), l)
    }

    function l(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}
const vh = {
        name: "codeIndented",
        tokenize: xz
    },
    wz = {
        tokenize: Sz,
        partial: !0
    };

function xz(e, t, n) {
    const r = this;
    return i;

    function i(d) {
        return e.enter("codeIndented"), it(e, l, "linePrefix", 4 + 1)(d)
    }

    function l(d) {
        const p = r.events[r.events.length - 1];
        return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? s(d) : n(d)
    }

    function s(d) {
        return d === null ? f(d) : we(d) ? e.attempt(wz, s, f)(d) : (e.enter("codeFlowValue"), a(d))
    }

    function a(d) {
        return d === null || we(d) ? (e.exit("codeFlowValue"), s(d)) : (e.consume(d), a)
    }

    function f(d) {
        return e.exit("codeIndented"), t(d)
    }
}

function Sz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return r.parser.lazy[r.now().line] ? n(s) : we(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : it(e, l, "linePrefix", 4 + 1)(s)
    }

    function l(s) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : we(s) ? i(s) : n(s)
    }
}
const Ez = {
    name: "codeText",
    tokenize: bz,
    resolve: Cz,
    previous: kz
};

function Cz(e) {
    let t = e.length - 4,
        n = 3,
        r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
        for (r = n; ++r < t;)
            if (e[r][1].type === "codeTextData") {
                e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
                break
            }
    }
    for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function kz(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function bz(e, t, n) {
    let r = 0,
        i, l;
    return s;

    function s(g) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(g)
    }

    function a(g) {
        return g === 96 ? (e.consume(g), r++, a) : (e.exit("codeTextSequence"), f(g))
    }

    function f(g) {
        return g === null ? n(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (l = e.enter("codeTextSequence"), i = 0, p(g)) : we(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), d(g))
    }

    function d(g) {
        return g === null || g === 32 || g === 96 || we(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), d)
    }

    function p(g) {
        return g === 96 ? (e.consume(g), i++, p) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (l.type = "codeTextData", d(g))
    }
}

function hb(e) {
    const t = {};
    let n = -1,
        r, i, l, s, a, f, d;
    for (; ++n < e.length;) {
        for (; n in t;) n = t[n];
        if (r = e[n], n && r[1].type === "chunkFlow" && e[n - 1][1].type === "listItemPrefix" && (f = r[1]._tokenizer.events, l = 0, l < f.length && f[l][1].type === "lineEndingBlank" && (l += 2), l < f.length && f[l][1].type === "content"))
            for (; ++l < f.length && f[l][1].type !== "content";) f[l][1].type === "chunkText" && (f[l][1]._isInFirstContentOfListItem = !0, l++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(t, _z(e, n)), n = t[n], d = !0);
        else if (r[1]._container) {
            for (l = n, i = void 0; l-- && (s = e[l], s[1].type === "lineEnding" || s[1].type === "lineEndingBlank");) s[0] === "enter" && (i && (e[i][1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = l);
            i && (r[1].end = Object.assign({}, e[i][1].start), a = e.slice(i, n), a.unshift(r), Wr(e, i, n - i + 1, a))
        }
    }
    return !d
}

function _z(e, t) {
    const n = e[t][1],
        r = e[t][2];
    let i = t - 1;
    const l = [],
        s = n._tokenizer || r.parser[n.contentType](n.start),
        a = s.events,
        f = [],
        d = {};
    let p, g, v = -1,
        m = n,
        E = 0,
        S = 0;
    const A = [S];
    for (; m;) {
        for (; e[++i][1] !== m;);
        l.push(i), m._tokenizer || (p = r.sliceStream(m), m.next || p.push(null), g && s.defineSkip(m.start), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = !0), s.write(p), m._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), g = m, m = m.next
    }
    for (m = n; ++v < a.length;) a[v][0] === "exit" && a[v - 1][0] === "enter" && a[v][1].type === a[v - 1][1].type && a[v][1].start.line !== a[v][1].end.line && (S = v + 1, A.push(S), m._tokenizer = void 0, m.previous = void 0, m = m.next);
    for (s.events = [], m ? (m._tokenizer = void 0, m.previous = void 0) : A.pop(), v = A.length; v--;) {
        const y = a.slice(A[v], A[v + 1]),
            x = l.pop();
        f.unshift([x, x + y.length - 1]), Wr(e, x, 2, y)
    }
    for (v = -1; ++v < f.length;) d[E + f[v][0]] = E + f[v][1], E += f[v][1] - f[v][0] - 1;
    return d
}
const Oz = {
        tokenize: Rz,
        resolve: Iz
    },
    Tz = {
        tokenize: Pz,
        partial: !0
    };

function Iz(e) {
    return hb(e), e
}

function Rz(e, t) {
    let n;
    return r;

    function r(a) {
        return e.enter("content"), n = e.enter("chunkContent", {
            contentType: "content"
        }), i(a)
    }

    function i(a) {
        return a === null ? l(a) : we(a) ? e.check(Tz, s, l)(a) : (e.consume(a), i)
    }

    function l(a) {
        return e.exit("chunkContent"), e.exit("content"), t(a)
    }

    function s(a) {
        return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
            contentType: "content",
            previous: n
        }), n = n.next, i
    }
}

function Pz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), it(e, l, "linePrefix")
    }

    function l(s) {
        if (s === null || we(s)) return n(s);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s)
    }
}

function gb(e, t, n, r, i, l, s, a, f) {
    const d = f || Number.POSITIVE_INFINITY;
    let p = 0;
    return g;

    function g(y) {
        return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), v) : y === null || y === 32 || y === 41 || Ng(y) ? n(y) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), S(y))
    }

    function v(y) {
        return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), m(y))
    }

    function m(y) {
        return y === 62 ? (e.exit("chunkString"), e.exit(a), v(y)) : y === null || y === 60 || we(y) ? n(y) : (e.consume(y), y === 92 ? E : m)
    }

    function E(y) {
        return y === 60 || y === 62 || y === 92 ? (e.consume(y), m) : m(y)
    }

    function S(y) {
        return !p && (y === null || y === 41 || Cn(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(y)) : p < d && y === 40 ? (e.consume(y), p++, S) : y === 41 ? (e.consume(y), p--, S) : y === null || y === 32 || y === 40 || Ng(y) ? n(y) : (e.consume(y), y === 92 ? A : S)
    }

    function A(y) {
        return y === 40 || y === 41 || y === 92 ? (e.consume(y), S) : S(y)
    }
}

function mb(e, t, n, r, i, l) {
    const s = this;
    let a = 0,
        f;
    return d;

    function d(m) {
        return e.enter(r), e.enter(i), e.consume(m), e.exit(i), e.enter(l), p
    }

    function p(m) {
        return a > 999 || m === null || m === 91 || m === 93 && !f || m === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(m) : m === 93 ? (e.exit(l), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : we(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), p) : (e.enter("chunkString", {
            contentType: "string"
        }), g(m))
    }

    function g(m) {
        return m === null || m === 91 || m === 93 || we(m) || a++ > 999 ? (e.exit("chunkString"), p(m)) : (e.consume(m), f || (f = !Ve(m)), m === 92 ? v : g)
    }

    function v(m) {
        return m === 91 || m === 92 || m === 93 ? (e.consume(m), a++, g) : g(m)
    }
}

function vb(e, t, n, r, i, l) {
    let s;
    return a;

    function a(v) {
        return v === 34 || v === 39 || v === 40 ? (e.enter(r), e.enter(i), e.consume(v), e.exit(i), s = v === 40 ? 41 : v, f) : n(v)
    }

    function f(v) {
        return v === s ? (e.enter(i), e.consume(v), e.exit(i), e.exit(r), t) : (e.enter(l), d(v))
    }

    function d(v) {
        return v === s ? (e.exit(l), f(s)) : v === null ? n(v) : we(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), it(e, d, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), p(v))
    }

    function p(v) {
        return v === s || v === null || we(v) ? (e.exit("chunkString"), d(v)) : (e.consume(v), v === 92 ? g : p)
    }

    function g(v) {
        return v === s || v === 92 ? (e.consume(v), p) : p(v)
    }
}

function ts(e, t) {
    let n;
    return r;

    function r(i) {
        return we(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Ve(i) ? it(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
    }
}

function zl(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const Az = {
        name: "definition",
        tokenize: Nz
    },
    Dz = {
        tokenize: Mz,
        partial: !0
    };

function Nz(e, t, n) {
    const r = this;
    let i;
    return l;

    function l(m) {
        return e.enter("definition"), s(m)
    }

    function s(m) {
        return mb.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(m)
    }

    function a(m) {
        return i = zl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), f) : n(m)
    }

    function f(m) {
        return Cn(m) ? ts(e, d)(m) : d(m)
    }

    function d(m) {
        return gb(e, p, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(m)
    }

    function p(m) {
        return e.attempt(Dz, g, g)(m)
    }

    function g(m) {
        return Ve(m) ? it(e, v, "whitespace")(m) : v(m)
    }

    function v(m) {
        return m === null || we(m) ? (e.exit("definition"), r.parser.defined.push(i), t(m)) : n(m)
    }
}

function Mz(e, t, n) {
    return r;

    function r(a) {
        return Cn(a) ? ts(e, i)(a) : n(a)
    }

    function i(a) {
        return vb(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a)
    }

    function l(a) {
        return Ve(a) ? it(e, s, "whitespace")(a) : s(a)
    }

    function s(a) {
        return a === null || we(a) ? t(a) : n(a)
    }
}
const Lz = {
    name: "hardBreakEscape",
    tokenize: Fz
};

function Fz(e, t, n) {
    return r;

    function r(l) {
        return e.enter("hardBreakEscape"), e.consume(l), i
    }

    function i(l) {
        return we(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l)
    }
}
const zz = {
    name: "headingAtx",
    tokenize: Bz,
    resolve: $z
};

function $z(e, t) {
    let n = e.length - 2,
        r = 3,
        i, l;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[n][1].end
    }, l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: "text"
    }, Wr(e, r, n - r + 1, [
        ["enter", i, t],
        ["enter", l, t],
        ["exit", l, t],
        ["exit", i, t]
    ])), e
}

function Bz(e, t, n) {
    let r = 0;
    return i;

    function i(p) {
        return e.enter("atxHeading"), l(p)
    }

    function l(p) {
        return e.enter("atxHeadingSequence"), s(p)
    }

    function s(p) {
        return p === 35 && r++ < 6 ? (e.consume(p), s) : p === null || Cn(p) ? (e.exit("atxHeadingSequence"), a(p)) : n(p)
    }

    function a(p) {
        return p === 35 ? (e.enter("atxHeadingSequence"), f(p)) : p === null || we(p) ? (e.exit("atxHeading"), t(p)) : Ve(p) ? it(e, a, "whitespace")(p) : (e.enter("atxHeadingText"), d(p))
    }

    function f(p) {
        return p === 35 ? (e.consume(p), f) : (e.exit("atxHeadingSequence"), a(p))
    }

    function d(p) {
        return p === null || p === 35 || Cn(p) ? (e.exit("atxHeadingText"), a(p)) : (e.consume(p), d)
    }
}
const Uz = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    Ux = ["pre", "script", "style", "textarea"],
    jz = {
        name: "htmlFlow",
        tokenize: qz,
        resolveTo: Vz,
        concrete: !0
    },
    Hz = {
        tokenize: Kz,
        partial: !0
    },
    Wz = {
        tokenize: Gz,
        partial: !0
    };

function Vz(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
}

function qz(e, t, n) {
    const r = this;
    let i, l, s, a, f;
    return d;

    function d(O) {
        return p(O)
    }

    function p(O) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(O), g
    }

    function g(O) {
        return O === 33 ? (e.consume(O), v) : O === 47 ? (e.consume(O), l = !0, S) : O === 63 ? (e.consume(O), i = 3, r.interrupt ? t : _) : Br(O) ? (e.consume(O), s = String.fromCharCode(O), A) : n(O)
    }

    function v(O) {
        return O === 45 ? (e.consume(O), i = 2, m) : O === 91 ? (e.consume(O), i = 5, a = 0, E) : Br(O) ? (e.consume(O), i = 4, r.interrupt ? t : _) : n(O)
    }

    function m(O) {
        return O === 45 ? (e.consume(O), r.interrupt ? t : _) : n(O)
    }

    function E(O) {
        const de = "CDATA[";
        return O === de.charCodeAt(a++) ? (e.consume(O), a === de.length ? r.interrupt ? t : K : E) : n(O)
    }

    function S(O) {
        return Br(O) ? (e.consume(O), s = String.fromCharCode(O), A) : n(O)
    }

    function A(O) {
        if (O === null || O === 47 || O === 62 || Cn(O)) {
            const de = O === 47,
                Pe = s.toLowerCase();
            return !de && !l && Ux.includes(Pe) ? (i = 1, r.interrupt ? t(O) : K(O)) : Uz.includes(s.toLowerCase()) ? (i = 6, de ? (e.consume(O), y) : r.interrupt ? t(O) : K(O)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(O) : l ? x(O) : k(O))
        }
        return O === 45 || Fn(O) ? (e.consume(O), s += String.fromCharCode(O), A) : n(O)
    }

    function y(O) {
        return O === 62 ? (e.consume(O), r.interrupt ? t : K) : n(O)
    }

    function x(O) {
        return Ve(O) ? (e.consume(O), x) : Q(O)
    }

    function k(O) {
        return O === 47 ? (e.consume(O), Q) : O === 58 || O === 95 || Br(O) ? (e.consume(O), P) : Ve(O) ? (e.consume(O), k) : Q(O)
    }

    function P(O) {
        return O === 45 || O === 46 || O === 58 || O === 95 || Fn(O) ? (e.consume(O), P) : N(O)
    }

    function N(O) {
        return O === 61 ? (e.consume(O), T) : Ve(O) ? (e.consume(O), N) : k(O)
    }

    function T(O) {
        return O === null || O === 60 || O === 61 || O === 62 || O === 96 ? n(O) : O === 34 || O === 39 ? (e.consume(O), f = O, F) : Ve(O) ? (e.consume(O), T) : z(O)
    }

    function F(O) {
        return O === f ? (e.consume(O), f = null, q) : O === null || we(O) ? n(O) : (e.consume(O), F)
    }

    function z(O) {
        return O === null || O === 34 || O === 39 || O === 47 || O === 60 || O === 61 || O === 62 || O === 96 || Cn(O) ? N(O) : (e.consume(O), z)
    }

    function q(O) {
        return O === 47 || O === 62 || Ve(O) ? k(O) : n(O)
    }

    function Q(O) {
        return O === 62 ? (e.consume(O), B) : n(O)
    }

    function B(O) {
        return O === null || we(O) ? K(O) : Ve(O) ? (e.consume(O), B) : n(O)
    }

    function K(O) {
        return O === 45 && i === 2 ? (e.consume(O), oe) : O === 60 && i === 1 ? (e.consume(O), le) : O === 62 && i === 4 ? (e.consume(O), ne) : O === 63 && i === 3 ? (e.consume(O), _) : O === 93 && i === 5 ? (e.consume(O), ee) : we(O) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Hz, ae, j)(O)) : O === null || we(O) ? (e.exit("htmlFlowData"), j(O)) : (e.consume(O), K)
    }

    function j(O) {
        return e.check(Wz, U, ae)(O)
    }

    function U(O) {
        return e.enter("lineEnding"), e.consume(O), e.exit("lineEnding"), J
    }

    function J(O) {
        return O === null || we(O) ? j(O) : (e.enter("htmlFlowData"), K(O))
    }

    function oe(O) {
        return O === 45 ? (e.consume(O), _) : K(O)
    }

    function le(O) {
        return O === 47 ? (e.consume(O), s = "", W) : K(O)
    }

    function W(O) {
        if (O === 62) {
            const de = s.toLowerCase();
            return Ux.includes(de) ? (e.consume(O), ne) : K(O)
        }
        return Br(O) && s.length < 8 ? (e.consume(O), s += String.fromCharCode(O), W) : K(O)
    }

    function ee(O) {
        return O === 93 ? (e.consume(O), _) : K(O)
    }

    function _(O) {
        return O === 62 ? (e.consume(O), ne) : O === 45 && i === 2 ? (e.consume(O), _) : K(O)
    }

    function ne(O) {
        return O === null || we(O) ? (e.exit("htmlFlowData"), ae(O)) : (e.consume(O), ne)
    }

    function ae(O) {
        return e.exit("htmlFlow"), t(O)
    }
}

function Gz(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return we(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), l) : n(s)
    }

    function l(s) {
        return r.parser.lazy[r.now().line] ? n(s) : t(s)
    }
}

function Kz(e, t, n) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Kf, t, n)
    }
}
const Qz = {
    name: "htmlText",
    tokenize: Yz
};

function Yz(e, t, n) {
    const r = this;
    let i, l, s;
    return a;

    function a(_) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(_), f
    }

    function f(_) {
        return _ === 33 ? (e.consume(_), d) : _ === 47 ? (e.consume(_), N) : _ === 63 ? (e.consume(_), k) : Br(_) ? (e.consume(_), z) : n(_)
    }

    function d(_) {
        return _ === 45 ? (e.consume(_), p) : _ === 91 ? (e.consume(_), l = 0, E) : Br(_) ? (e.consume(_), x) : n(_)
    }

    function p(_) {
        return _ === 45 ? (e.consume(_), m) : n(_)
    }

    function g(_) {
        return _ === null ? n(_) : _ === 45 ? (e.consume(_), v) : we(_) ? (s = g, le(_)) : (e.consume(_), g)
    }

    function v(_) {
        return _ === 45 ? (e.consume(_), m) : g(_)
    }

    function m(_) {
        return _ === 62 ? oe(_) : _ === 45 ? v(_) : g(_)
    }

    function E(_) {
        const ne = "CDATA[";
        return _ === ne.charCodeAt(l++) ? (e.consume(_), l === ne.length ? S : E) : n(_)
    }

    function S(_) {
        return _ === null ? n(_) : _ === 93 ? (e.consume(_), A) : we(_) ? (s = S, le(_)) : (e.consume(_), S)
    }

    function A(_) {
        return _ === 93 ? (e.consume(_), y) : S(_)
    }

    function y(_) {
        return _ === 62 ? oe(_) : _ === 93 ? (e.consume(_), y) : S(_)
    }

    function x(_) {
        return _ === null || _ === 62 ? oe(_) : we(_) ? (s = x, le(_)) : (e.consume(_), x)
    }

    function k(_) {
        return _ === null ? n(_) : _ === 63 ? (e.consume(_), P) : we(_) ? (s = k, le(_)) : (e.consume(_), k)
    }

    function P(_) {
        return _ === 62 ? oe(_) : k(_)
    }

    function N(_) {
        return Br(_) ? (e.consume(_), T) : n(_)
    }

    function T(_) {
        return _ === 45 || Fn(_) ? (e.consume(_), T) : F(_)
    }

    function F(_) {
        return we(_) ? (s = F, le(_)) : Ve(_) ? (e.consume(_), F) : oe(_)
    }

    function z(_) {
        return _ === 45 || Fn(_) ? (e.consume(_), z) : _ === 47 || _ === 62 || Cn(_) ? q(_) : n(_)
    }

    function q(_) {
        return _ === 47 ? (e.consume(_), oe) : _ === 58 || _ === 95 || Br(_) ? (e.consume(_), Q) : we(_) ? (s = q, le(_)) : Ve(_) ? (e.consume(_), q) : oe(_)
    }

    function Q(_) {
        return _ === 45 || _ === 46 || _ === 58 || _ === 95 || Fn(_) ? (e.consume(_), Q) : B(_)
    }

    function B(_) {
        return _ === 61 ? (e.consume(_), K) : we(_) ? (s = B, le(_)) : Ve(_) ? (e.consume(_), B) : q(_)
    }

    function K(_) {
        return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96 ? n(_) : _ === 34 || _ === 39 ? (e.consume(_), i = _, j) : we(_) ? (s = K, le(_)) : Ve(_) ? (e.consume(_), K) : (e.consume(_), U)
    }

    function j(_) {
        return _ === i ? (e.consume(_), i = void 0, J) : _ === null ? n(_) : we(_) ? (s = j, le(_)) : (e.consume(_), j)
    }

    function U(_) {
        return _ === null || _ === 34 || _ === 39 || _ === 60 || _ === 61 || _ === 96 ? n(_) : _ === 47 || _ === 62 || Cn(_) ? q(_) : (e.consume(_), U)
    }

    function J(_) {
        return _ === 47 || _ === 62 || Cn(_) ? q(_) : n(_)
    }

    function oe(_) {
        return _ === 62 ? (e.consume(_), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(_)
    }

    function le(_) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), W
    }

    function W(_) {
        return Ve(_) ? it(e, ee, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(_) : ee(_)
    }

    function ee(_) {
        return e.enter("htmlTextData"), s(_)
    }
}
const _v = {
        name: "labelEnd",
        tokenize: n$,
        resolveTo: t$,
        resolveAll: e$
    },
    Xz = {
        tokenize: r$
    },
    Zz = {
        tokenize: i$
    },
    Jz = {
        tokenize: o$
    };

function e$(e) {
    let t = -1;
    for (; ++t < e.length;) {
        const n = e[t][1];
        (n.type === "labelImage" || n.type === "labelLink" || n.type === "labelEnd") && (e.splice(t + 1, n.type === "labelImage" ? 4 : 2), n.type = "data", t++)
    }
    return e
}

function t$(e, t) {
    let n = e.length,
        r = 0,
        i, l, s, a;
    for (; n--;)
        if (i = e[n][1], l) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (s) {
        if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = n, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (s = n);
    const f = {
            type: e[l][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        },
        d = {
            type: "label",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[s][1].end)
        },
        p = {
            type: "labelText",
            start: Object.assign({}, e[l + r + 2][1].end),
            end: Object.assign({}, e[s - 2][1].start)
        };
    return a = [
        ["enter", f, t],
        ["enter", d, t]
    ], a = ur(a, e.slice(l + 1, l + r + 3)), a = ur(a, [
        ["enter", p, t]
    ]), a = ur(a, kv(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, s - 3), t)), a = ur(a, [
        ["exit", p, t], e[s - 2], e[s - 1],
        ["exit", d, t]
    ]), a = ur(a, e.slice(s + 1)), a = ur(a, [
        ["exit", f, t]
    ]), Wr(e, l, e.length, a), e
}

function n$(e, t, n) {
    const r = this;
    let i = r.events.length,
        l, s;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            l = r.events[i][1];
            break
        } return a;

    function a(v) {
        return l ? l._inactive ? g(v) : (s = r.parser.defined.includes(zl(r.sliceSerialize({
            start: l.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(v), e.exit("labelMarker"), e.exit("labelEnd"), f) : n(v)
    }

    function f(v) {
        return v === 40 ? e.attempt(Xz, p, s ? p : g)(v) : v === 91 ? e.attempt(Zz, p, s ? d : g)(v) : s ? p(v) : g(v)
    }

    function d(v) {
        return e.attempt(Jz, p, g)(v)
    }

    function p(v) {
        return t(v)
    }

    function g(v) {
        return l._balanced = !0, n(v)
    }
}

function r$(e, t, n) {
    return r;

    function r(g) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), i
    }

    function i(g) {
        return Cn(g) ? ts(e, l)(g) : l(g)
    }

    function l(g) {
        return g === 41 ? p(g) : gb(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g)
    }

    function s(g) {
        return Cn(g) ? ts(e, f)(g) : p(g)
    }

    function a(g) {
        return n(g)
    }

    function f(g) {
        return g === 34 || g === 39 || g === 40 ? vb(e, d, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : p(g)
    }

    function d(g) {
        return Cn(g) ? ts(e, p)(g) : p(g)
    }

    function p(g) {
        return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : n(g)
    }
}

function i$(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return mb.call(r, e, l, s, "reference", "referenceMarker", "referenceString")(a)
    }

    function l(a) {
        return r.parser.defined.includes(zl(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a)
    }

    function s(a) {
        return n(a)
    }
}

function o$(e, t, n) {
    return r;

    function r(l) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i
    }

    function i(l) {
        return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l)
    }
}
const l$ = {
    name: "labelStartImage",
    tokenize: u$,
    resolveAll: _v.resolveAll
};

function u$(e, t, n) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l
    }

    function l(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a)
    }

    function s(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a)
    }
}
const s$ = {
    name: "labelStartLink",
    tokenize: a$,
    resolveAll: _v.resolveAll
};

function a$(e, t, n) {
    const r = this;
    return i;

    function i(s) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), l
    }

    function l(s) {
        return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s)
    }
}
const yh = {
    name: "lineEnding",
    tokenize: c$
};

function c$(e, t) {
    return n;

    function n(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), it(e, t, "linePrefix")
    }
}
const sc = {
    name: "thematicBreak",
    tokenize: f$
};

function f$(e, t, n) {
    let r = 0,
        i;
    return l;

    function l(d) {
        return e.enter("thematicBreak"), s(d)
    }

    function s(d) {
        return i = d, a(d)
    }

    function a(d) {
        return d === i ? (e.enter("thematicBreakSequence"), f(d)) : r >= 3 && (d === null || we(d)) ? (e.exit("thematicBreak"), t(d)) : n(d)
    }

    function f(d) {
        return d === i ? (e.consume(d), r++, f) : (e.exit("thematicBreakSequence"), Ve(d) ? it(e, a, "whitespace")(d) : a(d))
    }
}
const mn = {
        name: "list",
        tokenize: h$,
        continuation: {
            tokenize: g$
        },
        exit: v$
    },
    d$ = {
        tokenize: y$,
        partial: !0
    },
    p$ = {
        tokenize: m$,
        partial: !0
    };

function h$(e, t, n) {
    const r = this,
        i = r.events[r.events.length - 1];
    let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        s = 0;
    return a;

    function a(m) {
        const E = r.containerState.type || (m === 42 || m === 43 || m === 45 ? "listUnordered" : "listOrdered");
        if (E === "listUnordered" ? !r.containerState.marker || m === r.containerState.marker : Mg(m)) {
            if (r.containerState.type || (r.containerState.type = E, e.enter(E, {
                    _container: !0
                })), E === "listUnordered") return e.enter("listItemPrefix"), m === 42 || m === 45 ? e.check(sc, n, d)(m) : d(m);
            if (!r.interrupt || m === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), f(m)
        }
        return n(m)
    }

    function f(m) {
        return Mg(m) && ++s < 10 ? (e.consume(m), f) : (!r.interrupt || s < 2) && (r.containerState.marker ? m === r.containerState.marker : m === 41 || m === 46) ? (e.exit("listItemValue"), d(m)) : n(m)
    }

    function d(m) {
        return e.enter("listItemMarker"), e.consume(m), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || m, e.check(Kf, r.interrupt ? n : p, e.attempt(d$, v, g))
    }

    function p(m) {
        return r.containerState.initialBlankLine = !0, l++, v(m)
    }

    function g(m) {
        return Ve(m) ? (e.enter("listItemPrefixWhitespace"), e.consume(m), e.exit("listItemPrefixWhitespace"), v) : n(m)
    }

    function v(m) {
        return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(m)
    }
}

function g$(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(Kf, i, l);

    function i(a) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, it(e, t, "listItemIndent", r.containerState.size + 1)(a)
    }

    function l(a) {
        return r.containerState.furtherBlankLines || !Ve(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(p$, t, s)(a))
    }

    function s(a) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, it(e, e.attempt(mn, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
    }
}

function m$(e, t, n) {
    const r = this;
    return it(e, i, "listItemIndent", r.containerState.size + 1);

    function i(l) {
        const s = r.events[r.events.length - 1];
        return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], !0).length === r.containerState.size ? t(l) : n(l)
    }
}

function v$(e) {
    e.exit(this.containerState.type)
}

function y$(e, t, n) {
    const r = this;
    return it(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1);

    function i(l) {
        const s = r.events[r.events.length - 1];
        return !Ve(l) && s && s[1].type === "listItemPrefixWhitespace" ? t(l) : n(l)
    }
}
const jx = {
    name: "setextUnderline",
    tokenize: x$,
    resolveTo: w$
};

function w$(e, t) {
    let n = e.length,
        r, i, l;
    for (; n--;)
        if (e[n][0] === "enter") {
            if (e[n][1].type === "content") {
                r = n;
                break
            }
            e[n][1].type === "paragraph" && (i = n)
        } else e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
    const s = {
        type: "setextHeading",
        start: Object.assign({}, e[i][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    };
    return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", s, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), e[r][1].end = Object.assign({}, e[l][1].end)) : e[r][1] = s, e.push(["exit", s, t]), e
}

function x$(e, t, n) {
    const r = this;
    let i;
    return l;

    function l(d) {
        let p = r.events.length,
            g;
        for (; p--;)
            if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
                g = r.events[p][1].type === "paragraph";
                break
            } return !r.parser.lazy[r.now().line] && (r.interrupt || g) ? (e.enter("setextHeadingLine"), i = d, s(d)) : n(d)
    }

    function s(d) {
        return e.enter("setextHeadingLineSequence"), a(d)
    }

    function a(d) {
        return d === i ? (e.consume(d), a) : (e.exit("setextHeadingLineSequence"), Ve(d) ? it(e, f, "lineSuffix")(d) : f(d))
    }

    function f(d) {
        return d === null || we(d) ? (e.exit("setextHeadingLine"), t(d)) : n(d)
    }
}
const S$ = {
    tokenize: E$
};

function E$(e) {
    const t = this,
        n = e.attempt(Kf, r, e.attempt(this.parser.constructs.flowInitial, i, it(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Oz, i)), "linePrefix")));
    return n;

    function r(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
    }

    function i(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t.currentConstruct = void 0, n
    }
}
const C$ = {
        resolveAll: wb()
    },
    k$ = yb("string"),
    b$ = yb("text");

function yb(e) {
    return {
        tokenize: t,
        resolveAll: wb(e === "text" ? _$ : void 0)
    };

    function t(n) {
        const r = this,
            i = this.parser.constructs[e],
            l = n.attempt(i, s, a);
        return s;

        function s(p) {
            return d(p) ? l(p) : a(p)
        }

        function a(p) {
            if (p === null) {
                n.consume(p);
                return
            }
            return n.enter("data"), n.consume(p), f
        }

        function f(p) {
            return d(p) ? (n.exit("data"), l(p)) : (n.consume(p), f)
        }

        function d(p) {
            if (p === null) return !0;
            const g = i[p];
            let v = -1;
            if (g)
                for (; ++v < g.length;) {
                    const m = g[v];
                    if (!m.previous || m.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function wb(e) {
    return t;

    function t(n, r) {
        let i = -1,
            l;
        for (; ++i <= n.length;) l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
        return e ? e(n, r) : n
    }
}

function _$(e, t) {
    let n = 0;
    for (; ++n <= e.length;)
        if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
            const r = e[n - 1][1],
                i = t.sliceStream(r);
            let l = i.length,
                s = -1,
                a = 0,
                f;
            for (; l--;) {
                const d = i[l];
                if (typeof d == "string") {
                    for (s = d.length; d.charCodeAt(s - 1) === 32;) a++, s--;
                    if (s) break;
                    s = -1
                } else if (d === -2) f = !0, a++;
                else if (d !== -1) {
                    l++;
                    break
                }
            }
            if (a) {
                const d = {
                    type: n === e.length || f || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a,
                        _index: r.start._index + l,
                        _bufferIndex: l ? s : r.start._bufferIndex + s
                    },
                    end: Object.assign({}, r.end)
                };
                r.end = Object.assign({}, d.start), r.start.offset === r.end.offset ? Object.assign(r, d) : (e.splice(n, 0, ["enter", d, t], ["exit", d, t]), n += 2)
            }
            n++
        } return e
}

function O$(e, t, n) {
    let r = Object.assign(n ? Object.assign({}, n) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const i = {},
        l = [];
    let s = [],
        a = [];
    const f = {
            consume: x,
            enter: k,
            exit: P,
            attempt: F(N),
            check: F(T),
            interrupt: F(T, {
                interrupt: !0
            })
        },
        d = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: m,
            sliceSerialize: v,
            now: E,
            defineSkip: S,
            write: g
        };
    let p = t.tokenize.call(d, f);
    return t.resolveAll && l.push(t), d;

    function g(B) {
        return s = ur(s, B), A(), s[s.length - 1] !== null ? [] : (z(t, 0), d.events = kv(l, d.events, d), d.events)
    }

    function v(B, K) {
        return I$(m(B), K)
    }

    function m(B) {
        return T$(s, B)
    }

    function E() {
        const {
            line: B,
            column: K,
            offset: j,
            _index: U,
            _bufferIndex: J
        } = r;
        return {
            line: B,
            column: K,
            offset: j,
            _index: U,
            _bufferIndex: J
        }
    }

    function S(B) {
        i[B.line] = B.column, Q()
    }

    function A() {
        let B;
        for (; r._index < s.length;) {
            const K = s[r._index];
            if (typeof K == "string")
                for (B = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === B && r._bufferIndex < K.length;) y(K.charCodeAt(r._bufferIndex));
            else y(K)
        }
    }

    function y(B) {
        p = p(B)
    }

    function x(B) {
        we(B) ? (r.line++, r.column = 1, r.offset += B === -3 ? 2 : 1, Q()) : B !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), d.previous = B
    }

    function k(B, K) {
        const j = K || {};
        return j.type = B, j.start = E(), d.events.push(["enter", j, d]), a.push(j), j
    }

    function P(B) {
        const K = a.pop();
        return K.end = E(), d.events.push(["exit", K, d]), K
    }

    function N(B, K) {
        z(B, K.from)
    }

    function T(B, K) {
        K.restore()
    }

    function F(B, K) {
        return j;

        function j(U, J, oe) {
            let le, W, ee, _;
            return Array.isArray(U) ? ae(U) : "tokenize" in U ? ae([U]) : ne(U);

            function ne(me) {
                return De;

                function De(xe) {
                    const Fe = xe !== null && me[xe],
                        Ie = xe !== null && me.null,
                        Ue = [...Array.isArray(Fe) ? Fe : Fe ? [Fe] : [], ...Array.isArray(Ie) ? Ie : Ie ? [Ie] : []];
                    return ae(Ue)(xe)
                }
            }

            function ae(me) {
                return le = me, W = 0, me.length === 0 ? oe : O(me[W])
            }

            function O(me) {
                return De;

                function De(xe) {
                    return _ = q(), ee = me, me.partial || (d.currentConstruct = me), me.name && d.parser.constructs.disable.null.includes(me.name) ? Pe() : me.tokenize.call(K ? Object.assign(Object.create(d), K) : d, f, de, Pe)(xe)
                }
            }

            function de(me) {
                return B(ee, _), J
            }

            function Pe(me) {
                return _.restore(), ++W < le.length ? O(le[W]) : oe
            }
        }
    }

    function z(B, K) {
        B.resolveAll && !l.includes(B) && l.push(B), B.resolve && Wr(d.events, K, d.events.length - K, B.resolve(d.events.slice(K), d)), B.resolveTo && (d.events = B.resolveTo(d.events, d))
    }

    function q() {
        const B = E(),
            K = d.previous,
            j = d.currentConstruct,
            U = d.events.length,
            J = Array.from(a);
        return {
            restore: oe,
            from: U
        };

        function oe() {
            r = B, d.previous = K, d.currentConstruct = j, d.events.length = U, a = J, Q()
        }
    }

    function Q() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function T$(e, t) {
    const n = t.start._index,
        r = t.start._bufferIndex,
        i = t.end._index,
        l = t.end._bufferIndex;
    let s;
    if (n === i) s = [e[n].slice(r, l)];
    else {
        if (s = e.slice(n, i), r > -1) {
            const a = s[0];
            typeof a == "string" ? s[0] = a.slice(r) : s.shift()
        }
        l > 0 && s.push(e[i].slice(0, l))
    }
    return s
}

function I$(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length;) {
        const l = e[n];
        let s;
        if (typeof l == "string") s = l;
        else switch (l) {
            case -5: {
                s = "\r";
                break
            }
            case -4: {
                s = `
`;
                break
            }
            case -3: {
                s = `\r
`;
                break
            }
            case -2: {
                s = t ? " " : "	";
                break
            }
            case -1: {
                if (!t && i) continue;
                s = " ";
                break
            }
            default:
                s = String.fromCharCode(l)
        }
        i = l === -2, r.push(s)
    }
    return r.join("")
}
const R$ = {
        42: mn,
        43: mn,
        45: mn,
        48: mn,
        49: mn,
        50: mn,
        51: mn,
        52: mn,
        53: mn,
        54: mn,
        55: mn,
        56: mn,
        57: mn,
        62: fb
    },
    P$ = {
        91: Az
    },
    A$ = {
        [-2]: vh,
        [-1]: vh,
        32: vh
    },
    D$ = {
        35: zz,
        42: sc,
        45: [jx, sc],
        60: jz,
        61: jx,
        95: sc,
        96: Bx,
        126: Bx
    },
    N$ = {
        38: pb,
        92: db
    },
    M$ = {
        [-5]: yh,
        [-4]: yh,
        [-3]: yh,
        33: l$,
        38: pb,
        42: Lg,
        60: [az, Qz],
        91: s$,
        92: [Lz, db],
        93: _v,
        95: Lg,
        96: Ez
    },
    L$ = {
        null: [Lg, C$]
    },
    F$ = {
        null: [42, 95]
    },
    z$ = {
        null: []
    },
    $$ = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: F$,
        contentInitial: P$,
        disable: z$,
        document: R$,
        flow: D$,
        flowInitial: A$,
        insideSpan: L$,
        string: N$,
        text: M$
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function B$(e) {
    const n = G5([$$, ...(e || {}).extensions || []]),
        r = {
            defined: [],
            lazy: {},
            constructs: n,
            content: i(nz),
            document: i(iz),
            flow: i(S$),
            string: i(k$),
            text: i(b$)
        };
    return r;

    function i(l) {
        return s;

        function s(a) {
            return O$(r, l, a)
        }
    }
}
const Hx = /[\0\t\n\r]/g;

function U$() {
    let e = 1,
        t = "",
        n = !0,
        r;
    return i;

    function i(l, s, a) {
        const f = [];
        let d, p, g, v, m;
        for (l = t + l.toString(s), g = 0, t = "", n && (l.charCodeAt(0) === 65279 && g++, n = void 0); g < l.length;) {
            if (Hx.lastIndex = g, d = Hx.exec(l), v = d && d.index !== void 0 ? d.index : l.length, m = l.charCodeAt(v), !d) {
                t = l.slice(g);
                break
            }
            if (m === 10 && g === v && r) f.push(-3), r = void 0;
            else switch (r && (f.push(-5), r = void 0), g < v && (f.push(l.slice(g, v)), e += v - g), m) {
                case 0: {
                    f.push(65533), e++;
                    break
                }
                case 9: {
                    for (p = Math.ceil(e / 4) * 4, f.push(-2); e++ < p;) f.push(-1);
                    break
                }
                case 10: {
                    f.push(-4), e = 1;
                    break
                }
                default:
                    r = !0, e = 1
            }
            g = v + 1
        }
        return a && (r && f.push(-5), t && f.push(t), f.push(null)), f
    }
}

function j$(e) {
    for (; !hb(e););
    return e
}

function xb(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
}
const H$ = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function W$(e) {
    return e.replace(H$, V$)
}

function V$(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
        const i = n.charCodeAt(1),
            l = i === 120 || i === 88;
        return xb(n.slice(l ? 2 : 1), l ? 16 : 10)
    }
    return bv(n) || e
}
const Sb = {}.hasOwnProperty,
    q$ = function(e, t, n) {
        return typeof t != "string" && (n = t, t = void 0), G$(n)(j$(B$(n).document().write(U$()(e, t, !0))))
    };

function G$(e) {
    const t = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: a(bn),
            autolinkProtocol: B,
            autolinkEmail: B,
            atxHeading: a(he),
            blockQuote: a(Ue),
            characterEscape: B,
            characterReference: B,
            codeFenced: a(ze),
            codeFencedFenceInfo: f,
            codeFencedFenceMeta: f,
            codeIndented: a(ze, f),
            codeText: a(Ge, f),
            codeTextData: B,
            data: B,
            codeFlowValue: B,
            definition: a(wt),
            definitionDestinationString: f,
            definitionLabelString: f,
            definitionTitleString: f,
            emphasis: a(Gn),
            hardBreakEscape: a(at),
            hardBreakTrailing: a(at),
            htmlFlow: a(Lt, f),
            htmlFlowData: B,
            htmlText: a(Lt, f),
            htmlTextData: B,
            image: a(kn),
            label: f,
            link: a(bn),
            listItem: a(Rr),
            listItemValue: E,
            listOrdered: a(Ht, m),
            listUnordered: a(Ht),
            paragraph: a(Vr),
            reference: Pe,
            referenceString: f,
            resourceDestinationString: f,
            resourceTitleString: f,
            setextHeading: a(he),
            strong: a(Ko),
            thematicBreak: a(Kn)
        },
        exit: {
            atxHeading: p(),
            atxHeadingSequence: F,
            autolink: p(),
            autolinkEmail: Ie,
            autolinkProtocol: Fe,
            blockQuote: p(),
            characterEscapeValue: K,
            characterReferenceMarkerHexadecimal: De,
            characterReferenceMarkerNumeric: De,
            characterReferenceValue: xe,
            codeFenced: p(x),
            codeFencedFence: y,
            codeFencedFenceInfo: S,
            codeFencedFenceMeta: A,
            codeFlowValue: K,
            codeIndented: p(k),
            codeText: p(le),
            codeTextData: K,
            data: K,
            definition: p(),
            definitionDestinationString: T,
            definitionLabelString: P,
            definitionTitleString: N,
            emphasis: p(),
            hardBreakEscape: p(U),
            hardBreakTrailing: p(U),
            htmlFlow: p(J),
            htmlFlowData: K,
            htmlText: p(oe),
            htmlTextData: K,
            image: p(ee),
            label: ne,
            labelText: _,
            lineEnding: j,
            link: p(W),
            listItem: p(),
            listOrdered: p(),
            listUnordered: p(),
            paragraph: p(),
            referenceString: me,
            resourceDestinationString: ae,
            resourceTitleString: O,
            resource: de,
            setextHeading: p(Q),
            setextHeadingLineSequence: q,
            setextHeadingText: z,
            strong: p(),
            thematicBreak: p()
        }
    };
    Eb(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;

    function r(V) {
        let re = {
            type: "root",
            children: []
        };
        const pe = {
                stack: [re],
                tokenStack: [],
                config: t,
                enter: d,
                exit: g,
                buffer: f,
                resume: v,
                setData: l,
                getData: s
            },
            je = [];
        let He = -1;
        for (; ++He < V.length;)
            if (V[He][1].type === "listOrdered" || V[He][1].type === "listUnordered")
                if (V[He][0] === "enter") je.push(He);
                else {
                    const tn = je.pop();
                    He = i(V, tn, He)
                } for (He = -1; ++He < V.length;) {
            const tn = t[V[He][0]];
            Sb.call(tn, V[He][1].type) && tn[V[He][1].type].call(Object.assign({
                sliceSerialize: V[He][2].sliceSerialize
            }, pe), V[He][1])
        }
        if (pe.tokenStack.length > 0) {
            const tn = pe.tokenStack[pe.tokenStack.length - 1];
            (tn[1] || Wx).call(pe, void 0, tn[0])
        }
        for (re.position = {
                start: Ii(V.length > 0 ? V[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: Ii(V.length > 0 ? V[V.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, He = -1; ++He < t.transforms.length;) re = t.transforms[He](re) || re;
        return re
    }

    function i(V, re, pe) {
        let je = re - 1,
            He = -1,
            tn = !1,
            Qn, _n, qr, Gr;
        for (; ++je <= pe;) {
            const ot = V[je];
            if (ot[1].type === "listUnordered" || ot[1].type === "listOrdered" || ot[1].type === "blockQuote" ? (ot[0] === "enter" ? He++ : He--, Gr = void 0) : ot[1].type === "lineEndingBlank" ? ot[0] === "enter" && (Qn && !Gr && !He && !qr && (qr = je), Gr = void 0) : ot[1].type === "linePrefix" || ot[1].type === "listItemValue" || ot[1].type === "listItemMarker" || ot[1].type === "listItemPrefix" || ot[1].type === "listItemPrefixWhitespace" || (Gr = void 0), !He && ot[0] === "enter" && ot[1].type === "listItemPrefix" || He === -1 && ot[0] === "exit" && (ot[1].type === "listUnordered" || ot[1].type === "listOrdered")) {
                if (Qn) {
                    let lu = je;
                    for (_n = void 0; lu--;) {
                        const vr = V[lu];
                        if (vr[1].type === "lineEnding" || vr[1].type === "lineEndingBlank") {
                            if (vr[0] === "exit") continue;
                            _n && (V[_n][1].type = "lineEndingBlank", tn = !0), vr[1].type = "lineEnding", _n = lu
                        } else if (!(vr[1].type === "linePrefix" || vr[1].type === "blockQuotePrefix" || vr[1].type === "blockQuotePrefixWhitespace" || vr[1].type === "blockQuoteMarker" || vr[1].type === "listItemIndent")) break
                    }
                    qr && (!_n || qr < _n) && (Qn._spread = !0), Qn.end = Object.assign({}, _n ? V[_n][1].start : ot[1].end), V.splice(_n || je, 0, ["exit", Qn, ot[2]]), je++, pe++
                }
                ot[1].type === "listItemPrefix" && (Qn = {
                    type: "listItem",
                    _spread: !1,
                    start: Object.assign({}, ot[1].start),
                    end: void 0
                }, V.splice(je, 0, ["enter", Qn, ot[2]]), je++, pe++, qr = void 0, Gr = !0)
            }
        }
        return V[re][1]._spread = tn, pe
    }

    function l(V, re) {
        n[V] = re
    }

    function s(V) {
        return n[V]
    }

    function a(V, re) {
        return pe;

        function pe(je) {
            d.call(this, V(je), je), re && re.call(this, je)
        }
    }

    function f() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function d(V, re, pe) {
        return this.stack[this.stack.length - 1].children.push(V), this.stack.push(V), this.tokenStack.push([re, pe]), V.position = {
            start: Ii(re.start)
        }, V
    }

    function p(V) {
        return re;

        function re(pe) {
            V && V.call(this, pe), g.call(this, pe)
        }
    }

    function g(V, re) {
        const pe = this.stack.pop(),
            je = this.tokenStack.pop();
        if (je) je[0].type !== V.type && (re ? re.call(this, V, je[0]) : (je[1] || Wx).call(this, V, je[0]));
        else throw new Error("Cannot close `" + V.type + "` (" + es({
            start: V.start,
            end: V.end
        }) + "): it’s not open");
        return pe.position.end = Ii(V.end), pe
    }

    function v() {
        return V5(this.stack.pop())
    }

    function m() {
        l("expectingFirstListItemValue", !0)
    }

    function E(V) {
        if (s("expectingFirstListItemValue")) {
            const re = this.stack[this.stack.length - 2];
            re.start = Number.parseInt(this.sliceSerialize(V), 10), l("expectingFirstListItemValue")
        }
    }

    function S() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.lang = V
    }

    function A() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.meta = V
    }

    function y() {
        s("flowCodeInside") || (this.buffer(), l("flowCodeInside", !0))
    }

    function x() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), l("flowCodeInside")
    }

    function k() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V.replace(/(\r?\n|\r)$/g, "")
    }

    function P(V) {
        const re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        pe.label = re, pe.identifier = zl(this.sliceSerialize(V)).toLowerCase()
    }

    function N() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.title = V
    }

    function T() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.url = V
    }

    function F(V) {
        const re = this.stack[this.stack.length - 1];
        if (!re.depth) {
            const pe = this.sliceSerialize(V).length;
            re.depth = pe
        }
    }

    function z() {
        l("setextHeadingSlurpLineEnding", !0)
    }

    function q(V) {
        const re = this.stack[this.stack.length - 1];
        re.depth = this.sliceSerialize(V).charCodeAt(0) === 61 ? 1 : 2
    }

    function Q() {
        l("setextHeadingSlurpLineEnding")
    }

    function B(V) {
        const re = this.stack[this.stack.length - 1];
        let pe = re.children[re.children.length - 1];
        (!pe || pe.type !== "text") && (pe = Pr(), pe.position = {
            start: Ii(V.start)
        }, re.children.push(pe)), this.stack.push(pe)
    }

    function K(V) {
        const re = this.stack.pop();
        re.value += this.sliceSerialize(V), re.position.end = Ii(V.end)
    }

    function j(V) {
        const re = this.stack[this.stack.length - 1];
        if (s("atHardBreak")) {
            const pe = re.children[re.children.length - 1];
            pe.position.end = Ii(V.end), l("atHardBreak");
            return
        }!s("setextHeadingSlurpLineEnding") && t.canContainEols.includes(re.type) && (B.call(this, V), K.call(this, V))
    }

    function U() {
        l("atHardBreak", !0)
    }

    function J() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function oe() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function le() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.value = V
    }

    function W() {
        const V = this.stack[this.stack.length - 1];
        if (s("inReference")) {
            const re = s("referenceType") || "shortcut";
            V.type += "Reference", V.referenceType = re, delete V.url, delete V.title
        } else delete V.identifier, delete V.label;
        l("referenceType")
    }

    function ee() {
        const V = this.stack[this.stack.length - 1];
        if (s("inReference")) {
            const re = s("referenceType") || "shortcut";
            V.type += "Reference", V.referenceType = re, delete V.url, delete V.title
        } else delete V.identifier, delete V.label;
        l("referenceType")
    }

    function _(V) {
        const re = this.sliceSerialize(V),
            pe = this.stack[this.stack.length - 2];
        pe.label = W$(re), pe.identifier = zl(re).toLowerCase()
    }

    function ne() {
        const V = this.stack[this.stack.length - 1],
            re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        if (l("inReference", !0), pe.type === "link") {
            const je = V.children;
            pe.children = je
        } else pe.alt = re
    }

    function ae() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.url = V
    }

    function O() {
        const V = this.resume(),
            re = this.stack[this.stack.length - 1];
        re.title = V
    }

    function de() {
        l("inReference")
    }

    function Pe() {
        l("referenceType", "collapsed")
    }

    function me(V) {
        const re = this.resume(),
            pe = this.stack[this.stack.length - 1];
        pe.label = re, pe.identifier = zl(this.sliceSerialize(V)).toLowerCase(), l("referenceType", "full")
    }

    function De(V) {
        l("characterReferenceType", V.type)
    }

    function xe(V) {
        const re = this.sliceSerialize(V),
            pe = s("characterReferenceType");
        let je;
        pe ? (je = xb(re, pe === "characterReferenceMarkerNumeric" ? 10 : 16), l("characterReferenceType")) : je = bv(re);
        const He = this.stack.pop();
        He.value += je, He.position.end = Ii(V.end)
    }

    function Fe(V) {
        K.call(this, V);
        const re = this.stack[this.stack.length - 1];
        re.url = this.sliceSerialize(V)
    }

    function Ie(V) {
        K.call(this, V);
        const re = this.stack[this.stack.length - 1];
        re.url = "mailto:" + this.sliceSerialize(V)
    }

    function Ue() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function ze() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function Ge() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function wt() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function Gn() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function he() {
        return {
            type: "heading",
            depth: void 0,
            children: []
        }
    }

    function at() {
        return {
            type: "break"
        }
    }

    function Lt() {
        return {
            type: "html",
            value: ""
        }
    }

    function kn() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function bn() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Ht(V) {
        return {
            type: "list",
            ordered: V.type === "listOrdered",
            start: null,
            spread: V._spread,
            children: []
        }
    }

    function Rr(V) {
        return {
            type: "listItem",
            spread: V._spread,
            checked: null,
            children: []
        }
    }

    function Vr() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function Ko() {
        return {
            type: "strong",
            children: []
        }
    }

    function Pr() {
        return {
            type: "text",
            value: ""
        }
    }

    function Kn() {
        return {
            type: "thematicBreak"
        }
    }
}

function Ii(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function Eb(e, t) {
    let n = -1;
    for (; ++n < t.length;) {
        const r = t[n];
        Array.isArray(r) ? Eb(e, r) : K$(e, r)
    }
}

function K$(e, t) {
    let n;
    for (n in t)
        if (Sb.call(t, n)) {
            if (n === "canContainEols") {
                const r = t[n];
                r && e[n].push(...r)
            } else if (n === "transforms") {
                const r = t[n];
                r && e[n].push(...r)
            } else if (n === "enter" || n === "exit") {
                const r = t[n];
                r && Object.assign(e[n], r)
            }
        }
}

function Wx(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + es({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + t.type + "`, " + es({
        start: t.start,
        end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + es({
        start: t.start,
        end: t.end
    }) + ") is still open")
}

function Q$(e) {
    Object.assign(this, {
        Parser: n => {
            const r = this.data("settings");
            return q$(n, Object.assign({}, r, e, {
                extensions: this.data("micromarkExtensions") || [],
                mdastExtensions: this.data("fromMarkdownExtensions") || []
            }))
        }
    })
}

function Y$(e, t) {
    const n = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(t), !0)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function X$(e, t) {
    const n = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(t, n), [e.applyData(t, n), {
        type: "text",
        value: `
`
    }]
}

function Z$(e, t) {
    const n = t.value ? t.value + `
` : "",
        r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null,
        i = {};
    r && (i.className = ["language-" + r]);
    let l = {
        type: "element",
        tagName: "code",
        properties: i,
        children: [{
            type: "text",
            value: n
        }]
    };
    return t.meta && (l.data = {
        meta: t.meta
    }), e.patch(t, l), l = e.applyData(t, l), l = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [l]
    }, e.patch(t, l), l
}

function J$(e, t) {
    const n = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function e8(e, t) {
    const n = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function iu(e) {
    const t = [];
    let n = -1,
        r = 0,
        i = 0;
    for (; ++n < e.length;) {
        const l = e.charCodeAt(n);
        let s = "";
        if (l === 37 && Fn(e.charCodeAt(n + 1)) && Fn(e.charCodeAt(n + 2))) i = 2;
        else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (s = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
            const a = e.charCodeAt(n + 1);
            l < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(l, a), i = 1) : s = "�"
        } else s = String.fromCharCode(l);
        s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0)
    }
    return t.join("") + e.slice(r)
}

function Cb(e, t) {
    const n = String(t.identifier).toUpperCase(),
        r = iu(n.toLowerCase()),
        i = e.footnoteOrder.indexOf(n);
    let l;
    i === -1 ? (e.footnoteOrder.push(n), e.footnoteCounts[n] = 1, l = e.footnoteOrder.length) : (e.footnoteCounts[n]++, l = i + 1);
    const s = e.footnoteCounts[n],
        a = {
            type: "element",
            tagName: "a",
            properties: {
                href: "#" + e.clobberPrefix + "fn-" + r,
                id: e.clobberPrefix + "fnref-" + r + (s > 1 ? "-" + s : ""),
                dataFootnoteRef: !0,
                ariaDescribedBy: ["footnote-label"]
            },
            children: [{
                type: "text",
                value: String(l)
            }]
        };
    e.patch(t, a);
    const f = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [a]
    };
    return e.patch(t, f), e.applyData(t, f)
}

function t8(e, t) {
    const n = e.footnoteById;
    let r = 1;
    for (; r in n;) r++;
    const i = String(r);
    return n[i] = {
        type: "footnoteDefinition",
        identifier: i,
        children: [{
            type: "paragraph",
            children: t.children
        }],
        position: t.position
    }, Cb(e, {
        type: "footnoteReference",
        identifier: i,
        position: t.position
    })
}

function n8(e, t) {
    const n = {
        type: "element",
        tagName: "h" + t.depth,
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function r8(e, t) {
    if (e.dangerous) {
        const n = {
            type: "raw",
            value: t.value
        };
        return e.patch(t, n), e.applyData(t, n)
    }
    return null
}

function kb(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return {
        type: "text",
        value: "![" + t.alt + r
    };
    const i = e.all(t),
        l = i[0];
    l && l.type === "text" ? l.value = "[" + l.value : i.unshift({
        type: "text",
        value: "["
    });
    const s = i[i.length - 1];
    return s && s.type === "text" ? s.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function i8(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return kb(e, t);
    const r = {
        src: iu(n.url || ""),
        alt: t.alt
    };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = {
        type: "element",
        tagName: "img",
        properties: r,
        children: []
    };
    return e.patch(t, i), e.applyData(t, i)
}

function o8(e, t) {
    const n = {
        src: iu(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: n,
        children: []
    };
    return e.patch(t, r), e.applyData(t, r)
}

function l8(e, t) {
    const n = {
        type: "text",
        value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [n]
    };
    return e.patch(t, r), e.applyData(t, r)
}

function u8(e, t) {
    const n = e.definition(t.identifier);
    if (!n) return kb(e, t);
    const r = {
        href: iu(n.url || "")
    };
    n.title !== null && n.title !== void 0 && (r.title = n.title);
    const i = {
        type: "element",
        tagName: "a",
        properties: r,
        children: e.all(t)
    };
    return e.patch(t, i), e.applyData(t, i)
}

function s8(e, t) {
    const n = {
        href: iu(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: n,
        children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r)
}

function a8(e, t, n) {
    const r = e.all(t),
        i = n ? c8(n) : bb(t),
        l = {},
        s = [];
    if (typeof t.checked == "boolean") {
        const p = r[0];
        let g;
        p && p.type === "element" && p.tagName === "p" ? g = p : (g = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(g)), g.children.length > 0 && g.children.unshift({
            type: "text",
            value: " "
        }), g.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: t.checked,
                disabled: !0
            },
            children: []
        }), l.className = ["task-list-item"]
    }
    let a = -1;
    for (; ++a < r.length;) {
        const p = r[a];
        (i || a !== 0 || p.type !== "element" || p.tagName !== "p") && s.push({
            type: "text",
            value: `
`
        }), p.type === "element" && p.tagName === "p" && !i ? s.push(...p.children) : s.push(p)
    }
    const f = r[r.length - 1];
    f && (i || f.type !== "element" || f.tagName !== "p") && s.push({
        type: "text",
        value: `
`
    });
    const d = {
        type: "element",
        tagName: "li",
        properties: l,
        children: s
    };
    return e.patch(t, d), e.applyData(t, d)
}

function c8(e) {
    let t = !1;
    if (e.type === "list") {
        t = e.spread || !1;
        const n = e.children;
        let r = -1;
        for (; !t && ++r < n.length;) t = bb(n[r])
    }
    return t
}

function bb(e) {
    const t = e.spread;
    return t ?? e.children.length > 1
}

function f8(e, t) {
    const n = {},
        r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
        const s = r[i];
        if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
            n.className = ["contains-task-list"];
            break
        }
    }
    const l = {
        type: "element",
        tagName: t.ordered ? "ol" : "ul",
        properties: n,
        children: e.wrap(r, !0)
    };
    return e.patch(t, l), e.applyData(t, l)
}

function d8(e, t) {
    const n = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}

function p8(e, t) {
    const n = {
        type: "root",
        children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function h8(e, t) {
    const n = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const Ov = _b("start"),
    Tv = _b("end");

function g8(e) {
    return {
        start: Ov(e),
        end: Tv(e)
    }
}

function _b(e) {
    return t;

    function t(n) {
        const r = n && n.position && n.position[e] || {};
        return {
            line: r.line || null,
            column: r.column || null,
            offset: r.offset > -1 ? r.offset : null
        }
    }
}

function m8(e, t) {
    const n = e.all(t),
        r = n.shift(),
        i = [];
    if (r) {
        const s = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(t.children[0], s), i.push(s)
    }
    if (n.length > 0) {
        const s = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(n, !0)
            },
            a = Ov(t.children[1]),
            f = Tv(t.children[t.children.length - 1]);
        a.line && f.line && (s.position = {
            start: a,
            end: f
        }), i.push(s)
    }
    const l = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(t, l), e.applyData(t, l)
}

function v8(e, t, n) {
    const r = n ? n.children : void 0,
        l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td",
        s = n && n.type === "table" ? n.align : void 0,
        a = s ? s.length : t.children.length;
    let f = -1;
    const d = [];
    for (; ++f < a;) {
        const g = t.children[f],
            v = {},
            m = s ? s[f] : void 0;
        m && (v.align = m);
        let E = {
            type: "element",
            tagName: l,
            properties: v,
            children: []
        };
        g && (E.children = e.all(g), e.patch(g, E), E = e.applyData(t, E)), d.push(E)
    }
    const p = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(d, !0)
    };
    return e.patch(t, p), e.applyData(t, p)
}

function y8(e, t) {
    const n = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n)
}
const Vx = 9,
    qx = 32;

function w8(e) {
    const t = String(e),
        n = /\r?\n|\r/g;
    let r = n.exec(t),
        i = 0;
    const l = [];
    for (; r;) l.push(Gx(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return l.push(Gx(t.slice(i), i > 0, !1)), l.join("")
}

function Gx(e, t, n) {
    let r = 0,
        i = e.length;
    if (t) {
        let l = e.codePointAt(r);
        for (; l === Vx || l === qx;) r++, l = e.codePointAt(r)
    }
    if (n) {
        let l = e.codePointAt(i - 1);
        for (; l === Vx || l === qx;) i--, l = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function x8(e, t) {
    const n = {
        type: "text",
        value: w8(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n)
}

function S8(e, t) {
    const n = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(t, n), e.applyData(t, n)
}
const E8 = {
    blockquote: Y$,
    break: X$,
    code: Z$,
    delete: J$,
    emphasis: e8,
    footnoteReference: Cb,
    footnote: t8,
    heading: n8,
    html: r8,
    imageReference: i8,
    image: o8,
    inlineCode: l8,
    linkReference: u8,
    link: s8,
    listItem: a8,
    list: f8,
    paragraph: d8,
    root: p8,
    strong: h8,
    table: m8,
    tableCell: y8,
    tableRow: v8,
    text: x8,
    thematicBreak: S8,
    toml: Wa,
    yaml: Wa,
    definition: Wa,
    footnoteDefinition: Wa
};

function Wa() {
    return null
}
const Ob = function(e) {
    if (e == null) return _8;
    if (typeof e == "string") return b8(e);
    if (typeof e == "object") return Array.isArray(e) ? C8(e) : k8(e);
    if (typeof e == "function") return Qf(e);
    throw new Error("Expected function, string, or object as test")
};

function C8(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length;) t[n] = Ob(e[n]);
    return Qf(r);

    function r(...i) {
        let l = -1;
        for (; ++l < t.length;)
            if (t[l].call(this, ...i)) return !0;
        return !1
    }
}

function k8(e) {
    return Qf(t);

    function t(n) {
        let r;
        for (r in e)
            if (n[r] !== e[r]) return !1;
        return !0
    }
}

function b8(e) {
    return Qf(t);

    function t(n) {
        return n && n.type === e
    }
}

function Qf(e) {
    return t;

    function t(n, ...r) {
        return !!(n && typeof n == "object" && "type" in n && e.call(this, n, ...r))
    }
}

function _8() {
    return !0
}
const O8 = !0,
    Kx = !1,
    T8 = "skip",
    I8 = function(e, t, n, r) {
        typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null);
        const i = Ob(t),
            l = r ? -1 : 1;
        s(e, void 0, [])();

        function s(a, f, d) {
            const p = a && typeof a == "object" ? a : {};
            if (typeof p.type == "string") {
                const v = typeof p.tagName == "string" ? p.tagName : typeof p.name == "string" ? p.name : void 0;
                Object.defineProperty(g, "name", {
                    value: "node (" + (a.type + (v ? "<" + v + ">" : "")) + ")"
                })
            }
            return g;

            function g() {
                let v = [],
                    m, E, S;
                if ((!t || i(a, f, d[d.length - 1] || null)) && (v = R8(n(a, d)), v[0] === Kx)) return v;
                if (a.children && v[0] !== T8)
                    for (E = (r ? a.children.length : -1) + l, S = d.concat(a); E > -1 && E < a.children.length;) {
                        if (m = s(a.children[E], E, S)(), m[0] === Kx) return m;
                        E = typeof m[1] == "number" ? m[1] : E + l
                    }
                return v
            }
        }
    };

function R8(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [O8, e] : [e]
}
const Iv = function(e, t, n, r) {
    typeof t == "function" && typeof n != "function" && (r = n, n = t, t = null), I8(e, t, i, r);

    function i(l, s) {
        const a = s[s.length - 1];
        return n(l, a ? a.children.indexOf(l) : null, a)
    }
};

function P8(e) {
    return !e || !e.position || !e.position.start || !e.position.start.line || !e.position.start.column || !e.position.end || !e.position.end.line || !e.position.end.column
}
const Qx = {}.hasOwnProperty;

function A8(e) {
    const t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return Iv(e, "definition", r => {
        const i = Yx(r.identifier);
        i && !Qx.call(t, i) && (t[i] = r)
    }), n;

    function n(r) {
        const i = Yx(r);
        return i && Qx.call(t, i) ? t[i] : null
    }
}

function Yx(e) {
    return String(e || "").toUpperCase()
}
const Xc = {}.hasOwnProperty;

function D8(e, t) {
    const n = t || {},
        r = n.allowDangerousHtml || !1,
        i = {};
    return s.dangerous = r, s.clobberPrefix = n.clobberPrefix === void 0 || n.clobberPrefix === null ? "user-content-" : n.clobberPrefix, s.footnoteLabel = n.footnoteLabel || "Footnotes", s.footnoteLabelTagName = n.footnoteLabelTagName || "h2", s.footnoteLabelProperties = n.footnoteLabelProperties || {
        className: ["sr-only"]
    }, s.footnoteBackLabel = n.footnoteBackLabel || "Back to content", s.unknownHandler = n.unknownHandler, s.passThrough = n.passThrough, s.handlers = {
        ...E8,
        ...n.handlers
    }, s.definition = A8(e), s.footnoteById = i, s.footnoteOrder = [], s.footnoteCounts = {}, s.patch = N8, s.applyData = M8, s.one = a, s.all = f, s.wrap = F8, s.augment = l, Iv(e, "footnoteDefinition", d => {
        const p = String(d.identifier).toUpperCase();
        Xc.call(i, p) || (i[p] = d)
    }), s;

    function l(d, p) {
        if (d && "data" in d && d.data) {
            const g = d.data;
            g.hName && (p.type !== "element" && (p = {
                type: "element",
                tagName: "",
                properties: {},
                children: []
            }), p.tagName = g.hName), p.type === "element" && g.hProperties && (p.properties = {
                ...p.properties,
                ...g.hProperties
            }), "children" in p && p.children && g.hChildren && (p.children = g.hChildren)
        }
        if (d) {
            const g = "type" in d ? d : {
                position: d
            };
            P8(g) || (p.position = {
                start: Ov(g),
                end: Tv(g)
            })
        }
        return p
    }

    function s(d, p, g, v) {
        return Array.isArray(g) && (v = g, g = {}), l(d, {
            type: "element",
            tagName: p,
            properties: g || {},
            children: v || []
        })
    }

    function a(d, p) {
        return Tb(s, d, p)
    }

    function f(d) {
        return Rv(s, d)
    }
}

function N8(e, t) {
    e.position && (t.position = g8(e))
}

function M8(e, t) {
    let n = t;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            l = e.data.hProperties;
        typeof r == "string" && (n.type === "element" ? n.tagName = r : n = {
            type: "element",
            tagName: r,
            properties: {},
            children: []
        }), n.type === "element" && l && (n.properties = {
            ...n.properties,
            ...l
        }), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i)
    }
    return n
}

function Tb(e, t, n) {
    const r = t && t.type;
    if (!r) throw new Error("Expected node, got `" + t + "`");
    return Xc.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? {
        ...t,
        children: Rv(e, t)
    } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : L8(e, t)
}

function Rv(e, t) {
    const n = [];
    if ("children" in t) {
        const r = t.children;
        let i = -1;
        for (; ++i < r.length;) {
            const l = Tb(e, r[i], t);
            if (l) {
                if (i && r[i - 1].type === "break" && (!Array.isArray(l) && l.type === "text" && (l.value = l.value.replace(/^\s+/, "")), !Array.isArray(l) && l.type === "element")) {
                    const s = l.children[0];
                    s && s.type === "text" && (s.value = s.value.replace(/^\s+/, ""))
                }
                Array.isArray(l) ? n.push(...l) : n.push(l)
            }
        }
    }
    return n
}

function L8(e, t) {
    const n = t.data || {},
        r = "value" in t && !(Xc.call(n, "hProperties") || Xc.call(n, "hChildren")) ? {
            type: "text",
            value: t.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: Rv(e, t)
        };
    return e.patch(t, r), e.applyData(t, r)
}

function F8(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && n.push({
        type: "text",
        value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
        type: "text",
        value: `
`
    }), n
}

function z8(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.footnoteOrder.length;) {
        const r = e.footnoteById[e.footnoteOrder[n]];
        if (!r) continue;
        const i = e.all(r),
            l = String(r.identifier).toUpperCase(),
            s = iu(l.toLowerCase());
        let a = 0;
        const f = [];
        for (; ++a <= e.footnoteCounts[l];) {
            const g = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fnref-" + s + (a > 1 ? "-" + a : ""),
                    dataFootnoteBackref: !0,
                    className: ["data-footnote-backref"],
                    ariaLabel: e.footnoteBackLabel
                },
                children: [{
                    type: "text",
                    value: "↩"
                }]
            };
            a > 1 && g.children.push({
                type: "element",
                tagName: "sup",
                children: [{
                    type: "text",
                    value: String(a)
                }]
            }), f.length > 0 && f.push({
                type: "text",
                value: " "
            }), f.push(g)
        }
        const d = i[i.length - 1];
        if (d && d.type === "element" && d.tagName === "p") {
            const g = d.children[d.children.length - 1];
            g && g.type === "text" ? g.value += " " : d.children.push({
                type: "text",
                value: " "
            }), d.children.push(...f)
        } else i.push(...f);
        const p = {
            type: "element",
            tagName: "li",
            properties: {
                id: e.clobberPrefix + "fn-" + s
            },
            children: e.wrap(i, !0)
        };
        e.patch(r, p), t.push(p)
    }
    if (t.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: e.footnoteLabelTagName,
            properties: {
                ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: e.footnoteLabel
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(t, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}

function Ib(e, t) {
    const n = D8(e, t),
        r = n.one(e, null),
        i = z8(n);
    return i && r.children.push({
        type: "text",
        value: `
`
    }, i), Array.isArray(r) ? {
        type: "root",
        children: r
    } : r
}
const $8 = function(e, t) {
        return e && "run" in e ? U8(e, t) : j8(e || t)
    },
    B8 = $8;

function U8(e, t) {
    return (n, r, i) => {
        e.run(Ib(n, t), r, l => {
            i(l)
        })
    }
}

function j8(e) {
    return t => Ib(t, e)
}
class Ns {
    constructor(t, n, r) {
        this.property = t, this.normal = n, r && (this.space = r)
    }
}
Ns.prototype.property = {};
Ns.prototype.normal = {};
Ns.prototype.space = null;

function Rb(e, t) {
    const n = {},
        r = {};
    let i = -1;
    for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
    return new Ns(n, r, t)
}

function Fg(e) {
    return e.toLowerCase()
}
class gr {
    constructor(t, n) {
        this.property = t, this.attribute = n
    }
}
gr.prototype.space = null;
gr.prototype.boolean = !1;
gr.prototype.booleanish = !1;
gr.prototype.overloadedBoolean = !1;
gr.prototype.number = !1;
gr.prototype.commaSeparated = !1;
gr.prototype.spaceSeparated = !1;
gr.prototype.commaOrSpaceSeparated = !1;
gr.prototype.mustUseProperty = !1;
gr.prototype.defined = !1;
let H8 = 0;
const Oe = Go(),
    bt = Go(),
    Pb = Go(),
    ie = Go(),
    nt = Go(),
    $l = Go(),
    Dn = Go();

function Go() {
    return 2 ** ++H8
}
const zg = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: Oe,
        booleanish: bt,
        commaOrSpaceSeparated: Dn,
        commaSeparated: $l,
        number: ie,
        overloadedBoolean: Pb,
        spaceSeparated: nt
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wh = Object.keys(zg);
class Pv extends gr {
    constructor(t, n, r, i) {
        let l = -1;
        if (super(t, n), Xx(this, "space", i), typeof r == "number")
            for (; ++l < wh.length;) {
                const s = wh[l];
                Xx(this, wh[l], (r & zg[s]) === zg[s])
            }
    }
}
Pv.prototype.defined = !0;

function Xx(e, t, n) {
    n && (e[t] = n)
}
const W8 = {}.hasOwnProperty;

function ou(e) {
    const t = {},
        n = {};
    let r;
    for (r in e.properties)
        if (W8.call(e.properties, r)) {
            const i = e.properties[r],
                l = new Pv(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[Fg(r)] = r, n[Fg(l.attribute)] = r
        } return new Ns(t, n, e.space)
}
const Ab = ou({
        space: "xlink",
        transform(e, t) {
            return "xlink:" + t.slice(5).toLowerCase()
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    Db = ou({
        space: "xml",
        transform(e, t) {
            return "xml:" + t.slice(3).toLowerCase()
        },
        properties: {
            xmlLang: null,
            xmlBase: null,
            xmlSpace: null
        }
    });

function Nb(e, t) {
    return t in e ? e[t] : t
}

function Mb(e, t) {
    return Nb(e, t.toLowerCase())
}
const Lb = ou({
        space: "xmlns",
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        transform: Mb,
        properties: {
            xmlns: null,
            xmlnsXLink: null
        }
    }),
    Fb = ou({
        transform(e, t) {
            return t === "role" ? t : "aria-" + t.slice(4).toLowerCase()
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: bt,
            ariaAutoComplete: null,
            ariaBusy: bt,
            ariaChecked: bt,
            ariaColCount: ie,
            ariaColIndex: ie,
            ariaColSpan: ie,
            ariaControls: nt,
            ariaCurrent: null,
            ariaDescribedBy: nt,
            ariaDetails: null,
            ariaDisabled: bt,
            ariaDropEffect: nt,
            ariaErrorMessage: null,
            ariaExpanded: bt,
            ariaFlowTo: nt,
            ariaGrabbed: bt,
            ariaHasPopup: null,
            ariaHidden: bt,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: nt,
            ariaLevel: ie,
            ariaLive: null,
            ariaModal: bt,
            ariaMultiLine: bt,
            ariaMultiSelectable: bt,
            ariaOrientation: null,
            ariaOwns: nt,
            ariaPlaceholder: null,
            ariaPosInSet: ie,
            ariaPressed: bt,
            ariaReadOnly: bt,
            ariaRelevant: null,
            ariaRequired: bt,
            ariaRoleDescription: nt,
            ariaRowCount: ie,
            ariaRowIndex: ie,
            ariaRowSpan: ie,
            ariaSelected: bt,
            ariaSetSize: ie,
            ariaSort: null,
            ariaValueMax: ie,
            ariaValueMin: ie,
            ariaValueNow: ie,
            ariaValueText: null,
            role: null
        }
    }),
    V8 = ou({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: Mb,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: $l,
            acceptCharset: nt,
            accessKey: nt,
            action: null,
            allow: null,
            allowFullScreen: Oe,
            allowPaymentRequest: Oe,
            allowUserMedia: Oe,
            alt: null,
            as: null,
            async: Oe,
            autoCapitalize: null,
            autoComplete: nt,
            autoFocus: Oe,
            autoPlay: Oe,
            blocking: nt,
            capture: Oe,
            charSet: null,
            checked: Oe,
            cite: null,
            className: nt,
            cols: ie,
            colSpan: null,
            content: null,
            contentEditable: bt,
            controls: Oe,
            controlsList: nt,
            coords: ie | $l,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: Oe,
            defer: Oe,
            dir: null,
            dirName: null,
            disabled: Oe,
            download: Pb,
            draggable: bt,
            encType: null,
            enterKeyHint: null,
            fetchPriority: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: Oe,
            formTarget: null,
            headers: nt,
            height: ie,
            hidden: Oe,
            high: ie,
            href: null,
            hrefLang: null,
            htmlFor: nt,
            httpEquiv: nt,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inert: Oe,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: Oe,
            itemId: null,
            itemProp: nt,
            itemRef: nt,
            itemScope: Oe,
            itemType: nt,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: Oe,
            low: ie,
            manifest: null,
            max: null,
            maxLength: ie,
            media: null,
            method: null,
            min: null,
            minLength: ie,
            multiple: Oe,
            muted: Oe,
            name: null,
            nonce: null,
            noModule: Oe,
            noValidate: Oe,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforeMatch: null,
            onBeforePrint: null,
            onBeforeToggle: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onScrollEnd: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: Oe,
            optimum: ie,
            pattern: null,
            ping: nt,
            placeholder: null,
            playsInline: Oe,
            popover: null,
            popoverTarget: null,
            popoverTargetAction: null,
            poster: null,
            preload: null,
            readOnly: Oe,
            referrerPolicy: null,
            rel: nt,
            required: Oe,
            reversed: Oe,
            rows: ie,
            rowSpan: ie,
            sandbox: nt,
            scope: null,
            scoped: Oe,
            seamless: Oe,
            selected: Oe,
            shadowRootDelegatesFocus: Oe,
            shadowRootMode: null,
            shape: null,
            size: ie,
            sizes: null,
            slot: null,
            span: ie,
            spellCheck: bt,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: ie,
            step: null,
            style: null,
            tabIndex: ie,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: Oe,
            useMap: null,
            value: bt,
            width: ie,
            wrap: null,
            align: null,
            aLink: null,
            archive: nt,
            axis: null,
            background: null,
            bgColor: null,
            border: ie,
            borderColor: null,
            bottomMargin: ie,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: Oe,
            declare: Oe,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: ie,
            leftMargin: ie,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: ie,
            marginWidth: ie,
            noResize: Oe,
            noHref: Oe,
            noShade: Oe,
            noWrap: Oe,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: ie,
            rules: null,
            scheme: null,
            scrolling: bt,
            standby: null,
            summary: null,
            text: null,
            topMargin: ie,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: ie,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: Oe,
            disableRemotePlayback: Oe,
            prefix: null,
            property: null,
            results: ie,
            security: null,
            unselectable: null
        }
    }),
    q8 = ou({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            transformOrigin: "transform-origin",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: Nb,
        properties: {
            about: Dn,
            accentHeight: ie,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: ie,
            amplitude: ie,
            arabicForm: null,
            ascent: ie,
            attributeName: null,
            attributeType: null,
            azimuth: ie,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: ie,
            by: null,
            calcMode: null,
            capHeight: ie,
            className: nt,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: ie,
            diffuseConstant: ie,
            direction: null,
            display: null,
            dur: null,
            divisor: ie,
            dominantBaseline: null,
            download: Oe,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: ie,
            enableBackground: null,
            end: null,
            event: null,
            exponent: ie,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: ie,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: $l,
            g2: $l,
            glyphName: $l,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: ie,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: ie,
            horizOriginX: ie,
            horizOriginY: ie,
            id: null,
            ideographic: ie,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: ie,
            k: ie,
            k1: ie,
            k2: ie,
            k3: ie,
            k4: ie,
            kernelMatrix: Dn,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: ie,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: ie,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: ie,
            overlineThickness: ie,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: ie,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: nt,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: ie,
            pointsAtY: ie,
            pointsAtZ: ie,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Dn,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Dn,
            rev: Dn,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Dn,
            requiredFeatures: Dn,
            requiredFonts: Dn,
            requiredFormats: Dn,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: ie,
            specularExponent: ie,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: ie,
            strikethroughThickness: ie,
            string: null,
            stroke: null,
            strokeDashArray: Dn,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: ie,
            strokeOpacity: ie,
            strokeWidth: null,
            style: null,
            surfaceScale: ie,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Dn,
            tabIndex: ie,
            tableValues: null,
            target: null,
            targetX: ie,
            targetY: ie,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Dn,
            to: null,
            transform: null,
            transformOrigin: null,
            u1: null,
            u2: null,
            underlinePosition: ie,
            underlineThickness: ie,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: ie,
            values: null,
            vAlphabetic: ie,
            vMathematical: ie,
            vectorEffect: null,
            vHanging: ie,
            vIdeographic: ie,
            version: null,
            vertAdvY: ie,
            vertOriginX: ie,
            vertOriginY: ie,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: ie,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    G8 = /^data[-\w.:]+$/i,
    Zx = /-[a-z]/g,
    K8 = /[A-Z]/g;

function Q8(e, t) {
    const n = Fg(t);
    let r = t,
        i = gr;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && G8.test(t)) {
        if (t.charAt(4) === "-") {
            const l = t.slice(5).replace(Zx, X8);
            r = "data" + l.charAt(0).toUpperCase() + l.slice(1)
        } else {
            const l = t.slice(4);
            if (!Zx.test(l)) {
                let s = l.replace(K8, Y8);
                s.charAt(0) !== "-" && (s = "-" + s), t = "data" + s
            }
        }
        i = Pv
    }
    return new i(r, t)
}

function Y8(e) {
    return "-" + e.toLowerCase()
}

function X8(e) {
    return e.charAt(1).toUpperCase()
}
const Jx = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    Z8 = Rb([Db, Ab, Lb, Fb, V8], "html"),
    J8 = Rb([Db, Ab, Lb, Fb, q8], "svg");

function eB(e) {
    if (e.allowedElements && e.disallowedElements) throw new TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
    if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
        Iv(t, "element", (n, r, i) => {
            const l = i;
            let s;
            if (e.allowedElements ? s = !e.allowedElements.includes(n.tagName) : e.disallowedElements && (s = e.disallowedElements.includes(n.tagName)), !s && e.allowElement && typeof r == "number" && (s = !e.allowElement(n, r, l)), s && typeof r == "number") return e.unwrapDisallowed && n.children ? l.children.splice(r, 1, ...n.children) : l.children.splice(r, 1), r
        })
    }
}
var zb = {
        exports: {}
    },
    Ze = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av = Symbol.for("react.element"),
    Dv = Symbol.for("react.portal"),
    Yf = Symbol.for("react.fragment"),
    Xf = Symbol.for("react.strict_mode"),
    Zf = Symbol.for("react.profiler"),
    Jf = Symbol.for("react.provider"),
    ed = Symbol.for("react.context"),
    tB = Symbol.for("react.server_context"),
    td = Symbol.for("react.forward_ref"),
    nd = Symbol.for("react.suspense"),
    rd = Symbol.for("react.suspense_list"),
    id = Symbol.for("react.memo"),
    od = Symbol.for("react.lazy"),
    nB = Symbol.for("react.offscreen"),
    $b;
$b = Symbol.for("react.module.reference");

function mr(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Av:
                switch (e = e.type, e) {
                    case Yf:
                    case Zf:
                    case Xf:
                    case nd:
                    case rd:
                        return e;
                    default:
                        switch (e = e && e.$$typeof, e) {
                            case tB:
                            case ed:
                            case td:
                            case od:
                            case id:
                            case Jf:
                                return e;
                            default:
                                return t
                        }
                }
            case Dv:
                return t
        }
    }
}
Ze.ContextConsumer = ed;
Ze.ContextProvider = Jf;
Ze.Element = Av;
Ze.ForwardRef = td;
Ze.Fragment = Yf;
Ze.Lazy = od;
Ze.Memo = id;
Ze.Portal = Dv;
Ze.Profiler = Zf;
Ze.StrictMode = Xf;
Ze.Suspense = nd;
Ze.SuspenseList = rd;
Ze.isAsyncMode = function() {
    return !1
};
Ze.isConcurrentMode = function() {
    return !1
};
Ze.isContextConsumer = function(e) {
    return mr(e) === ed
};
Ze.isContextProvider = function(e) {
    return mr(e) === Jf
};
Ze.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Av
};
Ze.isForwardRef = function(e) {
    return mr(e) === td
};
Ze.isFragment = function(e) {
    return mr(e) === Yf
};
Ze.isLazy = function(e) {
    return mr(e) === od
};
Ze.isMemo = function(e) {
    return mr(e) === id
};
Ze.isPortal = function(e) {
    return mr(e) === Dv
};
Ze.isProfiler = function(e) {
    return mr(e) === Zf
};
Ze.isStrictMode = function(e) {
    return mr(e) === Xf
};
Ze.isSuspense = function(e) {
    return mr(e) === nd
};
Ze.isSuspenseList = function(e) {
    return mr(e) === rd
};
Ze.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Yf || e === Zf || e === Xf || e === nd || e === rd || e === nB || typeof e == "object" && e !== null && (e.$$typeof === od || e.$$typeof === id || e.$$typeof === Jf || e.$$typeof === ed || e.$$typeof === td || e.$$typeof === $b || e.getModuleId !== void 0)
};
Ze.typeOf = mr;
zb.exports = Ze;
var rB = zb.exports;
const iB = io(rB);

function oB(e) {
    const t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === ""
}

function lB(e) {
    return e.join(" ").trim()
}

function uB(e, t) {
    const n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim()
}
var Nv = {
        exports: {}
    },
    eS = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    sB = /\n/g,
    aB = /^\s*/,
    cB = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    fB = /^:\s*/,
    dB = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    pB = /^[;\s]*/,
    hB = /^\s+|\s+$/g,
    gB = `
`,
    tS = "/",
    nS = "*",
    bo = "",
    mB = "comment",
    vB = "declaration",
    yB = function(e, t) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        t = t || {};
        var n = 1,
            r = 1;

        function i(E) {
            var S = E.match(sB);
            S && (n += S.length);
            var A = E.lastIndexOf(gB);
            r = ~A ? E.length - A : r + E.length
        }

        function l() {
            var E = {
                line: n,
                column: r
            };
            return function(S) {
                return S.position = new s(E), d(), S
            }
        }

        function s(E) {
            this.start = E, this.end = {
                line: n,
                column: r
            }, this.source = t.source
        }
        s.prototype.content = e;

        function a(E) {
            var S = new Error(t.source + ":" + n + ":" + r + ": " + E);
            if (S.reason = E, S.filename = t.source, S.line = n, S.column = r, S.source = e, !t.silent) throw S
        }

        function f(E) {
            var S = E.exec(e);
            if (S) {
                var A = S[0];
                return i(A), e = e.slice(A.length), S
            }
        }

        function d() {
            f(aB)
        }

        function p(E) {
            var S;
            for (E = E || []; S = g();) S !== !1 && E.push(S);
            return E
        }

        function g() {
            var E = l();
            if (!(tS != e.charAt(0) || nS != e.charAt(1))) {
                for (var S = 2; bo != e.charAt(S) && (nS != e.charAt(S) || tS != e.charAt(S + 1));) ++S;
                if (S += 2, bo === e.charAt(S - 1)) return a("End of comment missing");
                var A = e.slice(2, S - 2);
                return r += 2, i(A), e = e.slice(S), r += 2, E({
                    type: mB,
                    comment: A
                })
            }
        }

        function v() {
            var E = l(),
                S = f(cB);
            if (S) {
                if (g(), !f(fB)) return a("property missing ':'");
                var A = f(dB),
                    y = E({
                        type: vB,
                        property: rS(S[0].replace(eS, bo)),
                        value: A ? rS(A[0].replace(eS, bo)) : bo
                    });
                return f(pB), y
            }
        }

        function m() {
            var E = [];
            p(E);
            for (var S; S = v();) S !== !1 && (E.push(S), p(E));
            return E
        }
        return d(), m()
    };

function rS(e) {
    return e ? e.replace(hB, bo) : bo
}
var wB = yB;

function Bb(e, t) {
    var n = null;
    if (!e || typeof e != "string") return n;
    for (var r, i = wB(e), l = typeof t == "function", s, a, f = 0, d = i.length; f < d; f++) r = i[f], s = r.property, a = r.value, l ? t(s, a, r) : a && (n || (n = {}), n[s] = a);
    return n
}
Nv.exports = Bb;
Nv.exports.default = Bb;
var xB = Nv.exports;
const SB = io(xB),
    $g = {}.hasOwnProperty,
    EB = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

function Ub(e, t) {
    const n = [];
    let r = -1,
        i;
    for (; ++r < t.children.length;) i = t.children[r], i.type === "element" ? n.push(CB(e, i, r, t)) : i.type === "text" ? (t.type !== "element" || !EB.has(t.tagName) || !oB(i)) && n.push(i.value) : i.type === "raw" && !e.options.skipHtml && n.push(i.value);
    return n
}

function CB(e, t, n, r) {
    const i = e.options,
        l = i.transformLinkUri === void 0 ? k5 : i.transformLinkUri,
        s = e.schema,
        a = t.tagName,
        f = {};
    let d = s,
        p;
    if (s.space === "html" && a === "svg" && (d = J8, e.schema = d), t.properties)
        for (p in t.properties) $g.call(t.properties, p) && bB(f, p, t.properties[p], e);
    (a === "ol" || a === "ul") && e.listDepth++;
    const g = Ub(e, t);
    (a === "ol" || a === "ul") && e.listDepth--, e.schema = s;
    const v = t.position || {
            start: {
                line: null,
                column: null,
                offset: null
            },
            end: {
                line: null,
                column: null,
                offset: null
            }
        },
        m = i.components && $g.call(i.components, a) ? i.components[a] : a,
        E = typeof m == "string" || m === _e.Fragment;
    if (!iB.isValidElementType(m)) throw new TypeError(`Component for name \`${a}\` not defined or is not renderable`);
    if (f.key = n, a === "a" && i.linkTarget && (f.target = typeof i.linkTarget == "function" ? i.linkTarget(String(f.href || ""), t.children, typeof f.title == "string" ? f.title : null) : i.linkTarget), a === "a" && l && (f.href = l(String(f.href || ""), t.children, typeof f.title == "string" ? f.title : null)), !E && a === "code" && r.type === "element" && r.tagName !== "pre" && (f.inline = !0), !E && (a === "h1" || a === "h2" || a === "h3" || a === "h4" || a === "h5" || a === "h6") && (f.level = Number.parseInt(a.charAt(1), 10)), a === "img" && i.transformImageUri && (f.src = i.transformImageUri(String(f.src || ""), String(f.alt || ""), typeof f.title == "string" ? f.title : null)), !E && a === "li" && r.type === "element") {
        const S = kB(t);
        f.checked = S && S.properties ? !!S.properties.checked : null, f.index = xh(r, t), f.ordered = r.tagName === "ol"
    }
    return !E && (a === "ol" || a === "ul") && (f.ordered = a === "ol", f.depth = e.listDepth), (a === "td" || a === "th") && (f.align && (f.style || (f.style = {}), f.style.textAlign = f.align, delete f.align), E || (f.isHeader = a === "th")), !E && a === "tr" && r.type === "element" && (f.isHeader = r.tagName === "thead"), i.sourcePos && (f["data-sourcepos"] = TB(v)), !E && i.rawSourcePos && (f.sourcePosition = t.position), !E && i.includeElementIndex && (f.index = xh(r, t), f.siblingCount = xh(r)), E || (f.node = t), g.length > 0 ? _e.createElement(m, f, g) : _e.createElement(m, f)
}

function kB(e) {
    let t = -1;
    for (; ++t < e.children.length;) {
        const n = e.children[t];
        if (n.type === "element" && n.tagName === "input") return n
    }
    return null
}

function xh(e, t) {
    let n = -1,
        r = 0;
    for (; ++n < e.children.length && e.children[n] !== t;) e.children[n].type === "element" && r++;
    return r
}

function bB(e, t, n, r) {
    const i = Q8(r.schema, t);
    let l = n;
    l == null || l !== l || (Array.isArray(l) && (l = i.commaSeparated ? uB(l) : lB(l)), i.property === "style" && typeof l == "string" && (l = _B(l)), i.space && i.property ? e[$g.call(Jx, i.property) ? Jx[i.property] : i.property] = l : i.attribute && (e[i.attribute] = l))
}

function _B(e) {
    const t = {};
    try {
        SB(e, n)
    } catch {}
    return t;

    function n(r, i) {
        const l = r.slice(0, 4) === "-ms-" ? `ms-${r.slice(4)}` : r;
        t[l.replace(/-([a-z])/g, OB)] = i
    }
}

function OB(e, t) {
    return t.toUpperCase()
}

function TB(e) {
    return [e.start.line, ":", e.start.column, "-", e.end.line, ":", e.end.column].map(String).join("")
}
const iS = {}.hasOwnProperty,
    IB = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    Va = {
        plugins: {
            to: "remarkPlugins",
            id: "change-plugins-to-remarkplugins"
        },
        renderers: {
            to: "components",
            id: "change-renderers-to-components"
        },
        astPlugins: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        allowDangerousHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        escapeHtml: {
            id: "remove-buggy-html-in-markdown-parser"
        },
        source: {
            to: "children",
            id: "change-source-to-children"
        },
        allowNode: {
            to: "allowElement",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        allowedTypes: {
            to: "allowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        disallowedTypes: {
            to: "disallowedElements",
            id: "replace-allownode-allowedtypes-and-disallowedtypes"
        },
        includeNodeIndex: {
            to: "includeElementIndex",
            id: "change-includenodeindex-to-includeelementindex"
        }
    };

function jb(e) {
    for (const l in Va)
        if (iS.call(Va, l) && iS.call(e, l)) {
            const s = Va[l];
            console.warn(`[react-markdown] Warning: please ${s.to?`use \`${s.to}\` instead of`:"remove"} \`${l}\` (see <${IB}#${s.id}> for more info)`), delete Va[l]
        } const t = B5().use(Q$).use(e.remarkPlugins || []).use(B8, {
            ...e.remarkRehypeOptions,
            allowDangerousHtml: !0
        }).use(e.rehypePlugins || []).use(eB, e),
        n = new lb;
    typeof e.children == "string" ? n.value = e.children : e.children !== void 0 && e.children !== null && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
    const r = t.runSync(t.parse(n), n);
    if (r.type !== "root") throw new TypeError("Expected a `root` node");
    let i = _e.createElement(_e.Fragment, {}, Ub({
        options: e,
        schema: Z8,
        listDepth: 0
    }, r));
    return e.className && (i = _e.createElement("div", {
        className: e.className
    }, i)), i
}
jb.propTypes = {
    children: Ce.string,
    className: Ce.string,
    allowElement: Ce.func,
    allowedElements: Ce.arrayOf(Ce.string),
    disallowedElements: Ce.arrayOf(Ce.string),
    unwrapDisallowed: Ce.bool,
    remarkPlugins: Ce.arrayOf(Ce.oneOfType([Ce.object, Ce.func, Ce.arrayOf(Ce.oneOfType([Ce.bool, Ce.string, Ce.object, Ce.func, Ce.arrayOf(Ce.any)]))])),
    rehypePlugins: Ce.arrayOf(Ce.oneOfType([Ce.object, Ce.func, Ce.arrayOf(Ce.oneOfType([Ce.bool, Ce.string, Ce.object, Ce.func, Ce.arrayOf(Ce.any)]))])),
    sourcePos: Ce.bool,
    rawSourcePos: Ce.bool,
    skipHtml: Ce.bool,
    includeElementIndex: Ce.bool,
    transformLinkUri: Ce.oneOfType([Ce.func, Ce.bool]),
    linkTarget: Ce.oneOfType([Ce.func, Ce.string]),
    transformImageUri: Ce.func,
    components: Ce.object
};
const RB = () => Se("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "#ffffff",
        fill: "none",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [$("path", {
            stroke: "none",
            d: "M0 0h24v24H0z",
            fill: "none"
        }), $("circle", {
            cx: "12",
            cy: "12",
            r: "9"
        }), $("polyline", {
            points: "12 7 12 12 15 15"
        })]
    }),
    oS = () => $("div", {
        className: "divider"
    }),
    PB = ({
        item: e,
        inventoryType: t,
        style: n
    }, r) => {
        const i = mi(d => d.inventory.additionalMetadata),
            l = R.useMemo(() => dt[e.name], [e]),
            s = R.useMemo(() => e.ingredients ? Object.entries(e.ingredients).sort((d, p) => d[1] - p[1]) : null, [e]),
            a = e.metadata?.description || l?.description,
            f = l?.ammoName && dt[l?.ammoName]?.label;
        return $(Bn, {
            children: l ? Se("div", {
                style: {
                    ...n
                },
                className: "tooltip-wrapper",
                ref: r,
                children: [Se("div", {
                    className: "tooltip-header-wrapper",
                    children: [$("p", {
                        children: e.metadata?.label || l.label || e.name
                    }), t === "crafting" ? Se("div", {
                        className: "tooltip-crafting-duration",
                        children: [$(RB, {}), Se("p", {
                            children: [(e.duration !== void 0 ? e.duration : 3e3) / 1e3, "s"]
                        })]
                    }) : $("p", {
                        children: e.metadata?.type
                    })]
                }), $(oS, {}), a && $("div", {
                    className: "tooltip-description",
                    children: $(jb, {
                        className: "tooltip-markdown",
                        children: a
                    })
                }), t !== "crafting" ? Se(Bn, {
                    children: [e.durability !== void 0 && Se("p", {
                        children: [Xt.ui_durability, ": ", Math.trunc(e.durability)]
                    }), e.metadata?.ammo !== void 0 && Se("p", {
                        children: [Xt.ui_ammo, ": ", e.metadata.ammo]
                    }), f && Se("p", {
                        children: [Xt.ammo_type, ": ", f]
                    }), e.metadata?.serial && Se("p", {
                        children: [Xt.ui_serial, ": ", e.metadata.serial]
                    }), e.metadata?.components && e.metadata?.components[0] && Se("p", {
                        children: [Xt.ui_components, ":", " ", (e.metadata?.components).map((d, p, g) => p + 1 === g.length ? dt[d]?.label : dt[d]?.label + ", ")]
                    }), e.metadata?.weapontint && Se("p", {
                        children: [Xt.ui_tint, ": ", e.metadata.weapontint]
                    }), i.map((d, p) => $(R.Fragment, {
                        children: e.metadata && e.metadata[d.metadata] && Se("p", {
                            children: [d.value, ": ", e.metadata[d.metadata]]
                        })
                    }, `metadata-${p}`))]
                }) : $("div", {
                    className: "tooltip-ingredients",
                    children: s && s.map(d => {
                        const [p, g] = [d[0], d[1]];
                        return Se("div", {
                            className: "tooltip-ingredient",
                            children: [$("img", {
                                src: p ? Ll(p) : "none",
                                alt: "item-image"
                            }), $("p", {
                                children: g >= 1 ? `${g}x ${dt[p]?.label||p}` : g === 0 ? `${dt[p]?.label||p}` : g < 1 && `${g*100}% ${dt[p]?.label||p}`
                            })]
                        }, `ingredient-${p}`)
                    })
                })]
            }) : Se("div", {
                className: "tooltip-wrapper",
                ref: r,
                style: n,
                children: [$("div", {
                    className: "tooltip-header-wrapper",
                    children: $("p", {
                        children: e.name
                    })
                }), $(oS, {})]
            })
        })
    },
    AB = _e.forwardRef(PB);

function DB(e, t) {
    const [n, r] = R.useState(e);
    return R.useEffect(() => {
        const i = setTimeout(() => r(e), t || 500);
        return () => {
            clearTimeout(i)
        }
    }, [e, t]), n
}
const NB = () => {
        const e = mi(a => a.tooltip);
        DB(e.open, 500), _e.useState(!1), R.useRef(null), R.useRef(!1);
        const {
            refs: t,
            context: n,
            floatingStyles: r
        } = nb({
            middleware: [Pk(), Dk(), Ak({
                mainAxis: 10,
                crossAxis: 10
            })],
            open: e.open,
            placement: "right-start"
        }), {
            isMounted: i,
            styles: l
        } = rb(n, {
            duration: 200
        }), s = ({
            clientX: a,
            clientY: f
        }) => {
            t.setPositionReference({
                getBoundingClientRect() {
                    return {
                        width: 0,
                        height: 0,
                        x: a,
                        y: f,
                        left: a,
                        top: f,
                        right: a,
                        bottom: f
                    }
                }
            })
        };
        return _e.useEffect(() => (window.addEventListener("mousemove", s), () => {
            window.removeEventListener("mousemove", s)
        }), []), $(Bn, {
            children: i && e.item && e.inventoryType && $(eb, {
                children: $(AB, {
                    ref: t.setFloating,
                    style: {
                        ...r,
                        ...l
                    },
                    item: e.item,
                    inventoryType: e.inventoryType
                })
            })
        })
    },
    MB = e => {
        const t = document.createElement("input");
        t.value = e, document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t)
    },
    Bg = R.createContext({
        getItemProps: () => ({}),
        activeIndex: null,
        setActiveIndex: () => {},
        setHasFocusInside: () => {},
        isOpen: !1
    }),
    lS = R.forwardRef(({
        children: e,
        label: t,
        ...n
    }, r) => {
        const i = mi(le => le.contextMenu),
            [l, s] = R.useState(!1),
            [a, f] = R.useState(!1),
            [d, p] = R.useState(null),
            g = R.useRef([]),
            v = R.useRef([]),
            m = R.useContext(Bg),
            E = so(),
            S = F6(),
            A = qo(),
            y = Vk(),
            x = A != null,
            {
                floatingStyles: k,
                refs: P,
                context: N
            } = nb({
                nodeId: S,
                open: l,
                onOpenChange: s,
                placement: x ? "right-start" : "bottom-start",
                middleware: [Ak({
                    mainAxis: x ? 0 : 4,
                    alignmentAxis: x ? -4 : 0
                }), Pk(), Dk()],
                whileElementsMounted: a6
            }),
            {
                isMounted: T,
                styles: F
            } = rb(N);
        R.useEffect(() => {
            x || (i.coords && (P.setPositionReference({
                getBoundingClientRect() {
                    return {
                        width: 0,
                        height: 0,
                        x: i.coords.x,
                        y: i.coords.y,
                        top: i.coords.y,
                        right: i.coords.x,
                        bottom: i.coords.y,
                        left: i.coords.x
                    }
                }
            }), s(!0)), i.coords || s(!1))
        }, [i]);
        const z = B6(N, {
                enabled: x,
                delay: {
                    open: 75
                },
                handleClose: h5({
                    blockPointerEvents: !0
                })
            }),
            q = J6(N, {
                event: "mousedown",
                toggle: !x,
                ignoreMouse: x
            }),
            Q = a5(N, {
                role: "menu"
            }),
            B = o5(N, {
                bubbles: !0
            }),
            K = s5(N, {
                listRef: g,
                activeIndex: d,
                nested: x,
                onNavigate: p
            }),
            j = d5(N, {
                listRef: v,
                onMatch: l ? p : void 0,
                activeIndex: d
            }),
            {
                getReferenceProps: U,
                getFloatingProps: J,
                getItemProps: oe
            } = l5([z, q, Q, B, K, j]);
        return R.useEffect(() => {
            if (!E) return;

            function le() {
                s(!1)
            }

            function W(ee) {
                ee.nodeId !== S && ee.parentId === A && s(!1)
            }
            return E.events.on("click", le), E.events.on("menuopen", W), () => {
                E.events.off("click", le), E.events.off("menuopen", W)
            }
        }, [E, S, A]), R.useEffect(() => {
            l && E && E.events.emit("menuopen", {
                parentId: A,
                nodeId: S
            })
        }, [E, l, S, A]), Se(z6, {
            id: S,
            children: [x && Se("button", {
                ref: xv([P.setReference, y.ref, r]),
                tabIndex: x ? m.activeIndex === y.index ? 0 : -1 : void 0,
                role: x ? "menuitem" : void 0,
                "data-open": l ? "" : void 0,
                "data-nested": x ? "" : void 0,
                "data-focus-inside": a ? "" : void 0,
                className: x ? "context-menu-item" : "context-menu-list",
                ...U(m.getItemProps({
                    ...n,
                    onFocus(le) {
                        n.onFocus?.(le), f(!1), m.setHasFocusInside(!0)
                    }
                })),
                children: [t, x && $("span", {
                    "aria-hidden": !0,
                    style: {
                        marginLeft: 10,
                        fontSize: 10
                    },
                    children: "▶"
                })]
            }), $(Bg.Provider, {
                value: {
                    activeIndex: d,
                    setActiveIndex: p,
                    getItemProps: oe,
                    setHasFocusInside: f,
                    isOpen: l
                },
                children: $(D6, {
                    elementsRef: g,
                    labelsRef: v,
                    children: T && $(eb, {
                        children: $(Z6, {
                            lockScroll: !0,
                            children: $(X6, {
                                context: N,
                                modal: !0,
                                initialFocus: P.floating,
                                children: $("div", {
                                    ref: P.setFloating,
                                    className: "context-menu-list",
                                    style: {
                                        ...k,
                                        ...F
                                    },
                                    ...J(),
                                    children: e
                                })
                            })
                        })
                    })
                })
            })]
        })
    }),
    Ri = R.forwardRef(({
        label: e,
        disabled: t,
        ...n
    }, r) => {
        const i = R.useContext(Bg),
            l = Vk({
                label: t ? null : e
            }),
            s = so(),
            a = l.index === i.activeIndex;
        return $("button", {
            ...n,
            ref: xv([l.ref, r]),
            type: "button",
            role: "menuitem",
            className: "context-menu-item",
            tabIndex: a ? 0 : -1,
            disabled: t,
            ...i.getItemProps({
                onClick(f) {
                    n.onClick?.(f), s?.events.emit("click")
                },
                onFocus(f) {
                    n.onFocus?.(f), i.setHasFocusInside(!0)
                }
            }),
            children: e
        })
    }),
    Sh = R.forwardRef((e, t) => qo() === null ? $($6, {
        children: $(lS, {
            ...e,
            ref: t
        })
    }) : $(lS, {
        ...e,
        ref: t
    })),
    LB = () => {
        const t = mi(i => i.contextMenu).item,
            n = i => {
                if (t) switch (i && i.action) {
                    case "use":
                        av({
                            name: t.name,
                            slot: t.slot
                        });
                        break;
                    case "give":
                        hk({
                            name: t.name,
                            slot: t.slot
                        });
                        break;
                    case "drop":
                        un(t) && Og({
                            item: t,
                            inventory: "player"
                        });
                        break;
                    case "remove":
                        cr("removeComponent", {
                            component: i?.component,
                            slot: i?.slot
                        });
                        break;
                    case "removeAmmo":
                        cr("removeAmmo", t.slot);
                        break;
                    case "copy":
                        MB(i.serial || "");
                        break;
                    case "custom":
                        cr("useButton", {
                            id: (i?.id || 0) + 1,
                            slot: t.slot
                        });
                        break
                }
            },
            r = i => i.reduce((l, s, a) => {
                if (s.group) {
                    const f = l.findIndex(d => d.groupName === s.group);
                    f !== -1 ? l[f].buttons.push({
                        ...s,
                        index: a
                    }) : l.push({
                        groupName: s.group,
                        buttons: [{
                            ...s,
                            index: a
                        }]
                    })
                } else l.push({
                    groupName: null,
                    buttons: [{
                        ...s,
                        index: a
                    }]
                });
                return l
            }, []);
        return $(Bn, {
            children: Se(Sh, {
                children: [$(Ri, {
                    onClick: () => n({
                        action: "use"
                    }),
                    label: Xt.ui_use || "Use"
                }), $(Ri, {
                    onClick: () => n({
                        action: "give"
                    }),
                    label: Xt.ui_give || "Give"
                }), $(Ri, {
                    onClick: () => n({
                        action: "drop"
                    }),
                    label: Xt.ui_drop || "Drop"
                }), t && t.metadata?.ammo > 0 && $(Ri, {
                    onClick: () => n({
                        action: "removeAmmo"
                    }),
                    label: Xt.ui_remove_ammo
                }), t && t.metadata?.serial && $(Ri, {
                    onClick: () => n({
                        action: "copy",
                        serial: t.metadata?.serial
                    }),
                    label: Xt.ui_copy
                }), t && t.metadata?.components && t.metadata?.components.length > 0 && $(Sh, {
                    label: Xt.ui_removeattachments,
                    children: t && t.metadata?.components.map((i, l) => $(Ri, {
                        onClick: () => n({
                            action: "remove",
                            component: i,
                            slot: t.slot
                        }),
                        label: dt[i]?.label || ""
                    }, l))
                }), (t && t.name && dt[t.name]?.buttons?.length || 0) > 0 && $(Bn, {
                    children: t && t.name && r(dt[t.name]?.buttons).map((i, l) => $(_e.Fragment, {
                        children: i.groupName ? $(Sh, {
                            label: i.groupName,
                            children: i.buttons.map(s => $(Ri, {
                                onClick: () => n({
                                    action: "custom",
                                    id: s.index
                                }),
                                label: s.label
                            }, s.index))
                        }) : i.buttons.map(s => $(Ri, {
                            onClick: () => n({
                                action: "custom",
                                id: s.index
                            }),
                            label: s.label
                        }, s.index))
                    }, l))
                })]
            })
        })
    },
    Hb = e => {
        const t = _e.useRef(null);
        return $(xk, {
            in: e.in,
            nodeRef: t,
            classNames: "transition-fade",
            timeout: 200,
            unmountOnExit: !0,
            children: $("span", {
                ref: t,
                children: e.children
            })
        })
    },
    FB = () => {
        const [e, t] = _e.useState(!1), n = ru();
        return $r("setInventoryVisible", t), $r("closeInventory", () => {
            t(!1), n(pk()), n(Xu())
        }), bF(t), $r("setupInventory", r => {
            n(ak(r)), !e && t(!0)
        }), $r("refreshSlots", r => n(G4(r))), $r("displayMetadata", r => {
            n(U4(r))
        }), Se(Bn, {
            children: [$(Hb, {
                in: e,
                children: Se("div", {
                    className: "h-full",
                    children: [$("div", {
                        className: "absolute h-screen w-full top-0 left-0 bg-dark bg-opacity-80"
                    }), Se("div", {
                        className: "inventory-wrapper relative",
                        children: [$(C5, {}), $(iF, {}), $(E5, {}), $(NB, {}), $(LB, {})]
                    })]
                })
            }), $(CF, {})]
        })
    },
    Ug = (e, t) => ({
        x: e.x - t.x,
        y: e.y - t.y
    }),
    zB = e => {
        const t = e.getInitialClientOffset(),
            n = e.getInitialSourceClientOffset();
        return t === null || n === null || t.x === void 0 || t.y === void 0 ? {
            x: 0,
            y: 0
        } : Ug(t, n)
    },
    $B = (e, t) => {
        const n = e.getClientOffset();
        if (n === null) return null;
        if (!t.current || !t.current.getBoundingClientRect) return Ug(n, zB(e));
        const r = t.current.getBoundingClientRect(),
            i = {
                x: r.width / 2,
                y: r.height / 2
            };
        return Ug(n, i)
    },
    BB = () => {
        const e = R.useRef(null),
            {
                data: t,
                isDragging: n,
                currentOffset: r
            } = R3(i => ({
                data: i.getItem(),
                currentOffset: $B(i, e),
                isDragging: i.isDragging()
            }));
        return $(Bn, {
            children: n && r && t.item && $("div", {
                className: "item-drag-preview",
                ref: e,
                style: {
                    transform: `translate(${r.x}px, ${r.y}px)`,
                    backgroundImage: t.image
                }
            })
        })
    },
    UB = e => {
        const [t, n] = _e.useState(!1), r = _e.useCallback(({
            key: l
        }) => {
            l === e && n(!0)
        }, [e]), i = _e.useCallback(({
            key: l
        }) => {
            l === e && n(!1)
        }, [e]);
        return _e.useEffect(() => (window.addEventListener("keydown", r), window.addEventListener("keyup", i), () => {
            window.removeEventListener("keydown", r), window.removeEventListener("keyup", i)
        }), [r, i]), t
    },
    jB = () => {
        const e = ru(),
            t = UB("Shift");
        return R.useEffect(() => {
            e(H4(t))
        }, [t, e]), $(Bn, {})
    },
    HB = () => {
        const e = ru(),
            t = gi();
        return $r("init", ({
            locale: n,
            items: r,
            leftInventory: i,
            imagepath: l
        }) => {
            for (const s in n) Xt[s] = n[s];
            for (const s in r) dt[s] = r[s];
            R4(l), e(ak({
                leftInventory: i
            }))
        }), cr("uiLoaded", {}), $r("closeInventory", () => {
            t.dispatch({
                type: "dnd-core/END_DRAG"
            })
        }), Se("div", {
            className: "app-wrapper",
            children: [$(FB, {}), $(BB, {}), $(jB, {})]
        })
    };
addEventListener("dragstart", function(e) {
    e.preventDefault()
});
const WB = (e = []) => {
        const [t, n] = R.useState(e);
        return {
            add: r => {
                n(i => [...i, r])
            },
            remove: () => {
                let r;
                return n(([i, ...l]) => (r = i, l)), r
            },
            get values() {
                return t
            },
            get first() {
                return t[0]
            },
            get last() {
                return t[t.length - 1]
            },
            get size() {
                return t.length
            }
        }
    },
    VB = _e.createContext(null),
    qB = _e.forwardRef((e, t) => {
        const n = e.item.item;
        return $("div", {
            className: "item-notification-item-box",
            style: {
                backgroundImage: `url(${Ll(n)||"none"}`,
                ...e.style
            },
            ref: t,
            children: Se("div", {
                className: "item-slot-wrapper",
                children: [$("div", {
                    className: "item-notification-action-box",
                    children: $("p", {
                        className: "text-gray-100",
                        children: e.item.text
                    })
                }), $("div", {
                    className: "inventory-slot-label-box",
                    children: $("div", {
                        className: "inventory-slot-label-text",
                        children: n.metadata?.label || dt[n.name]?.label
                    })
                })]
            })
        })
    }),
    GB = ({
        children: e
    }) => {
        const t = WB(),
            n = r => {
                const i = _e.createRef(),
                    l = {
                        id: Date.now(),
                        item: r,
                        ref: i
                    };
                t.add(l);
                const s = setTimeout(() => {
                    t.remove(), clearTimeout(s)
                }, 2500)
            };
        return $r("itemNotify", ([r, i, l]) => {
            n({
                item: r,
                text: l ? `${Xt[i]} ${l}x` : `${Xt[i]}`
            })
        }), Se(VB.Provider, {
            value: {
                add: n
            },
            children: [e, tu.createPortal($(SF, {
                className: "item-notification-container",
                children: t.values.map((r, i) => $(Hb, {
                    children: $(qB, {
                        item: r.item,
                        ref: r.ref
                    })
                }, `item-notification-${i}`))
            }), document.body)]
        })
    },
    $u = document.getElementById("root");
lk() && ($u.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")', $u.style.backgroundSize = "cover", $u.style.backgroundRepeat = "no-repeat", $u.style.backgroundPosition = "center");
SC($u).render($(_e.StrictMode, {
    children: $(NM, {
        store: Mn,
        children: $(l3, {
            backend: G3,
            options: {
                enableMouseEvents: !0
            },
            children: $(GB, {
                children: $(HB, {})
            })
        })
    })
}));