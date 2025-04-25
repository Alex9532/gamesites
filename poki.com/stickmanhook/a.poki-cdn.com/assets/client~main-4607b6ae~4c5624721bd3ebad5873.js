"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [1022], {
    98535: (e, t, o) => {
      function n(e) {
        return ["GB", "NL"].includes(e)
      }
      o.d(t, {
        A: () => n
      })
    },
    32549: (e, t, o) => {
      o.d(t, {
        OV: () => s,
        Ts: () => a,
        lB: () => d
      });
      var n = o(73421);
      const i = new Map,
        r = "undefined" != typeof IntersectionObserver;

      function a(e, t = {}) {
        r && (window.pokiIntersectionObservers = window.pokiIntersectionObservers || {}, window.pokiIntersectionObservers[e] = new IntersectionObserver((t => {
          t.filter((e => e.isIntersecting)).forEach((({
            boundingClientRect: t,
            target: o
          }) => {
            const n = i.get(o);
            i.delete(o), window.pokiIntersectionObservers[e].unobserve(o), n && n(t)
          }))
        }), t))
      }

      function s(e, t) {
        r && window.pokiIntersectionObservers[e] && (i.delete(t), window.pokiIntersectionObservers[e].unobserve(t))
      }

      function d(e, t, o) {
        if (r && window.pokiIntersectionObservers[e] && t)
          if (r) s(e, t), i.set(t, o), window.pokiIntersectionObservers[e].observe(t);
          else {
            const {
              cellSize: e
            } = n.O3;
            o({
              width: e
            })
          }
      }
    },
    16536: (e, t, o) => {
      o.d(t, {
        LP: () => i,
        Zv: () => r
      });
      var n = o(20038);
      const i = (0, n.Nc)(),
        r = i.startListening.withTypes();
      n.ch.withTypes()
    },
    56968: (e, t, o) => {
      o.d(t, {
        k: () => n
      });
      const n = e => new Promise(((t, o) => {
        const n = document.createElement("script");
        n.type = "text/javascript", n.src = e, n.onload = t, n.onerror = o, document.head.appendChild(n)
      }))
    },
    66685: (e, t, o) => {
      function n(e) {
        if (!e) throw new Error("waitForDOMNode requires a selector");
        const t = document.querySelector(e);
        return new Promise((o => {
          t && o(t);
          const n = new MutationObserver((() => {
            document.querySelector(e) && (o(document.querySelector(e)), n.disconnect())
          }));
          n.observe(document.body, {
            childList: !0,
            subtree: !0
          })
        }))
      }
      o.d(t, {
        A: () => n
      })
    },
    99653: (e, t, o) => {
      function n(e) {
        "undefined" != typeof window && window.pbjs.que.push((() => {
          var t, o;
          const n = {
            ortb2: {
              ...window.pbjs.getConfig("ortb2"),
              ...e
            }
          };
          window.pbjs.setConfig(n), null === (t = window) || void 0 === t || null === (t = t.PokiSDK) || void 0 === t || null === (o = t.configureA9) || void 0 === o || o.call(t, n)
        }))
      }
      o.d(t, {
        I: () => n
      })
    },
    52694: (e, t, o) => {
      o.d(t, {
        C5: () => u,
        M9: () => a,
        YE: () => l,
        ZW: () => d,
        bF: () => s,
        ec: () => v,
        py: () => c,
        rn: () => y
      });
      var n = o(5410),
        i = o(99336);
      const r = (0, o(46278).gE)(),
        a = new n.rc(new i.V({
          basePath: r,
          baseOptions: {
            withCredentials: !0
          }
        }));

      function s({
        flowType: e,
        resetFlow: t
      }) {
        return o => {
          console.error(`💀 Failed to create ${e} flow`, o), 410 === (null == o ? void 0 : o.status) && t()
        }
      }
      const d = async () => a.createBrowserLogoutFlow(), l = async e => a.updateLogoutFlow({
        token: e
      });

      function c(e) {
        var t;
        const o = (null == e || null === (t = e.ui) || void 0 === t ? void 0 : t.nodes).find((e => "traits.passkey_identifier" === e.attributes.name || "identifier" === e.attributes.name));
        return o && (o.attributes.value = "My Poki Account"), e
      }

      function y(e) {
        var t;
        const o = null == e || null === (t = e.ui) || void 0 === t ? void 0 : t.nodes,
          n = o.find((e => "passkey_login_trigger" === e.attributes.name || "passkey_register_trigger" === e.attributes.name));
        return n && o.splice(o.indexOf(n), 1), e
      }
      const p = ["{provider}", "{providerID}"];

      function u({
        node: e,
        localisations: t
      }) {
        var o;
        const n = null === (o = e.meta) || void 0 === o ? void 0 : o.label;
        if (!t || null == n || !n.text) return (null == n ? void 0 : n.text) || "TRANSLATION IS MISSING";
        const i = t.find((({
          id: e
        }) => e === n.id));
        if (!i) return "TRANSLATION IS MISSING";
        const {
          text: r,
          context: a
        } = i;
        if (!a) return r;
        const s = Object.values(a),
          d = n.context;
        return r.split(" ").map((e => {
          const t = s.includes(e),
            o = p.includes(e),
            n = t ? e.replace(/({|})/g, "") : "";
          return d[n] ? o ? d[n].charAt(0).toUpperCase() + d[n].slice(1) : d[n] : e
        })).join(" ")
      }

      function v() {
        return new Promise((e => {
          window.PublicKeyCredential && "function" == typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable && "function" == typeof PublicKeyCredential.isConditionalMediationAvailable ? Promise.all([PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable(), PublicKeyCredential.isConditionalMediationAvailable()]).then((t => {
            t.every((e => !0 === e)) && e(!0), e(!1)
          })).catch((() => e(!1))).finally((() => e(!0))) : e(!1)
        }))
      }
    },
    55509: (e, t, o) => {
      o.d(t, {
        D: () => l,
        y: () => d
      });
      var n = o(7696),
        i = o(42891),
        r = o(86494),
        a = o(88800),
        s = o(89385);
      const d = [{
          key: "state/client/recentGames",
          rootKey: "client",
          childKey: "recentGames",
          validator: e => {
            try {
              return !Object.entries(e).some((e => {
                const t = parseInt(e[0], 10);
                if (Number.isNaN(t)) return !0;
                return e[1].some((e => "number" != typeof e.id || "number" != typeof e.pt || void 0 !== e.lp && "number" != typeof e.lp))
              }))
            } catch {
              return !1
            }
          }
        }, {
          key: "state/ratings/userVotes",
          rootKey: "ratings",
          childKey: "userVotes",
          validator: e => {
            try {
              return !Object.entries(e).some((e => {
                const t = parseInt(e[0], 10);
                if (Number.isNaN(t)) return !0;
                const o = e[1];
                return 1 !== o && -1 !== o
              }))
            } catch {
              return !1
            }
          }
        }, {
          key: "state/client/externalGames",
          rootKey: "client",
          childKey: "externalGames",
          validator: e => {
            try {
              return !Object.entries(e).some((e => {
                const t = parseInt(e[0], 10);
                if (Number.isNaN(t)) return !0;
                return "boolean" != typeof e[1]
              }))
            } catch {
              return !1
            }
          }
        }, {
          key: "state/client/usPrivacyString",
          rootKey: "client",
          childKey: "usPrivacyString",
          validator: e => "string" == typeof e
        }, {
          key: "state/client/privacyPopupRevision",
          rootKey: "client",
          childKey: "privacyPopupRevision",
          validator: e => "string" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/familyModeCookieConsent",
          rootKey: "client",
          childKey: "familyModeCookieConsent",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/privacyCenterViewed",
          rootKey: "privacy",
          childKey: "privacyCenterViewed",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/personalizedAds",
          rootKey: "privacy",
          childKey: "personalizedAds",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/pokiAnalytics",
          rootKey: "privacy",
          childKey: "pokiAnalytics",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/bingRemarketingEnabled",
          rootKey: "privacy",
          childKey: "bingRemarketingEnabled",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/googleRemarketingEnabled",
          rootKey: "privacy",
          childKey: "googleRemarketingEnabled",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/privacy/familyModeCookieConsent",
          rootKey: "privacy",
          childKey: "familyModeCookieConsent",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/notifications/muted",
          rootKey: "notifications",
          childKey: "muted",
          validator: e => !!Array.isArray(e) && e.every((e => "string" == typeof e)),
          bypassPrivacyStore: !0
        }, {
          key: "state/account/wasLoggedInBefore",
          rootKey: "account",
          childKey: "wasLoggedInBefore",
          validator: e => "boolean" == typeof e,
          bypassPrivacyStore: !0
        }, {
          key: "state/account/disabledSaveGames",
          rootKey: "account",
          childKey: "disabledSaveGames",
          validator: e => Array.isArray(e),
          bypassPrivacyStore: !0
        }],
        l = {
          [i.pX.type]: {
            state: "client",
            property: "recentGames"
          },
          [i.Pl.type]: {
            state: "client",
            property: "externalGames"
          },
          [r.Vy.type]: {
            state: "ratings",
            property: "userVotes"
          },
          [i.Fu.type]: {
            state: "client",
            property: "privacyPopupRevision"
          },
          [n.Se.type]: {
            state: "privacy",
            property: "familyModeCookieConsent"
          },
          [n.kN.type]: {
            state: "privacy",
            property: "privacyCenterViewed"
          },
          [n.pI.type]: {
            state: "privacy",
            property: "personalizedAds"
          },
          [n.S9.type]: {
            state: "privacy",
            property: "pokiAnalytics"
          },
          [n.QX.type]: {
            state: "privacy",
            property: "bingRemarketingEnabled"
          },
          [n.X6.type]: {
            state: "privacy",
            property: "googleRemarketingEnabled"
          },
          [a.oe.type]: {
            state: "notifications",
            property: "muted"
          },
          [s.Cf.type]: {
            state: "account",
            property: "wasLoggedInBefore"
          },
          [s.hK.type]: {
            state: "account",
            property: "disabledSaveGames"
          }
        }
    },
    2538: (e, t, o) => {
      o.d(t, {
        f: () => n
      });

      function n() {
        var e;
        const t = window;
        null === (e = t.prehydrateButtonCheckCleanup) || void 0 === e || e.call(t), delete t.prehydrateButtonCheckCleanup
      }
    },
    11865: (e, t, o) => {
      o.d(t, {
        Gq: () => d,
        Pq: () => c,
        SO: () => l
      });
      var n = o(55509),
        i = o(36774);
      const r = 15552e6,
        a = 2592e6;

      function s(e) {
        var t;
        return null === (t = n.y.find((t => t.key === e))) || void 0 === t ? void 0 : t.bypassPrivacyStore
      }

      function d(e) {
        if ("undefined" != typeof window && localStorage) try {
          var t;
          if (!s(e) && !window.localStorageConsentSet && i._k.includes(window.pokiCountry)) return;
          const o = localStorage.getItem(e);
          let n;
          try {
            n = JSON.parse(o)
          } catch {
            localStorage.removeItem(e)
          }
          return null === (t = n) || void 0 === t ? void 0 : t.value
        } catch {
          return null
        }
      }

      function l(e, t) {
        if ("undefined" != typeof window && localStorage) try {
          if (!s(e) && !window.localStorageConsentSet && i._k.includes(window.pokiCountry)) return;
          localStorage.setItem(e, JSON.stringify({
            time: (new Date).getTime(),
            value: t
          }))
        } catch {}
      }

      function c() {
        "undefined" != typeof window && localStorage && Object.values(n.y).forEach((e => {
          try {
            const t = localStorage.getItem(e.key),
              o = JSON.parse(t);
            if (!o) return;
            const n = s(e.key) || window.isFamilyMode,
              i = (new Date).getTime();
            i >= o.time + (n ? a : r) && localStorage.removeItem(e.key)
          } catch {}
        }))
      }
    },
    25302: (e, t, o) => {
      o.d(t, {
        Cz: () => v,
        FR: () => l,
        IF: () => h,
        Jb: () => f,
        Uh: () => w,
        Z3: () => u,
        ZW: () => c,
        hQ: () => y,
        o0: () => m,
        oW: () => b
      });
      var n = o(46493);

      function i() {
        var e, t;
        return (null === (e = window) || void 0 === e || null === (e = e.frames) || void 0 === e ? void 0 : e.gameFrame) || (null === (t = document) || void 0 === t || null === (t = t.getElementById("game-element")) || void 0 === t ? void 0 : t.contentWindow) || {
          postMessage: () => {}
        }
      }

      function r() {
        return document.getElementById("game-player")
      }

      function a() {
        return document.getElementById("poki-video-ad-container")
      }

      function s() {
        var e, t;
        if (!window.PokiSDK) return;
        const o = a(),
          n = r();
        if (o && n) {
          const e = n.getBoundingClientRect();
          o.style.left = `${e.left}px`, o.style.top = `${e.top+(window.scrollY||0)}px`, o.style.width = `${e.width}px`, o.style.height = `${e.height}px`
        }
        null === (e = window) || void 0 === e || null === (e = e.PokiSDK) || void 0 === e || null === (t = e.resizeVideoAd) || void 0 === t || t.call(e)
      }

      function d() {
        const e = a();
        e && (e.style.display = "none")
      }

      function l(e) {
        const t = document.createElement("div");
        return t.style.position = e ? "fixed" : "absolute", t.style.zIndex = "9999", t.style.overflow = "hidden", t.style.display = "none", t.id = "poki-video-ad-container", document.body.appendChild(t), t
      }

      function c(e, t) {
        const o = document.getElementById(e.containerID);
        var n, r;
        o && (null === (n = window) || void 0 === n || null === (n = n.PokiSDK) || void 0 === n || null === (r = n.destroyAd) || void 0 === r || r.call(n, o), o.remove());
        (t || i()).postMessage({
          type: "hoist_displayAd_destroy",
          data: e
        }, "*")
      }

      function y(e, t, o) {
        const n = o || i();
        if (!window.PokiSDK) return void c(e, n);
        const a = r();
        if (a) {
          var s, d;
          const o = a.getBoundingClientRect(),
            {
              x: i,
              y: r,
              w: l,
              h: y
            } = e.location || {
              x: 0,
              y: 0,
              w: 1e5,
              h: 1e5
            },
            p = Math.floor(i + l),
            u = Math.floor(y + r),
            v = Math.ceil(o.width),
            f = Math.ceil(o.height);
          if (p < 0 || p > v || u < 0 || u > f) return console.error(`That ad doesn't fit (frame: ${v}x${f} // loc ${i} ${r} ${l} ${y} ${p} ${u})`), void c(e, n);
          let w = document.getElementById(e.containerID);
          w || (w = document.createElement("div"), w.style.position = t ? "fixed" : "absolute", w.style.zIndex = "9998", w.style.overflow = "hidden", w.id = e.containerID, document.body.appendChild(w)), w.style.width = `${l}px`, w.style.height = `${y}px`, w.style.left = `${o.left+i}px`, w.style.top = `${o.top+r}px`, w.setAttribute("poki-ad-running", !0), w.setAttribute("x", i), w.setAttribute("y", r), null === (s = window) || void 0 === s || null === (s = s.PokiSDK) || void 0 === s || null === (d = s.hoistDisplayAd) || void 0 === d || d.call(s, {
            container: w,
            adUnitPath: e.adUnitPath,
            size: e.size,
            opportunityId: e.opportunityId,
            duringGameplay: () => e.duringGameplay,
            onCanDestroy: () => {
              n.postMessage({
                type: "hoist_displayAd_onCanDestroy",
                data: {
                  opportunityId: e.opportunityId
                }
              }, "*")
            },
            onDisplayRendered: t => {
              n.postMessage({
                type: "hoist_displayAd_onDisplayRendered",
                data: {
                  opportunityId: e.opportunityId,
                  isEmpty: t
                }
              }, "*")
            },
            onPreconditionsFailed: () => {
              w.remove(), c(e, n)
            }
          })
        }
      }
      let p = !1;

      function u(e, t, o, r) {
        const l = t || i();
        if (function() {
            if (!window.PokiSDK) return;
            const e = a();
            e && (s(), e.style.display = "block")
          }(), "PR" === e.position) {
          var c, y;
          (0, n.F)({
            action: "ad",
            category: "videoBegin",
            label: "rewarded",
            data: {
              opportunityId: e.opportunityId
            }
          }), null === (c = window) || void 0 === c || null === (c = c.PokiSDK) || void 0 === c || null === (y = c.rewardedBreak) || void 0 === y || y.call(c, (() => {
            l.postMessage({
              type: "hoist_videoAd_onStart",
              data: {
                opportunityId: e.opportunityId
              }
            }, "*")
          })).then((t => {
            d(), (t => {
              l.postMessage({
                type: "hoist_videoAd_onFinish",
                data: {
                  opportunityId: e.opportunityId,
                  rewardAllowed: t
                }
              }, "*"), (0, n.F)({
                action: "ad",
                category: "videoEnd",
                label: "rewarded",
                data: {
                  opportunityId: e.opportunityId,
                  source: "playground"
                }
              })
            })(t)
          }))
        } else {
          var u, v;
          let t = 1,
            i = (null === (u = window) || void 0 === u || null === (u = u.PokiSDK) || void 0 === u ? void 0 : u.commercialBreak) || (() => Promise.resolve());
          var f;
          if (null !== (v = window) && void 0 !== v && null !== (v = v.PokiSDK) && void 0 !== v && v.playgroundCommercialBreak) i = null === (f = window) || void 0 === f || null === (f = f.PokiSDK) || void 0 === f ? void 0 : f.playgroundCommercialBreak, o || !r && !p || (t = 2);
          let a = {};
          o || (a = {
            timeBetweenAds: 60 * (r ? 2 : 3) * 1e3
          }), (0, n.F)({
            action: "ad",
            category: "videoBegin",
            label: "midroll",
            data: {
              opportunityId: e.opportunityId
            }
          }), i({
            amount: t,
            onStart: () => {
              l.postMessage({
                type: "hoist_videoAd_onStart",
                data: {
                  opportunityId: e.opportunityId
                }
              }, "*")
            },
            ...a
          }).then((t => {
            t && (p = !0), d(), l.postMessage({
              type: "hoist_videoAd_onFinish",
              data: {
                opportunityId: e.opportunityId
              }
            }, "*"), (0, n.F)({
              action: "ad",
              category: "videoEnd",
              label: "midroll",
              data: {
                opportunityId: e.opportunityId,
                source: "playground"
              }
            })
          }))
        }
      }

      function v(e, t, o) {
        var n, r;
        null === (n = window) || void 0 === n || null === (n = n.PokiSDK) || void 0 === n || null === (r = n.setGameSpecificSettings) || void 0 === r || r.call(n, e.adTiming, e.specialConditions, o), p = !1;
        (t || i()).postMessage({
          type: "hoist_playgroundInit",
          data: {
            adBlocked: e.isAdBlocked
          }
        }, "*")
      }

      function f() {
        document.querySelectorAll("div[poki-ad-running]").forEach((e => {
          c({
            containerID: e.id
          })
        }))
      }

      function w() {
        window.addEventListener("resize", (() => {
          ! function() {
            if (!window.PokiSDK) return;
            const e = a(),
              t = r();
            if (e && t) {
              const o = t.getBoundingClientRect();
              e.style.left = `${o.left}px`, e.style.top = `${o.top+(window.scrollY||0)}px`
            }
          }(),
          function() {
            if (!window.PokiSDK) return;
            const e = r();
            if (e) {
              const t = e.getBoundingClientRect();
              document.querySelectorAll("div[poki-ad-running]").forEach((e => {
                e.style.left = `${t.left+parseInt(e.getAttribute("x"),10)}px`, e.style.top = `${t.top+parseInt(e.getAttribute("y"),10)}px`
              }))
            }
          }()
        }))
      }
      const g = "undefined" != typeof ResizeObserver ? new ResizeObserver((() => {
        s(), f()
      })) : null;

      function m() {
        const e = r();
        e && g && g.observe(e)
      }

      function b() {
        const e = r();
        e && g && g.unobserve(e)
      }

      function h() {
        const e = i();
        null == e || e.postMessage({
          type: "hoist_refocus_game"
        }, "*")
      }
    }
  }
]);
//# sourceMappingURL=client~main-4607b6ae~4c5624721bd3ebad5873.js.map