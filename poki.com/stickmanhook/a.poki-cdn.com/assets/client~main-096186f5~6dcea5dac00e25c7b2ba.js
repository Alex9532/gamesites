"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [946], {
    10179: (e, t, n) => {
      n.d(t, {
        A6: () => p,
        cw: () => g,
        jE: () => f,
        nR: () => l,
        sx: () => d,
        xE: () => u
      });
      var a = n(20038),
        o = n(42891),
        s = n(52694),
        i = n(46278),
        r = n(16536),
        c = n(46493);
      const d = (0, a.zD)("account/createSession", (async () => {
          const e = await s.M9.toSession();
          if (200 === e.status) return e.data;
          if (401 === e.status) return null;
          throw new Error("account/CreateSession error")
        })),
        l = e => {
          if (e) return s.M9.getLoginFlow({
            id: String(e)
          });
          const t = new URL(window.location.href);
          t.searchParams.set("login", "success");
          const n = t.toString();
          return s.M9.createBrowserLoginFlow({
            refresh: !0,
            aal: "aal1",
            returnTo: n
          })
        },
        u = () => {
          const e = new URL(window.location.href);
          e.searchParams.set("register", "success");
          const t = e.toString();
          return s.M9.createBrowserRegistrationFlow({
            returnTo: t
          })
        },
        p = (0, a.zD)("account/logout", (async () => {
          const {
            data: e
          } = await (0, s.ZW)();
          try {
            await (0, s.YE)(e.logout_token), window.location.reload()
          } catch (e) {}
        })),
        g = (0, a.zD)("account/updateBirthdate", (async ({
          day: e,
          month: t,
          year: n
        }) => {
          const a = `${(0,i.T5)()}/players/profile/update-birthdate`,
            o = {
              day: parseInt(e, 10),
              month: parseInt(t, 10),
              year: parseInt(n, 10)
            },
            s = await fetch(a, {
              method: "POST",
              credentials: "include",
              body: JSON.stringify(o)
            });
          return null == s ? void 0 : s.ok
        })),
        f = (0, a.zD)("account/postRegistration", (async (e, t) => {
          const n = t.getState(),
            a = `${(0,i.T5)()}/players/profile/post-registration-sync`,
            s = (0, o.Fe)(n),
            r = {
              game_history: s.length > 0 ? s.slice(0, 10).map((e => e.id)) : []
            };
          if (!(await fetch(a, {
              method: "POST",
              credentials: "include",
              body: JSON.stringify(r)
            })).ok) throw new Error("Cannot perform post-registration")
        }));
      (0, r.Zv)({
        matcher: (0, a.i0)(d.fulfilled, d.rejected),
        effect: e => {
          var t;
          var n;
          void 0 !== (null == e || null === (t = e.payload) || void 0 === t ? void 0 : t.id) ? (0, c.F)({
            category: "account",
            action: "isLoggedIn",
            label: "true",
            data: {
              provider: (null == e || null === (n = e.payload) || void 0 === n ? void 0 : n.authentication_method) || "unknown"
            }
          }) : (0, c.F)({
            category: "account",
            action: "isLoggedIn",
            label: "false"
          })
        }
      }), (0, r.Zv)({
        actionCreator: g.fulfilled,
        effect: () => {
          const e = window.location.href,
            t = new URL(e);
          t.searchParams.set("updateBirthdate", "success"), window.location.href = t.toString()
        }
      }), (0, r.Zv)({
        actionCreator: g.rejected,
        effect: () => {
          (0, c.F)({
            category: "account",
            action: "birthdateSaveFailed"
          })
        }
      })
    },
    6788: (e, t, n) => {
      n.d(t, {
        Ay: () => y,
        X$: () => u,
        fy: () => m,
        p3: () => l,
        x0: () => d
      });
      var a = n(20038),
        o = n(98708),
        s = n(90385),
        i = n(88800),
        r = n(48554);
      const c = (0, a.Z0)({
          name: "bugReport",
          initialState: {
            isReporting: !1,
            reportData: null
          },
          reducers: {
            openReportBug: e => {
              e.isReporting = !0
            },
            closeReportBug: e => {
              e.isReporting = !1
            },
            setBugReportData: (e, t) => {
              e.reportData = t.payload.message
            }
          }
        }),
        d = e => e.bugReport.isReporting,
        l = e => e.bugReport.reportData,
        u = (0, a.VP)("bugReport/sendReportBug"),
        {
          openReportBug: p,
          closeReportBug: g,
          setBugReportData: f
        } = c.actions,
        m = () => async (e, t) => {
          const n = t(),
            a = (0, o.K)(n),
            c = (0, s.Vv)(n);
          if (!c) return;
          e(p());
          const d = Date.now(),
            l = `feedback-input-${d}`,
            m = `feedback-checkbox-${d}`,
            y = a.what_bug.replace("%title", `<strong>${c.title}?</strong>`),
            v = {
              id: d,
              title: y,
              titleIcon: {
                svgName: "report",
                width: 24,
                height: 24
              },
              childComponent: {
                name: "ReportBugNotification",
                props: {
                  feedbackInputId: l,
                  feedbackCheckboxId: m
                }
              },
              clickOutsideToClose: !0,
              onClose: () => {
                e(g())
              },
              actions: [{
                title: a.send,
                onClick: () => {
                  var t, n;
                  const o = null === (t = document.getElementById(l)) || void 0 === t ? void 0 : t.value;
                  e(f({
                    message: o
                  })), null !== (n = document.getElementById(m)) && void 0 !== n && n.checked ? e((0, r.kK)({
                    callback: "bugReport"
                  })) : e(u()), e((0, i.oe)({
                    id: d
                  }));
                  const s = {
                    notification: {
                      title: a.thank_you,
                      theme: "feedback",
                      autoExpire: 4e3
                    }
                  };
                  e((0, i.Gg)(s))
                }
              }]
            };
          e((0, i.Gg)({
            notification: v
          }))
        }, y = c
    },
    52600: (e, t, n) => {
      var a = n(20038),
        o = n(23260),
        s = n(42891),
        i = n(90385),
        r = n(98708),
        c = n(15049),
        d = n(36774),
        l = n(46493),
        u = n(66685),
        p = n(16536);
      const g = (0, a.zD)("cmp/loadCMP", (async (e, t) => {
        var a, o;
        const c = t.getState(),
          {
            dispatch: p
          } = t,
          g = (0, s.oJ)(c);
        if (!(0, s.qk)(c) && !g) return;
        const f = document.createElement("script"),
          m = document.getElementsByTagName("script")[0];
        var y = 0;
        f.async = !0, f.type = "text/javascript", f.src = "https://cmp.inmobi.com/choice/E_PXTAq4C0D1u/poki.com/choice.js?tag_version=V3", m.parentNode.insertBefore(f, m),
          function() {
            for (var e, t = "__tcfapiLocator", n = [], a = window; a;) {
              try {
                if (a.frames[t]) {
                  e = a;
                  break
                }
              } catch (e) {}
              if (a === window.top) break;
              a = a.parent
            }
            e || (! function e() {
              var n = a.document,
                o = !!a.frames[t];
              if (!o)
                if (n.body) {
                  var s = n.createElement("iframe");
                  s.style.cssText = "display:none", s.name = t, n.body.appendChild(s)
                } else setTimeout(e, 5);
              return !o
            }(), a.__tcfapi = function() {
              var e, t = arguments;
              if (!t.length) return n;
              if ("setGdprApplies" === t[0]) t.length > 3 && 2 === t[2] && "boolean" == typeof t[3] && (e = t[3], "function" == typeof t[2] && t[2]("set", !0));
              else if ("ping" === t[0]) {
                var a = {
                  gdprApplies: e,
                  cmpLoaded: !1,
                  cmpStatus: "stub"
                };
                "function" == typeof t[2] && t[2](a)
              } else "init" === t[0] && "object" == typeof t[3] && (t[3] = Object.assign(t[3], {
                tag_version: "V3"
              })), n.push(t)
            }, a.addEventListener("message", (function(e) {
              var t = "string" == typeof e.data,
                n = {};
              try {
                n = t ? JSON.parse(e.data) : e.data
              } catch (e) {}
              var a = n.__tcfapiCall;
              a && window.__tcfapi(a.command, a.version, (function(n, o) {
                var s = {
                  __tcfapiReturn: {
                    returnValue: n,
                    success: o,
                    callId: a.callId
                  }
                };
                t && (s = JSON.stringify(s)), e && e.source && e.source.postMessage && e.source.postMessage(s, "*")
              }), a.parameter)
            }), !1))
          }(),
          function() {
            const e = ["2:tcfeuv2", "6:uspv1", "7:usnatv1", "8:usca", "9:usvav1", "10:uscov1", "11:usutv1", "12:usctv1"];
            window.__gpp_addFrame = function(e) {
              if (!window.frames[e])
                if (document.body) {
                  var t = document.createElement("iframe");
                  t.style.cssText = "display:none", t.name = e, document.body.appendChild(t)
                } else window.setTimeout(window.__gpp_addFrame, 10, e)
            }, window.__gpp_stub = function() {
              var t = window.__gpp || {},
                n = arguments;
              if (t.queue = t.queue || [], t.events = t.events || [], !n.length || 1 == n.length && "queue" == n[0]) return t.queue;
              if (1 == n.length && "events" == n[0]) return t.events;
              var a = n[0],
                o = n.length > 1 ? n[1] : null,
                s = n.length > 2 ? n[2] : null;
              if ("ping" === a) o({
                gppVersion: "1.1",
                cmpStatus: "stub",
                cmpDisplayStatus: "hidden",
                signalStatus: "not ready",
                supportedAPIs: e,
                cmpId: 10,
                sectionList: [],
                applicableSections: [-1],
                gppString: "",
                parsedSections: {}
              }, !0);
              else if ("addEventListener" === a) {
                "lastId" in t || (t.lastId = 0), t.lastId++;
                var i = t.lastId;
                t.events.push({
                  id: i,
                  callback: o,
                  parameter: s
                }), o({
                  eventName: "listenerRegistered",
                  listenerId: i,
                  data: !0,
                  pingData: {
                    gppVersion: "1.1",
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    signalStatus: "not ready",
                    supportedAPIs: e,
                    cmpId: 10,
                    sectionList: [],
                    applicableSections: [-1],
                    gppString: "",
                    parsedSections: {}
                  }
                }, !0)
              } else if ("removeEventListener" === a) {
                for (var r = !1, c = 0; c < t.events.length; c++)
                  if (t.events[c].id == s) {
                    t.events.splice(c, 1), r = !0;
                    break
                  } o({
                  eventName: "listenerRemoved",
                  listenerId: s,
                  data: r,
                  pingData: {
                    gppVersion: "1.1",
                    cmpStatus: "stub",
                    cmpDisplayStatus: "hidden",
                    signalStatus: "not ready",
                    supportedAPIs: e,
                    cmpId: 10,
                    sectionList: [],
                    applicableSections: [-1],
                    gppString: "",
                    parsedSections: {}
                  }
                }, !0)
              } else "hasSection" === a ? o(!1, !0) : "getSection" === a || "getField" === a ? o(null, !0) : t.queue.push([].slice.apply(n))
            }, window.__gpp_msghandler = function(e) {
              var t = "string" == typeof e.data;
              try {
                var n = t ? JSON.parse(e.data) : e.data
              } catch (e) {
                n = null
              }
              if ("object" == typeof n && null !== n && "__gppCall" in n) {
                var a = n.__gppCall;
                window.__gpp(a.command, (function(n, o) {
                  var s = {
                    __gppReturn: {
                      returnValue: n,
                      success: o,
                      callId: a.callId
                    }
                  };
                  e.source.postMessage(t ? JSON.stringify(s) : s, "*")
                }), "parameter" in a ? a.parameter : null, "version" in a ? a.version : "1.1")
              }
            }, "__gpp" in window && "function" == typeof window.__gpp || (window.__gpp = window.__gpp_stub, window.addEventListener("message", window.__gpp_msghandler, !1), window.__gpp_addFrame("__gppLocator"))
          }();
        var v = function() {
          var e = arguments;
          typeof window.__uspapi !== v && setTimeout((function() {
            void 0 !== window.__uspapi && window.__uspapi.apply(window.__uspapi, e)
          }), 500)
        };
        if (void 0 === window.__uspapi) {
          window.__uspapi = v;
          var h = setInterval((function() {
            y++, window.__uspapi === v && y < 3 ? console.warn("USP is not accessible") : clearInterval(h)
          }), 6e3)
        }
        let w = !1;
        window.__tcfapi("addEventListener", 2, ((e, a) => {
          if ((0, l.F)({
              category: "consent",
              action: e.eventStatus
            }), a && "cmpuishown" === e.eventStatus) {
            const e = t.getState(),
              a = (0, i.tM)(e),
              o = (0, i.ZI)(e),
              s = (0, i.$B)(e),
              c = (0, r.K)(e),
              d = (0, i.hj)(e),
              l = (0, i.FR)(e);
            n.e(9723).then(n.bind(n, 59723)).then((e => {
                if ("undefined" == typeof document || null == e || !e.default) return;
                const t = document.createElement("style");
                t.innerHTML = e.default.toString(), document.head.appendChild(t)
              })),
              function({
                privacyUrl: e,
                cookieStatementUrl: t,
                termsOfUseUrl: n,
                localisations: a,
                showNewPrivacyCenter: o,
                privacyCenterUrl: s
              }) {
                const i = [{
                  label: a.privacy_statement,
                  url: e
                }, {
                  label: a.cookie_statement,
                  url: t
                }, {
                  label: a.nav_terms_of_use,
                  url: n
                }];
                o && (i.length = 0, i.push({
                  label: "Privacy Center",
                  url: s
                }));
                const r = `\n\t\t<div class="poki-qc-cmp2-footer-links">\n\t\t\t${i.map((e=>{const t=document.createElement("a");return t.setAttribute("href",e.url),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"),t.innerText=e.label,t})).map((e=>e.outerHTML)).join(" &#x2022; ")}\n\t\t</div>\n\t`;
                (0, u.A)("#qc-cmp2-ui").then((e => {
                  e.insertAdjacentHTML("beforeend", r)
                }))
              }({
                privacyUrl: a,
                cookieStatementUrl: o,
                termsOfUseUrl: s,
                localisations: c,
                showNewPrivacyCenter: d,
                privacyCenterUrl: l
              })
          }
          if (a && ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus)) {
            if (w && !g) {
              var o;
              let t = !1;
              null != e && null !== (o = e.purpose) && void 0 !== o && null !== (o = o.consents) && void 0 !== o && o[1] && (t = !0);
              try {
                window.localStorage.setItem("localStorageConsentSet", t)
              } catch {}
              window.localStorageConsentSet = t, window.location.reload()
            }
            w = !0
          }
        })), window.__tcfapi("addEventListener", 2, ((e, t) => {
          if ((0, l.F)({
              category: "consent",
              action: e.eventStatus
            }), g && "function" == typeof window.__uspapi && window.__uspapi("getUSPData", 1, ((e, t) => {
              if (t) {
                const {
                  uspString: t
                } = e;
                p((0, s.Y1)({
                  usPrivacyString: t
                }))
              }
            })), t && ("tcloaded" === e.eventStatus || "useractioncomplete" === e.eventStatus)) {
            var n;
            null != e && null !== (n = e.purpose) && void 0 !== n && null !== (n = n.consents) && void 0 !== n && n[1] ? (window.localStorageConsentSet = !0, (0, l.F)({
              category: "consent",
              action: "full"
            }), p((0, s.F8)({
              consentStatus: d.T2
            }))) : (window.localStorageConsentSet = !1, (0, l.F)({
              category: "consent",
              action: "no"
            }), p((0, s.F8)({
              consentStatus: d.d
            })));
            try {
              window.localStorage.setItem("localStorageConsentSet", window.localStorageConsentSet)
            } catch {}
            window.__tcfapi("getNonIABVendorConsents", 2, ((e, t) => {
              if (!t || !e) return;
              const {
                nonIabVendorConsents: n
              } = e;
              n && (0, l.F)({
                category: "consent",
                action: "noniab",
                data: {
                  nonIABConsents: n
                }
              })
            })), window.__tcfapi("removeEventListener", 2, (() => {}), e.listenerId)
          }
        })), null === (a = window.tracker) || void 0 === a || null === (o = a.installTCFHandler) || void 0 === o || o.call(a)
      }));
      (0, p.Zv)({
        actionCreator: o.y,
        effect: async (e, {
          dispatch: t,
          getState: n,
          unsubscribe: a
        }) => {
          if ("undefined" == typeof window) return void a();
          const o = n();
          if (!(0, c.CN)(o)) return void a();
          "content" !== (0, i.K5)(o) && t(g()), a()
        }
      })
    },
    97454: (e, t, n) => {
      n.d(t, {
        Ay: () => S,
        Lb: () => h,
        Od: () => w
      });
      var a = n(8120),
        o = n(20038),
        s = n(16536),
        i = n(822),
        r = n(46493),
        c = n(53490);
      let d = null;
      const l = e => e.eastereggs.endpoint,
        u = (0, a.Mz)((e => e.eastereggs.eggs), (e => e.flatMap((e => e.triggers.search.query.map((t => [t, e])))).reduce(((e, [t, n]) => (e[t] = n, e)), {}))),
        p = (0, a.Mz)(u, ((e, t) => t), ((e, t) => e[t])),
        g = (0, o.zD)("eastereggs/fetchManifest", (async (e, {
          getState: t
        }) => {
          const n = l(t()),
            a = await fetch(`${n}/eggs.json`);
          return {
            eggs: await a.json()
          }
        })),
        f = (0, o.Z0)({
          name: "eastereggs",
          initialState: {
            customLogo: null,
            customFavicon: null,
            eggs: [],
            endpoint: "https://easter-eggs.poki-cdn.com"
          },
          reducers: {
            setCustomLogo: (e, t) => {
              e.customLogo = t.payload
            },
            setCustomFavicon: (e, t) => {
              e.customFavicon = t.payload
            },
            setEggEndpoint: (e, t) => {
              e.endpoint = t.payload
            }
          },
          extraReducers: e => {
            e.addCase(g.fulfilled, ((e, t) => {
              e.eggs = t.payload.eggs, d = new c.Y, d.prepare()
            }))
          }
        }),
        {
          setCustomLogo: m,
          setCustomFavicon: y,
          setEggEndpoint: v
        } = f.actions;
      (0, s.Zv)({
        type: i.rf.type,
        effect: (e, t) => {
          t.dispatch(g())
        }
      }), (0, s.Zv)({
        type: i.Ri.type,
        effect: async (e, t) => {
          const n = t.getState(),
            a = e.payload.query.toLowerCase(),
            o = p(n, a),
            s = l(n);
          if (void 0 === o) return;
          (0, r.F)({
            category: "easteregg",
            action: "search",
            label: a,
            options: {
              interaction: !0
            }
          });
          const c = `${s}/${o.entrypoint}`,
            u = await import(c);
          !1 !== o.triggers.search.close && t.dispatch((0, i.QL)()), await u.default({
            listenerApi: t,
            audioApi: d
          })
        }
      });
      const h = e => e.eastereggs.customLogo,
        w = e => e.eastereggs.customFavicon,
        S = f
    },
    88800: (e, t, n) => {
      n.d(t, {
        Ay: () => c,
        Gg: () => o,
        hk: () => r,
        oe: () => i,
        ww: () => s
      });
      const a = (0, n(20038).Z0)({
          name: "notifications",
          initialState: {
            stack: [],
            muted: []
          },
          reducers: {
            setNotification: (e, t) => {
              const {
                notification: n
              } = t.payload;
              n.id = n.id || Date.now(), n.isClosed = n.isClosed || !1, e.stack.push(n)
            },
            removeNotification: (e, t) => {
              e.stack = e.stack.filter((e => e.id !== t.payload.id))
            },
            setCloseNotification: (e, t) => {
              const {
                id: n
              } = t.payload;
              e.stack = e.stack.map((t => t.id === n ? (t.muteAfterClose && e.muted.push(n), {
                ...t,
                isClosed: !0
              }) : t))
            }
          }
        }),
        {
          setNotification: o,
          removeNotification: s,
          setCloseNotification: i
        } = a.actions,
        r = (e, t) => e.notifications.muted.includes(t),
        c = a
    },
    822: (e, t, n) => {
      n.d(t, {
        Ay: () => D,
        Bb: () => L,
        Hu: () => b,
        QL: () => E,
        Ri: () => $,
        Se: () => q,
        mr: () => C,
        rf: () => R,
        vK: () => I
      });
      var a = n(20038),
        o = n(42891),
        s = n(90385),
        i = n(88421),
        r = n(91323),
        c = n(53210),
        d = n(46278),
        l = n(80382),
        u = n(46493),
        p = n(40890),
        g = n(34931),
        f = n(16536);
      const m = `${(0,d.G6)()}/search/query`,
        y = `${(0,d.G6)()}/category`,
        v = {
          content: []
        },
        h = {
          query: "",
          expanded: !1,
          results: v,
          pending: !1,
          doneOnce: !1,
          error: !1,
          popularSearches: [],
          searchSessionId: 0,
          quickSearchCategories: []
        },
        w = (e, t, n) => ({
          data: (0, l.rL)(e, t, n),
          score: (null == n ? void 0 : n.score) || ("game" === t ? 1 : 0)
        });

      function S({
        site: e,
        device: t,
        hits: n
      }) {
        const a = function({
            site: e,
            device: t,
            hits: n
          }) {
            var a, o;
            const s = (null == n || null === (a = n.categories) || void 0 === a ? void 0 : a.map((t => w(e, "category", t)))) || [],
              i = (null == n || null === (o = n.games) || void 0 === o ? void 0 : o.map((t => w(e, "game", t)))) || [];
            return {
              categories: s,
              games: "mobile" === t ? i.filter((e => e.data.mobile)) : i
            }
          }({
            site: e,
            device: t,
            hits: n
          }),
          o = [...a.categories.map((e => ({
            ...e,
            category: !0
          }))), ...a.games];
        return o.sort(((e, t) => t.score - e.score)), "mobile" === t && o.splice(50), o
      }

      function _({
        state: e,
        query: t,
        numberOfResults: n = 0,
        isQuickCategorySearch: a = !1
      }) {
        const o = (0, i.Ie)(e),
          r = (0, s.K5)(e),
          c = n > 0 ? "success" : "empty";
        (0, u.F)({
          category: "search",
          action: "results",
          label: r,
          data: {
            query: t,
            result: c,
            numberOfResults: n,
            searchSessionId: o,
            isQuickCategorySearch: a
          }
        })
      }
      const b = (0, a.zD)("search/fetchSearch", (async (e, t) => {
          if (e.query.length < 2) return {
            content: [],
            error: !1
          };
          const n = t.getState(),
            a = (0, r.Gd)(n),
            s = (0, o.xp)(n),
            i = (0, o.wu)(n),
            d = (0, c.p)(n),
            l = await fetch(`${m}/${a.id}?q=${encodeURIComponent(e.query)}&device=${s}&country=${i}${d?`&experiment=${d}`:""}`),
            u = await l.json();
          if (!u.categories.length && !u.games.length) return _({
            state: n,
            query: e.query
          }), {
            content: [],
            error: !0
          };
          const p = S({
            site: a,
            device: s,
            hits: u
          });
          return _({
            state: n,
            query: e.query,
            numberOfResults: p.length
          }), {
            content: p,
            error: !1
          }
        })),
        C = (0, a.zD)("search/fetchQuickSearchCategories", (async (e, t) => {
          const n = t.getState(),
            a = (0, r.Gd)(n),
            s = (0, o.wu)(n),
            i = (0, o.xp)(n),
            c = await fetch(`${(0,d.G6)()}/quicksearch?site=${a.id}&country=${s}&device=${i}`);
          return (await c.json()).map((({
            title: e,
            slug: t
          }) => ({
            title: e,
            slug: t,
            url: (0, p.AO)(a, "category", t)
          })))
        })),
        I = (0, a.zD)("search/fetchSearchCategoryResults", (async (e, t) => {
          if (!e) return {
            content: []
          };
          const n = t.getState(),
            a = (0, r.Gd)(n),
            s = (0, o.xp)(n),
            i = (0, o.wu)(n),
            d = (0, c.p)(n),
            l = await fetch(`${y}/${encodeURIComponent(e)}?site=${a.id}&device=${s}&country=${i}${d?`&experiment=${d}`:""}`),
            u = await l.json(),
            p = {
              categories: u.related_categories || [],
              games: u.games || []
            };
          return _({
            state: n,
            query: e,
            numberOfResults: p.categories.length + p.games.length,
            isQuickCategorySearch: !0
          }), {
            content: S({
              site: a,
              device: s,
              hits: p
            })
          }
        })),
        k = (0, a.Z0)({
          name: "search",
          initialState: h,
          reducers: {
            closeSearch(e) {
              e.expanded = !1, e.doneOnce = !1, e.error = !1, e.pending = !1, e.results = v
            },
            openSearch(e) {
              e.searchSessionId = (0, g.u)(), e.expanded = !0, e.query = ""
            },
            setSearchQuery(e, t) {
              e.query = t.payload.query
            },
            resetSearch(e) {
              e.query = "", e.results = v, e.pending = !1, e.doneOnce = !1, e.error = !1
            },
            closeSearchIfOpen(e) {
              e.expanded && (e.expanded = !1)
            }
          },
          extraReducers: e => {
            e.addCase(b.pending, (e => {
              e.pending = !0, e.error = !1, e.results = v
            })).addCase(b.fulfilled, ((e, t) => {
              e.pending = !1, e.error = t.payload.error, e.results = [...t.payload.content]
            })).addCase(b.rejected, (e => {
              e.pending = !1, e.error = !0, e.results = v
            })).addCase(I.pending, (e => {
              e.pending = !0
            })).addCase(I.fulfilled, ((e, t) => {
              e.pending = !1, e.results = [...t.payload.content]
            })).addCase(I.rejected, (e => {
              e.pending = !1, e.error = !0
            })).addCase(C.fulfilled, ((e, t) => {
              e.quickSearchCategories = t.payload
            }))
          }
        }),
        {
          closeSearch: L,
          openSearch: R,
          setSearchQuery: $,
          resetSearch: q,
          closeSearchIfOpen: E
        } = k.actions;
      (0, f.Zv)({
        matcher: (0, a.i0)(R, L, E),
        effect: (e, t) => {
          const n = t.getState(),
            a = (0, i.Ie)(n),
            o = (0, s.K5)(n),
            r = e.type === R.type ? "open" : "close";
          (0, u.F)({
            category: "searchPanel",
            action: r,
            label: o,
            data: {
              searchSessionId: a
            },
            options: {
              interaction: !0
            }
          })
        }
      });
      const D = k
    }
  }
]);
//# sourceMappingURL=client~main-096186f5~6dcea5dac00e25c7b2ba.js.map