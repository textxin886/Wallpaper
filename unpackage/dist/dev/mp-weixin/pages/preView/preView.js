"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, index, i0) => {
          return {
            a: common_vendor.o(maskChange, index),
            b: index
          };
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        d: common_vendor.o(goBack),
        e: common_vendor.unref(utils_sytem.getstatusBarHeight)() + "px",
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        h: common_vendor.p({
          type: "info",
          size: "30"
        }),
        i: common_vendor.o(clickInfo),
        j: common_vendor.p({
          type: "star",
          size: "28"
        }),
        k: common_vendor.o(clicksScore),
        l: common_vendor.p({
          type: "download",
          size: "28"
        }),
        m: mackState.value,
        n: common_vendor.p({
          type: "closeempty",
          size: "30"
        }),
        o: common_vendor.o(clickinfoclose),
        p: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3",
          size: "16"
        }),
        q: common_vendor.sr(infoPopup, "18cea5aa-6", {
          "k": "infoPopup"
        }),
        r: common_vendor.p({
          animation: true,
          ["background-color"]: "#fff",
          type: "bottom",
          ["border-radius"]: "10px 10px 0 0"
        }),
        s: common_vendor.p({
          type: "closeempty",
          size: "30"
        }),
        t: common_vendor.o(clickScoreClose),
        v: common_vendor.o(_ctx.onChange),
        w: common_vendor.o(($event) => userScore.value = $event),
        x: common_vendor.p({
          ["allow-half"]: true,
          size: "32",
          modelValue: userScore.value
        }),
        y: common_vendor.t(userScore.value),
        z: common_vendor.o(submitScore),
        A: !userScore.value,
        B: common_vendor.sr(scorePopup, "18cea5aa-9", {
          "k": "scorePopup"
        }),
        C: common_vendor.p({
          ["is-mask-click"]: false,
          animation: true,
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18cea5aa"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preView/preView.js.map
