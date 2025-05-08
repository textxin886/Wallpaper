"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_sytem = require("../../utils/sytem.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preView",
  setup(__props) {
    const mackState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(0);
    const currentIndex = common_vendor.ref(0);
    const currentInfo = common_vendor.ref(0);
    const storgClassList = common_vendor.index.getStorageSync("storgClassList") || [];
    classList.value = storgClassList.map((item) => {
      return {
        //返回一个新数组
        ...item,
        //结构数据，将item的数据都放到新数组中，并插入picurl
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
        //替换small为big
      };
    });
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = classList.value.findIndex((item) => {
        return item._id == currentId.value;
      });
      currentInfo.value = classList.value[currentIndex.value];
    });
    const swiperChenge = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = classList.value[currentIndex.value];
    };
    const maskChange = () => {
      mackState.value = !mackState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickinfoclose = () => {
      infoPopup.value.close();
    };
    const clicksScore = () => {
      scorePopup.value.open();
    };
    const clickScoreClose = () => {
      scorePopup.value.close();
    };
    const submitScore = () => {
      common_vendor.index.showToast({
        title: "评分成功"
      });
      scorePopup.value.close();
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    const clickDownilad = () => {
      common_vendor.index.getImageInfo({
        //获取图片信息和临时地址
        src: currentInfo.value.picurl,
        success(res) {
          common_vendor.index.saveImageToPhotosAlbum({
            filePath: res.path,
            success: (res2) => {
              common_vendor.index.showToast({
                title: "保存成功"
              });
            },
            fail: (err) => {
              if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
                common_vendor.index.showModal({
                  title: "授权",
                  content: "请开启保存图片到相册权限",
                  success: (res2) => {
                    if (res2.confirm) {
                      common_vendor.index.openSetting({
                        //手动开启
                        success: (res3) => {
                          common_vendor.index.__f__("log", "at pages/preView/preView.vue:246", res3);
                          if (res3.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.getImageInfo({
                              src: currentInfo.value.picurl,
                              success: (res4) => {
                                common_vendor.index.saveImageToPhotosAlbum({
                                  filePath: res4.path,
                                  success: () => {
                                    common_vendor.index.showToast({
                                      title: "保存成功"
                                    });
                                  }
                                });
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? {
        b: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: Math.abs(index - currentIndex.value) <= 1
          }, Math.abs(index - currentIndex.value) <= 1 ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(swiperChenge),
        e: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        f: common_vendor.o(goBack),
        g: common_vendor.unref(utils_sytem.getstatusBarHeight)() + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(classList.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "30"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "28"
        }),
        o: common_vendor.t(currentInfo.value.score),
        p: common_vendor.o(clicksScore),
        q: common_vendor.p({
          type: "download",
          size: "28"
        }),
        r: common_vendor.o(clickDownilad),
        s: mackState.value,
        t: common_vendor.p({
          type: "closeempty",
          size: "30"
        }),
        v: common_vendor.o(clickinfoclose),
        w: common_vendor.t(currentInfo.value._id),
        x: common_vendor.t(currentInfo.value.nickname),
        y: common_vendor.p({
          readonly: true,
          touchable: true,
          value: currentInfo.value.score,
          size: "16"
        }),
        z: common_vendor.t(currentInfo.value.score),
        A: common_vendor.t(currentInfo.value.description),
        B: common_vendor.f(currentInfo.value.tabs, (items, k0, i0) => {
          return {
            a: common_vendor.t(items),
            b: items
          };
        }),
        C: common_vendor.sr(infoPopup, "18cea5aa-6", {
          "k": "infoPopup"
        }),
        D: common_vendor.p({
          animation: true,
          ["background-color"]: "#fff",
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        }),
        E: common_vendor.p({
          type: "closeempty",
          size: "30"
        }),
        F: common_vendor.o(clickScoreClose),
        G: common_vendor.o(_ctx.onChange),
        H: common_vendor.o(($event) => userScore.value = $event),
        I: common_vendor.p({
          ["allow-half"]: true,
          size: "32",
          modelValue: userScore.value
        }),
        J: common_vendor.t(userScore.value),
        K: common_vendor.o(submitScore),
        L: !userScore.value,
        M: common_vendor.sr(scorePopup, "18cea5aa-9", {
          "k": "scorePopup"
        }),
        N: common_vendor.p({
          ["is-mask-click"]: false,
          animation: true,
          ["border-radius"]: "10px 10px 0 0"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18cea5aa"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preView/preView.js.map
