"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2440], {
    42440: (i, e, t) => {
      t.r(e), t.d(e, {
        initiatePrivacyCenterNotificationEpic: () => h,
        isFamilyFriendlyAdsNotificationEpic: () => _
      });
      var n = t(61701),
        o = t(81160),
        a = t(38975),
        r = t(59099),
        c = t(8767),
        l = t(29079),
        d = t(42891),
        u = t(88800),
        s = t(7696),
        v = t(98708),
        f = t(91323),
        p = t(15049),
        w = t(72925),
        y = t(40890),
        C = t(90385);

      function h(i, e) {
        if ("undefined" == typeof window) return n.w;
        const t = (0, d.wu)(e.value),
          a = (0, C.K5)(e.value);
        if ("CA" !== t || "privacy" === a) return n.w;
        if ((0, p.U4)(e.value)) return n.w;
        const r = "privacyCanadaNotification";
        return i.pipe((0, l.g)(d.Xy.type), (0, o.T)((() => (0, u.Gg)({
          notification: {
            id: r,
            title: "Choose your cookies in the Privacy Center",
            titleIcon: {
              svgName: "lock",
              width: 36,
              height: 36
            },
            childComponent: {
              name: "privacyCenter/PrivacyCenterCanadaNotification"
            },
            muteAfterClose: !0,
            actions: [{
              title: "To Privacy Center",
              onClick: () => {
                const i = (0, f.Gd)(e.value),
                  t = (0, y.AO)(i, "privacy", "");
                (0, w.A)().push(t), window.store.dispatch((0, u.oe)({
                  id: r
                }))
              }
            }]
          }
        }))))
      }

      function _(i, e) {
        if ("undefined" == typeof window) return n.w;
        if (!(0, p.lb)(e.value)) return n.w;
        if ((0, p.GZ)(e.value)) return n.w;
        const t = (0, v.K)(e.value);
        return i.pipe((0, l.g)(d.Xy.type), (0, a.s)(1), (0, r.M)((() => {
          var i;
          null === (i = window) || void 0 === i || null === (i = i.store) || void 0 === i || i.dispatch((0, u.Gg)({
            notification: {
              title: t.family_mode_title,
              titleIcon: {
                svgName: "lock",
                width: 36,
                height: 36
              },
              childComponent: {
                name: "FamilyModeCookieNotification"
              },
              autoExpire: 1e4,
              onExplicitClose: () => {
                var i;
                null === (i = window) || void 0 === i || null === (i = i.store) || void 0 === i || i.dispatch((0, s.Se)({
                  consent: !0
                }))
              }
            }
          }))
        })), (0, c.w)())
      }
    }
  }
]);
//# sourceMappingURL=client~2440~629dcd0cacea1629a93b.js.map