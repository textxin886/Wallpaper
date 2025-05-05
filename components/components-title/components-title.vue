<!-- 每日推荐标题 -->
<template>
	<view class="common-title">
		<view class="name">
			 <!-- 名为 "name" 的插槽 -->
			<slot name="name"/>
		</view>
		<view class="custom">
			 <!-- 名为 "custom" 的插槽 -->
			<slot name="custom"/>
		</view>
		
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.common-title{
	display:flex;
	justify-content:space-between;//两端对齐
	align-items: center;//垂直居中
	padding: 0 30rpx;
	.name{
		font-size: 40rpx;
		font-weight: 600;
	}
}
</style>