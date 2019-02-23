<template>
    <div class="home">
        <div class="banner">
            <mt-swipe :auto="4000">
                <mt-swipe-item
                v-for="img in swiperImgs"
                :key="img.id">
                <img :src="img.url" @click="toDetail(img.id)">
                </mt-swipe-item>
            </mt-swipe>	
        </div>
        <form>
            <input type="text" id="search" placeholder="商品搜索：请输入商品关键字">    
        </form>	
        <div class="home-series">
            <ul>
                <li  
                    v-for="img in swiperImgs"
                    :key="img.id"
                    v-if="img.id<3">
                    <router-link :to="`/detail/${img.id}`">
                        <img :src="img.url" alt="">
                    </router-link>
                </li>
            </ul>
        </div>	
        <div class="home-introduce-list">
            <router-link to="/"
                 v-for="img in swiperImgs"
                    :key="img.id"
                    v-if="1<img.id&&img.id<5">
                <img :src="img.url" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Home",
     data(){
        return{
            swiperImgs:[]
        }
    },
    created(){
        this.$http.getHomeSwiper()
            .then(res=>{
                this.swiperImgs=res.imgs;
            })
    },
    methods:{
        toDetail(id){
            this.$router.push("/detail/"+id)
        }
    }
}
</script>

<style scoped lang="scss">
    .banner{
		width: 100%;
		height: 170px;
		background: #ccc;
        margin-bottom: 5px;
		.mint-swipe img{
			width: 100%;
			height: 180px;
		}
	}
    form{
        padding: 10px;
        position: relative;
        label{
            position: absolute;
            top: 12px;
            background: yellow;
            width: 30px;
            height: 30px;
            bottom: 0;
            left: 10px;
        }
        input{
            width: 98%;
            height: 30px;
            top: 0;
            text-indent: 35px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    }
    .home-series{
        img{
            width: 100%;
            height:170px;
            display: block;
        }
    }
    .home-introduce-list{
        display: flex;
        justify-content:space-between;
        margin-bottom: 44px;
        a{
            width: 33%;
            img{
                width:100%;   
                height:87px;
            }
        }

    }
</style>


