<template>
    <div class="loginform">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button @click="login" class="lgbtn" type="primary">登陆</mt-button>
        <router-link to="register"><mt-button class="lgbtn" type="danger">注册</mt-button></router-link>
        <!-- <mt-button @click="logoing" class="lgbtn" type="primary">登陆</mt-button> -->
        <mt-popup
            v-model="popupVisible"
            popup-transition="popup-fade">
            <div class="showdiv"> {{showerr}}</div> 
        </mt-popup>
    </div>
</template>

<script>
import{
    mapMutations
}from 'vuex'

export default {
    name:"Login",
    data(){
        return{
            username:"",
            password:"",
            showerr:"",
            popupVisible: false
        }
    },
    methods:{
        ...mapMutations(['modifyLoginState']),
        login(){
            this.$http.postLogin({})
                .then(res=>{
                    console.log(res.username,res.token)
                    if(this.username == res.username&&this.password == res.password){
                        this.modifyLoginState(true)
                        window.localStorage.setItem("loginUsername",res.username)
                        window.localStorage.setItem("token",res.token)
                        this.$router.push({name:this.$route.params.from?this.$route.params.from.name:name})
                    }else{
                        this.showerr = "用户名或密码错误"
                        this.popupVisible = true
                    }
                })
        }      
    }
}
</script>

<style lang="scss">
    
    .loginform {
        margin-top: 1em;
        .lgbtn {
            width: 98%;
            margin-left: 1%;
            margin-top: 1em;
        }
        .mint-popup{
            width: 10em;
            height: 10em;
            line-height: 10em;
            text-align: center;
            border-radius: 2em;
        }
    }

</style>
