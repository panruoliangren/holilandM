<template>
    <div class="cart">
        <div class="cart-list">
            <CartItem  
                v-for="item in cart"
                :key="item.id"
                v-bind="item">
            </CartItem>
        </div>
        <div class="total-amount">
            <span>商品数量：<em>{{totalAmount}}</em></span>
            <span>总价格：<em>{{totalPrice|moneyFormat}}</em></span>
            <mt-button class="next">下一步</mt-button>
        </div>
    </div>
</template>
<script>
// 映射
import {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
} from "vuex"

import CartItem from "@/components/CartItem"

export default {
    name:"Cart",
    components:{
        CartItem
    },
    computed:{
        ...mapState(['cart']),
        ...mapGetters(['totalAmount','totalPrice'])
    }
}
</script>

<style scoped lang="scss">
.cart{
    .total-amount{
        width: 100%;
        height: 50px;
        background: #ededed;
        position: fixed;
        display: flex;
        justify-content: space-around;
        align-items: center;
        bottom: 45px;
        font-size: 13px;
        span{
            em{
                color: #2093cc;
            }
        }
        .next{
            height: 25px;
            width: 68px;
            font-size: 13px;
            background: #ffff00;
   
        }
    }
}
</style>