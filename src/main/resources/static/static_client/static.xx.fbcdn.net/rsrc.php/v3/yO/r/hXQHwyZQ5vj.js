if (self.CavalryLogger) {
    CavalryLogger.start_js(["I+BKmGS"]);
}

__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$EventEmitterWithValidation1 = Object.keys(b);
            d.$EventEmitterWithValidation2 = Boolean(c);
            return d
        }
        var c = b.prototype;
        c.emit = function(b) {
            if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
                if (this.$EventEmitterWithValidation2) return;
                throw new TypeError(g(b, this.$EventEmitterWithValidation1))
            }
            return a.prototype.emit.apply(this, arguments)
        };
        return b
    }(b("BaseEventEmitter"));

    function g(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e.exports = a;

    function a(a, b, c) {
        b || g(0, 3159);
        var d = a.prototype || a;
        d.__eventEmitter && g(0, 3160);
        a = a.constructor;
        a && (a === Object || a === Function || g(0, 3161));
        d.__types = babelHelpers["extends"]({}, d.__types, b);
        d.__ignoreUnknownEvents = Boolean(c);
        Object.assign(d, h)
    }
    var h = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new(b("EventEmitterWithValidation"))(this.__types, this.__ignoreUnknownEvents),
                    c = new(b("EventHolder"))();
                this.__eventEmitter = new(b("EventEmitterWithHolding"))(a, c)
            }
            return this.__eventEmitter
        }
    }
}), null);
__d("pageID", ["WebSession"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("WebSession").getPageId_DO_NOT_USE();
    e.exports = a
}), null);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f) {
    var g = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        h = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        i = 0,
        j = {},
        k = function() {
            function a() {
                this.eventTimings = {
                    tti: null,
                    e2e: null,
                    all_pagelets_loaded: null,
                    all_pagelets_displayed: null
                }, this.lid = b("pageID") + ":" + i++, this.extras = {}
            }
            var c = a.prototype;
            c.getLID = function() {
                return this.lid
            };
            c.setRequestStart = function(a) {
                this.start = a;
                return this
            };
            c.setTTI = function(a) {
                this.eventTimings.tti = a;
                this.$1(h.tti, a);
                return this
            };
            c.setE2E = function(a) {
                this.eventTimings.e2e = a;
                this.$1(h.e2e, a);
                return this
            };
            c.setExtra = function(a, b) {
                this.extras[a] = b;
                return this
            };
            c.setDisplayDone = function(a) {
                this.eventTimings.all_pagelets_displayed = a;
                this.setExtra("all_pagelets_displayed", a);
                this.$1(h.all_pagelets_displayed, a);
                return this
            };
            c.setAllPageletsLoaded = function(a) {
                this.eventTimings.all_pagelets_loaded = a;
                this.setExtra("all_pagelets_loaded", a);
                this.$1(h.all_pagelets_loaded, a);
                return this
            };
            c.setServerLID = function(a) {
                this.serverLID = a;
                return this
            };
            c.$1 = function(a, b) {
                var c = {};
                j != null && this.serverLID != null && j[this.serverLID] != null && (c = j[this.serverLID]);
                c = babelHelpers["extends"]({}, c, {
                    event: a,
                    timestamp: b
                });
                l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, c);
                return this
            };
            c.doneNavigation = function() {
                var a = babelHelpers["extends"]({
                    start: this.start,
                    extras: this.extras
                }, this.eventTimings);
                if (this.serverLID && j[this.serverLID]) {
                    var b = this.serverLID;
                    Object.assign(a, j[b]);
                    delete j[b]
                }
                l.emitAndHold(g.NAVIGATION_DONE, this.lid, a)
            };
            return a
        }(),
        l = {
            Events: g,
            postPagelet: function(a, b, c) {},
            siteInit: function(a) {
                a(k)
            },
            setPage: function(a) {
                if (!a.serverLID) return;
                j[a.serverLID] = {
                    page: a.page,
                    pageType: a.page_type,
                    pageURI: a.page_uri,
                    serverLID: a.serverLID
                }
            },
            getFullPageLoadLid: function() {
                throw new Error("getFullPageLoadLid is not implemented on this site")
            }
        };
    b("mixInEventEmitter")(l, g);
    a = l;
    e.exports = a
}), null);
__d("NavigationMetrics", ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"], (function(a, b, c, d, e, f) {
    var g, h = "0";
    b("NavigationMetricsCore").getFullPageLoadLid = function() {
        return h
    };
    b("NavigationMetricsCore").siteInit(function(a) {
        var c = new a(),
            d = !0;
        b("Arbiter").subscribe(b("BigPipeInstance").Events.init, function(e, f) {
            var g = d ? c : new a();
            d && (h = f.lid);
            d = !1;
            g.setServerLID(f.lid);
            e = f.arbiter;
            e.subscribe(b("BigPipeInstance").Events.tti, function(a, b) {
                a = b.ts;
                g.setTTI(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_SEND, function(a, b) {
                a = b.ts;
                g.setRequestStart(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function(a, b) {
                a = b.ts;
                g.setE2E(a).doneNavigation()
            });
            e.subscribe(b("BigPipeInstance").Events.displayed, function(a, b) {
                a = b.ts;
                g.setDisplayDone(a)
            });
            e.subscribe(b("BigPipeInstance").Events.loaded, function(a, b) {
                a = b.ts;
                g.setAllPageletsLoaded(a)
            })
        });
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function(a, e) {
            a = e.ts;
            d = !1;
            c.setRequestStart((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart).setE2E(a).doneNavigation()
        })
    });
    a = b("NavigationMetricsCore");
    e.exports = a
}), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
            b !== null && b !== void 0 ? d.message = b : d.message = "";
            d.innerError = c;
            return d
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    e.exports = a
}), null);