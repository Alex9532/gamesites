"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9535], {
    67254: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => v
      });
      var o = n(17402),
        i = n(65676),
        s = n(80625),
        r = n(80243),
        u = n(86494),
        c = n(74275),
        d = n(98708),
        l = n(4834),
        a = n(53569),
        h = n(95901);
      const _ = (0, r.Ay)({
        resolved: {},
        chunkName: () => "app-components-GameBarButton-tsx",
        isReady(e) {
          const t = this.resolve(e);
          return !0 === this.resolved[t] && !!n.m[t]
        },
        importAsync: () => Promise.all([n.e(574), n.e(9935)]).then(n.bind(n, 41266)),
        requireAsync(e) {
          const t = this.resolve(e);
          return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
        },
        requireSync(e) {
          const t = this.resolve(e);
          return n(t)
        },
        resolve() {
          return 41266
        }
      });

      function v({
        gameId: e,
        rating: t
      }) {
        const r = (0, i.wA)(),
          v = (0, i.d4)(c.BK),
          m = (0, i.d4)(d.K),
          p = (0, i.d4)((t => (0, c.p5)(t, e))),
          [A, D] = (0, o.useState)(0),
          [f, g] = (0, o.useState)(!1),
          [w, x] = (0, o.useState)(!1);
        if (null == t || !t.rating) return null;
        (0, o.useEffect)((() => {
          0 === p ? (g(!1), x(!1)) : 1 === p ? (g(!0), x(!1)) : (g(!1), x(!0))
        }), [p]);
        const y = async (t, o) => {
          if (!v) {
            r((0, u.fU)());
            const e = await Promise.all([n.e(882), n.e(3349), n.e(4810), n.e(2964), n.e(7825), n.e(6833), n.e(6550)]).then(n.bind(n, 26550));
            a.Y.next((0, s.E)(...Object.values(e)))
          }(0, l.r)(), Date.now() < A || (p === t && (t = 0), r((0, u.Vy)({
            gameId: e,
            direction: t,
            source: o
          })), D(Date.now() + 500))
        }, b = e => e ? e > 1e6 ? `${(e/1e6).toFixed(1)}M` : e > 1e3 ? `${(e/1e3).toFixed(1)}K` : e.toString() : "0", S = t.up_count ? b(t.up_count + (f ? 1 : 0)) : "", E = t.down_count ? b(t.down_count + (w ? 1 : 0)) : "";
        return (0, h.FD)(h.FK, {
          children: [(0, h.Y)(_, {
            id: "vote-up",
            iconName: "thumbsUp",
            text: S,
            hoverText: f ? m.remove_vote : m.i_like_it,
            onClick: () => y(1, "thumbsUp"),
            isHighlighted: f
          }), (0, h.Y)(_, {
            id: "vote-down",
            iconName: "thumbsUp",
            text: E,
            hoverText: w ? m.remove_vote : m.i_dont_like_it,
            onClick: () => y(-1, "thumbsDown"),
            isHighlighted: w,
            inverted: !0
          })]
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-Voting~d33a60f91a9dfc07d509.js.map