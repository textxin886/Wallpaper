<!-- 共享标题 -->
<template>
	<view class="layout">
		<view class="navBar">
			<!-- 浮动元素 -->
			<view class="statusBar" :style="{height:getstatusBarHeight()+'px'}">
				<!-- 占位符 -->
			</view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="20"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<view class="fill" :style="{height:getnavBarHright()+'px'}">
			<!-- 占位符,解决被覆盖的banner -->
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getstatusBarHeight,getTitleBarHeight,getnavBarHright} from "@/utils/sytem.js" //获取设备高度

// 接受父组件传递的标题
const props = defineProps({
	title:{
		type:String,
		default:""
	}
})
</script>

<style lang="scss" scoped>
.layout{
	.navBar{
		background:
		linear-gradient(to bottom,transparent,#fff 400rpx),
		linear-gradient(to right, #beecd8,20%, #F4E2D8);
		//开启浮动，不随着页面滚动
		position: fixed;//固定定位
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;//层级越小越高


		.statusBar{
			// 占位符
			// height: 90rpx;
			// border-bottom: 1px solid red;
		}
		.titleBar{
			// height: 100rpx;
			align-items: center;
			padding: 0 30rpx;
			display: flex;
			// 标题
			.title{
				font-size: 22px;
				color:$text-font-color-1;
				font-weight: 700;
			}
			// 搜索框
			.search{
				width: 200rpx;
				height: 56rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.icon{
					margin-left: 10rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
			
		}
	}
	.fill{
		height: 100rpx;
	}
}
</style>