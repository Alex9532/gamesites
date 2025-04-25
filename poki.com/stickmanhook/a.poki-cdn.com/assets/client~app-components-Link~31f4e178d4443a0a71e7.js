"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2610], {
    17879: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => s
      });
      r(17402);
      var l = r(40890),
        a = r(72925),
        n = r(95901);

      function s({
        className: e,
        children: t,
        to: r,
        onClick: s,
        target: _,
        title: i,
        rel: f,
        style: o,
        refForwarded: u,
        ariaLabel: c
      }) {
        return "_blank" === _ && (f = f ? `noopener ${f}` : "noopener"), (0, n.Y)("a", {
          className: e,
          href: r,
          onClick: e => {
            s && s(e), !(0, l.xs)(r) || e.defaultPrevented || 0 !== e.button || _ || function(e) {
              return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
            }(e) || (e.preventDefault(), (0, a.A)().push(r))
          },
          rel: f,
          target: _,
          title: i,
          style: o,
          ref: u,
          "aria-label": c,
          children: t
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-Link~31f4e178d4443a0a71e7.js.map