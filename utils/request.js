//封装uni.request
const BASE_URL = 'https://tea.qingnian8.com/api/bizhi/'
export function request(config={}) {//传入的是一个数组
	//数组结构
	let{url,
		method='GET',
		header={},
		data={}
	}=config
	header['access-key'] = "335455"
	return new Promise((resolve, reject) => {
		// resolve成功的回调
		// reject失败的回调
		uni.request({
			url: BASE_URL+url,
			method: method,
			header: header,
			data: data,
			success: (res) => {
				if(res.data.errCode===0){
				resolve(res)
				}
				else if(res.data.errCode===400){
					uni.showModal({
						title:'提示',
						content:res.data.errMsg,
						showCancel:false,
						
					})
				reject(res.data)
				}else{
					uni.showModal({
						title:res.data.errMsg,
						icon:'none'
						
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})



	})
}