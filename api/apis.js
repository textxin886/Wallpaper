import {request} from "@/utils/request.js"
//公告
export function apiGetBanner() {
 return request({url:"/homeBanner"})
}
	
//每日推荐
export function apigetDayRandom() {
	return request({url:"/randomWall"})
}

// 公告

export function apiGetNotice(data={}) {//传入一个数组
	return request({//传给request数组
	url:"/wallNewsList",
	data
	})
}
//专题精选
export function apigetClassify(data) {
	return request({
	url:"/classify",
	data
	})
}
//点击精选跳转的专题列表
export function apiGetClassList(data) {
	return request({
	url:"/wallList",
	data
	})
}