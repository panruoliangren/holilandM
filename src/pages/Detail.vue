<template>
	<div class="detail">
		<div class="detail-swiper">
			<mt-swipe :auto="4000">
			  <mt-swipe-item
			  	v-for="img in swiperImgs"
			  	:key="img.id"
                v-if="img.id<4">
				<img :src="img.url" class="banner">
			  </mt-swipe-item>
			</mt-swipe>		
		</div>
        <dl >
            <dt class="info">
                <p class="title">{{pro.title}}</p>
                <p class="price">￥{{pro.price}}</p>
            </dt>
            <dd>
                <p>规格：14x14cm 适2-4人 18x18cm 适4-8人</p>
            </dd>
        </dl>
		<div class="introduce">
			<img :src="pro.img" alt="">
		</div>
		<div class="addButton">
			<mt-button type="primary" @click.native.stop="addCartItem(pro)">加入购物车</mt-button>
            <mt-button type="primary" @click.native.stop="goCart">结算</mt-button>
		</div>
	</div>
</template>

<script>
	import {
        mapState,
        mapActions,
        mapMutations,
        mapGetters
    } from "vuex"

	export default{
		name:"Detail",
		data(){
			return{
				swiperImgs:[],
				title:"",
				price:"",
                introduce:"",
                pro:{}
			}
		},	
		methods:{
            ...mapMutations(['addCartItem']),
            goCart(){
                this.$router.push("/cart")
            }
		},
		created(){           
            let id=this.$route.params.id
			this.$http.getDetailSwiper()
				.then(res=>{
					 this.swiperImgs=res.imgs;
                }),
			this.$http.getDetail(id)
				.then(res=>{
                    this.pro={
                        id,
                        price:res.list[0].price,
                        title:res.list[0].title,
                        img:res.list[0].introduce
                    }
                })	
		}
	}
</script>

<style scoped lang="scss">
    .detail-swiper {
		width: 100%;
		height: 270px;
		background: #ccc;
		.banner{
			width:100%;
			height:100%;
		}
	}
    dl{
        color:#666;
        font-size: 14px;
        .info{
            padding:10px;
            line-height: 3px;
            line-height:20px;
            border-bottom: 1px solid #ccc;
            .price{
                color:#2093cc;
            }
            .introduce{
                margin-left:5em;
            }
        }
        dd{
            padding:10px;
        }
	}
    .introduce{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .addButton{
        width: 100%;
        bottom: 44px;
        position: fixed;
        display: flex;
        justify-content: space-around;
        background: white;
        .mint-button.mint-button{
            height: 28px;
            width: 150px;
            float: right;
            margin: 10px 0;
            color: #666;
            font-size: 14px;
            background: #ffff00;
        }
    }
	
</style>