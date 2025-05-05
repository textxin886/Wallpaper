"use strict";
const common_vendor = require("../common/vendor.js");
const windowWidth = common_vendor.index.getSystemInfoSync();
const getstatusBarHeight = () => windowWidth.statusBarHeight || 0;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    let titleBarHeight = height + (top - getstatusBarHeight()) * 2;
    return titleBarHeight;
  } else {
    return 60;
  }
};
const getnavBarHright = () => getstatusBarHeight() + getTitleBarHeight();
exports.getTitleBarHeight = getTitleBarHeight;
exports.getnavBarHright = getnavBarHright;
exports.getstatusBarHeight = getstatusBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/sytem.js.map
