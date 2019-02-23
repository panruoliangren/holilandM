export default{
    // 统计总数
    totalAmount(state){
        return state.cart.reduce((result,curr)=>result+curr.amount,0)        
    },
    // 统计总价格
    totalPrice(state){
        return state.cart.reduce((result,curr)=>result+curr.amount*curr.price,0)
    }
}