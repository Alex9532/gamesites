"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3045], {
    93045: (t, a, e) => {
      e.d(a, {
        a1: () => b
      });
      const o = "@@router/CALL_HISTORY_METHOD",
        c = "@@router/LOCATION_CHANGE",
        s = (t, a) => ({
          type: c,
          payload: {
            location: t,
            action: a
          }
        });

      function r(t) {
        return (...a) => ({
          type: o,
          payload: {
            method: t,
            args: a
          }
        })
      }
      const n = r("push"),
        i = r("replace"),
        h = r("go"),
        l = r("goBack"),
        p = r("goForward"),
        u = r("back"),
        d = r("forward");

      function g(t, a) {
        return "string" != typeof t || t.startsWith(a) ? "object" == typeof t && t.pathname && !t.pathname.startsWith(a) ? Object.assign(Object.assign({}, t), {
          pathname: a + t.pathname
        }) : t : a + t
      }
      const b = ({
        history: t,
        routerReducerKey: a = "router",
        reduxTravelling: e = !1,
        showHistoryAction: r = !1,
        selectRouterState: b,
        savePreviousLocations: f = 0,
        batch: y,
        reachGlobalHistory: k,
        basename: m
      }) => {
        let w = !1;
        const L = (t, a, e) => w ? t({
          location: a,
          action: e
        }) : t(a, e);
        "function" != typeof y && (y = t => {
          t()
        }), "function" != typeof b && (b = t => t[a]);
        const O = (({
            savePreviousLocations: t = 0,
            basename: a
          }) => {
            const e = {
                location: null,
                action: null,
                basename: a
              },
              o = isNaN(t) ? 0 : t;
            return o && (e.previousLocations = []), (t = e, {
              type: a,
              payload: s
            } = {}) => {
              if (a === c) {
                const {
                  location: a,
                  action: e
                } = s || {}, c = o ? [{
                  location: a,
                  action: e
                }, ...t.previousLocations.slice(0, o)] : void 0;
                return Object.assign(Object.assign({}, t), {
                  location: a,
                  action: e,
                  previousLocations: c
                })
              }
              return t
            }
          })({
            savePreviousLocations: f,
            basename: m
          }),
          _ = (({
            history: t,
            showHistoryAction: a,
            basename: e
          }) => () => c => s => {
            if (s.type !== o) return c(s);
            const r = s.payload.method,
              n = s.payload.args;
            switch (r) {
              case "push": {
                let a = n;
                e && n.length > 0 && (a = [g(n[0], e), ...n.slice(1)]), t.push(...a);
                break
              }
              case "replace": {
                let a = n;
                e && n.length > 0 && (a = [g(n[0], e), ...n.slice(1)]), t.replace(...a);
                break
              }
              case "go":
                t.go(...n);
                break;
              case "back":
              case "goBack":
                t.goBack && t.goBack(...n), t.back && t.back(...n);
                break;
              case "forward":
              case "goForward":
                t.goForward && t.goForward(...n), t.forward && t.forward(...n)
            }
            return a ? c(s) : void 0
          })({
            history: t,
            showHistoryAction: r,
            basename: m
          });
        let v = !1;
        return {
          routerReducer: O,
          routerMiddleware: _,
          createReduxHistory: a => {
            let o = [];
            return a.dispatch(s(t.location, t.action)), e && (a => {
              a.subscribe((() => {
                const e = b(a.getState()).location,
                  o = t.location;
                var c, s;
                e && o && (s = o, (c = e).pathname !== s.pathname || c.search !== s.search || c.hash !== s.hash) && (v = !0, t.push({
                  pathname: e.pathname,
                  search: e.search,
                  hash: e.hash
                }))
              }))
            })(a), t.listen(((t, e) => {
              if (t.location && (e = t.action, t = t.location, w = !0), v) {
                v = !1;
                const t = b(a.getState());
                o.forEach((a => L(a, t.location, t.action)))
              } else y((() => {
                a.dispatch(s(t, e));
                const c = b(a.getState());
                o.forEach((t => L(t, c.location, c.action)))
              }))
            })), k && k.listen((({
              location: t,
              action: e
            }) => {
              if ("POP" !== e) {
                const c = {
                  pathname: t.pathname,
                  search: t.search,
                  hash: t.hash,
                  key: t.key,
                  state: t.state
                };
                y((() => {
                  a.dispatch(s(c, e));
                  const t = b(a.getState());
                  o.forEach((a => L(a, t.location, t.action)))
                }))
              }
            })), {
              block: t.block,
              createHref: t.createHref,
              push: (...t) => a.dispatch(n(...t)),
              replace: (...t) => a.dispatch(i(...t)),
              go: (...t) => a.dispatch(h(...t)),
              goBack: (...t) => a.dispatch(l(...t)),
              goForward: (...t) => a.dispatch(p(...t)),
              back: (...t) => a.dispatch(u(...t)),
              forward: (...t) => a.dispatch(d(...t)),
              listen: t => (o.indexOf(t) < 0 && o.push(t), () => {
                o = o.filter((a => a !== t))
              }),
              get location() {
                return b(a.getState()).location
              },
              get action() {
                return b(a.getState()).action
              },
              get length() {
                return t.length
              },
              get listenObject() {
                return w
              }
            }
          }
        }
      }
    }
  }
]);
//# sourceMappingURL=client~3045~bb6ff5894a3327fabd7f.js.map