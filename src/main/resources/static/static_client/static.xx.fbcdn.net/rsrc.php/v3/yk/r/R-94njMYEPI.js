if (self.CavalryLogger) {
    CavalryLogger.start_js(["795hSTA"]);
}

__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_UNKNOWN: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11
    }
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("camelize", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
}), null);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
}), null);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function g(a) {
        return a == null ? "" : String(a)
    }

    function a(a, c) {
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return g(d.getPropertyValue(b("hyphenate")(c)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return g(d.getPropertyValue(b("hyphenate")(c)));
            if (c === "display") return "none"
        }
        return a.currentStyle ? c === "float" ? g(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : g(a.currentStyle[b("camelize")(c)]) : g(a.style && a.style[b("camelize")(c)])
    }
}), null);
__d("InlineFbtResult", ["cr:1183579"], (function(a, b, c, d, e, f) {
    a = b("cr:1183579");
    e.exports = a
}), null);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        injectReactShim: function(a) {
            var b = {
                validated: !0
            };
            g ? Object.defineProperty(a, "_store", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: b
            }) : a._store = b
        }
    };
    e.exports = b
}), null);
__d("FbtResultBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            this.$1 = a, this.__errorListener = b, this.$3 = !1, this.$2 = null
        }
        var b = a.prototype;
        b.flattenToArray = function() {
            return a.flattenToArray(this.$1)
        };
        b.getContents = function() {
            return this.$1
        };
        b.toString = function() {
            if (Object.isFrozen(this)) return this.$4();
            if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
            this.$3 = !0;
            try {
                return this.$4()
            } finally {
                this.$3 = !1
            }
        };
        b.$4 = function() {
            if (this.$2 != null) return this.$2;
            var b = "",
                c = this.flattenToArray();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                if (typeof e === "string" || e instanceof a) b += e.toString();
                else {
                    var f;
                    (f = this.__errorListener) == null ? void 0 : f.onStringSerializationError == null ? void 0 : f.onStringSerializationError(e)
                }
            }
            Object.isFrozen(this) || (this.$2 = b);
            return b
        };
        b.toJSON = function() {
            return this.toString()
        };
        a.flattenToArray = function(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = b[d];
                Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e)
            }
            return c
        };
        return a
    }();
    ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function(a) {
        g.prototype[a] = function() {
            var b;
            (b = this.__errorListener) == null ? void 0 : b.onStringMethodUsed == null ? void 0 : b.onStringMethodUsed(a);
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return String.prototype[a].apply(this, d)
        }
    });
    e.exports = g
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        c.get = function(a) {
            return new c(a.contents, a.errorListener)
        };
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("TransAppInlineMode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    e.exports = a
}), null);
__d("getUnwrappedFbt", ["FbtResultGK"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "SiteData", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = b("FbtResultGK").inlineMode;
    if (b("SiteData").is_comet && g === "TRANSLATION") {
        b("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((c = g) != null ? c : "") + "]") + ("[runtime_site_is_comet=" + String(b("gkx")("708253")) + "]"), "internationalization")
    }

    function a(a) {
        var c = b("getUnwrappedFbt")(a);
        if (c != null) return c;
        c = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return g != null && g !== "NO_INLINE" ? new(b("InlineFbtResult"))(c, g, d, e) : b("FbtResult").get(a)
    }
}), null);
__d("FBJSON", [], (function(a, b, c, d, e, f) {
    a = JSON.parse;
    f.parse = a;
    b = JSON.stringify;
    f.stringify = b
}), null);
__d("BanzaiConsts", [], (function(a, b, c, d, e, f) {
    a = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        BASIC: "basic",
        VITAL: "vital",
        BASIC_WAIT: 6e4,
        BASIC_WAIT_COMET: 2e3,
        VITAL_WAIT: 1e3,
        BATCH_SIZE_LIMIT: 64e3,
        EXPIRY: 864e5,
        BATCH_TIMEOUT: 1e4,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
        POST_READY: 0,
        POST_INFLIGHT: 1,
        POST_SENT: 2
    };
    b = a;
    e.exports = b
}), null);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function(a, b, c, d, e, f) {
    var g, h = {
        getID: function() {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID
        },
        getAccountID: function() {
            return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
        },
        getPossiblyNonFacebookUserID: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID()
        },
        getEmployeeWorkUserID: function() {
            return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
        },
        getName: function() {
            return (g || (g = b("CurrentUserInitialData"))).NAME
        },
        getShortName: function() {
            return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
        },
        isLoggedIn: function() {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID !== "0"
        },
        isLoggedInNow: function() {
            var a;
            if (!h.isLoggedIn()) return !1;
            if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
        },
        isEmployee: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
        },
        isTestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
        },
        hasWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
        },
        isGray: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
        },
        isUnderage: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        },
        isMessengerCallGuestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
        },
        isBusinessPersonAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
        },
        hasSecondaryBusinessPerson: function() {
            return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
        },
        getAppID: function() {
            return (g || (g = b("CurrentUserInitialData"))).APP_ID
        }
    };
    e.exports = h
}), null);
__d("BanzaiUtils", ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = {
        canSend: function(a) {
            return a[2] >= (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY
        },
        filterPost: function(a, c, d, e) {
            if (e.overlimit) return !0;
            if (!e.sendMinimumOnePost && a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT) return !0;
            var f = a.__meta;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT || !i.canSend(a)) return !1;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT) return !0;
            var g = f.compress != null ? f.compress : !0,
                j = (f.webSessionId != null ? f.webSessionId : "null") + (f.userID != null ? f.userID : "null") + (f.appID != null ? f.appID : "null") + (g ? "compress" : ""),
                k = e.wadMap.get(j);
            k || (k = {
                app_id: f.appID,
                needs_compression: g,
                posts: [],
                user: f.userID,
                webSessionId: f.webSessionId
            }, e.wadMap.set(j, k), c.push(k));
            f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
            Array.isArray(k.posts) ? k.posts.push(a) : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
            d.push(a);
            e.currentSize += a[4];
            e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
            return e.keepRetryable && Boolean(f.retry)
        },
        resetPostStatus: function(a) {
            a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY
        },
        retryPost: function(a, c, d) {
            var e = a;
            e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
            e[3] = (e[3] || 0) + 1;
            e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a)
        },
        wrapData: function(a, c, d, e, f) {
            d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
            d.__meta = {
                appID: b("CurrentUser").getAppID(),
                retry: e === !0,
                status: (h || (h = b("BanzaiConsts"))).POST_READY,
                userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
                webSessionId: b("WebSession").getId()
            };
            return d
        }
    };
    e.exports = i
}), null);
__d("cancelIdleCallback", ["cr:692209"], (function(a, b, c, d, e, f) {
    a = b("cr:692209");
    e.exports = a
}), null);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    f.requestIdleCallback = c;
    f.cancelIdleCallback = q;
    var g, h = [],
        i = 0,
        j = 0,
        k = -1,
        l = !1,
        m = 1e3 / 60,
        n = 2;

    function o(a) {
        return a
    }

    function p(a) {
        return a
    }

    function c(b, c) {
        var d = j++;
        h[d] = b;
        r();
        if (c != null && c.timeout > 0) {
            var e = o(d);
            a.setTimeout(function() {
                return x(e)
            }, c.timeout)
        }
        return o(d)
    }

    function q(a) {
        a = p(a);
        h[a] = null
    }

    function r() {
        l || (l = !0, b("requestAnimationFramePolyfill")(function(a) {
            l = !1, t((g || (g = b("performanceNow")))() - a)
        }))
    }

    function s(a) {
        var b = m - n;
        if (a < b) return b - a;
        a = a % m;
        if (a > b || a < n) return 0;
        else return b - a
    }

    function t(a) {
        var c = (g || (g = b("performanceNow")))();
        if (c > k) {
            a = s(a);
            if (a > 0) {
                c = c + a;
                w(c);
                k = c
            }
        }
        u() && r()
    }

    function u() {
        return i < h.length
    }

    function v() {
        while (u()) {
            var a = h[i];
            i++;
            if (a) return a
        }
        return null
    }

    function w(a) {
        var c;
        while ((g || (g = b("performanceNow")))() < a && (c = v())) c(new y(a))
    }

    function x(a) {
        var b = p(a);
        b = h[b];
        b && (q(a), b(new y(null)))
    }
    var y = function() {
        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var c = a.prototype;
        c.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var c = (g || (g = b("performanceNow")))();
                if (c < a) return a - c
            }
            return 0
        };
        return a
    }()
}), null);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimeSlice"], (function(a, b, c, d, e, f) {
    e.exports = c;
    var g = a.requestIdleCallback || b("IdleCallbackImplementation").requestIdleCallback;

    function c(c, d) {
        c = b("TimeSlice").guard(c, "requestIdleCallback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        return g.call(a, c, d)
    }
}), null);
__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    f.start = c;
    f.clear = d;
    var g = !1,
        h = new Map();

    function c(a, c) {
        if (g) {
            var d = b("setTimeoutAcrossTransitions")(function() {
                var c = b("requestIdleCallbackAcrossTransitions")(function() {
                    a(), h["delete"](c)
                });
                h.set(d, c)
            }, c);
            return d
        } else return b("setTimeoutAcrossTransitions")(a, c)
    }

    function d(a) {
        b("clearTimeout")(a), h.has(a) && (b("cancelIdleCallback")(b("nullthrows")(h.get(a))), h["delete"](a))
    }
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED, function(b, c) {
        c.event === "all_pagelets_loaded" && (g = !!a.requestIdleCallback)
    })
}), null);
__d("WebStorageMutex", ["WebStorage", "clearTimeout", "pageID", "setTimeout"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = null,
        i = !1,
        j = b("pageID");

    function k() {
        i || (i = !0, h = (g || (g = b("WebStorage"))).getLocalStorage());
        return h
    }
    a = function() {
        function a(a) {
            this.name = a
        }
        a.testSetPageID = function(a) {
            j = a
        };
        var c = a.prototype;
        c.$2 = function() {
            var a, b = k();
            if (!b) return j;
            b = b.getItem("mutex_" + this.name);
            b = ((a = b) != null ? a : "").split(":");
            return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null
        };
        c.$3 = function(a) {
            var c = k();
            if (!c) return;
            a = a == null ? 1e3 : a;
            a = Date.now() + a;
            (g || (g = b("WebStorage"))).setItemGuarded(c, "mutex_" + this.name, j + ":" + a)
        };
        c.hasLock = function() {
            return this.$2() === j
        };
        c.lock = function(a, c, d) {
            var e = this;
            this.$1 && b("clearTimeout")(this.$1);
            j === (this.$2() || j) && this.$3(d);
            this.$1 = b("setTimeout")(function() {
                e.$1 = null;
                var b = e.hasLock() ? a : c;
                b && b(e)
            }, 0)
        };
        c.unlock = function() {
            this.$1 && b("clearTimeout")(this.$1);
            var a = k();
            a && this.hasLock() && a.removeItem("mutex_" + this.name)
        };
        return a
    }();
    e.exports = a
}), null);
__d("BanzaiStorage", ["BanzaiConsts", "BanzaiUtils", "CurrentUser", "FBJSON", "SetIdleTimeoutAcrossTransitions", "WebSession", "WebStorage", "WebStorageMutex", "isInIframe", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = "bz:",
        k = b("isInIframe")(),
        l, m = !1,
        n = null;

    function o() {
        var a = "check_quota";
        try {
            var b = p();
            if (!b) return !1;
            b.setItem(a, a);
            b.removeItem(a);
            return !0
        } catch (a) {
            return !1
        }
    }

    function p() {
        m || (m = !0, l = (g || (g = b("WebStorage"))).getLocalStorage());
        return l
    }
    a = {
        flush: function(a) {
            if (k) return;
            var c = p();
            if (c) {
                n == null && (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
                var d = n && (i || (i = b("performanceAbsoluteNow")))() - n >= (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                d && a();
                (d || !n) && (n = (i || (i = b("performanceAbsoluteNow")))(), (g || (g = b("WebStorage"))).setItemGuarded(c, (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH, n.toString()))
            }
        },
        restore: function(a) {
            if (k) return;
            var c = p();
            if (!c) return;
            var d = function(d) {
                var e = [];
                for (var f = 0; f < c.length; f++) {
                    var g = c.key(f);
                    typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g)
                }
                e.forEach(function(d) {
                    var e = c.getItem(d);
                    c.removeItem(d);
                    if (e == null || e === "") return;
                    d = b("FBJSON").parse(e);
                    d.forEach(function(c) {
                        if (!c) return;
                        var d = c.__meta = c.pop(),
                            e = b("BanzaiUtils").canSend(c);
                        if (!e) return;
                        e = b("CurrentUser").getPossiblyNonFacebookUserID();
                        (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c))
                    })
                });
                d && d.unlock()
            };
            o() ? new(b("WebStorageMutex"))("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0)
        },
        store: function(a) {
            if (k) return;
            var c = p(),
                d = a.filter(function(a) {
                    return a.__meta.status !== (h || (h = b("BanzaiConsts"))).POST_SENT
                });
            if (!c || d.length <= 0) return;
            d = d.map(function(a) {
                return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta]
            });
            a.splice(0, a.length);
            (g || (g = b("WebStorage"))).setItemGuarded(c, j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(), b("FBJSON").stringify(d))
        }
    };
    e.exports = a
}), null);
__d("QueryString", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        Object.keys(a).sort().forEach(function(c) {
            var d = a[c];
            if (d === void 0) return;
            if (d === null) {
                b.push(c);
                return
            }
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        });
        return b.join("&")
    }

    function b(a, b) {
        b === void 0 && (b = !1);
        var c = {};
        if (a === "") return c;
        a = a.split("&");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].split("=", 2),
                f = decodeURIComponent(e[0]);
            if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
            c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
        }
        return c
    }

    function c(a, b) {
        return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g.encode(b))
    }
    var g = {
        encode: a,
        decode: b,
        appendToUrl: c
    };
    d = g;
    e.exports = d
}), null);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "err"], (function(a, b, c, d, e, f, g) {
    function h() {
        if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw b("err")("getCrossOriginTransport: %s", a.message)
        }
    }
    h.withCredentials = function() {
        var a = h();
        "withCredentials" in a || g(0, 5150);
        var b = a.open;
        a.open = function() {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = h
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f) {
    var g, h = {
        rewriteURI: function(a) {
            if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
            var c = h._getRewrittenSubdomain(a);
            c !== null && c !== void 0 && (a = a.setSubdomain(c));
            return a
        },
        getTransportBuilderForURI: function(a) {
            return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
        },
        isRewriteSafe: function(a) {
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
            var c = h._getCurrentURI().getDomain(),
                d = new(g || (g = b("URI")))(a).qualify().getDomain();
            return c === d || h.isRewritten(a)
        },
        isRewritten: function(a) {
            a = a.getQualifiedURI();
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
            var c = a.getSubdomain(),
                d = h._getCurrentURI(),
                e = h._getRewrittenSubdomain(d);
            return a.getDomain() !== d.getDomain() && c === e
        },
        _isWhitelisted: function(a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
        },
        _getRewrittenSubdomain: function(a) {
            a = a.getQualifiedURI().getSubdomain();
            return b("ZeroRewriteRules").rewrite_rules[a]
        },
        _getCurrentURI: function() {
            return new(g || (g = b("URI")))("/").qualify()
        }
    };
    e.exports = h
}), null);
__d("once", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        var b = g(a);
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b
    }

    function g(a) {
        var b = a,
            c;
        a = function() {
            if (b) {
                for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                c = b.apply(this, d);
                b = null
            }
            return c
        };
        return a
    }
}), null);
__d("guid", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
}), null);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    b("Promise").resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || b("Promise");
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    e.exports = a
}), null);
__d("regeneratorRuntime", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
        i = e.exports;

    function j(a, b, c, d) {
        b = Object.create((b || q).prototype);
        d = new z(d || []);
        b._invoke = w(a, c, d);
        return b
    }
    i.wrap = j;

    function k(a, b, c) {
        try {
            return {
                type: "normal",
                arg: a.call(b, c)
            }
        } catch (a) {
            return {
                type: "throw",
                arg: a
            }
        }
    }
    var l = "suspendedStart",
        m = "suspendedYield",
        n = "executing",
        o = "completed",
        p = {};

    function q() {}

    function r() {}

    function s() {}
    var t = s.prototype = q.prototype;
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";

    function a(a) {
        ["next", "throw", "return"].forEach(function(b) {
            a[b] = function(a) {
                return this._invoke(b, a)
            }
        })
    }
    i.isGeneratorFunction = function(a) {
        a = typeof a === "function" && a.constructor;
        return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1
    };
    i.mark = function(a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
        a.prototype = Object.create(t);
        return a
    };
    i.awrap = function(a) {
        return new u(a)
    };

    function u(a) {
        this.arg = a
    }

    function v(a) {
        function c(c, f) {
            var g = a[c](f);
            c = g.value;
            return c instanceof u ? b("Promise").resolve(c.arg).then(d, e) : b("Promise").resolve(c).then(function(a) {
                g.value = a;
                return g
            })
        }
        typeof process === "object" && process.domain && (c = process.domain.bind(c));
        var d = c.bind(a, "next"),
            e = c.bind(a, "throw");
        c.bind(a, "return");
        var f;

        function g(a, d) {
            var e = f ? f.then(function() {
                return c(a, d)
            }) : new(b("Promise"))(function(b) {
                b(c(a, d))
            });
            f = e["catch"](function(a) {});
            return e
        }
        this._invoke = g
    }
    a(v.prototype);
    i.async = function(a, b, c, d) {
        var e = new v(j(a, b, c, d));
        return i.isGeneratorFunction(b) ? e : e.next().then(function(a) {
            return a.done ? a.value : e.next()
        })
    };

    function w(a, b, c) {
        var d = l;
        return function(e, f) {
            if (d === n) throw new Error("Generator is already running");
            if (d === o) {
                if (e === "throw") throw f;
                return B()
            }
            while (!0) {
                var g = c.delegate;
                if (g) {
                    if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
                        c.delegate = null;
                        var h = g.iterator["return"];
                        if (h) {
                            h = k(h, g.iterator, f);
                            if (h.type === "throw") {
                                e = "throw";
                                f = h.arg;
                                continue
                            }
                        }
                        if (e === "return") continue
                    }
                    h = k(g.iterator[e], g.iterator, f);
                    if (h.type === "throw") {
                        c.delegate = null;
                        e = "throw";
                        f = h.arg;
                        continue
                    }
                    e = "next";
                    f = void 0;
                    var i = h.arg;
                    if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;
                    else {
                        d = m;
                        return i
                    }
                    c.delegate = null
                }
                if (e === "next") d === m ? c.sent = f : c.sent = void 0;
                else if (e === "throw") {
                    if (d === l) {
                        d = o;
                        throw f
                    }
                    c.dispatchException(f) && (e = "next", f = void 0)
                } else e === "return" && c.abrupt("return", f);
                d = n;
                h = k(a, b, c);
                if (h.type === "normal") {
                    d = c.done ? o : m;
                    var i = {
                        value: h.arg,
                        done: c.done
                    };
                    if (h.arg === p) c.delegate && e === "next" && (f = void 0);
                    else return i
                } else h.type === "throw" && (d = o, e = "throw", f = h.arg)
            }
        }
    }
    a(t);
    t[h] = function() {
        return this
    };
    t.toString = function() {
        return "[object Generator]"
    };

    function x(a) {
        var b = {
            tryLoc: a[0]
        };
        1 in a && (b.catchLoc = a[1]);
        2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
        this.tryEntries.push(b)
    }

    function y(a) {
        var b = a.completion || {};
        b.type = "normal";
        delete b.arg;
        a.completion = b
    }

    function z(a) {
        this.tryEntries = [{
            tryLoc: "root"
        }], a.forEach(x, this), this.reset(!0)
    }
    i.keys = function(a) {
        var b = [];
        for (var c in a) b.push(c);
        b.reverse();
        return function c() {
            while (b.length) {
                var d = b.pop();
                if (d in a) {
                    c.value = d;
                    c.done = !1;
                    return c
                }
            }
            c.done = !0;
            return c
        }
    };

    function A(a) {
        if (a) {
            var b = a[h];
            if (b) return b.call(a);
            if (typeof a.next === "function") return a;
            if (!isNaN(a.length)) {
                var c = -1;
                b = function b() {
                    while (++c < a.length)
                        if (g.call(a, c)) {
                            b.value = a[c];
                            b.done = !1;
                            return b
                        }
                    b.value = void 0;
                    b.done = !0;
                    return b
                };
                return b.next = b
            }
        }
        return {
            next: B
        }
    }
    i.values = A;

    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    z.prototype = {
        constructor: z,
        reset: function(a) {
            this.prev = 0;
            this.next = 0;
            this.sent = void 0;
            this.done = !1;
            this.delegate = null;
            this.tryEntries.forEach(y);
            if (!a)
                for (var b in this) b.charAt(0) === "t" && g.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0)
        },
        stop: function() {
            this.done = !0;
            var a = this.tryEntries[0];
            a = a.completion;
            if (a.type === "throw") throw a.arg;
            return this.rval
        },
        dispatchException: function(a) {
            if (this.done) throw a;
            var b = this;

            function c(c, d) {
                f.type = "throw";
                f.arg = a;
                b.next = c;
                return !!d
            }
            for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d],
                    f = e.completion;
                if (e.tryLoc === "root") return c("end");
                if (e.tryLoc <= this.prev) {
                    var h = g.call(e, "catchLoc"),
                        i = g.call(e, "finallyLoc");
                    if (h && i) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
                        else if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else if (h) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0)
                    } else if (i) {
                        if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else throw new Error("try statement without catch or finally")
                }
            }
        },
        abrupt: function(a, b) {
            for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && g.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                    var e = d;
                    break
                }
            }
            e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
            d = e ? e.completion : {};
            d.type = a;
            d.arg = b;
            e ? this.next = e.finallyLoc : this.complete(d);
            return p
        },
        complete: function(a, b) {
            if (a.type === "throw") throw a.arg;
            a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b)
        },
        finish: function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) {
                    this.complete(c.completion, c.afterLoc);
                    y(c);
                    return p
                }
            }
        },
        "catch": function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                    var d = c.completion;
                    if (d.type === "throw") {
                        var e = d.arg;
                        y(c)
                    }
                    return e
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(a, b, c) {
            this.delegate = {
                iterator: A(a),
                resultName: b,
                nextLoc: c
            };
            return p
        }
    }
}), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
}), null);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = a.hash, this.$2 = a.translation
        }
        var c = a.prototype;
        c.onStringSerializationError = function(a) {
            var c = "Context not logged.";
            if (!b("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                var d = JSON.stringify(a);
                d != null && (c = d.substr(0, 250))
            } catch (a) {
                c = a.message
            }
            d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
            b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, c, typeof a, d)
        };
        c.onStringMethodUsed = function(a) {
            b("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("FbtPureStringResult", ["FbtResult"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("FbtResult"));
    e.exports = a
}), null);
__d("getFbsResult", ["FbtPureStringResult"], (function(a, b, c, d, e, f) {
    function a(a) {
        return new(b("FbtPureStringResult"))(a.contents, a.errorListener)
    }
    e.exports = a
}), null);
__d("getTranslatedInput", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = "B!N@$T",
        h = {};

    function a(a) {
        var b = a.table;
        typeof b === "string" && b.startsWith(g) && (b in h || (h[b] = JSON.parse(b.substring(g.length))), b = h[b]);
        return {
            table: b,
            args: a.args
        }
    }
}), null);
__d("FbtEnv", ["FbtErrorListenerWWW", "FbtHooks", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    f.setupOnce = a;
    var g, h = b("requireDeferred")("FbtLogging"),
        i = b("requireDeferred")("IntlQtEventFalcoEvent"),
        j = !1;

    function a() {
        if (j) return;
        j = !0;
        (g || (g = b("FbtHooks"))).register({
            errorListener: function(a) {
                return new(b("FbtErrorListenerWWW"))(a)
            },
            getFbsResult: b("getFbsResult"),
            getFbtResult: b("getFbtResult"),
            getTranslatedInput: b("getTranslatedInput"),
            onTranslationOverride: function(a) {
                i.onReady(function(b) {
                    return b.log(function() {
                        return {
                            hash: a
                        }
                    })
                })
            },
            getViewerContext: function() {
                return b("IntlViewerContext")
            },
            logImpression: function(a) {
                return b("promiseDone")(h.load().then(function(b) {
                    return b.logImpression == null ? void 0 : b.logImpression(a)
                }))
            }
        })
    }
}), null);
__d("FbtHooksImpl", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getErrorListener: function(a) {
            return g.errorListener == null ? void 0 : g.errorListener(a)
        },
        logImpression: function(a) {
            g.logImpression == null ? void 0 : g.logImpression(a)
        },
        onTranslationOverride: function(a) {
            g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a)
        },
        getFbsResult: function(a) {
            return g.getFbsResult(a)
        },
        getFbtResult: function(a) {
            return g.getFbtResult(a)
        },
        getTranslatedInput: function(a) {
            var b;
            return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a
        },
        getViewerContext: function() {
            return g.getViewerContext()
        },
        register: function(a) {
            Object.assign(g, a)
        }
    };
    e.exports = a
}), null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], (function(a, b, c, d, e, f) {
    e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce()
}), null);
__d("FbtTable", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        ARG: {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        access: function(a, b, c) {
            if (c >= b.length) {
                typeof a === "string" || Array.isArray(a) || g(0, 21388, JSON.stringify(a));
                return a
            }
            var d = b[c];
            d = d[h.ARG.INDEX];
            if (d == null) return h.access(a, b, c + 1);
            typeof a !== "string" && !Array.isArray(a) || g(0, 20954, typeof a);
            for (var e = 0; e < d.length; ++e) {
                var f = a[d[e]];
                if (f == null) continue;
                f = h.access(f, b, c + 1);
                if (f != null) return f
            }
            return null
        }
    };
    e.exports = h
}), null);
__d("FbtTableAccessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getEnumResult: function(a) {
            return [
                [a], null
            ]
        },
        getGenderResult: function(a, b, c) {
            return [a, b]
        },
        getNumberResult: function(a, b, c) {
            return [a, b]
        },
        getSubstitution: function(a) {
            return [null, a]
        },
        getPronounResult: function(a) {
            return [
                [a, "*"], null
            ]
        }
    };
    e.exports = a
}), null);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations"], (function(a, b, c, d, e, f) {
    a = new Function("IntlVariations", '"use strict"; return (function(n) {' + b("IntlNumberTypeConfig").impl + "});")(b("IntlVariations"));
    e.exports = {
        getVariation: a
    }
}), null);
__d("IntlNumberType", ["FbtNumberType"], (function(a, b, c, d, e, f) {
    a = function(a) {
        return b("FbtNumberType")
    };
    f.get = a
}), null);
__d("IntlVariationResolverImpl", ["invariant", "FbtHooks", "IntlNumberType", "IntlVariations"], (function(a, b, c, d, e, f, g) {
    var h, i = "_1";
    a = {
        EXACTLY_ONE: i,
        getNumberVariations: function(a) {
            var c = b("IntlNumberType").get((h || (h = b("FbtHooks"))).getViewerContext().locale).getVariation(a);
            c & b("IntlVariations").BITMASK_NUMBER || g(0, 11647, c, typeof c);
            return a === 1 ? [i, c, "*"] : [c, "*"]
        },
        getGenderVariations: function(a) {
            a & b("IntlVariations").BITMASK_GENDER || g(0, 11648, a, typeof a);
            return [a, "*"]
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolver", ["IntlVariationResolverImpl"], (function(a, b, c, d, e, f) {
    b("IntlVariationResolverImpl").EXACTLY_ONE;
    a = {
        getNumberVariations: function(a) {
            return b("IntlVariationResolverImpl").getNumberVariations(a)
        },
        getGenderVariations: function(a) {
            return b("IntlVariationResolverImpl").getGenderVariations(a)
        }
    };
    e.exports = a
}), null);
__d("NumberFormatConsts", ["NumberFormatConfig"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("NumberFormatConfig")
        }
    };
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["FbtHooks", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
    var g, h = 3;
    f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var i = {};

    function j(a) {
        i[a] || (i[a] = new RegExp(a, "i"));
        return i[a]
    }
    var k = j(f.reduce(function(a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
    }, ""));

    function l(a, c, d, e, f, g, i) {
        d === void 0 && (d = "");
        e === void 0 && (e = ".");
        f === void 0 && (f = 0);
        g === void 0 && (g = {
            primaryGroupSize: h,
            secondaryGroupSize: h
        });
        var k = g.primaryGroupSize || h;
        g = g.secondaryGroupSize || k;
        i = i && i.digits;
        var l;
        c == null ? l = a.toString() : typeof a === "string" ? l = r(a, c) : l = p(a, c);
        a = l.split(".");
        c = a[0];
        l = a[1];
        if (Math.abs(parseInt(c, 10)).toString().length >= f) {
            a = "$1" + d + "$2$3";
            f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
            k = c.replace(j(f), a);
            if (k != c) {
                c = k;
                f = "(\\d)(\\d{" + (g - 0) + "})(" + b("escapeRegex")(d) + ")";
                g = j(f);
                while ((k = c.replace(g, a)) != c) c = k
            }
        }
        i != null && (c = m(c, i), l = l && m(l, i));
        d = c;
        l && (d += e + l);
        return d
    }

    function m(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== void 0 ? e : a[d]
        }
        return c
    }

    function a(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function n(a, c) {
        var d = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return l(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function o(a) {
        return a && Math.floor(Math.log10(Math.abs(a)))
    }

    function c(a, b, c) {
        var d = o(a),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, o(e) - c + 1);
        e = Math.round(e / a) * a;
        if (d < c) {
            e /= Math.pow(10, -d + c);
            if (b == null) return n(e, c - d - 1)
        }
        return n(e, b)
    }

    function p(a, b) {
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a += "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var q = function(a, b) {
        a = a;
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function r(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b != null ? d + "." + q(a.slice(0, b), b - a.length) : d
    }

    function s(a, c, d) {
        d === void 0 && (d = "");
        var e = u(),
            f = a;
        e && (f = a.split("").map(function(a) {
            return e[a] || a
        }).join("").trim());
        f = f.replace(/^[^\d]*\-/, "\x02");
        f = f.replace(k, "");
        a = b("escapeRegex")(c);
        c = b("escapeRegex")(d);
        d = j("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
        if (!d.test(f)) {
            d = j("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
            if (d.test(f)) {
                f = f.replace(d, "$1\x01$2");
                return t(f)
            }
            d = j("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
            d.test(f) || (f = "");
            return t(f)
        }
        d = j("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
        f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
        return t(f)
    }

    function t(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function u() {
        var a = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale),
            c = {};
        a = a.numberingSystemData && a.numberingSystemData.digits;
        if (a == null) return null;
        for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
        return c
    }

    function d(a) {
        var c = b("NumberFormatConsts").get((g || (g = b("FbtHooks"))).getViewerContext().locale);
        return s(a, c.decimalSeparator || ".", c.numberDelimiter)
    }
    var v = {
        formatNumber: a,
        formatNumberRaw: l,
        formatNumberWithThousandDelimiters: n,
        formatNumberWithLimitedSigFig: c,
        parseNumber: d,
        parseNumberRaw: s,
        truncateLongNumber: r,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = v.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b = b;
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = v
}), null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        get: function(a) {
            return b("IntlPhonologicalRules")
        }
    };
    e.exports = a
}), null);
__d("IntlRedundantStops", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        equivalencies: {
            ".": ["\u0964", "\u104b", "\u3002"],
            "\u2026": ["\u0e2f", "\u0eaf", "\u1801"],
            "!": ["\uff01"],
            "?": ["\uff1f"]
        },
        redundancies: {
            "?": ["?", ".", "!", "\u2026"],
            "!": ["!", "?", "."],
            ".": [".", "!"],
            "\u2026": ["\u2026", ".", "!"]
        }
    })
}), null);
__d("IntlPunctuation", ["FbtHooks", "IntlPhonologicalRewrites", "IntlRedundantStops"], (function(a, b, c, d, e, f) {
    f.applyPhonologicalRules = a;
    f.dedupeStops = c;
    var g;
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    f.PUNCT_CHAR_CLASS = d;
    var h = {};

    function i(a) {
        var b;
        b = (b = a) != null ? b : "";
        var c = h[b];
        c == null && (c = h[b] = j(a));
        return c
    }

    function j(a) {
        var c = [];
        a = b("IntlPhonologicalRewrites").get(a);
        for (var d in a.patterns) {
            var e = a.patterns[d];
            for (var f in a.meta) {
                var g = new RegExp(f.slice(1, -1), "g"),
                    h = a.meta[f];
                d = d.replace(g, h);
                e = e.replace(g, h)
            }
            e === "javascript" && (e = function(a) {
                return a.slice(1).toLowerCase()
            });
            c.push([new RegExp(d.slice(1, -1), "g"), e])
        }
        return c
    }

    function a(a) {
        var c = i((g || (g = b("FbtHooks"))).getViewerContext().locale);
        a = a;
        for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = e[0];
            e = e[1];
            a = a.replace(f, e)
        }
        return a.replace(/\x01/g, "")
    }
    var k = new Map();
    for (var l in b("IntlRedundantStops").equivalencies)
        for (var e = [l].concat(b("IntlRedundantStops").equivalencies[l]), a = Array.isArray(e), c = 0, e = a ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (a) {
                if (c >= e.length) break;
                f = e[c++]
            } else {
                c = e.next();
                if (c.done) break;
                f = c.value
            }
            d = f;
            k.set(d, l)
        }
    var m = new Map();
    for (var n in b("IntlRedundantStops").redundancies) m.set(n, new Set(b("IntlRedundantStops").redundancies[n]));

    function o(a, b) {
        a = k.get(a);
        b = k.get(b);
        return ((a = m.get(a)) == null ? void 0 : a.has(b)) === !0
    }

    function c(a, b) {
        return o(a[a.length - 1], b) ? "" : b
    }
}), null);
__d("substituteTokens", ["invariant", "IntlPunctuation"], (function(a, b, c, d, e, f, g) {
    var h = new RegExp("\\{([^}]+)\\}(" + b("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");

    function i(a) {
        return a
    }

    function a(a, c) {
        if (c == null) return a;
        typeof c === "object" || g(0, 6041, a);
        var d = [],
            e = [];
        a = a.replace(h, function(a, f, g) {
            a = c[f];
            if (a != null && typeof a === "object") {
                d.push(a);
                e.push(f);
                return "\x17" + g
            } else if (a === null) return "";
            return String(a) + b("IntlPunctuation").dedupeStops(String(a), g)
        }).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);
        if (a.length === 1) return a[0];
        var f = a[0] !== "" ? [a[0]] : [];
        for (var j = 0; j < d.length; j++) f.push(i(d[j])), a[j + 1] !== "" && f.push(a[j + 1]);
        return f
    }
    e.exports = a
}), null);
__d("fbt", ["invariant", "FbtEnv", "FbtHooks", "FbtQTOverrides", "FbtResultBase", "FbtTable", "FbtTableAccessor", "GenderConst", "IntlVariationResolver", "intlNumUtils", "substituteTokens"], (function(a, b, c, d, e, f, g) {
    var h;
    b("FbtEnv").setupOnce();
    var i = b("FbtQTOverrides").overrides,
        j = b("IntlVariationResolver").getGenderVariations,
        k = b("IntlVariationResolver").getNumberVariations,
        l = !1,
        m = b("FbtTable").ARG,
        n = {
            NUMBER: 0,
            GENDER: 1
        },
        o = {
            OBJECT: 0,
            POSSESSIVE: 1,
            REFLEXIVE: 2,
            SUBJECT: 3
        },
        p = {};
    c = function() {};
    c._ = function(a, c, d) {
        if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && l) return {
            text: a,
            fbt: !0,
            hashKey: d.hk
        };
        a = (h || (h = b("FbtHooks"))).getTranslatedInput({
            table: a,
            args: c,
            options: d
        });
        c = a.table;
        d = a.args;
        a = {};
        if (c.__vcg != null) {
            d = d || [];
            var e = (h || (h = b("FbtHooks"))).getViewerContext();
            e = e.GENDER;
            var f = j(e);
            d.unshift(b("FbtTableAccessor").getGenderResult(f, null, e))
        }
        d && (typeof c !== "string" && (c = b("FbtTable").access(c, d, 0)), a = Object.assign.apply(Object, [{}].concat(d.map(function(a) {
            return a[m.SUBSTITUTION] || {}
        }))), c !== null || g(0, 479));
        var k;
        if (Array.isArray(c)) {
            f = c[0];
            k = c[1];
            e = "1_" + k;
            i[e] != null && i[e] !== "" && (f = i[e], (h || (h = b("FbtHooks"))).onTranslationOverride(k));
            (h || (h = b("FbtHooks"))).logImpression(k)
        } else if (typeof c === "string") f = c;
        else throw new Error("Table access did not result in string: " + (c === void 0 ? "undefined" : JSON.stringify(c)) + ", Type: " + typeof c);
        d = p[f];
        e = q(a);
        if (d && !e) return d;
        else {
            c = b("substituteTokens")(f, a);
            d = s(c, f, k);
            e || (p[f] = d);
            return d
        }
    };

    function q(a) {
        for (var b in a) return !0;
        return !1
    }
    c._enum = function(a, c) {
        return b("FbtTableAccessor").getEnumResult(a)
    };
    c._subject = function(a) {
        return b("FbtTableAccessor").getGenderResult(j(a), null, a)
    };
    c._param = function(a, c, d) {
        var e;
        e = (e = {}, e[a] = c, e);
        if (d)
            if (d[0] === n.NUMBER) {
                var f = d.length > 1 ? d[1] : c;
                typeof f === "number" || g(0, 484);
                var h = k(f);
                typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
                return b("FbtTableAccessor").getNumberResult(h, e, f)
            } else if (d[0] === n.GENDER) {
            d.length > 1 || g(0, 485);
            a = d[1];
            c = j(a);
            return b("FbtTableAccessor").getGenderResult(c, e, a)
        } else g(0, 486);
        else return b("FbtTableAccessor").getSubstitution(e)
    };
    c._plural = function(a, c, d) {
        var e = k(a),
            f = {};
        c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
        return b("FbtTableAccessor").getNumberResult(e, f, a)
    };
    c._pronoun = function(a, c, d) {
        c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 11835);
        d = r(a, c);
        return b("FbtTableAccessor").getPronounResult(d)
    };

    function r(a, c) {
        switch (c) {
            case b("GenderConst").NOT_A_PERSON:
                return a === o.OBJECT || a === o.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").FEMALE_SINGULAR:
            case b("GenderConst").FEMALE_SINGULAR_GUESS:
                return b("GenderConst").FEMALE_SINGULAR;
            case b("GenderConst").MALE_SINGULAR:
            case b("GenderConst").MALE_SINGULAR_GUESS:
                return b("GenderConst").MALE_SINGULAR;
            case b("GenderConst").MIXED_UNKNOWN:
            case b("GenderConst").FEMALE_PLURAL:
            case b("GenderConst").MALE_PLURAL:
            case b("GenderConst").NEUTER_PLURAL:
            case b("GenderConst").UNKNOWN_PLURAL:
                return b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").NEUTER_SINGULAR:
            case b("GenderConst").UNKNOWN_SINGULAR:
                return a === o.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL
        }
        return b("GenderConst").NOT_A_PERSON
    }
    c._name = function(a, c, d) {
        var e = j(d),
            f = {};
        f[a] = c;
        return b("FbtTableAccessor").getGenderResult(e, f, d)
    };

    function s(a, c, d) {
        a = typeof a === "string" ? [a] : a;
        var e = (h || (h = b("FbtHooks"))).getErrorListener({
            translation: c,
            hash: d
        });
        a = h.getFbtResult({
            contents: a,
            errorListener: e,
            patternString: c,
            patternHash: d
        });
        return a
    }
    c.enableJsonExportMode = function() {
        l = !0
    };
    c.disableJsonExportMode = function() {
        l = !1
    };

    function a(a) {
        return a instanceof b("FbtResultBase")
    }
    c.isFbtInstance = a;
    e.exports = c
}), null);
__d("getAsyncHeaders", ["LSD", "ZeroCategoryHeader", "gkx", "isFacebookURI", "killswitch"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var c = {},
            d = b("isFacebookURI")(a);
        d && b("ZeroCategoryHeader").value && (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
        a = g(a);
        d && a && (c["X-FB-LSD"] = a);
        return c
    }

    function g(a) {
        if (b("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
        if (!b("gkx")("1952739")) return null;
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin ? null : b("LSD").token
    }
}), null);
__d("Log", [], (function(a, b, c, d, e, f) {
    "use strict";
    f.setLevel = a;
    var g = -1;
    b = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    f.Level = b;
    c = function(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
        var h = 0,
            i = c.replace(/%s/g, function() {
                return String(e[h++])
            }),
            j = window.console;
        j && g >= b && j[a in j ? a : "log"](i)
    };
    f.log = c;

    function a(a) {
        g = a
    }
    d = c.bind(null, "debug", b.DEBUG);
    f.debug = d;
    e = c.bind(null, "info", b.INFO);
    f.info = e;
    a = c.bind(null, "warn", b.WARNING);
    f.warn = a;
    d = c.bind(null, "error", b.ERROR);
    f.error = d
}), null);
__d("Banzai", ["cr:1642797"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1642797")
}), null);
__d("requestAnimationFrame", ["TimeSlice", "TimerStorage", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        function c(c) {
            b("TimerStorage").unset(b("TimerStorage").ANIMATION_FRAME, d), a(c)
        }
        b("TimeSlice").copyGuardForWrapper(a, c);
        c.__originalCallback = a;
        var d = b("requestAnimationFrameAcrossTransitions")(c);
        b("TimerStorage").set(b("TimerStorage").ANIMATION_FRAME, d);
        return d
    }
}), null);
__d("PersistedQueue", ["BaseEventEmitter", "ExecutionEnvironment", "FBJSON", "Run", "WebStorage", "WebStorageMutex", "err", "guid", "nullthrows", "performanceAbsoluteNow", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 24 * 60 * 60 * 1e3,
        j = 30 * 1e3,
        k = new(b("BaseEventEmitter"))(),
        l;

    function m() {
        if (l === void 0) {
            var a = "check_quota";
            try {
                var c = (g || (g = b("WebStorage"))).getLocalStorage();
                c ? (c.setItem(a, a), c.removeItem(a), l = c) : l = null
            } catch (a) {
                l = null
            }
        }
        return l
    }

    function n(a) {
        var b = a.prev,
            c = a.next;
        c && (c.prev = b);
        b && (b.next = c);
        a.next = null;
        a.prev = null
    }

    function o(a) {
        return {
            item: a,
            next: null,
            prev: null
        }
    }
    var p = {},
        q = {};
    a = function() {
        function a(a, c) {
            var d = this;
            this.$5 = 0;
            this.$3 = a;
            this.$9 = a + "^$" + b("guid")();
            if (c) {
                this.$6 = (a = c.max_age_in_ms) != null ? a : i;
                this.$10 = c.migrate
            } else this.$6 = i;
            this.$7 = [k.addListener("active", function() {
                d.$8 != null && (d.$8 = null, d.$11())
            }), k.addListener("inactive", function() {
                d.$8 == null && (d.$8 = Date.now(), d.$12())
            })];
            (b("ExecutionEnvironment").canUseDOM || b("ExecutionEnvironment").isInWorker) && b("requestAnimationFrame")(function() {
                return d.$11()
            })
        }
        var c = a.prototype;
        c.isActive = function() {
            var a = this.$8;
            if (a == null) return !0;
            if (Date.now() - a > j) {
                this.$8 = null;
                k.emit("active", null);
                return !0
            }
            return !1
        };
        c.$11 = function() {
            this.$13(), this.$14()
        };
        c.$12 = function() {
            this.$15()
        };
        a.create = function(c, d) {
            if (c in p) throw b("err")("Duplicate queue created: " + c);
            d = new a(c, d);
            p[c] = d;
            var e = q[c];
            e && (d.setHandler(e), delete q[c]);
            return d
        };
        a.setHandler = function(a, b) {
            var c = p[a];
            c ? c.setHandler(b) : q[a] = b
        };
        c.destroy = function() {
            this.$7.forEach(function(a) {
                return a.remove()
            })
        };
        a.destroy = function(a) {
            p[a].destroy(), delete p[a], delete q[a]
        };
        c.setHandler = function(a) {
            this.$4 = a;
            this.$14();
            return this
        };
        c.$14 = function() {
            this.$5 > 0 && this.$4 && this.$4(this)
        };
        c.length = function() {
            return this.$5
        };
        c.enumeratedLength = function() {
            return this.$16().length
        };
        c.$13 = function() {
            var c = this,
                a = m();
            if (!a) return;
            var d = this.$3 + "^$",
                e = new(b("WebStorageMutex"))(d),
                f = this.$10;
            e.lock(function(e) {
                var g = Date.now() - c.$6;
                for (var h = 0; h < a.length; h++) {
                    var i = a.key(h);
                    if (typeof i === "string" && i.startsWith(d)) {
                        var j = a.getItem(i);
                        a.removeItem(i);
                        if (j != null && j.startsWith("{")) {
                            i = b("FBJSON").parse(b("nullthrows")(j));
                            if (i.ts > g) try {
                                for (var j = i.items, i = Array.isArray(j), k = 0, j = i ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var l;
                                    if (i) {
                                        if (k >= j.length) break;
                                        l = j[k++]
                                    } else {
                                        k = j.next();
                                        if (k.done) break;
                                        l = k.value
                                    }
                                    l = l;
                                    l = f != null ? f(l) : l;
                                    c.$17(l)
                                }
                            } catch (a) {}
                        }
                    }
                }
                e.unlock()
            })
        };
        c.$15 = function() {
            var a = m();
            if (!a) return;
            var c = this.$16();
            if (c.length === 0) {
                a.getItem(this.$9) != null && a.removeItem(this.$9);
                return
            }(g || (g = b("WebStorage"))).setItemGuarded(a, this.$9, b("FBJSON").stringify({
                items: c.map(function(a) {
                    return a
                }),
                ts: (h || (h = b("performanceAbsoluteNow")))()
            }))
        };
        c.$16 = function() {
            var a = this.$1,
                b = [];
            if (!a) return b;
            do b.push(a.item); while (a = a.prev);
            return b.reverse()
        };
        c.markItemAsCompleted = function(a) {
            var b = a.prev;
            n(a);
            this.$1 === a && (this.$1 = b);
            this.$5--;
            this.isActive() || this.$15()
        };
        c.markItemAsFailed = function(a) {
            n(a);
            var b = this.$2;
            if (b) {
                var c = b.prev;
                c && (c.next = a, a.prev = c);
                a.next = b;
                b.prev = a
            }
            this.$2 = a;
            this.isActive() && this.$14()
        };
        c.markItem = function(a, b) {
            b ? this.markItemAsCompleted(a) : this.markItemAsFailed(a)
        };
        c.$17 = function(a) {
            a = o(a);
            var b = this.$1;
            b && (b.next = a, a.prev = b);
            this.$1 = a;
            this.$2 || (this.$2 = a);
            this.$5++
        };
        c.wrapAndEnqueueItem = function(a) {
            this.$17(a), this.isActive() ? this.$14() : this.$15()
        };
        c.dequeueItem = function() {
            if (this.$8 != null) return null;
            var a = this.$2;
            if (!a) return null;
            this.$2 = a.next;
            return a
        };
        return a
    }();
    e.exports = a;
    a.eventEmitter = k;
    if (b("ExecutionEnvironment").canUseDOM) {
        var r = b("Run").maybeOnBeforeUnload(function() {
            k.emit("inactive", null), r == null ? void 0 : r.remove()
        }, !1);
        if (!r) var s = b("Run").onUnload(function() {
            k.emit("inactive", null), s.remove()
        })
    }
}), null);
__d("isPromise", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        return !!a && typeof a.then === "function"
    }
}), null);
__d("FalcoLoggerInternal", ["AnalyticsCoreData", "BaseEventEmitter", "FBLogger", "PersistedQueue", "Random", "isPromise", "performanceAbsoluteNow", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    f.create = c;
    var g, h = 500 * 1024 * .6;

    function a(a) {
        "rate" in a && (a.policy = {
            r: a.rate
        });
        var b = a.extra;
        typeof b !== "string" && (a.extra = JSON.stringify(b));
        return a
    }
    var i = b("PersistedQueue").create("falco_queue_log", {
            migrate: a
        }),
        j = b("PersistedQueue").create("falco_queue_immediately", {
            migrate: a
        }),
        k = b("PersistedQueue").create("falco_queue_critical", {
            migrate: a
        }),
        l = new(b("BaseEventEmitter"))();
    f.observable = l;

    function m(a, c, d, e) {
        var f, i, j, k, m, n;
        return b("regeneratorRuntime").async(function(o) {
            while (1) switch (o.prev = o.next) {
                case 0:
                    f = b("Random").coinflip(c.r);
                    if (!(f || b("AnalyticsCoreData").enable_observer)) {
                        o.next = 18;
                        break
                    }
                    i = (g || (g = b("performanceAbsoluteNow")))();
                    if (!f) {
                        o.next = 17;
                        break
                    }
                    j = d();
                    if (!b("isPromise")(j)) {
                        o.next = 11;
                        break
                    }
                    o.next = 8;
                    return b("regeneratorRuntime").awrap(j);
                case 8:
                    k = o.sent;
                    o.next = 12;
                    break;
                case 11:
                    k = j;
                case 12:
                    m = JSON.stringify(k);
                    if (!(m.length > h)) {
                        o.next = 16;
                        break
                    }
                    b("FBLogger")("falco", "oversized_message:" + a).warn('Dropping event "%s" due to exceeding the max size %s at %s', a, h, m.length);
                    return o.abrupt("return");
                case 16:
                    e.wrapAndEnqueueItem({
                        name: a,
                        policy: c,
                        time: i,
                        extra: m
                    });
                case 17:
                    b("AnalyticsCoreData").enable_observer && (n = function() {
                        var a;
                        return (a = j) != null ? a : d()
                    }, l.emit("event", {
                        name: a,
                        time: i,
                        sampled: f,
                        getData: n,
                        policy: c
                    }));
                case 18:
                case "end":
                    return o.stop()
            }
        }, null, this)
    }

    function c(a, b) {
        return {
            log: function(c) {
                m(a, b, c, i)
            },
            logAsync: function(c) {
                m(a, b, c, i)
            },
            logImmediately: function(c) {
                m(a, b, c, j)
            },
            logCritical: function(c) {
                m(a, b, c, k)
            }
        }
    }
}), null);
__d("OdsWebBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1838142");
    c = b("FalcoLoggerInternal").create("ods_web_batch", a);
    e.exports = c
}), null);
__d("ODS", ["ExecutionEnvironment", "OdsWebBatchFalcoEvent", "Random", "Run", "clearTimeout", "gkx", "setTimeout", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    var g, h = b("ExecutionEnvironment").canUseDOM || b("ExecutionEnvironment").isInWorker,
        i = {};

    function j(a, b, c, d, e) {
        var f;
        d === void 0 && (d = 1);
        e === void 0 && (e = 1);
        var h = (f = i[b]) != null ? f : null;
        if (h != null && h <= 0) return;
        g = g || {};
        var j = g[a] || (g[a] = {}),
            k = j[b] || (j[b] = {}),
            m = k[c] || (k[c] = [0, null]),
            n = Number(d),
            o = Number(e);
        h > 0 && (n /= h, o /= h);
        if (!isFinite(n) || !isFinite(o)) return;
        m[0] += n;
        if (arguments.length >= 5) {
            var p = m[1];
            p == null && (p = 0);
            m[1] = p + o
        }
        l()
    }
    var k;

    function l() {
        if (k != null) return;
        k = b("setTimeout")(function() {
            m.flush()
        }, b("gkx")("708253") ? 13e3 / 2 : 5e3)
    }
    var m = {
        setEntitySample: function(a, c) {
            if (!h) return;
            i[a] = b("Random").random() < c ? c : 0
        },
        bumpEntityKey: function(a, b, c, d) {
            d === void 0 && (d = 1);
            if (!h) return;
            j(a, b, c, d)
        },
        bumpFraction: function(a, b, c, d, e) {
            d === void 0 && (d = 1);
            e === void 0 && (e = 1);
            if (!h) return;
            j(a, b, c, d, e)
        },
        flush: function(a) {
            a === void 0 && (a = "normal");
            if (!h) return;
            b("clearTimeout")(k);
            k = null;
            if (g == null) return;
            var c = g;
            g = null;

            function d() {
                return {
                    batch: c
                }
            }
            a === "critical" ? b("OdsWebBatchFalcoEvent").logCritical(d) : b("OdsWebBatchFalcoEvent").log(d)
        }
    };
    h && b("Run").onUnload(function() {
        m.flush("critical")
    });
    a = m;
    e.exports = a
}), null);
__d("Locale", ["SiteData"], (function(a, b, c, d, e, f) {
    function a() {
        return b("SiteData").is_rtl
    }
    e.exports = {
        isRTL: a
    }
}), null);
__d("JstlMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1814852");
    c = b("FalcoLoggerInternal").create("jstl_migration", a);
    e.exports = c
}), null);
__d("getDataWithLoggerOptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, b) {
        return babelHelpers["extends"]({}, a, {
            __options: babelHelpers["extends"]({}, {
                event_time: Date.now() / 1e3
            }, b)
        })
    }
}), null);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;

    function a(a, c, d, e) {
        var f = b("getDataWithLoggerOptions")(c, e);
        c = a.split(":")[0];
        var g = a.split(":")[1];
        c == "logger" ? b("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: g,
                payload: f
            }
        }) : b("Banzai").post(a, f, d);
        h
    }
    c = {
        log: a,
        serializeVector: function(a) {
            if (!a) return a;
            if (Array.isArray(a)) return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            if (!a) return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= b.length) break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]") return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}), null);
__d("$InternalEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function i(a) {
        var b = h.get(a);
        if (b !== void 0) return b;
        b = Object.getOwnPropertyNames(a);
        b = new Set(b.map(function(b) {
            return a[b]
        }));
        h.set(a, b);
        return b
    }
    var j = Object.preventExtensions(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return i(this).has(a)
            }
        },
        cast: {
            value: function(a) {
                return this.isValid(a) ? a : void 0
            }
        },
        members: {
            value: function() {
                return i(this).values()
            }
        }
    }));

    function a(a) {
        var b = Object.create(j);
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && Object.defineProperty(b, c, {
            value: a[c]
        });
        Object.preventExtensions(b);
        return b
    }
    var k = Object.preventExtensions(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return typeof a === "string" ? g.call(this, a) : !1
            }
        },
        cast: {
            value: function(a) {
                return this.isValid(a) ? a : void 0
            }
        },
        members: {
            value: function() {
                return Object.getOwnPropertyNames(this)
            }
        }
    }));
    a.Mirrored = function(a) {
        var b = Object.create(k);
        for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
            value: a[c]
        });
        Object.preventExtensions(b);
        return b
    };
    Object.freeze(a);
    Object.freeze(a.Mirrored);
    e.exports = a
}), null);
__d("BladeRunnerTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum").Mirrored(["WEB_BR_MQTT", "WEB_RS_MQTT", "WEB_RS_STARGATE"]);
    f.Transport = a;
    c = {
        REQUEST: 1,
        DATA: 2,
        DATA_ACK: 3,
        STATUS_UPDATE: 4,
        REWRITE_REQUEST: 5,
        LOG: 6
    };
    f.StreamFrameType = c;
    d = {
        BLADE_RUNNER: 1,
        GATEWAY: 2
    };
    f.StreamRequestType = d;
    e = {
        ACCEPTED: 1,
        REJECTED: 2,
        STARTED: 3,
        PAUSED: 4,
        CLOSED: 5
    };
    f.StreamStatus = e
}), null);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g) {
    e.exports = a;

    function a(a, b) {
        a = b === void 0 ? [0, a] : [a, b];
        b = a[0];
        a = a[1];
        a > b || g(0, 1180, a, b);
        var c = this.random || Math.random;
        return Math.floor(b + c() * (a - b))
    }
}), null);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f) {
    f.getNewClientID = a;
    f.isExistingClientID = c;
    var g = new Set();

    function a() {
        var a = Date.now();
        a = a + ":" + (b("randomInt")(0, 4294967295) + 1);
        g.add(a);
        return a
    }

    function c(a) {
        return g.has(a)
    }
}), null);
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
}), null);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var c;
        c = a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement;
        return !a || !("getBoundingClientRect" in a) || !b("containsNode")(c, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : b("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
    }
}), null);
__d("isStringNullOrEmpty", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        return a == null || a === ""
    }
}), null);
__d("CurrentLocale", ["LocaleInitialData"], (function(a, b, c, d, e, f) {
    a = {
        get: function() {
            return b("LocaleInitialData").locale
        }
    };
    c = a;
    e.exports = c
}), null);
__d("forEachObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = Object.prototype.hasOwnProperty;

    function a(a, b, c) {
        for (var d in a) {
            var e = d;
            g.call(a, e) && b.call(c, a[e], e, a)
        }
    }
}), null);
__d("JSResource", ["JSResourceReference"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = {};

    function h(a, b) {
        g[a] = b
    }

    function i(a) {
        return g[a]
    }

    function a(a) {
        a = a;
        var c = i(a);
        if (c) return c;
        c = new(b("JSResourceReference"))(a);
        h(a, c);
        return c
    }
    a.Reference = b("JSResourceReference");
    a.loadAll = b("JSResourceReference").loadAll
}), null);
__d("PerfXSharedFields", ["CurrentLocale", "Locale", "SiteData"], (function(a, b, c, d, e, f) {
    var g = {
        addCommonValues: function(a) {
            var c = window.navigator;
            c && c.hardwareConcurrency !== void 0 && (a.num_cores = c.hardwareConcurrency);
            c && c.deviceMemory && (a.ram_gb = c.deviceMemory);
            c && c.connection && (typeof c.connection.downlink === "number" && (a.downlink_megabits = c.connection.downlink), typeof c.connection.effectiveType === "string" && (a.effective_connection_type = c.connection.effectiveType), typeof c.connection.rtt === "number" && (a.rtt_ms = c.connection.rtt));
            a.client_push_phase = b("SiteData").push_phase;
            a.client_revision = b("SiteData").client_revision;
            b("SiteData").server_revision != null && (a.server_revision = b("SiteData").server_revision);
            a.locale = b("CurrentLocale").get();
            a.isRTL = Number(b("Locale").isRTL());
            return a
        },
        getCommonData: function() {
            var a = {};
            g.addCommonValues(a);
            return a
        }
    };
    e.exports = g
}), null);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return typeof process === "object" && (typeof process.versions === "object" && typeof process.versions.node !== "undefined") ? !0 : !1
    }

    function h(a) {
        return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a))
    }

    function i(a) {
        return a instanceof ArrayBuffer
    }

    function j(a) {
        return !g() ? !1 : Buffer.isBuffer(a)
    }
    var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";

    function a(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new A(a);
        var d = a.readUncompressedLength();
        if (d === -1) throw new Error("Invalid Snappy bitstream");
        if (b) {
            b = new Uint8Array(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        } else if (c) {
            b = new ArrayBuffer(d);
            c = new Uint8Array(b);
            if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream")
        } else {
            b = Buffer.alloc(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        }
        return b
    }

    function b(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new x(a);
        var d = a.maxCompressedLength(),
            e, f, g;
        b ? (e = new Uint8Array(d), g = a.compressToBuffer(e)) : c ? (e = new ArrayBuffer(d), f = new Uint8Array(e), g = a.compressToBuffer(f)) : (e = Buffer.alloc(d), g = a.compressToBuffer(e));
        if (!e.slice) {
            f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
            if (b) return f;
            else if (c) return f.buffer;
            else throw new Error("not implemented")
        }
        return e.slice(0, g)
    }
    c = 16;
    var l = 1 << c,
        m = 14,
        n = new Array(m + 1);

    function o(a, b) {
        return a * 506832829 >>> b
    }

    function p(a, b) {
        return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
    }

    function q(a, b, c) {
        return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
    }

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function s(a, b, c, d, e) {
        c <= 60 ? (d[e] = c - 1 << 2, e += 1) : c < 256 ? (d[e] = 60 << 2, d[e + 1] = c - 1, e += 2) : (d[e] = 61 << 2, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3);
        r(a, b, d, e, c);
        return e + c
    }

    function t(a, b, c, d) {
        if (d < 12 && c < 2048) {
            a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5);
            a[b + 1] = c & 255;
            return b + 2
        } else {
            a[b] = 2 + (d - 1 << 2);
            a[b + 1] = c & 255;
            a[b + 2] = c >>> 8;
            return b + 3
        }
    }

    function u(a, b, c, d) {
        while (d >= 68) b = t(a, b, c, 64), d -= 64;
        d > 64 && (b = t(a, b, c, 60), d -= 60);
        return t(a, b, c, d)
    }

    function v(a, b, c, d, e) {
        var f = 1;
        while (1 << f <= c && f <= m) f += 1;
        f -= 1;
        var g = 32 - f;
        typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
        f = n[f];
        var h;
        for (h = 0; h < f.length; h++) f[h] = 0;
        h = b + c;
        var i = b,
            j = b,
            k, l, r, t, v, w = !0,
            x = 15;
        if (c >= x) {
            c = h - x;
            b += 1;
            x = o(p(a, b), g);
            while (w) {
                t = 32;
                l = b;
                do {
                    b = l;
                    k = x;
                    v = t >>> 5;
                    t += 1;
                    l = b + v;
                    if (b > c) {
                        w = !1;
                        break
                    }
                    x = o(p(a, l), g);
                    r = i + f[k];
                    f[k] = b - i
                } while (!q(a, b, r));
                if (!w) break;
                e = s(a, j, b - j, d, e);
                do {
                    v = b;
                    k = 4;
                    while (b + k < h && a[b + k] === a[r + k]) k += 1;
                    b += k;
                    l = v - r;
                    e = u(d, e, l, k);
                    j = b;
                    if (b >= c) {
                        w = !1;
                        break
                    }
                    t = o(p(a, b - 1), g);
                    f[t] = b - 1 - i;
                    v = o(p(a, b), g);
                    r = i + f[v];
                    f[v] = b - i
                } while (q(a, b, r));
                if (!w) break;
                b += 1;
                x = o(p(a, b), g)
            }
        }
        j < h && (e = s(a, j, h - j, d, e));
        return e
    }

    function w(a, b, c) {
        do b[c] = a & 127, a = a >>> 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
        return c
    }

    function x(a) {
        this.array = a
    }
    x.prototype.maxCompressedLength = function() {
        var a = this.array.length;
        return 32 + a + Math.floor(a / 6)
    };
    x.prototype.compressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = 0,
            e = 0,
            f;
        e = w(c, a, e);
        while (d < c) f = Math.min(c - d, l), e = v(b, d, f, a, e), d += f;
        return e
    };
    var y = [0, 255, 65535, 16777215, 4294967295];

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function z(a, b, c, d) {
        var e;
        for (e = 0; e < d; e++) a[b + e] = a[b - c + e]
    }

    function A(a) {
        this.array = a, this.pos = 0
    }
    A.prototype.readUncompressedLength = function() {
        var a = 0,
            b = 0,
            c, d;
        while (b < 32 && this.pos < this.array.length) {
            c = this.array[this.pos];
            this.pos += 1;
            d = c & 127;
            if (d << b >>> b !== d) return -1;
            a |= d << b;
            if (c < 128) return a;
            b += 7
        }
        return -1
    };
    A.prototype.uncompressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = this.pos,
            e = 0,
            f, g, h, i;
        while (d < b.length) {
            f = b[d];
            d += 1;
            if ((f & 3) === 0) {
                g = (f >>> 2) + 1;
                if (g > 60) {
                    if (d + 3 >= c) return !1;
                    h = g - 60;
                    g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                    g = (g & y[h]) + 1;
                    d += h
                }
                if (d + g > c) return !1;
                r(b, d, a, e, g);
                d += g;
                e += g
            } else {
                switch (f & 3) {
                    case 1:
                        g = (f >>> 2 & 7) + 4;
                        i = b[d] + (f >>> 5 << 8);
                        d += 1;
                        break;
                    case 2:
                        if (d + 1 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8);
                        d += 2;
                        break;
                    case 3:
                        if (d + 3 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                        d += 4;
                        break;
                    default:
                        break
                }
                if (i === 0 || i > e) return !1;
                z(a, e, i, g);
                e += g
            }
        }
        return !0
    };
    e.exports.uncompress = a;
    e.exports.compress = b
}), null);
__d("SnappyCompressUtil", ["SnappyCompress"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        compressUint8ArrayToSnappy: function(c) {
            if (c == null) return null;
            var d = null;
            try {
                d = b("SnappyCompress").compress(c)
            } catch (a) {
                return null
            }
            c = "";
            for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
            return a.btoa(c)
        },
        compressStringToSnappy: function(b) {
            if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
            var c = new a.Uint8Array(b.length);
            for (var d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                if (e > 127) return null;
                c[d] = e
            }
            return g.compressUint8ArrayToSnappy(c)
        },
        compressStringToSnappyBinary: function(c) {
            if (a.Uint8Array === void 0) return null;
            var d = null;
            if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
            else {
                d = new a.Uint8Array(c.length);
                for (var e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (f > 127) return null;
                    d[e] = f
                }
            }
            f = null;
            try {
                f = b("SnappyCompress").compress(d)
            } catch (a) {
                return null
            }
            return f
        }
    };
    e.exports = g
}), null);
__d("BanzaiCompressionUtils", ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("once")(function() {
            if (a.CompressionStream == null) return !1;
            if (a.Response == null) return !1;
            try {
                new a.CompressionStream("deflate")
            } catch (a) {
                return !1
            }
            return !0
        }),
        i = {
            compressWad: function(a, c) {
                if (a.needs_compression !== !0) {
                    delete a.needs_compression;
                    return
                }
                if (c === "deflate") {
                    i.compressWad(a, "snappy");
                    return
                }
                var d = (g || (g = b("performanceNow")))(),
                    e = JSON.stringify(a.posts),
                    f;
                switch (c) {
                    case "snappy":
                        f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
                        break;
                    case "snappy_base64":
                        f = b("SnappyCompressUtil").compressStringToSnappy(e);
                        break;
                    default:
                        break
                }
                f != null && f.length < e.length ? (a.posts = f, a.compression = c, a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d), a.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", a.snappy_ms)) : a.compression = "";
                delete a.needs_compression
            },
            compressWadAsync: function(c, d) {
                if (d !== "deflate") {
                    i.compressWad(c, "snappy");
                    return b("Promise").resolve()
                }
                if (!h()) return i.compressWadAsync(c, "snappy");
                var e = (g || (g = b("performanceNow")))(),
                    f = JSON.stringify(c.posts),
                    j = new Response(f).body;
                if (!j) {
                    c.compression = "";
                    delete c.needs_compression;
                    return b("Promise").resolve()
                }
                j = j.pipeThrough(new a.CompressionStream("deflate"));
                return new Response(j).arrayBuffer().then(function(a) {
                    a.byteLength < f.length ? (c.posts = new Uint8Array(a), c.compression = d, c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e), c.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", c.snappy_ms)) : c.compression = "", delete c.needs_compression
                })["catch"](function() {
                    c.compression = "", delete c.needs_compression
                })
            },
            outOfBandsPosts: function(a) {
                var b = 0,
                    c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = e.compression === "snappy" || e.compression === "deflate";
                    if (f) {
                        f = new Blob([e.posts], {
                            type: "application/octet-stream"
                        });
                        e.posts = String(b);
                        c["post_" + String(b)] = f;
                        b++
                    }
                }
                return c
            }
        };
    e.exports = i
}), null);
__d("uuid", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            a = a == "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
}), null);