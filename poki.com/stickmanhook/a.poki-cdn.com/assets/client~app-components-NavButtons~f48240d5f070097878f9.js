"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [5996], {
    55929: (t, e, n) => {
      n.r(e), n.d(e, {
        default: () => b
      });
      var s = n(65676),
        o = n(80243),
        a = n(34164),
        r = n(91833),
        l = n(17879),
        c = n(822),
        _ = n(89385),
        i = n(98708),
        u = n(88421),
        h = n(11436),
        d = n(46493),
        m = n(99668),
        v = n(95901);
      const A = (0, o.Ay)({
        resolved: {},
        chunkName: () => "app-components-NavButtonProfile-tsx",
        isReady(t) {
          const e = this.resolve(t);
          return !0 === this.resolved[e] && !!n.m[e]
        },
        importAsync: () => Promise.all([n.e(4810), n.e(2371), n.e(8704)]).then(n.bind(n, 73757)),
        requireAsync(t) {
          const e = this.resolve(t);
          return this.resolved[e] = !1, this.importAsync(t).then((t => (this.resolved[e] = !0, t)))
        },
        requireSync(t) {
          const e = this.resolve(t);
          return n(e)
        },
        resolve() {
          return 73757
        }
      });

      function b() {
        const t = (0, s.wA)(),
          e = (0, s.d4)(_.Jk),
          n = (0, s.d4)(h.Pn),
          o = (0, s.d4)(u.GO),
          b = (0, s.d4)(i.K);
        return (0, v.FD)("div", {
          className: m.navButtons,
          children: [!e && (0, v.Y)(l.default, {
            className: (0, a.A)(m.navButtons__btn, m.navButtons__btn_left),
            to: n,
            onClick: () => (0, d.F)({
              category: "home",
              action: "click"
            }),
            title: b.home_icon_alt_text,
            ariaLabel: b.home_icon_alt_text,
            children: (0, v.Y)(r.default, {
              name: "home",
              className: m.navButtons__homeSVGIcon
            })
          }), e && (0, v.Y)(A, {
            className: m.navButtons__btn
          }), (0, v.FD)("button", {
            onClick: () => {
              t(o ? (0, c.QL)() : (0, c.rf)())
            },
            type: "button",
            className: (0, a.A)("buttonReset", m.navButtons__btn, m.navButtons__btn_right),
            title: b.search_short,
            "aria-label": b.search_short,
            children: [b.search, (0, v.Y)(r.default, {
              name: "search",
              className: m.navButtons__lookingGlassSVGIcon
            })]
          })]
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-NavButtons~f48240d5f070097878f9.js.map