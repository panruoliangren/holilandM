import {Toast} from 'mint-ui';
export default{
    // 购物车数组中保存"加入购物车"的商品对象
    addCartItem(state,item){
        const has=state.cart.some(curr=>curr.id==item.id)                     
        if(has){
            state.cart=state.cart.filter(curr=>{
                if(curr.id==item.id)
                    curr.amount+=1
                return true
            })
        }else{
            item.amount=1
            state.cart.push(item)
        }
        Toast({
            message: '添加成功',
            duration: 1000
          });
    },
    // 加数量
    addAmount(state,id){
        state.cart=state.cart.filter(curr=>{
            if(curr.id==id)
                curr.amount+=1
            return true  
        })
    },
    // 减数量
    minusAmount(state,id){
        state.cart=state.cart.filter(curr=>{
            if(curr.id==id)
                curr.amount-=1
            return true  
        })
    },
    //删除
    delCartItem(state,id){
        state.cart=state.cart.filter(curr=>{
            if(curr.id!=id)
                return true 
        })
    },
    // 登陆验证保持一致
    modifyLoginState(state,isLogin){
        state.isLogin=isLogin
    }
}