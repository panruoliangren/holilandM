<template>
    <div class="registerform" action="">
        <mt-field label="用户名" placeholder="请输入手机号" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-field type="password" placeholder="请再次输入密码" label="确认密码" v-model="password1">
        </mt-field>
        <mt-button @click="registerbtn" class="registerbtn" type="primary">立即注册</mt-button>
       
        <router-link to="login"><mt-button class="registerbtn" type="default">已有账号，去登陆</mt-button></router-link>
        <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        <div class="showdiv"> {{showerr}}</div>
       
        </mt-popup>
        
        
    </div>
</template>

<script>

export default {
    name:"Register",
    data(){
       return {
            username:"",
            email:"",
            password:"",
            password1:"",
            popupVisible: false,
            showerr:""
        }
    },
    methods:{
        registerbtn(){
            let flag = true
            if(!(/^1[34578]\d{9}$/.test(this.$data.username))){
                flag = false
                this.showerr = "用户名错误"
                this.popupVisible = true
            }else if(!(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(this.email))){
                flag = false
                this.showerr = "请输入正确的邮箱"
                this.popupVisible = true
            }else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password))){
                flag = false
                this.showerr = "密码不合规"
                this.popupVisible = true
            }else if(this.password != this.password1){
                flag = false
                this.showerr = "两次密码输入不一致"
                this.popupVisible = true
            }
            
            if(flag){
                this.$http.postRegister({})
                .then(res=>{
                    console.log(res)
                    this.popupVisible = true
                    this.showerr = "注册成功"
                    setTimeout(()=>{
                        this.$router.push({name:'login'})
                    },2000)
                }) 
            }
        }
        
    }
}
</script>

<style lang="scss">
    .registerform {
        margin-top: 1em;
        .registerbtn {
            width: 98%;
            margin-left: 1%;
            margin-top: 1em;
        } 
        .mint-popup {
            width: 10em;
            height: 10em;
            line-height: 10em;
            text-align: center;
            border-radius: 2em;
            border: 0.1em solid #fff;

        }
    }
    
</style>
