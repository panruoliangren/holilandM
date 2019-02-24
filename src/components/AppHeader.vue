<template>
    <div class="app-header">
        <h1>
            <router-link to="/" class="logo"></router-link>
        </h1>
        <ul class="header-right" :class="{'noshow':isNone1}">
            <li>
                <router-link to="/login">登陆</router-link>|
            </li>
            <li>
                <router-link to="/register">注册</router-link>
            </li>
        </ul>
        <ul class="header-right" :class="{'noshow':isNone2}">
            <li>
                <router-link to="">欢迎！</router-link>|
            </li>
            <li>
                <router-link to="" @click.native="quit">退出</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import{
    mapMutations
}from 'vuex'

export default {
    name:"AppHeader",
    data(){
        return{
            isNone1:false,
            isNone2:true
        }
    },
    created(){
        if(this.$store.state.isLogin){
            this.isNone1=true
            this.isNone2=false
        }else{
            this.isNone1=false
            this.isNone2=true
        }
    },
    methods:{
        ...mapMutations(['modifyLoginState']),
        quit(){
            window.localStorage.removeItem('loginUsername')
            window.localStorage.removeItem('token')       
            this.modifyLoginState(false)
            this.isNone1=false
            this.isNone2=true
        }
         
    }
}
</script>

<style lang="scss">
    .app-header{
        height:60px;
        h1{
        float: left;
        margin-left: 10px;       
            .logo{
                width: 80px;
                height: 60px;            
                display: block;
                background: url("../assets/logo.png") no-repeat center;
                background-size: 100%;
            }         
        }
        ul{
            float: right;
            margin-right: 10px;
            li{
                float: left;
                height: 60px;
                line-height: 70px;
                color:#6dc2df;             
                a{
                    color:#6dc2df;
                    padding: 0 5px;
                }
            }
        }
        .noshow{
            display: none;
        }
    }
</style>