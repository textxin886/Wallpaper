"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_sytem = require("../../utils/sytem.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "User",
  setup(__props) {
    const userInfo = common_vendor.ref(null);
    const getUserInfo = () => {
      api_apis.apiUserInfo().then((res) => {
        common_vendor.index.__f__("log", "at pages/User/User.vue:107", res);
        userInfo.value = res.data.data;
      });
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userInfo.value
      }, userInfo.value ? {
        b: common_vendor.unref(utils_sytem.getnavBarHright)() + "px",
        c: common_assets._imports_0,
        d: common_vendor.t(userInfo.value.IP),
        e: common_vendor.t(userInfo.value.address.province),
        f: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        g: common_vendor.t(userInfo.value.downloadSize),
        h: common_vendor.p({
          type: "right",
          size: "20",
          color: "#aaa"
        }),
        i: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        j: common_vendor.p({
          type: "right",
          size: "20",
          color: "#aaa"
        }),
        k: common_vendor.p({
          type: "weixin",
          size: "20"
        }),
        l: common_vendor.p({
          type: "right",
          size: "20",
          color: "#aaa"
        }),
        m: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        n: common_vendor.p({
          type: "right",
          size: "20",
          color: "#aaa"
        }),
        o: common_vendor.p({
          type: "flag-filled",
          size: "20"
        }),
        p: common_vendor.p({
          type: "right",
          size: "20",
          color: "#aaa"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1e1b347f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/User/User.js.map
