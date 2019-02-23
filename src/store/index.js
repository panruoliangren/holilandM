import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"

Vue.use(Vuex)

// 修改购物车后保存localStorage
const saveStorage=store=>{
    store.subscribe((mutation,state)=>{
        window.localStorage.setItem('cart',JSON.stringify(state.cart))
    })
}

// store对象,可全局访问保存在里面的数据，Object对象中查看
export default new Vuex.Store({
    strict:true,
    state,
    getters,
    mutations,
    plugins:[saveStorage]
})