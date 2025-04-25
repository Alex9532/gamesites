"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [9113], {
    40827: (a, e, r) => {
      r.d(e, {
        A: () => _
      });
      var d = r(90161),
        i = r(51226),
        p = r(52281),
        m = r(1081),
        s = r(42891),
        b = r(91323),
        t = r(71219),
        n = r(76475),
        g = r(35190);
      const o = (0, m.Mz)(b.Gd, s.xp, t.i8, t.Fw, ((a, e, r, d) => {
          const i = `/${n.Ay.networkId}/mobile_gamebar_320x50/${a.id}_mobile_gamebar_320x50`,
            p = r === g.G.DPF_ONLY || r === g.G.PBS_DPF_CSTS ? {
              appnexus: n.GO[e].gamebar,
              openx: n.XS[e].gamebar,
              ix: n.G8[e].gamebar,
              pubmatic: n.OP[e].gamebar,
              oneTag: n.DT[e].gamebar,
              adagio: n.uK[e].gamebar,
              richAudience: n.tw[e].gamebar,
              magnite: n.Uq[e].gamebar,
              shareThrough: n.PX[e].gamebar,
              tripleLift: n.CZ[e].gamebar
            } : {
              appnexus: n.gy[e].gamebar,
              openx: n.Px[e].gamebar,
              ix: n.E8[e].gamebar,
              pubmatic: n.SC[e].gamebar,
              oneTag: n.jY[e].gamebar,
              adagio: n.sG[e].gamebar,
              richAudience: n.d$[e].gamebar,
              magnite: n._c[e].gamebar,
              shareThrough: n.tH[e].gamebar,
              tripleLift: n.CZ[e].gamebar
            };
          return {
            code: i,
            height: 50,
            width: 320,
            bids: [{
              bidder: "appnexus",
              params: {
                placementId: p.appnexus
              }
            }, {
              bidder: "openx",
              params: {
                delDomain: "poki-d.openx.net",
                unit: p.openx
              }
            }, {
              bidder: "ix",
              params: {
                siteId: p.ix
              }
            }, {
              bidder: "pubmatic",
              params: {
                publisherId: "156838",
                adSlot: p.pubmatic
              }
            }, {
              bidder: "onetag",
              params: {
                pubId: "6da09f566a9dc06",
                ext: {
                  placement_name: p.oneTag
                }
              }
            }, {
              bidder: "adagio",
              params: {
                organizationId: "1155",
                site: a.domain.replace(/\./g, "-"),
                placement: p.adagio,
                useAdUnitCodeAsAdUnitElementId: !0,
                environment: "desktop",
                pagetype: "game",
                category: "games"
              }
            }, {
              bidder: "richaudience",
              params: {
                pid: p.richAudience,
                supplyType: "site"
              }
            }, {
              bidder: "rubicon",
              params: {
                accountId: 18608,
                siteId: 498726,
                zoneId: p.magnite
              }
            }, {
              bidder: "sharethrough",
              params: {
                pkey: p.shareThrough
              }
            }, {
              bidder: "triplelift",
              params: {
                inventoryCode: "Poki_HDX_Prebid"
              }
            }, ...d ? [{
              bidder: "appnexus_s2s",
              params: {
                placementId: n.wI[e].gamebar
              }
            }, {
              bidder: "openx_s2s",
              params: {
                delDomain: "poki-d.openx.net",
                unit: n.zX[e].gamebar
              }
            }, {
              bidder: "ix_s2s",
              params: {
                siteId: n.gs[e].gamebar
              }
            }, {
              bidder: "pubmatic_s2s",
              params: {
                publisherId: "156838",
                adSlot: n.u2[e].gamebar
              }
            }, {
              bidder: "onetag_s2s",
              params: {
                pubId: "6da09f566a9dc06",
                ext: {
                  placement_name: n.rC[e].gamebar
                }
              }
            }, {
              bidder: "richaudience_s2s",
              params: {
                pid: n.Jv[e].gamebar,
                supplyType: "site"
              }
            }, {
              bidder: "rubicon_s2s",
              params: {
                accountId: 18608,
                siteId: 551606,
                zoneId: n.wP[e].gamebar
              }
            }, {
              bidder: "sharethrough_s2s",
              params: {
                pkey: n.Zx[e].gamebar
              }
            }, {
              bidder: "triplelift_s2s",
              params: {
                inventoryCode: n.c8[e].gamebar
              }
            }] : []],
            mediaTypes: {
              banner: {
                sizes: [
                  [320, 50]
                ]
              }
            },
            ortb2Imp: {
              battr: [6, 7]
            }
          }
        })),
        _ = {
          desktop: {
            desktop_gp_728x90: d.A,
            desktop_gp_300x250: p.A,
            desktop_gp_160x600: i.A
          },
          mobile: {
            mobile_gamebar_320x50: o
          }
        }
    }
  }
]);
//# sourceMappingURL=client~main-7c52e00d~fa672da1fe3838b66574.js.map