<template>
	<view class="homeLayout pageBg">
		<!-- 自定义头部组件 -->
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<!-- 轮播图 -->
			<swiper autoplay :circular="true" :duration="1000" :indicator-dots="true" indicator-color="rgb(255, 255, 255)">
				<swiper-item v-for="item in bennerList" :key="item._id">
					<view class="swiper-item">
						<!-- 适用于小程序开发，特别是需要使用 ~ 符号引用根目录图片的场 -->
						<image :src="item.picurl" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 公告 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator url="/pages/notice/detail">
							<view class="text-item">{{ item.title }}</view>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="20"></uni-icons>
			</view>
		</view>

		<!-- 每日推荐 -->
		<view class="select">
			<!-- uniapp的easycom 会自动扫描components文件夹自动注册无需import -->
			<components-title>
				<!-- 具名插槽 -->
				<template #name>每日推荐</template>
				<template #custom>
					<view class="box">
						<uni-icons type="calendar" size="20"></uni-icons>
					</view>

					<view class="text">
						<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
					</view>
				</template>
			</components-title>
			<view class="content">
				<!-- 滑动组件 -->
				<scroll-view scroll-x show-scrollbar="true">
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview">
						<!-- 预览页面 -->
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>

			<!-- 专题精选-->
			<view class="theme">
				<!-- uniapp的easycom 会自动扫描components文件夹自动注册无需import -->
				<components-title>
					<!-- 具名插槽 -->
					<template #name>专题精选</template>
					<template #custom>
						<!-- 跳转页面 -->
						<view class="more">
							<navigator url="">More+</navigator>
						</view>
					</template>
				</components-title>
				<view class="content">
					<!-- 组件 -->
					<theme-item :items="item" v-for="item in classifyList" :key="item._id" />
					<theme-item :isMore="true" />
				</view>
			</view>
		</view>

		<!-- 底部 -->
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
import { apiGetBanner, apigetDayRandom, apiGetNotice, apigetClassify } from '@/api/apis.js';

const bennerList = ref([]);
const randomList = ref([]);
const noticeList = ref([]);
const classifyList = ref([]);

//分享给好友
onShareAppMessage((e) => {
	console.log(e);
	return {
		title: '分享给好友',
		path: '/pages/index/index',
	}
})
//分享到朋友圈
onShareTimeline(() => {
  return { title: '微信朋友圈分享' };
});










// axios 不直接支持小程序，需要使用uni.request
// 获取benner
const getBanner = async () => {
	let res = await apiGetBanner();
	bennerList.value = res.data.data;
};

// 每日推荐
const getDayRandom = async () => {
	let res = await apigetDayRandom();
	randomList.value = res.data.data;
	// console.log(randomList.value);
};

// 公告
const getNotice = async () => {
	let res = await apiGetNotice({ select: true });
	noticeList.value = res.data.data;
};
// 专题精选
const getClassify = async () => {
	let res = await apigetClassify({
		select:true
	});
	classifyList.value = res.data.data;
};

getDayRandom();
getBanner();
getNotice();
getClassify();

// <!-- 点击跳转到预览页面 -->
const goPreview = () => {
	uni.switchTab({
		url: '/pages/classify/classify',
		
	});
};
</script>

<style lang="scss" scoped>
//banner轮播图区域
.homeLayout {
	.banner {
		width: 750rpx;
		padding: 30rpx 0;
		swiper {
			width: 750rpx;
			height: 340rpx;
			padding: 0 30rpx;

			// 这里&代表swiper
			&-item {
				// 设置圆角
				border-radius: 10rpx;
				// 100%继承父级
				width: 100%;
				height: 100%;
			}
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
//公告
.notice {
	width: 690rpx;
	line-height: 80rpx;
	height: 80rpx;
	background-color: #f9f9f9;
	margin: 0 auto;
	border-radius: 10rpx;
	display: flex;
	.left {
		width: 140rpx;
		//创建一个弹性容器，并让容器内的所有子元素在水平和垂直方向上都居中显示。
		display: flex; //其子元素会自动成为 Flex 项目，默认沿水平方向排列。
		justify-content: center; //控制子元素在主轴（默认水平方向）上的对齐方式。center 表示子元素在主轴方向上居中对齐。
		align-items: center; //控制子元素在交叉轴（默认垂直方向）上的对齐方式。center 表示子元素在交叉轴方向上居中对齐。
		:deep() {
			//deep是uniapp深度选择器，可以穿透组件
			.uni-icons {
				// !important权重提到最高
				color: $brand-theme-color !important;
			}
		}

		.text {
			font-size: 28rpx;
			font-weight: 600;
			color: $brand-theme-color;
			margin: 0 10rpx;
		}
	}
	.center {
		flex: 1;
		// 	overflow: hidden;
		// white-space: nowrap;
		// text-overflow: ellipsis;
		swiper {
			// 继承父级100
			width: 100%;
			height: 100%;
			swiper-item {
				width: 100%;
				height: 100%;
				font-size: 28rpx;
				color: #666666;
				.text-item {
					overflow: hidden; //多余的隐藏
					white-space: nowrap; //不换号
					text-overflow: ellipsis; //超出部分用省略号代替
				}
			}
		}
	}
	.right {
		width: 70rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

//标题组件
.select {
	padding-top: 50rpx;
	.text {
		display: inline-block;
		color: $brand-theme-color;
		margin-left: 10rpx;
	}
	.box {
		display: inline-block;
		:deep() {
			//deep是uniapp深度选择器，可以穿透组件
			.uni-icons {
				// !important权重提到最高
				color: $brand-theme-color !important;
			}
		}
	}

	.content {
		width: 720rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		scroll-view {
			// 不换行
			white-space: nowrap;
			.box {
				display: inline-block; //行内快显示在一行
				width: 200rpx;
				height: 430rpx;
				margin-right: 15rpx;
				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	.theme {
		padding: 50rpx 0;

		.more {
			color: #888;
		}
		.content {
			martop-top: 30rpx;
			padding: 0 30rpx;
			// 网格
			display: grid;
			grid-template-columns: repeat(3, 1fr); //每一行3个，并且宽度自己分配
			grid-gap: 20rpx; //网格间距
		}
	}
}
</style>
