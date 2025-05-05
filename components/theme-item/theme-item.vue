<template>
	<view class="themeitem">
		<!-- 点击跳转 -->
		<navigator :url="`/pages/classList/classList?id=${items._id}&name=${items.name}`" class="box" v-if="!isMore">
		<image class="pic" :src="items.picurl" mode="widthFix"></image>
			<view class="mask">{{items.name}}</view>
			<view class="tab">{{relativeTime}}更新</view>
		</navigator>
		
		<navigator url="/pages/classify/classify" open-type="reLaunch" class="box more" v-if="isMore">
			<!-- open-type="reLaunch"才可以跳转到导航栏的页面 -->
		<image class="pic" src="@/common/image/classify2.jpg" mode="widthFix"></image>
			<view class="mask">
			<uni-icons type="more-filled" size="20" color="#fff"></uni-icons>
			<view class="text">更多</view>

			</view>
			
		</navigator>
		
		
		
	</view>
</template>

<script setup>
import {formatRelativeTime} from "../../utils/common.js"
	const prpos= defineProps({
		isMore:{
			type:Boolean, //// 类型校验：必须是布尔值
			default:false /// 默认值：如果父组件未传递，则默认为 false
		},
		items:{
			type:Object,
			default:()=>({
				name:"默认名称",
				picurl:"@/common/image/classify1.jpg",
				relativeTime:"三天前更新"
			})
		}
	})
	

	

const relativeTime = formatRelativeTime(prpos.items.updateTime);
	
</script>

<style lang="scss" scoped>
.themeitem{
	.box{
		height: 340rpx;
		border-radius: 10rpx;
		overflow:hidden;//多余的隐藏
		position: relative;//相对定位
		.pic{
			width: 100%;
		}
		.mask{
			width:100%;
			height: 70rpx;
			position: absolute;//相对于父级进行绝对定位
			bottom: 0;
			left: 0;
			background-color: rgba(0,0, 0, 0.2);
			color: #fff;
			text-align: center;//横向居中
			line-height: 70rpx;//垂直居中
			// 模糊半透明效果
			backdrop-filter: blur(10rpx);//模糊效果
			font-weight: 600;
		}
		.tab{
			position: absolute;
			top: 0;
			left: 0;
			background: rgba(250,129,90, 0.2);
			backdrop-filter: blur(10rpx);//模糊效果
			color: #fff;
			padding: 0 10rpx;
			border-radius: 0 0 10rpx 0;
			font-size: 22rpx;
			font-weight: 200;
			line-height: 40rpx;
			height: 40rpx;
			text-align: center;
		}
	}
	
	.box.more{
		.mask{
			width: 100%;
			height: 100%;
			//使得图标和文字垂直居中
			display: flex;
			justify-content: center;
			align-items: center;
			// 纵向排列
			flex-direction: column;
			
			
		}
		.text{
			font-size: 28rpx;
		}
	}
}
</style>