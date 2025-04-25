"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9008], {
    44237: (e, l, a) => {
      a.r(l), a.d(l, {
        default: () => i
      });
      var t = a(34164),
        r = a(91833),
        s = a(71618),
        n = a(95901);
      const _ = ({
        label: e
      }) => {
        if (!e) return !1;
        switch (e) {
          case "new":
            return "fire";
          case "restart":
            return "restart"
        }
        return !1
      };

      function i({
        label: e
      }) {
        const l = _({
          label: e
        });
        return l ? (0, n.Y)("div", {
          className: (0, t.A)("tile-label", s.tileLabel),
          children: (0, n.Y)("div", {
            className: s.tileLabel__container,
            children: (0, n.Y)(r.default, {
              className: s.tileLabel__icon,
              name: l
            })
          })
        }) : null
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-TileLabel~514a44a39c742fcdc638.js.map