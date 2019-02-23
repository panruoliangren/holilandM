import axios from "axios";
import { Indicator,Toast} from 'mint-ui';

const ajax=axios.create({
    // baseURL:" https://www.easy-mock.com/mock/5c6a98a0b350a069f379de3e"
    baseURL:"http://rap2api.taobao.org/app/mock/126671"
})

// 添加一个请求拦截器
ajax.interceptors.request.use(config=>{
    Indicator.open({
        text:"loading...",
        spinnerType:'fading-circle'
    })
    return config
})

// 添加一个响应拦截器
ajax.interceptors.response.use(res=>{
    Indicator.close()
    if(res.data.res_code===1){   
        return res.data.res_data; 
    }else{
        Toast({
            message:'提示：数据请求异常',
            position:'bottom',
            duration:1000
        })
    }
})

// 请求首页轮播图数据
export const getHomeSwiper=()=>{
    // 返回基于promise的api对象，调用时要then
    return ajax.get('/api/swiperimgs')
}
//详情页轮播图
export const getDetailSwiper=()=>{
    return ajax.get('/api/swiperimgs')
}

// 请求分类列表数据
// export const getCategoryList=()=>{
//     return ajax.get('/api/categorylist')
// }

// 请求商品列表数据
export const getProductList=(categoryId)=>{
    return ajax.get('/api/productlist?categoryId='+categoryId)
}

export const getDetail=(id)=>{
    return ajax.get('/api/detail')
}