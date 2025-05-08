<template>
	<view class="classList">
		<view class="loadingLayout" v-show="!classList.length && !noData">
			<!-- !classList.length长度为0的时候展示,,id如果对应有数据的话再显示 -->
			<uni-load-more status="loading"></uni-load-more>
		</view>
		<view class="content">
			<navigator :url="`/pages/preView/preView?id=${item._id}`" class="item" 
			v-for="item in classList" :key='item._id'>
				<!-- navigator页面链接 -->
			<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
		
		<view class="loadingLayout">
			<!-- !classList.length长度为0的时候展示,,id如果对应有数据的话再显示 -->
			<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
		</view>
		<view class=".safe-area-inset-bottom">
			<!--防遮挡安全区 -->
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { apiGetClassList } from '@/api/apis.js'
import { onLoad,onReachBottom } from '@dcloudio/uni-app'//接受上一个页面传入的参数
const classList = ref([])
const noData=ref(false)//没有数据了,都加载完了
const querParams = {
	pageNum:1,
	pageSize:12,
	classid:''
}//用于存储接受到的id
// 使用onLoad接收id
onLoad((e) => {
	let {id,name}=e
	// 导航栏标题改为name
	querParams.classid = id;
	uni.setNavigationBarTitle({
		title:name
	})
	getClassList()//复制完成后再进行执行
	
})
// 触底加载更多
onReachBottom(() => {
	if(noData.value) return;//如果等于false就不请求了
	querParams.pageNum++
	getClassList()
})
// 获取网络列表
const getClassList = async() => {
	let res = await apiGetClassList(querParams)
	classList.value = [...classList.value ,...res.data.data]//进行展开解构拼接
	// 是否没有数据了
	
	if(res.data.data.length<querParams.pageSize){
		noData.value = true
	}
	// 将数据存储到本地
	uni.setStorageSync("storgClassList",classList.value)
	// console.log(classList.value);
}
	



</script>

<style lang="scss" scoped>
	// 网格布局
	.classList{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;//间隙
		padding: 5rpx;
		.item{
			
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		
	}
	
	
	}

</style>
