"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [8935], {
    98250: (s, t, e) => {
      e.r(t), e.d(t, {
        default: () => l
      });
      var o = e(34164),
        r = e(32987),
        i = e(95901);

      function l({
        sourcePicture: s,
        destinationPicture: t
      }) {
        return (0, i.FD)("div", {
          className: r.shimmer,
          children: [(0, i.Y)("figure", {
            className: r.shimmer__img,
            children: s
          }), (0, i.Y)("figure", {
            className: (0, o.A)(r.shimmer__img, r.shimmer__img_dest),
            children: t
          }), (0, i.FD)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            className: r.shimmer__svg,
            children: [(0, i.Y)("defs", {
              children: (0, i.FD)("linearGradient", {
                id: "lgrad",
                x1: "0%",
                y1: "100%",
                x2: "100%",
                y2: "0%",
                children: [(0, i.Y)("stop", {
                  offset: "0%",
                  style: {
                    "stop-color": "rgb(255, 255, 255)",
                    "stop-opacity": 0
                  }
                }), (0, i.Y)("stop", {
                  offset: "25%",
                  style: {
                    "stop-color": "rgb(255, 255, 255)",
                    "stop-opacity": 0
                  }
                }), (0, i.Y)("stop", {
                  offset: "50%",
                  style: {
                    "stop-color": "rgb(255, 255, 255)",
                    "stop-opacity": 1
                  }
                }), (0, i.Y)("stop", {
                  offset: "75%",
                  style: {
                    "stop-color": "rgb(255, 255, 255)",
                    "stop-opacity": 0
                  }
                }), (0, i.Y)("stop", {
                  offset: "100%",
                  style: {
                    "stop-color": "rgb(238, 130, 238)",
                    "stop-opacity": 0
                  }
                })]
              })
            }), (0, i.Y)("rect", {
              x: "0",
              y: "0",
              width: "100%",
              height: "100%",
              fill: "url(#lgrad)"
            })]
          })]
        })
      }
    }
  }
]);
//# sourceMappingURL=client~app-components-Shimmer~2bebfb284c9c5e4d97c2.js.map