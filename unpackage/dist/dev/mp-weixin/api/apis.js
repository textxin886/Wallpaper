"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({ url: "/homeBanner" });
}
function apigetDayRandom() {
  return utils_request.request({ url: "/randomWall" });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    //传给request数组
    url: "/wallNewsList",
    data
  });
}
function apigetClassify(data) {
  return utils_request.request({
    url: "/classify",
    data
  });
}
function apiGetClassList(data) {
  return utils_request.request({
    url: "/wallList",
    data
  });
}
function apiUserInfo(data = {}) {
  return utils_request.request({
    url: "/userInfo",
    data
  });
}
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetNotice = apiGetNotice;
exports.apiUserInfo = apiUserInfo;
exports.apigetClassify = apigetClassify;
exports.apigetDayRandom = apigetDayRandom;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
