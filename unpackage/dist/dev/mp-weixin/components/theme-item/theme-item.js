"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      //// 类型校验：必须是布尔值
      default: false
      /// 默认值：如果父组件未传递，则默认为 false
    },
    items: {
      type: Object,
      default: () => ({
        name: "默认名称",
        picurl: "@/common/image/classify1.jpg",
        relativeTime: "三天前更新"
      })
    }
  },
  setup(__props) {
    const prpos = __props;
    const relativeTime = utils_common.formatRelativeTime(prpos.items.updateTime);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.items.picurl,
        c: common_vendor.t(__props.items.name),
        d: common_vendor.t(common_vendor.unref(relativeTime)),
        e: `/pages/classList/classList?id=${__props.items._id}&name=${__props.items.name}`
      } : {}, {
        f: __props.isMore
      }, __props.isMore ? {
        g: common_assets._imports_0$2,
        h: common_vendor.p({
          type: "more-filled",
          size: "20",
          color: "#fff"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-item/theme-item.js.map
