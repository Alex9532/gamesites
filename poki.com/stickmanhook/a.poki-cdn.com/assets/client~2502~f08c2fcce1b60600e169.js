"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [2502], {
    65693: (n, r, e) => {
      e.d(r, {
        R: () => _
      });
      var t = e(57798),
        u = e(15964),
        i = e(88483),
        o = e(28452),
        f = e(69391),
        c = e(61209),
        v = e(81160),
        a = Array.isArray;

      function d(n) {
        return (0, v.T)((function(r) {
          return function(n, r) {
            return a(r) ? n.apply(void 0, (0, t.fX)([], (0, t.zs)(r))) : n(r)
          }(n, r)
        }))
      }
      var s = ["addListener", "removeListener"],
        l = ["addEventListener", "removeEventListener"],
        L = ["on", "off"];

      function _(n, r, e, v) {
        if ((0, c.T)(e) && (v = e, e = void 0), v) return _(n, r, e).pipe(d(v));
        var a = (0, t.zs)(function(n) {
            return (0, c.T)(n.addEventListener) && (0, c.T)(n.removeEventListener)
          }(n) ? l.map((function(t) {
            return function(u) {
              return n[t](r, u, e)
            }
          })) : function(n) {
            return (0, c.T)(n.addListener) && (0, c.T)(n.removeListener)
          }(n) ? s.map(p(n, r)) : function(n) {
            return (0, c.T)(n.on) && (0, c.T)(n.off)
          }(n) ? L.map(p(n, r)) : [], 2),
          E = a[0],
          T = a[1];
        if (!E && (0, f.X)(n)) return (0, o.Z)((function(n) {
          return _(n, r, e)
        }))((0, u.Tg)(n));
        if (!E) throw new TypeError("Invalid event target");
        return new i.c((function(n) {
          var r = function() {
            for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
            return n.next(1 < r.length ? r : r[0])
          };
          return E(r),
            function() {
              return T(r)
            }
        }))
      }

      function p(n, r) {
        return function(e) {
          return function(t) {
            return n[e](r, t)
          }
        }
      }
    },
    56978: (n, r, e) => {
      e.d(r, {
        B: () => o
      });
      var t = e(60975),
        u = e(92908),
        i = e(64878);

      function o(n, r) {
        return void 0 === r && (r = t.E), (0, u.N)((function(e, t) {
          var u = null,
            o = null,
            f = null,
            c = function() {
              if (u) {
                u.unsubscribe(), u = null;
                var n = o;
                o = null, t.next(n)
              }
            };

          function v() {
            var e = f + n,
              i = r.now();
            if (i < e) return u = this.schedule(void 0, e - i), void t.add(u);
            c()
          }
          e.subscribe((0, i._)(t, (function(e) {
            o = e, f = r.now(), u || (u = r.schedule(v, n), t.add(u))
          }), (function() {
            c(), t.complete()
          }), void 0, (function() {
            o = u = null
          })))
        }))
      }
    }
  }
]);
//# sourceMappingURL=client~2502~f08c2fcce1b60600e169.js.map