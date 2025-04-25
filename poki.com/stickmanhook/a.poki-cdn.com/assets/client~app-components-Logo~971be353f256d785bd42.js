"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7603], {
    58686: (t, a, e) => {
      e.r(a), e.d(a, {
        default: () => f
      });
      var l = e(65676),
        i = e(34164),
        o = e(91833),
        n = e(17879),
        s = e(90385),
        c = e(46493),
        r = e(649),
        d = e(97454),
        _ = e(95901);
      const f = function({
        className: t,
        external: a = !1,
        favicon: e = !1,
        to: f,
        title: h,
        ariaLabel: u = "Poki"
      }) {
        const L = (0, l.d4)(s.K5),
          g = (0, l.d4)(d.Lb),
          A = () => {
            (0, c.F)({
              category: "logo",
              action: "click",
              label: L,
              data: {
                path: f
              },
              options: {
                interaction: !0
              }
            })
          };
        let k = e ? (0, _.Y)(o.default, {
          name: "fav",
          height: "36",
          width: "36"
        }) : (0, _.Y)(o.default, {
          name: "poki",
          width: "100%",
          height: "100%"
        });
        if (g) {
          const t = g.url;
          k = (0, _.Y)("img", {
            src: t,
            alt: "Poki",
            style: g.style
          })
        }
        const m = (0, i.A)(r.logo, t);
        return f ? (0, _.Y)(n.default, {
          className: m,
          to: f,
          target: a ? "_blank" : void 0,
          title: h,
          onClick: A,
          ariaLabel: u,
          children: k
        }) : (0, _.Y)("span", {
          className: m,
          children: k
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-Logo~971be353f256d785bd42.js.map