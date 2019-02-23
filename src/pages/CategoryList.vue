<template>
    <div class="cartgory-list">
        <dl class="product"
            v-for="pro in productList"
            :key="pro.id"
            @click="toDetail(pro.id)">
            <dt class="img"><img :src="pro.img"></dt>
            <dd>
                <p class="title">{{pro.title}}</p>
                <p class="price">{{pro.price}}
                    <mt-button class="addCart" @click.native.stop="addCartItem(pro)">+</mt-button>
                </p>
            </dd>
        </dl>   
    </div> 
</template>
<script>

const cache={}

import {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
} from "vuex"

export default {
    name:"CategoryList",
    data(){
        return{
            productList:[]
        }
    },
    created(){
        this.getCategoryListData();
    },
    methods:{
        ...mapMutations(['addCartItem']),
        
        // 查询数据
        getCategoryListData(categoryId){
            if(Object.keys(cache).includes(categoryId)){
                this.productList=cache[categoryId]
            }else{
                // 发起ajax请求
                this.$http.getProductList(categoryId)
                    .then(res=>{
                        this.productList=res.list
                        cache[categoryId]=res.list
                    })
            }
            
        },
        toDetail(id){
            this.$router.push("/detail/"+id)
        }
    },
    //导航守卫
    beforeRouteEnter(to,from,next){
        next(vm=>{
            vm.getCategoryListData(vm.$route.params.categoryId)
        })
    },
    beforeRouteUpdate(to,from,next){
        this.getCategoryListData(to.params.categoryId)
        next()
    }
}
</script>

<style scoped lang="scss">
    .cartgory-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;     
        margin-bottom: 100px; 
        .product{
            width: 150px;
            margin-top: 20px;
            border:1px solid #eaeaea;
            dt{
                img{
                    width: 150px;
                }
            }
            dd{
                p{
                    height:26px;
                    line-height: 26px;   
                    font-size: 14px;  
                    margin:0 6px;  
                    position: relative;            
                    .addCart{
                        width: 33px;
                        height: 33px;
                        text-align: center;
                        border-radius: 50%;
                        color: white;
                        background-color: #16dd27;
                        position: absolute;
                        right:0px;
                        bottom:5px;
                    }
                }
                .price{
                    color:#2093cc;
                }
            }
        }
    }
</style>