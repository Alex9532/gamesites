"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [6448], {
    25069: (e, s, t) => {
      t.r(s), t.d(s, {
        default: () => b
      });
      var i = t(17402),
        r = t(65676),
        n = t(34164),
        l = t(80243),
        o = t(91833),
        a = t(25362),
        c = t(98708),
        d = t(90385),
        h = t(52928),
        m = t(59962),
        _ = t(40890),
        p = t(95901);
      const u = (0, l.Ay)({
          resolved: {},
          chunkName: () => "app-components-Breadcrumbs-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(2610), t.e(7419), t.e(8984)]).then(t.bind(t, 3513)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 3513
          }
        }),
        v = (0, l.Ay)({
          resolved: {},
          chunkName: () => "app-components-StoreLinks-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(1299), t.e(9936)]).then(t.bind(t, 64957)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 64957
          }
        }),
        g = (0, l.Ay)({
          resolved: {},
          chunkName: () => "app-components-Tags-tsx",
          isReady(e) {
            const s = this.resolve(e);
            return !0 === this.resolved[s] && !!t.m[s]
          },
          importAsync: () => Promise.all([t.e(2610), t.e(8864), t.e(8837)]).then(t.bind(t, 62676)),
          requireAsync(e) {
            const s = this.resolve(e);
            return this.resolved[s] = !1, this.importAsync(e).then((e => (this.resolved[s] = !0, e)))
          },
          requireSync(e) {
            const s = this.resolve(e);
            return t(s)
          },
          resolve() {
            return 62676
          }
        }),
        y = 314,
        N = 204;

      function b({
        data: e,
        children: s
      }) {
        const {
          isMobile: t
        } = (0, i.useContext)(a.F), l = (0, r.d4)(c.K), b = (0, r.d4)(d.K5), A = (null == e ? void 0 : e.developer) || (null == e ? void 0 : e.rating), D = !!e.tags && e.tags.length > 0, {
          image: Y
        } = e, S = Y ? (0, _.pN)({
          width: y,
          height: y,
          image: Y
        }) : "", F = Y ? (0, _.pN)({
          width: 2 * y,
          height: 2 * y,
          image: Y
        }) : "", x = Y ? (0, _.pN)({
          width: N,
          height: N,
          image: Y
        }) : "", w = Y ? (0, _.pN)({
          width: 2 * N,
          height: 2 * N,
          image: Y
        }) : "";
        return (0, p.FD)("article", {
          className: m.description,
          children: ["game" === b && !!e.breadcrumbs && e.breadcrumbs.length > 0 && (0, p.Y)(u, {
            breadcrumbs: e.breadcrumbs
          }), "home" === b && (0, p.Y)("div", {
            className: m.description__preTitle,
            children: l.about_title
          }), (0, p.Y)("header", {
            style: m.description__titleContainer,
            children: "home" === b || "game" === b && !t ? (0, p.Y)("h1", {
              className: m.description__title,
              children: e.title
            }) : (0, p.Y)("h2", {
              className: m.description__title,
              children: e.title
            })
          }), A && (0, p.FD)("div", {
            className: m.description__labels,
            children: [e.developer && (0, p.Y)("span", {
              className: m.description__developer,
              children: e.developer
            }), e.rating && (0, p.FD)(p.FK, {
              children: [(0, p.FD)("span", {
                className: m.description__label,
                children: [(0, p.Y)(o.default, {
                  className: m.description__SVGIconStar,
                  name: "star"
                }), e.rating.rating.toFixed(1)]
              }), (0, p.FD)("span", {
                className: m.description__label,
                children: [(0, h.ZV)(e.rating.up_count + e.rating.down_count), " ", l.votes]
              })]
            })]
          }), Y && (0, p.FD)("picture", {
            className: m.description__thumbnailContainer,
            children: [(0, p.Y)("source", {
              className: m.description__thumbnail,
              srcSet: `${S} 1x, ${F} 2x`,
              media: "(min-width: 991px)",
              width: y,
              height: y
            }), (0, p.Y)("img", {
              className: m.description__thumbnail,
              alt: e.title,
              src: x,
              srcSet: `${x} 1x, ${w} 2x`,
              decoding: "async",
              loading: "lazy",
              width: N,
              height: N
            })]
          }), (0, p.Y)("div", {
            className: (0, n.$)(m.description__localized, "home" === b && m.description__localized_isHomePage),
            dangerouslySetInnerHTML: {
              __html: e.body
            }
          }), "game" === b && (null == e ? void 0 : e.store_urls) && Object.keys(e.store_urls).length > 0 && (0, p.FD)(p.FK, {
            children: [(0, p.Y)("h3", {
              className: m.description__appStoreTitle,
              children: l.get_the_app
            }), (0, p.Y)(v, {
              urls: e.store_urls
            })]
          }), D && (0, p.Y)(g, {
            className: m.description__tags,
            tags: e.tags
          }), s]
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-Description~6fd75bb51d2e89c6704b.js.map