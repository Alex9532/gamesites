"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3832], {
    19952: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => i
      });
      var r = t(69675),
        o = t(34164),
        n = t(95901);

      function i({
        className: e,
        style: s
      }) {
        const t = (0, o.A)(r.fakeTile, e);
        return (0, n.Y)("div", {
          className: t,
          style: s
        })
      }
    },
    42495: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => m
      });
      var r = t(17402),
        o = t(34164),
        n = t(19952),
        i = t(25362),
        a = t(60685),
        l = t(39349),
        d = t(95901);
      const c = {
        mobile: 30,
        desktop: 60
      };

      function m() {
        const {
          isMobile: e
        } = (0, r.useContext)(i.F), s = (0, o.A)(a.pageGrid, {
          [l.pageCategory_mobile]: e
        }, {
          [l.pageCategory_desktop]: !e
        }), t = e ? c.mobile : c.desktop;
        return (0, d.Y)("div", {
          className: s,
          children: Array.from({
            length: t
          }).map(((e, s) => (0, d.Y)(n.default, {
            className: `ip${s}`,
            style: {
              "--fakeTileAnimationDelay": .1 * s + "s"
            }
          }, s)))
        })
      }
    },
    92413: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => m
      });
      var r = t(17402),
        o = t(34164),
        n = t(19952),
        i = t(60685),
        a = t(41951),
        l = t(25362),
        d = t(95901);
      const c = {
        mobile: 30,
        desktop: 60
      };

      function m() {
        const {
          isMobile: e
        } = (0, r.useContext)(l.F), s = (0, o.A)(i.pageGrid, {
          [a.pageGame_mobile]: e
        }, {
          [a.pageGame_desktop]: !e
        }), t = e ? c.mobile : c.desktop;
        return (0, d.FD)("div", {
          className: s,
          children: [e && (0, d.Y)(n.default, {
            className: a.pageGame__titleBox
          }), (0, d.Y)(n.default, {
            className: (0, o.A)(a.pageGame__gameWrapper, {
              [a.pageGame__gameWrapper_mobile]: e
            })
          }), !e && (0, d.FD)(d.FK, {
            children: [(0, d.Y)(n.default, {
              className: a.pageGame__advertisementA79,
              style: {
                width: "754px",
                height: "90px"
              }
            }), (0, d.Y)(n.default, {
              className: a.pageGame__advertisementA32,
              style: {
                width: "314px",
                height: "314px"
              }
            }), (0, d.Y)(n.default, {
              className: a.pageGame__advertisementA16,
              style: {
                width: "204x",
                height: "644px"
              }
            })]
          }), (0, d.Y)(n.default, {
            className: "ir0"
          }), (0, d.Y)(n.default, {
            className: "ir1"
          }), Array.from({
            length: t
          }).map(((e, s) => (0, d.Y)(n.default, {
            style: {
              "--fakeTileAnimationDelay": .1 * s + "s"
            }
          }, `pageGameSkeleton-${s}`)))]
        })
      }
    },
    88942: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => m
      });
      var r = t(17402),
        o = t(34164),
        n = t(19952),
        i = t(25362),
        a = t(60685),
        l = t(72146),
        d = t(95901);
      const c = {
        mobile: 23,
        desktop: 60
      };

      function m() {
        const {
          isMobile: e
        } = (0, r.useContext)(i.F), s = e ? l.pageHome_mobile : l.pageHome_desktop, t = e ? c.mobile : c.desktop;
        return (0, d.Y)("div", {
          className: (0, o.A)(a.pageGrid, s),
          children: Array.from({
            length: t
          }).map(((e, s) => (0, d.Y)(n.default, {
            className: `ip${s}`,
            style: {
              "--fakeTileAnimationDelay": .1 * s + "s"
            }
          }, s)))
        })
      }
    },
    70335: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => c
      });
      var r = t(65676),
        o = t(80243),
        n = t(18864),
        i = t(42891),
        a = t(55158),
        l = t(95901);
      const d = (0, o.Ay)({
        resolved: {},
        chunkName: () => "app-components-Spinner-tsx",
        isReady(e) {
          const s = this.resolve(e);
          return !0 === this.resolved[s] && !!t.m[s]
        },
        importAsync: () => Promise.all([t.e(1984), t.e(6453)]).then(t.bind(t, 22376)),
        requireAsync(e) {
          const s = this.resolve(e);
          return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
        },
        requireSync(e) {
          const s = this.resolve(e);
          return t(s)
        },
        resolve() {
          return 22376
        }
      });

      function c({
        forceLoadingState: e = !1
      }) {
        const s = (0, r.d4)((e => (0, n.rv)(e)));
        return (0, r.d4)((e => (0, i.ac)(e))) || e ? (0, l.FD)(l.FK, {
          children: [(0, l.Y)(d, {
            className: a.pageLoader,
            style: {
              backgroundColor: s.color
            },
            small: !1
          }), e && (0, l.Y)("div", {
            className: a.pageLoader__filler
          })]
        }) : null
      }
    },
    26423: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => F
      });
      var r = t(17402),
        o = t(65676),
        n = t(68154),
        i = t(61244),
        a = t(80243),
        l = t(34164),
        d = t(37084),
        c = t(10283),
        m = t(18864),
        p = t(28685),
        h = t(90385),
        u = t(25362),
        v = t(10179),
        y = t(89385),
        _ = t(36768),
        g = t(67893),
        A = t(11436),
        f = t(56469),
        k = t(31682),
        N = t(95901);
      const b = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-PageBackground-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(115), t.e(9334), t.e(9559)]).then(t.bind(t, 20486)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 20486
          }
        }),
        Y = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-PageLoader-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.resolve().then(t.bind(t, 70335)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 70335
          }
        }),
        G = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-Footer-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(4810), t.e(2610), t.e(7994), t.e(7603), t.e(9010), t.e(219)]).then(t.bind(t, 53978)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 53978
          }
        }),
        x = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-NotificationStack-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => t.e(2623).then(t.bind(t, 89684)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 89684
          }
        }),
        D = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-FloatingWarning-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(7307), t.e(4008)]).then(t.bind(t, 31861)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 31861
          }
        }),
        q = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-Pill-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(4488), t.e(5229), t.e(7170), t.e(4363)]).then(t.bind(t, 43050)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 43050
          }
        }),
        L = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-AuthPanel-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(4810), t.e(6832), t.e(5538), t.e(1984), t.e(4235), t.e(4891), t.e(6453), t.e(6397), t.e(2166)]).then(t.bind(t, 9707)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 9707
          }
        }),
        S = (0, a.Ay)({
          resolved: {},
          chunkName: () => "app-components-NavigationAwareLazyHydrate-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => t.e(4741).then(t.bind(t, 25144)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 25144
          }
        }),
        C = (0, g.y1)();

      function F({
        children: e
      }) {
        const s = (0, o.wA)(),
          t = (0, d.SQ)(),
          {
            isMobile: a
          } = (0, r.useContext)(u.F),
          g = (0, o.d4)(p.L),
          F = (0, o.d4)(m.rv),
          P = (0, o.d4)(y.Jk),
          T = (0, o.d4)(y.ij),
          M = (0, o.d4)(h.K5),
          w = (0, o.d4)(A.k4),
          E = (0, o.d4)(A.E6);
        (0, r.useEffect)((() => {
          (0, _.Ts)(), P && s((0, v.sx)())
        }), []), (0, r.useEffect)((() => {
          t.includes("flow=") && !T && s((0, y.qf)())
        }), []), (0, r.useEffect)((() => {
          "PUSH" === E && (0, f.e)()
        }), [w, E]);
        const R = "default" !== (null == F ? void 0 : F.style),
          W = "privacy" === M;
        return (0, N.FD)(N.FK, {
          children: [(0, N.Y)(n.m, {
            children: (0, N.Y)("meta", {
              name: "theme-color",
              content: "#83ffe7"
            })
          }), (0, N.Y)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              display: "none"
            },
            dangerouslySetInnerHTML: {
              __html: c.default
            }
          }), !W && (0, N.Y)(q, {}), (0, N.Y)("div", {
            className: (0, l.A)(k.root, {
              [k.root_desktop]: !a,
              [k.root_mobile]: a
            }),
            children: e
          }), (0, N.Y)(S, {
            whenVisible: !0,
            children: (0, N.Y)(G, {})
          }), (0, N.Y)(i.A, {
            whenIdle: !0,
            children: (0, N.Y)(Y, {})
          }), g.length > 0 && (0, N.Y)(x, {}), R && (0, N.Y)(b, {}), P && T && (0, N.Y)(L, {}), C && (0, N.Y)(D, {
            id: "acceptance-message",
            children: "🚨 Attention: This is an acceptance/testing site for Poki, not the official Poki.com. 🚨"
          })]
        })
      }
    },
    69675: (e, s, t) => {
      t.r(s), t.d(s, {
        fakeTile: () => r,
        fakeTileBlinkAnimation: () => o
      });
      var r = "YwmMMIAFGWWCLiX3IDSl",
        o = "MzbKIFk6afkjJ3xw3s3x"
    },
    60685: (e, s, t) => {
      t.r(s), t.d(s, {
        pageGrid: () => r,
        pageTopContent: () => o
      });
      var r = "vtbwTfQNi80Hes0DzmGs",
        o = "pgTlDsvMokOdehB3D11L"
    },
    39349: (e, s, t) => {
      t.r(s), t.d(s, {
        pageCategory__schemaList: () => r,
        pageCategory__schemaTitle: () => o,
        pageCategory__titleBox: () => n,
        pageCategory__topContent: () => i,
        pageCategory_desktop: () => a,
        pageCategory_mobile: () => l
      });
      var r = "WcMY3e5nv_iqM7rLTINg",
        o = "Vz1O5jCIfTAEjuWB2uXg",
        n = "rg0q25sDgc3c2A__7hrD",
        i = "Wz4fsOmhQR4bEYpqHqhc",
        a = "JgLfL7LclbiAmVJ1BGIg",
        l = "BFj5_MRnlqMNxEud7CSZ"
    },
    41951: (e, s, t) => {
      t.r(s), t.d(s, {
        pageGame__advertisementA16: () => r,
        pageGame__advertisementA32: () => o,
        pageGame__advertisementA79: () => n,
        pageGame__externallyHostedCommunication: () => i,
        pageGame__gameWrapper: () => a,
        pageGame__gameWrapper_mobile: () => l,
        pageGame__pixel: () => d,
        pageGame__titleBox: () => c,
        pageGame_desktop: () => m,
        pageGame_desktop_hasTakeover: () => p,
        pageGame_mobile: () => h
      });
      var r = "ZWzDTMK76w9X1iaBvoSs",
        o = "_K68p9Y5eLN5PSdt4um9",
        n = "iV0NGvWNqQGMUwVRfpqC",
        i = "lwfhBFf00emgvcGoqV0g",
        a = "cM0dvuoLEJDmDILA2Jo8",
        l = "ZJTKr_MXUFVVsJpV_qiz",
        d = "nQ32Q_5I94EeoEsR3ljg",
        c = "cjI2e42faicGCm1ksKXp",
        m = "KOhrFB4QDKEFN2uykSgp",
        p = "RlUXPDIHC5o_sVPxHp0G",
        h = "Fs5S79qEs9av8TQAeTeb"
    },
    72146: (e, s, t) => {
      t.r(s), t.d(s, {
        pageHome_desktop: () => r,
        pageHome_mobile: () => o
      });
      var r = "Eu3YePRYW_jQ2bgCbNjr",
        o = "sVO_yY3sP6R0A04SxJ_L"
    },
    55158: (e, s, t) => {
      t.r(s), t.d(s, {
        pageLoader: () => r,
        pageLoaderWrapperFadeInAnimation: () => o,
        pageLoader__filler: () => n
      });
      var r = "BpGdi4Nhd9PmA4jbCDMd",
        o = "sbvbNDKUibhBW2I87TGN",
        n = "W8compNR7UyaOS_MWPEf"
    },
    31682: (e, s, t) => {
      t.r(s), t.d(s, {
        root: () => r,
        root_desktop: () => o,
        root_mobile: () => n
      });
      var r = "lStd1276e_IhuA3g3FIs",
        o = "s9w4UjUUDL2klmhRDNdo",
        n = "ADMPJVcFvhX6udYDGs_x"
    }
  }
]);
//# sourceMappingURL=client~main-bec01985~56de32bbe4536010c081.js.map