if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/P7z89R"]);
}




"use strict";
(function() {
    if (!Array.prototype.flat) {
        var a = function b(a) {
            return a < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function(c, d) {
                Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
                return c
            }, [])
        };
        Array.prototype.flat = function() {
            return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]))
        }
    }
    if (!Array.prototype.flatMap) {
        var b = function(a, b) {
            var c = [];
            if (typeof b !== "function") throw new TypeError("Callback function must be callable.");
            for (var d = 0; d < a.length; d++) {
                var e = b.call(a, a[d], d, a);
                Array.isArray(e) ? c.push.apply(c, e) : c.push(e)
            }
            return c
        };
        Array.prototype.flatMap = function(a) {
            var c = arguments[1] || this;
            return b(c, a)
        }
    }
})();


(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
})();
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        };
    g = function(b, c, d, e, f) {
        if (f) {
            f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
            e = f.callId;
            a[e] = (a[e] || 0) + 1
        }
        return d.apply(b, c)
    };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = g, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = f : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};
self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);





"use strict";
(function() {
    if (typeof Element === "undefined" || Element.prototype.scroll) return;

    function a(a, b) {
        b === void 0 && (b = !1);
        if (a.length === 0) return;
        var c = a[0],
            d = a[1];
        c = Number(c) || 0;
        d = Number(d) || 0;
        if (a.length === 1) {
            a = a[0];
            if (a == null) return;
            c = a.left;
            d = a.top;
            c !== void 0 && (c = Number(c) || 0);
            d !== void 0 && (d = Number(d) || 0)
        }
        c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
        d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d)
    }
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        a.call(this, arguments)
    };
    Element.prototype.scrollBy = function() {
        a.call(this, arguments, !0)
    }
})();


typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    typeof Object.fromEntries !== "function" && (Object.fromEntries = function(a) {
        var b = {};
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1];
            b[f] = e
        }
        return b
    });
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});




(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    typeof Symbol !== "undefined" && !(typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));

    function d(a) {
        this.wrapped = a
    }

    function e(a) {
        var b, c;

        function e(a, d) {
            return new Promise(function(e, g) {
                e = {
                    key: a,
                    arg: d,
                    resolve: e,
                    reject: g,
                    next: null
                };
                c ? c = c.next = e : (b = c = e, f(a, d))
            })
        }

        function f(b, c) {
            try {
                var e = a[b](c);
                c = e.value;
                var h = c instanceof d;
                Promise.resolve(h ? c.wrapped : c).then(function(a) {
                    if (h) {
                        f(b === "return" ? "return" : "next", a);
                        return
                    }
                    g(e.done ? "return" : "normal", a)
                }, function(a) {
                    f("throw", a)
                })
            } catch (a) {
                g("throw", a)
            }
        }

        function g(a, d) {
            switch (a) {
                case "return":
                    b.resolve({
                        value: d,
                        done: !0
                    });
                    break;
                case "throw":
                    b.reject(d);
                    break;
                default:
                    b.resolve({
                        value: d,
                        done: !1
                    });
                    break
            }
            b = b.next;
            b ? f(b.key, b.arg) : c = null
        }
        this._invoke = e;
        typeof a["return"] !== "function" && (this["return"] = void 0)
    }
    typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (e.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function() {
        return this
    });
    e.prototype.next = function(a) {
        return this._invoke("next", a)
    };
    e.prototype["throw"] = function(a) {
        return this._invoke("throw", a)
    };
    e.prototype["return"] = function(a) {
        return this._invoke("return", a)
    };
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        return new(Function.prototype.bind.apply(a, [null].concat(b)))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind;
    b.wrapAsyncGenerator = function(a) {
        return function() {
            return new e(a.apply(this, arguments))
        }
    };
    b.awaitAsyncGenerator = function(a) {
        return new d(a)
    };
    b.asyncIterator = function(a) {
        var b;
        if (typeof Symbol !== "undefined") {
            if (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") {
                b = a[Symbol.asyncIterator];
                if (b != null) return b.call(a)
            }
            if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
                b = a[Symbol.iterator];
                if (b != null) return b.call(a)
            }
        }
        throw new TypeError("Object is not async iterable")
    };
    b.asyncGeneratorDelegate = function(a, b) {
        var c = {},
            d = !1;

        function e(c, e) {
            d = !0;
            e = new Promise(function(b) {
                b(a[c](e))
            });
            return {
                done: !1,
                value: b(e)
            }
        }
        typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") && (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this
        });
        c.next = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("next", a)
        };
        typeof a["throw"] === "function" && (c["throw"] = function(a) {
            if (d) {
                d = !1;
                throw a
            }
            return e("throw", a)
        });
        typeof a["return"] === "function" && (c["return"] = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("return", a)
        });
        return c
    }
})(typeof global === "undefined" ? self : global);

(function(a) {
    if (a.require != null) return;
    var b = null,
        c = null,
        d = [],
        e = {},
        f = {},
        g = 0,
        h = 0,
        i = 0,
        j = 1,
        k = 2,
        l = 4,
        m = 8,
        n = 16,
        aa = 32,
        ba = 64,
        ca = {},
        o = {},
        p = Object.prototype.hasOwnProperty,
        q = Object.prototype.toString;

    function r(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || R(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], R(g) || a.push(g.id)
        }
        for (d in b) p.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            d = f ? f.dependencies : null;
            if (!f || !d) h += " is not defined";
            else if (R(f)) h += " is ready";
            else {
                f = [];
                for (var i = 0; i < d.length; i++) g = d[i], R(g) || f.push(g.id);
                h += " is waiting for " + f.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function s(b) {
        var a = new Error(b);
        a.name = "ModuleError";
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [2, 2];
        return a
    }
    $ = a.Env || {};
    var t = !!$.gk_nonjs_deps_in_require,
        u = !!$.gk_requirelazy_mem,
        v = !!$.profile_require_factories,
        w = a.performance || {},
        x;
    if (w.now && w.timing && w.timing.navigationStart) {
        var y = w.timing.navigationStart;
        x = function() {
            return w.now() + y
        }
    } else x = function() {
        return Date.now()
    };
    var z = 0;

    function A(a) {
        z++;
        var b = e[a];
        (!b || b.exports == null) && (F(a), b = e[a]);
        b && b.refcount-- === 1 && (e[a] = null);
        return b
    }

    function B(a) {
        return a.defaultExport !== o ? a.defaultExport : a.exports
    }

    function C(a) {
        a = A(a);
        if (a) return B(a)
    }

    function D(a) {
        a = A(a);
        if (a) return a.defaultExport !== o ? a.defaultExport : null
    }

    function E(a) {
        a = A(a);
        if (a) return a.exports
    }

    function da(a) {
        a.factoryLength === -1 && (a.factoryLength = a.factory.length);
        return a.factoryLength
    }

    function F(d) {
        var g = a.ErrorGuard;
        if (g && !g.inGuard()) return g.applyWithGuard(F, null, [d]);
        g = e[d];
        if (!g) {
            var h = 'Requiring unknown module "%s"';
            throw s(h, d)
        }
        var i, j;
        if (g.hasError)
            if (g.error == null) throw s('Requiring module "%s" which threw an exception', d);
            else {
                h = G(g.error);
                H(h, {
                    messageFormat: 'Requiring module "%s" which threw an exception',
                    messageParams: [d]
                });
                throw h
            }
        if (!R(g)) throw s('Requiring module "%s" with unresolved dependencies: %s', d, r([d]));
        J(g);
        h = g.exports = {};
        var l = g.factory,
            n = g.dependencies;
        if (q.call(l) === "[object Function]" && n != null) {
            var o = n.length,
                t;
            try {
                try {
                    T(g)
                } catch (a) {
                    I(a, d)
                }
                var u = [],
                    w = o;
                if (g.special & m) {
                    var y = g.special & aa ? c : b;
                    u = y.slice(0);
                    u[y.length - 2] = g;
                    u[y.length - 1] = h;
                    w += u.length
                }
                if (g.special & k) {
                    y = da(g);
                    w = Math.min(o + u.length, y)
                }
                for (var h = 0; h < o; h++) {
                    y = n[h];
                    u.length < w && u.push(C.call(null, y.id))
                }
                var z;
                v && (z = x());
                f[g.id].factoryRun = !0;
                try {
                    y = g.context != null ? g.context : a;
                    w = l.apply(y, u)
                } catch (a) {
                    I(a, d)
                } finally {
                    if (v) {
                        n = x();
                        o = f[g.id];
                        o.factoryTime = n - (z || 0);
                        o.factoryEnd = n;
                        o.factoryStart = z;
                        if (l.__SMmeta)
                            for (var A in l.__SMmeta) Object.prototype.hasOwnProperty.call(l.__SMmeta, A) && (o[A] = l.__SMmeta[A])
                    }
                }
            } catch (a) {
                g.hasError = !0;
                g.error = a;
                g.exports = null;
                throw a
            } finally {}
            w && (g.exports = w);
            var B;
            g.special & ba ? g.exports != null && p.call(g.exports, "default") && (g.defaultExport = B = g.exports["default"]) : g.defaultExport = B = g.exports;
            if (typeof B === "function") {
                h = B.__superConstructor__;
                (!B.displayName || h && h.displayName === B.displayName) && (B.displayName = (B.name || "(anonymous)") + " [from " + d + "]")
            }
            g.factoryFinished = !0
        } else g.exports = l;
        y = "__isRequired__" + d;
        u = e[y];
        u && !R(u) && K(y, ca)
    }

    function G(b) {
        if (a.getErrorSafe != null) return a.getErrorSafe(b);
        return b != null && typeof b === "object" && typeof b.message === "string" ? b : s("Non-error thrown: %s", String(b))
    }

    function H(b, c) {
        var d = a.ErrorSerializer;
        d && d.aggregateError(b, c)
    }

    function I(a, b) {
        a = G(a);
        H(a, {
            messageFormat: 'Module "%s"',
            messageParams: [b],
            forcedKey: b.startsWith("__") ? null : b
        });
        throw a
    }

    function ea() {
        return z
    }

    function fa() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function J(a) {
        if (a.nonJSDeps) return;
        a.nonJSDeps = !0;
        a.dependencies && a.dependencies.forEach(J)
    }

    function K(b, c, e, g, h, i, j) {
        c === void 0 ? (c = [], e = b, b = P()) : e === void 0 && (e = c, q.call(b) === "[object Array]" ? (c = b, b = P(c.join(","))) : c = []);
        var k = {
                cancel: N.bind(this, b)
            },
            l = L(b);
        if (!c && !e && i) {
            l.refcount += i;
            return k
        }
        f[b] = {
            id: b,
            dependencies: c,
            meta: j,
            category: g,
            defined: v ? x() : null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        };
        if (l.dependencies && l.reload !== !0) return k;
        i && (l.refcount += i);
        b = c.map(L);
        l.factory = e;
        l.dependencies = b;
        l.context = h;
        l.special = g;
        (l.nonJSDeps || la(l)) && (l.nonJSDeps = !1, J(l));
        S(l);
        if (d.length > 0) {
            var m = d;
            d = [];
            j = a.ScheduleJSWork ? a.ScheduleJSWork : ma;
            j(function() {
                while (m.length > 0) C.call(null, m.pop().id)
            })()
        }
        return k
    }

    function L(a) {
        var b = e[a];
        if (b) return b;
        b = new M(a, 0);
        e[a] = b;
        return b
    }

    function M(a, b, c) {
        this.id = a, this.refcount = b, this.exports = c || null, this.defaultExport = c || o, this.factory = void 0, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = void 0, this.depPosition = 0, this.context = void 0, this.special = 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1, this.nonJSDeps = !1
    }

    function N(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = null;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && N(c.id)
            }
    }

    function O(a, b, c) {
        var d = u ? "__requireLazy__x__" + g++ : "__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++;
        return K("__requireLazy__" + d, a, Z()(b, "requireLazy", {
            propagationType: 0
        }), j | n, c, 1)
    }

    function P(a) {
        return "__mod__" + (a != null ? a + "__" : "") + g++
    }

    function Q(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (Q(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !R(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function ga(a) {
        var b = a.dependencies;
        if (!b) throw s("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        h++;
        Q(b, [], a);
        a.depPosition++;
        S(a)
    }

    function ha(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                ga(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function R(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function ia(a) {
        a.depPosition++, S(a)
    }

    function ja(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b != null) {
            var c = b;
            c.nonJSDeps && J(a);
            b = c.nextDepWaitingNext;
            c.nextDepWaitingNext = null;
            var d = !e[c.id];
            d || ia(c)
        }
    }

    function ka(a) {
        return a.special & j
    }

    function la(a) {
        return a.special & n
    }

    function S(a) {
        while (a.dependencies != null && a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = R(b);
            if (!c && a != b) {
                ha(a, b);
                return
            }
            a.depPosition++
        }
        ka(a) && d.push(a);
        a.nextDepWaitingHead !== null && ja(a)
    }

    function T(a) {
        if (a.sideEffectDependencyException != null) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    T(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & l) try {
                    C.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function U(a, b) {
        e[a] = new M(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        }
    }
    U("module", 0);
    U("exports", 0);
    U("define", K);
    U("global", a);
    U("require", C);
    U("importDefault", D);
    U("importNamespace", E);
    U("requireDynamic", V);
    U("requireLazy", O);
    U("requireWeak", W);
    U("ifRequired", X);
    U("ifRequireable", Y);
    b = [C.call(null, "global"), C.call(null, "require"), C.call(null, "requireDynamic"), C.call(null, "requireLazy"), null, null];
    c = [C.call(null, "global"), C.call(null, "require"), C.call(null, "importDefault"), C.call(null, "importNamespace"), C.call(null, "requireLazy"), null, null];
    K.amd = {};
    a.define = K;
    a.require = C;
    a.importDefault = D;
    a.importNamespace = E;
    a.requireDynamic = V;
    a.requireLazy = O;

    function V(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function W(a, b) {
        X.call(null, a, function(a) {
            b(a)
        }, function() {
            K("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], Z()(function() {
                return b(B(e[a]))
            }, "requireWeak"), j, null, 1)
        })
    }

    function X(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(B(a))
        } else if (typeof c === "function") return c()
    }

    function Y(a, b, c) {
        if (t !== !0) return X.call(null, a, b, c);
        var d = e[a];
        if (d && d.nonJSDeps && R(d)) {
            if (typeof b === "function") return b(C.call(null, a))
        } else if (typeof c === "function") return c()
    }
    $ = {
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: r
    };

    function ma(a) {
        return a
    }

    function Z() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : ma;
        return function() {
            return b.apply(void 0, arguments)
        }
    }
    U("__getTotalRequireCalls", ea);
    U("__getModuleTimeDetails", fa);
    U("__debug", $);
    a.__d = function(a, b, c, d) {
        Z()(function() {
            K(a, b, c, (d || k) | m, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };

    function $(a, b) {
        return !0
    }
    if (a.__d_stub) {
        for (var W = 0; W < a.__d_stub.length; W++) a.__d.apply(null, a.__d_stub[W]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var Y = 0; Y < a.__rl_stub.length; Y++) O.apply(null, a.__rl_stub[Y]);
        delete a.__rl_stub
    }
    D = function() {};
    a.$RefreshReg$ = D;
    a.$RefreshSig$ = function() {
        return function(a) {
            return a
        }
    }
})(this);
(function(a) {
    var b = a.performance;
    if (b && b.setResourceTimingBufferSize) {
        var c = function(c) {
            b.setResourceTimingBufferSize(c && c.smaller_resource_timing_buffer ? 1e3 : 1e5), b.onresourcetimingbufferfull = function() {
                a.__isresourcetimingbufferfull = !0
            }, b.setResourceTimingBufferSize = function() {}
        };
        a.requireLazy ? a.requireLazy(["Env"], c) : c(a.Env)
    }
})(this);

__d("fb-error-lite", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function a(a) {
        var b = new Error(a);
        if (b.stack === void 0) try {
            throw b
        } catch (a) {}
        b.messageFormat = a;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        b.messageParams = d.map(function(a) {
            return String(a)
        });
        b.taalOpcodes = [g.PREVIOUS_FRAME];
        return b
    }
    b = {
        err: a,
        TAALOpcode: g
    };
    e.exports = b
}), null);
__d("$-core", ["fb-error-lite"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = b("fb-error-lite").err,
        h = b("fb-error-lite").TAALOpcode;

    function a(a) {
        return i(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function c(a) {
        return i(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function i(a, b) {
        if (!b) {
            a = g('Tried to get element with id of "%s" but it is not present on the page', String(a));
            a.taalOpcodes = a.taalOpcodes || [];
            a.taalOpcodes = [h.PREVIOUS_FILE];
            throw a
        }
        return b
    }
    a.fromIDOrElement = c
}), null);
__d("$", ["$-core"], (function(a, b, c, d, e, f) {
    a = b("$-core");
    e.exports = a
}), null);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    e.exports = c
}), null);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
}), null);
__d("invariant", ["Env", "fb-error-lite", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g, h = b("fb-error-lite").TAALOpcode;

    function a(a, b) {
        if (!a) {
            var c = b;
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            if (typeof c === "number") {
                var g = i(c, e),
                    j = g.message,
                    k = g.decoderLink;
                c = j;
                e.unshift(k)
            } else if (c === void 0) {
                c = "Invariant: ";
                for (var l = 0; l < e.length; l++) c += "%s,"
            }
            var m = c,
                n = new Error(m);
            n.name = "Invariant Violation";
            n.messageFormat = c;
            n.messageParams = e.map(function(a) {
                return String(a)
            });
            n.taalOpcodes = [h.PREVIOUS_FRAME];
            n.stack;
            throw n
        }
    }

    function i(a, c) {
        var d = "Minified invariant #" + a + "; %s";
        c.length > 0 && (d += " Params: " + c.map(function(a) {
            return "%s"
        }).join(", "));
        a = (g || (g = b("Env"))).show_invariant_decoder === !0 ? "visit " + j(a, c) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function j(a, b) {
        a = "https://www.internalfb.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
}), null);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || g(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    e.exports = a
}), null);
__d("performance", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    e.exports = c
}), null);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now) c = function() {
        return (g || (g = b("performance"))).now()
    };
    else {
        d = a._cstart;
        f = Date.now();
        var h = typeof d === "number" && d < f ? d : f,
            i = 0;
        c = function() {
            var a = Date.now(),
                b = a - h;
            b < i && (h -= i - b, b = a - h);
            i = b;
            return b
        }
    }
    e.exports = c
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
}), null);
__d("fb-error", ["performanceNow", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function i(b) {
        var a = new Error(b);
        if (a.stack === void 0) try {
            throw a
        } catch (a) {}
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [h.PREVIOUS_FRAME];
        return a
    }
    var j = !1,
        k = {
            errorListener: function(b) {
                var c = a.console,
                    d = c[b.type] ? b.type : "error";
                if (b.type === "fatal" || d === "error" && !j) {
                    d = b.message;
                    c.error("ErrorUtils caught an error:\n\n" + d + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
                    j = !0
                }
            }
        },
        l = {
            access_token: null
        },
        m = 6,
        n = 6e4,
        o = 10 * n,
        p = new Map(),
        q = 0;

    function r() {
        var a = (g || (g = b("performanceNow")))();
        if (a > q + n) {
            var c = a - o;
            for (var d = p, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                var i = h[0];
                h = h[1];
                h.lastAccessed < c && p["delete"](i)
            }
            q = a
        }
    }

    function s(a) {
        r();
        var c = (g || (g = b("performanceNow")))(),
            d = p.get(a);
        if (d == null) {
            p.set(a, {
                dropped: 0,
                logged: [c],
                lastAccessed: c
            });
            return 1
        }
        a = d.dropped;
        var e = d.logged;
        d.lastAccessed = c;
        while (e[0] < c - n) e.shift();
        if (e.length < m) {
            d.dropped = 0;
            e.push(c);
            return a + 1
        } else {
            d.dropped++;
            return null
        }
    }
    var t = {
        shouldLog: function(a) {
            return s(a.hash)
        }
    };

    function u(a) {
        var b = null;
        a == null || typeof a !== "object" ? b = i("Non-object thrown: %s", String(a)) : typeof a.message !== "string" ? b = i("Non-error thrown: %s, keys: %s", String(a), JSON.stringify(Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (b = i("Non-extensible thrown: %s", String(a.message)));
        if (b != null) {
            b.taalOpcodes = b.taalOpcodes || [];
            b.taalOpcodes.push(h.PREVIOUS_FRAME);
            return b
        }
        return a
    }
    var v = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        w;

    function aa(a) {
        var b = a.error != null ? u(a.error) : i(a.message || "");
        b.fileName == null && a.filename != null && (b.fileName = a.filename);
        b.line == null && a.lineno != null && (b.line = a.lineno);
        b.column == null && a.colno != null && (b.column = a.colno);
        b.guardList = [v];
        b.loggingSource = "ONERROR";
        b.message.indexOf("ResizeObserver") >= 0 && (b.type = "warn");
        (a = w) == null ? void 0 : a.reportError(b)
    }
    var x = {
            setup: function(b) {
                if (typeof a.addEventListener !== "function") return;
                if (w != null) return;
                w = b;
                a.addEventListener("error", aa)
            }
        },
        y = [],
        z = {
            pushGuard: function(a) {
                y.unshift(a)
            },
            popGuard: function() {
                y.shift()
            },
            inGuard: function() {
                return y.length !== 0
            },
            cloneGuardList: function() {
                return y.map(function(a) {
                    return a.name
                })
            },
            findDeferredSource: function() {
                for (var a = 0; a < y.length; a++) {
                    var b = y[a];
                    if (b.deferredSource != null) return b.deferredSource
                }
            }
        },
        A = [],
        B = function() {
            function a() {
                this.metadata = [].concat(A)
            }
            var b = a.prototype;
            b.addEntries = function() {
                var a;
                (a = this.metadata).push.apply(a, arguments);
                return this
            };
            b.addEntry = function(a, b, c) {
                this.metadata.push([a, b, c]);
                return this
            };
            b.isEmpty = function() {
                return this.metadata.length === 0
            };
            b.clearEntries = function() {
                this.metadata = []
            };
            b.format = function() {
                var a = [];
                this.metadata.forEach(function(b) {
                    if (b && b.length) {
                        b = b.map(function(a) {
                            return a != null ? String(a).replace(/:/g, "_") : ""
                        }).join(":");
                        a.push(b)
                    }
                });
                return a
            };
            b.getAll = function() {
                return this.metadata
            };
            a.addGlobalMetadata = function(a, b, c) {
                A.push([a, b, c])
            };
            a.getGlobalMetadata = function() {
                return A
            };
            a.unsetGlobalMetadata = function(a, b) {
                A = A.filter(function(c) {
                    return !(Array.isArray(c) && c[0] === a && c[1] === b)
                })
            };
            return a
        }(),
        C = {
            debug: 1,
            info: 2,
            warn: 3,
            error: 4,
            fatal: 5
        };

    function c(a, b) {
        if (Object.isFrozen(a)) return;
        b.type && ((!a.type || C[a.type] > C[b.type]) && (a.type = b.type));
        var c = b.metadata;
        if (c != null) {
            var d;
            d = (d = a.metadata) != null ? d : new B();
            c != null && d.addEntries.apply(d, c.getAll());
            a.metadata = d
        }
        b.project != null && (a.project = b.project);
        b.errorName != null && (a.errorName = b.errorName);
        b.componentStack != null && (a.componentStack = b.componentStack);
        b.deferredSource != null && (a.deferredSource = b.deferredSource);
        b.blameModule != null && (a.blameModule = b.blameModule);
        d = (c = a.messageFormat) != null ? c : a.message;
        c = (c = a.messageParams) != null ? c : [];
        if (d !== b.messageFormat && b.messageFormat != null) {
            var e;
            d += " [Caught in: " + b.messageFormat + "]";
            c.push.apply(c, (e = b.messageParams) != null ? e : [])
        }
        a.messageFormat = d;
        a.messageParams = c;
        e = b.forcedKey;
        d = a.forcedKey;
        b = e != null && d != null ? e + "_" + d : (c = e) != null ? c : d;
        a.forcedKey = b
    }

    function d(a) {
        var b;
        return ba((b = a.messageFormat) != null ? b : a.message, a.messageParams || [])
    }

    function ba(a, b) {
        var c = 0;
        a = a.replace(/%s/g, function() {
            return c < b.length ? b[c++] : "NOPARAM"
        });
        c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
        return a
    }

    function f(a) {
        return ((a = a) != null ? a : []).map(function(a) {
            return String(a)
        })
    }
    var D = {
            aggregateError: c,
            toReadableMessage: d,
            toStringParams: f
        },
        ca = 5,
        E = [];

    function F(a) {
        E.push(a), E.length > ca && E.shift()
    }

    function G(a) {
        var b = a.getAllResponseHeaders();
        if (b != null && b.indexOf("X-FB-Debug") >= 0) {
            b = a.getResponseHeader("X-FB-Debug");
            b && F(b)
        }
    }

    function da() {
        return E
    }
    var H = {
            add: F,
            addFromXHR: G,
            getAll: da
        },
        ea = "abcdefghijklmnopqrstuvwxyz012345";

    function I() {
        var a = 0;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (f != null) {
                var g = f.length;
                for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h)
            }
        }
        var i = "";
        for (var j = 0; j < 6; j++) i = ea.charAt(a & 31) + i, a >>= 5;
        return i
    }
    var J = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
        fa = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

    function ga(a) {
        var b = a.name,
            c = a.message;
        a = a.stack;
        if (a == null) return null;
        if (b != null && c != null && c !== "") {
            var d = b + ": " + c + "\n";
            if (a.startsWith(d)) return a.substr(d.length);
            if (a === b + ": " + c) return null
        }
        if (b != null) {
            d = b + "\n";
            if (a.startsWith(d)) return a.substr(d.length)
        }
        if (c != null && c !== "") {
            b = ": " + c + "\n";
            d = a.indexOf(b);
            c = a.substring(0, d);
            if (/^\w+$/.test(c)) return a.substring(d + b.length)
        }
        return a.replace(fa, "")
    }

    function K(a) {
        a = a.trim();
        var b;
        a;
        var c, d, e;
        if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
        else {
            var f;
            for (var g = 0; g < J.length; g++) {
                var h = J[g];
                f = a.match(h);
                if (f != null) break
            }
            f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
            b = b.replace(/^at /, "").trim()
        }
        h = {
            identifier: b,
            script: c,
            line: d,
            column: e
        };
        h.text = L(h);
        return h
    }

    function ha(a) {
        return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(K)
    }

    function ia(a) {
        a = ga(a);
        return ha(a)
    }

    function ja(a) {
        if (a == null || a === "") return null;
        a = a.split("\n");
        a.splice(0, 1);
        return a.map(function(a) {
            return a.trim()
        })
    }

    function L(a) {
        var b = a.identifier,
            c = a.script,
            d = a.line;
        a = a.column;
        b = "    at " + ((b = b) != null ? b : "<unknown>");
        c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
        return b
    }

    function M(c) {
        var d, e, f, i, j, k, l = ia(c);
        d = (d = c.taalOpcodes) != null ? d : [];
        var m = c.framesToPop;
        if (m != null) {
            m = Math.min(m, l.length);
            while (m-- > 0) d.unshift(h.PREVIOUS_FRAME)
        }
        m = (m = c.messageFormat) != null ? m : c.message;
        e = ((e = c.messageParams) != null ? e : []).map(function(a) {
            return String(a)
        });
        var n = ja(c.componentStack),
            o = n == null ? null : n.map(K),
            p = c.metadata ? c.metadata.format() : new B().format();
        p.length === 0 && (p = void 0);
        var q = l.map(function(a) {
            return a.text
        }).join("\n");
        f = (f = c.errorName) != null ? f : c.name;
        var r = c.type || "error",
            s = c.loggingSource,
            t = c.project;
        i = (i = c.lineNumber) != null ? i : c.line;
        j = (j = c.columnNumber) != null ? j : c.column;
        k = (k = c.fileName) != null ? k : c.sourceURL;
        var u = l.length > 0;
        u && i == null && (i = l[0].line);
        u && j == null && (j = l[0].column);
        u && k == null && (k = l[0].script);
        o = {
            blameModule: c.blameModule,
            column: j == null ? null : String(j),
            clientTime: Math.floor(Date.now() / 1e3),
            componentStackFrames: o,
            deferredSource: c.deferredSource != null ? M(c.deferredSource) : null,
            extra: (u = c.extra) != null ? u : {},
            fbtrace_id: c.fbtrace_id,
            guardList: (j = c.guardList) != null ? j : [],
            hash: I(f, q, r, t, s),
            isNormalizedError: !0,
            line: i == null ? null : String(i),
            loggingSource: s,
            message: D.toReadableMessage(c),
            messageFormat: m,
            messageParams: e,
            metadata: p,
            name: f,
            page_time: Math.floor((g || (g = b("performanceNow")))()),
            project: t,
            reactComponentStack: n,
            script: k,
            serverHash: c.serverHash,
            stack: q,
            stackFrames: l,
            type: r,
            xFBDebug: H.getAll()
        };
        c.forcedKey != null && (o.forcedKey = c.forcedKey);
        d.length > 0 && (o.taalOpcodes = d);
        u = a.location;
        u && (o.windowLocationURL = u.href);
        for (var v in o) o[v] == null && delete o[v];
        return o
    }

    function ka(a) {
        return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null
    }
    var N = {
            formatStackFrame: L,
            normalizeError: M,
            ifNormalizedError: ka
        },
        la = "<global.react>",
        O = [],
        P = [],
        Q = 50,
        R = !1,
        S = {
            history: P,
            addListener: function(a, b) {
                b === void 0 && (b = !1), O.push(a), b || P.forEach(function(b) {
                    return a(b, (b = b.loggingSource) != null ? b : "DEPRECATED")
                })
            },
            unshiftListener: function(a) {
                O.unshift(a)
            },
            removeListener: function(a) {
                b("removeFromArray")(O, a)
            },
            reportError: function(a) {
                a = N.normalizeError(a);
                S.reportNormalizedError(a)
            },
            reportNormalizedError: function(b) {
                if (R) return !1;
                var a = z.cloneGuardList();
                b.componentStackFrames && a.unshift(la);
                a.length > 0 && (b.guardList = a);
                if (b.deferredSource == null) {
                    a = z.findDeferredSource();
                    a != null && (b.deferredSource = N.normalizeError(a))
                }
                P.length > Q && P.splice(Q / 2, 1);
                P.push(b);
                R = !0;
                for (var a = 0; a < O.length; a++) try {
                    var c;
                    O[a](b, (c = b.loggingSource) != null ? c : "DEPRECATED")
                } catch (a) {}
                R = !1;
                return !0
            }
        };
    S.addListener(k.errorListener);
    var ma = "<anonymous guard>",
        T = !1,
        U = {
            applyWithGuard: function(a, b, c, d) {
                z.pushGuard({
                    name: (d == null ? void 0 : d.name) || (a.name ? "func_name:" + a.name : null) || ma,
                    deferredSource: d == null ? void 0 : d.deferredSource
                });
                if (T) try {
                    return a.apply(b, c)
                } finally {
                    z.popGuard()
                }
                try {
                    return Function.prototype.apply.call(a, b, c)
                } catch (h) {
                    try {
                        b = (b = d) != null ? b : {};
                        var e = b.deferredSource,
                            f = b.onError;
                        b = b.onNormalizedError;
                        var g = u(h);
                        D.aggregateError(g, {
                            deferredSource: e,
                            project: (e = d == null ? void 0 : d.project) != null ? e : "ErrorGuard",
                            type: (e = d == null ? void 0 : d.errorType) != null ? e : "fatal"
                        });
                        d = N.normalizeError(g);
                        d.loggingSource = "GUARDED";
                        g == null && a && (d.extra[a.toString().substring(0, 100)] = "function", c != null && c.length && (d.extra[Array.from(c).toString().substring(0, 100)] = "args"));
                        d.guardList = z.cloneGuardList();
                        f && f(g);
                        b && b(d);
                        S.reportNormalizedError(d)
                    } catch (a) {}
                } finally {
                    z.popGuard()
                }
            },
            guard: function(a, b) {
                function c() {
                    for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                    return U.applyWithGuard(a, this, d, b)
                }
                a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                return c
            },
            inGuard: function() {
                return z.inGuard()
            },
            skipGuardGlobal: function(a) {
                T = a
            }
        },
        V = 1024,
        W = [],
        na = 0;

    function X(a) {
        return String(a)
    }

    function Y(a) {
        return a == null ? null : String(a)
    }

    function oa(a, b) {
        var c = {};
        b && b.forEach(function(a) {
            c[a] = !0
        });
        Object.keys(a).forEach(function(b) {
            a[b] ? c[b] = !0 : c[b] && delete c[b]
        });
        return Object.keys(c)
    }

    function Z(a) {
        return ((a = a) != null ? a : []).map(function(a) {
            return {
                column: Y(a.column),
                identifier: a.identifier,
                line: Y(a.line),
                script: a.script
            }
        })
    }

    function pa(a) {
        a = String(a);
        return a.length > V ? a.substring(0, V - 3) + "..." : a
    }

    function qa(a, b) {
        var c;
        c = {
            appId: Y(b.appId),
            cavalry_lid: b.cavalry_lid,
            access_token: l.access_token,
            ancestor_hash: a.hash,
            bundle_variant: (c = b.bundle_variant) != null ? c : null,
            clientTime: X(a.clientTime),
            column: a.column,
            componentStackFrames: Z(a.componentStackFrames),
            events: a.events,
            extra: oa(a.extra, b.extra),
            forcedKey: a.forcedKey,
            frontend_env: (c = b.frontend_env) != null ? c : null,
            guardList: a.guardList,
            line: a.line,
            loggingFramework: b.loggingFramework,
            messageFormat: pa(a.messageFormat),
            messageParams: a.messageParams.map(pa),
            name: a.name,
            sample_weight: Y(b.sample_weight),
            script: a.script,
            site_category: b.site_category,
            stackFrames: Z(a.stackFrames),
            type: a.type,
            page_time: Y(a.page_time),
            project: a.project,
            push_phase: b.push_phase,
            report_source: b.report_source,
            report_source_ref: b.report_source_ref,
            rollout_hash: (c = b.rollout_hash) != null ? c : null,
            script_path: b.script_path,
            server_revision: Y(b.server_revision),
            spin: Y(b.spin),
            svn_rev: String(b.client_revision),
            additional_client_revisions: Array.from((c = b.additional_client_revisions) != null ? c : []).map(X),
            taalOpcodes: a.taalOpcodes == null ? null : a.taalOpcodes.map(function(a) {
                return a
            }),
            web_session_id: b.web_session_id,
            version: "3",
            xFBDebug: a.xFBDebug
        };
        b = a.blameModule;
        var d = a.deferredSource;
        b != null && (c.blameModule = String(b));
        d && d.stackFrames && (c.deferredSource = {
            stackFrames: Z(d.stackFrames)
        });
        a.metadata && (c.metadata = a.metadata);
        a.loadingUrls && (c.loadingUrls = a.loadingUrls);
        a.serverHash != null && (c.serverHash = a.serverHash);
        a.windowLocationURL != null && (c.windowLocationURL = a.windowLocationURL);
        a.loggingSource != null && (c.loggingSource = a.loggingSource);
        return c
    }

    function ra(a, b, c) {
        na++;
        if (b.sample_weight === 0) return !1;
        var d = t.shouldLog(a);
        if (d == null) return !1;
        b = qa(a, b);
        Object.assign(b, {
            ancestors: W.slice(),
            clientWeight: X(d),
            page_position: X(na)
        });
        W.length < 15 && W.push(a.hash);
        c(b);
        return !0
    }
    var sa = {
            createErrorPayload: qa,
            postError: ra
        },
        $ = null,
        ta = !1;

    function ua(a) {
        if (!$) return;
        var b = a.reason;
        if (b != null && typeof b === "object" && (b.name == null || b.name === "" || b.message == null || b.message === "")) try {
            var c = i("UnhandledRejection: %s", JSON.stringify(b));
            c = N.normalizeError(c)
        } catch (a) {
            var d = i("UnhandledRejection: (circular) %s", Object.keys(b).join(","));
            c = N.normalizeError(d)
        } else c = N.normalizeError(u(b));
        c.loggingSource || (c.loggingSource = "ONUNHANDLEDREJECTION");
        $.reportNormalizedError(c);
        a.preventDefault()
    }

    function va(b) {
        $ = b, typeof a.addEventListener === "function" && !ta && (ta = !0, a.addEventListener("unhandledrejection", ua))
    }
    var wa = {
        onunhandledrejection: ua,
        setup: va
    };
    c = {
        preSetup: function(a) {
            (a == null || a.ignoreOnError !== !0) && x.setup(S), (a == null || a.ignoreOnUnahndledRejection !== !0) && wa.setup(S)
        },
        setup: function(a, b) {
            S.addListener(function(c) {
                sa.postError(c, a, b)
            })
        }
    };
    var xa = function() {
        function a(a) {
            this.project = a, this.events = [], this.metadata = new B(), this.taalOpcodes = []
        }
        var b = a.prototype;
        b.$1 = function(b, c) {
            var d = String(c),
                e = this.events,
                f = this.project,
                g = this.metadata,
                i = this.blameModule,
                j = this.forcedKey,
                k = this.error,
                l;
            for (var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
            if (this.normalizedError) {
                var p = {
                    message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
                    params: [].concat(this.normalizedError.messageParams, n),
                    forcedKey: j
                };
                l = Object.assign({}, this.normalizedError, {
                    message: p.message,
                    messageFormat: p.message,
                    messageParams: D.toStringParams(p.params),
                    project: f,
                    type: b
                })
            } else if (k) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), D.aggregateError(k, {
                messageFormat: d,
                messageParams: D.toStringParams(n),
                errorName: k.name,
                forcedKey: j,
                project: f,
                type: b
            }), l = N.normalizeError(k);
            else {
                k = new Error(d);
                if (k.stack === void 0) try {
                    throw k
                } catch (a) {}
                k.messageFormat = d;
                k.messageParams = D.toStringParams(n);
                k.blameModule = i;
                k.forcedKey = j;
                k.project = f;
                k.type = b;
                k.taalOpcodes = [h.PREVIOUS_FRAME, h.PREVIOUS_FRAME].concat(this.taalOpcodes);
                l = N.normalizeError(k);
                l.name = "FBLogger"
            }
            l.loggingSource = "FBLOGGER";
            g.isEmpty() || (l.metadata = g.format());
            if (e.length > 0)
                if (l.events != null) {
                    var q;
                    (q = l.events).push.apply(q, e)
                } else l.events = e;
            S.reportNormalizedError(l);
            return k
        };
        b.fatal = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["fatal", a].concat(c))
        };
        b.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["error", a].concat(c))
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        b.info = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["info", a].concat(c))
        };
        b.debug = function(a) {};
        b.mustfixThrow = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            var e = this.$1.apply(this, ["error", a].concat(c));
            e || (e = i("mustfixThrow does not support catchingNormalizedError"), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(h.PREVIOUS_FRAME));
            throw e
        };
        b.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        b.catchingNormalizedError = function(a) {
            this.normalizedError = a;
            return this
        };
        b.event = function(a) {
            this.events.push(a);
            return this
        };
        b.blameToModule = function(a) {
            this.blameModule = a;
            return this
        };
        b.blameToPreviousFile = function() {
            this.taalOpcodes.push(h.PREVIOUS_FILE);
            return this
        };
        b.blameToPreviousFrame = function() {
            this.taalOpcodes.push(h.PREVIOUS_FRAME);
            return this
        };
        b.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(h.PREVIOUS_DIR);
            return this
        };
        b.addToCategoryKey = function(a) {
            this.forcedKey = a;
            return this
        };
        b.addMetadata = function(a, b, c) {
            this.metadata.addEntry(a, b, c);
            return this
        };
        return a
    }();
    d = function(a, b) {
        var c = new xa(a);
        return b != null ? c.event(a + "." + b) : c
    };
    d.addGlobalMetadata = function(a, b, c) {
        B.addGlobalMetadata(a, b, c)
    };
    f = {
        blameToPreviousFile: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) != null ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FILE);
            return a
        },
        blameToPreviousFrame: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) != null ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FRAME);
            return a
        },
        blameToPreviousDirectory: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) != null ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_DIR);
            return a
        }
    };
    G = {
        err: i,
        ErrorBrowserConsole: k,
        ErrorDynamicData: l,
        ErrorFilter: t,
        ErrorGlobalEventHandler: x,
        ErrorGuard: U,
        ErrorGuardState: z,
        ErrorMetadata: B,
        ErrorNormalizeUtils: N,
        ErrorPoster: sa,
        ErrorPubSub: S,
        ErrorSerializer: D,
        ErrorSetup: c,
        ErrorXFBDebug: H,
        FBLogger: d,
        getErrorSafe: u,
        getSimpleHash: I,
        TAAL: f,
        TAALOpcode: h
    };
    e.exports = G
}), null);
__d("ErrorGuard", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").ErrorGuard;
    e.exports = a
}), null);
__d("CallbackDependencyManager", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            a = this.$1.get(a);
            if (!a) return;
            for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var h = f[0];
                f = f[1] - 1;
                a.set(h, f);
                f <= 0 && a["delete"](h);
                f = this.$2.get(h);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](h);
                        (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, [])
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var b = this;
        this.remove = function() {
            b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
        };
        this.subscriber = a
    };
    e.exports = a
}), null);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(b("EventSubscription"));
    e.exports = a
}), null);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    c = b;
    e.exports = c
}), null);
__d("FBLogger", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").FBLogger;
    e.exports = a
}), null);
__d("unrecoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        d ? c = c.catching(d) : c = c.blameToPreviousFrame();
        return c.mustfixThrow(a)
    }
}), null);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.removeListener = function(a) {
            this.$2.removeSubscription(a)
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("BaseEventEmitter"));
    e.exports = a
}), null);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    e.exports = a
}), null);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        return Array.isArray(a) ? a : [a]
    }

    function j(a) {
        return a instanceof k || a === k ? a : k
    }
    var k = function() {
            function a() {
                var a = new(b("EventEmitter"))();
                this.$3 = new l();
                this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(b("CallbackDependencyManager"))();
                this.$4 = []
            }
            var c = a.prototype;
            c.subscribe = function(a, c, d) {
                a = i(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || g(0, 1966, a)
                });
                typeof c === "function" || g(0, 1967, c);
                d = d || "all";
                d === "new" || d === "all" || g(0, 1968, d);
                a = a.map(function(a) {
                    var b = this.$5.bind(this, c, a);
                    b.__SMmeta = c.__SMmeta;
                    if (d === "new") return this.$2.addListener(a, b);
                    this.$4.push({});
                    a = this.$2.addRetroactiveListener(a, b);
                    this.$4.pop();
                    return a
                }, this);
                return new(b("ArbiterToken"))(this, a)
            };
            c.$5 = function(a, c, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[c] === !1) return;
                a = (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [c, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[c] = a
            };
            c.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            c.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            c.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            c.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
            };
            c.inform = function(a, b, c) {
                var d = Array.isArray(a);
                a = i(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var h = a[f];
                    h || g(0, 1970, h);
                    this.$3.setHoldingBehavior(h, c);
                    this.$2.emitAndHold(h, b);
                    this.$6(h, b, e)
                }
                h = this.$4.pop();
                return d ? h : h[a[0]]
            };
            c.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || g(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            c.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            c.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(j(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(j(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(j(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(j(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(j(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(j(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(j(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(j(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(j(this), arguments)
            };
            return a
        }(),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(b("EventHolder"));
    k.call(k);
    e.exports = k
}), null);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("BanzaiLazyQueue", [], (function(a, b, c, d, e, f) {
    var g = [];
    a = {
        queuePost: function(a, b, c) {
            g.push([a, b, c])
        },
        flushQueue: function() {
            var a = g;
            g = [];
            return a
        }
    };
    e.exports = a
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = {
        canUseDOM: b,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
        canUseViewport: b && !!window.screen,
        isInWorker: typeof WorkerGlobalScope === "function"
    };
    e.exports = c
}), null);
__d("gkx", ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {};

    function j(a) {
        var c = h[a];
        c != null || g(0, 11797, a);
        i[a] || (i[a] = !0, b("ExecutionEnvironment").canUseDOM && b("BanzaiLazyQueue").queuePost("gk2_exposure", {
            identifier: a,
            hash: c.hash
        }));
        return c.result
    }
    j.add = function(a) {
        for (var b in a) b in h || (h[b] = a[b])
    };
    j.addLoggedInternal = function(a) {
        j.add(a);
        for (var b in a) i[b] = !0
    };
    a = b("emptyFunction");
    j.getGKs = function() {
        return null
    };
    j.getLogged = function() {
        return Object.keys(i).map(function(a) {
            return {
                identifier: a,
                hash: h[a].hash
            }
        })
    };
    j.setPass = a;
    j.setFail = a;
    c = j;
    e.exports = c
}), null);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;

    function a(a) {
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !h(a) || a.size === void 0 || g(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function h(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null
    }
}), null);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey,
        i = b("DataStoreConfig").useExpando,
        j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
        k = {},
        l = 1;

    function m(a) {
        if (typeof a === "string") return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }

    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object") return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object") return j["delete"](a);
            else i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}), null);
__d("BigPipePlugins", ["DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        a.runPluginOnPagelet = function(b) {
            a.getPluginList().forEach(function(a) {
                a(b)
            })
        };
        a.getPluginList = function() {
            return [a.$1]
        };
        a.$1 = function(b) {
            if (!b) return;
            b = b.querySelectorAll("div[data-fte]");
            for (var c = 0, d = b.length; c < d; c++) a.$2(b[c], "data-ft", "data-ft")
        };
        a.$2 = function(a, c, d) {
            var e = a.getAttribute(c);
            e && (b("DataStore").set(a, d, e), a.removeAttribute(c))
        };
        return a
    }();
    e.exports = a
}), null);
__d("objectValues", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        return Object.values(a)
    }
}), null);
__d("BootloaderEvents", ["Arbiter", "objectValues"], (function(a, b, c, d, e, f) {
    f.flattenResourceMapSet = a;
    f.newResourceMapSet = c;
    f.notifyBootloadStart = d;
    f.notifyBootload = e;
    f.notifyDeferTimeout = l;
    f.onBootload = m;
    f.onDeferTimeout = n;
    f.getActiveBootloads = o;
    f.notifyHasteResponse = p;
    f.onHasteResponse = q;
    var g = "bootloader/bootload",
        h = "hasteResponse/handle",
        i = "bootloader/defer_timeout",
        j = new(b("Arbiter"))(),
        k = new Set();

    function a(a) {
        var c = new Map();
        for (var a = b("objectValues")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= a.length) break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            for (var f = f, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (g) {
                    if (h >= f.length) break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                var j = i[0];
                i = i[1];
                c.set(j, i)
            }
        }
        return c
    }

    function c() {
        return {
            blocking: new Map(),
            nonblocking: new Map(),
            "default": new Map()
        }
    }

    function d(a) {
        k.add(a)
    }

    function e(a) {
        k["delete"](a), j.inform(g, a, "persistent")
    }

    function l(a) {
        j.inform(i, a, "persistent")
    }

    function m(a) {
        return j.subscribe(g, function(b, c) {
            return a(c)
        })
    }

    function n(a) {
        return j.subscribe(i, function(b, c) {
            return a(c)
        })
    }

    function o() {
        return new Set(k)
    }

    function p(a) {
        j.inform(h, a, "persistent")
    }

    function q(a) {
        return j.subscribe(h, function(b, c) {
            return a(c)
        })
    }
}), null);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now && (g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) {
        var h = (g || (g = b("performance"))).timing.navigationStart;
        a = function() {
            return (g || (g = b("performance"))).now() + h
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new(b("CallbackDependencyManager"))(), this.$2 = new Map()
        }
        var c = a.prototype;
        c.rsrcDone = function(a) {
            return a
        };
        c.bootload = function(a) {
            return "bl:" + a.join(",")
        };
        c.tierOne = function(a) {
            return "t1:" + a
        };
        c.tierTwoStart = function(a) {
            return "t2s:" + a
        };
        c.tierTwo = function(a) {
            return "t2:" + a
        };
        c.tierThreeStart = function(a) {
            return "t3s:" + a
        };
        c.tierThree = function(a) {
            return "t3:" + a
        };
        c.tierOneLog = function(a) {
            return "t1l:" + a
        };
        c.tierTwoLog = function(a) {
            return "t2l:" + a
        };
        c.tierThreeLog = function(a) {
            return "t3l:" + a
        };
        c.beDone = function(a) {
            return "beDone:" + a
        };
        c.notify = function(a) {
            this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a)
        };
        c.getEventTime = function(a) {
            return this.$2.get(a)
        };
        c.registerCallback = function(a, b) {
            this.$1.registerCallback(a, b)
        };
        return a
    }();
    e.exports = a
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        function a() {
            this.$1 = [], this.$2 = null
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$2 != null && !this.$1[a] && (this.$2 = null);
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            if (this.$2 != null) return this.$2;
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return this.$2 = i(d + a.join(""))
        };
        return a
    }();
    e.exports = a;

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
}), null);
__d("CSRBitMap", ["BitMap"], (function(a, b, c, d, e, f) {
    f.add = a;
    f.toCompressedString = c;
    var g = new(b("BitMap"))();

    function a(a) {
        g.set(a)
    }

    function c() {
        return g.toCompressedString()
    }
}), null);
__d("CSRIndexUtil", ["invariant"], (function(a, b, c, d, e, f, g) {
    f.parseCSRIndexes = a;

    function a(a) {
        a.substr(0, 1) === ":" || g(0, 21456, a);
        return a.substr(1).split(",").map(function(a) {
            return parseInt(a, 10)
        })
    }
}), null);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    }
}), null);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
}), null);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
}), null);
__d("BlueCompatBroker", ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isMessengerDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = new Map(),
        k = !1,
        l = function(a) {
            a = new(g || (g = b("URI")))(a);
            return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a) || b("isMessengerDotComURI")(a)
        },
        m = {
            dispatch: function(a) {
                var b = m.getMessageEventString(a, "compatAction");
                if (b != null) {
                    b = j.get(b);
                    b && b(a)
                }
            },
            getMessageEventString: function(a, b) {
                a = a.data;
                if (typeof a === "object") {
                    a = a == null ? void 0 : a[b];
                    if (typeof a === "string") return a
                }
                return ""
            },
            init: function(a) {
                a === void 0 && (a = "");
                if (!k) {
                    document.body && (document.body.style.overflow = "auto");
                    var c = b("isCometAltpayJsSdkIframeAllowedDomain")() ? "https://secure.facebook.com/" : document.referrer,
                        d = c.indexOf("/", 8);
                    c = c.substring(0, d);
                    if (l(c)) {
                        d = new MessageChannel();
                        a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
                        i = d.port1;
                        i.onmessage = m.dispatch;
                        window.parent.postMessage({
                            compatAction: "CompatSetup",
                            iframeKey: a
                        }, c + "/", [d.port2])
                    }
                    try {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
                    } catch (a) {}
                    k = !0
                }
            },
            register: function(a, b) {
                j.set(a, b)
            },
            clear: function(a) {
                j["delete"](a)
            },
            sendMessage: function(a) {
                k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a))
            }
        };
    e.exports = m
}), null);
__d("MessengerEnvironment", ["CurrentEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = babelHelpers["extends"]({}, b("CurrentEnvironment"), {
        messengerui: !1,
        roomschatui: !1,
        setMessengerUI: function(a) {
            g.messengerui = a
        },
        setRoomsChatUI: function(a) {
            g.roomschatui = a
        }
    });
    a = g;
    e.exports = a
}), null);
__d("areEqual", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = [],
        h = [];

    function a(a, b) {
        var c = g.length ? g.pop() : [],
            d = h.length ? h.pop() : [];
        a = i(a, b, c, d);
        c.length = 0;
        d.length = 0;
        g.push(c);
        h.push(d);
        return a
    }

    function i(a, b, c, d) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return !1;
        if (typeof a !== "object" || typeof b !== "object") return !1;
        var e = Object.prototype.toString,
            f = e.call(a);
        if (f != e.call(b)) return !1;
        switch (f) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        e = c.length;
        while (e--)
            if (c[e] == a) return d[e] == b;
        c.push(a);
        d.push(b);
        e = 0;
        if (f === "[object Array]") {
            e = a.length;
            if (e !== b.length) return !1;
            while (e--)
                if (!i(a[e], b[e], c, d)) return !1
        } else if (a instanceof Set) {
            if (a.size !== b.size) return !1;
            f = Array.from(b.values());
            for (var e = a, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (g) {
                    if (h >= e.length) break;
                    j = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    j = h.value
                }
                j = j;
                var k = !1;
                for (var l = 0; l < f.length; l++) {
                    var m = f[l];
                    if (i(j, m, c, d)) {
                        k = !0;
                        f.splice(l, 1);
                        break
                    }
                }
                if (k === !1) return !1
            }
            return !0
        } else {
            if (a.constructor !== b.constructor) return !1;
            if (Object.prototype.hasOwnProperty.call(a, "valueOf") && Object.prototype.hasOwnProperty.call(b, "valueOf")) return a.valueOf() == b.valueOf();
            m = Object.keys(a);
            if (m.length != Object.keys(b).length) return !1;
            for (var j = 0; j < m.length; j++) {
                if (m[j] === "_owner") continue;
                if (!Object.prototype.hasOwnProperty.call(b, m[j]) || !i(a[m[j]], b[m[j]], c, d)) return !1
            }
        }
        c.pop();
        d.pop();
        return !0
    }
}), null);
__d("isCdnURI", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var b = Number(a.getPort());
        if (!!b && b !== 80 && b !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1
    }
}), null);
__d("BlueCompatRouter", ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "gkx", "isCdnURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    c = function(b, c) {
        var d, e = a.__fbNativeClearTimeout || window.clearTimeout,
            f = a.__fbNativeSetTimeout || window.setTimeout;
        return function() {
            var a = this,
                g = arguments,
                h = function() {
                    d = null, b.apply(a, g)
                };
            e(d);
            d = f(h, c)
        }
    };
    var j = {
            convertUri: function(a) {
                if (a == null || a === "") return new(g || (g = b("URI")))();
                a = new(g || (g = b("URI")))(a);
                if (a.getDomain().endsWith("messenger.com")) return a.setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com")).setPath("/messages" + a.getPath());
                else return a
            },
            goFragment: function(a) {
                if ((h || (h = b("Env"))).isCQuick) {
                    a = j.convertUri(a);
                    if (a.getFragment()) {
                        var c = (g || (g = b("URI"))).getRequestURI(!1, !1);
                        if ((i || (i = b("areEqual")))(new(g || (g = b("URI")))(c).setFragment("").getQualifiedURI(), new(g || (g = b("URI")))(a).setFragment("").getQualifiedURI())) return !0
                    }
                }
                return !1
            },
            go: function(a, c) {
                if ((h || (h = b("Env"))).isCQuick) {
                    var d = new(g || (g = b("URI")))(a);
                    a = j.convertUri(a);
                    var e = a.getQualifiedURI();
                    if (b("isCdnURI")(a) || e.getPath().startsWith("/compat")) return !1;
                    a = function() {
                        if (b("MessengerEnvironment").messengerui && e.getPath().startsWith("/messages")) return [!1, "/messages"];
                        if (d.getPath().startsWith("/settings") && e.getPath().startsWith("/settings") && (b("gkx")("1224637") || e.getSubdomain() !== d.getSubdomain())) return [!1, "/settings"];
                        if (d.getPath().startsWith("/games") && e.getPath().startsWith("/games")) return [!1, "/games/web"];
                        if (d.getPath().startsWith("/notes") && e.getPath().startsWith("/notes")) return [!1, "/notes"];
                        if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
                        return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""]
                    }();
                    var f = a[0];
                    a = a[1];
                    k({
                        compatAction: "route",
                        maintainKey: a,
                        replace: c,
                        uri: String(e)
                    });
                    return f
                }
                return !1
            },
            startChat: function(a, b) {
                return j.sendMessage({
                    compatAction: "startchat",
                    tabId: a,
                    isPage: b
                })
            },
            chatListener: function(a, b, c) {
                a.addEventListener("click", function(a) {
                    a.preventDefault(), j.startChat(b, c)
                })
            },
            sendMessage: function(a) {
                if ((h || (h = b("Env"))).isCQuick) {
                    b("BlueCompatBroker").init();
                    b("BlueCompatBroker").sendMessage(a);
                    return !0
                }
                return !1
            }
        },
        k = c(j.sendMessage, 250);
    d = j;
    e.exports = d
}), null);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;

    function a(a) {
        return h(a, "", {})
    }

    function h(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || g(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && h(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
}), null);
__d("PHPQuerySerializer", ["flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = g(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])))
            }
        return c.join("&")
    }

    function g(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var h = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function i(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function c(a) {
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(h);
            if (!f) {
                var g = a[d].indexOf("=");
                if (g === -1) b[j(a[d])] = null;
                else {
                    var k = a[d].substring(0, g);
                    g = a[d].substring(g + 1);
                    b[j(k)] = j(g)
                }
            } else {
                k = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                g = f[1];
                f = j(f[3] || "");
                k[0] = g;
                g = b;
                for (var l = 0; l < k.length - 1; l++) {
                    var m = i(k[l]);
                    if (m) {
                        if (!c.call(g, m)) {
                            var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            g[m] = n;
                            if (g[m] !== n) return b
                        }
                        g = g[m]
                    } else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? g.push({}) : g.push([]), g = g[g.length - 1]
                }
                g instanceof Array && k[k.length - 1] === "" ? g.push(f) : g[i(k[k.length - 1])] = f
            }
        }
        return b
    }

    function j(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    d = {
        serialize: a,
        encodeComponent: g,
        deserialize: c,
        decodeComponent: j
    };
    e.exports = d
}), null);
__d("PHPQuerySerializerNoEncoding", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    f.serialize = a;
    f.encodeComponent = h;
    var g;

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + h(String(a[d])))
            }
        return c.join("&")
    }

    function h(a) {
        return a
    }
    c = (g || (g = b("PHPQuerySerializer"))).deserialize;
    f.deserialize = c;
    d = g.decodeComponent;
    f.decodeComponent = d
}), null);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    f.parse = a;
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");

    function a(a) {
        if (a.trim() === "") return null;
        a = a.match(g);
        if (a == null) return null;
        var b = {};
        b.uri = a[0] ? a[0] : null;
        b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
        b.authority = a[2] ? a[2].substr(2) : null;
        b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
        b.host = a[2] ? a[4] : null;
        b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
        b.path = a[6] ? a[6] : null;
        b.query = a[7] ? a[7].substr(1) : null;
        b.fragment = a[8] ? a[8].substr(1) : null;
        b.isGenericURI = b.authority === null && !!b.scheme;
        return b
    }
}), null);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    e.exports = g;

    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
}), null);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f) {
    f.isAllowed = a;
    var g = b("createObjectFrom")(["aidemos", "aistudio", "blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "odh", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "togetherbl", "venues", "whatsapp-consumer", "whatsapp-smb", "fb-ide-opener"]);

    function a(a) {
        return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(g, a.toLowerCase())
    }
}), null);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
}), null);
__d("URIAbstractBase", ["invariant", "URIRFC3986", "URISchemes", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    var h, i, j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        l = [];
    a = function() {
        "use strict";
        a.parse = function(c, d, e, f) {
            if (!d) return !0;
            if (d instanceof a) {
                c.setProtocol(d.getProtocol());
                c.setDomain(d.getDomain());
                c.setPort(d.getPort());
                c.setPath(d.getPath());
                c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
                c.setFragment(d.getFragment());
                c.setIsGeneric(d.getIsGeneric());
                c.setForceFragmentSeparator(d.getForceFragmentSeparator());
                c.setOriginalRawQuery(d.getOriginalRawQuery());
                c.setQueryParamModified(!1);
                return !0
            }
            d = d.toString().trim();
            var g = (h || (h = b("URIRFC3986"))).parse(d) || {
                fragment: null,
                scheme: null,
                query: null
            };
            if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme)) return !1;
            c.setProtocol(g.scheme || "");
            if (!e && j.test(g.host || "")) return !1;
            c.setDomain(g.host || "");
            c.setPort(g.port || "");
            c.setPath(g.path || "");
            if (e) c.setQueryData(f.deserialize(g.query || "") || {});
            else try {
                c.setQueryData(f.deserialize(g.query || "") || {})
            } catch (a) {
                return !1
            }
            c.setFragment(g.fragment || "");
            g.fragment === "" && c.setForceFragmentSeparator(!0);
            c.setIsGeneric(g.isGenericURI || !1);
            c.setOriginalRawQuery(g.query);
            c.setQueryParamModified(!1);
            if (g.userinfo !== null) {
                if (e) throw new Error("URI.parse: invalid URI (userinfo is not allowed in a URI): " + d);
                return !1
            }
            if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
                if (e) throw new Error("URI.parse: invalid URI (no domain but multiple back-slashes): " + d);
                return !1
            }
            if (!c.getProtocol() && k.test(d)) {
                if (e) throw new Error("URI.parse: invalid URI (unsafe protocol-relative URLs): " + d + "'");
                return !1
            }
            if (c.getDomain() && c.getPath() && !c.getPath().startsWith("/")) {
                if (e) throw new Error("URI.parse: invalid URI (domain and path where path lacks leading slash): " + d);
                return !1
            }
            return !0
        };
        a.tryParse = function(b, c) {
            var d = new a(null, c);
            return a.parse(d, b, !1, c) ? d : null
        };
        a.isValid = function(b, c) {
            return !!a.tryParse(b, c)
        };

        function a(b, c) {
            c || g(0, 2966), this.$9 = c, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, a.parse(this, b, !0, c), this.$11 = !1
        }
        var c = a.prototype;
        c.setProtocol = function(a) {
            (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
            this.$7 = a;
            return this
        };
        c.getProtocol = function() {
            return (this.$7 || "").toLowerCase()
        };
        c.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        c.isSecure = function() {
            return this.getProtocol() === "https"
        };
        c.setDomain = function(a) {
            if (j.test(a)) throw new Error("URI.setDomain: unsafe domain specified: " + a + " for url " + this.toString());
            this.$1 = a;
            return this
        };
        c.getDomain = function() {
            return this.$1
        };
        c.setPort = function(a) {
            this.$6 = a;
            return this
        };
        c.getPort = function() {
            return this.$6
        };
        c.setPath = function(a) {
            this.$5 = a;
            return this
        };
        c.getPath = function() {
            return this.$5
        };
        c.addQueryData = function(a, b) {
            Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
            this.$11 = !0;
            return this
        };
        c.setQueryData = function(a) {
            this.$8 = a;
            this.$11 = !0;
            return this
        };
        c.getQueryData = function() {
            return this.$8
        };
        c.setQueryString = function(a) {
            return this.setQueryData(this.$9.deserialize(a))
        };
        c.getQueryString = function(a, b, c) {
            a === void 0 && (a = !1);
            b === void 0 && (b = function() {
                return !1
            });
            c === void 0 && (c = null);
            return this.$12(!1, a, b, c)
        };
        c.$12 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            if (!this.$11 && (b || c(this.getDomain()))) {
                return (b = this.$10) != null ? b : ""
            }
            return (a && d ? d : this.$9).serialize(this.getQueryData())
        };
        c.removeQueryData = function(a) {
            Array.isArray(a) || (a = [a]);
            for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
            this.$11 = !0;
            return this
        };
        c.setFragment = function(a) {
            this.$3 = a;
            this.setForceFragmentSeparator(!1);
            return this
        };
        c.getFragment = function() {
            return this.$3
        };
        c.setForceFragmentSeparator = function(a) {
            this.$2 = a;
            return this
        };
        c.getForceFragmentSeparator = function() {
            return this.$2
        };
        c.setIsGeneric = function(a) {
            this.$4 = a;
            return this
        };
        c.getIsGeneric = function() {
            return this.$4
        };
        c.getOriginalRawQuery = function() {
            return this.$10
        };
        c.setOriginalRawQuery = function(a) {
            this.$10 = a;
            return this
        };
        c.setQueryParamModified = function(a) {
            this.$11 = a;
            return this
        };
        c.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
        };
        c.toString = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !1, a, b)
        };
        c.toStringRawQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!0, !1, a, b)
        };
        c.toStringPreserveQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !0, a, b)
        };
        c.$13 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = this;
            for (var f = 0; f < l.length; f++) e = l[f](e);
            return e.$14(a, b, c, d)
        };
        c.$14 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = "",
                f = this.getProtocol();
            f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
            f = this.getDomain();
            f && (e += f);
            f = this.getPort();
            f && (e += ":" + f);
            f = this.getPath();
            f ? e += f : e && (e += "/");
            f = this.$12(a, b, c, d);
            f && (e += "?" + f);
            a = this.getFragment();
            a ? e += "#" + a : this.getForceFragmentSeparator() && (e += "#");
            return e
        };
        a.registerFilter = function(a) {
            l.push(a)
        };
        c.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        c.getQualifiedURIBase = function() {
            return new a(this, this.$9).qualify()
        };
        c.qualify = function() {
            if (!this.getDomain()) {
                var b = new a(window.location.href, this.$9);
                this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
            }
            return this
        };
        c.setSubdomain = function(a) {
            var c = this.qualify();
            c = c.getDomain();
            return this.setDomain(b("setHostSubdomain")(c, a))
        };
        c.getSubdomain = function() {
            if (!this.getDomain()) return "";
            var a = this.getDomain().split(".");
            if (a.length <= 2) return "";
            else return a[0]
        };
        c.isSubdomainOfDomain = function(b) {
            var c = this.getDomain();
            return a.isDomainSubdomainOfDomain(c, b, this.$9)
        };
        a.isDomainSubdomainOfDomain = function(b, c, d) {
            if (c === "" || b === "") return !1;
            if (b.endsWith(c)) {
                var e = b.length,
                    f = c.length,
                    g = e - f - 1;
                if (e === f || b[g] === ".") {
                    e = new a(null, d);
                    e.setDomain(c);
                    return a.isValid(e, d)
                }
            }
            return !1
        };
        return a
    }();
    e.exports = a
}), null);
__d("err", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").err;
    e.exports = a
}), null);
__d("URIBase", ["PHPQuerySerializerNoEncoding", "URIAbstractBase", "UriNeedRawQuerySVChecker", "err"], (function(a, b, c, d, e, f) {
    function g(a, c, d, e) {
        try {
            a = b("URIAbstractBase").parse(a, c, d, e);
            return a
        } catch (a) {
            throw new Error(b("err")(a.message))
        }
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        c.tryParse = function(a, b) {
            var d = new c(null, b);
            return g(d, a, !1, b) ? d : null
        };
        c.isValid = function(a, b) {
            return !!c.tryParse(a, b)
        };

        function c(b, c) {
            var d;
            d = a.call(this, b, c) || this;
            d.$URIBase1 = c;
            g(babelHelpers.assertThisInitialized(d), b, !0, c);
            return d
        }
        var d = c.prototype;
        d.setDomain = function(c) {
            try {
                a.prototype.setDomain.call(this, c)
            } catch (a) {
                throw new Error(b("err")(a.message))
            }
            return this
        };
        d.getQualifiedURIBase = function() {
            return new c(this, this.$URIBase1).qualify()
        };
        d.qualify = function() {
            if (!this.getDomain()) {
                var a = new c(window.location.href, this.$URIBase1);
                this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort())
            }
            return this
        };
        d.isSubdomainOfDomain = function(a) {
            var b = this.getDomain();
            return c.isDomainSubdomainOfDomain(b, a, this.$URIBase1)
        };
        c.isDomainSubdomainOfDomain = function(a, b, d) {
            if (b === "" || a === "") return !1;
            if (a.endsWith(b)) {
                var e = a.length,
                    f = b.length,
                    g = e - f - 1;
                if (e === f || a[g] === ".") {
                    e = new c(null, d);
                    e.setDomain(b);
                    return c.isValid(e, d)
                }
            }
            return !1
        };
        d.toString = function() {
            return a.prototype.toString.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringRawQuery = function() {
            return a.prototype.toStringRawQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringPreserveQuery = function() {
            return a.prototype.toStringPreserveQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.getQueryString = function(c) {
            c === void 0 && (c = !1);
            return a.prototype.getQueryString.call(this, c, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        return c
    }(b("URIAbstractBase"));
    e.exports = a
}), null);
__d("UriNeedRawQuerySVChecker", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = ["http", "https"];

    function a(a) {
        if (a == null) return !1;
        a = a instanceof(g || (g = b("URIBase"))) ? a : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
        if (a == null) return !1;
        var c = a.getProtocol();
        return !i.includes(c) ? !1 : j(a.getDomain())
    }

    function j(a) {
        return a != null && b("UriNeedRawQuerySVConfig").uris.some(function(c) {
            return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(a, c, h || (h = b("PHPQuerySerializer")))
        })
    }
    e.exports = {
        isUriNeedRawQuery: a,
        isDomainNeedRawQuery: j
    }
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
}), null);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
}), null);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;

    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && g(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
}), null);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
}), null);
__d("unexpectedUseInComet", ["FBLogger", "err", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        if (!b("gkx")("708253")) return;
        a = a + " called unexpectedly. This is not supported in Comet!";
        b("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame().mustfix(a)
    }
}), null);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        return a.setProtocol("").setDomain("").setPort("")
    }
}), null);
__d("URI", ["Env", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "UriNeedRawQuerySVChecker", "areSameOrigin", "ifRequired", "isFacebookURI", "memoize", "memoizeStringOnly", "unexpectedUseInComet", "unqualifyURI"], (function(a, b, c, d, e, f) {
    var g, h, i, j = b("memoize")(function() {
        return new l(window.location.href)
    });

    function k() {
        return b("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var l = function(d) {
        babelHelpers.inheritsLoose(c, d);

        function c(a) {
            var c;
            b("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a) ? c = d.call(this, a, b("PHPQuerySerializerNoEncoding")) || this : c = d.call(this, a || "", g || (g = b("PHPQuerySerializer"))) || this;
            return babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.setPath = function(a) {
            this.path = a;
            return d.prototype.setPath.call(this, a)
        };
        e.getPath = function() {
            var a = d.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        e.setProtocol = function(a) {
            this.protocol = a;
            return d.prototype.setProtocol.call(this, a)
        };
        e.setDomain = function(a) {
            this.domain = a;
            return d.prototype.setDomain.call(this, a)
        };
        e.setPort = function(a) {
            this.port = a;
            return d.prototype.setPort.call(this, a)
        };
        e.setFragment = function(a) {
            this.fragment = a;
            return d.prototype.setFragment.call(this, a)
        };
        e.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        e.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        e.valueOf = function() {
            return this.toString()
        };
        e.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!b("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                c = a.indexOf("facebook");
            c === -1 && (c = a.indexOf("workplace"));
            return a.slice(c).join(".")
        };
        e.getUnqualifiedURI = function() {
            return b("unqualifyURI")(new c(this))
        };
        e.getQualifiedURI = function() {
            return new c(this).qualify()
        };
        e.isSameOrigin = function(a) {
            a = a;
            a == null ? a = j() : a instanceof c || (a = new c(a.toString()));
            return b("areSameOrigin")(this, a)
        };
        c.go = function(a, d, e) {
            b("unexpectedUseInComet")("URI.go"), c.goURIOnWindow(a, window, d, e)
        };
        c.goURIOnNewWindow = function(a) {
            c.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        c.goURIOnWindow = function(d, e, f, g) {
            f === void 0 && (f = !1);
            g === void 0 && (g = !1);
            d = new c(d);
            f = f;
            var i = !e || e === window;
            if ((h || (h = b("Env"))).isCQuick && b("isFacebookURI")(d) && i) {
                i = {};
                i.cquick = (h || (h = b("Env"))).iframeKey;
                i.ctarget = h.iframeTarget;
                i.cquick_token = h.iframeToken;
                d.addQueryData(i);
                f = !1
            }
            i = d.toString();
            d = e ? e : window;
            !f && a.PageTransitions ? a.PageTransitions.go(i, g) : window.location.href === i ? b("ReloadPage").now() : g ? d.location.replace(i) : d.location.href = i
        };
        e.go = function(a, d) {
            b("unexpectedUseInComet")("uri.go"), c.go(this, a, d)
        };
        c.tryParseURI = function(a) {
            a = (i || (i = b("URIBase"))).tryParse(a, g || (g = b("PHPQuerySerializer")));
            return a ? new c(a) : null
        };
        c.isValidURI = function(a) {
            return (i || (i = b("URIBase"))).isValid(a, g || (g = b("PHPQuerySerializer")))
        };
        c.getRequestURI = function(a, b) {
            a === void 0 && (a = !0);
            b === void 0 && (b = !1);
            if (a) {
                a = k();
                if (a) return a.getCurrentURI(!!b).getQualifiedURI()
            }
            return new c(window.location.href)
        };
        c.getMostRecentURI = function() {
            var a = k();
            return a ? a.getMostRecentURI().getQualifiedURI() : new c(window.location.href)
        };
        c.getNextURI = function() {
            var a = k();
            return a ? a.getNextURI().getQualifiedURI() : new c(window.location.href)
        };
        c.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        c.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        c.normalize = function(a) {
            return a != null && typeof a === "string" ? this.normalizeString(a) : new c(a).toString()
        };
        return c
    }(i || (i = b("URIBase")));
    e.exports = l;
    l.normalizeString = b("memoizeStringOnly")(function(a) {
        return new l(a).toString()
    });
    l.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    l.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/
}), null);
__d("isCometAltpayJsSdkIframeAllowedDomain", ["CometAltpayJsSdkIframeAllowedDomains", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g;
    c = Object.freeze(b("CometAltpayJsSdkIframeAllowedDomains"));
    var h = Object.freeze(c.allowed_domains);

    function a() {
        var a = new(g || (g = b("URI")))(window.location.href);
        if (h == null || h.length <= 0) return !1;
        var c = h.some(function(c) {
            c = new(g || (g = b("URI")))(c);
            return c == null ? !1 : a.isSameOrigin(c)
        });
        return c ? !0 : !1
    }
}), null);
__d("ReloadPage", ["BlueCompatRouter", "Env"], (function(a, b, c, d, e, f) {
    f.now = c;
    f.delay = d;
    var g;

    function c(c) {
        !(g || (g = b("Env"))).isCQuick ? a.window.location.reload(c) : b("BlueCompatRouter").sendMessage({
            compatAction: "reload"
        })
    }

    function d(b) {
        a.setTimeout(this.now.bind(this), b)
    }
}), null);
__d("isInternalFBURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("(^|\\.)internalfb\\.com$", "i");

    function a(a) {
        return g.test(a.getDomain())
    }
}), null);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a(a, b) {
            this.$1 = {}, this.$2 = a, this.$3 = b
        }
        var c = a.prototype;
        c.setInt = function(a, b) {
            return this.__setParam(a, "Int", b)
        };
        c.setFBID = function(a, b) {
            return this.__setParam(a, "FBID", b)
        };
        c.setFloat = function(a, b) {
            return this.__setParam(a, "Float", b)
        };
        c.setString = function(a, b) {
            return this.__setParam(a, "String", b)
        };
        c.setExists = function(a, b) {
            b === !1 && (b = void 0);
            return this.__setParam(a, "Exists", b)
        };
        c.setBool = function(a, b) {
            return this.__setParam(a, "Bool", b)
        };
        c.setBoolVector = function(a, b) {
            return this.__setParam(a, "BoolVector", b)
        };
        c.setEnum = function(a, b) {
            return this.__setParam(a, "Enum", b)
        };
        c.setPath = function(a, b) {
            return this.__setParam(a, "Path", b)
        };
        c.setIntVector = function(a, b) {
            return this.__setParam(a, "IntVector", b)
        };
        c.setIntKeyset = function(a, b) {
            return this.__setParam(a, "IntKeyset", b)
        };
        c.setIntSet = function(a, b) {
            return this.__setParam(a, "IntSet", b.join(","))
        };
        c.setFloatVector = function(a, b) {
            return this.__setParam(a, "FloatVector", b)
        };
        c.setFloatSet = function(a, b) {
            return this.__setParam(a, "FloatSet", b.join(","))
        };
        c.setStringVector = function(a, b) {
            return this.__setParam(a, "StringVector", b)
        };
        c.setStringKeyset = function(a, b) {
            return this.__setParam(a, "StringKeyset", b)
        };
        c.setStringSet = function(a, b) {
            return this.__setParam(a, "StringSet", b)
        };
        c.setFBIDVector = function(a, b) {
            return this.__setParam(a, "FBIDVector", b)
        };
        c.setFBIDSet = function(a, b) {
            return this.__setParam(a, "FBIDSet", b)
        };
        c.setFBIDKeyset = function(a, b) {
            return this.__setParam(a, "FBIDKeyset", b)
        };
        c.setEnumVector = function(a, b) {
            return this.__setParam(a, "EnumVector", b)
        };
        c.setEnumSet = function(a, b) {
            return this.__setParam(a, "EnumSet", b)
        };
        c.setEnumKeyset = function(a, b) {
            return this.__setParam(a, "EnumKeyset", b)
        };
        c.setIntToIntMap = function(a, b) {
            return this.__setParam(a, "IntToIntMap", b)
        };
        c.setIntToFloatMap = function(a, b) {
            return this.__setParam(a, "IntToFloatMap", b)
        };
        c.setIntToStringMap = function(a, b) {
            return this.__setParam(a, "IntToStringMap", b)
        };
        c.setIntToBoolMap = function(a, b) {
            return this.__setParam(a, "IntToBoolMap", b)
        };
        c.setStringToIntMap = function(a, b) {
            return this.__setParam(a, "StringToIntMap", b)
        };
        c.setStringToFloatMap = function(a, b) {
            return this.__setParam(a, "StringToFloatMap", b)
        };
        c.setStringToStringMap = function(a, b) {
            return this.__setParam(a, "StringToStringMap", b)
        };
        c.setStringToNullableStringMap = function(a, b) {
            return this.__setParam(a, "StringToNullableStringMap", b)
        };
        c.setStringToBoolMap = function(a, b) {
            return this.__setParam(a, "StringToBoolMap", b)
        };
        c.setStringToEnumMap = function(a, b) {
            return this.__setParam(a, "StringToEnumMap", b)
        };
        c.setEnumToStringVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToStringVectorMap", b)
        };
        c.setEnumToStringMap = function(a, b) {
            return this.__setParam(a, "EnumToStringMap", b)
        };
        c.setEnumToBoolMap = function(a, b) {
            return this.__setParam(a, "EnumToBoolMap", b)
        };
        c.setEnumToEnumMap = function(a, b) {
            return this.__setParam(a, "EnumToEnumMap", b)
        };
        c.setEnumToIntMap = function(a, b) {
            return this.__setParam(a, "EnumToIntMap", b)
        };
        c.setEnumToFBIDVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToFBIDVectorMap", b)
        };
        c.setStringToIntDict = function(a, b) {
            return this.__setParam(a, "StringToIntDict", b)
        };
        c.setStringToNullableIntDict = function(a, b) {
            return this.__setParam(a, "StringToNullableIntDict", b)
        };
        c.setStringToFloatDict = function(a, b) {
            return this.__setParam(a, "StringToFloatDict", b)
        };
        c.setStringToNullableFloatDict = function(a, b) {
            return this.__setParam(a, "StringToNullableFloatDict", b)
        };
        c.setStringToStringDict = function(a, b) {
            return this.__setParam(a, "StringToStringDict", b)
        };
        c.setStringToNullableStringDict = function(a, b) {
            return this.__setParam(a, "StringToNullableStringDict", b)
        };
        c.setStringToBoolDict = function(a, b) {
            return this.__setParam(a, "StringToBoolDict", b)
        };
        c.setStringToEnumDict = function(a, b) {
            return this.__setParam(a, "StringToEnumDict", b)
        };
        c.setEnumToIntDict = function(a, b) {
            return this.__setParam(a, "EnumToIntDict", b)
        };
        c.setHackType = function(a, b) {
            return this.__setParam(a, "HackType", b)
        };
        c.setTypeAssert = function(a, b) {
            return this.__setParam(a, "TypeAssert", b)
        };
        c.__validateRequiredParamsExistence = function() {
            for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 903, a)
        };
        c.setParams = function(a) {
            for (var b in a) {
                this.__assertParamExists(b);
                var c = this.$3[b].type;
                this.__setParam(b, c, a[b])
            }
            return this
        };
        c.__assertParamExists = function(a) {
            a in this.$3 || g(0, 37339, a)
        };
        c.__setParam = function(a, b, c) {
            this.__assertParamExists(a);
            var d = this.$3[a].type;
            d === b || g(0, 37340, a, b, d);
            this.__setParamInt(a, c);
            return this
        };
        c.__setParamInt = function(a, b) {
            this.$1[a] = b
        };
        c.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setReplaceTransportMarkers().setURI(this.getURI())
        };
        c.setPreviousActorIsPageVoice = function(a) {
            this.__setParamInt("paipv", a ? 1 : 0);
            return this
        };
        c.getURI = function() {
            this.__validateRequiredParamsExistence();
            var a = {},
                c = "",
                d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                e = this.$2.split("/"),
                f = !1;
            for (var i = 0; i < e.length; i++) {
                var j = e[i];
                if (j === "") continue;
                var k = d.exec(j);
                if (!k) c += "/" + j;
                else {
                    j = k[2] === "?";
                    var l = k[4],
                        m = this.$3[l];
                    m || g(0, 11837, l, this.$2);
                    if (j && f) continue;
                    if (this.$1[l] == null && j) {
                        f = !0;
                        continue
                    }
                    j = this.$1[l] != null ? this.$1[l] : m.defaultValue;
                    j != null || g(0, 907, l);
                    m = k[1] ? k[1] : "";
                    k = k[5] ? k[5] : "";
                    c += "/" + m + j + k;
                    a[l] = !0
                }
            }
            this.$2.slice(-1) === "/" && (c += "/");
            c === "" && (c = "/");
            m = new(h || (h = b("URI")))(c);
            for (var n in this.$1) {
                j = this.$1[n];
                if (!a[n] && j != null) {
                    k = this.$3[n];
                    m.addQueryData(n, k && k.type === "Exists" ? null : j)
                }
            }
            return m
        };
        c.getLookasideURI = function() {
            var a = "lookaside.facebook.com";
            b("isInternalFBURI")((h || (h = b("URI"))).getRequestURI()) ? a = "lookaside.internalfb.com" : b("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
            return this.getURI().setDomain(a).setProtocol("https")
        };
        a.create = function(b, c) {
            return function() {
                return new a(b, c)
            }
        };
        return a
    }();
    e.exports = a;
    a.prototype.getRequest = function(a) {
        return this.getRequest_LEGACY_UNTYPED(a)
    }
}), null);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = function a(b, c, d) {
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0, 11839, c);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0, 11840, c);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0, 11841, c)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0, 5045);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0, 5045);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0, 11842, b)
        }
        return e
    };
    a = function() {
        function a(a, b, c) {
            this.$1 = b;
            this.$2 = babelHelpers["extends"]({}, c.getQueryData());
            b = a.split("/").filter(function(a) {
                return a
            });
            a = c.getPath().split("/").filter(function(a) {
                return a
            });
            for (var d = 0; d < b.length; ++d) {
                var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                if (!e) {
                    b[d] === a[d] || g(0, 5047, c.getPath());
                    continue
                }
                var f = !!e[1],
                    h = !!e[2];
                !h || d === b.length - 1 || g(0, 11843, i);
                var i = e[3];
                Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 11844, i);
                this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
            }
            Object.keys(this.$1).forEach(function(a) {
                !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
            }, this)
        }
        var b = a.prototype;
        b.getExists = function(a) {
            return this.$2[a] !== void 0
        };
        b.getBool = function(a) {
            return this.$3(a, "Bool")
        };
        b.getInt = function(a) {
            return this.$3(a, "Int")
        };
        b.getFloat = function(a) {
            return this.$3(a, "Float")
        };
        b.getFBID = function(a) {
            return this.$3(a, "FBID")
        };
        b.getString = function(a) {
            return this.$3(a, "String")
        };
        b.getEnum = function(a) {
            return this.$3(a, "Enum")
        };
        b.getOptionalInt = function(a) {
            return this.$4(a, "Int")
        };
        b.getOptionalFloat = function(a) {
            return this.$4(a, "Float")
        };
        b.getOptionalFBID = function(a) {
            return this.$4(a, "FBID")
        };
        b.getOptionalString = function(a) {
            return this.$4(a, "String")
        };
        b.getOptionalEnum = function(a) {
            return this.$4(a, "Enum")
        };
        b.getIntVector = function(a) {
            return this.$3(a, "IntVector")
        };
        b.getFloatVector = function(a) {
            return this.$3(a, "FloatVector")
        };
        b.getFBIDVector = function(a) {
            return this.$3(a, "FBIDVector")
        };
        b.getStringVector = function(a) {
            return this.$3(a, "StringVector")
        };
        b.getEnumVector = function(a) {
            return this.$3(a, "EnumVector")
        };
        b.getOptionalIntVector = function(a) {
            return this.$4(a, "IntVector")
        };
        b.getOptionalFloatVector = function(a) {
            return this.$4(a, "FloatVector")
        };
        b.getOptionalFBIDVector = function(a) {
            return this.$4(a, "FBIDVector")
        };
        b.getOptionalStringVector = function(a) {
            return this.$4(a, "StringVector")
        };
        b.getOptionalEnumVector = function(a) {
            return this.$4(a, "EnumVector")
        };
        b.getIntSet = function(a) {
            return this.$3(a, "IntSet")
        };
        b.getFBIDSet = function(a) {
            return this.$3(a, "FBIDSet")
        };
        b.getFBIDKeyset = function(a) {
            return this.$3(a, "FBIDKeyset")
        };
        b.getStringSet = function(a) {
            return this.$3(a, "StringSet")
        };
        b.getEnumKeyset = function(a) {
            return this.$3(a, "EnumKeyset")
        };
        b.getOptionalIntSet = function(a) {
            return this.$4(a, "IntSet")
        };
        b.getOptionalFBIDSet = function(a) {
            return this.$4(a, "FBIDSet")
        };
        b.getOptionalFBIDKeyset = function(a) {
            return this.$4(a, "FBIDKeyset")
        };
        b.getOptionalStringSet = function(a) {
            return this.$4(a, "StringSet")
        };
        b.getEnumToBoolMap = function(a) {
            return this.$3(a, "EnumToBoolMap")
        };
        b.getEnumToEnumMap = function(a) {
            return this.$3(a, "EnumToEnumMap")
        };
        b.getEnumToFloatMap = function(a) {
            return this.$3(a, "EnumToFloatMap")
        };
        b.getEnumToIntMap = function(a) {
            return this.$3(a, "EnumToIntMap")
        };
        b.getEnumToStringMap = function(a) {
            return this.$3(a, "EnumToStringMap")
        };
        b.getIntToBoolMap = function(a) {
            return this.$3(a, "IntToBoolMap")
        };
        b.getIntToEnumMap = function(a) {
            return this.$3(a, "IntToEnumMap")
        };
        b.getIntToFloatMap = function(a) {
            return this.$3(a, "IntToFloatMap")
        };
        b.getIntToIntMap = function(a) {
            return this.$3(a, "IntToIntMap")
        };
        b.getIntToStringMap = function(a) {
            return this.$3(a, "IntToStringMap")
        };
        b.getStringToBoolMap = function(a) {
            return this.$3(a, "StringToBoolMap")
        };
        b.getStringToEnumMap = function(a) {
            return this.$3(a, "StringToEnumMap")
        };
        b.getStringToFloatMap = function(a) {
            return this.$3(a, "StringToFloatMap")
        };
        b.getStringToIntMap = function(a) {
            return this.$3(a, "StringToIntMap")
        };
        b.getStringToStringMap = function(a) {
            return this.$3(a, "StringToStringMap")
        };
        b.getOptionalEnumToBoolMap = function(a) {
            return this.$4(a, "EnumToBoolMap")
        };
        b.getOptionalEnumToEnumMap = function(a) {
            return this.$4(a, "EnumToEnumMap")
        };
        b.getOptionalEnumToFloatMap = function(a) {
            return this.$4(a, "EnumToFloatMap")
        };
        b.getOptionalEnumToIntMap = function(a) {
            return this.$4(a, "EnumToIntMap")
        };
        b.getOptionalEnumToStringMap = function(a) {
            return this.$4(a, "EnumToStringMap")
        };
        b.getOptionalIntToBoolMap = function(a) {
            return this.$4(a, "IntToBoolMap")
        };
        b.getOptionalIntToEnumMap = function(a) {
            return this.$4(a, "IntToEnumMap")
        };
        b.getOptionalIntToFloatMap = function(a) {
            return this.$4(a, "IntToFloatMap")
        };
        b.getOptionalIntToIntMap = function(a) {
            return this.$4(a, "IntToIntMap")
        };
        b.getOptionalIntToStringMap = function(a) {
            return this.$4(a, "IntToStringMap")
        };
        b.getOptionalStringToBoolMap = function(a) {
            return this.$4(a, "StringToBoolMap")
        };
        b.getOptionalStringToEnumMap = function(a) {
            return this.$4(a, "StringToEnumMap")
        };
        b.getOptionalStringToFloatMap = function(a) {
            return this.$4(a, "StringToFloatMap")
        };
        b.getOptionalStringToIntMap = function(a) {
            return this.$4(a, "StringToIntMap")
        };
        b.getOptionalStringToStringMap = function(a) {
            return this.$4(a, "StringToStringMap")
        };
        b.getEnumToNullableEnumMap = function(a) {
            return this.$3(a, "EnumToNullableEnumMap")
        };
        b.getEnumToNullableFloatMap = function(a) {
            return this.$3(a, "EnumToNullableFloatMap")
        };
        b.getEnumToNullableIntMap = function(a) {
            return this.$3(a, "EnumToNullableIntMap")
        };
        b.getEnumToNullableStringMap = function(a) {
            return this.$3(a, "EnumToNullableStringMap")
        };
        b.getIntToNullableEnumMap = function(a) {
            return this.$3(a, "IntToNullableEnumMap")
        };
        b.getIntToNullableFloatMap = function(a) {
            return this.$3(a, "IntToNullableFloatMap")
        };
        b.getIntToNullableIntMap = function(a) {
            return this.$3(a, "IntToNullableIntMap")
        };
        b.getIntToNullableStringMap = function(a) {
            return this.$3(a, "IntToNullableStringMap")
        };
        b.getStringToNullableEnumMap = function(a) {
            return this.$3(a, "StringToNullableEnumMap")
        };
        b.getStringToNullableFloatMap = function(a) {
            return this.$3(a, "StringToNullableFloatMap")
        };
        b.getStringToNullableIntMap = function(a) {
            return this.$3(a, "StringToNullableIntMap")
        };
        b.getStringToNullableStringMap = function(a) {
            return this.$3(a, "StringToNullableStringMap")
        };
        b.getOptionalEnumToNullableEnumMap = function(a) {
            return this.$4(a, "EnumToNullableEnumMap")
        };
        b.getOptionalEnumToNullableFloatMap = function(a) {
            return this.$4(a, "EnumToNullableFloatMap")
        };
        b.getOptionalEnumToNullableIntMap = function(a) {
            return this.$4(a, "EnumToNullableIntMap")
        };
        b.getOptionalEnumToNullableStringMap = function(a) {
            return this.$4(a, "EnumToNullableStringMap")
        };
        b.getOptionalIntToNullableEnumMap = function(a) {
            return this.$4(a, "IntToNullableEnumMap")
        };
        b.getOptionalIntToNullableFloatMap = function(a) {
            return this.$4(a, "IntToNullableFloatMap")
        };
        b.getOptionalIntToNullableIntMap = function(a) {
            return this.$4(a, "IntToNullableIntMap")
        };
        b.getOptionalIntToNullableStringMap = function(a) {
            return this.$4(a, "IntToNullableStringMap")
        };
        b.getOptionalStringToNullableEnumMap = function(a) {
            return this.$4(a, "StringToNullableEnumMap")
        };
        b.getOptionalStringToNullableFloatMap = function(a) {
            return this.$4(a, "StringToNullableFloatMap")
        };
        b.getOptionalStringToNullableIntMap = function(a) {
            return this.$4(a, "StringToNullableIntMap")
        };
        b.getOptionalStringToNullableStringMap = function(a) {
            return this.$4(a, "StringToNullableStringMap")
        };
        b.$3 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                c.required && g(0, 5052);
                return h(b, c.defaultValue, c.enumType)
            }
            c.required || b === "Bool" || c.defaultValue != null || g(0, 11845, b, a, b, a);
            return h(b, this.$2[a], c.enumType)
        };
        b.$4 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            c.required && g(0, 11846, b, a, b, a);
            c.defaultValue && g(0, 5052);
            return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
        };
        b.$5 = function(a, b) {
            Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 37317, a), this.$1[a].type === b || g(0, 11848, a, b, this.$1[a].type)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var c = a.prototype;
        c.getURIBuilder = function(a) {
            var c = new(b("XControllerURIBuilder"))(this.$1, this.$2);
            if (a) {
                var d = this.getRequest(a);
                Object.keys(this.$2).forEach(function(a) {
                    var b = this.$2[a],
                        e = "";
                    !b.required && !Object.prototype.hasOwnProperty.call(b, "defaultValue") && (e = "Optional");
                    e = "get" + e + b.type;
                    e = d[e](a);
                    if (e == null || Object.prototype.hasOwnProperty.call(b, "defaultValue") && e === b.defaultValue) return;
                    b = "set" + b.type;
                    c[b](a, e)
                }, this)
            }
            return c
        };
        c.getRequest = function(a) {
            return new(b("XRequest"))(this.$1, this.$2, a)
        };
        a.create = function(b, c) {
            return new a(b, c)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XHeartbeatController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nw/", {})
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    b = a;
    e.exports = b
}), null);
__d("clearTimeout", ["cr:806696"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:806696");
    e.exports = a
}), null);
__d("getSameOriginTransport", ["ExecutionEnvironment", "err"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment.");
        try {
            return new a.XMLHttpRequest()
        } catch (a) {
            throw b("err")("getSameOriginTransport: %s", a.message)
        }
    }
    e.exports = c
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("KSConfig").killed.has(a)
    }
    e.exports = a
}), null);
__d("setTimeout", ["cr:807042"], (function(a, b, c, d, e, f) {
    a = b("cr:807042");
    e.exports = a
}), null);
__d("NetworkHeartbeat", ["XHeartbeatController", "clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    f.maybeStartHeartbeat = r;
    f.isHeartbeatPending = a;
    var g = b("XHeartbeatController").getURIBuilder().getURI().toString(),
        h = 6400,
        i = 100,
        j = null,
        k = 0,
        l = null,
        m = b("killswitch")("DISABLE_HEARTBEAT_POLLING");

    function n(a, c) {
        l = b("getSameOriginTransport")(), l.open("GET", g, !0), l.onload = function() {
            l && l.status === 204 && (m = !0), p(a)
        }, l.onerror = function() {
            q(a, c)
        }, l.ontimeout = function() {
            q(a, c)
        }, l.send()
    }

    function o() {
        l = null, i = 100, k = 0, b("clearTimeout")(j)
    }

    function p(a) {
        o(), a()
    }

    function q(a, c) {
        j = b("setTimeout")(function() {
            r(a, c, void 0, !0)
        }, i), k++, i < h && (i = Math.min(i * Math.pow(2, k), h)), c()
    }

    function r(a, b, c, d) {
        c === void 0 && (c = function() {
            return !0
        }), d === void 0 && (d = !1), m || (d || l == null && c()) && n(a, b)
    }

    function a() {
        return l != null
    }
}), null);
__d("NetworkStatusImpl", ["FBLogger", "NetworkHeartbeat", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.isOnline = a;
    f.onChange = c;
    f.reportError = d;
    f.reportSuccess = e;
    var g, h = [],
        i = window.navigator.onLine,
        j = 2,
        k = 5e3,
        l = [],
        m = [],
        n = 0,
        o = !0,
        p = !1,
        q = function() {
            u(o)
        },
        r = function() {
            u(p)
        };

    function s() {
        var a = h.slice();
        a.forEach(function(a) {
            a({
                online: i
            })
        })
    }

    function t(a) {
        a = h.indexOf(a);
        a > -1 && h.splice(a, 1)
    }

    function u(a) {
        i !== a && !b("NetworkHeartbeat").isHeartbeatPending() && (i = a, b("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline")), i || b("NetworkHeartbeat").maybeStartHeartbeat(q, r), s())
    }

    function v() {
        var a = (g || (g = b("performanceNow")))();
        l = l.filter(function(b) {
            return w(b.startTime, a)
        });
        m = m.filter(function(b) {
            return w(b.startTime, a)
        });
        return m.length / l.length < j
    }
    var w = function(a, b) {
        return a > b - k
    };

    function a() {
        return i
    }

    function c(a) {
        h.push(a);
        var b = !1;
        return {
            remove: function() {
                b || (b = !0, t(a))
            }
        }
    }

    function d() {
        var a = (g || (g = b("performanceNow")))();
        l.push({
            startTime: a
        });
        b("NetworkHeartbeat").maybeStartHeartbeat(q, r, v)
    }

    function e() {
        var a = (g || (g = b("performanceNow")))();
        m.push({
            startTime: a
        });
        w(n, a) || (m = m.filter(function(b) {
            return w(b.startTime, a)
        }), n = a)
    }
    window.addEventListener("online", function() {
        u(o)
    });
    window.addEventListener("offline", function() {
        u(p)
    })
}), null);
__d("NetworkStatusSham", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isOnline = a;
    f.onChange = b;
    f.reportError = c;
    f.reportSuccess = d;

    function a() {
        return !0
    }

    function b(a) {
        return {
            remove: function() {}
        }
    }

    function c() {
        return
    }

    function d() {
        return
    }
}), null);
__d("NetworkStatus", ["NetworkStatusImpl", "NetworkStatusSham", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("gkx")("708253") && b("gkx")("1263340") ? b("NetworkStatusImpl") : b("NetworkStatusSham");
    c = a;
    e.exports = c
}), null);
__d("CircularBuffer", ["unrecoverableViolation"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            if (a <= 0) throw b("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
            this.$1 = a;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = []
        }
        var c = a.prototype;
        c.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        c.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        c.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        c.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        c.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        c.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        c.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    e.exports = a
}), null);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    b = a;
    e.exports = b
}), null);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    e.exports = b;
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b
}), null);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 1e3,
        j = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        k = {},
        l = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(i),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        k[a] = {
            idx: 1,
            entries: c
        };
        l[a] = d
    });

    function m(a, c, d) {
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = n.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(g || (g = b("URI")))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var n = {
        getUID: function(a, b) {
            var c = k[a],
                d = m(a, b, c.idx);
            c.entries.write(d);
            l[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = l[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return l[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = (h || (h = b("performanceAbsoluteNow")))()
        },
        measureResponseReceived: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))()
        },
        annotate: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (!a) return j;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = l[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = n
}), null);
__d("TimeSlice", ["cr:717822"], (function(a, b, c, d, e, f) {
    a = b("cr:717822");
    e.exports = a
}), null);
__d("clearInterval", ["cr:1003267"], (function(a, b, c, d, e, f) {
    a = b("cr:1003267");
    e.exports = a
}), null);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    }
}), null);
__d("setIntervalAcrossTransitions", ["cr:896462"], (function(a, b, c, d, e, f) {
    a = b("cr:896462");
    e.exports = a
}), null);
__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = 20,
        i = b("CSSLoaderConfig").timeout,
        j = b("CSSLoaderConfig").loadEventSupported,
        k, l = [],
        m, n = new Map();

    function o(a) {
        if (k) return;
        k = !0;
        var b = document.createElement("link");
        b.onload = function() {
            j = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function p() {
        var a = [],
            c = [];
        if (Date.now() >= m) {
            for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                c.push(h.signal);
                a.push(h.error)
            }
            n.clear()
        } else
            for (var h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (e >= h.length) break;
                    d = h[e++]
                } else {
                    e = h.next();
                    if (e.done) break;
                    d = e.value
                }
                d = d;
                var j = d[0];
                d = d[1];
                var k = d.signal,
                    l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j))
            }
        for (var l = 0; l < c.length; l++) {
            d = b("nullthrows")(c[l].parentNode);
            d.removeChild(c[l])
        }
        if (!(g || (g = b("isEmpty")))(a)) {
            for (l = 0; l < a.length; l++) a[l]();
            m = Date.now() + i
        }
        return n.size === 0
    }

    function q(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = n.size !== 0;
        m = Date.now() + i;
        n.set(a, {
            signal: f,
            load: d,
            error: e
        });
        if (!c) var g = b("setIntervalAcrossTransitions")(function() {
            p() && b("clearInterval")(g)
        }, h)
    }

    function r(a, c, d, e, f, g) {
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var i = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, i()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, c, d, e, f, g) {
            var h = document;
            if ("createStyleSheet" in h) {
                var i;
                for (var j = 0; j < l.length; j++)
                    if (l[j].imports.length < 31) {
                        i = j;
                        break
                    }
                if (i === void 0) {
                    try {
                        l.push(h.createStyleSheet())
                    } catch (a) {
                        b("NetworkStatus").reportError();
                        g();
                        return
                    }
                    i = l.length - 1
                }
                b("NetworkStatus").reportSuccess();
                l[i].addImport(c);
                r(a, c, d, f, g, null);
                return
            }
            j = h.createElement("link");
            j.rel = "stylesheet";
            j.type = "text/css";
            j.href = c;
            e && (j.crossOrigin = "anonymous");
            r(a, c, d, f, g, j);
            d.appendChild(j)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            r(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("ClientConsistencyEventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = new(b("BaseEventEmitter"))();
    c = a;
    e.exports = c
}), null);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b) {
        d && d.call(null, [a], b)
    }
}), null);
__d("ClientConsistency", ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("SiteData").client_revision,
        h = !1,
        i = null,
        j = {},
        k = new Set(),
        l = new Set(),
        m = function(a) {
            j = {};
            var c = Object.keys(a).sort().reverse(),
                d = function() {
                    if (f) {
                        if (g >= e.length) return "break";
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) return "break";
                        h = g.value
                    }
                    var c = h,
                        d = Number(c);
                    c = (c = a[d]) != null ? c : [];
                    if (c.length === 0) {
                        n(d);
                        return "break"
                    }
                    c.forEach(function(a) {
                        var c;
                        j[a] = Math.max((c = j[a]) != null ? c : 0, d);
                        if (l.has(a)) return;
                        l.add(a);
                        b("requireWeak").call(null, a, function() {
                            if (!j[a]) return;
                            n(j[a])
                        })
                    })
                };
            for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                c = d();
                if (c === "break") break
            }
        },
        n = function(a) {
            a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh"), a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh")
        },
        o = function(a) {
            var b = a.actions;
            a = a.rev;
            if (a === g) return;
            i = b;
            b != null && m(b)
        };
    a = {
        init: function() {
            if (h) return;
            b("ClientConsistencyEventEmitter").addListener("newEntry", function(a) {
                o(a)
            });
            h = !0
        },
        addAdditionalRevision: function(a) {
            if (a === g) return;
            k.add(a)
        },
        getAdditionalRevisions: function() {
            return k
        },
        hasPendingClientActions: function() {
            return i != null && Object.keys(i).length > 0
        }
    };
    e.exports = a
}), null);
__d("ErrorPubSub", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").ErrorPubSub;
    e.exports = a
}), null);
__d("JSResourceEvents", ["performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    f.notify = a;
    f.getEvents = j;
    f.getAllModuleEvents = c;
    var g, h = 50,
        i = new Map();

    function a(a, c, d) {
        a = a;
        c = (c = c) != null ? c : "";
        var f = i.get(a);
        f || i.set(a, f = new Map());
        a = f.get(c);
        a || f.set(c, a = new Map());
        f = a.get(d);
        f || a.set(d, f = [0, []]);
        f[1][f[0]++ % h] = (g || (g = b("performanceAbsoluteNow")))()
    }

    function j(a, b, c) {
        var d = i.get(a);
        if (!d) return [];
        var f = [];
        for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var j;
            if (g) {
                if (h >= d.length) break;
                j = d[h++]
            } else {
                h = d.next();
                if (h.done) break;
                j = h.value
            }
            j = j;
            var k = j[0];
            j = j[1];
            for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var n;
                if (l) {
                    if (m >= j.length) break;
                    n = j[m++]
                } else {
                    m = j.next();
                    if (m.done) break;
                    n = m.value
                }
                n = n;
                var o = n[0];
                n = n[1];
                for (var n = n[1], p = Array.isArray(n), q = 0, n = p ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var r;
                    if (p) {
                        if (q >= n.length) break;
                        r = n[q++]
                    } else {
                        q = n.next();
                        if (q.done) break;
                        r = q.value
                    }
                    r = r;
                    r >= b && r <= c && f.push({
                        module: a,
                        ref: k || null,
                        type: o,
                        time: r
                    })
                }
            }
        }
        return f.sort(function(a, b) {
            return a.time - b.time
        })
    }

    function c(a, b) {
        var c = new Map();
        for (var d = i.keys(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= d.length) break;
                g = d[f++]
            } else {
                f = d.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            var h = j(g, a, b);
            h.length && c.set(g, h)
        }
        return c
    }
}), null);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    (function(c, d) {
        "use strict";
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
}), null);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"], (function(a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var c = b("TimeSlice").guard(a, "setImmediate", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        return b("setImmediatePolyfill").apply(void 0, [c].concat(e))
    }
}), null);
__d("setTimeoutAcrossTransitions", ["cr:986633"], (function(a, b, c, d, e, f) {
    a = b("cr:986633");
    e.exports = a
}), null);
__d("Promise", ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
    }

    function t(a, b) {
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        Array.isArray(a) || (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.allSettled = function(a) {
        if (!Array.isArray(a)) return m.reject(new TypeError("Promise.allSettled must be passed an array."));
        var b = Array(a.length),
            c = function(c, d) {
                var e = a[c];
                d = typeof e === "object" && e !== null && typeof e.then === "function";
                b[c] = d ? new m(function(a, b) {
                    e.then(function(b) {
                        a({
                            status: "fulfilled",
                            value: b
                        })
                    }, function(b) {
                        a({
                            status: "rejected",
                            reason: b
                        })
                    })
                }) : m.resolve({
                    status: "fulfilled",
                    value: e
                })
            };
        for (var d = 0, e = a.length; d < e; ++d) c(d, e);
        return m.all(b)
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("PromiseAnnotate", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.setDisplayName = a;
    f.getDisplayName = b;

    function a(a, b) {
        a.displayName = b;
        return a
    }

    function b(a) {
        a = a.displayName;
        if (typeof a === "string") return a;
        else return null
    }
}), null);
__d("ifRequireable", ["ifRequired"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, c, d) {
        return b("ifRequired").call(null, a, c, d)
    }
}), null);
__d("JSResourceReference", ["JSResourceEvents", "Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function(a, b, c, d, e, f) {
    var g = function(a) {
            return a
        },
        h = [],
        i = null;

    function j(a) {
        i ? a(i) : h.push(a)
    }
    var k = "JSResource: unknown caller";
    a = function() {
        a.setBootloader = function(a) {
            i = a;
            for (var a = 0; a < h.length; a++) {
                var b = h[a];
                b(i)
            }
            h = []
        };

        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.load = function() {
            var a = this;
            b("JSResourceEvents").notify(this.$1, this.$2, "LOADED");
            var c = new(b("Promise"))(function(b) {
                j(function(c) {
                    return c.loadModules([a.getModuleIdAsRef()], b, (c = a.$2) != null ? c : k)
                })
            });
            b("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
            return c
        };
        c.preload = function() {
            var a, b = this,
                c = (a = this.$2) != null ? a : k;
            j(function(a) {
                return a.loadModules([b.getModuleIdAsRef()], function() {}, "preload: " + c)
            })
        };
        c.equals = function(a) {
            return this === a || this.$1 == a.$1
        };
        c.getModuleIfRequireable = function() {
            b("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return b("ifRequireable").call(null, this.$1, g)
        };
        c.getModuleIfRequired = function() {
            b("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return b("ifRequired").call(null, this.$1, g)
        };
        c.__setRef = function(a) {
            this.$2 = a;
            b("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this
        };
        a.loadAll = function(a, c) {
            var d = {},
                e = !1;
            for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (g) {
                    if (h >= f.length) break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                var k = i.$2;
                k && (e = !0, d[k] = !0);
                b("JSResourceEvents").notify(i.$1, k, "LOADED")
            }
            j(function(b) {
                return b.loadModules(a.map(function(a) {
                    return a.getModuleId()
                }), c, e ? Object.keys(d).join(":") : "JSResource: unknown caller")
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("ResourceHasher", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getAsyncHash = a;
    f.createExternalJSHash = b;
    f.getValidResourceHash = c;
    var h = 0;

    function a(a) {
        return "async:" + a
    }

    function b() {
        return "ejs:" + h++
    }

    function c(a) {
        typeof a === "string" || g(0, 19551, a);
        return a
    }
}), null);
__d("TrustedTypes", ["TrustedTypesConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    if (typeof trustedTypes !== "undefined" && b("TrustedTypesConfig").useTrustedTypes) {
        var g = function(a, c) {
                return function(d) {
                    if (a(d)) return d;
                    try {
                        return c("" + d)
                    } catch (a) {
                        if (b("TrustedTypesConfig").reportOnly) return "" + d;
                        throw a
                    }
                }
            },
            h = trustedTypes;
        a = babelHelpers["extends"]({}, h, {
            createPolicy: function(a, b) {
                a = h.createPolicy(a, b);
                return {
                    createHTML: g(h.isHTML.bind(h), a.createHTML.bind(a)),
                    createScript: g(h.isScript.bind(h), a.createScript.bind(a)),
                    createScriptURL: g(h.isScriptURL.bind(h), a.createScriptURL.bind(a))
                }
            }
        });
        c = a
    } else {
        var i = function(a) {
            return a
        };
        d = {
            isHTML: function() {
                return !1
            },
            isScriptURL: function() {
                return !1
            },
            isScript: function() {
                return !1
            },
            createPolicy: function(a, b) {
                return {
                    createHTML: i,
                    createScriptURL: i,
                    createScript: i
                }
            }
        };
        c = d
    }
    e.exports = c
}), null);
__d("createTrustedScriptURLFromFacebookURI", ["TrustedTypes", "URI", "isCdnURI", "isFacebookURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = "fburi-scripturls",
        i, j = {
            createScriptURL: function(a) {
                var c = (g || (g = b("URI"))).tryParseURI(a);
                if (c != null && (b("isFacebookURI")(c) || b("isCdnURI")(c))) return a;
                throw new TypeError()
            }
        };

    function k() {
        if (i) return;
        i = b("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    e.exports = a
}), null);
__d("Bootloader", ["invariant", "BootloaderConfig", "BootloaderEndpoint", "BootloaderEvents", "BootloaderEventsManager", "CSRBitMap", "CSRIndexUtil", "CSSLoader", "ClientConsistency", "ErrorPubSub", "FBLogger", "JSResourceReference", "NetworkStatus", "RequireDeferredReference", "ResourceHasher", "ResourceTimingsStore", "TimeSlice", "cr:696703", "createTrustedScriptURLFromFacebookURI", "err", "fb-error", "ifRequireable", "nullthrows", "performanceAbsoluteNow", "performanceNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = b("fb-error").TAAL,
        l = function() {},
        m = new Set(),
        n = !!b("BootloaderConfig").deferBootloads;
    n && !a.__comet_ssr_is_server_env_DO_NOT_USE && b("setTimeoutAcrossTransitions")(function() {
        $.undeferBootloads(!0)
    }, 15e3);
    var o = b("BootloaderConfig").retryQueuedBootloads,
        p = [],
        q = new Map(),
        r = new Map(),
        s = new Map(),
        t = new Map(),
        u = new Map(),
        v = null,
        w = new Map(),
        x = new Map(),
        y = new Map(),
        z = [],
        A = new Map(),
        B = new Set(),
        C = !1,
        D = new Set(),
        E = !1,
        F = new(b("BootloaderEventsManager"))(),
        G = b("BootloaderConfig").jsRetries || [],
        H = b("BootloaderConfig").jsRetryAbortNum,
        I = b("BootloaderConfig").jsRetryAbortTime,
        J = G.length > 0;
    (h || (h = b("ErrorPubSub"))).unshiftListener(function(a) {
        var b = [];
        for (var c = r, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f[1];
            if (s.has(g)) continue;
            f = N(g);
            if (f.type === "csr" || f.type === "async") continue;
            b.push(f.src)
        }
        a.loadingUrls = b
    });

    function K(a) {
        if (n || !E) return !1;
        if (!o) return !0;
        for (var b = 0; b < a.length; b++) {
            var c, d = a[b];
            d = u.get(d);
            if (!d) return !1;
            d = [d.r, ((c = d.rdfds) == null ? void 0 : c.r) || [], ((c = d.rds) == null ? void 0 : c.r) || []];
            for (var c = 0; c < d.length; c++) {
                var e = d[c];
                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    if (!w.has(h)) return !1
                }
            }
        }
        return !0
    }

    function L(a) {
        var c = u.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("Bootloader: %s is not in the component map", a));
        return c
    }

    function M(a) {
        var c = L(a);
        c.be && (delete c.be, $.done(b("ResourceHasher").getAsyncHash(a)))
    }

    function N(a) {
        var c = w.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("No resource entry for hash: %s", a));
        return c
    }

    function aa(a, c) {
        var d = b("ResourceHasher").getAsyncHash(a);
        if (!w.has(d)) w.set(d, {
            type: "async",
            module: a,
            blocking: !!c
        });
        else {
            a = N(d);
            a.type === "async" || g(0, 21557);
            a.blocking && !c && (a.blocking = !1)
        }
        return d
    }

    function O() {
        v || (v = document.head || document.getElementsByTagName("head")[0] || document.body);
        return v
    }

    function P(a) {
        var b = document.createDocumentFragment();
        a(b);
        O().appendChild(b)
    }

    function Q() {
        if (!J) return !1;
        var a = z.length;
        if (a < H) return !0;
        a = z[a - 1] - z[a - H];
        a < I && (b("FBLogger")("bootloader").warn("JS retry abort"), J = !1);
        return J
    }

    function ba(a, b, c) {
        a = void 0;
        switch (b.type) {
            case "async":
                return;
            case "css":
                a = "style";
                break;
            case "js":
                a = "script";
                break;
            default:
                a = b.type, g(0, 3721)
        }
        if (b.d === 1) return;
        var d = document.createElement("link");
        d.href = b.src;
        d.rel = "preload";
        d.as = a;
        b.nc || (d.crossOrigin = "anonymous");
        c.appendChild(d)
    }

    function R(a, c, d, e) {
        var f = document.createElement("script");
        f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
        f.async = !0;
        c.nc || (f.crossOrigin = "anonymous");
        S(f, a, c, d);
        e.appendChild(f);
        return f
    }

    function S(a, c, d, e) {
        var f = a.src,
            g = (i || (i = b("performanceAbsoluteNow")))(),
            h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            j = b("ResourceTimingsStore").getUID("js", f);
        b("ResourceTimingsStore").annotate("js", j).addStringAnnotation("name", c).addStringAnnotation("source", f);
        b("ifRequireable")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", c)
        });
        b("ResourceTimingsStore").measureRequestSent("js", j);
        a.onload = h.bind(void 0, function() {
            var a;
            a = (a = y.get(f)) != null ? a : 0;
            a && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, f, (i || (i = b("performanceAbsoluteNow")))() - g, a);
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            e()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)())
        };
        a.onerror = h.bind(void 0, function() {
            var h;
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            h = (h = y.get(f)) != null ? h : 0;
            var k = (i || (i = b("performanceAbsoluteNow")))();
            Q() && h < G.length ? (z.push(k), setTimeout(function() {
                if (!Q()) return;
                var b = a.parentNode;
                b && (b.removeChild(a), R(c, d, e, b))
            }, G[h]), y.set(f, h + 1)) : (t.set(c, k), b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, f, k - g, h, r.size - s.size), b("NetworkStatus").reportError(), e())
        })
    }

    function T(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c.src, r.size - s.size), t.set(a, (i || (i = b("performanceAbsoluteNow")))()), b("NetworkStatus").reportError(), d()
        }
    }

    function ca(a, c, d, e) {
        if (r.has(a)) return;
        r.set(a, (i || (i = b("performanceAbsoluteNow")))());
        ba(a, c, d);
        window.CavalryLogger && window.CavalryLogger.getInstance().measureResources({
            name: a,
            type: c.type
        }, e);
        switch (c.type) {
            case "js":
                R(a, c, function() {
                    return $.done(a)
                }, d);
                break;
            case "css":
                e = function() {
                    return $.done(a)
                };
                b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, e, T(a, c, e));
                break;
            case "async":
                b("BootloaderEndpoint").load(c.module, c.blocking, a);
                break;
            default:
                c.type, g(0, 3721)
        }
    }

    function U(a, c, d, e, f) {
        var h = new Map(),
            i = (f = f) != null ? f : b("BootloaderEvents").newResourceMapSet();
        f = [];
        var j = [],
            k = [];
        for (var a = W(a), l = Array.isArray(a), m = 0, a = l ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var n;
            if (l) {
                if (m >= a.length) break;
                n = a[m++]
            } else {
                m = a.next();
                if (m.done) break;
                n = m.value
            }
            n = n;
            var o = n[0];
            n = n[1];
            var p = void 0;
            switch (n.type) {
                case "css":
                    p = n.nonblocking ? "nonblocking" : "blocking";
                    break;
                case "js":
                    p = "default";
                    break;
                case "async":
                    p = n.blocking ? "blocking" : "nonblocking";
                    break;
                default:
                    n.type, g(0, 3721)
            }
            i[p].set(o, n);
            var q = F.rsrcDone(o);
            k.push(q);
            p !== "nonblocking" && (j.push(q), p === "blocking" && f.push(q));
            r.has(o) || h.set(o, n)
        }
        var s, t;
        !b("cr:696703") ? s = t = function(a) {
            return a()
        } : (t = b("cr:696703").scheduleLoggingPriCallback, s = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE());
        var u = c.onBlocking,
            v = c.onAll,
            w = c.onLog;
        u && F.registerCallback(function() {
            s(u)
        }, f);
        v && F.registerCallback(function() {
            s(v)
        }, j);
        w && F.registerCallback(function() {
            t(function() {
                return w(i)
            })
        }, k);
        for (var p = h, q = Array.isArray(p), o = 0, p = q ? p : p[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (q) {
                if (o >= p.length) break;
                n = p[o++]
            } else {
                o = p.next();
                if (o.done) break;
                n = o.value
            }
            m = n;
            l = m[0];
            a = m[1];
            ca(l, a, d, e)
        }
    }

    function V(a, c, d) {
        w.set(a, c);
        if (c.type === "async" || c.type === "csr") return;
        c = c.p;
        if (c)
            for (var c = b("CSRIndexUtil").parseCSRIndexes(c), e = Array.isArray(c), f = 0, c = e ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= c.length) break;
                    g = c[f++]
                } else {
                    f = c.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                (!x.has(g) || d) && (x.set(g, a), b("CSRBitMap").add(g))
            }
    }

    function da(a, c) {
        var d = F.bootload(c);
        if (B.has(d)) return [d, null];
        B.add(d);
        var e = (i || (i = b("performanceAbsoluteNow")))();
        c = {
            ref: a,
            components: c,
            timesliceContext: b("TimeSlice").getContext(),
            startTime: (a = q.get(d)) != null ? a : e,
            fetchStartTime: e,
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: b("BootloaderEvents").newResourceMapSet(),
            tierTwo: b("BootloaderEvents").newResourceMapSet(),
            tierThree: b("BootloaderEvents").newResourceMapSet(),
            beRequests: new Map()
        };
        b("BootloaderEvents").notifyBootloadStart(c);
        return [d, c]
    }

    function ea(a) {
        return b("ifRequireable").call(null, a, function() {
            return !0
        }, function() {
            return !1
        })
    }

    function fa(a, c, e, f) {
        A.has(a) || A.set(a, {
            firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
            logData: new Set()
        });
        f && b("nullthrows")(A.get(a)).logData.add(f);
        var g = L(a),
            h = g.r,
            j = g.rdfds,
            k = g.rds;
        g = g.be;
        g = ea(a) ? null : aa(a, g);
        g == null && F.notify(F.beDone(a));
        U(g != null ? [g].concat(h) : h, {
            onAll: function() {
                return F.notify(F.tierOne(a))
            },
            onLog: function() {
                return F.notify(F.tierOneLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierOne);
        var l = (j == null ? void 0 : j.m) || [];
        U((j == null ? void 0 : j.r) || [], {
            onAll: function() {
                return F.registerCallback(function() {
                    F.notify(F.tierTwoStart(a)), b("RequireDeferredReference").onReady_DO_NOT_USE(l, function() {
                        d.call(null, l, function() {
                            return F.notify(F.tierTwo(a))
                        })
                    })
                }, [F.tierOne(a), c])
            },
            onLog: function() {
                return F.notify(F.tierTwoLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierTwo);
        var m = (k == null ? void 0 : k.m) || [];
        U((k == null ? void 0 : k.r) || [], {
            onAll: function() {
                return F.registerCallback(function() {
                    F.notify(F.tierThreeStart(a)), b("RequireDeferredReference").onReady_DO_NOT_USE(m, function() {
                        d.call(null, m, function() {
                            return F.notify(F.tierThree(a))
                        })
                    })
                }, [F.tierTwo(a)])
            },
            onLog: function() {
                return F.notify(F.tierThreeLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierThree)
    }

    function W(a) {
        var c = new Map();
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = w.get(e);
            if (!f) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", e);
                continue
            }
            var h;
            if (f.type === "csr") h = b("CSRIndexUtil").parseCSRIndexes(f.src);
            else if (f.p) h = b("CSRIndexUtil").parseCSRIndexes(f.p);
            else {
                c.set(e, f);
                continue
            }
            for (var e = h, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (f) {
                    if (h >= e.length) break;
                    i = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                i = b("nullthrows")(x.get(i), "No hash for rsrcIndex:" + i);
                var j = N(i);
                j.type !== "csr" || g(0, 20056, i);
                c.set(i, j)
            }
        }
        return c.entries()
    }

    function X(a) {
        var c, d = a.getAttribute("data-bootloader-hash");
        if (d == null) return;
        var e = b("ResourceHasher").getValidResourceHash(d);
        if (a.id) {
            if (D.has(a.id)) return;
            D.add(a.id)
        }
        d = a.tagName == "SCRIPT" ? {
            src: a.src,
            type: "js"
        } : {
            src: a.href,
            type: "css"
        };
        a.crossOrigin == null && (d.nc = 1);
        d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
        d.p = a.getAttribute("data-p");
        w.has(e) && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
        V(e, d, !0);
        r.set(e, (i || (i = b("performanceAbsoluteNow")))());
        var f = function() {
            return $.done(e)
        };
        c = d.type === "js" ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[e] ? f() : d.type === "js" ? S(a, e, d, f) : b("CSSLoader").setupEventListeners(e, d.src, O(), f, T(e, d, f), a)
    }

    function Y() {
        if (C) return;
        C = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return X(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return X(a)
        })
    }

    function Z() {
        E = !0;
        var a = p;
        p = [];
        a.forEach(function(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            a = a[3];
            a(function() {
                $.loadModules.apply($, [b, c, d])
            })
        })
    }
    var $ = {
        loadModules: function(a, c, e) {
            c === void 0 && (c = l);
            e === void 0 && (e = "loadModules: unknown caller");
            var f = a,
                g = !1,
                h = function() {
                    g || c.apply(void 0, arguments)
                };
            a = {
                remove: function() {
                    g = !0
                }
            };
            if (!K(f)) {
                var j = "Deferred: Bootloader.loadModules";
                j = b("TimeSlice").getGuardedContinuation(j);
                p.push([f, h, e, j]);
                j = F.bootload(f);
                q.set(j, (j = q.get(j)) != null ? j : (i || (i = b("performanceAbsoluteNow")))());
                return a
            }
            j = da(e, f);
            var k = j[0],
                m = j[1];
            F.registerCallback(d.bind(null, f, function() {
                m && (m.callbackStart = (i || (i = b("performanceAbsoluteNow")))()), h.apply(void 0, arguments), m && (m.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()), F.notify(k)
            }), f.map(function(a) {
                return F.tierOne(a)
            }));
            P(function(b) {
                for (var c = 0; c < f.length; c++) {
                    var a = f[c];
                    fa(a, k, b, m)
                }
            });
            if (m) {
                j = new Set([k]);
                for (var n = 0; n < f.length; n++) {
                    var o = f[n];
                    j.add(F.beDone(o));
                    j.add(F.tierThree(o));
                    j.add(F.tierOneLog(o));
                    j.add(F.tierTwoLog(o));
                    j.add(F.tierThreeLog(o))
                }
                F.registerCallback(function() {
                    return b("BootloaderEvents").notifyBootload(m)
                }, Array.from(j));
                b("ifRequireable")("TimeSliceInteraction", function(a) {
                    a.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(m.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(m.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(m.tierThree).keys())).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", f)
                })
            }
            return a
        },
        loadResources: function(a, c, d) {
            d === void 0 && (d = "loadResources: unknown caller"), Y(), P(function(e) {
                var f;
                return U(a.map(function(a) {
                    return b("ResourceHasher").getValidResourceHash(a)
                }), (f = c) != null ? f : Object.freeze({}), e, d)
            })
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
            var c = b("ResourceHasher").createExternalJSHash();
            V(c, {
                type: "js",
                src: a,
                nc: 1
            }, !1);
            $.loadResources([c])
        },
        done: function(a) {
            s.set(a, (i || (i = b("performanceAbsoluteNow")))()), window.CavalryLogger && window.CavalryLogger.done_js([a]), F.notify(F.rsrcDone(a))
        },
        beDone: function(a, b, c) {
            for (var d = (d = (d = A.get(a)) == null ? void 0 : d.logData) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d, g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                g.beRequests.set(b, c)
            }
            F.notify(F.beDone(a))
        },
        handlePayload: function(a) {
            for (var b = (b = a.rsrcTags) != null ? b : [], c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var b, e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                X(document.getElementById(e))
            }
            $.setResourceMap((e = a.rsrcMap) != null ? e : {}, a.sotUpgrades, (c = (d = a.consistency) == null ? void 0 : d.rev) != null ? c : a.sr_revision);
            a.compMap && $.enableBootload(a.compMap)
        },
        enableBootload: function(a) {
            for (var b in a) u.has(b) || (u.set(b, a[b]), m.has(b) && (m["delete"](b), M(b)));
            Y();
            n || Z()
        },
        undeferBootloads: function(a) {
            a === void 0 && (a = !1);
            if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
            a && n && b("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: u.size,
                pending: p.map(function(a) {
                    var b = a[0];
                    a[1];
                    var c = a[2];
                    a[3];
                    return {
                        components: b,
                        ref: c
                    }
                }),
                time: (j || (j = b("performanceNow")))()
            });
            n = !1;
            u.size && Z()
        },
        markComponentsAsImmediate: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                u.has(c) ? M(c) : m.add(c)
            }
        },
        setResourceMap: function(a, c, d) {
            var e = !1;
            for (var f in a) {
                f = b("ResourceHasher").getValidResourceHash(f);
                var g = a[f],
                    h = w.get(f);
                !h ? (g.type === "js" && (e = !0), V(f, g, !1)) : (h.type === "js" && g.type === "js" || h.type === "css" && g.type === "css") && (g.d && !h.d && (g.type === "js" && (e = !0), h.src = g.src, h.d = 1))
            }
            e && d != null && b("ClientConsistency").addAdditionalRevision(d);
            if (c)
                for (var g = c, h = Array.isArray(g), a = 0, g = h ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (h) {
                        if (a >= g.length) break;
                        e = g[a++]
                    } else {
                        a = g.next();
                        if (a.done) break;
                        e = a.value
                    }
                    d = e;
                    c = w.get(d);
                    c && V(d, c, !0)
                }
        },
        getURLToHashMap: function() {
            var a = new Map();
            for (var b = w, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                if (e.type === "async" || e.type === "csr") continue;
                a.set(e.src, f)
            }
            return a
        },
        loadPredictedResourceMap: function(a, b, c) {
            $.setResourceMap(a, null, c), $.loadResources(Object.keys(a), {
                onAll: b
            })
        },
        getCSSResources: function(a) {
            var b = [];
            for (var a = W(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                e.type === "css" && b.push(f)
            }
            return b
        },
        getBootloadedComponents: function() {
            var a = new Map();
            for (var b = A, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a.set(f, e.firstBootloadStart)
            }
            return a
        },
        getResourceState: function(a) {
            return {
                loadStart: r.get(a),
                loadEnd: s.get(a),
                loadError: t.get(a)
            }
        },
        getComponentTiming: function(a) {
            var b;
            return {
                tierTwoStart: (b = F.getEventTime(F.tierTwoStart(a))) != null ? b : 0,
                tierTwoEnd: (b = F.getEventTime(F.tierTwo(a))) != null ? b : 0,
                tierThreeStart: (b = F.getEventTime(F.tierThreeStart(a))) != null ? b : 0,
                tierThreeEnd: (b = F.getEventTime(F.tierThree(a))) != null ? b : 0
            }
        },
        getLoadedResourceCount: function() {
            return s.size
        },
        getErrorCount: function() {
            return t.size
        },
        forceFlush: function() {
            b("BootloaderEndpoint").forceFlush()
        },
        __debug: {
            componentMap: u,
            requested: r,
            resources: w,
            riMap: x,
            retries: y,
            errors: t,
            loaded: s,
            bootloaded: A,
            queuedToMarkAsImmediate: m,
            _resolveCSRs: W,
            _queuedLoadModules: p,
            _dequeueLoadModules: function(a) {
                a = p.splice(a, 1);
                if (!a.length) return;
                a = a[0];
                var b = a[0],
                    c = a[1],
                    d = a[2];
                a = a[3];
                var e = n,
                    f = E,
                    g = o;
                n = !1;
                E = !0;
                o = !1;
                a(function() {
                    $.loadModules.apply($, [b, c, d])
                });
                n = e;
                E = f;
                o = g
            }
        }
    };
    b("JSResourceReference").setBootloader($);
    e.exports = $
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.exists = a;
    f.clean = b;
    c = "for (;;);";
    var g = /^for ?\(;;\);/;
    f.regex = g;
    d = c.length;
    f.length = d;

    function a(a) {
        return !!a.match(g)
    }

    function b(a) {
        var b = a.match(g);
        return b ? a.substr(b[0].length) : b
    }
}), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
    e.exports = c
}), null);
__d("clearImmediate", ["clearImmediatePolyfill"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        b("clearImmediatePolyfill")(a)
    }
}), null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    c = a;
    e.exports = c
}), null);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.getToken = a;
    f.setToken = c;
    f.refresh = d;
    var h = b("DTSGInitialData").token || null;

    function a() {
        return h
    }

    function c(a) {
        h = a
    }

    function d() {
        g(0, 5809)
    }
}), null);
__d("isOculusDotComURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
}), null);
__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            c = c.toString();
            return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com") || a.isSubdomainOfDomain("discoverapp.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getToken = a;
    f.setToken = c;
    var g = b("DTSGInitData").async_get_token || null;

    function a() {
        return g
    }

    function c(a) {
        g = a
    }
}), null);
__d("ge", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
}), null);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ge", "memoize"], (function(a, b, c, d, e, f) {
    e.exports = h;
    var g = new Set();

    function h(a, c, d) {
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) h(a, e, f);
        else if (e && typeof e === "object")
            if (e.__m) e.__lazy ? c[d] = b("memoize")(b.bind(null, e.__m)) : c[d] = b.call(null, e.__m);
            else if (e.__jsr) c[d] = new(b.call(null, "JSResourceReference"))(e.__jsr).__setRef("replaceTransportMarkers");
        else if (e.__dr) c[d] = new(b.call(null, "RequireDeferredReference"))(e.__dr).__setRef("replaceTransportMarkers");
        else if (e.__rc) e.__rc[0] === null ? c[d] = null : c[d] = b.call(null, e.__rc[0]), e.__rc[1] && (g.has(e.__rc[1]) || (g.add(e.__rc[1]), b("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: e.__rc[1]
        })));
        else if (e.__e) c[d] = b("ge")(e.__e);
        else if (e.__rel) c[d] = a.relativeTo;
        else if (e.__bigPipeContext) c[d] = a.bigPipeContext;
        else if (e.__bbox) c[d] = e.__bbox;
        else {
            for (var i in e) h(a, e, i);
            if (e.__map) c[d] = new Map(e.__map);
            else if (e.__set) c[d] = new Set(e.__set);
            else if (e.__imm) {
                f = e.__imm;
                a = f.method;
                e = f.value;
                c[d] = b.call(null, "immutable")[a](e)
            }
        }
    }
}), null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    var g = 2,
        h = 8,
        i = new(b("BitMap"))(),
        j = {
            getLoadedModuleHash: function() {
                return i.toCompressedString()
            },
            getModuleNameAndHash: function(a) {
                a = a.split("@");
                return {
                    hash: a[1],
                    name: a[0]
                }
            },
            handleDefine: function(a, c, d, f, j) {
                f >= 0 && i.set(f), define(a, c, function(g, h, i, k, c) {
                    g = {
                        data: d
                    };
                    b("replaceTransportMarkers")({
                        relativeTo: j
                    }, g);
                    if (f === -42) {
                        h = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof h === "string" ? h : ""))
                    }
                    c.exports = g.data
                }, g | h)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    j.handleDefine.apply(null, c)
                })
            }
        };
    a = j;
    e.exports = a
}), null);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        pkg_cohort_key: "__pc",
        connection_class_server_guess_key: "__ccg",
        dpr_key: "dpr",
        be_one_ahead_key: "__beoa",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv",
        lite_iframe_locale_override_key: "__ltif_locale",
        weblite_key: "__wblt",
        weblite_iframe_key: "__wbltif",
        kite_key: "__ktif",
        kite_legacy_key: "_ktif",
        haste_session_id_key: "__hsi",
        jsmod_key: "__dyn",
        csr_key: "__csr",
        comet_key: "__comet_req",
        bl_hash_version_key: "__bhv"
    })
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function g() {
        var a = 4022871197,
            b = function(b) {
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = new g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
}), null);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 4294967296,
        h = b("ServerNonce").ServerNonce,
        i;

    function j() {
        i == null && (i = b("Alea")(h));
        return i
    }
    var k = {
        random: function() {
            var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
                c = a.crypto || a.msCrypto;
            if (b != null) try {
                var d = c == null ? void 0 : c.getRandomValues;
                if (typeof d === "function") {
                    var e = d.bind(c);
                    return function() {
                        try {
                            e(b)
                        } catch (a) {
                            return j()()
                        }
                        return b[0] / g
                    }
                }
            } catch (a) {}
            return j()
        }(),
        uint32: function() {
            return Math.floor(k.random() * g)
        },
        coinflip: function(a) {
            if (a === 0) return !1;
            return a <= 1 ? !0 : k.random() * a <= 1
        }
    };
    e.exports = k
}), null);
__d("WebSessionDefaultTimeoutMs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 35e3;
    e.exports = a
}), null);
__d("CookieConsent", ["InitialCookieConsent"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = new Set((g || (g = b("InitialCookieConsent"))).initialConsent),
        i = g.shouldShowCookieBanner;
    a = {
        setConsented: function() {
            h.add(1), i = !1
        },
        hasConsent: function(a) {
            return h.has(a)
        },
        isCookiesBlocked: function() {
            return (g || (g = b("InitialCookieConsent"))).noCookies
        },
        shouldShowCookieBanner: function() {
            return i
        }
    };
    e.exports = a
}), null);
__d("isQuotaExceededError", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b;

    function b(b, c) {
        return Boolean(c instanceof a.DOMException && (c.code === 22 || c.code === 1014 || c.name === "QuotaExceededError" || c.name === "NS_ERROR_DOM_QUOTA_REACHED") && b && b.length !== 0)
    }
}), null);
__d("WebStorage", ["CookieConsent", "FBLogger", "err", "isQuotaExceededError"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {},
        i = {},
        j = "localStorage",
        k = "sessionStorage";

    function l(a, c, d) {
        if ((g || (g = b("CookieConsent"))).isCookiesBlocked() || !(g || (g = b("CookieConsent"))).hasConsent(1)) return null;
        Object.prototype.hasOwnProperty.call(a, d) || (a[d] = c(d));
        return a[d]
    }

    function m(a) {
        try {
            return window[a]
        } catch (a) {
            b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function n(a) {
        var c = null;
        try {
            c = window[a];
            if (c != null && typeof c.setItem === "function" && typeof c.removeItem === "function") {
                var d = "__test__" + Date.now();
                c.setItem(d, "");
                c.removeItem(d)
            } else return null
        } catch (d) {
            if (b("isQuotaExceededError")(c, d) === !1) {
                b("FBLogger")("web_storage").catching(d).warn("Failed to get WebStorage of type `%s`", a);
                return null
            }
        }
        return c
    }

    function o(a) {
        var c = null;
        try {
            c = window[a];
            if (c != null && typeof c.setItem === "function" && typeof c.removeItem === "function") {
                a = "__test__" + Date.now();
                c.setItem(a, "");
                c.removeItem(a)
            }
        } catch (a) {
            if (b("isQuotaExceededError")(c, a) === !0) return !0
        }
        return !1
    }

    function p(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, c, d) {
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(c, d)
        } catch (g) {
            var f = p(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = b("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", c, d.length, f.join())
        }
        return e
    }
    c = {
        getLocalStorage: function() {
            return l(h, n, j)
        },
        getSessionStorage: function() {
            return l(h, n, k)
        },
        getLocalStorageForRead: function() {
            return l(i, m, j)
        },
        getSessionStorageForRead: function() {
            return l(i, m, k)
        },
        isLocalStorageQuotaExceeded: function() {
            return o(j)
        },
        setItemGuarded: a,
        clearCaches: function() {
            h = {}, i = {}
        }
    };
    d = c;
    e.exports = d
}), null);
__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], (function(a, b, c, d, e, f) {
    "use strict";
    f.extend = a;
    f.getId = c;
    f.getPageId_DO_NOT_USE = d;
    var g, h = 36,
        i = 6,
        j = Math.pow(h, i);

    function k(a) {
        return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a
    }

    function l(a) {
        if (a == null) return null;
        var c = parseInt(a, 10);
        if ("" + c !== a) {
            b("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
            return null
        }
        return k(c)
    }

    function m(a) {
        if (a == null) return null;
        if (a.length !== i) {
            b("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
            return null
        }
        if (/^[a-z0-9]+$/.test(a) === !1) {
            b("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
            return null
        }
        return a
    }

    function n(a) {
        if (a == null) return null;
        if (typeof a !== "string" && a instanceof String === !1) {
            b("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
            return null
        }
        a = a.split(":");
        var c = a[0];
        a = a[1];
        a = l(a);
        c = m(c);
        return a == null || c == null ? null : {
            expiryTime: a,
            id: c
        }
    }

    function o() {
        var a = Math.floor(b("Random").random() * j);
        a = a.toString(h);
        return "0".repeat(i - a.length) + a
    }
    var p = null;

    function q() {
        p == null && (p = o());
        return p
    }

    function r(a) {
        a === void 0 && (a = Date.now());
        var c = (g || (g = b("WebStorage"))).getLocalStorageForRead();
        if (c == null) return null;
        c = n(c.getItem("Session"));
        return c && a < c.expiryTime ? c : null
    }

    function s() {
        var a;
        return (a = r()) == null ? void 0 : a.id
    }

    function t() {
        var a = (g || (g = b("WebStorage"))).getSessionStorageForRead();
        if (a == null) return null;
        a = m(a.getItem("TabId"));
        if (a == null) {
            var c = (g || (g = b("WebStorage"))).getSessionStorage();
            if (c == null) return null;
            var d = o();
            g.setItemGuarded(c, "TabId", d);
            return d
        }
        return a
    }

    function a(a) {
        if (a !== void 0 && k(a) == null) {
            b("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
            return
        }
        var c = Date.now();
        a = (a = a) != null ? a : c + b("WebSessionDefaultTimeoutMs");
        var d = r(c);
        if (d && d.expiryTime >= a || a <= c) return;
        c = (g || (g = b("WebStorage"))).getLocalStorage();
        if (c != null) {
            d = d == null ? o() : d.id;
            (g || (g = b("WebStorage"))).setItemGuarded(c, "Session", d + ":" + a)
        }
    }

    function c() {
        var a, b, c = q();
        a = (a = s()) != null ? a : "";
        b = (b = t()) != null ? b : "";
        return a + ":" + b + ":" + c
    }

    function d() {
        return q()
    }
}), null);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    f.add = a;
    f.get = b;
    var g = {};

    function a(a, b) {
        g[a] = b
    }

    function b() {
        return g
    }
}), null);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g) {
    f.addClass = i;
    f.removeClass = j;
    f.conditionClass = a;
    f.hasClass = k;
    f.matchesSelector = b;

    function h(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }

    function i(a, b) {
        /\s/.test(b) && g(0, 11794, b);
        b && (a.classList ? a.classList.add(b) : k(a, b) || (a.className = a.className + " " + b));
        return a
    }

    function j(a, b) {
        /\s/.test(b) && g(0, 11795, b);
        b && (a.classList ? a.classList.remove(b) : k(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
        return a
    }

    function a(a, b, c) {
        return (c ? i : j)(a, b)
    }

    function k(a, b) {
        /\s/.test(b) && g(0, 442);
        return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function b(a, b) {
        var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
            return h(a, b)
        };
        return c.call(a, b)
    }
}), null);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a() {
        return !!document.body && b("CSSCore").hasClass(document.body, "plugin")
    }
}), null);
__d("uniqueRequestID", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = 36,
        h = 1;

    function a() {
        return (h++).toString(g)
    }
}), null);
__d("getAsyncParams", ["CSRBitMap", "CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", "ISB", "JSErrorLoggingConfig", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "WebConnectionClassServerGuess", "WebSession", "asyncParams", "isSocialPlugin", "uniqueRequestID"], (function(a, b, c, d, e, f) {
    var g, h, i = b("JSErrorLoggingConfig").sampleWeight,
        j = b("JSErrorLoggingConfig").sampleWeightKey,
        k = {
            locale: !0,
            cxobfus: !0,
            js_debug: !0,
            cquick: !0,
            cquick_token: !0,
            wdplevel: !0,
            prod_graphql: !0,
            sri: !0
        },
        l = {
            ctarget: !0
        };

    function a(a) {
        var c, d = babelHelpers["extends"]({}, b("asyncParams").get(), (c = {
            __user: (g || (g = b("CurrentUserInitialData"))).USER_ID,
            __a: 1
        }, c[b("StaticSiteData").jsmod_key] = b("ServerJSDefine").getLoadedModuleHash(), c[b("StaticSiteData").csr_key] = b("CSRBitMap").toCompressedString(), c.__req = b("uniqueRequestID")(), c[b("StaticSiteData").be_one_ahead_key] = b("SiteData").be_one_ahead ? 1 : 0, c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort, c[b("StaticSiteData").bl_hash_version_key] = b("SiteData").bl_hash_version, c[b("StaticSiteData").dpr_key] = b("SiteData").pr, c[b("StaticSiteData").connection_class_server_guess_key] = b("WebConnectionClassServerGuess").connectionClass, c.__rev = b("SiteData").client_revision, c.__s = b("WebSession").getId(), c[b("StaticSiteData").haste_session_id_key] = b("SiteData").hsi, c[b("StaticSiteData").comet_key] = b("SiteData").is_comet ? 1 : 0, c));
        b("SiteData").force_blue && (d.force_blue = 1);
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_" || k[b] > -1 || l[b] > -1) && (l[b] > -1 ? d[b] = decodeURIComponent(a) : d[b] = a)
        });
        (h || (h = b("Env"))).isCQuick && !d.cquick && (d.cquick = (h || (h = b("Env"))).iframeKey, d.ctarget = h.iframeTarget, d.cquick_token = h.iframeToken);
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (d.fb_dtsg = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (d.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            c = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            c && (d.fb_dtsg_ag = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)))
        }
        b("ISB").token && (d.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (d.__sp = 1);
        if (b("SiteData").spin) {
            d[(a = b("StaticSiteData")).spin_rev_key] = b("SiteData")[a.spin_rev_key];
            d[a.spin_branch_key] = b("SiteData")[a.spin_branch_key];
            d[a.spin_time_key] = b("SiteData")[a.spin_time_key];
            b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key])
        }
        i != null && j != null && (d[j] = i);
        return d
    }
    e.exports = a
}), null);
__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", "CSRFGuard", "FBLogger", "HasteResponse", "TimeSlice", "clearImmediate", "fb-error", "getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").ErrorXFBDebug,
        i = b("BootloaderEndpointConfig").endpointURI,
        j = 0,
        k = null,
        l = null,
        m = new Map(),
        n = new Map();

    function o(a) {
        return Array.from(a.keys()).join(",")
    }

    function p(a, c) {
        var d = {};
        a.size && (d.modules = o(a));
        c.size && (d.nb_modules = o(c));
        a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function(a) {
            var b = a[0];
            a = a[1];
            return encodeURIComponent(b) + "=" + encodeURIComponent(String(a))
        }).join("&");
        return i + (i.includes("?") ? "&" : "?") + a
    }

    function q(a, c) {
        if (a.size === 0 && c.size === 0) return;
        var d = p(a, c),
            e = b("getSameOriginTransport")(),
            f = j++,
            i = (g || (g = b("performanceAbsoluteNow")))();
        e.open("GET", d, !0);
        var k = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        e.onreadystatechange = function() {
            if (e.readyState !== 4) return;
            k(function() {
                h.addFromXHR(e);
                var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
                if (g == null) {
                    b("FBLogger")("bootloader").warn('Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"', e.status, o(a), o(c), e.responseText.substr(0, 256));
                    return
                }
                if (g.__error) {
                    b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
                    return
                }
                b("TimeSlice").guard(function() {
                    return r(d, g, a, c, f, i)
                }, "Bootloader receiveEndpointData", {
                    propagationType: b("TimeSlice").PropagationType.CONTINUATION
                })()
            })
        };
        e.send()
    }

    function r(a, c, d, e, f, h) {
        var i = (g || (g = b("performanceAbsoluteNow")))(),
            j = c.serverGenTime,
            k = c.hrp;
        if (k == null) {
            c = c;
            b("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", o(d), o(e), c.error + ", summary: " + c.errorSummary + ", description: " + c.errorDescription);
            k = c
        }
        b("HasteResponse").handle(k, {
            source: "bootloader_endpoint",
            sourceDetail: JSON.stringify({
                b: Array.from(d.keys()),
                n: Array.from(e.keys())
            }),
            onBlocking: function() {
                var a = [d, e];
                for (var c = 0; c < a.length; c++) {
                    var f = a[c];
                    for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var i;
                        if (g) {
                            if (h >= f.length) break;
                            i = f[h++]
                        } else {
                            h = f.next();
                            if (h.done) break;
                            i = h.value
                        }
                        i = i;
                        b("Bootloader").done(i)
                    }
                }
            },
            onLog: function(c) {
                var g = [d, e];
                for (var k = 0; k < g.length; k++) {
                    var l = g[k];
                    for (var l = l.keys(), m = Array.isArray(l), n = 0, l = m ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var o;
                        if (m) {
                            if (n >= l.length) break;
                            o = l[n++]
                        } else {
                            n = l.next();
                            if (n.done) break;
                            o = n.value
                        }
                        o = o;
                        b("Bootloader").beDone(o, f, babelHelpers["extends"]({
                            requestStart: h,
                            responseStart: i,
                            serverGenTime: j,
                            uri: a
                        }, c))
                    }
                }
            }
        })
    }

    function s() {
        var a = m,
            c = n;
        b("clearImmediate")(l);
        l = null;
        k = null;
        m = new Map();
        n = new Map();
        q(a, c)
    }
    a = {
        load: function(a, c, d) {
            (c ? m : n).set(a, d);
            if (b("BootloaderEndpointConfig").debugNoBatching) {
                s();
                return
            }
            if (l != null) return;
            k = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
            l = b("setImmediateAcrossTransitions")(function() {
                k && k(function() {
                    return s()
                })
            })
        },
        forceFlush: function() {
            k && k(function() {
                return s()
            })
        }
    };
    e.exports = a
}), null);
__d("bx", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 11796, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (a[c].loggingID = c, h[c] = a[c])
    };
    a.getURL = function(a) {
        return a.uri
    }
}), null);
__d("recoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, c, d) {
        d = d === void 0 ? {} : d;
        d = d.error;
        c = b("FBLogger")(c);
        d ? c = c.catching(d) : c = c.blameToPreviousFrame();
        c.mustfix(a);
        return null
    }
}), null);
__d("getFalcoLogPolicy_DO_NOT_USE", ["recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
            r: 1
        },
        h = {};

    function a(a) {
        var c = h[a];
        if (c == null) {
            b("recoverableViolation")("Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" + a + "`. Failing open (ie. with a sampling rate of 1.0).", "staticresources");
            return g
        }
        return c
    }
    a.add = function(a) {
        Object.keys(a).forEach(function(b) {
            h[b] == null && (h[b] = a[b])
        })
    };
    e.exports = a
}), null);
__d("ix", ["invariant", "nullthrows"], (function(a, b, c, d, e, f, g) {
    e.exports = c;
    var h = {},
        i = new Set();

    function c(c) {
        var d = h[c];
        !d && g(0, 11798, c);
        a.__flight_execution_mode_DO_NOT_USE === "flight" && d.sprited === 1 && i.add(b("nullthrows")(d.origPath, "origPath should be defined on the server in react flight"));
        return d
    }
    c.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (a[c].loggingID = c, h[c] = a[c])
    };
    c.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function() {
        a.__flight_execution_mode_DO_NOT_USE === "flight" || g(0, 34547);
        return Array.from(i)
    }
}), null);
__d("qex", ["invariant", "BanzaiLazyQueue"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {};
    a = {
        _: function(a) {
            var c = h[a];
            c != null || g(0, 11799, a);
            var d = c.r;
            c = c.l;
            c != null && !i[a] && (i[a] = !0, b("BanzaiLazyQueue").queuePost("qex", {
                l: c
            }));
            return d
        },
        add: function(a) {
            for (var b in a) b in h || (h[b] = a[b])
        }
    };
    c = a;
    e.exports = c
}), null);
__d("HasteSupportData", ["ix", "bx", "getFalcoLogPolicy_DO_NOT_USE", "gkx", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f.handle = a;

    function a(a) {
        var c = a.bxData,
            d = a.clpData,
            e = a.gkxData,
            f = a.ixData;
        a = a.qexData;
        c != null && b("bx").add(c);
        d != null && b("getFalcoLogPolicy_DO_NOT_USE").add(d);
        e != null && b("gkx").add(e);
        f != null && g.add(f);
        a != null && b("qex").add(a)
    }
}), null);
__d("CSS", ["$", "CSSCore"], (function(a, b, c, d, e, f) {
    f.setClass = a;
    f.hasClass = h;
    f.matchesSelector = c;
    f.addClass = i;
    f.removeClass = j;
    f.conditionClass = k;
    f.toggleClass = l;
    f.shown = d;
    f.hide = e;
    f.show = m;
    f.toggle = n;
    f.conditionShow = o;
    a = typeof window != "undefined" ? window.CSS : null;
    var g = "hidden_elem";
    c = a && a.supports.bind(a);
    f.supports = c;

    function a(a, c) {
        b("$").fromIDOrElement(a).className = c || "";
        return a
    }

    function h(a, c) {
        return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c)
    }

    function c(a, c) {
        return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c)
    }

    function i(a, c) {
        return b("CSSCore").addClass(b("$").fromIDOrElement(a), c)
    }

    function j(a, c) {
        return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c)
    }

    function k(a, c, d) {
        return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d)
    }

    function l(a, b) {
        return k(a, b, !h(a, b))
    }

    function d(a) {
        return !h(a, g)
    }

    function e(a) {
        return i(a, g)
    }

    function m(a) {
        return j(a, g)
    }

    function n(a) {
        return l(a, g)
    }

    function o(a, b) {
        return k(a, g, !b)
    }
}), null);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f) {
    f.byTag = a;
    f.byClass = c;
    f.bySelector = d;
    f.bySelector_SLOW = g;
    f.byAttribute = e;
    f.find = h;

    function a(a, b) {
        b = b.toUpperCase();
        a = h(a, function(a) {
            return a.nodeName === b
        });
        return a instanceof Element ? a : null
    }

    function c(a, c) {
        a = h(a, function(a) {
            return a instanceof Element && b("CSS").hasClass(a, c)
        });
        return a instanceof Element ? a : null
    }

    function d(a, b) {
        a = a;
        if (typeof a.matches === "function") {
            while (a && a !== document && !a.matches(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else if (typeof a.msMatchesSelector === "function") {
            while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else return g(a, b)
    }

    function g(a, b) {
        a = a;
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (!(c instanceof Element) && !(c instanceof Document)) return null;
        c = c.querySelectorAll(b);
        while (a) {
            if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
            a = a.parentNode
        }
        return a instanceof Element ? a : null
    }

    function e(a, b) {
        a = h(a, function(a) {
            return a instanceof Element && !!a.getAttribute(b)
        });
        return a instanceof Element ? a : null
    }

    function h(a, b) {
        a = a;
        while (a) {
            if (b(a)) return a;
            a = a.parentNode
        }
        return null
    }
}), null);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f) {
    a = function() {
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(c) {
            c = b("Parent").find(c, function(b) {
                return !!a.forNode(b)
            });
            return c ? a.forNode(c) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var c = a.prototype;
        c.onCleanup = function(a) {
            this.$6.push(a)
        };
        c.onUnmount = function(a) {
            this.$7.push(a)
        };
        c.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        c.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        c.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        c.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        c.$10 = function(a) {
            this.$5.add(a)
        };
        c.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    e.exports = a;
    a.$1 = new Map()
}), null);
__d("__debug", [], (function(a, b, c, d, e, f) {
    a = {};
    e.exports = a
}), null);
__d("ServerJS", ["ContextualComponent", "ErrorGuard", "ServerJSDefine", "__debug", "err", "ge", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    var g, h = 1,
        i = 2,
        j = 16,
        k = 0;
    a = function() {
        "use strict";

        function a() {
            this.$2 = {}, this.$1 = null, this.$4 = {}, this.$3 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, m)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, c, d) {
            this.$3 = c;
            if (a.__guard != null) throw b("err")("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            d(a.define || [], this.$6, this);
            d(a.markup || [], this.$7, this);
            d(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            d(a.instances || [], this.$10, this);
            var e = d(a.pre_display_requires || [], this.$11, this);
            e = e.concat(d(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    e.forEach(function(a) {
                        a && a.cancel()
                    })
                }
            }
        };
        c.handlePartial = function(a, b) {
            var c = this;
            (a.instances || []).forEach(function(a) {
                p(c.$2, a)
            });
            (a.markup || []).forEach(function(a) {
                o(c.$2, a)
            });
            (a.elements || []).forEach(function(a) {
                o(c.$2, a)
            });
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$1 = a;
            return this
        };
        c.cleanup = function(a) {
            var c = Object.keys(this.$2);
            a ? d.call(null, c, a.guard(function() {}, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, function() {});
            this.$2 = {};

            function f(c) {
                var d = this.$4[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$4[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d)
            }
            for (var h in this.$4)(g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [h], {
                name: "ServerJS:cleanup id: " + h,
                project: "ServerJSCleanup"
            })
        };
        c.$6 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$1], {
                name: "JS::define"
            })
        };
        c.$11 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
                name: c != null ? "JS::call" : "JS::requireModule"
            })
        };
        c.$12 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                m = a.hash,
                n;
            typeof c === "object" ? a = c : (a = d, n = c);
            d = [f].concat(a || []);
            var o;
            n != null ? o = "__call__" + f + "." + n : o = "__requireModule__" + f;
            o += "__" + k++;
            this.$4[o] = [f, n, m];
            var p = this.$3 && this.$3.bigPipeContext,
                q = (g || (g = b("ErrorGuard"))).guard(function(a) {
                    a = b.call(null, f);
                    delete this.$4[o];
                    e && b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: p
                    }, e);
                    if (n != null) {
                        if (!a[n]) throw l(b("err")('Module %s has no method "%s"', f, n), m);
                        a[n].apply(a, e || []);
                        q.__SMmeta = a[n].__SMmeta || {};
                        q.__SMmeta.module = q.__SMmeta.module || f;
                        q.__SMmeta.name = q.__SMmeta.name || n
                    }
                }.bind(this), {
                    name: n != null ? "JS::call('" + f + "', '" + n + "', ...)" : "JS::requireModule('" + f + "')"
                });
            c = define(o, d, q, h | j | i, this, 1, this.$3);
            return c
        };
        c.$10 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
                name: "JS::instance"
            })
        };
        c.$13 = function(a, c, d, e) {
            var f = null;
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var g = a.name;
            a = a.hash;
            if (c) {
                var h = this.$3 && this.$3.bigPipeContext;
                f = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: this.$1,
                        bigPipeContext: h
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }.bind(this)
            }
            define(g, c, f, i | j, null, e)
        };
        c.$7 = function(a, c, d) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
                name: "JS::markup"
            })
        };
        c.$14 = function(a, c, d) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var e = a.name;
            a = a.hash;
            define(e, ["HTML"], function(b) {
                try {
                    return b.replaceJSONWrapper(c).getRootNode()
                } catch (b) {
                    throw l(b, a)
                }
            }, j, null, d)
        };
        c.$8 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
                name: "JS::element"
            })
        };
        c.$15 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                g = a.hash;
            if (c === null && d != null) {
                define(f, null, null, j, null, d);
                return
            }
            a = [];
            var i = j;
            d = d || 0;
            e != null && (a.push(e), i |= h, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw l(b("err")('Could not find element "%s"%s', c, d), g)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
                name: "ContextualComponents"
            })
        };
        c.$16 = function(a) {
            var c = this,
                d = this.$3 && this.$3.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$1,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, n(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function l(a, b) {
        a.serverHash = b;
        return a
    }

    function m(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function n(a) {
        var b = 0;
        a = a;
        while (a) a = a.parentElement, b++;
        return b
    }

    function o(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[2] = (a[2] || 0) + 1);
        c[d] = !0
    }

    function p(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[3] = (a[3] || 0) + 1);
        c[d] = !0
    }
    e.exports = a
}), null);
__d("HasteResponse", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "HasteSupportData", "ServerJS", "TimeSlice", "fb-error", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").getSimpleHash,
        i = new Set(),
        j = {
            handleSRPayload: function(a) {
                var c = a.hsdp;
                a = a.hblp;
                c && b("HasteSupportData").handle(c);
                a && b("Bootloader").handlePayload(a);
                (a == null ? void 0 : a.consistency) != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
            },
            handle: function(a, c) {
                var d = a.jsmods,
                    e = a.allResources;
                a = a.hsrp;
                var f = c.source,
                    k = c.sourceDetail,
                    l = c.onBlocking,
                    m = c.onLog;
                c = c.onAll;
                var n = (g || (g = b("performanceAbsoluteNow")))(),
                    o;
                if (k == null) o = !0;
                else {
                    var p = h(f, k);
                    i.has(p) ? o = !1 : (o = !0, i.add(p))
                }
                a && j.handleSRPayload(a);
                var q = 0,
                    r = 0;
                b("Bootloader").loadResources((p = e) != null ? p : [], {
                    onBlocking: function() {
                        q = (g || (g = b("performanceAbsoluteNow")))(), new(b("ServerJS"))().handle(d || {}), r = g(), l == null ? void 0 : l()
                    },
                    onAll: c,
                    onLog: function(a) {
                        a = {
                            source: f,
                            sourceDetail: k,
                            isFirstIdentical: o,
                            timesliceContext: b("TimeSlice").getContext(),
                            startTime: n,
                            logTime: (g || (g = b("performanceAbsoluteNow")))(),
                            jsmodsStart: q,
                            jsmodsEnd: r,
                            rsrcs: a
                        };
                        m == null ? void 0 : m(a);
                        b("BootloaderEvents").notifyHasteResponse(a)
                    }
                }, "HasteResponse:" + f + ":" + ((a = k) != null ? a : "<unknown>"))
            }
        };
    e.exports = j
}), null);
__d("getErrorSafe", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").getErrorSafe;
    e.exports = a
}), null);
__d("promiseDone", ["Env", "ErrorPubSub", "getErrorSafe"], (function(a, b, c, d, e, f) {
    var g, h;

    function a(a, c, d) {
        var e, f = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0,
            i = null;
        f >= 1 && Math.random() < 1 / f && (i = new Error(""));
        var j = function() {
                i = null
            },
            k = arguments.length > 1 ? a.then(c, d) : a;
        k.then(j, function(a) {
            a = b("getErrorSafe")(a);
            a.deferredSource = i;
            a.loggingSource = "PROMISE_DONE";
            (h || (h = b("ErrorPubSub"))).reportError(a);
            j()
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["Bootloader", "CallbackDependencyManager", "Promise", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = null;

    function i() {
        h == null && (h = new(b("CallbackDependencyManager"))());
        return h
    }
    var j = function(a) {
        return a
    };
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.__setRef = function(a) {
            this.$2 = a;
            return this
        };
        c.preload = function() {};
        c.getModuleIfRequired = function() {
            return b("ifRequired").call(null, this.$1, j)
        };
        c.getModuleIfRequireable = function() {
            return b("ifRequireable").call(null, this.$1, j)
        };
        c.load = function() {
            var a = this,
                c = b("ifRequireable")("InteractionTracingMetrics", function(c) {
                    return c.currentInteractionLogger().addRequireDeferred(a.getModuleId(), (g || (g = b("performanceNow")))())
                });
            return new(b("Promise"))(function(d) {
                b("requireWeak").call(null, a.getModuleIdAsRef(), function(a) {
                    if (c) {
                        var e = !1;
                        c((g || (g = b("performanceNow")))(), e)
                    }
                    d(a)
                })
            })
        };
        c.loadImmediately = function(a) {
            var c, d = !1,
                e = !1;

            function f(b) {
                if (d || e) return;
                d = !0;
                a(b)
            }
            var g = b("Bootloader").loadModules.call(b("Bootloader"), [this.getModuleIdAsRef()], f, (c = this.$2) != null ? c : "RequireDeferredReference.loadImmediately()");
            b("requireWeak").call(null, this.getModuleIdAsRef(), function(a) {
                f(a)
            });
            return {
                remove: function() {
                    e || (e = !0, g.remove())
                }
            }
        };
        c.onReadyImmediately = function(a) {
            var c = this,
                d = !1,
                e = (g || (g = b("performanceNow")))(),
                f = b("ifRequireable")("InteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), e)
                }),
                h = this.getModuleIfRequireable();
            if (h != null) {
                if (f) {
                    var i = !0;
                    f(e, i)
                }
                a(h)
            } else {
                var j = !1;
                this.loadImmediately(function() {
                    f && f((g || (g = b("performanceNow")))(), j), d || a.apply(void 0, arguments)
                })
            }
            return {
                remove: function() {
                    d = !0
                }
            }
        };
        c.onReady = function(a) {
            var c = this,
                d = !1,
                e = this.getModuleIfRequireable(),
                f = e != null ? b("Promise").resolve(e) : this.load();
            if (e != null) {
                var h = (g || (g = b("performanceNow")))();
                e = b("ifRequireable")("InteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(c.getModuleId(), h)
                });
                if (e) {
                    var i = !0;
                    e(h, i)
                }
            }
            b("promiseDone")(f, function() {
                d || a.apply(void 0, arguments)
            });
            return {
                remove: function() {
                    d = !0
                }
            }
        };
        a.onReady_DO_NOT_USE = function(a, b) {
            i().registerCallback(b, a)
        };
        a.unblock = function(a) {
            a.forEach(function(a) {
                return i().satisfyPersistentDependency(a)
            }), b("Bootloader").markComponentsAsImmediate(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("ErrorGuardState", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").ErrorGuardState;
    e.exports = a
}), null);
__d("ErrorNormalizeUtils", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").ErrorNormalizeUtils;
    e.exports = a
}), null);
__d("ErrorSerializer", ["fb-error"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("fb-error").ErrorSerializer;
    e.exports = a
}), null);
__d("ErrorUtils", ["ErrorGuard", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "getErrorSafe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i;
    g || b("ErrorGuardState");
    b("ErrorNormalizeUtils");
    h || (h = b("ErrorPubSub"));
    b("getErrorSafe");
    i || (i = b("ErrorGuard"));
    b("ErrorSerializer");
    a.getErrorSafe = b("getErrorSafe");
    a.ErrorGuard = i;
    a.ErrorSerializer = b("ErrorSerializer");
    c = {
        history: h.history,
        applyWithGuard: function(a, c, d, e, f, g) {
            return (i || (i = b("ErrorGuard"))).applyWithGuard(a, c, (a = d) != null ? a : [], {
                name: f,
                onNormalizedError: e,
                deferredSource: g == null ? void 0 : g.deferredSource
            })
        },
        guard: function(a, c, d) {
            a = (i || (i = b("ErrorGuard"))).guard(a, c != null ? {
                name: c
            } : null);
            d != null && (a = a.bind(d));
            return a
        },
        normalizeError: function(a) {
            var c;
            return (c = b("ErrorNormalizeUtils").ifNormalizedError(a)) != null ? c : b("ErrorNormalizeUtils").normalizeError(b("getErrorSafe")(a))
        }
    };
    a.ErrorUtils = c;
    d = c;
    e.exports = d;
    typeof __t === "function" && __t.setHandler && __t.setHandler((h || (h = b("ErrorPubSub"))).reportError)
}), 3);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    exports.get = get;
    exports.init = init;
    exports.parse = parse;
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }

    function get(key) {
        if (!factories[key]) throw new Error("JSCC entry is missing");
        return factories[key]()
    }

    function init(constructors) {
        for (var key in constructors) factories[key] = createFactory(constructors[key]);
        return function clearJSCC() {
            for (var _key in constructors) delete factories[_key]
        }
    }

    function parse(jsccMapString) {
        return eval(jsccMapString)
    }
}), null);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    e.exports = a
}), null);
__d("PageletEventConstsJS", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ARRIVE_END: "arrive",
        ARRIVE_START: "prearrive",
        CSS_END: "css_load",
        CSS_START: "css",
        DISPLAY_END: "display",
        DISPLAY_START: "display_start",
        IMAGES_DISPLAYED: "images_displayed",
        JS_END: "jsdone",
        JS_START: "jsstart",
        ONLOAD_END: "onload",
        ONLOAD_START: "preonload",
        PAGELET_EVENT: "pagelet_events",
        PHASE_BEGIN: "phase_begin",
        SETUP: "setup"
    });
    e.exports = a
}), null);
__d("PageletSet", ["Arbiter"], (function(a, b, c, d, e, f) {
    f.hasPagelet = h;
    f.getPagelet = i;
    f.getOrCreatePagelet = a;
    f.getPageletIDs = j;
    f.removePagelet = k;
    var g = {};

    function h(a) {
        return Object.prototype.hasOwnProperty.call(g, a)
    }

    function i(a) {
        return g[a]
    }

    function a(a) {
        if (!h(a)) {
            var b = new m(a);
            g[a] = b
        }
        return i(a)
    }

    function j() {
        return Object.keys(g)
    }

    function k(a) {
        if (h(a)) {
            var b = i(a);
            delete g[a];
            b.destroy()
        }
    }

    function l(a, b) {
        return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    var m = function() {
        function a(a) {
            this.id = a, this.$1 = null, this.$2 = [], this.addDestructor(function() {
                b("Arbiter").inform("pagelet/destroy", {
                    id: this.id,
                    root: this.$1
                })
            }.bind(this))
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.$1
        };
        c.setRoot = function(a) {
            this.$1 = a
        };
        c.$3 = function() {
            var a = [],
                b = this.$1;
            if (!b) return a;
            var c = j();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e === this.id) continue;
                e = g[e];
                var f = e.getRoot();
                f && l(b, f) && a.push(e)
            }
            return a
        };
        c.addDestructor = function(a) {
            this.$2.push(a)
        };
        c.destroy = function() {
            var a = this.$3();
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                h(c.id) && k(c.id)
            }
            for (var c = 0; c < this.$2.length; c++) {
                a = this.$2[c]();
                a && a()
            }
        };
        return a
    }()
}), null);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var c = a;
        a = function() {
            for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return c.apply(this, b)
        };
        a.cancel = function() {
            c = b("emptyFunction")
        };
        return a
    }
}), null);
__d("isTruthy", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        return a != null && Boolean(a)
    }
}), null);
__d("RunBlue", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "isTruthy", "performanceAbsoluteNow", "recoverableViolation"], (function(a, b, c, d, e, f) {
    "use strict";
    f.onLoad = c;
    f.onAfterLoad = d;
    f.onBeforeUnload = e;
    f.onUnload = l;
    f.onAfterUnload = m;
    f.onLeave = n;
    f.onCleanupOrLeave = o;
    f.__removeHook = q;
    var g, h = "onunloadhooks",
        i = "onafterunloadhooks";

    function j(c, d) {
        var e = a.CavalryLogger && a.CavalryLogger.getInstance();
        if (!e) return;
        b("isTruthy")(d) ? e.setAbsTimeStamp && e.setAbsTimeStamp(c, d) : e.setTimeStamp(c)
    }

    function c(c) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(c, "domreadyhooks:late");
            return {
                remove: b("emptyFunction")
            }
        } else return p("domreadyhooks", c)
    }

    function d(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = a.setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return a.clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function e(a, b) {
        b = b === void 0 ? !window.loading_page_chrome : b;
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, c) {
        window.onunload || (window.onunload = b("TimeSlice").guard(function() {
            b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, c)
    }

    function l(a) {
        return k(h, a)
    }

    function m(a) {
        return k(i, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, c) {
        var d = b("createCancelableFunction")(c);
        c = function() {
            d(), d.cancel()
        };
        a = b("ContextualComponent").closestToNode(a);
        a && a.onCleanup(c);
        window.onleavehooks = (window.onleavehooks || []).concat(c);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, c) {
        var d;
        d = (d = c) != null ? d : b("emptyFunction");
        c || b("recoverableViolation")("Undefined handler is not allowed", "web_speed");
        var e = b("createCancelableFunction")(d);
        window[a] = (window[a] || []).concat(e);
        return {
            remove: function() {
                e.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = b("TimeSlice").guard(function() {
        b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        var c = document,
            d = window;
        if (c.addEventListener) {
            var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (e && e[1] < 525) var f = a.setInterval(function() {
                /loaded|complete/.test(c.readyState) && (r(), a.clearInterval(f))
            }, 10);
            else c.addEventListener("DOMContentLoaded", r, !0)
        } else {
            e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
            c.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + e + '"></');
            c.write("script>")
        }
        var g = d.onload;
        d.onload = b("TimeSlice").guard(function() {
            j("t_layout"), g && g(), b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        d.onbeforeunload = b("TimeSlice").guard(function(a) {
            var c = {};
            b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, c, "state");
            c.warn || b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (c.warn !== void 0) {
                c = c.warn.body != null ? c.warn.body : c.warn;
                a && (a.returnValue = c);
                return c
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a, c = (g || (g = b("performanceAbsoluteNow")))();
        ((a = window.console) == null ? void 0 : a.timeStamp) && window.console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        j("t_onload", c);
        b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, {
            ts: c
        }, "state")
    }
    c = b("Arbiter").registerCallback(function() {
        b("BigPipeInstance").getCurrentInstance() ? b("Arbiter").subscribeOnce(b("BigPipeInstance").Events.displayed, t) : t()
    }, [b("PageEvents").NATIVE_ONLOAD]);
    f.__onloadCallback = c;
    d = b("Arbiter").registerCallback(function() {
        j("t_domcontent");
        var a = {
            timeTriggered: Date.now()
        };
        b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, "state")
    }, [b("PageEvents").NATIVE_DOMREADY]);
    f.__domContentCallback = d;
    b("ExecutionEnvironment").canUseDOM && s()
}), null);
__d("UserTimingUtils", ["performance"], (function(a, b, c, d, e, f) {
    "use strict";
    f.measureStart = c;
    f.measureEnd = d;
    f.hasMark = e;
    f.clearMarks = j;
    f.measureModern = k;
    f.markModern = l;
    var g, h = typeof(g || (g = b("performance"))).mark === "function" && typeof(g || (g = b("performance"))).clearMarks === "function" && typeof(g || (g = b("performance"))).measure === "function" && typeof(g || (g = b("performance"))).clearMeasures === "function",
        i = !1;
    if (h && a.PerformanceMark != null) {
        c = "__v3";
        d = {};
        Object.defineProperty(d, "startTime", {
            get: function() {
                i = !0
            }
        });
        try {
            (g || (g = b("performance"))).measure(c, {}), new a.PerformanceMark(c, d)
        } catch (a) {} finally {
            (g || (g = b("performance"))).clearMarks(c)
        }
    }

    function c(a) {
        h && (g || (g = b("performance"))).mark(a)
    }

    function d(a, c, d) {
        d === void 0 && (d = !0);
        if (h) {
            try {
                (g || (g = b("performance"))).measure(a, c)
            } catch (a) {}
            d && (g || (g = b("performance"))).clearMarks(c);
            (g || (g = b("performance"))).clearMeasures(a)
        }
    }

    function e(a) {
        if (h) {
            try {
                a = (g || (g = b("performance"))).getEntriesByName(a, "mark");
                if (a != null && a.length > 0) return !0
            } catch (a) {}
            return !1
        }
    }

    function j(a) {
        if (h) try {
            (g || (g = b("performance"))).clearMarks(a)
        } catch (a) {}
    }

    function k(a, c) {
        i && ((g || (g = b("performance"))).measure(a, c), g.clearMeasures(a))
    }

    function l(a, c) {
        i && ((g || (g = b("performance"))).mark(a, c), g.clearMarks(a))
    }
}), null);
__d("captureUsageSnapshot", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a() {
        var a = window.__bodyWrapper;
        if (!a.getCodeUsage) return {
            js_calls: {},
            document_html: "",
            stylesheets: {}
        };
        a = babelHelpers["extends"]({}, a.getCodeUsage());
        var b = String(window.document.body.outerHTML),
            c = {};
        Array.from(document.styleSheets).forEach(function(a) {
            a.href && (c[a.href] = !0)
        });
        return {
            js_calls: a,
            document_html: b,
            stylesheets: c
        }
    }
}), null);
__d("fastDeepCopy", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        return typeof a === "object" && a !== null ? g(a) : a
    }

    function g(a) {
        var b = typeof a.constructor === "function" ? a.constructor() : {};
        if (Array.isArray(a))
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                b[c] = typeof d === "object" && d !== null ? g(d) : d
            } else
                for (var e in a) {
                    d = a[e];
                    b[e] = typeof d === "object" && d !== null ? g(d) : d
                }
        return b
    }
}), null);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = {};

    function h(a, b) {
        g[a] = b
    }

    function i(a) {
        return g[a]
    }

    function a(a) {
        var c = i(a);
        if (c) return c;
        c = new(b("RequireDeferredReference"))(a);
        h(a, c);
        return c
    }
}), null);
__d("BigPipe", ["$", "Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "ErrorUtils", "FBLogger", "HasteResponse", "JSCC", "PageEvents", "PageletEventConstsJS", "PageletSet", "RunBlue", "ServerJS", "TimeSlice", "UserTimingUtils", "captureUsageSnapshot", "clearTimeout", "fastDeepCopy", "ge", "gkx", "performanceAbsoluteNow", "requireDeferred", "setTimeout"], (function(a, b, c, d, e, f) {
    var g, h;
    a.__bigPipeFactory = (g || (g = b("performanceAbsoluteNow")))();
    var i = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        j = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;

    function k(a, c) {
        b("UserTimingUtils").measureStart(a + " " + c)
    }

    function l(a, c, d) {
        b("UserTimingUtils").measureEnd("\u26cf " + a + " [" + c + "][phase " + d + "]", a + " " + c)
    }

    function m(a, c) {
        if (a)
            for (var d = 0; d < a.length; d++)(h || (h = b("ErrorUtils"))).applyWithGuard(new Function(a[d]), c)
    }
    var n = 1;
    c = function() {
        function a(c) {
            var d = this;
            this._onDisplayDone = function(a) {
                d.arbiter.registerCallback(a, ["display_done"])
            };
            Object.assign(this, {
                arbiter: b("Arbiter"),
                rootNodeID: "content",
                lid: null,
                isAjax: !1,
                domContentCallback: b("RunBlue").__domContentCallback,
                onloadCallback: b("RunBlue").__onloadCallback,
                domContentEvt: b("PageEvents").BIGPIPE_DOMREADY,
                onloadEvt: b("PageEvents").BIGPIPE_ONLOAD,
                forceFinish: !1,
                config: {},
                _currentPhase: 0,
                _lastPhaseOfLastResponse: -1,
                _lastPhaseBeforeLastResponse: -1,
                _livePagelets: {},
                _phases: {},
                _orderedPhases: [],
                _maxPhase: 0,
                _displayDoneFired: !1,
                _displayDone: !1,
                _awaitingLIDEventQueue: []
            }, c);
            this.config || (this.config = {});
            this.automatic ? this._relevant_instance = b("BigPipeInstance").getCurrentInstance() : b("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this);
            this._serverJS = new(b("ServerJS"))();
            this._informEventExternal(a.Events.init, {
                arbiter: this.arbiter
            }, b("Arbiter"));
            this._displayDoneCallback = this.arbiter.registerCallback(function() {
                var c = b("captureUsageSnapshot")();
                d._informEventExternal(a.Events.displayed, {
                    rid: d.rid,
                    ajax: d.isAjax,
                    usageSnapshot: c
                })
            }, ["display_done"]);
            c = ["pagelet_displayed_all"];
            this.config.extra_dom_content_event != null && c.push(this.config.extra_dom_content_event);
            this.arbiter.registerCallback(this.domContentCallback, c);
            this._beginPhase(0);
            this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]);
            this._loadedCallback = this.arbiter.registerCallback(function() {
                d._informEventExternal(a.Events.loaded, {
                    rid: d.rid,
                    ajax: d.isAjax
                }), d.arbiter.inform("bigpipe_e2e_reported", !0)
            }, ["pagelet_displayed_all"]);
            this.arbiter.registerCallback(function() {
                return d._serverJS.cleanup(b("TimeSlice"))
            }, [this.onloadEvt, "bigpipe_e2e_reported"])
        }
        var c = a.prototype;
        c._beginPhase = function(a) {
            var b = this._getOrCreatePhase(a);
            b.begun = !0;
            this._informEventExternal("phase_begin", {
                phase: a
            });
            this.arbiter.inform("phase_begin_" + a, !0, "state")
        };
        c._getOrCreatePhase = function(a) {
            if (this._phases[a]) return this._phases[a];
            var b = {
                pagelets: [],
                begun: !1,
                complete: !1
            };
            this._phases[a] = b;
            var c = 0;
            while (c < this._orderedPhases.length) {
                if (a < this._orderedPhases[c]) break;
                c++
            }
            this._orderedPhases.splice(c, 0, a);
            return b
        };
        c._tryRenderingNextPhase = function() {
            var a = this._phases[this._currentPhase];
            if (a && a.begun && !a.complete) return;
            for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                var e = this._phases[d];
                if (e.begun)
                    if (e.complete) continue;
                    else return;
                else {
                    this._currentPhase = d;
                    this._beginPhase(d);
                    return
                }
            }
        };
        c._displayPageletHandler = function(a) {
            this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a)
        };
        c._displayPagelet = function(a) {
            k(a.id, "display");
            a.displayStarted = !0;
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_START, a);
            var c = this._getPagelet(a),
                d = [],
                e = {};
            for (var f in a.content) {
                var h = a.content[f];
                a.append && (f = this._getPageletRootID(a));
                var i = b("ge")(f);
                if (!i || f == null) {
                    var j = "Root element %s is missing for pagelet %s";
                    continue
                }
                f === c.id && c.setRoot(i);
                if (h) {
                    if (a.append) q(i, h, d);
                    else if (h.nodeType) i.innerHTML = "", q(i, h, d);
                    else {
                        j = o(h);
                        i.innerHTML = j;
                        e[f] = j;
                        d.push(i)
                    }
                    b("BigPipeExperiments").enable_bigpipe_plugins && b("BigPipePlugins").runPluginOnPagelet(i)
                }
                h = i.getAttribute("data-referrer");
                h || i.setAttribute("data-referrer", f)
            }
            j = null;
            if (a.static_templates) {
                h = b("ge")("static_templates");
                h && (j = o(a.static_templates), a.replace_static_templates_if_exists && (j = r(h, j, d)), q(h, j, d))
            }
            this._informPageletDisplayDetails(a.id, a.jsmods, e, j);
            a.displayed = !0;
            if (a.jsmods) {
                i = this._serverJS.handlePartial(a.jsmods, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone
                    }
                });
                c.addDestructor(i.cancel.bind(i))
            }
            var m = [];
            d.forEach(function(a) {
                if (typeof a.getElementsByTagName === "function") {
                    a = a.getElementsByTagName("img");
                    for (var b = 0; b < a.length; b++) m.push(a[b].src)
                }
            });
            m.length > 0 && this._informEventExternal("images_displayed", {
                pagelet: a.id,
                timeslice: b("TimeSlice").getContext() ? b("TimeSlice").getContext().contextID : null,
                images: m
            });
            if (b("gkx")("676920")) {
                var n = (g || (g = b("performanceAbsoluteNow")))();
                b("requireDeferred")("VisualCompletionGating").onReady(function(b) {
                    b && b.addElements(a.id, d, n)
                })
            }
            this._informPageletEvent(b("PageletEventConstsJS").DISPLAY_END, a);
            l(a.id, "display", a.phase);
            this.arbiter.inform(a.id + "_displayed", !0, "state")
        };
        c._onPhaseDisplayEnd = function(c) {
            var d = this._getOrCreatePhase(c);
            d.complete = !0;
            if (c === this._ttiPhase) {
                d = {};
                var e = b("captureUsageSnapshot")();
                this._informEventExternal(a.Events.tti, {
                    phase: this._ttiPhase,
                    rid: this.rid,
                    ajax: this.isAjax,
                    metrics: d,
                    usageSnapshot: e
                });
                this.arbiter.inform("tti_pagelet_displayed", !0, "state")
            }
            this._isRelevant() && (c === this._lastPhaseBeforeLastResponse && this._fireDisplayDone(function() {}), c === this._lastPhaseOfLastResponse && (this._displayDoneFired || this._fireDisplayDone(function() {}), this.arbiter.inform("pagelet_displayed_all", !0, "state")));
            c !== this._lastPhaseOfLastResponse && this._nextPhase()
        };
        c._nextPhase = function() {
            this.config.flush_pagelets_asap ? i <= 8 ? b("setTimeout")(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, i <= 8 ? b("setTimeout")(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase))
        };
        c._fireDisplayDone = function(a) {
            this._displayDoneFired = !0, this.arbiter.inform("display_done", !0), this._displayDone = !0, a(), this.lid != null && l("display_done", this.lid, "all")
        };
        c._downloadJsForPagelet = function(a) {
            this._informPageletEvent(b("PageletEventConstsJS").JS_START, a), b("Bootloader").loadResources(a.allResources || [], {
                onAll: function() {
                    var c = this;
                    this._informPageletEvent(b("PageletEventConstsJS").JS_END, a);
                    a.requires = a.requires || [];
                    (!this.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
                    var d = function() {
                            c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_START, a), c._isRelevantPagelet(a) && m(a.onload), c._informPageletEvent(b("PageletEventConstsJS").ONLOAD_END, a), c.arbiter.inform("pagelet_onload", !0), a.provides && c.arbiter.inform(a.provides, !0, "state")
                        },
                        e = function() {
                            c._isRelevantPagelet(a) && m(a.onafterload)
                        };
                    this.arbiter.registerCallback(d, a.requires);
                    this.arbiter.registerCallback(e, [this.onloadEvt])
                }.bind(this)
            }, a.id)
        };
        c._getPagelet = function(a) {
            a = this._getPageletRootID(a);
            return b("PageletSet").getPagelet(a)
        };
        c._getPageletRootID = function(a) {
            return a.append || Object.keys(a.content)[0] || null
        };
        c._isRelevant = function() {
            var a = b("BigPipeInstance").getCurrentInstance();
            return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests
        };
        c._isRelevantPagelet = function(a) {
            if (!this._isRelevant()) return !1;
            a = this._getPageletRootID(a);
            return !!this._livePagelets[a]
        };
        c._informEventExternal = function(a, c, d) {
            c = c || {}, d = d || this.arbiter, c.ts || (c.ts = (g || (g = b("performanceAbsoluteNow")))()), j && (console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(c, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, c, {
                arbiter: null
            })) : JSON.stringify(c)))), this.lid === null ? this._awaitingLIDEventQueue.push([d, a, c]) : (c.lid = this.lid, d.inform(a, c, "persistent"))
        };
        c._informPageletEvent = function(a, b, c) {
            a = {
                event: a,
                id: b.id,
                ts: c
            };
            b.phase && (a.phase = b.phase);
            b.categories && (a.categories = b.categories);
            b.allResources && (a.allResources = b.allResources);
            b.displayResources && (a.displayResources = b.displayResources);
            this._informEventExternal("pagelet_event", a)
        };
        c._informPageletDisplayDetails = function(a, c, d, e) {
            if (this.config.dispatch_pagelet_replayable_actions) try {
                this._informEventExternal("pagelet_performing_replayable_actions", {
                    id: a,
                    jsmods: b("fastDeepCopy")(c),
                    contentMap: d,
                    staticTemplates: e
                })
            } catch (a) {
                b("FBLogger")("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {})
            }
        };
        a.getCurrentInstance = function() {
            return b("BigPipeInstance").getCurrentInstance()
        };
        return a
    }();
    Object.assign(c.prototype, {
        beforePageletArrive: function(a, c) {
            var d = this;
            b("TimeSlice").guard(function() {
                return d._informPageletEvent(b("PageletEventConstsJS").ARRIVE_START, {
                    id: a
                }, c)
            }, "beforePageletArrive " + a, {
                root: !0
            })()
        },
        setPageID: function(a) {
            this.lid = a, this._awaitingLIDEventQueue.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                b.lid = a;
                c.inform(d, b, "persistent")
            }), this._awaitingLIDEventQueue = [], this.lid && k("display_done", this.lid)
        },
        onPageletArrive: (h || (h = b("ErrorUtils"))).guard(function(a) {
            var c, d = this;
            this._informPageletEvent(b("PageletEventConstsJS").ARRIVE_END, a);
            b("HasteResponse").handleSRPayload((c = a.hsrp) != null ? c : {});
            a.content = a.content || {};
            var e = a.phase;
            if (a.all_phases)
                for (var c = a.all_phases, f = Array.isArray(c), g = 0, c = f ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= c.length) break;
                        h = c[g++]
                    } else {
                        g = c.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    this._getOrCreatePhase(h)
                }
            h = this._getOrCreatePhase(e);
            h.pagelets.push(a.id);
            this._maxPhase = Math.max(e, this._maxPhase);
            a.last_in_phase && this.arbiter.registerCallback(function() {
                return d._onPhaseDisplayEnd(e)
            }, h.pagelets.map(function(a) {
                return a + "_displayed"
            }).concat(["phase_begin_" + e]));
            g = this._getPageletRootID(a);
            var i = b("PageletSet").getOrCreatePagelet(g);
            a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
            a.the_end && (this._lastPhaseOfLastResponse = e);
            a.tti_phase !== void 0 && (this._ttiPhase = a.tti_phase);
            this._livePagelets[i.id] = !0;
            i.addDestructor(function() {
                delete d._livePagelets[i.id]
            });
            if (a.jscc_map != null && a.jscc_map !== "") {
                f = b("JSCC").parse(a.jscc_map);
                c = b("JSCC").init(f);
                i.addDestructor(c)
            }
            var j, k = [];
            if (a.jsmods) {
                h = a.jsmods.define;
                g = a.jsmods.instances;
                f = a.jsmods.markup;
                c = a.jsmods.pre_display_requires;
                delete a.jsmods.define;
                delete a.jsmods.instances;
                delete a.jsmods.markup;
                delete a.jsmods.pre_display_requires;
                var l = 19e3;
                l = function() {
                    if (a.displayStarted === !0) {
                        b("FBLogger")("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
                        return function() {}
                    }
                    var c, e, f = n + "_preDisplayEvent";
                    n++;
                    j ? d.arbiter.registerCallback(j, [f]) : k.push(f);
                    return b("TimeSlice").guard(function() {
                        e = !0, b("clearTimeout")(c), d.arbiter.inform(f, !0, "state")
                    }, "BigPipeDisplayBlockingEvent " + f, {
                        propagationType: b("TimeSlice").PropagationType.EXECUTION
                    })
                };
                this._informPageletDisplayDetails(a.id, {
                    define: h,
                    instances: g,
                    markup: f,
                    pre_display_requires: c
                }, {});
                this._serverJS.handlePartial({
                    define: h,
                    instances: g,
                    markup: f,
                    pre_display_requires: c
                }, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone,
                        registerToBlockDisplayUntilDone_DONOTUSE: l
                    }
                })
            }
            this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
            this._informPageletEvent(b("PageletEventConstsJS").SETUP, a);
            if (a.display_out_of_phase === "asap") k = k.concat(["first_response_displayed", a.id + "_css_end"]);
            else if (a.display_out_of_phase === "after_tti") {
                var m = a.id + "_greedy_render";
                k = k.concat(["first_response_displayed", a.id + "_css_end", m]);
                var o = !1;
                h = function() {
                    if (o) return;
                    d.arbiter.inform(m, !0, "state")
                };
                this.arbiter.registerCallback(h, ["tti_pagelet_displayed"]);
                this.arbiter.registerCallback(h, ["phase_begin_" + e])
            } else k = k.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
            (a.display_dependency || []).forEach(function(a) {
                return k.push(a + "_displayed")
            });
            if (a.display_group) {
                g = document.body.getElementsByClassName("pagelet-group");
                for (var f = 0; f < g.length; f++) {
                    c = g[f];
                    if (c.id === a.id) break;
                    c.getAttribute("data-display-group") === a.display_group && k.push(c.id + "_displayed")
                }
            }
            j = this.arbiter.registerCallback(function() {
                a.display_delay_ms === void 0 ? d._displayPageletHandler(a) : b("setTimeout")(function() {
                    return d._displayPageletHandler(a)
                }, a.display_delay_ms)
            }, k);
            var p = !1;
            l = function() {
                if (p) return;
                p = !0;
                d._informPageletEvent(b("PageletEventConstsJS").CSS_START, a);
                var c = a.displayResources || [];
                b("Bootloader").loadResources(c, {
                    onAll: function() {
                        this._informPageletEvent(b("PageletEventConstsJS").CSS_END, a), this.arbiter.inform(a.id + "_css_end", !0, "state")
                    }.bind(d)
                }, a.id)
            };
            this.config.flush_pagelets_asap ? l() : this.arbiter.registerCallback(l, ["phase_begin_" + e]);
            h = [a.id + "_displayed"];
            this.jsNonBlock || h.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), h)
        }, "BigPipe#onPageletArrive")
    });
    c.Events = b("BigPipeInstance").Events;

    function o(a) {
        if (!a || typeof a === "string") return a;
        if (a.container_id) {
            var c = b("$")(a.container_id);
            a = p(c) || "";
            c.parentNode.removeChild(c);
            return a
        }
        a.nodeType;
        return null
    }

    function p(a) {
        if (!a.firstChild) return null;
        if (a.firstChild.nodeType !== 8) return null;
        a = a.firstChild.nodeValue;
        a = a.substring(1, a.length - 1);
        return a.replace(/\\([\s\S]|$)/g, "$1")
    }

    function q(a, b, c) {
        b = s(b);
        for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
        a.appendChild(b)
    }

    function r(a, b, c) {
        b = s(b);
        var d = document.createDocumentFragment(),
            e = b.childNodes.length;
        for (var f = 0; f < e; f++) {
            var g = b.firstChild,
                h = g.id && document.getElementById(g.id),
                i = h && h.parentNode;
            i === a ? (i.replaceChild(g, h), c.push(g)) : d.appendChild(g)
        }
        return d
    }

    function s(a) {
        if (a.nodeType) return a;
        var b = document.createDocumentFragment();
        a = o(a);
        if (a) {
            var c = document.createElement("div");
            c.innerHTML = a;
            while (c.firstChild) b.appendChild(c.firstChild)
        }
        return b
    }
    d = c;
    e.exports = d
}), null);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("AdsInterfacesSessionConfig").sessionID;
    f.sessionID = a
}), null);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("EventConfig").sampling || {},
        h = {
            canSample: function(a) {
                return !!g[a]
            },
            getEventSampleWeights: function(a) {
                a.__samplingWeights == void 0 && (a.__samplingWeights = {
                    event: i(h.getEventWeight(a))
                });
                return a.__samplingWeights
            },
            getEventWeight: function(a) {
                a = a.type in g ? g[a.type] : 1;
                return a * g.__eventDefault
            },
            getEventInteractionIDs: function(a, b) {
                return []
            }
        };

    function i(a) {
        if (a === 0) return 0;
        var b = g.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = h
}), null);
__d("SubscriptionList", ["recoverableViolation"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var c = a.prototype;
        c.add = function(a) {
            var c = this,
                d = {
                    callback: a
                };
            this.$1.push(d);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = c.$1.indexOf(d);
                    if (a === -1) {
                        b("recoverableViolation")("SubscriptionList: Callback already removed.", "SubscriptionList");
                        return
                    }
                    c.$1.splice(a, 1);
                    c.$3 && c.$1.length === 0 && c.$3()
                }
            }
        };
        c.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        c.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = window != window.top;

    function a() {
        return g
    }
}), null);
__d("ScriptPath", ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = "sp_pi",
        j = 1e3 * 30,
        k = null,
        l = null,
        m = new(b("SubscriptionList"))(),
        n = null,
        o = [],
        p = b("TimeSlice").guard(function(a, c) {
            m.getCallbacks().forEach(function(d) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
                    d({
                        source: k,
                        dest: l,
                        cause: a,
                        extraData: c
                    })
                }, null, [])
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function q() {
        return l ? l.scriptPath : void 0
    }

    function r() {
        var a = (h || (h = b("WebStorage"))).getSessionStorage();
        if (!a || b("isInIframe")()) return;
        h.setItemGuarded(a, i, JSON.stringify({
            pageInfo: l,
            clickPoint: n,
            time: Date.now()
        }))
    }

    function a() {
        var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(i);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - j && (a = (h || (h = b("WebStorage"))).getSessionStorage(), a && a.removeItem(i)), l = c.pageInfo, n = c.clickPoint, l && (l.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            k = l, l = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, o = [], window._script_path = a, p()
        },
        openOverlayView: function(a, b, c) {
            if (!a) return;
            var d = o.length;
            (d === 0 || o[d - 1] !== a) && (k = Object.assign({}, l), l && (l.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (o[d - 1] = a, p("replace_overlay_view", b)) : (o.push(a), p("open_overlay_view", b)))
        },
        closeOverlayView: function(a, b) {
            a = o.lastIndexOf(a);
            if (a === -1) return;
            k = Object.assign({}, l);
            l && (a > 0 ? l.topViewEndpoint = o[a - 1] : l.topViewEndpoint = null);
            o = o.slice(0, a);
            p("close_overlay_view", b)
        },
        setClickPointInfo: function(a) {
            n = a, r()
        },
        getClickPointInfo: function() {
            return n
        },
        getScriptPath: q,
        getCategoryToken: function() {
            return l ? l.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = l) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = o.length;
            return a > 0 ? o[a - 1] : q()
        },
        getPageInfo: function() {
            return l
        },
        getSourcePageInfo: function() {
            return k
        },
        subscribe: function(a) {
            return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            r()
        }
    };
    e.exports = c
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = /\./,
        i = /\|\|/,
        j = /\s+\-\s+/,
        k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        l = /^(\d*)(.*)/;

    function m(a, b) {
        a = a.split(i);
        if (a.length > 1) return a.some(function(a) {
            return D.contains(a, b)
        });
        else return n(a[0].trim(), b)
    }

    function n(a, b) {
        a = a.split(j);
        a.length > 0 && a.length <= 2 || g(0, 11800);
        if (a.length === 1) return o(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            x(c) && x(a) || g(0, 11801);
            return o(">=" + c, b) && o("<=" + a, b)
        }
    }

    function o(a, b) {
        a = a.trim();
        if (a === "") return !0;
        b = b.split(h);
        a = v(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return p(b, a);
            case "<=":
                return q(b, a);
            case ">=":
                return s(b, a);
            case ">":
                return t(b, a);
            case "~":
            case "~>":
                return u(b, a);
            default:
                return r(b, a)
        }
    }

    function p(a, b) {
        return C(a, b) === -1
    }

    function q(a, b) {
        a = C(a, b);
        return a === -1 || a === 0
    }

    function r(a, b) {
        return C(a, b) === 0
    }

    function s(a, b) {
        a = C(a, b);
        return a === 1 || a === 0
    }

    function t(a, b) {
        return C(a, b) === 1
    }

    function u(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        w(e) && (b[d] = e + 1 + "");
        return s(a, c) && p(a, b)
    }

    function v(a) {
        a = a.split(h);
        var b = a[0].match(k);
        b || g(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function w(a) {
        return !isNaN(a) && isFinite(a)
    }

    function x(a) {
        return !v(a).modifier
    }

    function y(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function z(a, b) {
        a = a.slice();
        b = b.slice();
        y(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        y(b, a.length);
        return [a, b]
    }

    function A(a, b) {
        var c = a.match(l),
            d = b.match(l);
        c = c && c[1];
        d = d && d[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (w(c) && w(d) && c !== d) return B(c, d);
        else return B(a, b)
    }

    function B(a, b) {
        typeof a === typeof b || g(0, 11802);
        if (typeof a === "string" && typeof b === "string")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        if (typeof a === "number" && typeof b === "number")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        typeof a === typeof b || g(0, 11802);
        return 0
    }

    function C(a, b) {
        a = z(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = A(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var D = {
        contains: function(a, b) {
            return m(a.trim(), b.trim())
        }
    };
    a = D;
    e.exports = a
}), null);
__d("UserAgent", ["UserAgentData", "VersionRange", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, c, d, e) {
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (c != null) {
            d = e ? e(d) : d;
            return b("VersionRange").contains(d, c)
        }
        return !1
    }

    function h(a) {
        return b("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    c = {
        isBrowser: (a = b("memoizeStringOnly"))(function(a) {
            return g(b("UserAgentData").browserName, b("UserAgentData").browserFullVersion, a)
        }),
        isBrowserArchitecture: a(function(a) {
            return g(b("UserAgentData").browserArchitecture, null, a)
        }),
        isDevice: a(function(a) {
            return g(b("UserAgentData").deviceName, null, a)
        }),
        isEngine: a(function(a) {
            return g(b("UserAgentData").engineName, b("UserAgentData").engineVersion, a)
        }),
        isPlatform: a(function(a) {
            return g(b("UserAgentData").platformName, b("UserAgentData").platformFullVersion, a, h)
        }),
        isPlatformArchitecture: a(function(a) {
            return g(b("UserAgentData").platformArchitecture, null, a)
        })
    };
    d = c;
    e.exports = d
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;

    function h(a) {
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(h(a)), a = a.parentElement;
        b.reverse();
        return b
    }
}), null);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    c = b;
    e.exports = c
}), null);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame", "performanceNow"], (function(a, b, c, d, e, f) {
    var g, h = 0;
    c = b("nativeRequestAnimationFrame") || function(c) {
        var d = (g || (g = b("performanceNow")))(),
            e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function() {
            c((g || (g = b("performanceNow")))())
        }, e)
    };
    d = c;
    e.exports = d
}), null);
__d("requestAnimationFrameAcrossTransitions", ["TimeSlice", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        });
        return b("requestAnimationFramePolyfill")(a)
    }
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = "js_",
        h = 36,
        i = 0;

    function a() {
        return g + (i++).toString(h)
    }
}), null);
__d("EventProfilerImpl", ["Bootloader", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerSampler", "ScriptPath", "TimeSlice", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {},
        j = {},
        k = !1,
        l = 0,
        m = new Set(["click", "keydown", "mousewheel", "scroll"]),
        n = null,
        o = null;
    c = {
        __wrapEventListenHandler: function(a) {
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f = {
                        event: 0
                    },
                    s = (g || (g = b("performanceAbsoluteNow")))();
                d.id = d.id || b("uniqueID")();
                var t = d.id,
                    u, v = j[t],
                    w = null;
                i[t] === void 0 && !v ? (w = b("getParentClassesForEventProfiler")(d.target), f = r(d), o != null && o.beforeHandlers(t, c), u = a.call(this, c, d), j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")) : (f = r(d), u = v(function() {
                    j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                }));
                v = g();
                if (i[t] === void 0) {
                    w = w;
                    var x = q(d);
                    x = x || s;
                    var y = Math.max(s - x, 0),
                        z = null;
                    b("UserAgent").isBrowser("Chrome") && (z = !!d.cancelable);
                    var A = z && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    i[t] = {
                        event_name: c,
                        event_start_ms: Math.round(x),
                        main_thread_wait_ms: Math.round(y),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    h[t] = {
                        event_target_raw: w,
                        weight: f.event,
                        cancelable: !!z,
                        deliberate_sync: !!A,
                        ad_account_id: n,
                        event_end_ms: 0
                    };
                    y = b("EventProfilerAdsSessionProvider").sessionID;
                    y && (h[t].ads_session_id = y);
                    var B = !1;
                    m.has(c) && (!k && l < x && (k = !0, B = !0), h[t].is_first_in_frame = B, h[t].is_first_overlapping = B);
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        var a = (g || (g = b("performanceAbsoluteNow")))();
                        i[t].request_animation_frame_wait_ms = Math.round(a - h[t].event_end_ms);
                        delete h[t].event_end_ms;
                        var d = !1;

                        function e() {
                            if (d) return;
                            d = !0;
                            var e = (g || (g = b("performanceAbsoluteNow")))();
                            i[t].set_timeout_wait_ms = Math.round(e - a);
                            p(t, s, e);
                            m.has(c) && B && (k = !1, l = e);
                            e = j[t];
                            e && delete j[t];
                            delete i[t];
                            delete h[t]
                        }
                        b("requestAnimationFrameAcrossTransitions")(e);
                        b("setTimeoutAcrossTransitions")(e, 0)
                    })
                }
                i[t].event_handlers_runtime_ms += v - s;
                h[t].event_end_ms = v;
                o != null && o.afterEachHandler(t, i[t]);
                return u
            }
        },
        setCurrentAdAccountId: function(a) {
            n = a
        },
        setAdsConfig: function(a) {
            o = a
        }
    };

    function p(a, c, d) {
        c = i[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = Object.assign({}, i[a], h[a]);
        o != null && o.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl")
    }
    var q = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function r(a) {
        return o != null ? o.getEventSampleWeights(a) : b("EventProfilerSampler").getEventSampleWeights(a)
    }
    e.exports = c
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        a === void 0 && (a = document);
        if (a === void 0) return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
}), null);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a));
    e.exports = g
}), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        k = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: d,
            colgroup: d,
            tbody: d,
            tfoot: d,
            thead: d,
            td: f,
            th: f
        };
    e = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    e.forEach(function(a) {
        k[a] = j, i[a] = !0
    });

    function a(a) {
        a = a;
        !h && g(0, 144);
        Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(i, a) || (a === "*" ? h.innerHTML = "<link />" : h.innerHTML = "<" + a + "></" + a + ">", i[a] = !h.firstChild);
        return i[a] ? k[a] : null
    }
}), null);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g) {
    e.exports = a;
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = /^\s*<(\w+)/;

    function j(a) {
        a = a.match(i);
        return a && a[1].toLowerCase()
    }

    function a(a, c) {
        var d = h;
        !h && g(0, 5001);
        var e = j(a);
        e = e && b("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (c || g(0, 5002), Array.from(e).forEach(c));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
}), null);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
}), null);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";

        function a(c) {
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("HardwareCSS", [], (function(a, b, c, d, e, f) {
    function g() {
        if (window != null && window.document && document.body) {
            var a = document.body,
                b = a.getAttribute("class") || "";
            window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency >= 4 ? a.setAttribute("class", b + " cores-gte4") : a.setAttribute("class", b + " cores-lt4")
        }
    }
    var h = {
        init: function() {
            g(), h.init = function() {}
        }
    };
    e.exports = h
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        PROFILING_COUNTERS: 0,
        HEARTBEAT: 1,
        FLUX_PERF_TOOL: 2
    };
    f.beforeIDs = a;
    b = {
        PROFILING_COUNTERS: 0,
        HEARTBEAT: 1,
        FLUX_PERF_TOOL: 2
    };
    f.afterIDs = b
}), null);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f) {
    f.write = c;
    f.read = d;
    f.tail = e;
    f.expand = k;
    f.clear = l;
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = 5e3,
        i = {},
        j = {};

    function c(a, c) {
        var d = i[a] = i[a] || new(b("CircularBuffer"))(h);
        d.write(c);
        j[a] && j[a].forEach(function(a) {
            try {
                a(c)
            } catch (a) {}
        })
    }

    function d(a) {
        if (!i[a]) return [];
        else return i[a].read()
    }

    function e(a, b) {
        if (typeof b !== "function") return;
        j[a] = j[a] || [];
        j[a].push(b);
        if (i[a]) {
            a = i[a];
            a.read().forEach(function(a) {
                try {
                    b(a)
                } catch (a) {}
            })
        }
    }

    function k(a, c) {
        var d = i[a];
        d ? d.expand(c) : i[a] = new(b("CircularBuffer"))(c)
    }

    function l(a) {
        i[a] && g(function() {
            i[a].clear()
        }, 0)
    }
}), null);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
        }
        var c = a.prototype;
        c.onNewContextCreatedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onNewContextCreated = function(a, b, c) {
            return this.isEnabled() ? this.onNewContextCreatedWhileEnabled(a, b, c) : null
        };
        c.onBeforeContextStarted = function(a, b, c) {
            return this.isEnabled() ? this.onBeforeContextStartedWhileEnabled(a, b, c) : null
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            return null
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            if (this.isEnabled()) {
                c = c;
                this.onAfterContextEndedWhileEnabled(a, b, c, d)
            }
            this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
        };
        c.onDisable = function() {};
        c.onEnable = function() {};
        c.getBeforeID = function() {
            throw Error("unimplemented abstract method")
        };
        c.getAfterID = function() {
            throw Error("unimplemented abstract method")
        };
        c.isEnabled = function() {
            return this.$4
        };
        c.__getExpiryCallback = function() {
            var a = this,
                b = ++this.$1;
            this.$2[b] = !0;
            this.$3++;
            return function() {
                a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1))
            }
        };
        c.expressInterest = function() {
            var a = this.__getExpiryCallback();
            this.isEnabled() || (this.onEnable(), b("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
            this.$4 = !0;
            this.$5 = !0;
            return a
        };
        return a
    }();
    e.exports = a
}), null);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j;
    c = function(c) {
        babelHelpers.inheritsLoose(d, c);

        function d() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = 33, b.$HeartbeatObserver2 = 60, b.$HeartbeatObserver3 = null, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = {}, b.$HeartbeatObserver6 = null, b.$HeartbeatObserver7 = [], b.$HeartbeatObserver8 = 1, b.$HeartbeatObserver9 = null, a) || babelHelpers.assertThisInitialized(b)
        }
        var e = d.prototype;
        e.onNewContextCreatedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absBeginTimeMs;
            c = a.absEndTimeMs;
            d = a.name;
            a = a.isRoot;
            a && b != null && c != null && (this.$HeartbeatObserver5[d] ? (this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: c
            }, !1)) : (this.$HeartbeatObserver10({
                type: "exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "exec",
                timeMs: c
            }, !1)))
        };
        e.__getExpiryCallback = function() {
            var a = this,
                d = c.prototype.__getExpiryCallback.call(this),
                e = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver7.push([e, d]);
            return function() {
                d(), a.$HeartbeatObserver11()
            }
        };
        e.onEnable = function() {
            var c = (h || (h = b("Env"))).timeslice_heartbeat_config || {};
            this.$HeartbeatObserver1 = c.pollIntervalMs || this.$HeartbeatObserver1;
            this.$HeartbeatObserver2 = c.idleGapThresholdMs || this.$HeartbeatObserver2;
            this.$HeartbeatObserver5 = c.ignoredTimesliceNames || this.$HeartbeatObserver5;
            c = a.__fbNativeSetInterval || a.setInterval;
            this.$HeartbeatObserver4 = c(this.$HeartbeatObserver12.bind(this), this.$HeartbeatObserver1);
            c = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver3 = {
                type: "beat",
                timeMs: c
            };
            this.$HeartbeatObserver6 = c + this.$HeartbeatObserver1;
            this.$HeartbeatObserver9 = c
        };
        e.onDisable = function() {
            this.$HeartbeatObserver4 && clearInterval(this.$HeartbeatObserver4), this.$HeartbeatObserver4 = null
        };
        e.getBeforeID = function() {
            return (i || (i = b("ExecutionContextObservers"))).beforeIDs.HEARTBEAT
        };
        e.getAfterID = function() {
            return (i || (i = b("ExecutionContextObservers"))).afterIDs.HEARTBEAT
        };
        e.$HeartbeatObserver13 = function(a) {
            return a.type == "beat" || a.type == "ignored_exec"
        };
        e.$HeartbeatObserver10 = function(a, c) {
            if (this.$HeartbeatObserver3 == null) {
                b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
                this.$HeartbeatObserver3 = a;
                return
            }
            var d = this.$HeartbeatObserver3.timeMs,
                e = a.timeMs;
            if (c) {
                c = this.$HeartbeatObserver6 + this.$HeartbeatObserver2;
                c = e > c;
                if (this.$HeartbeatObserver3.type === "exec") a.type === "exec" ? this.$HeartbeatObserver14(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver13(a) && this.$HeartbeatObserver14(d, e, c ? "likely_post_exec" : "post_exec");
                else if (this.$HeartbeatObserver13(this.$HeartbeatObserver3))
                    if (a.type === "exec") this.$HeartbeatObserver14(d, e, c ? "likely_pre_exec" : "pre_exec");
                    else if (this.$HeartbeatObserver13(a) && c) {
                    c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                    this.$HeartbeatObserver14(d, e, c)
                }
            }
            this.$HeartbeatObserver3 = a
        };
        e.$HeartbeatObserver14 = function(a, c, d) {
            a < c && (j || (j = b("LogBuffer"))).write("time_slice_heartbeat", {
                begin: a,
                end: c,
                id: this.$HeartbeatObserver8++,
                parentID: null,
                guard: "browser time: " + d,
                representsExecution: !1
            })
        };
        e.$HeartbeatObserver12 = function() {
            var a = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver11(a);
            this.$HeartbeatObserver10({
                type: "beat",
                timeMs: a
            }, !0);
            this.$HeartbeatObserver6 = a + this.$HeartbeatObserver1
        };
        e.$HeartbeatObserver11 = function(a) {
            a = a || (g || (g = b("performanceAbsoluteNow")))();
            while (this.$HeartbeatObserver7.length > 0) {
                var c = this.$HeartbeatObserver7[0],
                    d = c[0];
                c = c[1];
                if (a - d > l.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver7.shift();
                else break
            }
            d = this.$HeartbeatObserver9;
            a - d > l.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver15()
        };
        e.$HeartbeatObserver15 = function() {
            for (var a = this.$HeartbeatObserver7, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                d[0];
                d = d[1];
                d()
            }
            this.$HeartbeatObserver7 = []
        };
        return d
    }(b("OnDemandExecutionContextObserver"));
    var k = new c();
    b("TimeSlice").registerExecutionContextObserver(k);
    var l = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return k
        }
    };
    e.exports = l
}), 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "PageEvents"], (function(a, b, c, d, e, f) {
    f.loadOnDOMContentReady = a;
    var g = "BOOTLOAD/JSREADY";
    f.INITIAL_JS_READY = g;

    function a(a, c) {
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_DOMREADY, function() {
            function d() {
                b("Bootloader").loadResources(a, {
                    onAll: function() {
                        b("Arbiter").inform(g, !0, "state")
                    }
                })
            }
            c != null && c > 0 ? setTimeout(d, c) : d()
        })
    }
}), null);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || g(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
}), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = {};

    function a(a, b, c) {
        var d = b in g ? g[b](a, c) : a;
        return function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return d.apply(this, b)
        }
    }
    a.setWrapper = function(a, b) {
        g[b] = a
    }
}), null);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var b;
        b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
        b = (b = b.defaultView) != null ? b : window;
        return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
}), null);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        return b("isNode")(a) && a.nodeType == 3
    }
}), null);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f) {
    e.exports = g;

    function g(a, c) {
        if (!a || !c) return !1;
        else if (a === c) return !0;
        else if (b("isTextNode")(a)) return !1;
        else if (b("isTextNode")(c)) return g(a, c.parentNode);
        else if ("contains" in a) return a.contains(c);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
        else return !1
    }
}), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;

    function h(a) {
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0, 3914);
        typeof b === "number" || g(0, 3915);
        b === 0 || b - 1 in a || g(0, 3916);
        typeof a.callee !== "function" || g(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!i(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return h(a)
    }
}), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f) {
    f.find = a;
    f.findPushSafe = c;
    f.scry = i;
    f.getSelection = d;
    f.contains = e;
    f.getRootElement = j;
    f.isNodeOfType = k;
    f.isInputNode = l;
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }

    function a(a, b) {
        a = i(a, b);
        return a[0]
    }

    function c(a, b, c) {
        b = i(a, b);
        a = i(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
        return c[0]
    }

    function i(a, c) {
        if (!a || !a.getElementsByTagName) return [];
        c = c.split(" ");
        var d = [a];
        for (var e = 0; e < c.length; e++) {
            if (d.length === 0) break;
            if (c[e] === "") continue;
            var f = c[e],
                i = c[e],
                j = [],
                k = !1;
            if (f.charAt(0) == "^")
                if (e === 0) k = !0, f = f.slice(1);
                else return [];
            f = f.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
            f = f.split(" ");
            var l = f[0] || "*",
                m = l == "*",
                n = f[1] && f[1].charAt(0) == "#";
            if (n) {
                n = b("ge")(f[1].slice(1), a, l);
                if (n && (m || n.tagName.toLowerCase() == l))
                    for (var o = 0; o < d.length; o++)
                        if (k && b("containsNode")(n, d[o])) {
                            j = [n];
                            break
                        } else if (document == d[o] || b("containsNode")(d[o], n) && d[o] !== n) {
                    j = [n];
                    break
                }
            } else {
                n = [];
                o = d.length;
                var p, q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
                for (var r = 0; r < o; r++) {
                    if (k) {
                        p = [];
                        var s = d[r].parentNode;
                        while (b("isElementNode")(s))(m || s.tagName.toLowerCase() == l) && p.push(s), s = s.parentNode
                    } else q ? g.test(i) ? p = d[r].getElementsByClassName(i.substring(1)) : p = d[r].querySelectorAll(i) : p = d[r].getElementsByTagName(l);
                    s = p.length;
                    for (var t = 0; t < s; t++) n.push(p[t])
                }
                if (!q)
                    for (var p = 1; p < f.length; p++) {
                        s = f[p];
                        t = s.charAt(0) == ".";
                        m = s.substring(1);
                        for (r = 0; r < n.length; r++) {
                            o = n[r];
                            if (!o || o.nodeType !== 1) continue;
                            if (t) {
                                b("CSS").hasClass(o, m) || delete n[r];
                                continue
                            } else {
                                i = s.slice(1, s.length - 1);
                                l = i.indexOf("=");
                                if (l < 0) {
                                    if (!h(o, i)) {
                                        delete n[r];
                                        continue
                                    }
                                } else {
                                    q = i.substr(0, l);
                                    i = i.substr(l + 1);
                                    i = i.slice(1, i.length - 1);
                                    if (o.getAttribute(q) != i) {
                                        delete n[r];
                                        continue
                                    }
                                }
                            }
                        }
                    }
                for (r = 0; r < n.length; r++)
                    if (n[r]) {
                        j.push(n[r]);
                        if (k) break
                    }
            }
            d = j
        }
        return d
    }

    function d() {
        var a = window.getSelection;
        if (a) return a() + "";
        else {
            a = document.selection;
            if (a) return a.createRange().text
        }
        return null
    }

    function e(a, c) {
        (typeof a === "string" || typeof c === "string") && b("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
        return b("containsNode")(b("ge")(a), b("ge")(c))
    }

    function j() {
        var a = b("ifRequired")("Quickling", function(a) {
            return a.isActive() ? b("ge")("content") : null
        });
        return a || document.body
    }

    function k(a, c) {
        c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
        c = b("createObjectFrom")(c);
        return b("isNode")(a) && a.nodeName in c
    }

    function l(a) {
        return k(a, ["input", "textarea"]) || a.contentEditable === "true"
    }
}), null);
__d("EventProfiler", ["cr:708886"], (function(a, b, c, d, e, f) {
    a = b("cr:708886");
    e.exports = a
}), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d;

    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }

    function a(a) {
        var b;
        if (a == null) return 0;
        var c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0
    }

    function b(a, b) {
        if (a == null) return;
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0
    }

    function c(a) {
        var b, c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0
    }

    function d(a, b) {
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0
    }
}), null);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this.ue_ts = b;
        this.ue_count = a;
        this.context = c;
        this.ns = null;
        this.node = d;
        this.type = e
    }
    g.prototype.set_namespace = function(a) {
        this.ns = a;
        return this
    };
    g.prototype.coalesce_namespace = function(a) {
        this.ns === null && (this.ns = a);
        return this
    };
    g.prototype.add_event = function() {
        return this
    };
    var h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n)
                if (i[n].node == c && i[n].type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0].ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    f.invariantViolation = a;
    f.isFalsy = c;
    var g = "flow_typing_for_legacy_code";

    function a(a) {
        b("FBLogger")(g).blameToPreviousFile().event(g + ".bad_call").mustfix(a);
        return new Error("[" + g + "] " + a)
    }

    function c(a) {
        return a === !1 || a == null || a === 0 || a === "" || Number.isNaN(a)
    }
}), null);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        if (a.scrollingElement) return a.scrollingElement;
        a = !g && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
        a || b("FlowMigrationUtilsForLegacyFiles").invariantViolation("null result in getDocumentScrollElement");
        return a
    }
}), null);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
}), null);
__d("Event", ["$", "Arbiter", "DOMEvent", "DOMEventListener", "DOMQuery", "DataStore", "Env", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TimeSlice", "UserAgent", "clickRefAction", "dedupString", "fb-error", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f) {
    var g, h, i = b("fb-error").TAAL,
        j = "Event.listeners";
    Event.prototype || (Event.prototype = {});

    function k(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }
    var l = function() {
        "use strict";

        function a(a, b, c) {
            this.cancelBubble = !1, this.target = a, this.type = b, this.data = c
        }
        var c = a.prototype;
        c.getData = function() {
            this.data = this.data || {};
            return this.data
        };
        c.stop = function() {
            return Event.stop(this)
        };
        c.prevent = function() {
            return Event.prevent(this)
        };
        c.isDefaultPrevented = function() {
            return Event.isDefaultPrevented(this)
        };
        c.kill = function() {
            return Event.kill(this)
        };
        c.getTarget = function() {
            return new(b("DOMEvent"))(this).target || null
        };
        return a
    }();

    function m(a) {
        if (a instanceof l) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in Event.prototype) try {
                a[b] = Event.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(Event.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, l.prototype);
    c = {
        listen: function(a, c, d, e, f) {
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new u(a, d, null, c, e, null, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = Event.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var h in c) g[h] = Event.listen(a, h, c[h], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = i.blameToPreviousFrame(new Error("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            g = b("DataStore").get(a, j, {});
            var k = o[c];
            k && (c = k.base, k.wrap && (d = k.wrap(d)));
            q(a, g, c, f);
            k = g[c];
            e in k || (k[e] = []);
            var l = k[e].length;
            d = new u(a, d, g, c, e, l, f);
            k[e][l] = d;
            k.numHandlers++;
            f.passive || (k.numNonPassiveHandlers++, p(a, g[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            k(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            k(a.event);
            return !1
        },
        getKeyCode: function(a) {
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!n) {
                var a = b("getObjectValues")(Event.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                n = a
            }
            return n
        },
        fire: function(a, b, c) {
            c = new l(a, b, c);
            var d;
            do {
                var e = Event.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = Event.__getHandler(a, b);
            if (a) return a(m(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, j);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    };
    Object.assign(Event, c);
    var n = null;
    d = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var o;
    !window.navigator.msPointerEnabled ? o = {
        mouseenter: {
            base: "mouseover",
            wrap: d
        },
        mouseleave: {
            base: "mouseout",
            wrap: d
        }
    } : o = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: d
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: d
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        f = function(a, b) {
            b = m(b);
            var c = b.getTarget();
            while (c) Event.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", f.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", f.bind(null, "focusout"), !0)
    }
    var p = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        q = function(a, c, d, e) {
            if (d in c) return;
            var f = b("TimeSlice").guard(t.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                Event.listen(a, d, g, f, e)
            }
        };

    function r(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function s(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var t = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        c = m(c);
        if (!b("DataStore").get(this, j)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, j)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && r(f) && !s(e, "file") && !s(e, "submit") && c.prevent();
            (g || (g = b("Env"))).gk_no_ref_action != !0 && (a == "click" && b("clickRefAction")("click", f, c), a == "contextmenu" && b("clickRefAction")("contextmenu", f, c), a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c))
        }
        e = Event.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var h = 0; h < f.length; h++) {
                    if (!f[h]) continue;
                    var i = f[h].fire(this, c);
                    if (i === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    Event.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };
    var u = function() {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$7 = d, this.$6 = e, this.$4 = f, this.$5 = g
        }
        var c = a.prototype;
        c.isRemoved = function() {
            return !this.$3
        };
        c.remove = function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (this.isRemoved()) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this.$3[this.$7];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this.$3[this.$7]) : (delete a[this.$6][this.$4], a.numHandlers--, this.$5.passive || (a.numNonPassiveHandlers--, p(this.$1, this.$3[this.$7], this.$7)));
                this.$3 = null
            }
        };
        c.fire = function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? (h || (h = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
                name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
            }) : !0
        };
        return a
    }();
    a.$E = Event.$E = m;
    e.exports = Event
}), null);
__d("getSurfaceAwareContainer", ["ge"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a() {
        var a = b("ge")("workGalahadWebChromeEntity");
        return a ? a : document.body
    }
}), null);
__d("snowliftLoadingSpinner", ["cx", "CSS"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;

    function a(a) {
        b("CSS").addClass(a, "_1m42");
        return function() {
            b("CSS").removeClass(a, "_1m42")
        }
    }
}), null);
__d("PhotoSnowliftLoader", ["Arbiter", "Bootloader", "FBLogger", "PageEvents", "getSurfaceAwareContainer", "ifRequired", "snowliftLoadingSpinner"], (function(a, b, c, d, e, f) {
    "use strict";
    f.load = a;
    f.loadWithSnowLift = c;
    f.shouldUseSnowlift = q;
    f.getImageURL = r;
    f.shouldShowHiRes = s;
    f.getStageSize = t;
    f.adjustStageSizeForPixelRatio = u;
    f.getImageSizeInStage = v;

    function g(a, c, d) {
        if (a && a.offer_bypass_snowlift === "1") {
            p(d);
            b("Bootloader").loadModules(["AsyncRequest"], function(a) {
                new a().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function h(a, c, d) {
        if (a && a.offerx_bypass_snowlift === "1") {
            p(d);
            b("Bootloader").loadModules(["AsyncRequest", "XOfferController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.offerx_id).setEnum("referrer", a.offerx_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function i(a, c, d) {
        if (a && a.sales_promo_bypass_snowlift === "1") {
            p(d);
            b("Bootloader").loadModules(["AsyncRequest", "XSalesPromoWWWDetailsDialogAsyncController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.sales_promo_id).setString("referrer", a.sales_promo_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }
    var j = function() {};
    b("Arbiter").subscribe("PhotoSnowlift.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("SalesPromoDetails.OPEN", function() {
        j()
    });
    b("Arbiter").subscribe("OfferDetails.OPEN", function() {
        j()
    });
    var k = !1,
        l = "",
        m = {
            x: 960,
            y: 960
        };
    f.STAGE_NORMAL_MAX = m;
    var n = 360;
    f.SIDEBAR_SIZE_MAX = n;
    var o = {
        x: 82,
        y: 42
    };
    f.STAGE_CHROME = o;

    function a(a, c, d) {
        var e = this;
        b("Bootloader").loadModules(["URI"], function(f) {
            l = "";
            j();
            j = b("snowliftLoadingSpinner")(c);
            var g = String(f.getMostRecentURI().getQueryData().viewas),
                h = new f(a).getQueryData();
            h = q(h, a, c, g);
            if (h) {
                c.getAttribute("data-ploi") && (h = new Image(), h.src = new f(r(c)));
                e.loadWithSnowLift(a, c, g, d)
            }
        }, "PhotoSnowliftLoader")
    }

    function c(a, c, d, e) {
        p(d), b("Bootloader").loadModules(["Live", "PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"], function() {}, "PhotoSnowliftLoader"), b("Bootloader").loadModules(["PhotoSnowlift"], function(b) {
            b.bootstrap(a, c)
        }, e)
    }
    var p = function(a) {
        if (k) return;
        k = !0;
        var c = a ? {
            viewas: a
        } : {};
        b("Bootloader").loadModules(["AsyncRequest"], function(a) {
            new a("/ajax/photos/snowlift/init.php").setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).setData(c).setErrorHandler(function(a) {
                b("FBLogger")("photo_snowlift").catching(a.toError()).warn("failed to initialize snowlift")
            }).send()
        }, "PhotoSnowliftLoader")
    };
    f.loadFrame = p;

    function q(a, b, c, d) {
        c = g(a, b, d);
        var e = h(a, b, d);
        a = i(a, b, d);
        return !c && !a && !e
    }

    function r(a) {
        l === "" && b("ifRequired")("URI", function(b) {
            var c = a.getAttribute("data-ploi"),
                d = a.getAttribute("data-plsi");
            b = new b(a.getAttribute("ajaxify")).getQueryData().size.split(",");
            d && !s({
                hasSmallImage: !!d,
                dimensions: {
                    x: b[0],
                    y: b[1]
                }
            }) ? l = d : c ? l = c : l = ""
        });
        return l
    }

    function s(a) {
        b("ifRequired")("Vector", function(b) {
            if (!a.hasSmallImage) return !1;
            b = t(a.dimensions);
            if (b) {
                b = u(b);
                b = v(a.dimensions, b);
                if (b) return b.x > m.x || b.y > m.y
            }
            return !1
        });
        return !1
    }

    function t(a) {
        b("ifRequired")("Vector", function(b) {
            var c = b.getViewportDimensions(),
                d = new b(a.x, a.y),
                e;
            e = Math.min(d.x, c.x - n - o.x);
            c = c.y - o.y;
            c = Math.min(d.y, c);
            if (e === 0 && c === 0) return new b(0, 0);
            var f = e / c;
            d = d.x / d.y;
            return f < d ? new b(e, Math.round(e / d)) : new b(Math.round(c * d), c)
        })
    }

    function u(a) {
        b("ifRequired")("Vector", function(b) {
            window.devicePixelRatio && window.devicePixelRatio > 1 && (a = new b(a.x * window.devicePixelRatio, a.y * window.devicePixelRatio))
        });
        return a
    }

    function v(a, c) {
        b("ifRequired")("Vector", function(b) {
            var d = a.x,
                e = a.y;
            if (d >= c.x || e >= c.y) {
                var f = c.x / c.y,
                    g = d / e;
                f < g ? (d = c.x, e = Math.round(d / g)) : f > g ? (e = c.y, d = Math.round(e * g)) : (d = c.x, e = c.y)
            }
            return new b(d, e)
        })
    }
    d = function() {
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function() {
            var a = b("getSurfaceAwareContainer")();
            (a && a.classList.contains("home") || a && a.classList.contains("timelineLayout")) && b("ifRequired")("requestIdleCallback", function(a) {
                a(function() {
                    p()
                })
            }, function() {
                p()
            })
        })
    };
    f.preload = d
}), null);
__d("PrimerInlineHandlers", ["Bootloader", "CSS", "Parent", "nullthrows", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    f.run = a;
    var g = {},
        h = new Map();

    function i(a, c) {
        var d = b("nullthrows")(a.id);
        d in g || (g[d] = 0);
        g[d] === 0 && b("CSS").addClass(a, "bootloading");
        g[d] += c
    }

    function j(a) {
        var c = b("nullthrows")(a.id);
        g[c]--;
        g[c] === 0 && b("CSS").removeClass(a, "bootloading")
    }

    function k(a, b, c, d) {
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) k(a, b, e, f);
        else if (e && typeof e === "object")
            if (e.__elem) c[d] = a;
            else if (e.__event) c[d] = b;
        else
            for (var g in e) k(a, b, e, g)
    }

    function l(a, c, d) {
        var f = b("Parent").byClass(a, "stat_elem") || a;
        f.id || f.setAttribute("id", b("uniqueID")());
        d = JSON.parse(a.getAttribute(d));
        i(f, d.length);
        d.forEach(function(d) {
            d = Array.isArray(d) ? m(d) : n(d);
            var g = d.moduleName,
                i = d.methodName,
                l = d.logicalKey,
                o = d.args;
            k(a, c, o);
            var p = b("Bootloader").loadModules.call(b("Bootloader"), [g], function(a) {
                j(f), a[i].apply(a, o)
            }, "Primer: addEventHandler");
            if (l != null) {
                d = h.get(l);
                d !== void 0 && d();
                h.set(l, function() {
                    p.remove(), j(a)
                })
            }
        })
    }

    function m(a) {
        var b = a[0],
            c = a[1];
        a = a.slice(2);
        return {
            moduleName: b,
            methodName: c,
            args: a
        }
    }

    function n(a) {
        var b = a.k,
            c = a.mod,
            d = a.meth;
        a = a.a;
        return {
            logicalKey: b,
            moduleName: c,
            methodName: d,
            args: a
        }
    }

    function a(a, c, d) {
        a = b("Parent").byAttribute(a, d);
        if (!a) return null;
        do l(a, c, d); while (a = b("Parent").byAttribute(a.parentNode, d));
        return !1
    }
}), null);
__d("ReactServerPrimer", ["FBLogger", "Parent", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    f.findSRBeforeMountElem = h;
    f.queueEvent = i;
    f.handleEvent = a;
    f.notifyReactHydrateMount = c;
    var g = new Map();

    function h(a) {
        while (a && a instanceof Node) {
            if (a instanceof HTMLElement && a.getAttribute("data-sr-before")) break;
            var c = a.previousSibling;
            c ? a = c : a = a.parentNode
        }
        if (a instanceof HTMLElement) return a;
        else {
            b("FBLogger")("ServerCallables").mustfix("Failed to find wrapping data-sr-before mount");
            return null
        }
    }

    function i(a, c, d) {
        var e = h(c);
        if (!e) return null;
        var f = !1,
            i = g.get(e);
        i || (i = [], g.set(e, i), f = !0);
        i.push(function() {
            var b = new a.constructor(a.type, a),
                e = d === void 0 ? c : d;
            e.dispatchEvent(b)
        });
        f && b("requireWeak")("ReactServerRenderer", function(a) {
            a.dequeueHydrate(e)
        });
        return !1
    }

    function a(a, c, d) {
        a = b("Parent").byAttribute(d, a);
        return !a ? null : i(c, a, d)
    }

    function c(a) {
        var b = g.get(a);
        b != null && b.forEach(function(a) {
            a()
        });
        g["delete"](a)
    }
}), null);
__d("firstClickTimestamp", ["DataStore"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setIfFirstClick = a;
    f.get = c;
    var g = "first-click-timestamp";

    function a(a, c) {
        var d = b("DataStore").get(a, g);
        d || b("DataStore").set(a, g, c.toString())
    }

    function c(a) {
        a = b("DataStore").get(a, g);
        return Number(a)
    }
}), null);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("requireDeferred")("BanzaiScuba_DEPRECATED");

    function i(a, b, c, d, e, f, g, h) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
    }

    function j(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function k() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = (g || (g = b("performanceNow")))(),
                c = document.cookie;
            a = g() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var l = function() {
        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g, h) {
            document.cookie = i(a, b, c, d, e, f, g, h)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = j(a, b, c)
        };
        c.getCookie = function(a) {
            this.$1++;
            var c = (g || (g = b("performanceNow")))();
            a = k().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            c = g() - c;
            var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
                e = b("Random").coinflip(d);
            e && m(d, "classic", c, this.$1);
            return a ? decodeURIComponent(a[1]) : null
        };
        return a
    }();

    function m(a, b, c, d, e, f) {
        h.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var n = 10 * 1e3,
        o = function() {
            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g, h) {
                document.cookie = i(a, b, c, d, e, f, g, h), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = j(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                var c = (g || (g = b("performanceNow")))();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = (g || (g = b("performanceNow")))() - c;
                    m(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + n < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + n < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                this.$4++;
                var a = k().split(";");
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new o() : new l()
        },
        CookieCacheForTest: o,
        CookieStoreSlowForTest: l
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f) {
    f.set = l;
    f.setWithoutChecks = m;
    f.setIfFirstPartyContext = a;
    f.setWithoutChecksIfFirstPartyContext = c;
    f.clear = n;
    f.get = d;
    var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace|fbaddins)\..*)$/i,
        h = /_js_(.*)/,
        i;

    function j() {
        i || (i = b("CookieStore").newCookieStore());
        return i
    }

    function k(a) {
        return window.self != window.top ? !1 : !0
    }

    function l(a, b) {
        if (!q(a)) return;
        m(a, b, s(a), t(a), r(a), u(a))
    }

    function m(a, b, c, d, e, f) {
        var h = Date.now();
        if (c != null)
            if (c > h) c -= h;
            else if (c == 1) {
            n(a, d);
            return
        }
        j().setCookie(h, a, b, d, window.location.hostname.replace(g, "$1"), c, e, f)
    }

    function a(a, b) {
        if (!k(a)) return;
        l(a, b)
    }

    function c(a, b, c, d, e) {
        if (!k(a)) return;
        m(a, b, c, d, e)
    }

    function n(a, b) {
        b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, window.location.hostname.replace(g, "$1"))
    }

    function d(a) {
        return !q(a) ? null : j().getCookie(a)
    }

    function o(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0,
            sameSite: a.s || "None"
        }
    }

    function p(a) {
        if (b("CookieCoreConfig")[a] !== void 0) return o(b("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? p(a[1]) : null
    }

    function q(a) {
        return p(a) !== null
    }

    function r(a) {
        a = p(a);
        return a == null ? !0 : !a.insecure
    }

    function s(a) {
        a = p(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function t(a) {
        a = p(a);
        return a == null ? "/" : a.path
    }

    function u(a) {
        a = p(a);
        return a == null || a.sameSite == null ? null : a.sameSite
    }
}), null);
__d("Cookie", ["Bootloader", "CookieConsent", "CookieCore"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        if (!(g || (g = b("CookieConsent"))).hasConsent(1)) {
            b("Bootloader").loadModules(["ODS"], function(b) {
                b.bumpEntityKey(2966, "defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function i() {
        return !(g || (g = b("CookieConsent"))).isCookiesBlocked()
    }

    function a(a, c) {
        if (!i() || !h(a)) return;
        b("CookieCore").set(a, c)
    }

    function c(a, c) {
        if (!i()) return;
        b("CookieCore").set(a, c)
    }

    function d(a, c, d, e, f) {
        if (!i() || !h(a)) return;
        b("CookieCore").setWithoutChecks(a, c, d, e, f)
    }
    f = babelHelpers["extends"]({}, b("CookieCore"), {
        set: a,
        setWithoutChecks: d,
        setWithoutCheckingUserConsent_DANGEROUS: c
    });
    e.exports = f
}), null);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return g.exec(a)[1] || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            c = c + "|" + a.getAttribute("data-referrer");
            b("Cookie").set("x-src", c)
        }
    }
    e.exports = a
}), null);
__d("Primer", ["invariant", "Bootloader", "CSS", "Env", "Event", "Parent", "PhotoSnowliftLoader", "PrimerInlineHandlers", "ReactServerPrimer", "TimeSlice", "clickRefAction", "firstClickTimestamp", "ifRequired", "performanceNow", "requireDeferred", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    f.primerHandleAjaxify = m;
    var h, i, j = b("requireDeferred")("AsyncRequest"),
        k = null,
        l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    a = document.documentElement;
    a != null || g(0, 2301);

    function m(a, c, d, e, f) {
        b("firstClickTimestamp").setIfFirstClick(c, (h || (h = b("performanceNow")))());
        var k = c.getAttribute("ajaxify"),
            m = c.href,
            n = e != null && e !== "" ? e : k || m;
        n && b("clickRefAction")("a", c, a).coalesce_namespace("primer");
        if (k && m && !/#$/.test(m)) {
            e = a.which && a.which === 2;
            k = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            if (e || k) return
        }
        m = b("PrimerInlineHandlers").run(d, a, "data-onclick");
        b("trackReferrer")(c, n);
        var o = f || c.rel;
        o = o && o.match(l);
        o = o && o[0];
        e = "Primer: " + o;
        switch (o) {
            case "dialog":
            case "dialog-post":
                b("Bootloader").loadModules(["AsyncDialog"], function(a) {
                    a.bootstrap(n, c, o)
                }, e);
                break;
            case "async":
            case "async-post":
                j.loadImmediately(function(a) {
                    a.bootstrap(n, c, o === "async-post")
                });
                break;
            case "theater":
                !(i || (i = b("Env"))).isCQuick ? b("PhotoSnowliftLoader").load(n, c, e) : b("ifRequired")("PageTransitions", function(a) {
                    a.go(n)
                });
                break;
            case "toggle":
                k = c.parentNode;
                k != null || g(0, 2302);
                b("CSS").toggleClass(k, "openToggler");
                b("Bootloader").loadModules(["Toggler"], function(a) {
                    if (c.parentNode == null) return;
                    a.bootstrap(c)
                }, e);
                break;
            default:
                b("ifRequired")("PageTransitionsRegistrar", function(b) {
                    b.__onClick(a)
                }, function() {});
                return m
        }
        return !1
    }
    b("Event").listen(document, "click", function(a) {
        a = a || window.event;
        if (a.button >= 2) return;
        k = a.target || a.srcElement;
        var c = b("Parent").byTag(k, "A");
        c instanceof HTMLAnchorElement ? c = m(a, c, k) : c = b("PrimerInlineHandlers").run(k, a, "data-onclick");
        c == null && (c = b("ReactServerPrimer").handleEvent("data-sr-onclick", a, k));
        return c
    }, b("Event").Priority._BUBBLE);
    b("Event").listen(document, "submit", function(a) {
        var c = a.getTarget(),
            d = c && c.getAttribute("rel");
        if (c && c.nodeName == "FORM" && (d == "async" || d === "dialog")) {
            b("clickRefAction")("f", c, a).coalesce_namespace("primer");
            var e = k;
            switch (d) {
                case "async":
                    b("Bootloader").loadModules(["FormSubmit"], function(a) {
                        a.send(c, e)
                    }, "Primer: async");
                    break;
                case "dialog":
                    b("Bootloader").loadModules(["FormSubmit", "AsyncDialog"], function(a, b) {
                        a = a.buildRequest(c, e);
                        a && b.send(a)
                    }, "Primer: form dialog");
                    break
            }
            return !1
        } else return b("ifRequired")("PageTransitionsRegistrar", function(b) {
            return b.__onSubmit(a, k)
        })
    }, b("Event").Priority._BUBBLE);
    var n = null;
    c = function(a, c) {
        c = c || window.event;
        n = c.target || c.srcElement;
        var d = b("PrimerInlineHandlers").run(n, c, "data-on" + a);
        o();
        a === "mouseover" && (p(), d == null && n && (d = b("ReactServerPrimer").handleEvent("data-sr-onmouseover", c, n)))
    };
    d = function(a, b) {
        b = b || window.event, n = b.relatedTarget || b.toElement
    };
    var o = function() {
            var a = n,
                c = b("Parent").byAttribute(n, "data-hover");
            if (c) {
                switch (c.getAttribute("data-hover")) {
                    case "tooltip":
                        b("Bootloader").loadModules(["Tooltip"], function(b) {
                            n === a && b.process(c, n)
                        }, "Primer: tooltip");
                        break
                }
                return
            }
        },
        p = function() {
            var a = n,
                c = b("Parent").byAttribute(a, "data-hovercard");
            c && b("Bootloader").loadModules(["Hovercard"], function(b) {
                n === a && b.processNode(c)
            }, "Primer: hovercard")
        };
    a.onmouseover = b("TimeSlice").guard(c.bind(null, "mouseover"), "Primer mouseover");
    a.onmouseout = b("TimeSlice").guard(d.bind(null, "mouseout"), "Primer mouseout");
    e = b("TimeSlice").guard(c.bind(null, "focus"), "Primer focus");
    a.addEventListener ? a.addEventListener("focus", e, !0) : a.attachEvent("onfocusin", e);
    f = b("TimeSlice").guard(c.bind(null, "keypress"), "Primer keypress");
    a.addEventListener && a.addEventListener("keypress", f, !0);
    b("PhotoSnowliftLoader").preload()
}), null);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], (function(a, b, c, d, e, f, g) {
    f.get = i;
    f.getBool = a;
    f.getNumber = c;
    f.set = d;
    f.getDebugInfo = e;
    var h = Object.assign({}, b("ChatConfigInitialData"));

    function i(a, b) {
        return a in h ? h[a] : b
    }

    function a(a) {
        return !!i(a, !1)
    }

    function c(a, b) {
        b === void 0 && (b = 0);
        if (a in h) {
            typeof h[a] === "number" || g(0, 3109);
            return h[a]
        }
        return b
    }

    function d(a, b) {
        h[a] = b
    }

    function e() {
        return h
    }
}), null);
__d("SidebarPrelude", ["Arbiter", "Bootloader", "CSS", "ChatConfig", "URI", "setTimeout"], (function(a, b, c, d, e, f) {
    f.addSidebarMode = a;
    f.addBuddylistMode = c;
    f.isOnHomepage = d;
    var g, h = b("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
        i = b("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),
        j = "buddylistOff",
        k = "sidebarMode";

    function a(a) {
        var c = document.documentElement;
        if (c) {
            var d = i || h && !this.isOnHomepage();
            d ? b("CSS").addClass(c, j) : (b("CSS").removeClass(c, j), h && b("setTimeout")(function() {
                b("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            }));
            c.clientWidth > a && (b("CSS").addClass(c, k), b("Arbiter").inform("sidebar/visibility", !0, "state"))
        }
    }

    function c() {
        var a = document.documentElement;
        if (a) {
            var c = i || h && !this.isOnHomepage();
            c ? b("CSS").addClass(a, j) : (b("CSS").removeClass(a, j), h && b("setTimeout")(function() {
                b("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            }))
        }
    }

    function d() {
        return new(g || (g = b("URI")))(window.location.href).getPath() === "/"
    }
}), null);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], (function(a, b, c, d, e, f) {
    document.documentElement.onkeydown = function(a) {
        a = a || window.event;
        var c = a.target || a.srcElement;
        a = a.keyCode == 13 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && b("CSS").hasClass(c, "enter_submit");
        if (a) {
            b("Bootloader").loadModules(["DOM", "Input", "trackReferrer", "Form"], function(a, b, d, e) {
                if (!b.isEmpty(c)) {
                    b = c.form;
                    a = a.scry(b, ".enter_submit_target")[0] || a.scry(b, '[type="submit"]')[0];
                    if (a) {
                        e = e.getAttribute(b, "ajaxify") || e.getAttribute(b, "action");
                        e && d(b, e);
                        a.click()
                    }
                }
            }, "SubmitOnEnterListener");
            return !1
        }
    }
}), null);
__d("SyntaxErrorMonitor", ["Cookie", "ErrorPubSub"], (function(a, b, c, d, e, f) {
    var g, h = "js_ver",
        i = 864e5,
        j = 1262304e6,
        k = null;

    function l(a) {
        return a.name == "SyntaxError" || /syntaxerror/i.test(a.message)
    }

    function m(a) {
        if (l(a)) {
            a = b("Cookie").get(h);
            var c = Math.floor((Date.now() - j) / i);
            if (!a || c - a >= k.bump_freq_day) {
                b("Cookie").set(h, c);
                a || (a = c);
                var d = encodeURIComponent(k.cdn_config);
                d = "/ajax/js_bump/?cdn_config=" + d + "&days=" + c + "&last_update=" + a;
                c = new Image();
                c.src = d
            }
        }
    }
    a = {
        init: function(a) {
            k = a, (g || (g = b("ErrorPubSub"))).addListener(m)
        }
    };
    e.exports = a
}), null);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = 5e3;
    a = function() {
        function a(a) {
            var c = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = h;
            this.$4 = a;
            this.$1 = new(b("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                c.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var c = a.prototype;
        c.open = function() {
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        c.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        c.isActive = function() {
            return this.$2.length > 0
        };
        c.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        c.$7 = function(a) {
            var c, d, e, f;
            for (var h = 0; h < this.$2.length; h++) {
                var i = this.$2[h],
                    j = i.startIdx;
                i = i.id;
                i === a ? (e = h, f = j) : (d == null || j < d) && (d = j);
                (c == null || j < c) && (c = j)
            }
            if (e == null || c == null || f == null) {
                (g || (g = b("ErrorPubSub"))).reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            i = this.$8(f);
            j = this.$1.read().slice(i);
            h = this.$8(d == null ? this.$5 : d) - this.$8(c);
            h > 0 && (this.$1.dropFirst(h), this.$6 += h);
            return j
        };
        return a
    }();
    e.exports = a
}), null);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.isWorkerContext = b;

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }
}), null);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, b, c) {
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {};

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
}), null);
__d("TimeSliceImpl", ["invariant", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k, l = [],
        m = [],
        n = "key" + Math.random(),
        o = 1,
        p = !1;
    c = (h || (h = b("Env"))).timesliceBufferSize;
    c == null && (c = 5e3);
    var q = new(b("IntervalTrackingBoundedBuffer"))(c),
        r = [],
        s = [],
        t = [];

    function u() {
        return v(r)
    }

    function v(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function w(a, c) {
        var d = {};
        (i || (i = b("ErrorGuard"))).applyWithGuard(z, null, [a, c, d]);
        i.applyWithGuard(A, null, [a, c, d]);
        r.push(a);
        s.push(c);
        t.push(d)
    }

    function x(a, b, c) {
        l.forEach(function(d) {
            var e = d.onNewContextCreated(u(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function y(a, b, c) {
        m.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function z(a, b, c) {
        l.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function A(a, b, c) {
        l.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function B() {
        var a = u(),
            c = v(s),
            d = v(t);
        if (a == null || c == null || d == null) {
            b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            p = !1;
            return
        }(i || (i = b("ErrorGuard"))).applyWithGuard(y, null, [a, c, d]);
        p = !a.isRoot;
        r.pop();
        s.pop();
        t.pop()
    }
    var C = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            var e;
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var f = D(d);
            if (a[n]) return a;
            var l;
            p && (l = u());
            var m = {},
                r = 0,
                s = void 0;
            e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
            d && d.registerCallStack && e > 0 && Math.random() < 1 / e && (s = new Error("deferred execution source"));
            d = function() {
                var d = (j || (j = b("performanceAbsoluteNow")))(),
                    e = o++,
                    g = {
                        contextID: e,
                        name: c,
                        isRoot: !p,
                        executionNumber: r++,
                        meta: f,
                        absBeginTimeMs: d
                    };
                w(g, m);
                if (l != null) {
                    var h = !!f.isContinuation;
                    l.isRoot ? (g.indirectParentID = l.contextID, g.isEdgeContinuation = h) : (g.indirectParentID = l.indirectParentID, g.isEdgeContinuation = !!(h && l.isEdgeContinuation))
                }
                var n = (k || (k = b("WorkerUtils"))).isWorkerContext();
                p = !0;
                try {
                    for (var t = arguments.length, v = new Array(t), x = 0; x < t; x++) v[x] = arguments[x];
                    if (!g.isRoot || n) return a.apply(this, v);
                    else return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, v, {
                        name: "TimeSlice" + (c ? ": " + c : ""),
                        deferredSource: s
                    })
                } finally {
                    var y = u();
                    if (y == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), p = !1;
                    else {
                        var z = y.isRoot,
                            A = y.contextID,
                            C = y.indirectParentID,
                            D = y.isEdgeContinuation,
                            E = (j || (j = b("performanceAbsoluteNow")))();
                        y.absEndTimeMs = E;
                        if (z && d != null) {
                            var F = babelHelpers["extends"]({
                                begin: d,
                                end: E,
                                id: A,
                                indirectParentID: C,
                                representsExecution: !0,
                                isEdgeContinuation: l && D,
                                guard: c
                            }, f, a.__SMmeta);
                            q.pushElement(F)
                        }
                        B()
                    }
                }
            };
            d[n] = {};
            (i || (i = b("ErrorGuard"))).applyWithGuard(x, null, [m, c, f]);
            return d
        },
        copyGuardForWrapper: function(a, b) {
            a && a[n] && (b[n] = a[n]);
            return b
        },
        getContext: function() {
            return u()
        },
        getGuardedContinuation: function(a) {
            function b(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }
            return C.guard(b, a, {
                propagationType: C.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(C, n, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return r.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            var b = !1;
            for (var c = 0; c < l.length; c++)
                if (l[c].getBeforeID() > a.getBeforeID()) {
                    l.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || l.push(a);
            for (var c = 0; c < m.length; c++)
                if (m[c].getAfterID() > a.getAfterID()) {
                    m.splice(c, 0, a);
                    return
                }
            m.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < r.length; b++) {
                var c = r[b],
                    d = s[b],
                    e = t[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                t[b] = e
            }
        },
        getBuffer: function() {
            return q
        }
    };

    function D(a) {
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case C.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case C.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case C.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    b("wrapFunction").setWrapper(function(a, b) {
        return C.guard(a, b, {
            registerCallStack: !0
        })
    }, "entry");
    a.TimeSlice = C;
    e.exports = C
}), 6);
__d("URLFragmentPrelude", ["URLFragmentPreludeConfig", "requireWeak"], (function(a, b, c, d, e, f) {
    a = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
    window.location.href.replace(a, function(a, c, d, e) {
        var f;
        f = a = c + (d ? "?" + d : "");
        if (e) {
            var h = e.replace(/^(!|%21)/, "");
            h = h.charAt(0);
            if (h !== "/" && h !== "\\" && b("URLFragmentPreludeConfig").hashtagRedirect) {
                h = e.match(g);
                h && !d && c == "/" && (f = "/hashtag/" + e)
            }
        }
        f != a && (b("requireWeak")("ODS", function(a) {
            a.bumpEntityKey(3216, "url_fragment_prelude", "blue_redirected")
        }), window.location.replace(f))
    })
}), null);
__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g, h;
    b("ExecutionEnvironment").canUseDOM && (document.hidden !== void 0 ? (g = "hidden", h = "visibilitychange") : document.mozHidden !== void 0 ? (g = "mozHidden", h = "mozvisibilitychange") : document.msHidden !== void 0 ? (g = "msHidden", h = "msvisibilitychange") : document.webkitHidden !== void 0 && (g = "webkitHidden", h = "webkitvisibilitychange"));
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = g, c.hiddenEvent = h, b) || babelHelpers.assertThisInitialized(c)
        }
        var d = c.prototype;
        d.isHidden = function() {
            return g ? document[g] : !1
        };
        d.isSupported = function() {
            return b("ExecutionEnvironment").canUseDOM && document.addEventListener && h !== void 0
        };
        return c
    }(b("BaseEventEmitter"));
    var i = new a();
    i.isSupported() && document.addEventListener(i.hiddenEvent, b("TimeSlice").guard(function(a) {
        i.emit(i.isHidden() ? i.HIDDEN : i.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    c = i;
    e.exports = c
}), null);
__d("VisibilityListener", ["Visibility", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getHiddenTimings = m;
    f.getHiddenTime = a;
    f.supported = c;
    var g, h = Date.now() - (g || (g = b("performanceNow")))(),
        i = [],
        j = !1,
        k = 1e4;
    i.push({
        key: h,
        value: b("Visibility").isHidden()
    });

    function l(a, b) {
        if (j || i.length > k) {
            j = !0;
            return
        }
        i.push({
            key: a + h,
            value: b
        })
    }
    b("Visibility").addListener(b("Visibility").VISIBLE, function(a) {
        l(a.changeTime, !1)
    });
    b("Visibility").addListener(b("Visibility").HIDDEN, function(a) {
        l(a.changeTime, !0)
    });

    function m(a, c) {
        if (j) return null;
        var d;
        for (var a = i.length - 1; a >= 0; a--)
            if (i[a].key <= c) {
                d = i.slice(0, a + 1);
                break
            }
        if (d === void 0) return null;
        d[d.length - 1].value !== b("Visibility").isHidden() && (d[d.length] = {
            key: c,
            value: b("Visibility").isHidden()
        });
        return d
    }

    function a(a, c) {
        var d = m(a, c);
        if (!d) return null;
        if (d.length < 2) return b("Visibility").isHidden() ? c - a : 0;
        var e = d.length - 1;
        c = d[e].value ? c - d[e].key : 0;
        for (--e; e > 0; e--)
            if (d[e].key > a) d[e].value && (c += d[e + 1].key - d[e].key);
            else break;
        d[e].value && (c = d[e + 1].key - a);
        return c
    }

    function c() {
        return !0
    }
}), 3);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now)
        if ((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) a = function() {
            return (g || (g = b("performance"))).timing.navigationStart
        };
        else {
            if (typeof window._cstart === "number") a = function() {
                return window._cstart
            };
            else {
                var h = Date.now();
                a = function() {
                    return h
                }
            }
            a.isPolyfilled = !0
        }
    else a = function() {
        return 0
    }, a.isPolyfilled = !0;
    e.exports = a
}), null);
__d("bootstrapWebSession", ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function g(a) {
        a = b("performanceNavigationStart")() || a;
        return Number.isInteger(a) ? a : null
    }
    var h = !1;

    function a(a) {
        if (h === !0) return;
        h = !0;
        a = g(a);
        a != null && a > 0 && b("WebSession").extend(a + b("WebSessionDefaultTimeoutMs"))
    }
}), null);
__d("clearIntervalBlue", [], (function(a, b, c, d, e, f) {
    e.exports = b;
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
}), null);
__d("clearTimeoutBlue", [], (function(a, b, c, d, e, f) {
    e.exports = b;
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
}), null);
__d("legacy:arbiter", ["Arbiter"], (function(a, b, c, d, e, f) {
    a.Arbiter = b("Arbiter")
}), 3);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("legacy:constructor-cache", ["JSCC"], (function(a, b, c, d, e, f) {
    a.JSCC = b("JSCC")
}), 3);
__d("legacy:css", ["CSS"], (function(a, b, c, d, e, f) {
    a.CSS = b("CSS")
}), 3);
__d("legacy:dom-core", ["$", "ge"], (function(a, b, c, d, e, f) {
    a.$ = a.$ || b("$"), a.ge = b("ge")
}), 3);
__d("legacy:emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a.emptyFunction = b("emptyFunction")
}), 3);
__d("goURI", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = (g || b("URI")).go;
    e.exports = a
}), null);
__d("legacy:goURI", ["goURI"], (function(a, b, c, d, e, f) {
    a.goURI = b("goURI")
}), 3);
__d("Run", ["cr:925100"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        __domContentCallback: (a = b("cr:925100")).__domContentCallback,
        __onloadCallback: a.__onloadCallback,
        __removeHook: a.__removeHook,
        onAfterLoad: a.onAfterLoad,
        onAfterUnload: a.onAfterUnload,
        onBeforeUnload: a.onBeforeUnload,
        maybeOnBeforeUnload: a.onBeforeUnload,
        onCleanupOrLeave: a.onCleanupOrLeave,
        onLeave: a.onLeave,
        onLoad: a.onLoad,
        onUnload: a.onUnload
    }
}), null);
__d("legacy:onload", ["PageEvents", "Run"], (function(a, b, c, d, e, f) {
    a.PageEvents = b("PageEvents");
    a.onloadRegister_DEPRECATED = (c = b("Run")).onLoad;
    a.onloadRegister = function() {
        return b("Run").onLoad.apply(this, arguments)
    };
    a.onafterloadRegister_DEPRECATED = c.onAfterLoad;
    a.onafterloadRegister = function() {
        return b("Run").onAfterLoad.apply(this, arguments)
    };
    a.onleaveRegister = c.onLeave;
    a.onbeforeunloadRegister = c.onBeforeUnload;
    a.onunloadRegister = c.onUnload
}), 3);
__d("legacy:parent", ["Parent"], (function(a, b, c, d, e, f) {
    a.Parent = b("Parent")
}), 3);
__d("lowerFacebookDomain", [], (function(a, b, c, d, e, f) {
    b = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.(?:test)?onion|workplace\.com)$/);
    var g = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        g = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == g
    };

    function a() {
        document.domain = g
    }
    c = a;
    e.exports = c
}), null);
__d("lowerDomain", ["lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(/(^|\.)(facebook|facebookcorewwwi|workplace)\..*/) && b("lowerFacebookDomain")()
}), null);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("setIntervalAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f) {
    e.exports = c;
    var g = a.__fbNativeSetInterval || a.setInterval;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setInterval");
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) h[i - 2] = arguments[i];
        return Function.prototype.apply.call(g, a, [e, d].concat(h))
    }
}), null);
__d("setTimeoutAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f) {
    e.exports = c;
    var g = a.__fbNativeSetTimeout || a.setTimeout;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setTimeout", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) h[i - 2] = arguments[i];
        return Function.prototype.apply.call(g, a, [e, d].concat(h))
    }
}), null);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    c = b;
    e.exports = c
}), null);
__d("setTimeoutBlue", ["TimeSlice", "TimerStorage", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, c) {
        var d, e = function() {
            b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
            for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = b("setTimeoutAcrossTransitions").apply(void 0, [e, c].concat(g));
        b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
        return d
    }
}), null);