"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "我的"
    }),
    b: common_assets._imports_0,
    c: common_vendor.p({
      type: "download-filled",
      size: "20"
    }),
    d: common_vendor.p({
      type: "right",
      size: "20",
      color: "#aaa"
    }),
    e: common_vendor.p({
      type: "star-filled",
      size: "20"
    }),
    f: common_vendor.p({
      type: "right",
      size: "20",
      color: "#aaa"
    }),
    g: common_vendor.p({
      type: "weixin",
      size: "20"
    }),
    h: common_vendor.p({
      type: "right",
      size: "20",
      color: "#aaa"
    }),
    i: common_vendor.p({
      type: "notification-filled",
      size: "20"
    }),
    j: common_vendor.p({
      type: "right",
      size: "20",
      color: "#aaa"
    }),
    k: common_vendor.p({
      type: "flag-filled",
      size: "20"
    }),
    l: common_vendor.p({
      type: "right",
      size: "20",
      color: "#aaa"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e1b347f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/User/User.js.map
