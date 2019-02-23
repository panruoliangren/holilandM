<template>
    <div class="cart-item">
        <dl>
            <dt class="item-img"><img :src="img"></dt>
            <dd><p class="item-title">{{title}}</p></dd>
        </dl>
        <div class="do-cart">
            <p class="item-price">{{price|moneyFormat}}</p>
            <div class="item-amount">
                <mt-button class="del-btn" @click="delCartItem(id)">删除</mt-button>
                <mt-button class="mis-btn" :disabled="amount<=1" @click="minusAmount(id)">-</mt-button>
                <mt-button class="num">{{amount}}</mt-button>
                <mt-button class="add-btn" @click="addAmount(id)">+</mt-button>
            </div>
        </div>     
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    name:"CartItem",
    // 删除按钮的id
    props:['img','title','price','amount','id'],
    methods:{
         ...mapMutations(['addAmount','minusAmount','delCartItem'])
    }
}
</script>

<style scoped lang="scss">
    .cart-item{
        padding: 15px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        dl{
            display: flex;
            dt{
                img{
                    width: 75px;
                    height: 75px;
                    float: left;
                }
            }
            dd{
                padding: 4px 12px;
                .item-title{
                    font-size: 14px;
                }
            }
        }
        .do-cart{
            .item-price{
                text-align: right;
                font-size: 14px;
                margin-bottom: 20px;
            }
            .item-amount{
                button{
                    height: 25px;
                    line-height: 25px;
                    color:black;
                    font-size: 14px;
                    float: left;
                    text-align: center;
                    font-size: 14px;
                }
                .mis-btn,.num,.add-btn{
                    border: 1px solid #ccc;
                }
                .mis-btn,.add-btn{
                    width: 25px;
                }
                .num{
                    width: 50px;
                }
                .del-btn{
                    color:#ccc;
                    margin-right: 5px;
                }
                
            }
        }
    }

</style>