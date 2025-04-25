"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2478], {
    58277: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => d
      });
      var n = s(65676),
        r = s(80243),
        i = s(48554),
        o = s(98708),
        l = s(42891),
        c = s(46493),
        u = s(95901);
      const a = (0, r.Ay)({
        resolved: {},
        chunkName: () => "app-components-GameBarButton-tsx",
        isReady(e) {
          const t = this.resolve(e);
          return !0 === this.resolved[t] && !!s.m[t]
        },
        importAsync: () => Promise.all([s.e(574), s.e(9935)]).then(s.bind(s, 41266)),
        requireAsync(e) {
          const t = this.resolve(e);
          return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
        },
        requireSync(e) {
          const t = this.resolve(e);
          return s(t)
        },
        resolve() {
          return 41266
        }
      });

      function d() {
        const e = (0, n.wA)(),
          t = (0, n.d4)(o.K),
          s = (0, n.d4)(i.QX),
          r = !(0, n.d4)(l.zS);
        return (0, u.Y)(a, {
          id: "fullscreen-button",
          iconName: s ? "closeFullscreen" : "enterFullscreen",
          preventFocus: r,
          isHighlighted: s,
          onClick: () => {
            (0, c.F)({
              category: "fullscreenButton",
              action: "click",
              data: {
                targetState: s ? "default" : "full"
              },
              options: {
                interaction: !0
              }
            }), e((0, i.lh)({
              toggle: !s
            }))
          },
          text: s ? t.minimize : "",
          hoverText: s ? t.minimize : t.fullscreen
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-svg-FullscreenButton~fbc393a01b4af85f57ed.js.map