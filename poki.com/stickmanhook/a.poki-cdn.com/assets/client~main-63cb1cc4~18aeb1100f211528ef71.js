"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [8818], {
    15362: (e, t, a) => {
      a.d(t, {
        A: () => E
      });
      var o = a(82960),
        n = a(43346),
        r = a(48554);
      const i = {
        takeover: null,
        pokiSDKLoaded: !1,
        adStackLoaded: !1,
        adStackReadyForLoad: !1,
        adBlocked: !1,
        mobileAdsOpportunity: !1
      };

      function c(e = i, t) {
        return t.type === n.XB.type ? {
          ...e,
          pokiSDKLoaded: !0
        } : t.type === n.HH.type ? {
          ...e,
          adStackLoaded: !0
        } : t.type === r.Br.type ? {
          ...e,
          adStackReadyForLoad: !0
        } : t.type === n.Q5.type ? {
          ...e,
          adBlocked: !0
        } : t.type === n.jO.type ? {
          ...e,
          takeover: t.takeover
        } : t.type === n.jp.type ? {
          ...e,
          takeover: null
        } : t.type === n.eb.type ? {
          ...e,
          mobileAdsOpportunity: t.allowed
        } : e
      }
      var l = a(18864),
        s = a(42891),
        d = a(75685);

      function u(e = {}, t) {
        return t.type === d.x.type ? {
          ...e,
          ...t.conversions
        } : e
      }
      var p = a(51149);
      const g = {
        config: {}
      };

      function m(e = g, t) {
        return t.type === p.m.type ? {
          ...e,
          config: t.config
        } : e
      }
      var y = a(23260);
      const f = {
          currentPagePath: null,
          previousPagePath: null,
          pages: {}
        },
        v = {
          pokifordevs_team_id: void 0,
          developer: void 0
        };

      function h(e = f, t) {
        var a;
        const o = e.pages && e.pages[null == t || null === (a = t.payload) || void 0 === a ? void 0 : a.path] || v;
        return t.type === y.y.type ? {
          ...e,
          pages: {
            ...e.pages,
            [t.payload.path]: {
              ...o,
              pokifordevs_team_id: t.payload.pokifordevs_team_id,
              developer: t.payload.developer
            }
          },
          currentPagePath: t.payload.path,
          previousPagePath: e.currentPagePath
        } : e
      }
      var k = a(86494);
      const _ = {
        voteEpicInitilized: !1,
        userVotes: {},
        previousUserVotes: {},
        feedbackGiven: {},
        ratingsData: {}
      };

      function b(e = _, t) {
        return t.type === k.fU.type ? {
          ...e,
          voteEpicInitilized: !0
        } : t.type === k.Vy.type ? {
          ...e,
          userVotes: {
            ...e.userVotes,
            [t.gameId]: t.direction
          },
          previousUserVotes: {
            ...e.previousUserVotes,
            [t.gameId]: e.userVotes[t.gameId]
          },
          feedbackGiven: {
            ...e.feedbackGiven,
            [t.gameId]: !1
          }
        } : t.type === k.rY.type ? {
          ...e,
          feedbackGiven: {
            ...e.feedbackGiven,
            [t.gameId]: !0
          }
        } : t.type === k.jO.type ? {
          ...e,
          ratingsData: {
            ...t.ratingsData
          }
        } : e
      }
      var w = a(6788),
        z = a(822),
        L = a(88800),
        A = a(91323),
        P = a(7696);
      const M = {
        privacyCenterViewed: !1,
        personalizedAds: !0,
        pokiAnalytics: !0,
        bingRemarketingEnabled: !0,
        googleRemarketingEnabled: !0,
        enableCMP: !0,
        sendDeviceCapabilities: !0,
        isFamilyMode: !1,
        familyModeCookieConsent: !1
      };

      function S(e = M, t) {
        return t.type === P.kN.type ? {
          ...e,
          privacyCenterViewed: t.toggle
        } : t.type === P.pI.type ? {
          ...e,
          personalizedAds: t.toggle
        } : t.type === P.S9.type ? {
          ...e,
          pokiAnalytics: t.toggle
        } : t.type === P.QX.type ? {
          ...e,
          bingRemarketingEnabled: t.toggle
        } : t.type === P.X6.type ? {
          ...e,
          googleRemarketingEnabled: t.toggle
        } : t.type === P.CU.type ? {
          ...e,
          enableCMP: t.toggle
        } : t.type === P.Dz.type ? {
          ...e,
          sendDeviceCapabilities: t.toggle
        } : t.type === P.Yt.type ? {
          ...e,
          isFamilyMode: t.toggle
        } : t.type === P.Se.type ? {
          ...e,
          familyModeCookieConsent: t.consent
        } : e
      }
      var C = a(15203),
        G = a(97454),
        O = a(89385),
        x = a(5403);
      const N = ({
        basename: e,
        defaultLocation: t = {}
      }) => {
        const a = {
          location: t,
          action: null,
          basename: e,
          forceReload: !1
        };
        return (e = a, t = {}) => {
          const {
            type: o
          } = t;
          if ("@@router/LOCATION_CHANGE" === o) {
            const {
              location: a,
              action: o
            } = t.payload || {};
            return {
              ...e,
              location: a,
              action: o
            }
          }
          if (o === x.N.type) {
            const {
              forceReload: a
            } = t;
            return {
              ...e,
              forceReload: a
            }
          }
          return e
        }
      };
      a(52600);
      var R = a(61481);
      const E = e => (0, o.HY)({
        router: N({
          defaultLocation: e.location
        }),
        ads: c,
        background: l.Ay,
        client: s.Ay.reducer,
        currency: u,
        experiment: m,
        game: r.Ay.reducer,
        pages: h,
        ratings: b,
        bugReport: w.Ay.reducer,
        search: z.Ay.reducer,
        notifications: L.Ay.reducer,
        site: A.Ay.reducer,
        privacy: S,
        mystery: C.Ay.reducer,
        eastereggs: G.Ay.reducer,
        account: O.Ay.reducer,
        [R.lh.reducerPath]: R.lh.reducer
      })
    },
    71219: (e, t, a) => {
      a.d(t, {
        $E: () => G,
        $i: () => w,
        Fw: () => k,
        GE: () => S,
        I2: () => O,
        Lz: () => L,
        i8: () => h,
        iM: () => z,
        j5: () => A,
        nj: () => P,
        th: () => C
      });
      var o = a(1081),
        n = a(42891),
        r = a(90385),
        i = a(91323),
        c = a(11436),
        l = a(53210),
        s = a(15049),
        d = a(25733),
        u = a(89385),
        p = a(73421),
        g = a(16345),
        m = a(28933),
        y = a(35190);
      let f;
      try {
        var v;
        null !== (v = navigator) && void 0 !== v && v.cookieDeprecationLabel && navigator.cookieDeprecationLabel.getValue().then((e => {
          f = e
        }))
      } catch {}
      const h = (0, o.Mz)(n.Kk, s.dR, s.lb, ((e, t, a) => {
          if ("undefined" != typeof window) {
            var o, n;
            const e = (null === (o = new URL(null === (n = window) || void 0 === n || null === (n = n.location) || void 0 === n ? void 0 : n.toString())) || void 0 === o || null === (o = o.searchParams) || void 0 === o ? void 0 : o.get("force_ay_mode")) || y.G.NOT_APPLICABLE;
            if ([y.G.DISABLED, y.G.PBS_ONLY, y.G.DPF_ONLY, y.G.CSTS_ONLY, y.G.PBS_DPF_CSTS, y.G.ON].includes(e)) return console.warn("AY mode set by URL parameter:", e), e
          }
          return a || !t ? y.G.NOT_APPLICABLE : e >= 2 && e < 4 ? y.G.PBS_ONLY : e >= 4 && e < 6 ? y.G.DPF_ONLY : e >= 6 && e < 8 ? y.G.CSTS_ONLY : e >= 8 && e < 10 ? y.G.PBS_DPF_CSTS : e >= 10 && e < 12 ? y.G.DISABLED : y.G.ON
        })),
        k = (0, o.Mz)(h, n.wu, ((e, t) => (0, m.J)(e, t))),
        _ = (0, o.Mz)(c.fn, (e => {
          const {
            referrer: t
          } = document, a = new URLSearchParams(e);
          let o = "";
          try {
            o = new URL(t).hostname
          } catch {}
          return "web_app_manifest" === a.get("utm_source") ? "pwa" : "android_app" === a.get("poki_source") ? "android_app" : /(googleads\.g\.doubleclick\.net|tpc\.googlesyndication\.com|imasdk\.googleapis\.com|www\.googleadservices\.com)$/.test(o) || a.has("gclid") || a.has("msclkid") || a.has("yclid") || a.has("ttclid") || a.has("fbclid") || a.has("utm_campaign") || a.has("campaign") || a.has("adgroup") || a.has("creative") || "bing" === a.get("utm_source") || "cpc" === a.get("utm_medium") || "rtb-cpm" === a.get("utm_medium") ? "paid" : /(google\.[a-z]{2,3}|google\.[a-z]{2,3}\.[a-z]{2,3}|yandex\.[a-z]{2,3}|yandex\.[a-z]{2,3}\.[a-z]{2,3}|baidu\.[a-z]{2,3}\.[a-z]{2,3}|yahoo\.[a-z]{2,3}|yahoo\.[a-z]{2,3}\.[a-z]{2,3}|aol\.com|ask\.com|avg\.com|babylon\.com|bing\.com|com\.google\.android\.googlequicksearchbox|duckduckgo\.com|googleweblight\.com|info\.com|int\.search\.myway\.com|izito\.com|msn\.com|myway\.com|naver\.com|qo-search\.com|r\.searchencrypt\.com|search-results\.com|searchlock\.com|seznam\.cz|so\.com|sogou\.com|startgoogle\.startpagina\.nl|startpage\.com|startsiden\.no|virgilio\.it|webcache\.googleusercontent\.com|wp\.pl|zapmeta\.com)$/.test(o) || a.get("utm_term") && "share" !== a.get("utm_medium") ? "search" : t || "share" === a.get("utm_medium") ? "referral" : "direct"
        })),
        b = (0, o.Mz)(c.fn, (e => {
          const {
            referrer: t
          } = document, a = new URLSearchParams(e);
          return a.has("gclid") ? "google" : a.has("msclkid") ? "bing" : a.has("yclid") ? "yandex" : a.has("ttclid") ? "tiktok" : null != t && t.includes("google") ? "google" : null != t && t.includes("bing") ? "bing" : null != t && t.includes("yahoo") ? "yahoo" : null != t && t.includes("yandex") ? "yandex" : null != t && t.includes("tiktok") ? "tiktok" : null
        })),
        w = (0, o.Mz)(c.m_, i.Gd, r.Vv, l.p, n.H6, h, _, b, d.v, ((e, t, a, o, n, r, i, c, l) => {
          var s;
          const d = {
            tag: "pg-vabc97ca6b94fcb9e9f0820ae31235075cca93669",
            ab: Math.floor(100 * Math.random()).toString(),
            experiment: o,
            page_has_mpu: "no",
            page_has_skyscraper: "no",
            page_has_lead: "no",
            cookieDepL: f,
            site_id: t.id,
            ay_mode: r,
            source_channel_lp: `${i||"null"}|${c||"null"}|${(null===(s=l.landing_page)||void 0===s?void 0:s.type)||"null"}`
          };
          if (a && (d["game-id"] = a.id, d.categories = (a.categories || []).map((({
              id: e
            }) => e)), o && (d.expid_content_gameid = `${o}|${a.id}`)), e && (d.debug = e), !n) {
            let e = 3;
            const t = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
              a = Object.keys(p.xu);
            for (let o = 0; o < a.length; o++) {
              const n = Number(a[o]),
                r = p.xu[n] || 0,
                i = p.xu[Number(a[o + 1])] || 1 / 0;
              if (t >= r && t <= i) {
                e = n;
                break
              }
            }
            d.page_has_lead = "yes", e >= 12 && (d.page_has_mpu = "yes"), [9, 11, 17].includes(e) && (d.page_has_skyscraper = "yes")
          }
          return d
        }));

      function z(e) {
        return e.ads.takeover
      }

      function L(e) {
        return e.ads.pokiSDKLoaded
      }

      function A(e) {
        return e.ads.adStackLoaded
      }
      const P = e => e.ads.adBlocked,
        M = (0, o.Mz)(n.H6, (e => e.ads.adStackReadyForLoad), ((e, t) => !e || t));

      function S(e) {
        return e.ads.mobileAdsOpportunity
      }
      const C = (0, o.Mz)(L, n.Wv, M, s.CN, u.Jk, u.iJ, ((e, t, a, o, n, r) => o ? n ? e && t && a && r : e && t && a : e && a)),
        G = (0, o.Mz)(r.Vv, (e => {
          const t = [];
          return null != e && e.categories && e.categories.forEach((e => {
            e.iabCategories && e.iabCategories.split(",").forEach((e => {
              t.includes(e) || t.push(e)
            }))
          })), t.sort(), t
        })),
        O = (0, o.Mz)(r.Vv, i.Gd, ((e, t) => {
          const a = (0, g.A)(),
            o = 3 === t.id ? "Poki" : t.domain_title;
          return {
            site: {
              name: o,
              domain: window.location.hostname,
              page: window.location.href,
              privacypolicy: 1,
              publisher: {
                name: o,
                domain: t.domain
              },
              content: e ? {
                id: `${e.id}`,
                title: e.title,
                url: window.location.href,
                sourcerelationship: 1
              } : {}
            },
            device: {
              w: a.width,
              h: a.height
            }
          }
        }))
    },
    574: (e, t, a) => {
      a.d(t, {
        K: () => p
      });
      var o = a(1081),
        n = a(42891),
        r = a(90385),
        i = a(91323);
      const c = {};
      var l = a(25733),
        s = a(53210),
        d = a(15049),
        u = a(11436);
      const p = (0, o.Mz)(n.wu, l.v, (function() {
        return "undefined" == typeof window ? c : JSON.parse(JSON.stringify(window.user || {}))
      }), i.Gd, s.p, r.K5, r.Vv, r.N2, u.k4, d.Ir, ((e, t, a, o, n, r, i, c, l, s) => {
        let d = {};
        "game" === r && (d = {
          id: i.id,
          type: "game",
          path: l,
          content: {
            game: {
              id: i.id
            }
          }
        }), "category" === r && (d = {
          id: c.id,
          type: "category",
          path: l
        }), "home" === r && (d = {
          type: "home",
          id: 0,
          path: l
        });
        return {
          geo: e,
          session: t,
          user: a,
          site: o,
          experiment: n,
          page: d,
          tag: "pg-abc97ca6b94fcb9e9f0820ae31235075cca93669",
          isPokiAnalyticsEnabled: s
        }
      }))
    },
    53210: (e, t, a) => {
      function o(e) {
        var t;
        return null === (t = e.experiment) || void 0 === t || null === (t = t.config) || void 0 === t || null === (t = t.playground) || void 0 === t ? void 0 : t.sdk_version
      }

      function n(e) {
        var t;
        return null === (t = e.experiment) || void 0 === t || null === (t = t.config) || void 0 === t ? void 0 : t.id
      }
      a.d(t, {
        c: () => o,
        p: () => n
      })
    },
    98417: (e, t, a) => {
      a.d(t, {
        d: () => c,
        H: () => l
      });
      var o = a(1081),
        n = a(40827);
      var r = a(42891),
        i = a(71219);

      function c(e) {
        const t = (0, r.H6)(e),
          a = n.A[t ? "mobile" : "desktop"];
        return Object.values(a).map((t => t(e)))
      }
      const l = (0, o.Mz)(c, (function(e) {
        return e.currency
      }), i.I2, ((e, t, a) => ({
        adUnits: e,
        config: {
          debug: !1,
          useBidCache: !0,
          bidCacheFilterFunction: e => !("video" === e.mediaType && "rubicon" === e.bidder),
          currency: {
            adServerCurrency: "EUR",
            rates: t,
            defaultRates: t
          },
          ortb2: a
        }
      })))
    },
    98708: (e, t, a) => {
      a.d(t, {
        K: () => i
      });
      var o = a(1081),
        n = a(61481),
        r = a(91323);
      const i = (0, o.Mz)((e => n.lh.endpoints.getLocalisations.select({
        site: (0, r.Gd)(e)
      })(e)), (e => (null == e ? void 0 : e.data) || []))
    },
    28685: (e, t, a) => {
      a.d(t, {
        L: () => o,
        W: () => n
      });
      const o = e => e.notifications.stack;

      function n(e, t) {
        const {
          stack: a
        } = e.notifications;
        return a.find((e => e.id === t)) || null
      }
    },
    90385: (e, t, a) => {
      a.d(t, {
        $B: () => S,
        FR: () => L,
        K5: () => f,
        N2: () => _,
        Qk: () => m,
        Sk: () => x,
        TI: () => O,
        Ue: () => v,
        Vv: () => k,
        Xk: () => y,
        ZI: () => P,
        hj: () => C,
        nK: () => w,
        tM: () => A
      });
      var o = a(1081),
        n = a(42891),
        r = a(98708),
        i = a(91323),
        c = a(40890),
        l = a(15049),
        s = a(43908),
        d = a(36774),
        u = a(61481),
        p = a(53210),
        g = a(11436);

      function m(e) {
        return e.router.location.pathname
      }

      function y(e) {
        return null === e.pages.previousPagePath
      }
      const f = (0, o.Mz)(i.Gd, m, ((e, t) => (0, c.M5)(e, t)));

      function v(e) {
        const {
          pages: t
        } = e, a = m(e), o = function(e) {
          return e.pages.previousPagePath
        }(e), n = t.pages[a], r = o ? t.pages[o] : null;
        return null != n && n.pokifordevs_team_id && null != r && r.pokifordevs_team_id ? n.pokifordevs_team_id === r.pokifordevs_team_id : !(null == n || !n.developer || null == r || !r.developer) && n.developer === r.developer
      }
      const h = e => u.lh.endpoints.getGame.select({
        slug: (0, g.Ms)(e),
        site: (0, i.Gd)(e),
        device: (0, n.xp)(e),
        geo: (0, n.wu)(e),
        experiment: (0, p.p)(e),
        pageType: f(e),
        path: (0, g.k4)(e)
      })(e);

      function k(e) {
        const t = f(e);
        if ("game" !== t && "preview" !== t && "mystery" !== t) return {};
        const a = h(e);
        return "fulfilled" === a.status ? a.data : {}
      }
      const _ = e => {
        if (!("category" === f(e))) return {};
        const t = (e => u.lh.endpoints.getCategory.select({
          slug: (0, g.Ms)(e),
          site: (0, i.Gd)(e),
          device: (0, n.xp)(e),
          geo: (0, n.wu)(e),
          experiment: (0, p.p)(e)
        })(e))(e);
        return "fulfilled" === t.status ? t.data : {}
      };

      function b(e) {
        if (!("home" === f(e))) return {};
        const t = (e => u.lh.endpoints.getHomepage.select({
          site: (0, i.Gd)(e),
          device: (0, n.xp)(e),
          geo: (0, n.wu)(e),
          experiment: (0, p.p)(e),
          trafficSource: (0, n.zO)(e)
        })(e))(e);
        return "fulfilled" === t.status ? t.data : {}
      }
      const w = (0, o.Mz)(f, k, _, b, ((e, t, a, o) => {
          let n = [];
          return "game" === e && (n = t.alternates), "category" === e && (n = null == a ? void 0 : a.alternates), "home" === e && (n = o.alternates), n ? n.filter((({
            hrefLang: e
          }) => "x-default" !== e)).map((({
            href: e,
            hrefLang: t,
            lang: a,
            title: o
          }) => ({
            href: e,
            hrefLang: t,
            title: o,
            lang: a,
            languageName: (0, s.sv)()[t].languageName
          }))).sort(((e, t) => e.languageName.localeCompare(t.languageName, "en"))) : []
        })),
        z = {
          PT: "https://a.poki-cdn.com/privacy/Portugal%20-%202024.12.16_Poki_privacy_statement.pdf",
          BR: "https://a.poki-cdn.com/privacy/Brazil%20-%202024.12.16_Poki_privacy_statement.pdf"
        },
        L = (0, o.Mz)(i.Gd, (e => (0, c.AO)(e, "privacy", ""))),
        A = (0, o.Mz)(i.Gd, n.wu, ((e, t) => {
          const a = z[t];
          return a || (0, c.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "privacy-statement")
        })),
        P = (0, o.Mz)(i.Gd, n.wu, ((e, t) => (0, c.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "cookie-statement"))),
        M = {
          PT: "https://a.poki-cdn.com/privacy/Portugal%20-%202024.12.16_Poki_terms_of_use.pdf",
          BR: "https://a.poki-cdn.com/privacy/Brazil%20-%202024.12.16_Poki_terms_of_use.pdf"
        },
        S = (0, o.Mz)(i.Gd, n.wu, ((e, t) => {
          const a = M[t];
          return a || (0, c.AO)(e, "content", (d._k.includes(t) ? "" : "global-") + "terms-of-use")
        })),
        C = (0, o.Mz)(n.wu, (e => !["NL", "GB", "ES"].includes(e))),
        G = (0, o.Mz)(i.Gd, (e => (0, c.AO)(e, "content", "contact"))),
        O = (0, o.Mz)(i.Gd, r.K, G, A, P, S, l.lb, n.wu, C, ((e, t, a, o, n, r, i, l, s) => [{
          label: t.about,
          url: "https://about.poki.com",
          external: !0
        }, {
          label: t.developers,
          url: "https://developers.poki.com",
          external: !0
        }, {
          label: t.jobs,
          url: "https://jobs.poki.com",
          external: !0
        }, i ? null : {
          label: t.poki_kids,
          url: "https://kids.poki.com",
          external: !0
        }, !1 === s ? {
          label: t.privacy_statement,
          url: o
        } : null, i || s ? null : {
          label: t.cookie_statement,
          url: n
        }, !1 === s ? {
          label: t.nav_terms_of_use,
          url: r
        } : null, !0 === s ? {
          label: "Privacy Center",
          url: (0, c.AO)(e, "privacy", "")
        } : null, "CA" === l ? {
          label: "⚙️ Cookie settings",
          url: (0, c.AO)(e, "privacy", "")
        } : null, {
          label: t.faq,
          url: (0, c.AO)(e, "content", "faq")
        }, {
          label: t.nav_contact,
          url: a
        }].filter((e => null !== e))));

      function x(e) {
        const t = u.lh.endpoints.getImvitaConfigs.select({})(e);
        return "fulfilled" === t.status ? t.data : {}
      }
    },
    15049: (e, t, a) => {
      a.d(t, {
        CN: () => c,
        GZ: () => d,
        Ir: () => n,
        Py: () => r,
        U4: () => o,
        YQ: () => i,
        dR: () => s,
        hv: () => u,
        lb: () => l
      });
      const o = e => e.privacy.privacyCenterViewed,
        n = e => e.privacy.pokiAnalytics,
        r = e => e.privacy.bingRemarketingEnabled,
        i = e => e.privacy.googleRemarketingEnabled,
        c = e => e.privacy.enableCMP,
        l = e => e.privacy.isFamilyMode,
        s = e => e.privacy.personalizedAds,
        d = e => e.privacy.familyModeCookieConsent;

      function u(e) {
        const t = n(e),
          a = l(e),
          o = e.privacy.sendDeviceCapabilities;
        return t && o && !a
      }
    },
    11436: (e, t, a) => {
      a.d(t, {
        E6: () => f,
        IA: () => s,
        Lf: () => y,
        Ms: () => m,
        Pn: () => g,
        fn: () => i,
        hk: () => l,
        k4: () => d,
        lI: () => u,
        m_: () => p
      });
      var o = a(1081),
        n = a(91323),
        r = a(40890);

      function i(e) {
        var t;
        return null === (t = e.router) || void 0 === t || null === (t = t.location) || void 0 === t ? void 0 : t.search
      }
      const c = ["cache", "device", "site", "browserfamily", "traffic-tag"],
        l = (0, o.Mz)(i, (e => {
          const t = new URLSearchParams;
          for (const [a, o] of new URLSearchParams(e)) c.includes(a) || t.append(a, o);
          const a = t.toString();
          return a ? `?${a}` : ""
        })),
        s = (0, o.Mz)(i, (e => {
          const t = {};
          return new URLSearchParams(e).forEach(((e, a) => {
            a.toLowerCase().startsWith("gd") && (t[a] = e)
          })), t
        }));

      function d(e) {
        var t;
        return null === (t = e.router) || void 0 === t || null === (t = t.location) || void 0 === t ? void 0 : t.pathname
      }
      const u = (0, o.Mz)((e => {
          var t;
          return null === (t = e.router) || void 0 === t || null === (t = t.location) || void 0 === t ? void 0 : t.pathname
        }), i, ((e, t) => e + t)),
        p = ((0, o.Mz)(((e, t) => t || u(e)), (e => e.client.host), l, ((e, t, a) => `${t}${e}${a}`)), (0, o.Mz)((e => e.router.location.search.replace(/^\?/, "")), (e => {
          if (!e) return;
          const t = e.split("&").find((e => /^debug=/.test(e)));
          if (!t) return;
          const [, ...a] = t.split("=");
          return a.join("=")
        }))),
        g = (0, o.Mz)(n.Gd, (e => (0, r.AO)(e, "home", "")));

      function m(e) {
        const t = d(e),
          a = (0, n.Gd)(e),
          o = (0, r.M5)(a, t);
        return (0, r.TH)(a, o, t)
      }

      function y(e) {
        return e.router.forceReload
      }

      function f(e) {
        return e.router.action
      }
    },
    88421: (e, t, a) => {
      function o(e) {
        return e.search.expanded
      }

      function n(e) {
        return e.search.pending
      }

      function r(e) {
        return e.search.error
      }

      function i(e) {
        return e.search.query
      }

      function c(e) {
        return e.search.searchSessionId
      }

      function l(e) {
        return e.search.results
      }

      function s(e) {
        return e.search.quickSearchCategories
      }
      a.d(t, {
        AB: () => s,
        GO: () => o,
        Ie: () => c,
        SO: () => n,
        Z1: () => i,
        fj: () => l,
        j5: () => r
      })
    },
    25733: (e, t, a) => {
      function o() {
        return "undefined" == typeof window ? {} : JSON.parse(JSON.stringify(window.session || {}))
      }
      a.d(t, {
        v: () => o
      })
    },
    43908: (e, t, a) => {
      a.d(t, {
        TH: () => i,
        l0: () => c,
        sv: () => l
      });
      var o = a(40890);
      const n = {},
        r = {},
        i = [],
        c = e => {
          Object.entries(e).forEach((([e, t]) => {
            "xx" !== t.iso_lang && (n[e] = t, i.push({
              href: (0, o.kC)(t, "home", ""),
              hrefLang: t.iso_lang,
              lang: t.lang
            }), r[t.iso_lang] = t)
          })), i.push({
            href: (0, o.kC)(n[3], "home", ""),
            hrefLang: "x-default"
          })
        },
        l = () => r
    }
  }
]);
//# sourceMappingURL=client~main-63cb1cc4~18aeb1100f211528ef71.js.map