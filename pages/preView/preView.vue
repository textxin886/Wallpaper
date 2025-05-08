<!-- 全屏壁纸-预览页面 -->
<template>
	<view class="parView" v-if="currentInfo">
		<!-- 轮播 -->
		<!-- current从第几张开始 chenge是滑动事件拿到他是第几张-->
		<swiper circular :current="currentIndex" @change="swiperChenge">
			<swiper-item v-for="(item, index) in classList" :key="item._id">
				<!--  v-if="index==currentIndex||index==currentIndex+1||index==currentIndex-1 -->
				<image v-if="Math.abs(index - currentIndex) <= 1" @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 创建遮罩层显示时间 -->
		<view class="mask" v-show="mackState">
			<!-- v-show主要控制display：none -->
			<!-- 返回上一级 -->
			<view class="goBack" @click="goBack" :style="{ top: getstatusBarHeight() + 'px' }">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<!-- 第几章 -->
			<view class="count">{{ currentIndex + 1 }} / {{ classList.length }}</view>
			<!-- 时间 -->
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<!-- 日期 -->
			<view class="date">
				<!-- 日期格式化组件 -->
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<!-- 底部浮动框可下载 -->
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="30"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clicksScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">{{ currentInfo.score }}</view>
				</view>
				<view class="box" @click="clickDownilad">
					<uni-icons type="download" size="28"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		<!-- 信息弹窗 -->
		<uni-popup ref="infoPopup" animation background-color="#fff" type="bottom" border-radius="10px 10px 0 0">
			<view class="infoPopup">
				<view class="popheader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickinfoclose">
						<uni-icons type="closeempty" size="30"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y="true">
					<view class="content">
						<view class="row">
							<!-- {{item}} -->
							<view class="label">壁纸ID：</view>
							<!-- selectable可选中 -->
							<text selectable class="valueMsg">{{ currentInfo._id }}</text>
						</view>
						<view class="row">
							<!-- {{item}} -->
							<view class="label">分类：</view>
							<!-- selectable可选中 -->
							<text selectable class="girl">未记录</text>
						</view>
						<view class="row">
							<!-- {{item}} -->
							<view class="label">发布者：</view>
							<!-- selectable可选中 -->
							<text selectable class="valueMsg">{{ currentInfo.nickname }}</text>
						</view>
						<view class="row">
							<!-- {{item}} -->
							<view class="label">评分：</view>
							<!-- selectable可选中 -->
							<text selectable class="valueMsg rotbox">
								<!-- 评分插件 -->
								<uni-rate readonly touchable :value="currentInfo.score" size="16" />
								<text class="score">{{ currentInfo.score }}</text>
							</text>
						</view>
						<view class="row">
							<!-- {{item}} -->
							<view class="label">摘要：</view>
							<!-- selectable可选中 -->
							<text selectable class="valueMsg">{{ currentInfo.description }}</text>
						</view>
						<view class="row">
							<!-- {{item}} -->
							<view class="label">标签：</view>
							<!-- selectable可选中 -->
							<view class="valueMsg tabs" v-for="items in currentInfo.tabs" :key="items">
								<text selectable class="tab">{{ items }}</text>
							</view>
						</view>
						<view class="about">声明：仅学习使用</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<!-- 评分弹窗 -->
		<uni-popup ref="scorePopup" :is-mask-click="false" animation border-radius="10px 10px 0 0">
			<view class="scorePopup">
				<view class="popheader">
					<view class="title">壁纸评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="30"></uni-icons>
					</view>
				</view>
				<view class="content">
					<!-- 用户评分 -->
					<uni-rate v-model="userScore" @change="onChange" allow-half size="32" />
					<text class="text">{{ userScore }}</text>
				</view>
				<view class="footer">
					<button @click="submitScore" :disabled="!userScore" size="mini" plain>确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { getstatusBarHeight } from '@/utils/sytem.js';
// 引入onLoad
import { onLoad } from '@dcloudio/uni-app';
// 在小程序中，点击隐藏遮罩
const mackState = ref(true);
const infoPopup = ref(null);
const scorePopup = ref(null);
const userScore = ref(0);
// 拿到数组以及新增的picurl大图
const classList = ref([]);
// 拿到当前id
const currentId = ref(0);
// 当前的id
const currentIndex = ref(0);

// 当前图片信息
const currentInfo = ref(0);
// 使用map拿到图片的缓存
const storgClassList = uni.getStorageSync('storgClassList') || [];

classList.value = storgClassList.map((item) => {
	return {
		//返回一个新数组
		...item, //结构数据，将item的数据都放到新数组中，并插入picurl
		picurl: item.smallPicurl.replace('_small.webp', '.jpg') //替换small为big
	};
});
// console.log(classList.value);

// 接受网页地址传入的id值?id=
onLoad((e) => {
	// 接收传入的id
	currentId.value = e.id;
	// 在classList数组中查找匹配项的索引
	currentIndex.value = classList.value.findIndex((item) => {
		return item._id == currentId.value; // 拿到索引值--也就是拿到当前的id在数组的第几个位置
	});
	// 根据索引获取对应的数据详情
	currentInfo.value = classList.value[currentIndex.value];
	// console.log(currentInfo.value);
});

const swiperChenge = (e) => {
	currentIndex.value = e.detail.current;
	// 拿到当前页面的介绍信息
	currentInfo.value = classList.value[currentIndex.value];
	// console.log(currentIndex.value);
};

// infoPopup要和上面uni-popup一样
const maskChange = () => {
	mackState.value = !mackState.value;
	// !mackState.value是取反
};
// 点击展开信息弹窗
const clickInfo = () => {
	infoPopup.value.open();
};
// 点击关闭信息弹窗
const clickinfoclose = () => {
	infoPopup.value.close();
};
// 点击评分
const clicksScore = () => {
	scorePopup.value.open();
};
// 点击关闭评分
const clickScoreClose = () => {
	scorePopup.value.close();
};
// 确认评分
const submitScore = () => {
	uni.showToast({
		title: '评分成功'
	});
	scorePopup.value.close();
};

// 点击返回上一页
const goBack = () => {
	uni.navigateBack();
};

// 点击保存图片
const clickDownilad = () => {
	// 如果是h5
	// #ifdef H5
	uni.showModal({
		content: '请长按保存',
		showCancel: false
	});
	// #endif
	// 除了H5
	// #ifndef H5
	// 小程序保存图片到相册
	uni.getImageInfo({//获取图片信息和临时地址
		src:currentInfo.value.picurl,
		success(res) {
			// console.log(res);
			uni.saveImageToPhotosAlbum({
				filePath:res.path,
				success:(res) =>{
					// console.log(res);
					uni.showToast({
						title:'保存成功'
					})
				},
				fail:(err) =>{
					if(err.errMsg === 'saveImageToPhotosAlbum:fail auth deny'){
						uni.showModal({
							title:'授权',
							content:'请开启保存图片到相册权限',
							success:(res) =>{
								if(res.confirm){
									uni.openSetting({//手动开启
										success:(res) =>{
											console.log(res);//如果打开了writePhotosAlbum返回true
											if(res.authSetting['scope.writePhotosAlbum']){
												
												uni.getImageInfo({
													src:currentInfo.value.picurl,
													success:(res) =>{
														uni.saveImageToPhotosAlbum({
															filePath:res.path,
															success:() =>{
																uni.showToast({
																	title:'保存成功'
																})
															}
														})
													}
												})
											}
										}
									})
								}
							}
						})
					}
				}
			})
		}
	})
	
	// #endif
};
</script>

<style lang="scss" scoped>
.parView {
	width: 100%;
	height: 100vh; //可视沾满
	position: relative;
	swiper {
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
	// 遮罩层
	.mask {
		// 弹窗头部操作

		& > view {
			// 选择 .mask 的所有直接子元素 view
			position: absolute;
			left: 0;
			right: 0;
			// 左边0右边0 是居中，如果有宽度
			margin: auto;
			color: #fff;
			color: white;
			width: fit-content; //内容自适应
		}

		// 返回上一级
		.goBack {
			width: 38px;
			height: 38px;
			background: rgba(0, 0, 0, 0.5);
			left: 30rpx;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10rpx);
			border: 1rpx solid rgba(255, 255, 255, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		// 第几章
		.count {
			top: 10vh;
			background-color: rgba(0, 0, 0, 0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}
		// 时间
		.time {
			width: fit-content;
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			// 添加阴影
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		// 日期
		.date {
			font-size: 34rpx;
			top: calc(20vh + 80rpx);
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		// 底部浮动框可下载
		.footer {
			background: rgba(255, 255, 255, 0.6);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 60rpx;
			color: black;
			display: flex;
			justify-content: space-around;
			align-items: center;
			// 添加阴影
			box-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			// 添加背景模糊
			backdrop-filter: blur(20rpx);

			.box {
				padding: 2rpx 12rpx;
				// border: 1px solid red;
				/* 设置弹性布局 */
				display: flex;
				/* 设置主轴方向为垂直方向 */
				flex-direction: column;
				/* 设置子元素在交叉轴上居中对齐 */
				align-items: center;
				/* 设置子元素在主轴上居中对齐 */
				justify-content: center;

				.text {
					font-size: 26rpx;
					color: #text-font-color-2;
				}
			}
		}
	}
	.popheader {
		display: flex;
		justify-content: space-between; // 均匀排列每个元素首个元素放置于起点，末尾元素放置于终点
		align-items: center;
		// padding: 20rpx;
		.title {
			font-size: 26rpx;
			font-weight: 600;
			color: $text-font-color-2;
		}
		.close {
			padding: 5rpx;
		}
	}
	.infoPopup {
		background: white;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		scroll-view {
			max-height: 60vh;
		}
		.content {
			padding: 20rpx;
			.row {
				padding: 16rpx 0;
				// border-bottom: 1px solid #eee;
				display: flex;
				font-size: 32rpx;
				line-height: 1.7em;
				.label {
					color: $text-font-color-3;
					width: 140rpx;
					text-align: right;
					font-size: 30rpx;
				}
				.valueMsg {
					flex: 1; //自由分配
					width: 0;
				}
				.rotbox {
					display: flex;
					align-items: center;
					.score {
						font-size: 26rpx;
						color: $text-font-color-2;
						padding-left: 10rpx;
					}
				}
				.tabs {
					display: flex;
					flex-wrap: wrap;
					.tab {
						border: 1px solid $brand-theme-color;
						padding: 10rpx 30rpx;
						border-radius: 40rpx;
						margin: 10rpx 10rpx 10rpx 0;
						font-size: 22rpx;
						line-height: 1em;
						color: $brand-theme-color;
					}
				}
				.girl {
					color: $brand-theme-color;
				}
			}
		}
		.about {
			background: $text-font-color-4;
			text-align: center;
			font-size: 26rpx;
			color: $text-font-color-2;
			padding: 20rpx 0;
			border-radius: 10rpx;
		}
	}
	// 评分弹窗

	.scorePopup {
		background: #fff;
		padding: 30rpx;
		width: 70vw;
		border-radius: 30rpx;
		.content {
			padding: 30rpx 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.text {
				color: #ffca3e;
				line-height: 1em;
			}
		}
		.footer {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 40rpx;
			font-size: 30rpx;
		}
	}
}
</style>
