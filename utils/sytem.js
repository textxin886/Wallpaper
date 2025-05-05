
// 获取设备宽度
const windowWidth = uni.getSystemInfoSync();
// console.log(windowWidth);
export const getstatusBarHeight = ()=> windowWidth.statusBarHeight || 0//设备状态栏高度

// 胶囊的高度
export const getTitleBarHeight=()=>{
	if (uni.getMenuButtonBoundingClientRect){
		// 如果有胶囊按钮-拿到胶囊高度
		 let {top,height} = uni.getMenuButtonBoundingClientRect(); 
		 let titleBarHeight = height + (top - getstatusBarHeight())*2
		 return titleBarHeight;
	}
	else {
		// 返回高度40，没有胶囊按钮
		return 60;
	}
}

//底部放置遮盖填充区
export const getnavBarHright = () => getstatusBarHeight() + getTitleBarHeight()