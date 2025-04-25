"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3427], {
    35530: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => v
      });
      var n = r(17402),
        s = r(68154),
        o = r(65676),
        i = r(80243),
        d = r(23260),
        c = r(61481),
        l = r(11436),
        a = r(91323),
        h = r(42891),
        u = r(98708),
        m = r(53210),
        _ = r(95901);
      const p = (0, i.Ay)({
          resolved: {},
          chunkName: () => "app-components-contentTypes-ErrorLoader-tsx",
          isReady(e) {
            const t = this.resolve(e);
            return !0 === this.resolved[t] && !!r.m[t]
          },
          importAsync: () => Promise.all([r.e(9339), r.e(680)]).then(r.bind(r, 22115)),
          requireAsync(e) {
            const t = this.resolve(e);
            return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
          },
          requireSync(e) {
            const t = this.resolve(e);
            return r(t)
          },
          resolve() {
            return 22115
          }
        }),
        f = (e = []) => {
          try {
            return e[Math.floor(Math.random() * e.length)]
          } catch {
            return
          }
        };

      function v() {
        const e = (0, o.wA)(),
          t = (0, o.d4)(a.Gd),
          r = (0, o.d4)(h.xp),
          i = (0, o.d4)(h.wu),
          v = (0, o.d4)(m.p),
          A = (0, o.d4)(u.K),
          y = (0, o.d4)(l.k4),
          D = (0, o.d4)(h.zO),
          {
            data: L,
            isLoading: E
          } = (0, c.mk)({
            site: t,
            device: r,
            geo: i,
            experiment: v,
            trafficSource: D
          });
        (0, n.useEffect)((() => {
          e((0, d.m)({
            path: y
          }))
        }), []);
        const {
          games: g
        } = L || {}, O = (0, n.useMemo)((() => f(g)), [L]);
        return E || g ? (0, _.FD)(_.FK, {
          children: [(0, _.FD)(s.m, {
            children: [(0, _.Y)("title", {
              children: A.not_found_title
            }), (0, _.Y)("meta", {
              name: "description",
              content: A.not_found_description
            })]
          }), O && (0, _.Y)(p, {
            game: O
          })]
        }) : (0, _.Y)("p", {
          children: "Server error 💥"
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-PageError~e9d15ca83f4a15db3c5c.js.map