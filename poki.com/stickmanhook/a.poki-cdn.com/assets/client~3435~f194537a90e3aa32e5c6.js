"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [3435], {
    75816: (e, t, n) => {
      n.d(t, {
        xP: () => k
      });
      var r = n(10378),
        s = n(65676),
        i = n(8120),
        u = n(17880),
        o = n(20038),
        c = n(17402);

      function a(e, ...t) {
        return Object.assign(e, ...t)
      }

      function d(e) {
        return e.replace(e[0], e[0].toUpperCase())
      }
      var f = WeakMap ? new WeakMap : void 0,
        l = ({
          endpointName: e,
          queryArgs: t
        }) => {
          let n = "";
          const r = f?.get(t);
          if ("string" == typeof r) n = r;
          else {
            const e = JSON.stringify(t, ((e, t) => (t = "bigint" == typeof t ? {
              $bigint: t.toString()
            } : t, t = (0, u.Qd)(t) ? Object.keys(t).sort().reduce(((e, n) => (e[n] = t[n], e)), {}) : t)));
            (0, u.Qd)(t) && f?.set(t, e), n = e
          }
          return `${e}(${n})`
        },
        p = Symbol();

      function y(e, t, n, r) {
        const s = (0, c.useMemo)((() => ({
            queryArgs: e,
            serialized: "object" == typeof e ? t({
              queryArgs: e,
              endpointDefinition: n,
              endpointName: r
            }) : e
          })), [e, t, n, r]),
          i = (0, c.useRef)(s);
        return (0, c.useEffect)((() => {
          i.current.serialized !== s.serialized && (i.current = s)
        }), [s]), i.current.serialized === s.serialized ? i.current.queryArgs : e
      }

      function b(e) {
        const t = (0, c.useRef)(e);
        return (0, c.useEffect)((() => {
          (0, s.bN)(t.current, e) || (t.current = e)
        }), [e]), (0, s.bN)(t.current, e) ? t.current : e
      }
      var g = (() => !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement))(),
        h = (() => "undefined" != typeof navigator && "ReactNative" === navigator.product)(),
        m = (() => g || h ? c.useLayoutEffect : c.useEffect)(),
        S = e => e.isUninitialized ? {
          ...e,
          isUninitialized: !1,
          isFetching: !0,
          isLoading: void 0 === e.data,
          status: r.RE.pending
        } : e;
      var v = Symbol();
      var k = (0, r.l0)((0, r.m7)(), (({
        batch: e = s.vA,
        hooks: t = {
          useDispatch: s.wA,
          useSelector: s.d4,
          useStore: s.Pj
        },
        createSelector: n = i.Mz,
        unstable__sideEffectsInRender: u = !1,
        ...f
      } = {}) => ({
        name: v,
        init(i, {
          serializeQueryArgs: f
        }, g) {
          const h = i,
            {
              buildQueryHooks: v,
              buildMutationHook: k,
              usePrefetch: O
            } = function({
              api: e,
              moduleOptions: {
                batch: t,
                hooks: {
                  useDispatch: n,
                  useSelector: i,
                  useStore: u
                },
                unstable__sideEffectsInRender: a,
                createSelector: d
              },
              serializeQueryArgs: f,
              context: g
            }) {
              const h = a ? e => e() : c.useEffect;
              return {
                buildQueryHooks: function(a) {
                  const k = (t, {
                      refetchOnReconnect: s,
                      refetchOnFocus: i,
                      refetchOnMountOrArgChange: u,
                      skip: d = !1,
                      pollingInterval: f = 0,
                      skipPollingIfUnfocused: p = !1
                    } = {}) => {
                      const {
                        initiate: m
                      } = e.endpoints[a], S = n(), v = (0, c.useRef)(void 0);
                      if (!v.current) {
                        const t = S(e.internalActions.internal_getRTKQSubscriptions());
                        v.current = t
                      }
                      const k = y(d ? r.hT : t, l, g.endpointDefinitions[a], a),
                        O = b({
                          refetchOnReconnect: s,
                          refetchOnFocus: i,
                          pollingInterval: f,
                          skipPollingIfUnfocused: p
                        }),
                        E = (0, c.useRef)(!1),
                        Q = (0, c.useRef)(void 0);
                      let {
                        queryCacheKey: R,
                        requestId: A
                      } = Q.current || {}, L = !1;
                      R && A && (L = v.current.isRequestSubscribed(R, A));
                      const M = !L && E.current;
                      return h((() => {
                        E.current = L
                      })), h((() => {
                        M && (Q.current = void 0)
                      }), [M]), h((() => {
                        const e = Q.current;
                        if (k === r.hT) return e?.unsubscribe(), void(Q.current = void 0);
                        const t = Q.current?.subscriptionOptions;
                        if (e && e.arg === k) O !== t && e.updateSubscriptionOptions(O);
                        else {
                          e?.unsubscribe();
                          const t = S(m(k, {
                            subscriptionOptions: O,
                            forceRefetch: u
                          }));
                          Q.current = t
                        }
                      }), [S, m, u, k, O, M]), (0, c.useEffect)((() => () => {
                        Q.current?.unsubscribe(), Q.current = void 0
                      }), []), (0, c.useMemo)((() => ({
                        refetch: () => {
                          if (!Q.current) throw new Error((0, o.gk)(38));
                          return Q.current?.refetch()
                        }
                      })), [])
                    },
                    O = ({
                      refetchOnReconnect: r,
                      refetchOnFocus: s,
                      pollingInterval: i = 0,
                      skipPollingIfUnfocused: u = !1
                    } = {}) => {
                      const {
                        initiate: o
                      } = e.endpoints[a], d = n(), [f, l] = (0, c.useState)(p), y = (0, c.useRef)(void 0), g = b({
                        refetchOnReconnect: r,
                        refetchOnFocus: s,
                        pollingInterval: i,
                        skipPollingIfUnfocused: u
                      });
                      h((() => {
                        const e = y.current?.subscriptionOptions;
                        g !== e && y.current?.updateSubscriptionOptions(g)
                      }), [g]);
                      const m = (0, c.useRef)(g);
                      h((() => {
                        m.current = g
                      }), [g]);
                      const S = (0, c.useCallback)((function(e, n = !1) {
                        let r;
                        return t((() => {
                          y.current?.unsubscribe(), y.current = r = d(o(e, {
                            subscriptionOptions: m.current,
                            forceRefetch: !n
                          })), l(e)
                        })), r
                      }), [d, o]);
                      return (0, c.useEffect)((() => () => {
                        y?.current?.unsubscribe()
                      }), []), (0, c.useEffect)((() => {
                        f === p || y.current || S(f, !0)
                      }), [f, S]), (0, c.useMemo)((() => [S, f]), [S, f])
                    },
                    E = (t, {
                      skip: n = !1,
                      selectFromResult: o
                    } = {}) => {
                      const {
                        select: l
                      } = e.endpoints[a], p = y(n ? r.hT : t, f, g.endpointDefinitions[a], a), b = (0, c.useRef)(void 0), h = (0, c.useMemo)((() => d([l(p), (e, t) => t, e => p], v, {
                        memoizeOptions: {
                          resultEqualityCheck: s.bN
                        }
                      })), [l, p]), S = (0, c.useMemo)((() => o ? d([h], o, {
                        devModeChecks: {
                          identityFunctionCheck: "never"
                        }
                      }) : h), [h, o]), k = i((e => S(e, b.current)), s.bN), O = u(), E = h(O.getState(), b.current);
                      return m((() => {
                        b.current = E
                      }), [E]), k
                    };
                  return {
                    useQueryState: E,
                    useQuerySubscription: k,
                    useLazyQuerySubscription: O,
                    useLazyQuery(e) {
                      const [t, n] = O(e), r = E(n, {
                        ...e,
                        skip: n === p
                      }), s = (0, c.useMemo)((() => ({
                        lastArg: n
                      })), [n]);
                      return (0, c.useMemo)((() => [t, r, s]), [t, r, s])
                    },
                    useQuery(e, t) {
                      const n = k(e, t),
                        s = E(e, {
                          selectFromResult: e === r.hT || t?.skip ? void 0 : S,
                          ...t
                        }),
                        {
                          data: i,
                          status: u,
                          isLoading: o,
                          isSuccess: a,
                          isError: d,
                          error: f
                        } = s;
                      return (0, c.useDebugValue)({
                        data: i,
                        status: u,
                        isLoading: o,
                        isSuccess: a,
                        isError: d,
                        error: f
                      }), (0, c.useMemo)((() => ({
                        ...s,
                        ...n
                      })), [s, n])
                    }
                  }
                },
                buildMutationHook: function(r) {
                  return ({
                    selectFromResult: u,
                    fixedCacheKey: o
                  } = {}) => {
                    const {
                      select: a,
                      initiate: f
                    } = e.endpoints[r], l = n(), [p, y] = (0, c.useState)();
                    (0, c.useEffect)((() => () => {
                      p?.arg.fixedCacheKey || p?.reset()
                    }), [p]);
                    const b = (0, c.useCallback)((function(e) {
                        const t = l(f(e, {
                          fixedCacheKey: o
                        }));
                        return y(t), t
                      }), [l, f, o]),
                      {
                        requestId: g
                      } = p || {},
                      h = (0, c.useMemo)((() => a({
                        fixedCacheKey: o,
                        requestId: p?.requestId
                      })), [o, p, a]),
                      m = (0, c.useMemo)((() => u ? d([h], u) : h), [u, h]),
                      S = i(m, s.bN),
                      v = null == o ? p?.arg.originalArgs : void 0,
                      k = (0, c.useCallback)((() => {
                        t((() => {
                          p && y(void 0), o && l(e.internalActions.removeMutationResult({
                            requestId: g,
                            fixedCacheKey: o
                          }))
                        }))
                      }), [l, o, p, g]),
                      {
                        endpointName: O,
                        data: E,
                        status: Q,
                        isLoading: R,
                        isSuccess: A,
                        isError: L,
                        error: M
                      } = S;
                    (0, c.useDebugValue)({
                      endpointName: O,
                      data: E,
                      status: Q,
                      isLoading: R,
                      isSuccess: A,
                      isError: L,
                      error: M
                    });
                    const z = (0, c.useMemo)((() => ({
                      ...S,
                      originalArgs: v,
                      reset: k
                    })), [S, v, k]);
                    return (0, c.useMemo)((() => [b, z]), [b, z])
                  }
                },
                usePrefetch: function(t, r) {
                  const s = n(),
                    i = b(r);
                  return (0, c.useCallback)(((n, r) => s(e.util.prefetch(t, n, {
                    ...i,
                    ...r
                  }))), [t, s, i])
                }
              };

              function v(e, t, n) {
                if (t?.endpointName && e.isUninitialized) {
                  const {
                    endpointName: e
                  } = t, r = g.endpointDefinitions[e];
                  f({
                    queryArgs: t.originalArgs,
                    endpointDefinition: r,
                    endpointName: e
                  }) === f({
                    queryArgs: n,
                    endpointDefinition: r,
                    endpointName: e
                  }) && (t = void 0)
                }
                let r = e.isSuccess ? e.data : t?.data;
                void 0 === r && (r = e.data);
                const s = void 0 !== r,
                  i = e.isLoading,
                  u = (!t || t.isLoading || t.isUninitialized) && !s && i,
                  o = e.isSuccess || i && s;
                return {
                  ...e,
                  data: r,
                  currentData: e.data,
                  isFetching: i,
                  isLoading: u,
                  isSuccess: o
                }
              }
            }({
              api: i,
              moduleOptions: {
                batch: e,
                hooks: t,
                unstable__sideEffectsInRender: u,
                createSelector: n
              },
              serializeQueryArgs: f,
              context: g
            });
          return a(h, {
            usePrefetch: O
          }), a(g, {
            batch: e
          }), {
            injectEndpoint(e, t) {
              if ("query" === t.type) {
                const {
                  useQuery: t,
                  useLazyQuery: n,
                  useLazyQuerySubscription: r,
                  useQueryState: s,
                  useQuerySubscription: u
                } = v(e);
                a(h.endpoints[e], {
                  useQuery: t,
                  useLazyQuery: n,
                  useLazyQuerySubscription: r,
                  useQueryState: s,
                  useQuerySubscription: u
                }), i[`use${d(e)}Query`] = t, i[`useLazy${d(e)}Query`] = n
              } else if (function(e) {
                  return "mutation" === e.type
                }(t)) {
                const t = k(e);
                a(h.endpoints[e], {
                  useMutation: t
                }), i[`use${d(e)}Mutation`] = t
              }
            }
          }
        }
      }))())
    }
  }
]);
//# sourceMappingURL=client~3435~f194537a90e3aa32e5c6.js.map