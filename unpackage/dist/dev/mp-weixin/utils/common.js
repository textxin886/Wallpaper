"use strict";
function formatRelativeTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1e3);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  if (years > 0)
    return `${years}年前`;
  if (months > 0)
    return `${months}个月前`;
  if (days > 0)
    return `${days}天前`;
  if (hours > 0)
    return `${hours}小时前`;
  if (minutes > 0)
    return `${minutes}分钟前`;
  return `${seconds}秒前`;
}
exports.formatRelativeTime = formatRelativeTime;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/common.js.map
