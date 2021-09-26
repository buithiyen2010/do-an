if (self.CavalryLogger) {
    CavalryLogger.start_js(["GQJFLXB"]);
}

__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = !1,
        h = null;

    function a() {
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
}), null);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        a = n.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var i = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function j(a) {
        var b = {};
        a.replace(i, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function k(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function l(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function m(a, c, d) {
        switch (b("hyphenate")(c)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && g(0, 11849, a, c, d);
            default:
                isNaN(d) || !d || d === "0" || g(0, 11850, a, c, d, d + "px");
                break
        }
    }
    var n = {
        set: function(a, c, d) {
            m("Style.set", c, d);
            if (a == null) return;
            a = a.style;
            switch (c) {
                case "opacity":
                    b("getOpacityStyleName")() === "filter" ? a.filter = l(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[b("camelize")(c)] = d
                    } catch (a) {
                        throw b("err")('Style.set: "%s" argument is invalid: %s', c, d)
                    }
            }
        },
        apply: function(a, c) {
            var d;
            for (d in c) m("Style.apply", d, c[d]);
            "opacity" in c && b("getOpacityStyleName")() === "filter" && (c.filter = l(c.opacity), delete c.opacity);
            var e = j(a.style.cssText);
            for (d in c) {
                var f = c[d];
                delete c[d];
                var g = b("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                c[g] = f
            }
            Object.assign(e, c);
            a.style.cssText = k(e)
        },
        get: b("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(n.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (b("getOpacityStyleName")() === "filter") {
                var c = n.get(a, "filter");
                if (c) {
                    c = /(\d+(?:\.\d+)?)/.exec(c);
                    if (c) return parseFloat(c.pop()) / 100
                }
            }
            return n.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (b("containsNode")(document.body, a)) {
                if (n.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (h(a, "overflow") || h(a, "overflowY") || h(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = n;
    e.exports = a
}), null);
__d("Style", ["$", "StyleCore"], (function(a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("StyleCore"), {
        get: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").get(a, c)
        },
        getFloat: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").getFloat(a, c)
        }
    });
    c = a;
    e.exports = c
}), null);
__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        "use strict";
        a.getInstance = function() {
            return h
        };

        function a(a, c, d) {
            var e = this;
            h = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = !1;
            b("DOMEventListener").add(this.$1, "submit", function(c) {
                if (e.$3) {
                    new(b("DOMEvent"))(c).kill();
                    return
                }
                e.$3 = !0;
                d && b("CSS").addClass(a, "_32qa")
            })
        }
        var c = a.prototype;
        c.getForm = function() {
            return this.$1
        };
        c.getDisplay = function() {
            return this.$2
        };
        c.hasBeenSubmitted = function() {
            return this.$3
        };
        return a
    }();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a
}), null);
__d("BanzaiAdapter", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], (function(a, b, c, d, e, f, g) {
    var h, i, j = [],
        k = new(b("Arbiter"))(),
        l = b("isInIframe")();
    a = b("BanzaiConfig");
    var m = "/ajax/bz",
        n = "POST",
        o = {
            config: a,
            useBeacon: !0,
            getEndPointUrl: function(a) {
                a = b("getAsyncParams")(n);
                a = b("QueryString").appendToUrl(m, a);
                a.length <= 2e3 || g(0, 21850, a);
                return a
            },
            getStorage: function() {
                return b("BanzaiStorage")
            },
            getTopLevel: function() {
                return l && b("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                k.inform(a)
            },
            subscribe: function(a, b) {
                return k.subscribe(a, b)
            },
            wrapInTimeSlice: function(a, c) {
                return b("TimeSlice").guard(function() {
                    a()
                }, c, {
                    propagationType: b("TimeSlice").PropagationType.ORPHAN
                })
            },
            cleanup: function() {
                var a = j;
                j = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            preferredCompressionMethod: b("once")(function() {
                return "snappy_base64"
            }),
            readyToSend: function() {
                return b("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, c, d, e) {
                var f = o.getEndPointUrl(!1);
                f = b("ZeroRewrites").rewriteURI(new(h || (h = b("URI")))(f));
                var g = b("ZeroRewrites").getTransportBuilderForURI(f)();
                g.open(n, f.toString(), !0);
                g.onreadystatechange = function() {
                    if (g.readyState >= 4) {
                        var a = j.indexOf(g);
                        a >= 0 && j.splice(a, 1);
                        try {
                            a = g.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (c && c(), e || o.inform((i || (i = b("BanzaiConsts"))).OK)) : (d && d(a), e || o.inform((i || (i = b("BanzaiConsts"))).ERROR))
                    }
                };
                j.push(g);
                g.send(a, !1)
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                b("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                b("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    c = o;
    e.exports = c
}), null);
__d("ArbiterFrame", [], (function(a, b, c, d, e, f) {
    a = {
        inform: function(a, b, c) {
            var d = parent.frames,
                e = d.length,
                f;
            b.crossFrame = !0;
            for (var g = 0; g < e; g++) {
                f = d[g];
                try {
                    if (!f || f == window) continue;
                    f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c)
                } catch (a) {}
            }
        }
    };
    e.exports = a
}), null);
__d("ArbiterMixin", ["Arbiter", "guid"], (function(a, b, c, d, e, f) {
    var g = "arbiter$" + b("guid")(),
        h = Object.prototype.hasOwnProperty;
    a = {
        _getArbiterInstance: function() {
            return h.call(this, g) ? this[g] : this[g] = new(b("Arbiter"))()
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        subscribeOnce: function(a, b, c) {
            return this._getArbiterInstance().subscribeOnce(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        unsubscribeCurrentSubscription: function() {
            this._getArbiterInstance().unsubscribeCurrentSubscription()
        },
        releaseCurrentPersistentEvent: function() {
            this._getArbiterInstance().releaseCurrentPersistentEvent()
        },
        registerCallback: function(a, b) {
            return this._getArbiterInstance().registerCallback(a, b)
        },
        query: function(a) {
            return this._getArbiterInstance().query(a)
        }
    };
    e.exports = a
}), null);
__d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I;
    var g = !1,
        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (g) return;
        g = !0;
        var a = navigator.userAgent,
            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
        s = /\b(iPhone|iP[ao]d)/.exec(a);
        t = /\b(iP[ao]d)/.exec(a);
        q = /Android/i.exec(a);
        u = /FBAN\/\w+;/i.exec(a);
        v = /FBAN\/mLite;/i.exec(a);
        w = /Mobile/i.exec(a);
        r = !!/Win64/.exec(a);
        if (b) {
            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
            h && document && document.documentMode && (h = document.documentMode);
            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
            m = d ? parseFloat(d[1]) + 4 : h;
            i = b[2] ? parseFloat(b[2]) : NaN;
            j = b[3] ? parseFloat(b[3]) : NaN;
            k = b[4] ? parseFloat(b[4]) : NaN;
            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
        } else h = i = j = l = k = NaN;
        if (c) {
            if (c[1]) {
                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                n = d ? parseFloat(d[1].replace("_", ".")) : !0
            } else n = !1;
            o = !!c[2];
            p = !!c[3]
        } else n = o = p = !1
    }

    function y() {
        return x() || h
    }

    function a() {
        return x() || m > h
    }

    function b() {
        return y() && r
    }

    function c() {
        return x() || i
    }

    function d() {
        return x() || j
    }

    function z() {
        return x() || k
    }

    function e() {
        return z()
    }

    function A() {
        return x() || l
    }

    function B() {
        return x() || o
    }

    function C() {
        return x() || n
    }

    function D() {
        return x() || p
    }

    function E() {
        return x() || s
    }

    function F() {
        return x() || s || t || q || w
    }

    function G() {
        return x() || v != null ? null : u
    }

    function H() {
        return x() || q
    }

    function I() {
        return x() || t
    }
}), null);
__d("isScalar", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        return /string|number|boolean/.test(typeof a)
    }
}), null);
__d("DOM", ["$", "DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "UserAgent_DEPRECATED", "createArrayFromMixed", "fb-error", "isNode", "isScalar", "isTextNode"], (function(a, b, c, d, e, f) {
    var g = b("fb-error").TAAL;
    a = function(a, b, c) {
        a = document.createElement(a);
        b && h.setAttributes(a, b);
        c != null && h.setContent(a, c);
        return a
    };
    var h = {
        find: (c = b("DOMQuery")).find,
        findPushSafe: c.findPushSafe,
        scry: c.scry,
        getSelection: c.getSelection,
        contains: c.contains,
        getRootElement: c.getRootElement,
        isNodeOfType: c.isNodeOfType,
        isInputNode: c.isInputNode,
        create: a,
        setAttributes: function(a, c) {
            c.type && (a.type = c.type);
            for (var d in c) {
                var e = c[d],
                    f = /^on/i.test(d);
                f && typeof e !== "function" && b("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
                if (d == "type") continue;
                else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? b("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e)
            }
        },
        prependContent: function(a, b) {
            if (!a) throw g.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            })
        },
        insertAfter: function(a, b) {
            if (!a || !a.parentNode) throw g.blameToPreviousFile(new Error("reference element does not have a parent"));
            var c = a.parentNode;
            return j(b, c, function(b) {
                a.nextSibling ? c.insertBefore(b, a.nextSibling) : c.appendChild(b)
            })
        },
        insertBefore: function(a, b) {
            if (!a || !a.parentNode) throw g.blameToPreviousFile(new Error("reference element does not have a parent"));
            var c = a.parentNode;
            return j(b, c, function(b) {
                c.insertBefore(b, a)
            })
        },
        setContent: function(a, b) {
            if (!a) throw g.blameToPreviousFile(new Error("reference element is not a node"));
            while (a.firstChild) i(a.firstChild);
            return h.appendContent(a, b)
        },
        appendContent: function(a, b) {
            if (!a) throw g.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.appendChild(b)
            })
        },
        replace: function(a, b) {
            if (!a || !a.parentNode) throw g.blameToPreviousFile(new Error("reference element does not have a parent"));
            var c = a.parentNode;
            return j(b, c, function(b) {
                c.replaceChild(b, a)
            })
        },
        remove: function(a) {
            i(typeof a === "string" ? b("$")(a) : a)
        },
        empty: function(a) {
            a = typeof a === "string" ? b("$")(a) : a;
            while (a.firstChild) i(a.firstChild)
        }
    };

    function i(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function j(a, c, d) {
        a = b("HTML").replaceJSONWrapper(a);
        if (a instanceof b("HTML") && c.firstChild === null && -1 === a.toString().indexOf("<script")) {
            var e = b("UserAgent_DEPRECATED").ie();
            if (!e || e > 7 && !b("DOMQuery").isNodeOfType(c, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
                var f = e ? '<em style="display:none;">&nbsp;</em>' : "";
                c.innerHTML = f + a;
                e && c.removeChild(c.firstChild);
                return Array.from(c.childNodes)
            }
        } else if (b("isTextNode")(c)) {
            c.data = a;
            return [a]
        }
        f = document.createDocumentFragment();
        var g;
        e = [];
        c = [];
        a = b("createArrayFromMixed")(a);
        a.length === 1 && a[0] instanceof b("FbtResultBase") && (a = a[0].getContents());
        for (var h = 0; h < a.length; h++) {
            g = b("HTML").replaceJSONWrapper(a[h]);
            if (g instanceof b("HTML")) {
                c.push(g.getAction());
                var i = g.getNodes();
                for (var j = 0; j < i.length; j++) e.push(i[j]), f.appendChild(i[j])
            } else if (b("isScalar")(g) || g instanceof b("FbtResultBase")) {
                j = document.createTextNode(g);
                e.push(j);
                f.appendChild(j)
            } else b("isNode")(g) ? (e.push(g), f.appendChild(g)) : (Array.isArray(g) && b("FBLogger")("dom").warn("Nest arrays not supported"), g !== null && b("FBLogger")("dom").warn("No way to set content %s", g))
        }
        d(f);
        c.forEach(function(a) {
            a()
        });
        return e
    }
    d = h;
    e.exports = d
}), null);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    a = {
        invoke: function(a, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var c = a.prototype;
        c.getRequest = function() {
            return this.request
        };
        c.getPayload = function() {
            return this.payload
        };
        c.toError = function() {
            this.error !== 0 || g(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        c.getError = function() {
            return this.error
        };
        c.getErrorSummary = function() {
            return this.errorSummary
        };
        c.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        c.getErrorDescription = function() {
            return this.errorDescription
        };
        c.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (b("HTML").isHTML(a)) {
                var c = new(b("HTML"))(a);
                return c.getRootNode().textContent
            }
            return a.toString()
        };
        c.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        c.isSilent = function() {
            return !!this.silentError
        };
        c.isTransient = function() {
            return !!this.transientError
        };
        c.isBlockedAction = function() {
            return !!this.blockedAction
        };
        c.getResponseHeader = function(a) {
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(c) {
            try {
                !c.silentError ? a.verboseErrorHandler(c) : b("FBLogger")("async_response").catching(c.toError()).warn("default error handler called")
            } catch (a) {
                alert(c)
            }
        };
        a.verboseErrorHandler = function(a, c) {
            b("Bootloader").loadModules(["ExceptionDialog"], function(b) {
                return b.showAsyncError(a, c)
            }, "AsyncResponse")
        };
        return a
    }();
    e.exports = a
}), null);
__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        delim: "/*<!-- fetch-stream -->*/"
    })
}), null);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    e.exports = a
}), null);
__d("mixin", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a() {
        var a = function() {},
            b = 0,
            c;
        while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
            c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
            b += 1
        }
        return a
    }
}), null);
__d("FetchStreamTransport", ["ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows", "regeneratorRuntime"], (function $module_FetchStreamTransport(global, require, requireDynamic, requireLazy, module, exports) {
    var c_URI, instance_count = 0,
        FetchStreamTransport = function(_ref) {
            babelHelpers.inheritsLoose(FetchStreamTransport, _ref);

            function FetchStreamTransport(uri) {
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _ref.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(c_URI || (c_URI = require("URI")))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                var _this2 = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(require("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(require("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this2.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            require("nullthrows")(_this2.$FetchStreamTransport6)(function() {
                                                if (first && nextData.startsWith("<")) {
                                                    require("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this2.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this2.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this2.$FetchStreamTransport5 = !0 : _this2.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this2.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                var _this3 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this3.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(require("mixin")(require("ArbiterMixin")));
    module.exports = FetchStreamTransport
}), null);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a) {
        return {
            summary: "HTTP Error",
            description: "Unknown HTTP error #" + a
        }
    }
    c = {
        get: a,
        getAll: b("emptyFunction").thatReturns(new Map())
    };
    d = c;
    e.exports = d
}), null);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = 2,
        j = "jsonp",
        k = "iframe";

    function l(a) {
        delete h[a]
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d._type = b;
            d._uri = c;
            d._hasResponse = !1;
            h[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var d = c.prototype;
        d.getID = function() {
            return this._id || (this._id = i++)
        };
        d.hasFinished = function() {
            return !(this.getID() in h)
        };
        d.getRequestURI = function() {
            return new(g || (g = b("URI")))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        d.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        d.send = function() {
            this._type === j ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: this.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }.bind(this), 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString()), this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        d.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            l(this.getID());
            this.inform("abort")
        };
        d._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        d._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        c.respond = function(a, b, c) {
            var d = h[a];
            d && (d._hasResponse = !0, c || l(a), d._type == k && (typeof b === "string" ? b = JSON.parse(b) : b = JSON.parse(JSON.stringify(b))), d.handleResponse(b))
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = a
}), null);
__d("SessionName", ["SessionNameConfig"], (function(a, b, c, d, e, f) {
    e.exports = {
        getName: function() {
            return b("SessionNameConfig").seed
        }
    }
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Arbiter", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "DTSG_ASYNC", "Deferred", "Env", "ErrorGuard", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "HasteResponse", "JSCC", "PHPQuerySerializer", "Parent", "Promise", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "fb-error", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "isEmpty", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "performanceAbsoluteNow", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, requireDynamic, requireLazy, module, exports, errorCode, fbt, invariant) {
    "use strict";
    var c_ErrorGuard, c_performanceAbsoluteNow, c_URI, c_Env, c_isEmpty, c_PHPQuerySerializer, ErrorXFBDebug = require("fb-error").ErrorXFBDebug,
        nineteenSecInMs = 19e3,
        INTERNAL_SERVER_ERROR = 500,
        NO_NETWORK_CONNECTION = 1006,
        NETWORK_ERROR = 1004,
        ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
        WARNING_ERROR_CODES = new Set([INTERNAL_SERVER_ERROR, ABORTED_DUE_TO_PAGE_TRANSITION, NETWORK_ERROR, NO_NETWORK_CONNECTION]);

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || require("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id,
        ignore_id_update = !1;
    require("Arbiter").subscribe("page_transition", function(_, message) {
        !ignore_id_update ? id_threshold = message.id : ignore_id_update = !1
    });
    var JSON_HIJACKING_SHIELD = "for (;;);",
        JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
        AsyncRequest = function() {
            function AsyncRequest(uri) {
                var _this = this,
                    emptyFunction;
                this._allowIrrelevantRequests = !1;
                this._delayPreDisplayJS = !1;
                this._shouldReplaceTransportMarkers = !1;
                this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                    var error = asyncResponse.getError();
                    _this.clearStatusIndicator();
                    if (!_this._isRelevant() || error === ABORTED_DUE_TO_PAGE_TRANSITION) {
                        _this.abort();
                        return
                    }
                    if (_this._isServerDialogErrorCode(error)) {
                        var is_confirmation = error == 1357008 || error == 1357007;
                        _this.interceptHandler(asyncResponse);
                        error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                    } else if (_this.initialHandler(asyncResponse) !== !1) {
                        require("clearTimeout")(_this.timer);
                        try {
                            errorHandler(asyncResponse)
                        } catch (e) {
                            _this.finallyHandler(asyncResponse);
                            throw e
                        }
                        _this.finallyHandler(asyncResponse)
                    }
                };
                this._onStateChange = function() {
                    var transport = _this.transport;
                    if (!transport) return;
                    try {
                        AsyncRequest._inflightCount--;
                        require("ResourceTimingsStore").measureResponseReceived(require("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                        try {
                            transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"), ErrorXFBDebug.add(_this._xFbServer))
                        } catch (_unused2) {}
                        if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                        else if (require("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                        else if (require("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                            _this.remainingRetries--;
                            delete _this.transport;
                            _this.send(!0);
                            return
                        } else _this._invokeErrorHandler();
                        _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                    } catch (exception) {
                        if (hasUnloaded()) return;
                        delete _this.transport;
                        _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || require("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                    }
                };
                this.continuation = require("TimeSlice").getPlaceholderReusableContinuation();
                this.transport = null;
                this.method = "POST";
                this.uri = "";
                this.timeout = null;
                this.timer = null;
                this.initialHandler = emptyFunction = require("emptyFunction");
                this.handler = null;
                this.uploadProgressHandler = null;
                this.errorHandler = require("AsyncResponse").defaultErrorHandler;
                this.transportErrorHandler = null;
                this.timeoutHandler = null;
                this.interceptHandler = emptyFunction;
                this.finallyHandler = emptyFunction;
                this.abortHandler = emptyFunction;
                this.serverDialogCancelHandler = null;
                this.relativeTo = null;
                this.statusElement = null;
                this.statusClass = "";
                this.data = {};
                this.headers = {};
                this.file = null;
                this.context = {};
                this.readOnly = !1;
                this.writeRequiredParams = [];
                this.remainingRetries = 0;
                this.userActionID = "-";
                this.resourceTimingStoreUID = require("ResourceTimingsStore").getUID(require("ResourceTypes").XHR, uri != null ? uri.toString() : "");
                this.flushedResponseTextParseIndex = 0;
                this.option = {
                    asynchronous_DEPRECATED: !0,
                    suppressErrorHandlerWarning: !1,
                    suppressEvaluation: !1,
                    suppressErrorAlerts: !1,
                    retries: 0,
                    jsonp: !1,
                    bundle: !1,
                    useIframeTransport: !1,
                    handleErrorAfterUnload: !1,
                    useFetchWithIframeFallback: !1
                };
                this.transportErrorHandler = require("bind")(this, "errorHandler");
                uri !== void 0 && this.setURI(uri);
                this.setAllowCrossPageTransition(require("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
            }
            var _proto = AsyncRequest.prototype;
            _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
                this.clearStatusIndicator();
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                    return
                }
                if (this.initialHandler(asyncResponse) === !1) return;
                require("clearTimeout")(this.timer);
                if (asyncResponse.jscc_map) {
                    var jsccMap = require("JSCC").parse(asyncResponse.jscc_map);
                    require("JSCC").init(jsccMap)
                }
                var suppress_js, handler = this.getHandler();
                if (handler) try {
                    suppress_js = this._shouldSuppressJS(handler(asyncResponse))
                } catch (e) {
                    asyncResponse.is_last && this.finallyHandler(asyncResponse);
                    throw e
                }
                suppress_js || this._handleJSResponse(asyncResponse);
                asyncResponse.is_last && this.finallyHandler(asyncResponse)
            };
            _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
                return handler_return_value === AsyncRequest.suppressOnloadToken
            };
            _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
                var _displayStarted = !1,
                    preDisplayPromises = [],
                    registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                        if (_displayStarted) {
                            require("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                            return function() {}
                        }
                        var timeoutId, deferrable = new(require("Deferred"))();
                        preDisplayPromises.push(deferrable.getPromise());
                        return require("TimeSlice").guard(function() {
                            timeoutId && require("clearTimeout")(timeoutId), deferrable.resolve()
                        }, "AsyncRequestDisplayBlockingEvent", {
                            propagationType: require("TimeSlice").PropagationType.EXECUTION
                        })
                    };
                serverJS.handle(preDisplayJSMods, {
                    bigPipeContext: {
                        registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                    }
                });
                _displayStarted = !0;
                return preDisplayPromises
            };
            _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
                return domOps && domOps.length ? domOps.some(function(op) {
                    return op[0] === "eval"
                }) : !1
            };
            _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
                var relativeTo = this.getRelativeTo(),
                    domOps = asyncResponse.domops,
                    dtsgToken = asyncResponse.dtsgToken,
                    dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                    jsMods = asyncResponse.jsmods,
                    serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
                savedServerJSInstance && savedServerJSInstance instanceof require("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(require("ServerJS"))();
                serverJS.setRelativeTo(relativeTo);
                if (jsMods) {
                    var preDisplayJSMods = {};
                    preDisplayJSMods.define = jsMods.define;
                    preDisplayJSMods.instances = jsMods.instances;
                    preDisplayJSMods.markup = jsMods.markup;
                    delete jsMods.define;
                    delete jsMods.instances;
                    delete jsMods.markup;
                    this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                    serverJS.handle(preDisplayJSMods)
                }
                dtsgToken && require("DTSG").setToken(dtsgToken);
                dtsgAsyncGetToken && require("DTSG_ASYNC").setToken(dtsgAsyncGetToken);
                domOps && (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).applyWithGuard(function() {
                    return require("AsyncDOM").invoke(domOps, relativeTo)
                }, null, [], {
                    errorType: "warn"
                });
                jsMods && serverJS.handle(jsMods);
                this._handleJSRegisters(asyncResponse, "onload");
                this._handleJSRegisters(asyncResponse, "onafterload")
            };
            _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
                var registers = asyncResponse[phase];
                if (registers)
                    for (var ii = 0; ii < registers.length; ii++)(c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).applyWithGuard(new Function(registers[ii]), this, [])
            };
            _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
                if (typeof interpreted.redirect !== "undefined") {
                    require("setTimeout")(function() {
                        this.setURI(interpreted.redirect).send()
                    }.bind(this), 0);
                    return
                }
                if (interpreted.bootloadOnly !== void 0) {
                    var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                        _loop = function _loop() {
                            if (_isArray) {
                                if (_i >= _iterator.length) return "break";
                                _ref = _iterator[_i++]
                            } else {
                                _i = _iterator.next();
                                if (_i.done) return "break";
                                _ref = _i.value
                            }
                            var rsrcs = _ref;
                            require("TimeSlice").guard(function() {
                                require("Bootloader").loadPredictedResourceMap(rsrcs)
                            }, "Bootloader.loadPredictedResourceMap", {
                                root: !0
                            })()
                        };
                    for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var _ref, _ret = _loop();
                        if (_ret === "break") break
                    }
                    return
                }
                if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === require("emptyFunction") && this.finallyHandler === require("emptyFunction")) return;
                var response = interpreted.asyncResponse;
                if (typeof response !== "undefined") {
                    var _response$hsrp, _response$allResource;
                    if (!this._isRelevant()) {
                        this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                        return
                    }
                    response.inlinejs && require("evalGlobal")(response.inlinejs);
                    response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                    require("HasteResponse").handleSRPayload((_response$hsrp = response.hsrp) != null ? _response$hsrp : {});
                    var dispatch, arbiter_event;
                    if (response.getError() && !response.getErrorIsWarning()) {
                        var handler = this.getErrorHandler().bind(this);
                        dispatch = (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).guard(this._dispatchErrorResponse, {
                            name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response, handler);
                        arbiter_event = "error"
                    } else {
                        dispatch = (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).guard(this._dispatchResponse.bind(this), {
                            name: "AsyncRequest#_dispatchResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response);
                        arbiter_event = "response";
                        var domOps = response.domops;
                        if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !require("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                            var jsMods = response.jsmods,
                                preDisplayJSMods = {};
                            preDisplayJSMods.define = jsMods.define;
                            preDisplayJSMods.instances = jsMods.instances;
                            preDisplayJSMods.markup = jsMods.markup;
                            delete jsMods.define;
                            delete jsMods.instances;
                            delete jsMods.markup;
                            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                            delete jsMods.pre_display_requires;
                            var serverJS = new(require("ServerJS"))();
                            serverJS.setRelativeTo(this.getRelativeTo());
                            response.savedServerJSInstance = serverJS;
                            var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                            if (preDisplayPromises && preDisplayPromises.length) {
                                var realDispatch = dispatch;
                                dispatch = function dispatch() {
                                    require("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                                }
                            }
                        }
                    }
                    var ts = (c_performanceAbsoluteNow || (c_performanceAbsoluteNow = require("performanceAbsoluteNow")))();
                    dispatch = require("executeAfter")(dispatch, function() {
                        require("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                            request: this,
                            response: response,
                            ts: ts
                        })
                    }.bind(this));
                    this.preBootloadHandler && this.preBootloadHandler(response);
                    require("Bootloader").loadResources((_response$allResource = response.allResources) != null ? _response$allResource : [], {
                        onAll: require("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                            require("setTimeout")(dispatch, 0)
                        }
                    }, this.getURI())
                } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
            };
            _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
                var transport = this.transport;
                if (!transport) return;
                var error;
                if (this.responseText === "") error = 1002;
                else if (this._requestAborted) error = 1011;
                else {
                    try {
                        error = explicitError || transport.status || NETWORK_ERROR
                    } catch (_unused3) {
                        error = 1005
                    }!1 === navigator.onLine && (error = NO_NETWORK_CONNECTION)
                }
                var desc, summary, silent = !0;
                if (error === NO_NETWORK_CONNECTION) summary = fbt._("No Network Connection"), desc = fbt._("Your browser appears to be offline. Please check your internet connection and try again.");
                else if (error >= 300 && error <= 399) {
                    summary = fbt._("Redirection");
                    desc = fbt._("Your access to Facebook was redirected or blocked by a third party at this time, please contact your ISP or reload.");
                    var location = transport.getResponseHeader("Location");
                    location && require("goURI")(location, !0);
                    silent = !0
                } else summary = fbt._("Oops"), desc = fbt._("Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again.");
                var async_response = new(require("AsyncResponse"))(this, transport);
                Object.assign(async_response, {
                    error: error,
                    errorSummary: summary,
                    errorDescription: desc,
                    silentError: silent
                });
                require("setTimeout")(function() {
                    require("Arbiter").inform("AsyncRequest/error", {
                        request: this,
                        response: async_response
                    })
                }.bind(this), 0);
                if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
                if (!this.transportErrorHandler) {
                    require("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                    return
                }
                var error_handler = this.getTransportErrorHandler().bind(this);
                !(this.getOption("suppressErrorAlerts") || WARNING_ERROR_CODES.has(error)) ? require("FBLogger")("asyncresponse").addToCategoryKey(String(error)).mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): WARNING_ERROR_CODES.has(error) && require("FBLogger")("asyncresponse").addToCategoryKey(String(error)).warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
                (c_ErrorGuard || (c_ErrorGuard = require("ErrorGuard"))).applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
            };
            _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
                return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
            };
            _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
                var payload = async_response.getPayload();
                require("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                    QuickSandSolver.solveAndSendRequestBack(this, payload)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
                allow_get === void 0 && (allow_get = !1);
                var payload = async_response.getPayload();
                if (payload.__dialog !== void 0) {
                    this._displayServerLegacyDialog(async_response, is_confirmation);
                    return
                }
                var json = payload.__dialogx;
                new(require("ServerJS"))().handle(json);
                require("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                    ConfirmationDialog.setupConfirmation(async_response, this, allow_get)
                }.bind(this), "AsyncRequest")
            };
            _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
                var model = async_response.getPayload().__dialog;
                if (require("gkx")("708253")) {
                    var _ref2, _async_response$reque;
                    require("FBLogger")("comet_infra").addMetadata("COMET_INFRA", "ERROR_CODE", async_response.getError().toString()).addMetadata("COMET_INFRA", "ERROR_URL", (_ref2 = (_async_response$reque = async_response.request) == null ? void 0 : _async_response$reque.getURI()) != null ? _ref2 : "unknown").mustfix("AsyncRequest._displayServerLegacyDialog called in Comet")
                }
                require("Bootloader").loadModules(["Dialog"], function(Dialog) {
                    var dialog = new Dialog(model);
                    is_confirmation && dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
                    dialog.setCancelHandler(function() {
                        var handler = this.getServerDialogCancelHandler();
                        try {
                            handler && handler(async_response)
                        } catch (e) {
                            throw e
                        } finally {
                            this.finallyHandler(async_response)
                        }
                    }.bind(this)).setCausalElement(this.relativeTo).show()
                }.bind(this), "AsyncRequest")
            };
            _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
                this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
            };
            _proto.setJSONPTransport = function setJSONPTransport(transport) {
                transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
            };
            _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
                var transport = this.transport;
                if (!transport) return;
                data.bootloadOnly || (this.is_first = this.is_first === void 0);
                var interpreted = this._interpretResponse(data);
                interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
                this.invokeResponseHandler(interpreted);
                transport.hasFinished() && delete this.transport
            };
            _proto._handleJSONPAbort = function _handleJSONPAbort() {
                this._invokeErrorHandler(), delete this.transport
            };
            _proto._handleXHRResponse = function _handleXHRResponse(transport) {
                var interpreted;
                if (this.getOption("suppressEvaluation")) interpreted = {
                    asyncResponse: new(require("AsyncResponse"))(this, transport)
                };
                else try {
                    this._handleFlushedResponse();
                    var text = transport.responseText;
                    text = this._filterOutFlushedText(text);
                    var safe_text = this._unshieldResponseText(text),
                        _response;
                    try {
                        _response = JSON.parse(safe_text)
                    } catch (error) {
                        _response = eval("(" + safe_text + ")"), require("FBLogger")("async_request").catching(error).warn("JSON.parse encountered an exception, fallback to eval. Endpoint: " + new(c_URI || (c_URI = require("URI")))(this.uri).getPath())
                    }
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, require("FBLogger")("async_request").catching(error).warn("Failed to handle response")
                }
                this.invokeResponseHandler(interpreted)
            };
            _proto._handleFlushedResponse = function _handleFlushedResponse() {
                var flushedResponseHandler = this.flushedResponseHandler,
                    transport = this.transport;
                if (flushedResponseHandler && transport) {
                    var jsonShieldIndex = transport.responseText.indexOf(JSON_HIJACKING_SHIELD),
                        flushedTextEndIndex = jsonShieldIndex === -1 ? transport.responseText.length : jsonShieldIndex;
                    flushedResponseHandler(transport.responseText.substring(this.flushedResponseTextParseIndex, flushedTextEndIndex));
                    this.flushedResponseTextParseIndex = flushedTextEndIndex
                }
            };
            _proto._unshieldResponseText = function _unshieldResponseText(text) {
                if (text.length <= JSON_HIJACKING_SHIELD_LEN) throw new Error("Response too short on async");
                var offset = 0;
                while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
                offset && text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) == JSON_HIJACKING_SHIELD;
                return text.substring(offset + JSON_HIJACKING_SHIELD_LEN)
            };
            _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
                if (!this.flushedResponseHandler) return text;
                var index = text.indexOf(JSON_HIJACKING_SHIELD);
                return index < 0 ? text : text.substr(index)
            };
            _proto._interpretResponse = function _interpretResponse(response) {
                if (response.redirect) return {
                    redirect: response.redirect
                };
                if (response.bootloadOnly) return {
                    bootloadOnly: response.bootloadOnly
                };
                var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
                this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && require("replaceTransportMarkers")({
                    relativeTo: this.getRelativeTo(),
                    bigPipeContext: null
                }, response.payload);
                var r = new(require("AsyncResponse"))(this);
                if (response.__ar != 1) require("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
                else {
                    Object.assign(r, response);
                    var transport = this.transport;
                    transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
                }
                return {
                    asyncResponse: r
                }
            };
            _proto._isMultiplexable = function _isMultiplexable() {
                if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                    require("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                    return !1
                }
                if (!require("isFacebookURI")(new(c_URI || (c_URI = require("URI")))(this.uri))) {
                    require("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                    return !1
                }
                if (!this.getOption("asynchronous_DEPRECATED")) {
                    require("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                    return !1
                }
                return !0
            };
            _proto.handleResponse = function handleResponse(response) {
                var interpreted = this._interpretResponse(response);
                this.invokeResponseHandler(interpreted)
            };
            _proto.setMethod = function setMethod(m) {
                this.method = m.toString().toUpperCase();
                return this
            };
            _proto.getMethod = function getMethod() {
                return this.method
            };
            _proto.setData = function setData(obj) {
                this.data = obj;
                return this
            };
            _proto.setRequestHeader = function setRequestHeader(name, value) {
                this.headers[name] = value;
                return this
            };
            _proto.setRawData = function setRawData(raw_data) {
                this.rawData = raw_data;
                return this
            };
            _proto.getData = function getData() {
                return this.data
            };
            _proto.setContextData = function setContextData(key, value, enabled) {
                enabled = enabled === void 0 ? !0 : enabled;
                enabled && (this.context["_log_" + key] = value);
                return this
            };
            _proto._setUserActionID = function _setUserActionID() {
                this.userActionID = (require("SessionName").getName() || "-") + "/-"
            };
            _proto.setURI = function setURI(uri) {
                typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && require("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
                var uri_obj = new(c_URI || (c_URI = require("URI")))(uri);
                if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !require("isFacebookURI")(uri_obj)) return this;
                if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) return this;
                this._setUserActionID();
                if (!uri || uri_obj.isEmpty()) {
                    require("FBLogger")("async_request").mustfix("URI cannot be empty");
                    return this
                }
                this.uri = require("ZeroRewrites").rewriteURI(uri_obj);
                return this
            };
            _proto.getURI = function getURI() {
                return this.uri.toString()
            };
            _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
                shouldDelayJS === void 0 && (shouldDelayJS = !0);
                this._delayPreDisplayJS = shouldDelayJS;
                return this
            };
            _proto.setInitialHandler = function setInitialHandler(fn) {
                this.initialHandler = fn;
                return this
            };
            _proto.setPayloadHandler = function setPayloadHandler(fn) {
                this.setHandler(function(response) {
                    fn(response.payload)
                });
                return this
            };
            _proto.setHandler = function setHandler(fn) {
                validateResponseHandler(fn) && (this.handler = fn);
                return this
            };
            _proto.setFlushedResponseHandler = function setFlushedResponseHandler(fn) {
                validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
                return this
            };
            _proto.getHandler = function getHandler() {
                return this.handler || require("emptyFunction")
            };
            _proto.setProgressHandler = function setProgressHandler(fn) {
                validateResponseHandler(fn) && (this.progressHandler = fn);
                return this
            };
            _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
                validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
                return this
            };
            _proto.setErrorHandler = function setErrorHandler(fn) {
                validateResponseHandler(fn) && (this.errorHandler = fn);
                return this
            };
            _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
                this.transportErrorHandler = fn;
                return this
            };
            _proto.getErrorHandler = function getErrorHandler() {
                return this.errorHandler || require("emptyFunction")
            };
            _proto.getTransportErrorHandler = function getTransportErrorHandler() {
                return this.transportErrorHandler || require("emptyFunction")
            };
            _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
                validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
                return this
            };
            _proto.resetTimeout = function resetTimeout(timeout) {
                if (!(this.timeoutHandler === null))
                    if (timeout === null) this.timeout = null, require("clearTimeout")(this.timer), this.timer = null;
                    else {
                        var clear_on_quickling_event = !this._allowCrossPageTransition;
                        this.timeout = timeout;
                        require("clearTimeout")(this.timer);
                        clear_on_quickling_event ? this.timer = require("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = require("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                    }
                return this
            };
            _proto._handleTimeout = function _handleTimeout() {
                var _this2 = this;
                this.continuation.last(function() {
                    _this2._requestTimeout = !0;
                    var func = _this2.timeoutHandler;
                    _this2.abandon();
                    func && func(_this2);
                    require("setTimeout")(function() {
                        require("Arbiter").inform("AsyncRequest/timeout", {
                            request: this
                        })
                    }.bind(_this2), 0)
                })
            };
            _proto.setNewSerial = function setNewSerial() {
                this.id = ++last_id;
                return this
            };
            _proto.setInterceptHandler = function setInterceptHandler(fn) {
                this.interceptHandler = fn;
                return this
            };
            _proto.setFinallyHandler = function setFinallyHandler(fn) {
                this.finallyHandler = fn;
                return this
            };
            _proto.setAbortHandler = function setAbortHandler(fn) {
                this.abortHandler = fn;
                return this
            };
            _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
                return this.serverDialogCancelHandler
            };
            _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
                this.serverDialogCancelHandler = fn;
                return this
            };
            _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
                this.preBootloadHandler = fn;
                return this
            };
            _proto.setReadOnly = function setReadOnly(readOnly) {
                typeof readOnly !== "boolean" || (this.readOnly = readOnly);
                return this
            };
            _proto.getReadOnly = function getReadOnly() {
                return this.readOnly
            };
            _proto.setRelativeTo = function setRelativeTo(element) {
                this.relativeTo = element;
                return this
            };
            _proto.getRelativeTo = function getRelativeTo() {
                return this.relativeTo
            };
            _proto.setStatusClass = function setStatusClass(c) {
                this.statusClass = c;
                return this
            };
            _proto.setStatusElement = function setStatusElement(element) {
                this.statusElement = element;
                return this
            };
            _proto.getStatusElement = function getStatusElement() {
                return require("ge")(this.statusElement)
            };
            _proto._isRelevant = function _isRelevant() {
                if (this._allowCrossPageTransition) return !0;
                return !this.id ? !0 : this.id > id_threshold
            };
            _proto.clearStatusIndicator = function clearStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (require("CSS").removeClass(statusElem, "async_saving"), require("CSS").removeClass(statusElem, this.statusClass))
            };
            _proto.addStatusIndicator = function addStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (require("CSS").addClass(statusElem, "async_saving"), require("CSS").addClass(statusElem, this.statusClass))
            };
            _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
                return this.writeRequiredParams.every(function(param) {
                    this.data[param] = this.data[param] || (c_Env || (c_Env = require("Env")))[param] || (require("ge")(param) || {}).value;
                    return this.data[param] !== void 0 ? !0 : !1
                }, this)
            };
            _proto.setOption = function setOption(opt, v) {
                typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
                return this
            };
            _proto.getOption = function getOption(opt) {
                typeof this.option[opt] === "undefined";
                return this.option[opt]
            };
            _proto.abort = function abort() {
                var _this3 = this;
                this.continuation.last(function() {
                    var transport = _this3.transport;
                    if (transport) {
                        var old_handler = _this3.getTransportErrorHandler();
                        _this3.setOption("suppressErrorAlerts", !0);
                        _this3.setTransportErrorHandler(require("emptyFunction"));
                        _this3._requestAborted = !0;
                        transport.abort();
                        _this3.setTransportErrorHandler(old_handler)
                    }
                    _this3.abortHandler();
                    AsyncMultiplex.unschedule(_this3)
                })
            };
            _proto.abandon = function abandon() {
                var _this4 = this;
                this.continuation.last(function() {
                    var emptyFunction;
                    require("clearTimeout")(_this4.timer);
                    _this4.setOption("suppressErrorAlerts", !0).setHandler(emptyFunction = require("emptyFunction")).setErrorHandler(emptyFunction).setTransportErrorHandler(emptyFunction).setProgressHandler(emptyFunction).setUploadProgressHandler(emptyFunction);
                    var transport = _this4.transport;
                    transport && (_this4._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                    _this4.abortHandler();
                    AsyncMultiplex.unschedule(_this4)
                })
            };
            _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
                var setNectarModuleData = this.setNectarModuleData;
                setNectarModuleData && setNectarModuleData.call(this, elem);
                return this
            };
            _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
                this._allowCrossPageTransition = !!allow;
                this.timer && this.resetTimeout(this.timeout);
                return this
            };
            _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
                return this._allowIrrelevantRequests
            };
            _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
                this._allowIrrelevantRequests = allowIrrelevantRequests;
                return this
            };
            _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
                this._allowCrossOrigin = allow;
                return this
            };
            _proto.setAllowCredentials = function setAllowCredentials(allow) {
                this._allowCredentials = allow;
                return this
            };
            _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
                this._isBackgroundRequest = isBackgroundRequest;
                return this
            };
            _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
                value === void 0 && (value = !0);
                this._shouldReplaceTransportMarkers = value;
                return this
            };
            _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
                var _this5 = this;
                this.send();
                return function() {
                    return _this5.abort()
                }
            };
            _proto.send = function send(isRetry) {
                var _this6 = this;
                isRetry = isRetry || !1;
                if (!this.uri) return !1;
                this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
                this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
                (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
                this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
                if (!this.getReadOnly()) {
                    this.specifiesWriteRequiredParams();
                    if (this.method != "POST") return !1
                }
                if (document.location.search.toString().includes(this.uri.toString())) return !1;
                if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
                Object.assign(this.data, require("getAsyncParams")(this.method));
                (c_isEmpty || (c_isEmpty = require("isEmpty")))(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
                (c_Env || (c_Env = require("Env"))).force_param && Object.assign(this.data, (c_Env || (c_Env = require("Env"))).force_param);
                this._setUserActionID();
                if (this.getOption("bundle") && this._isMultiplexable()) {
                    AsyncMultiplex.schedule(this);
                    return !0
                }
                this.setNewSerial();
                this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                    __sjax: 1
                });
                require("Arbiter").inform("AsyncRequest/send", {
                    request: this,
                    ts: (c_performanceAbsoluteNow || (c_performanceAbsoluteNow = require("performanceAbsoluteNow")))()
                });
                var uri_str, query;
                this.method == "GET" && this.uri.addQueryData({
                    fb_dtsg_ag: require("DTSG_ASYNC").getToken()
                });
                this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                    __a: 1
                }), uri_str = this.uri.toString(), query = (c_PHPQuerySerializer || (c_PHPQuerySerializer = require("PHPQuerySerializer"))).serialize(this.data));
                if (this.transport) return !1;
                if (this.getOption("useFetchWithIframeFallback")) try {
                    var _transport2 = new(require("FetchStreamTransport"))(this.uri);
                    this.setJSONPTransport(_transport2);
                    this._markRequestSent();
                    _transport2.send();
                    this.setOption("useIframeTransport", !1);
                    return !0
                } catch (_unused4) {
                    this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
                }
                if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                    requireLazy(["JSONPTransport"], function(JSONPTransport) {
                        var transport = new JSONPTransport(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
                        this.setJSONPTransport(transport);
                        this._markRequestSent();
                        transport.send()
                    }.bind(this));
                    return !0
                }
                this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
                var transport = require("ZeroRewrites").getTransportBuilderForURI(this.uri)();
                if (!transport) return !1;
                this.schedule("AsyncRequest.send");
                transport.onreadystatechange = function() {
                    var _transport = _this6.transport;
                    _transport && _transport.readyState >= 2 && _transport.readyState <= 3 && _this6._handleFlushedResponse();
                    transport.readyState === 4 && _this6.continuation.last(_this6._onStateChange)
                };
                this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    _this6.continuation(function() {
                        _this6.progressHandler && _this6.progressHandler.apply(_this6, args)
                    })
                });
                this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    _this6.continuation(function() {
                        _this6.uploadProgressHandler && _this6.uploadProgressHandler.apply(_this6, args)
                    })
                });
                isRetry || (this.remainingRetries = this.getOption("retries"));
                this.transport = transport;
                try {
                    transport.open(this.method, uri_str, require("gkx")("1857581") ? !0 : this.getOption("asynchronous_DEPRECATED"))
                } catch (exception) {
                    return !1
                }
                if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                    if (!supportsCrossOrigin(transport)) return !1;
                    this._canSendCredentials() && (transport.withCredentials = !0)
                }
                this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
                var asyncHeaders = require("getAsyncHeaders")(this.uri);
                Object.keys(asyncHeaders).forEach(function(name) {
                    transport && transport.setRequestHeader(name, asyncHeaders[name])
                });
                require("Arbiter").inform("AsyncRequest/will_send", {
                    request: this
                });
                if (transport)
                    for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
                this.addStatusIndicator();
                this._markRequestSent();
                transport.send(query);
                this.timeout !== null && this.resetTimeout(this.timeout);
                AsyncRequest._inflightCount++;
                return !0
            };
            _proto.schedule = function schedule(name) {
                this.continuation = require("TimeSlice").getReusableContinuation(name)
            };
            _proto._canSendCredentials = function _canSendCredentials() {
                if (this._allowCredentials === !1) return !1;
                var uri = new(c_URI || (c_URI = require("URI")))(this.uri);
                return require("isFacebookURI")(uri) || require("isInternalFBURI")(uri) || require("isMessengerDotComURI")(uri) || require("isWorkplaceDotComURI")(uri)
            };
            _proto._markRequestSent = function _markRequestSent() {
                var fullURI = new(c_URI || (c_URI = require("URI")))(this.getURI()).getQualifiedURI().toString();
                require("ResourceTimingsStore").updateURI(require("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
                require("ResourceTimingsStore").annotate(require("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
                require("ResourceTimingsStore").measureRequestSent(require("ResourceTypes").XHR, this.resourceTimingStoreUID)
            };
            _proto.promisePayload = function promisePayload(isRetry) {
                return this.exec().then(function(response) {
                    return response.payload
                }, function(response) {
                    throw response.toError()
                })
            };
            _proto.exec = function exec(isRetry) {
                var _this7 = this;
                if (this.getHandler() !== require("emptyFunction") || this.getErrorHandler() !== require("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
                return new(require("Promise"))(function(resolve, reject) {
                    _this7.setHandler(resolve).setErrorHandler(reject).send(isRetry)
                })
            };
            AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
                var method = "GET",
                    readonly = !0,
                    data = {};
                (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(c_URI || (c_URI = require("URI")))(href), data = href.getQueryData(), href.setQueryData({})));
                var status_elem = require("Parent").byClass(elem, "stat_elem") || elem;
                if (status_elem && require("CSS").hasClass(status_elem, "async_saving")) return !1;
                var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
                elem && (async.setHandler(function(response) {
                    require("Event").fire(elem, "success", {
                        response: response
                    })
                }), async.setErrorHandler(function(response) {
                    require("Event").fire(elem, "error", {
                        response: response
                    }) !== !1 && require("AsyncResponse").defaultErrorHandler(response)
                }));
                if (status_elem instanceof HTMLElement) {
                    async.setStatusElement(status_elem);
                    var status_class = status_elem.getAttribute("data-status-class");
                    status_class && async.setStatusClass(status_class)
                }
                async.send();
                return !1
            };
            AsyncRequest.post = function post(href, data) {
                new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
                return !1
            };
            AsyncRequest.postStatic = function postStatic(href, data) {
                AsyncRequest.post(href, data)
            };
            AsyncRequest.getLastID = function getLastID() {
                return last_id
            };
            AsyncRequest.ignoreUpdate = function ignoreUpdate() {
                ignore_id_update = !0
            };
            AsyncRequest.getInflightCount = function getInflightCount() {
                return this._inflightCount
            };
            return AsyncRequest
        }();
    module.exports = AsyncRequest;
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), (c_PHPQuerySerializer || (c_PHPQuerySerializer = require("PHPQuerySerializer"))).serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                var _this8 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    var request = _this8._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this8._wrapperRequest && (request.id = _this8._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), require("TimeSlice").guard(function() {
                    require("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: require("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest
}), null);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
}), null);
__d("isValidAsyncSignalURI", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
}), null);
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    var g, h, i;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        i || (i = new(b("Promise"))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = i.then(function() {
            return new(b("Promise"))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                j = b("memoize")(function() {
                    (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, j()
            }, j));
            this.timeout && setTimeout(j, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("isValidReactElement", [], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function a(a) {
        return !!(typeof a === "object" && a !== null && a.$$typeof === g)
    }
}), null);
__d("BootloadedReact", ["Bootloader", "isValidReactElement"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact")
    };
    a = {
        isValidElement: function(a) {
            return b("isValidReactElement")(a)
        },
        render: function(a, b, c) {
            g(function(d) {
                d.render(a, b, function() {
                    c && c(this)
                })
            })
        },
        unmountComponentAtNode: function(a, b) {
            g(function(c) {
                c.unmountComponentAtNode(a), b && b()
            })
        }
    };
    e.exports = a
}), null);
__d("getOrCreateDOMID", ["uniqueID"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        a.id || (a.id = b("uniqueID")());
        return a.id
    }
}), null);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    f.register = a;
    f.containsIncludingLayers = c;
    f.getContext = g;
    f.parentByClass = d;

    function a(a, c) {
        a.setAttribute("data-ownerid", b("getOrCreateDOMID")(c))
    }

    function c(a, c) {
        c = c;
        while (c) {
            if (b("containsNode")(a, c)) return !0;
            c = g(c)
        }
        return !1
    }

    function g(a) {
        a = a;
        var c;
        while (a) {
            if (a.getAttribute && (c = a.getAttribute("data-ownerid"))) return b("ge")(c);
            a = a.parentNode
        }
        return null
    }

    function d(a, c) {
        a = a;
        var d;
        while (a && !b("CSS").hasClass(a, c)) a.getAttribute && (d = a.getAttribute("data-ownerid")) ? a = b("ge")(d) : a = a.parentNode;
        return a
    }
}), null);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f) {
    "use strict";
    f.getElementDimensions = a;
    f.getDocumentDimensions = c;
    f.measureElementBox = d;

    function a(a) {
        var b = a ? a.offsetHeight : 0;
        a = a ? a.offsetWidth : 0;
        return {
            height: b,
            width: a
        }
    }

    function c(a) {
        a = b("getDocumentScrollElement")(a);
        var c = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return {
            width: c,
            height: a
        }
    }

    function d(a, c, d, e, f) {
        var g;
        switch (c) {
            case "left":
            case "right":
            case "top":
            case "bottom":
                g = [c];
                break;
            case "width":
                g = ["left", "right"];
                break;
            case "height":
                g = ["top", "bottom"];
                break;
            default:
                throw Error("Invalid plane: " + c)
        }
        c = function(c, d) {
            var e = 0;
            for (var f = 0; f < g.length; f++) e += parseFloat(b("Style").get(a, c + "-" + g[f] + d)) || 0;
            return e
        };
        return (d ? c("padding", "") : 0) + (e ? c("border", "-width") : 0) + (f ? c("margin", "") : 0)
    }
}), null);
__d("getElementText", ["isElementNode", "isTextNode"], (function(a, b, c, d, e, f) {
    e.exports = a;
    var g = null;

    function a(a) {
        if (b("isTextNode")(a)) return a.data;
        else if (b("isElementNode")(a)) {
            if (g === null) {
                var c = document.createElement("div");
                g = c.textContent != null ? "textContent" : "innerText"
            }
            return a[g]
        } else return ""
    }
}), null);
__d("isContentEditable", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a) {
        a = a;
        while (a instanceof HTMLElement) {
            if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
            a = a.parentElement
        }
        return !1
    }
}), null);
__d("isElementInteractive", ["isContentEditable"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;
    var g = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
        h = new Set(["button", "checkbox", "radio", "submit"]);

    function a(a) {
        if (!a instanceof HTMLElement) return !1;
        var c = b("isContentEditable")(a),
            d = g.has(a.nodeName);
        a = a instanceof HTMLInputElement && h.has(a.type);
        return (c || d) && !a
    }
}), null);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], (function(a, b, c, d, e, f) {
    var g, h = null,
        i = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            NUMPAD_ADD: [43],
            NUMPAD_SUBSTRACT: [45],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            "`": [192],
            "[": [219],
            "]": [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            "-": [189],
            "=": [187],
            FORWARD_SLASH: [191]
        },
        j = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
    c = function() {
        function a() {
            var a = this;
            this.handlers = {};
            ["keyup", "keydown", "keypress"].forEach(function(b) {
                return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b))
            })
        }
        var c = a.prototype;
        c.mapKey = function(a) {
            if (/^[0-9]$/.test(a + "")) {
                typeof a !== "number" && (a = a.charCodeAt(0) - 48);
                return [48 + a, 96 + a]
            }
            a += "";
            var b = i[a.toUpperCase()];
            return b ? b : [a.toUpperCase().charCodeAt(0)]
        };
        c.onkeyevent = function(a, c) {
            c = b("Event").$E(c);
            var d = this.handlers[c.keyCode] || this.handlers[c.which];
            if (d)
                for (var e = 0; e < d.length; e++) {
                    var f = d[e].callback,
                        g = d[e].filter;
                    try {
                        if (!g || g(c, a)) {
                            g = function() {
                                var d = f(c, a),
                                    e = c.which || c.keyCode;
                                b("Bootloader").loadModules(["KeyEventTypedLogger"], function(a) {
                                    new a().setAction("key_shortcut").setKey(c.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", c.isTrusted).log()
                                }, "KeyEventController");
                                if (d === !1) return {
                                    v: b("Event").kill(c)
                                }
                            }();
                            if (typeof g === "object") return g.v
                        }
                    } catch (a) {}
                }
            return !0
        };
        c.resetHandlers = function() {
            for (var a in this.handlers)
                if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
                    var b = this.handlers[a].filter(function(a) {
                        return a.preserve()
                    });
                    b.length ? this.handlers[a] = b : delete this.handlers[a]
                }
        };
        a.getInstance = function() {
            return h || (h = new a())
        };
        a.defaultFilter = function(c, d) {
            c = b("Event").$E(c);
            return a.filterEventTypes(c, d) && a.filterEventTargets(c, d) && a.filterEventModifiers(c, d)
        };
        a.filterEventTypes = function(a, b) {
            return b === "onkeydown" ? !0 : !1
        };
        a.filterEventTargets = function(a, c) {
            c = a.getTarget();
            return !b("isElementInteractive")(c) || a.keyCode in j && (b("DOMQuery").isNodeOfType(c, ["input", "textarea"]) && c.value.length === 0 || b("isContentEditable")(c) && b("getElementText")(c).length === 0)
        };
        a.filterEventModifiers = function(a, b) {
            return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0
        };
        a.registerKeyAcrossTransitions = function(c, d, e, f) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            return a.registerKey(c, d, e, f, b("emptyFunction").thatReturnsTrue)
        };
        a.registerKey = function(c, d, e, f, h) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            h === void 0 && (h = b("emptyFunction").thatReturnsFalse);
            var i = a.getInstance(),
                j = c == null ? [] : i.mapKey(c);
            (g || (g = b("isEmpty")))(i.handlers) && b("Run").onLeave(i.resetHandlers.bind(i));
            var k = {};
            for (var l = 0; l < j.length; l++) {
                c = "" + j[l];
                (!i.handlers[c] || f) && (i.handlers[c] = []);
                var m = {
                    callback: d,
                    filter: e,
                    preserve: h
                };
                k[c] = m;
                i.handlers[c].push(m)
            }
            return {
                remove: function() {
                    for (var a in k) {
                        if (i.handlers[a] && i.handlers[a].length) {
                            var b = i.handlers[a].indexOf(k[a]);
                            b >= 0 && i.handlers[a].splice(b, 1)
                        }
                        delete k[a]
                    }
                }
            }
        };
        return a
    }();
    e.exports = c
}), null);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    f.isKeyDown = d;
    f.getKeyDownCode = e;
    var g = null,
        h = null;

    function i() {
        h || (h = b("Event").listen(window, "blur", function() {
            g = null, j()
        }))
    }

    function j() {
        h && (h.remove(), h = null)
    }

    function a(a) {
        g = b("Event").getKeyCode(a), i()
    }

    function c() {
        g = null, j()
    }
    if (b("ExecutionEnvironment").canUseDOM) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", c, !0);
            else if (d.attachEvent) {
            f = d.attachEvent;
            f("onkeydown", a);
            f("onkeyup", c)
        }
    }

    function d() {
        return !!g
    }

    function e() {
        return g
    }
}), null);
__d("Popup", ["isTruthy"], (function(a, b, c, d, e, f) {
    f.open = a;

    function a(a, c, d, e) {
        var f = [];
        b("isTruthy")(c) && f.push("width=" + c);
        b("isTruthy")(d) && f.push("height=" + d);
        var g = document.body;
        if (g != null && c != null && c !== 0 && d != null && d !== 0) {
            var h = "screenX" in window ? window.screenX : window.screenLeft,
                i = "screenY" in window ? window.screenY : window.screenTop,
                j = "outerWidth" in window ? window.outerWidth : g.clientWidth;
            g = "outerHeight" in window ? window.outerHeight : g.clientHeight - 22;
            h = Math.floor(h + (j - c) / 2);
            j = Math.floor(i + (g - d) / 2.5);
            f.push("left=" + h);
            f.push("top=" + j)
        }
        f.push("scrollbars");
        return window.open(a, e != null && e !== "" ? e : "_blank", f.join(","))
    }
}), null);
__d("PopupLink", ["DOMEvent", "DOMEventListener", "Popup"], (function(a, b, c, d, e, f) {
    a = {
        listen: function(a, c, d) {
            b("DOMEventListener").add(a, "click", function(e) {
                new(b("DOMEvent"))(e).kill(), b("Popup").open(a.href, c, d)
            })
        }
    };
    e.exports = a
}), null);
__d("BehaviorsMixin", [], (function(a, b, c, d, e, f) {
    var g = function() {
            function a(a) {
                this.$1 = a, this.$2 = !1
            }
            var b = a.prototype;
            b.enable = function() {
                this.$2 || (this.$2 = !0, this.$1.enable())
            };
            b.disable = function() {
                this.$2 && (this.$2 = !1, this.$1.disable())
            };
            return a
        }(),
        h = 1;

    function i(a) {
        a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
        return a.__BEHAVIOR_ID
    }
    a = {
        enableBehavior: function(a) {
            this._behaviors || (this._behaviors = {});
            var b = i(a);
            this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
            this._behaviors[b].enable();
            return this
        },
        disableBehavior: function(a) {
            if (this._behaviors) {
                a = i(a);
                this._behaviors[a] && this._behaviors[a].disable()
            }
            return this
        },
        enableBehaviors: function(a) {
            a.forEach(this.enableBehavior, this);
            return this
        },
        destroyBehaviors: function() {
            if (this._behaviors) {
                for (var a in this._behaviors) this._behaviors[a].disable();
                this._behaviors = {}
            }
        },
        hasBehavior: function(a) {
            return this._behaviors && i(a) in this._behaviors
        }
    };
    b = a;
    e.exports = b
}), null);
__d("setImmediate", ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        var c, d = function() {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, c);
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
        c = b("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
        b("TimerStorage").set(b("TimerStorage").IMMEDIATE, c);
        return c
    }
}), null);
__d("Layer", ["invariant", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "CSS", "ContextualThing", "DOM", "DataStore", "Event", "FBLogger", "HTML", "KeyEventController", "KeyStatus", "Parent", "Style", "ge", "isNode", "mixin", "removeFromArray", "setImmediate"], (function(a, b, c, d, e, f, g) {
    b("KeyStatus");
    var h = [],
        i = function(c) {
            babelHelpers.inheritsLoose(a, c);

            function a(a, d) {
                var e;
                e = c.call(this) || this;
                e._config = a || {};
                if (d) {
                    e._configure(e._config, d);
                    a = e._config.addedBehaviors || [];
                    e.enableBehaviors(e._getDefaultBehaviors().concat(a))
                } else b("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
                return e
            }
            var d = a.prototype;
            d.init = function(a) {
                this._configure(this._config, a);
                a = this._config.addedBehaviors || [];
                this.enableBehaviors(this._getDefaultBehaviors().concat(a));
                this._initialized = !0;
                return this
            };
            d._configure = function(a, c) {
                var d = this;
                if (c) {
                    var e = b("isNode")(c),
                        f = typeof c === "string" || b("HTML").isHTML(c);
                    this.containsReactComponent = b("BootloadedReact").isValidElement(c);
                    !e && !f && !this.containsReactComponent && b("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
                    if (f) c = b("HTML")(c).getRootNode();
                    else if (this.containsReactComponent) {
                        e = document.createElement("div");
                        var g = !0;
                        b("BootloadedReact").render(c, e, function() {
                            d.inform("reactshow"), g || d.updatePosition()
                        });
                        g = !1;
                        c = this._reactContainer = e
                    }
                }
                this._root = this._buildWrapper(a, c);
                a.attributes && b("DOM").setAttributes(this._root, a.attributes);
                a.classNames && a.classNames.forEach(b("CSS").addClass.bind(null, this._root));
                b("CSS").addClass(this._root, "uiLayer");
                a.causalElement && (this._causalElement = b("ge")(a.causalElement));
                a.permanent && (this._permanent = a.permanent);
                a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
                b("DataStore").set(this._root, "layer", this)
            };
            d._getDefaultBehaviors = function() {
                return []
            };
            d.getCausalElement = function() {
                return this._causalElement
            };
            d.setCausalElement = function(a) {
                this._causalElement = a;
                return this
            };
            d.getInsertParent = function() {
                return this._insertParent || document.body
            };
            d.getRoot = function() {
                this._root || (this._destroyed ? b("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : b("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
                return this._root
            };
            d.getContentRoot = function() {
                return this.getRoot()
            };
            d._buildWrapper = function(a, b) {
                return b
            };
            d.setInsertParent = function(a) {
                a && (this._shown && a !== this.getInsertParent() && (b("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
                return this
            };
            d.showAfterDelay = function(a) {
                window.setTimeout(this.show.bind(this), a)
            };
            d.show = function() {
                var c = this;
                if (this._shown) return this;
                var d = this.getRoot();
                d != null || g(0, 5142);
                this.inform("beforeshow");
                b("Style").set(d, "visibility", "hidden");
                b("Style").set(d, "overflow", "hidden");
                b("CSS").show(d);
                b("DOM").appendContent(this.getInsertParent(), d);
                this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function() {
                    c._shown && h.push(c)
                }, 0)) : b("CSS").hide(d);
                b("Style").set(d, "visibility", "");
                b("Style").set(d, "overflow", "");
                b("Style").set(d, "opacity", "1");
                this.inform("aftershow");
                return this
            };
            d.hide = function(a) {
                if (this._isStrictlyControlled) {
                    this._shown && this.inform("runhide", a);
                    return this
                }
                return this._hide()
            };
            d._hide = function() {
                if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
                this._hiding = !0;
                this.inform("starthide") !== !1 && this.finishHide();
                return this
            };
            d.conditionShow = function(a) {
                return a ? this.show() : this._hide()
            };
            d.finishHide = function() {
                if (this._shown) {
                    this._permanent || b("removeFromArray")(h, this);
                    this._hiding = !1;
                    this._shown = !1;
                    var c = this.getRoot();
                    c != null || g(0, 5143);
                    b("CSS").hide(c);
                    this.inform("hide");
                    a.inform("hide", this)
                }
            };
            d.isShown = function() {
                return this._shown
            };
            d.updatePosition = function() {
                return !0
            };
            d.destroy = function() {
                this.containsReactComponent && b("BootloadedReact").unmountComponentAtNode(this._reactContainer);
                this.finishHide();
                var c = this.getRoot();
                b("DOM").remove(c);
                this.destroyBehaviors();
                this.inform("destroy");
                a.inform("destroy", this);
                b("DataStore").remove(c, "layer");
                this._root = this._causalElement = null;
                this._destroyed = !0
            };
            a.init = function(a, b) {
                a.init(b)
            };
            a.initAndShow = function(a, b) {
                a.init(b).show()
            };
            a.show = function(a) {
                a.show()
            };
            a.showAfterDelay = function(a, b) {
                a.showAfterDelay(b)
            };
            a.getTopmostLayer = function() {
                return h[h.length - 1]
            };
            a.informBlur = function(a) {
                j = null;
                k = null;
                var c = h.length;
                if (!c) return;
                while (c--) {
                    var d = h[c],
                        e = d.getContentRoot();
                    e != null || g(0, 5144);
                    if (b("ContextualThing").containsIncludingLayers(e, a)) return;
                    if (d.inform("blur", {
                            target: a
                        }) === !1 || d.isShown()) return
                }
            };
            return a
        }(b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")));
    e.exports = i;
    Object.assign(i, b("ArbiterMixin"));
    Object.assign(i.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null
    });
    b("Event").listen(document.documentElement, "keydown", function(a) {
        if (b("KeyEventController").filterEventTargets(a, "keydown"))
            for (var c = h.length - 1; c >= 0; c--)
                if (h[c].inform("key", a) === !1) return !1;
        return !0
    }, b("Event").Priority.URGENT);
    var j;
    b("Event").listen(document.documentElement, "mousedown", function(a) {
        j = a.getTarget()
    });
    var k;
    b("Event").listen(document.documentElement, "mouseup", function(a) {
        k = a.getTarget(), b("setImmediate")(function() {
            j = null, k = null
        })
    });
    b("Event").listen(document.documentElement, "click", function(a) {
        var c = j,
            d = k;
        j = null;
        k = null;
        var e = h.length;
        if (!e) return;
        e = a.getTarget();
        if (e !== d || e !== c) return;
        if (!b("DOM").contains(document.documentElement, e)) return;
        if (e.offsetWidth != null && !e.offsetWidth) return;
        if (b("Parent").byClass(e, "generic_dialog")) return;
        i.informBlur(e)
    })
}), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = j;
    var g = function() {
        var a = null;
        return function() {
            var b = document.body;
            if (b == null) return null;
            (a == null || !b.contains(a)) && (a = document.createElement("div"), a.style.left = Number.MAX_SAFE_INTEGER + "px", a.style.width = "100%", a.style.height = "100%", a.style.position = "fixed", b.appendChild(a));
            return a
        }
    }();

    function h() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function i() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function j() {
        return {
            width: window.innerWidth || h(),
            height: window.innerHeight || i()
        }
    }
    j.withoutScrollbars = function() {
        return b("UserAgent").isPlatform("Android") ? j() : {
            width: h(),
            height: i()
        }
    };
    j.layout = function() {
        var a, b = g();
        return {
            width: (a = b == null ? void 0 : b.clientWidth) != null ? a : h(),
            height: (a = b == null ? void 0 : b.clientHeight) != null ? a : i()
        }
    }
}), null);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "FlowMigrationUtilsForLegacyFiles", "Layer", "Popup", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    f.init = c;
    f._resizeCheck = h;
    f._getDocumentSize = i;
    f.open = d;
    var g = {
        allowShrink: !0,
        strategy: "vector",
        timeout: 100,
        widthElement: null
    };
    f._opts = g;

    function c(a) {
        Object.assign(g, a), window.setInterval(h, g.timeout)
    }

    function h() {
        var a = b("getViewportDimensions")(),
            c = i(),
            d = b("Layer").getTopmostLayer();
        if (d) {
            d = (d = d.getRoot()) == null ? void 0 : d.firstChild;
            d || b("FlowMigrationUtilsForLegacyFiles").invariantViolation("topMostLayer.getRoot().firstChild is null.");
            var e = b("DOMDimensions").getElementDimensions(d);
            e.height += b("DOMDimensions").measureElementBox(d, "height", !0, !0, !0);
            e.width += b("DOMDimensions").measureElementBox(d, "width", !0, !0, !0);
            c.height = Math.max(c.height, e.height);
            c.width = Math.max(c.width, e.width)
        }
        d = c.height - a.height;
        e = c.width - a.width;
        e < 0 && b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.widthElement) && (e = 0);
        e = e > 1 ? e : 0;
        b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.allowShrink) && d < 0 && (d = 0);
        if (d || e) try {
            window.console && window.console.firebug, window.resizeBy(e, d), e && window.moveBy(e / -2, 0)
        } catch (a) {}
    }

    function i() {
        var c = b("DOMDimensions").getDocumentDimensions();
        if (g.strategy === "offsetHeight") {
            var d = document.body;
            if (!d) b("FlowMigrationUtilsForLegacyFiles").invariantViolation("document.body is null.");
            else {
                c.height = (d = d.offsetHeight) != null ? d : 0
            }
        }
        if (b("FlowMigrationUtilsForLegacyFiles").isFalsy(g.widthElement) && typeof g.widthElement === "string") {
            d = b("DOMQuery").scry(document.body, g.widthElement)[0];
            d && (c.width = b("DOMDimensions").getElementDimensions(d).width)
        }
        d = a.Dialog;
        d && d.max_bottom && d.max_bottom > c.height && (c.height = d.max_bottom);
        return c
    }

    function d(a, c, d, e) {
        return b("Popup").open(a, d, c, e)
    }
}), null);
__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        cookieName: "dpr"
    })
}), null);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run"], (function(a, b, c, d, e, f) {
    "use strict";
    f.startDetecting = a;
    var g = b("PixelRatioConst").cookieName,
        h = !1,
        i = !1,
        j = !1;

    function k() {
        return window.devicePixelRatio || 1
    }

    function l() {
        b("Cookie").set(g, String(k()))
    }

    function m() {
        b("Cookie").clear(g)
    }

    function n() {
        if (i) return;
        i = !0;
        j && m();
        k() !== 1 ? l() : m()
    }

    function a(a) {
        a && (j = !0);
        if (h) return;
        h = !0;
        "onpagehide" in window && b("DOMEventListener").add(window, "pagehide", n);
        b("Run").onBeforeUnload(n, !1)
    }
}), null);
__d("Queue", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function() {
        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        if (a == null) return null;
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
}), null);
__d("ObservableMixin", [], (function(a, b, c, d, e, f) {
    function a() {
        this.__observableEvents = {}
    }
    a.prototype = {
        inform: function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = Array.prototype.slice.call(this.getSubscribers(a));
            for (var d = 0; d < c.length; d++) {
                if (c[d] === null) continue;
                try {
                    c[d].apply(this, b)
                } catch (a) {
                    window.setTimeout(function() {
                        throw a
                    }, 0)
                }
            }
            return this
        },
        getSubscribers: function(a) {
            return this.__observableEvents[a] || (this.__observableEvents[a] = [])
        },
        clearSubscribers: function(a) {
            a && (this.__observableEvents[a] = []);
            return this
        },
        subscribe: function(a, b) {
            a = this.getSubscribers(a);
            a.push(b);
            return this
        },
        unsubscribe: function(a, b) {
            a = this.getSubscribers(a);
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) {
                    a.splice(c, 1);
                    break
                }
            return this
        }
    };
    e.exports = a
}), null);
__d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            return a.call(this, b) || this
        }
        return b
    }(b("ManagedError"));
    e.exports = a
}), null);
__d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f) {
    function g(a, c) {
        if (typeof a !== "boolean" || !a) throw new(b("AssertionError"))(c);
        return a
    }

    function h(a, c, d) {
        var e;
        if (c === void 0) e = "undefined";
        else if (c === null) e = "null";
        else {
            var f = Object.prototype.toString.call(c);
            e = /\s(\w*)/.exec(f)[1].toLowerCase()
        }
        g(a.indexOf(e) !== -1, d || b("sprintf")("Expression is of type %s, not %s", e, a));
        return c
    }

    function a(a, b, c) {
        g(b instanceof a, c || "Expression not instance of type");
        return b
    }

    function i(a, b) {
        j["is" + a] = b, j["maybe" + a] = function(a, c) {
            a != null && b(a, c)
        }
    }
    var j = {
        isInstanceOf: a,
        isTrue: g,
        isTruthy: function(a, b) {
            return g(!!a, b)
        },
        type: h,
        define: function(a, b) {
            a = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase(), i(a, function(a, c) {
                g(b(a), c)
            })
        }
    };
    ["Array", "Boolean", "Date", "Function", "Null", "Number", "Object", "Regexp", "String", "Undefined"].forEach(function(a) {
        i(a, h.bind(null, a.toLowerCase()))
    });
    e.exports = j
}), null);
__d("Type", ["Assert"], (function(a, b, c, d, e, f) {
    function g() {
        var a = this.__mixins;
        if (a)
            for (var b = 0; b < a.length; b++) a[b].apply(this, arguments)
    }

    function h(a, b) {
        if (b instanceof a) return !0;
        if (b instanceof g)
            for (var c = 0; c < b.__mixins.length; c++)
                if (b.__mixins[c] == a) return !0;
        return !1
    }

    function i(a, b) {
        var c = a.prototype;
        Array.isArray(b) || (b = [b]);
        for (var a = 0; a < b.length; a++) {
            var d = b[a];
            typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
            Object.keys(d).forEach(function(a) {
                c[a] = d[a]
            })
        }
    }

    function j(a, c, d) {
        var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
            this.parent.apply(this, arguments)
        };
        b("Assert").isFunction(e);
        if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
        a = a || g;

        function f() {}
        f.prototype = a.prototype;
        e.prototype = new f();
        c && Object.assign(e.prototype, c);
        e.prototype.constructor = e;
        e.parent = a;
        e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
        d && i(e, d);
        e.prototype.parent = function() {
            this.parent = a.prototype.parent, a.apply(this, arguments)
        };
        e.prototype.parentCall = function(b) {
            return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
        };
        e.extend = function(a, b) {
            return j(this, a, b)
        };
        return e
    }
    Object.assign(g.prototype, {
        instanceOf: function(a) {
            return h(a, this)
        }
    });
    Object.assign(g, {
        extend: function(a, b) {
            return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
        },
        instanceOf: h
    });
    e.exports = g
}), null);
__d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("Type").extend({
        constructor: function(a) {
            this.parent();
            var b = {},
                c = this;
            Object.keys(a).forEach(function(d) {
                b[d] = a[d], c["set" + d] = function(a) {
                    if (a === b[d]) return c;
                    b[d] = a;
                    c.inform(d + ".change", a);
                    return c
                }, c["get" + d] = function() {
                    return b[d]
                }
            })
        }
    }, b("ObservableMixin"));
    c = a;
    e.exports = c
}), null);
__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f) {
    var g = {
            UNKNOWN: 0,
            PAGETAB: 1,
            CANVAS: 2,
            PLATFORM: 4
        },
        h = new(b("sdk.Model"))({
            AccessToken: "",
            AutoLogAppEvents: !1,
            ClientID: "",
            CookieUserID: "",
            EnforceHttps: !1,
            Environment: g.UNKNOWN,
            GraphDomain: "",
            Initialized: !1,
            IsVersioned: !1,
            KidDirectedSite: void 0,
            Locale: (a = b("JSSDKRuntimeConfig")).locale,
            LoggedIntoFacebook: void 0,
            LoginStatus: void 0,
            Revision: a.revision,
            Rtl: a.rtl,
            Scope: void 0,
            SDKAB: a.sdkab,
            SDKUrl: a.sdkurl,
            SDKNS: a.sdkns,
            UseCookie: !1,
            UseLocalStorage: !0,
            UserID: "",
            Version: void 0
        });
    Object.assign(h, {
        ENVIRONMENTS: g,
        isEnvironment: function(a) {
            var b = this.getEnvironment();
            return (a | b) === b
        },
        isCanvasEnvironment: function() {
            return this.isEnvironment(g.CANVAS) || this.isEnvironment(g.PAGETAB)
        }
    });
    (function() {
        var a = /app_runner/.test(window.name) ? g.PAGETAB : /iframe_canvas/.test(window.name) ? g.CANVAS : g.UNKNOWN;
        (a | g.PAGETAB) === a && (a |= g.CANVAS);
        h.setEnvironment(a)
    })();
    c = h;
    e.exports = c
}), null);
__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], (function(a, b, c, d, e, f, g) {
    f.resolve = a;

    function a(a) {
        var c = "https";
        if (a === "graph_domain") {
            var d = b("sdk.Runtime").getGraphDomain();
            d ? a = "graph_".concat(d) : a = "graph"
        }
        if (a in b("UrlMapConfig")) return c + "://" + b("UrlMapConfig")[a];
        a in b("UrlMapConfig") || g(0, 2511, a);
        return ""
    }
}), null);
__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f) {
    f.log = a;

    function a(a, c) {
        if (c.extra != null && typeof c.extra === "object") {
            var d = c.extra;
            d.revision = b("sdk.Runtime").getRevision()
        }
        new Image().src = b("QueryString").appendToUrl(b("UrlMap").resolve("www") + "/common/scribe_endpoint.php", {
            c: a,
            m: JSON.stringify(c)
        })
    }
}), null);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], (function(a, b, c, d, e, f) {
    var g, h, i = {
        _callbacks: [],
        _opts: {
            autoResize: !1,
            allowShrink: !0,
            channelUrl: null,
            hideOverflow: !1,
            resizeTimeout: 1e3,
            resizeWidth: !1
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        _forcedMinWidth: 100,
        init: function(a) {
            this._opts = babelHelpers["extends"]({}, this._opts, a), this._opts.autoResize && this._startResizeMonitor(), b("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, b) {
                b.id || (b.id = this._resizeCount), b.id > this._lastResizeAckId && (this._lastResizeAckId = b.id)
            }.bind(this))
        },
        getQueue: function() {
            this._queue || (this._queue = new(b("Queue"))());
            return this._queue
        },
        setChannelUrl: function(a) {
            var b = this;
            this.getQueue().start(function(c) {
                return b.send(c, a)
            })
        },
        send: function(a, c) {
            a === void 0 && (a = null);
            c === void 0 && (c = null);
            c = c || this._opts.channelUrl;
            if (!c) {
                this.getQueue().enqueue(a);
                return
            }
            var d = {};
            c = new(g || (g = b("URI")))(c);
            Object.assign(d, a, (h || (h = b("PHPQuerySerializer"))).deserialize(c.getFragment()));
            c = new g(d.origin);
            if (c.getDomain() === "") {
                b("Log").error("No valid domain for XD message target.");
                return
            }
            var e = c.getOrigin();
            if (typeof d.relation !== "string") {
                b("Log").error("No relation specified to resolve XD target window.");
                return
            }
            var f = b("resolveWindow")(d.relation.replace(/^parent\./, "")),
                i = 1;
            c = function c() {
                try {
                    f.postMessage((h || (h = b("PHPQuerySerializer"))).serialize(d), e)
                } catch (d) {
                    --i ? window.setTimeout(c, 200) : b("sdk.Scribe").log("jssdk_error", {
                        error: "POST_MESSAGE",
                        extra: {
                            message: d.message + ", html/js/modules/XD.js:139",
                            ancestor_origins: JSON.stringify(location.ancestorOrigins),
                            referrer: document.referrer,
                            data: a
                        }
                    })
                }
            };
            c()
        },
        _computeSize: function() {
            var a = b("DOMDimensions").getDocumentDimensions(),
                c = 0;
            if (this._opts.resizeWidth) {
                var d = document.body;
                if (d != null) {
                    if (d.clientWidth < d.scrollWidth) c = a.width;
                    else {
                        d = d.lastElementChild;
                        if (d != null && d instanceof HTMLElement) {
                            d = d;
                            d = d.offsetLeft + d.offsetWidth;
                            d > c && (c = d)
                        }
                    }
                    c = Math.max(c, i._forcedMinWidth)
                } else c = i._forcedMinWidth
            }
            a.width = c;
            this._opts.allowShrink && (this._shrinker || (this._shrinker = b("DOM").create("div")), b("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
            return a
        },
        _startResizeMonitor: function() {
            var a, c;
            a = (a = document.documentElement) != null ? a : {};
            if (this._opts.hideOverflow) {
                a.style.overflow = "hidden";
                ((a = document.body) != null ? a : {}).style.overflow = "hidden"
            }
            a = function() {
                var a = this._computeSize(),
                    d = Date.now();
                if (!c || this._opts.allowShrink && c.width != a.width || !this._opts.allowShrink && c.width < a.width || this._opts.allowShrink && c.height != a.height || !this._opts.allowShrink && c.height < a.height) {
                    c = a;
                    this._resizeCount++;
                    this._resizeTimestamp = d;
                    d = {
                        type: "resize",
                        height: a.height,
                        ackData: {
                            id: this._resizeCount
                        },
                        width: 0
                    };
                    a.width && a.width != 0 && (d.width = a.width);
                    try {
                        if (b("isFacebookURI")(new(g || (g = b("URI")))(document.referrer)) && b("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && b("isFacebookURI")(new(g || (g = b("URI")))(window.parent.location))) {
                            a = window.parent.document.getElementsByTagName("iframe");
                            for (var e = 0; e < a.length; e++) a[e].name == window.name && (this._opts.resizeWidth && (a[e].style.width = d.width + "px"), a[e].style.height = d.height + "px")
                        }
                        this.send(d)
                    } catch (a) {
                        this.send(d)
                    }
                }
            }.bind(this);
            a();
            window.setInterval(a, this._opts.resizeTimeout)
        }
    };
    f.XD = i;
    c = babelHelpers["extends"]({}, i);
    f.UnverifiedXD = c;
    a.UnverifiedXD = c;
    a.XD = i
}), null);
__d("Plugin", ["Arbiter", "ArbiterFrame"], (function(a, b, c, d, e, f) {
    var g = {
        CONNECT: "platform/plugins/connect",
        DISCONNECT: "platform/plugins/disconnect",
        ERROR: "platform/plugins/error",
        RELOAD: "platform/plugins/reload",
        DIALOG: "platform/plugins/dialog",
        connect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.CONNECT, a);
            b("ArbiterFrame").inform(g.CONNECT, a)
        },
        disconnect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.DISCONNECT, a);
            b("ArbiterFrame").inform(g.DISCONNECT, a)
        },
        error: function(a, c) {
            b("Arbiter").inform(g.ERROR, {
                action: a,
                content: c
            })
        },
        reload: function(a) {
            b("Arbiter").inform(g.RELOAD, {
                reloadUrl: a || ""
            }), b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: a || ""
            })
        },
        reloadOtherPlugins: function(a, c) {
            b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: "",
                reload: a || "",
                identifier: c || ""
            })
        }
    };
    e.exports = g
}), null);
__d("PluginBundleInit", ["DOM"], (function(a, b, c, d, e, f) {
    f.init = a;

    function a() {
        var a = document.getElementById("jsbundle-loader");
        a && b("DOM").remove(a)
    }
}), null);
__d("PluginCSSReflowHack", ["Style"], (function(a, b, c, d, e, f) {
    f.trigger = a;

    function a(a) {
        setTimeout(function() {
            var c = "border-bottom-width",
                d = b("Style").get(a, c);
            b("Style").set(a, c, parseInt(d, 10) + 1 + "px");
            b("Style").set(a, c, d)
        }, 1e3)
    }
}), null);
__d("StrSet", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$2 = {}, this.$1 = 0, a && this.addAll(a)
        }
        var b = a.prototype;
        b.add = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
            return this
        };
        b.addAll = function(a) {
            a.forEach(this.add, this);
            return this
        };
        b.remove = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
            return this
        };
        b.removeAll = function(a) {
            a.forEach(this.remove, this);
            return this
        };
        b.toArray = function() {
            return Object.keys(this.$2)
        };
        b.toMap = function(a) {
            var b = {};
            Object.keys(this.$2).forEach(function(c) {
                b[c] = typeof a === "function" ? a(c) : a || !0
            });
            return b
        };
        b.contains = function(a) {
            return Object.prototype.hasOwnProperty.call(this.$2, a)
        };
        b.count = function() {
            return this.$1
        };
        b.clear = function() {
            this.$2 = {};
            this.$1 = 0;
            return this
        };
        b.clone = function() {
            return new a(this)
        };
        b.forEach = function(a, b) {
            Object.keys(this.$2).forEach(a, b)
        };
        b.map = function(a, b) {
            return Object.keys(this.$2).map(a, b)
        };
        b.some = function(a, b) {
            return Object.keys(this.$2).some(a, b)
        };
        b.every = function(a, b) {
            return Object.keys(this.$2).every(a, b)
        };
        b.filter = function(b, c) {
            return new a(Object.keys(this.$2).filter(b, c))
        };
        b.union = function(a) {
            return this.clone().addAll(a)
        };
        b.intersect = function(a) {
            return this.filter(function(b) {
                return a.contains(b)
            })
        };
        b.difference = function(a) {
            var b = this;
            return a.filter(function(a) {
                return !b.contains(a)
            })
        };
        b.equals = function(a) {
            var b = function(a, b) {
                    return a === b ? 0 : a < b ? -1 : 1
                },
                c = this.toArray();
            a = a.toArray();
            if (c.length !== a.length) return !1;
            var d = c.length;
            c = c.sort(b);
            a = a.sort(b);
            while (d--)
                if (c[d] !== a[d]) return !1;
            return !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    var h = new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),
        i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;

    function k(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
        h.contains(c) || g(0, 3769);
        a = a.indexOf("/") !== 0 ? "/" + a : a;
        return "/" + c + a
    }

    function a() {
        return b("PlatformVersions").LATEST
    }

    function c(a) {
        return a.setPath(k(a.getPath(), j))
    }

    function d(a) {
        return k(a, j)
    }

    function f(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    i = {
        addVersionToPath: k,
        getLatestVersion: a,
        versionAwareURI: c,
        versionAwarePath: d,
        getUnversionedPath: f
    };
    a = i;
    e.exports = a
}), null);
__d("PluginMessage", ["DOMEventListener"], (function(a, b, c, d, e, f) {
    f.listen = a;

    function a() {
        b("DOMEventListener").add(window, "message", function(a) {
            if (/\.facebook\.com$/.test(a.origin) && /^FB_POPUP:/.test(a.data)) {
                a = JSON.parse(a.data.substring(9));
                "reload" in a && /^https?:/.test(a.reload) && document.location.replace(a.reload)
            }
        })
    }
}), null);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformVersioning", "PluginMessage", "PopupWindow", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        Object.assign(this, {
            plugin: a,
            confirm_params: {},
            return_params: (g || (g = b("URI"))).getRequestURI().getQueryData()
        }), this.addReturnParams({
            ret: "sentry"
        }), delete this.return_params.hash
    }
    Object.assign(h.prototype, {
        addConfirmParams: function(a) {
            Object.assign(this.confirm_params, a)
        },
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        start: function() {
            var a = b("PlatformVersioning").versionAwareURI(new(g || (g = b("URI")))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: g.getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = b("PopupWindow").open(a.toString(), 320, 486);
            b("PluginMessage").listen();
            return this
        }
    });
    h.starter = function(a, b, c) {
        a = new h(a);
        a.addConfirmParams(b || {});
        a.addReturnParams(c || {});
        return a.start.bind(a)
    };
    h.listen = function(a, c, d, e) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), h.starter(c, d, e)()
        })
    };
    e.exports = h
}), null);
__d("PluginDOMEventListener", ["DOMEventListener", "Log", "UserAgent", "promiseDone"], (function(a, b, c, d, e, f) {
    f.add = a;
    var g = !b("UserAgent").isBrowser("Safari < 12") && typeof document.hasStorageAccess === "function",
        h = !g,
        i = !1;
    !h && g && b("promiseDone")(document.hasStorageAccess(), function(a) {
        b("Log").debug("hasStorageAccess=%s", a), h = a
    }, function(a) {
        return b("Log").warn("Storage access check failed: %s", a)
    });

    function a(a, c, d, e) {
        e === void 0 && (e = !1);
        if (!g || h || i) return b("DOMEventListener").add.apply(this, arguments);
        else {
            var f = function() {
                for (var a = arguments.length, c = new Array(a), e = 0; e < a; e++) c[e] = arguments[e];
                if (h || i) return d.apply(this, c);
                else {
                    var f = document.requestStorageAccess().then(function(a) {
                        b("Log").debug("Storage access request granted.");
                        h = !0;
                        return d.apply(this, c)
                    }.bind(this), function(a) {
                        b("Log").warn("Storage access request denied.");
                        i = !0;
                        return d.apply(this, c)
                    }.bind(this));
                    b("promiseDone")(f)
                }
            };
            return b("DOMEventListener").add.call(this, a, c, f, e)
        }
    }
    c = b("DOMEventListener").remove;
    f.remove = c
}), null);
__d("PluginITP", ["PluginDOMEventListener", "promiseDone"], (function(a, b, c, d, e, f) {
    f.init = a;

    function a() {
        if (!("hasStorageAccess" in document)) return;
        b("promiseDone")(document.hasStorageAccess(), function(a) {
            document.body && !a && b("PluginDOMEventListener").add(document.body, "click", function() {
                location.reload()
            })
        })
    }
}), null);
__d("idx", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = a;

    function a(a, d) {
        try {
            return d(a)
        } catch (a) {
            if (a instanceof TypeError)
                if (b(a)) return null;
                else if (c(a)) return void 0;
            throw a
        }
    }
    var g;

    function b(a) {
        a = a.message;
        g || (g = i("null"));
        return g.test(a)
    }
    var h;

    function c(a) {
        a = a.message;
        h || (h = i("undefined"));
        return h.test(a)
    }

    function i(a) {
        return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ")
    }
}), null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    var g = 3,
        h = 14,
        i = {
            ROUND: "ROUND",
            TRUNCATE: "TRUNCATE"
        },
        j = {
            SHORT: "SHORT",
            LONG: "LONG"
        };

    function a(a, c, d, e) {
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d),
            m = l[0],
            n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }

    function k(a, c, d, e, f) {
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}), null);
__d("PluginIconButton", ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a, c, d, e) {
            var f = this;
            a.removeAttribute("id");
            e === null || d !== null || h(0, 2812);
            this.$1 = a;
            this.$2 = d;
            this.$3 = e;
            c === !1 && (b("Event").listen(a, "click", function() {
                return f.toggleButton()
            }), b("Event").listen(a, "toggle", function() {
                return f.toggleButton()
            }))
        }
        var c = a.prototype;
        c.toggleButton = function() {
            var a = this;
            b("CSS").hasClass(this.$1, "active") === !1 ? (b("CSS").addClass(this.$1, "active"), this.$4(!0), b("CSS").addClass(this.$1, "is_animating"), setTimeout(function() {
                b("CSS").removeClass(a.$1, "is_animating")
            }, 240)) : (b("CSS").removeClass(this.$1, "active"), this.$4(!1))
        };
        c.setTitle = function(a) {
            this.$1.setAttribute("title", a)
        };
        c.$4 = function(a) {
            var c = function(a) {
                return g._("{count}", [g._param("count", b("intlSummarizeNumber")(a, 0))])
            };
            this.$3 != null && this.$3 < 1e3 && (this.$3 = a ? this.$3 + 1 : this.$3 - 1, b("DOM").setContent(this.$2, c(this.$3)))
        };
        c.isActivated = function() {
            return b("CSS").hasClass(this.$1, "active")
        };
        return a
    }();
    e.exports = a
}), null);
__d("BanzaiLogger", ["Banzai"], (function(a, b, c, d, e, f) {
    function g(a) {
        return {
            log: function(c, d) {
                b("Banzai").post("logger:" + c, d, a)
            },
            create: g
        }
    }
    a = g();
    c = a;
    e.exports = c
}), null);
__d("PluginPageActionLogger", ["BanzaiLogger", "DOMEventListener", "DOMQuery", "ODS"], (function(a, b, c, d, e, f) {
    f.initializeClickLoggers = a;

    function a(a, c, d, e, f, g, h, i, j, k) {
        function l(f, g) {
            f = b("DOMQuery").scry(e, "." + f)[0];
            if (!f) return;
            b("DOMEventListener").add(f, "click", function(e) {
                b("ODS").bumpEntityKey(2966, "platform_www", "platform.plugin.page.action"), b("BanzaiLogger").log("PagePluginActionsLoggerConfig", {
                    page_id: c,
                    page_plugin_action: g,
                    page_plugin_action_type: "click",
                    referer_url: d,
                    is_sdk: a
                })
            })
        }
        l(f, "page_like");
        l(g, "page_unlike");
        l(h, "page_avatar");
        l(i, "page_permalink");
        l(j, "page_share");
        l(k, "page_cta")
    }
}), null);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f) {
    a = b("XD").UnverifiedXD;
    e.exports = a
}), null);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a || document.body;
        var c = 0,
            d = b("getOffsetParent")(a);
        b("Locale").isRTL() && d ? c = d.offsetWidth - a.offsetLeft - a.offsetWidth : b("Locale").isRTL() || (c = a.offsetLeft);
        return h(a) + c
    }

    function h(a) {
        return Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) || a.offsetWidth
    }

    function i(a) {
        a = a || document.body;
        return a.offsetHeight + a.offsetTop
    }

    function j(a, b, c) {
        this.calcWidth = a || g, this.calcHeight = b || i, this.width = void 0, this.height = void 0, this.event = c || "resize"
    }
    Object.assign(j.prototype, {
        resize: function() {
            var a = this.calcWidth(),
                c = this.calcHeight();
            (a !== this.width || c !== this.height) && (b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)", a, c, this.event), this.width = a, this.height = c, b("UnverifiedXD").send({
                type: this.event,
                width: a,
                height: c
            }));
            return this
        },
        auto: function(a) {
            setInterval(this.resize.bind(this), a || 250);
            return this
        }
    });
    j.auto = function(a, b, c) {
        return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c)
    };
    j.autoHeight = function(a, b, c, d) {
        return new j(function() {
            return a
        }, i.bind(null, b), c).resize().auto(d)
    };
    j.getElementWidth = h;
    e.exports = j
}), null);
__d("PlatformWidgetEndpoint", ["PlatformVersioning"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        return b("PlatformVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""))
    }

    function c(a, c) {
        return b("PlatformVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""))
    }

    function d(a) {
        return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }

    function f(a) {
        return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }
    a = {
        dialog: a,
        plugins: c,
        isPluginEndpoint: d,
        isDialogEndpoint: f
    };
    e.exports = a
}), null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], (function(a, b, c, d, e, f, g) {
    var h;
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function(a, c) {
        if (c.error_code) {
            b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
            return
        }
        b("Plugin").reload(c.plugin_reload)
    });
    var i = {
        auto: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                a = typeof b === "object" ? b.reloadUrl : b;
                i.reload(a)
            })
        },
        syncPlugins: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier)
            })
        },
        reload: function(a, c, d) {
            d = (h || (h = b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
            if (a) {
                var c = new(h || (h = b("URI")))(a);
                b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
                d.setPath(c.getPath()).addQueryData(c.getQueryData())
            }
            window.location.replace(d.toString())
        }
    };
    e.exports = i
}), null);
__d("XSharePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/share/logging/", {})
}), null);
__d("PluginShareActions", ["AsyncRequest", "Event", "XSharePluginLoggingController"], (function(a, b, c, d, e, f) {
    "use strict";
    f.init = a;

    function a(a, c, d, e, f, g, h) {
        b("Event").listen(f, "click", function(f) {
            new(b("AsyncRequest"))().setURI(b("XSharePluginLoggingController").getURIBuilder().getURI()).setData({
                app_id: g,
                href: a,
                layout: c,
                event: "click",
                has_iframe: d,
                referer_url: e
            }).send()
        })
    }
}), null);
__d("SecurePostMessage", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
        sendMessageToSpecificOrigin: function(a, b, c, d) {
            c !== h || g(0, 21157), a.postMessage(b, c, d)
        },
        sendMessageForCurrentOrigin: function(a, b) {
            a.postMessage(b)
        },
        sendMessageAllowAnyOrigin_UNSAFE: function(a, b, c) {
            a.postMessage(b, h, c)
        }
    };
    e.exports = a
}), null);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], (function(a, b, c, d, e, f) {
    c = {
        handleMessage: function(a) {
            b("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
            if (!a.method) return;
            try {
                b("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    window.addEventListener("message", function(a) {
        b("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
        if (a.data.xdArbiterSyn) b("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0
        });
        else if (a.data.xdArbiterHandleMessage) {
            if (!a.data.message.method) return;
            try {
                b("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent")
            } catch (a) {}
        }
    }, !1);
    a.XdArbiter = c;
    b("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    d = null;
    e.exports = d
}), null);
__d("BanzaiScubaMigrationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1949898");
    c = b("FalcoLoggerInternal").create("banzai_scuba_migration", a);
    e.exports = c
}), null);
__d("BanzaiScuba_DEPRECATED", ["Banzai", "BanzaiScubaMigrationFalcoEvent", "FBLogger", "gkx"], (function(a, b, c, d, e, f) {
    var g = "scuba_sample";
    a = function() {
        function a(a, c, d) {
            this.posted = !1, a || b("FBLogger")("BanzaiScuba").warn("Can't post a sample without a dataset"), this.dataset = a, this.$1 = c, this.options = d
        }
        var c = a.prototype;
        c.$2 = function(a, c, d) {
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to add to an already posted sample");
                return a
            }
            a = a || {};
            a[c] = d;
            return a
        };
        c.addNormal = function(a, b) {
            this.normal = this.$2(this.normal, a, b);
            return this
        };
        c.addInteger = function(a, b) {
            this["int"] = this.$2(this["int"], a, b);
            return this
        };
        c.addDenorm = function(a, b) {
            this.denorm = this.$2(this.denorm, a, b);
            return this
        };
        c.addTagSet = function(a, b) {
            this.tags = this.$2(this.tags, a, b);
            return this
        };
        c.addNormVector = function(a, b) {
            this.normvector = this.$2(this.normvector, a, b);
            return this
        };
        c.post = function(a) {
            var c = this;
            if (this.posted) {
                b("FBLogger")("BanzaiScuba").warn("Trying to re-post");
                return
            }
            if (!this.dataset) return;
            var d = {};
            d._ds = this.dataset;
            d._options = this.options;
            this.normal && (d.normal = this.normal);
            this["int"] && (d["int"] = this["int"]);
            this.denorm && (d.denorm = this.denorm);
            this.tags && (d.tags = this.tags);
            this.normvector && (d.normvector = this.normvector);
            this.$1 !== null && this.$1 !== "" && this.$1 !== void 0 && (d._lid = this.$1);
            b("gkx")("1955413") ? b("BanzaiScubaMigrationFalcoEvent").log(function() {
                return {
                    dataset: c.dataset,
                    payload: d
                }
            }) : b("Banzai").post(g, d, a);
            this.posted = !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    });
    e.exports = a
}), null);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        a = b("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
}), null);
__d("FbtLogging", ["cr:1094907"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    f.logImpression = a
}), null);
__d("InlineFbtResultImpl", ["cx", "FbtHooks", "FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f, g) {
    var h;

    function i(a, c, d, e) {
        var f = "_4qba";
        e != null && e != "" && (c === "TRANSLATION" ? f = "_4qbb" : c === "APPROVE" ? f = "_4qbc" : c === "REPORT" && (f = "_4qbd"));
        return {
            $$typeof: b("FbtReactUtil").REACT_ELEMENT_TYPE,
            type: "em",
            key: null,
            ref: null,
            props: {
                className: f,
                "data-intl-hash": e,
                "data-intl-translation": d,
                "data-intl-trid": "",
                children: a,
                suppressHydrationWarning: !0
            },
            _owner: null
        }
    }
    var j = function(a) {
        return i(a.content, a.inlineMode, a.translation, a.hash)
    };
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f) {
            var g;
            g = a.call(this, c, (h || (h = b("FbtHooks"))).getErrorListener({
                translation: e,
                hash: f
            })) || this;
            g.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            g.key = null;
            g.ref = null;
            g.type = j;
            g.props = {
                content: c,
                inlineMode: d,
                translation: e,
                hash: f
            };
            return g
        }
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("IntlQtEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    c = b("FalcoLoggerInternal").create("intl_qt_event", a);
    e.exports = c
}), null);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "BladeRunnerTypes", "JSResource", "ODS", "PersistedQueue", "Queue", "WebSession", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    f.attach = a;
    var g = 5 * 1024,
        h = 60 * 1e3,
        i = 1e3,
        j = "falco:",
        k = new(b("Queue"))(),
        l = [],
        m = 0,
        n, o = !1,
        p = !1,
        q = !1,
        r = !0;

    function s(a, b) {
        var c = b.item.extra.length;
        m + c > g && (clearTimeout(n), t());
        l.push([a, b]);
        m += c
    }

    function t() {
        n = null;
        o = !1;
        var a = l;
        k.enqueue(function(b) {
            return b.log(a.map(function(a) {
                return a[1].item
            }), function(b) {
                for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                        e = d[0];
                    d = d[1];
                    e.markItem(d, b)
                }
            })
        });
        l = [];
        m = 0
    }

    function u(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3
                }
            })
        }
    }

    function v(a) {
        return Object.freeze({
            deviceId: b("AnalyticsCoreData").device_id,
            sessionId: a,
            appId: b("AnalyticsCoreData").app_id,
            pushPhase: b("AnalyticsCoreData").push_phase
        })
    }

    function w(a, c) {
        x("planes.banzai.write", a.length);
        for (var d = 0; d < a.length; d++) {
            var e, f = a[d];
            b("Banzai").post(j + f.name, (e = {}, e.e = f.extra, e.r = f.policy.r, e.d = b("AnalyticsCoreData").device_id, e.s = b("WebSession").getId(), e), c)
        }
    }

    function x(a, c) {
        if (!b("AnalyticsCoreData").enable_ods) return;
        b("ODS").bumpEntityKey(1344, "falco.fabric.www." + b("AnalyticsCoreData").push_phase, a, c)
    }
    var y = {
        log: function(a, c) {
            w(a, b("Banzai").BASIC), c(!0)
        },
        logImmediately: function(a, c) {
            w(a, b("Banzai").VITAL), c(!0)
        },
        logCritical: function(a, b) {
            w(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function z() {
        if (p) return;
        b("JSResource").loadAll([b("JSResource")("BladeRunnerClient").__setRef("FalcoLoggerTransports"), b("JSResource")("BladeRunnerStreamHandler").__setRef("FalcoLoggerTransports")], function(a, c) {
            a = new a();
            var d = a.requestStream({
                method: "Falco"
            }, JSON.stringify(v(b("WebSession").getId())), new c(null, null, function(a) {
                switch (a) {
                    case b("BladeRunnerTypes").StreamStatus.REJECTED:
                        r = !1;
                        k.start(function(a) {
                            return a(y)
                        });
                        break;
                    case b("BladeRunnerTypes").StreamStatus.STARTED:
                        k.start(function(a) {
                            return a({
                                log: function(c, a) {
                                    x("planes.bladerunner.write", c.length);
                                    c = JSON.stringify(u(c));
                                    b("AnalyticsCoreData").enable_ack ? b("promiseDone")(d.amendWithAck(c).then(function(b) {
                                        return a(b)
                                    })["catch"](function(b) {
                                        return a(!1)
                                    })) : (d.amendFireAndForget(c), a(!0))
                                },
                                logImmediately: function(b, a) {
                                    this.log(b, a)
                                },
                                logCritical: function(b, a) {
                                    this.log(b, a)
                                }
                            })
                        });
                        break;
                    case b("BladeRunnerTypes").StreamStatus.CLOSED:
                        k.stop(!0);
                        p = !1;
                        break
                }
            }, function(a) {}, function(a) {}))
        });
        p = !0
    }

    function A(a) {
        return b("AnalyticsCoreData").enable_bladerunner && r && a.s === 1
    }

    function a() {
        if (q) return;
        q = !0;
        b("PersistedQueue").setHandler("falco_queue_log", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                A(b.item.policy) ? (z(), n == null && (n = setTimeout(t, h)), s(a, b)) : y.log([b.item], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        });
        b("PersistedQueue").setHandler("falco_queue_immediately", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                A(b.item.policy) ? (z(), (n == null || !o) && (clearTimeout(n), n = setTimeout(t, i), o = !0), s(a, b)) : y.logImmediately([b.item], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        });
        b("PersistedQueue").setHandler("falco_queue_critical", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                var c = b.item;
                A(c.policy) ? (z(), k.enqueue(function(d) {
                    return d.logCritical([c], function(c) {
                        return a.markItem(b, c)
                    })
                })) : y.logCritical([c], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        })
    }
}), null);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f) {
    e.exports = c;
    var g = (d = a.cancelIdleCallback) != null ? d : b("IdleCallbackImplementation").cancelIdleCallback;

    function c(a) {
        g(a)
    }
}), null);
__d("SubscriptionsHandler", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose
    }

    function i(a) {
        h(a).call(a)
    }
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.addSubscriptions = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            b.every(h) || g(0, 3659);
            this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(i)
        };
        b.engage = function() {
            this.$1 == null && (this.$1 = [])
        };
        b.release = function() {
            this.$1 != null && (this.$1.forEach(i), this.$1 = null)
        };
        b.releaseOne = function(a) {
            var b = this.$1;
            if (b == null) return;
            var c = b.indexOf(a);
            c !== -1 && (i(a), b.splice(c, 1), b.length === 0 && (this.$1 = null))
        };
        return a
    }();
    e.exports = a
}), null);
__d("getContextualParent", ["ge"], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a, c) {
        c === void 0 && (c = !1);
        var d = !1;
        a = a;
        do {
            if (a instanceof Element) {
                var e = a.getAttribute("data-ownerid");
                if (e) {
                    a = b("ge")(e);
                    d = !0;
                    continue
                }
            }
            a = a.parentNode
        } while (c && a && !d);
        return a
    }
}), null);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l = [],
        m = null,
        n = {
            _clearPostBuffer: function() {
                l = []
            },
            _gatherWadsAndPostsFromBuffer: function(a, c, d, e, f) {
                var g = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: f,
                    wadMap: new Map()
                };
                d = e.filter(function(d, e) {
                    return b("BanzaiUtils").filterPost(d, a, c, g)
                });
                g.overlimit && d.length && n._schedule(0);
                return d
            },
            _getEventTime: function() {
                return (g || (g = b("performanceAbsoluteNow")))()
            },
            _getWebSessionId: function() {
                return b("WebSession").getId()
            },
            _getPostBuffer: function() {
                return l
            },
            _getUserId: function() {
                return b("CurrentUser").getPossiblyNonFacebookUserID()
            },
            _getAppId: function() {
                return b("CurrentUser").getAppID()
            },
            _initialize: function() {
                b("ExecutionEnvironment").canUseDOM && (n.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                    n._getPostBuffer().length > 0 && (n._tryToSendViaBeacon() || n._store(!1))
                }), n.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                    n._tryToSendViaBeacon() || n._restore(!1)
                })) : n.adapter.setHooks(n), n.adapter.setUnloadHook(n), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                    if (c.pageType !== "normal") return;
                    n._restore(!1);
                    b("NavigationMetrics").removeCurrentListener()
                }))
            },
            _sendBeacon: function(b, c) {
                return a.navigator.sendBeacon(b, c)
            },
            _prepForTransit: function(a) {
                var c = new FormData();
                c.append("ts", String(Date.now()));
                var d = {};
                Object.keys(d).sort().forEach(function(a) {
                    var b = d[a];
                    if (b === void 0) return;
                    if (b === null) {
                        c.append(a, "");
                        return
                    }
                    c.append(a, String(b))
                });
                var e = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(e).forEach(function(a) {
                    c.append(a, e[a])
                });
                c.append("q", JSON.stringify(a));
                return c
            },
            _prepWadForTransit: function(a) {
                b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod())
            },
            _processCallbacksAndSendViaBeacon: function() {
                var a = [],
                    c = [],
                    d = [];
                n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                if (c.length > 0) {
                    c[0].send_method = "beacon";
                    c.map(n._prepWadForTransit);
                    d = n._prepForTransit(c);
                    a = b("BanzaiAdapter").getEndPointUrl(!0);
                    c = n._sendBeacon(a, d);
                    c || b("FBLogger")("banzai").warn("Error sending beacon")
                }
            },
            _restore: function(a) {
                a = b("BanzaiAdapter").getStorage();
                var c = function(a) {
                    l.push(a)
                };
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                n._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT)
            },
            _schedule: function(a) {
                var c = n._getEventTime() + a;
                if (!k || c < k) {
                    k = c;
                    b("SetIdleTimeoutAcrossTransitions").clear(j);
                    j = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(n._sendWithCallbacks, "Banzai.send"), a);
                    return !0
                }
                return !1
            },
            _sendWithCallbacks: function(a, c) {
                k = null;
                n._schedule(n.BASIC.delay);
                if (!b("BanzaiAdapter").readyToSend()) {
                    c && c();
                    return
                }
                if (n.isEnabled("flush_storage_periodically")) {
                    var d = b("BanzaiAdapter").getStorage(),
                        e = function() {
                            n._restore(!1)
                        };
                    (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e])
                }
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
                d = [];
                var f = [];
                l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
                if (d.length <= 0) {
                    b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
                    a && a();
                    return
                }
                d[0].trigger = m;
                m = null;
                d[0].send_method = "ajax";
                d.map(n._prepWadForTransit);
                b("BanzaiAdapter").send(n._prepForTransit(d), function() {
                    f.forEach(function(a) {
                        a = a;
                        a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                        a.__meta.callback && a.__meta.callback()
                    }), a && a()
                }, function(a) {
                    f.forEach(function(c) {
                        b("BanzaiUtils").retryPost(c, a, l)
                    }), c && c()
                })
            },
            _store: function(a) {
                a = b("BanzaiAdapter").getStorage();
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l])
            },
            _testState: function() {
                return {
                    postBuffer: l,
                    triggerRoute: m
                }
            },
            _tryToSendViaBeacon: function() {
                if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
                var a = [],
                    c = [];
                l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
                if (a.length <= 0) return !1;
                a[0].send_method = "beacon";
                a.map(n._prepWadForTransit);
                a = n._prepForTransit(a);
                var d = b("BanzaiAdapter").getEndPointUrl(!0);
                d = n._sendBeacon(d, a);
                if (!d) {
                    c.forEach(function(a) {
                        l.push(a)
                    });
                    return !1
                }
                return !0
            },
            _unload: function() {
                if (b("BanzaiAdapter").config.disabled) return;
                navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && n._processCallbacksAndSendViaBeacon();
                b("BanzaiAdapter").cleanup();
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
                l.length > 0 && ((!n.adapter.useBeacon || !n._tryToSendViaBeacon()) && n._store(!1))
            },
            BASIC: {
                delay: b("BanzaiAdapter").config.MAX_WAIT || (i || (i = b("BanzaiConsts"))).BASIC_WAIT
            },
            BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
            ERROR: i.ERROR,
            OK: i.OK,
            SEND: i.SEND,
            SHUTDOWN: i.SHUTDOWN,
            VITAL: {
                delay: b("BanzaiAdapter").config.MIN_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT
            },
            VITAL_WAIT: i.VITAL_WAIT,
            adapter: b("BanzaiAdapter"),
            canUseNavigatorBeacon: function() {
                return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())
            },
            flush: function(a, c) {
                b("SetIdleTimeoutAcrossTransitions").clear(j), n._sendWithCallbacks(a, c)
            },
            isEnabled: function(a) {
                return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled)
            },
            post: function(a, c, d) {
                a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                var e = a.split(":");
                if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
                    b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return
                }
                var f = "";
                try {
                    var g;
                    f = (g = JSON.stringify(c)) != null ? g : ""
                } catch (c) {
                    b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
                    return
                }
                var h = d == null ? void 0 : d.retry;
                if (b("BanzaiAdapter").config.disabled) return;
                if (!b("ExecutionEnvironment").canUseDOM && !b("ExecutionEnvironment").isInWorker) return;
                var j = n.adapter.getTopLevel();
                if (j) {
                    var k;
                    try {
                        k = j.require("Banzai")
                    } catch (a) {
                        k = null
                    }
                    if (k) {
                        k.post.apply(k, arguments);
                        return
                    }
                }
                var o = b("BanzaiAdapter").config.blacklist;
                if (o && (o.indexOf && (typeof o.indexOf == "function" && o.indexOf(a) != -1))) return;
                var p = f.length,
                    q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
                    r = q;
                (d == null ? void 0 : d.callback) && (r.__meta.callback = d == null ? void 0 : d.callback);
                (d == null ? void 0 : d.compress) != null && (r.__meta.compress = d == null ? void 0 : d.compress);
                var s = d == null ? void 0 : d.delay;
                s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
                if (d == null ? void 0 : d.signal) {
                    r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
                    var t = [{
                        user: n._getUserId(),
                        webSessionId: n._getWebSessionId(),
                        app_id: n._getAppId(),
                        posts: [q],
                        trigger: a
                    }];
                    b("BanzaiAdapter").send(n._prepForTransit(t), function() {
                        r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT, r.__meta.callback && r.__meta.callback()
                    }, function(a) {
                        b("BanzaiUtils").retryPost(q, a, l)
                    }, !0);
                    if (!h) return
                }
                l.push(q);
                (n._schedule(s) || !m) && (m = a);
                var u = b("BanzaiLazyQueue").flushQueue();
                u.forEach(function(a) {
                    return n.post.apply(n, a)
                })
            },
            subscribe: b("BanzaiAdapter").subscribe
        };
    n._initialize();
    e.exports = n
}), null);
__d("csx", [], (function(a, b, c, d, e, f) {
    e.exports = a;

    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
}), null);