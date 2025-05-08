<template>
	<view class="userLayout pageBg" v-if="userInfo">
		<view class="statusBar" :style="{height:getnavBarHright()+'px'}"></view>
		<view class="userInfo">
			<!-- 用户中心 -->
			<view class="avatar">
				<image src="/static/image/xxmLogo.png" mode="aspectFill"></image>
			</view>
			<view class="ip">我的IP:{{userInfo.IP}}</view>
			<view class="addrees">来自于：{{userInfo.address.province}}</view>
		</view>
		<!-- <button open-type="contact">联系客服</button> -->
		<!-- 菜单1 -->
		<view class="section">
			<view class="list">
				<!-- 我的下载 -->
				<navigator url="/pages/classify/classify" open-type="reLaunch">
				<view class="row">
					
					<view class="left">
						<uni-icons type="download-filled" size="20" ></uni-icons>
						<view class="text">我的下载</view>
					</view>
					<view class="right">
						<!-- 下载量 -->
						<view class="text">{{userInfo.downloadSize}}</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
					
				</view>
				</navigator>
				<!-- 我的评分 -->
				<navigator url="/pages/classify/classify" open-type="reLaunch">
				<view class="row">
					
					<view class="left">
						<uni-icons type="star-filled" size="20" ></uni-icons>
						<view class="text">我的评分</view>
					</view>
					<view class="right">	
						<!-- 评分量 -->
						<view class="text">0</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
					
				</view>
				</navigator>
				<!-- 联系客服 -->
				<view class="row">
					<view class="left">
						<uni-icons type="weixin" size="20" ></uni-icons>
						<view class="text">联系客服</view>
						<button open-type="contact">联系客服</button>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				<!-- #ifdef H5 -->
				<button open-type="contact">拨打电话</button>
				<!-- #endif -->
				
				<!-- #ifdef MP -->
				<button open-type="contact">联系客服</button>
				<!-- #endif -->
				</view>
				
			</view>
		</view>
		<!-- 菜单2 -->
		<view class="section">
			<view class="list">
				<!-- 订阅更新 -->
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20" ></uni-icons>
						<view class="text">订阅更新</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				<!-- 常见问题 -->
				<view class="row">
					<view class="left">
						<uni-icons type="flag-filled" size="20" ></uni-icons>
						<view class="text">常见问题</view>
					</view>
					<view class="right">
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script setup>
import {getnavBarHright} from "@/utils/sytem.js"
import {apiUserInfo} from "@/api/apis.js"
import { ref } from "vue";
const userInfo = ref(null)

const getUserInfo = () => {
  apiUserInfo()
    .then(res => {
      console.log(res);
	  userInfo.value = res.data.data
    })

};

getUserInfo()
	
</script>

<style lang="scss" scoped>
// 用户中心
.userLayout {
	.userInfo {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column; //上下布局
		padding: 50rpx 0;
		.avatar {
			//头像
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			overflow: hidden; //超出隐藏
			border: 2rpx solid #ccc;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.ip {
			font-size: 40rpx;
			margin-top: 20rpx;
		}
		.addrees {
			font-size: 30rpx;
			color: #999;
			margin-top: 10rpx;
		}
	}
	.section {
		
		// 菜单
		border-radius: 10rpx;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.10);
		width: 690rpx;
		margin: 50rpx 30rpx;
		.list {
			.row {
				background-color: white;
				display: flex;
				align-items: center; //垂直居中
				justify-content: space-between; //两端对齐
				padding: 0 30rpx;
				height: 100rpx;
				border-bottom: 1rpx solid #eee;
				position: relative;
				&:last-child {
					border-bottom: 0;
				} //&是它本身
				.left {
					display: flex;
					align-items: center;
						:deep(){
								//deep是uniapp深度选择器，可以穿透组件
								.uni-icons {
									// !important权重提到最高
									color: $brand-theme-color !important;
								}
							}
					.text {
						
						font-size: 30rpx;
						padding-left: 20rpx;
					}
				}
				.right {
					display: flex;
					
					.text {
						align-items: center;
						font-size: 30rpx;
						color: #aaa;
						padding-right: 10rpx;
					}
				}
				button{
					position: absolute;
						left: 0;
						top: 0;
						height: 100%;
						width: 100%;
						opacity: 0;//透明度
	
				}
			}
		}
	}
}
</style>
