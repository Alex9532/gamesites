"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [7700], {
    57700: (e, t, p) => {
      p.r(t), p.d(t, {
        adRefreshExecution: () => b,
        adRefreshLogic: () => C,
        disableMobileAdsOpportunityEpic: () => N,
        hideAdsStatusEpic: () => z,
        receiveSDKEvent: () => H,
        setAdTimingsEpic: () => X,
        setMobileAdsOpportunityEpic: () => K,
        startImmersiveTakeoverEpic: () => j,
        stopAdRefreshingForCustomCampaigns: () => R,
        stopImmersiveTakeoverEpic: () => Q
      });
      var r = p(29079),
        i = p(16126),
        n = p(28452),
        s = p(62467),
        a = p(44240),
        o = p(59099),
        u = p(81160),
        c = p(67791),
        l = p(96083),
        v = p(63720),
        y = p(93272),
        d = p(8767),
        g = p(76981),
        f = p(38975),
        T = p(77655),
        w = p(61701),
        h = p(43346),
        m = p(48554),
        A = p(23260),
        D = p(71219),
        _ = p(98417),
        E = p(90385),
        O = p(46493),
        Z = p(13150),
        k = p(42891),
        M = p(4834);
      const F = 6e4,
        I = 2e4,
        L = 5e3;
      let S = Date.now();

      function b(e, t) {
        return e.pipe((0, r.g)(h.sF.type), (0, i.p)((() => !(0, m.QX)(t.value))), (0, n.Z)((({
          refreshType: e
        }) => {
          const p = (0, _.d)(t.value).map((({
            code: t
          }) => (0, h.XZ)({
            code: t,
            refreshType: e
          })));
          return (0, s.of)(...p)
        })))
      }

      function C(e, t) {
        const p = e.pipe((0, r.g)("@@router/LOCATION_CHANGE", h.jO.type, h.wt.type)),
          n = e.pipe((0, r.g)(m.gO.type), (0, i.p)((({
            payload: e
          }) => !e.toggle))),
          s = e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
            event: e
          }) => [Z.sf].includes(e)))),
          d = (0, a.h)(n, s).pipe((0, o.M)((() => {
            S = Date.now()
          })), (0, u.T)((() => (0, h.sF)({
            trigger: "interaction",
            refreshType: "direct"
          }))), (0, c.Q)(p)),
          g = [Z.zY, Z.yk, Z.yS],
          f = e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
            event: e
          }) => g.includes(e))), (0, i.p)((() => Date.now() - S >= I)), (0, o.M)((() => {
            S = Date.now()
          })), (0, u.T)((() => (0, h.sF)({
            trigger: "smart",
            refreshType: "smart"
          }))), (0, c.Q)(p)),
          T = (0, l.Y)(F).pipe((0, u.T)((() => (0, h.sF)({
            trigger: "dumb",
            refreshType: "dumb"
          }))), (0, c.Q)(p));
        return e.pipe((0, r.g)(k.Xy.type, A.y.type, h.jp.type), (0, i.p)((() => "game" === (0, E.K5)(t.value))), (0, i.p)((() => !(0, k.H6)(t.value))), (0, o.M)((() => {
          S = Date.now()
        })), (0, v.n)((() => (0, a.h)((0, y.T)((() => {
          var e;
          return null === (e = (0, E.Vv)(t.value)) || void 0 === e ? void 0 : e.allow_smart_refresh
        }), f, T), d))))
      }

      function H(e) {
        return e.pipe((0, r.g)(m.yq.type), (0, o.M)((e => {
          (0, O.F)({
            category: "sdk",
            action: "details",
            data: e
          })
        })), (0, d.w)())
      }

      function j(e, t) {
        return e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
          event: e
        }) => e === Z.e0)), (0, u.T)((({
          data: e
        }) => {
          const p = (0, E.Sk)(t.value) || {},
            r = [...(null == e ? void 0 : e.IMAWrapperIDs) || [], (null == e ? void 0 : e.creativeId) || 0];
          for (let e = 0; e < r.length; e++)
            if (p[r[e]]) return {
              takeover: {
                creativeId: r[e],
                config: p[r[e]]
              }
            };
          return {
            takeover: !1
          }
        })), (0, i.p)((({
          takeover: e
        }) => !!e)), (0, u.T)((e => (0, h.jO)(e))))
      }

      function Q(e, t) {
        const p = e.pipe((0, r.g)(h.sF.type)),
          n = e.pipe((0, r.g)(A.y.type)),
          s = e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
            event: e
          }) => e === Z.sf))),
          o = s.pipe((0, g.c)(L), (0, f.s)(1), (0, v.n)((() => p)), (0, c.Q)(n)),
          l = (0, D.$i)(t.value);
        return (0, a.h)(n.pipe((0, i.p)((() => !!(0, D.iM)(t.value))), (0, u.T)((() => (0, h.jp)()))), n.pipe((0, i.p)((() => l && l.immersiveTakeover)), (0, u.T)((() => (0, h.i$)()))), s.pipe((0, v.n)((() => p.pipe((0, T.i)(1), (0, u.T)((() => (0, h.jp)())))))), o.pipe((0, u.T)((() => (0, h.i$)()))))
      }

      function X(e) {
        return e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
          event: e
        }) => [Z.Zs, Z.XD, Z.e0, Z.sf, Z.yk, Z.yS].includes(e))), (0, u.T)((e => {
          const {
            data: t,
            event: p
          } = e;
          switch (p) {
            case Z.XD:
            case Z.sf:
            case Z.e0:
              return (0, m.cD)({
                event: p
              });
            case Z.Zs:
              return (0, m.qA)({
                duration: t.duration,
                currentTime: t.currentTime
              });
            case Z.yk:
            case Z.yS:
              return (0, m.vA)()
          }
        })))
      }

      function z(e) {
        return e.pipe((0, r.g)(m.wZ.type, A.y.type), (0, i.p)((({
          event: e,
          type: t
        }) => [Z.sf, Z.AY, Z.Zt].includes(e) || t === A.y.type)), (0, o.M)((() => {
          (0, M.r)()
        })), (0, u.T)((() => (0, m.m$)())))
      }

      function K(e, t) {
        return (0, k.H6)(t.value) ? e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
          event: e
        }) => [Z.Pz, Z.zY, Z.e0, Z.sf].includes(e))), (0, u.T)((({
          event: e
        }) => (0, h.eb)({
          allowed: [Z.Pz, Z.sf].includes(e)
        })))) : w.w
      }

      function N(e, t) {
        return (0, k.H6)(t.value) ? e.pipe((0, r.g)(A.y.type, m.gO.type), (0, i.p)((e => {
          var t;
          return e.type === m.gO.type && !0 === (null == e || null === (t = e.payload) || void 0 === t ? void 0 : t.toggle)
        })), (0, u.T)((() => (0, h.eb)({
          allowed: !1
        })))) : w.w
      }

      function R(e) {
        return e.pipe((0, r.g)(m.wZ.type), (0, i.p)((({
          event: e
        }) => [Z.oM].includes(e))), (0, i.p)((({
          data: e
        }) => ["stopRefreshingForThisPage"].includes(e.dfpCreativeId))), (0, o.M)((() => {
          console.warn("force stopping refreshing, will activate next pageview")
        })), (0, u.T)((() => (0, h.wt)())))
      }
    }
  }
]);
//# sourceMappingURL=client~7700~3d56862639aeed1fb8b6.js.map