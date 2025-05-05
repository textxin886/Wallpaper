<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :items="item"/>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { apigetClassify } from '@/api/apis.js';

const classifyList = ref([])

// 专题精选
const getClassify = async () => {
	let res = await apigetClassify({
		pageSize:20,
	});
	classifyList.value = res.data.data;
	// console.log(classifyList.value)
};

getClassify()
</script>

<style lang="scss" scoped>
.classify{
	padding: 30rpx;
	display: grid;//网格布局
	grid-template-columns: repeat(3,1fr);//3列，1fr表示平均分配
	grid-gap: 30rpx;//网格间距
}
</style>
