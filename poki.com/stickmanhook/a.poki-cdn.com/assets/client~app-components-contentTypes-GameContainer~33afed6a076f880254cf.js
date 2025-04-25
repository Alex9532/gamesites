"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [6124], {
    18967: (e, s, r) => {
      r.r(s), r.d(s, {
        default: () => _
      });
      var t = r(17402),
        n = r(65676),
        i = r(80243),
        o = r(34164),
        l = r(48554),
        a = r(42891),
        c = r(25362),
        u = r(45174),
        h = r(95901);
      const m = (0, i.Ay)({
          resolved: {},
          chunkName: () => "app-components-MobileNav-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!r.m[s]
          },
          importAsync: () => Promise.all([r.e(4810), r.e(2610), r.e(7994), r.e(7603), r.e(782), r.e(1711)]).then(r.bind(r, 932)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return r(s)
          },
          resolve() {
            return 932
          }
        }),
        d = (0, i.Ay)({
          resolved: {},
          chunkName: () => "app-components-PlayGameTile-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!r.m[s]
          },
          importAsync: () => Promise.all([r.e(4810), r.e(2385), r.e(4354)]).then(r.bind(r, 27579)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return r(s)
          },
          resolve() {
            return 27579
          }
        }),
        v = (0, i.Ay)({
          resolved: {},
          chunkName: () => "app-components-GamePlayer-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!r.m[s]
          },
          importAsync: () => Promise.all([r.e(4810), r.e(4834), r.e(1418), r.e(4047), r.e(3363), r.e(4916), r.e(6754), r.e(3787)]).then(r.bind(r, 33282)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return r(s)
          },
          resolve() {
            return 33282
          }
        }),
        p = 5e3;

      function _({
        className: e
      }) {
        const {
          isMobile: s
        } = (0, t.useContext)(c.F), r = (0, n.d4)(l.QX), i = (0, n.d4)(a.zS), [_, y] = (0, t.useState)(!1), [A, f] = (0, t.useState)(s && !r), [N, S] = (0, t.useState)(!s), C = (0, t.useRef)(null);
        (0, t.useEffect)((() => {
          i && setTimeout((() => {
            y(r)
          }), 0)
        }), [r]), (0, t.useEffect)((() => {
          if (s) return r ? (clearTimeout(C.current), f(!1), S(!0)) : (f(!0), C.current = setTimeout((() => {
            S(!1)
          }), p)), () => clearTimeout(C.current)
        }), [s, r]);
        const D = s && !A;
        return (0, h.FD)("div", {
          id: "game-container",
          className: (0, o.A)(u.gameContainer__wrapper, {
            [u.gameContainer__wrapper_fullscreen]: r
          }, {
            [u.gameContainer__wrapper_ipadFix]: _
          }, e),
          children: [A && (0, h.Y)(d, {}), N && (0, h.Y)(v, {
            className: (0, o.A)({
              [u.gameContainer__gamePlayer_hidden]: A
            })
          }), D && (0, h.Y)(m, {})]
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-contentTypes-GameContainer~33afed6a076f880254cf.js.map