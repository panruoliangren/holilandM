// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import * as $http from './requests'

Vue.prototype.$http=$http

Vue.use(MintUI)

Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  if(to.name==='mine'){
    const r=Math.random()
    console.log(r)
    if(r>0.5){
      next("/home")
    }
  }
  next(); 
})
//全局Minxin
Vue.mixin({
  filters:{
    moneyFormat(v){
      return "￥"+Number(v).toFixed(2)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
