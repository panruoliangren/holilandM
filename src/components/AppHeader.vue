<template>
    <div class="app-header">
        <h1>
            <router-link to="/" class="logo"></router-link>
        </h1>
        <ul class="header-right">
            <li>
                <router-link to="/">登陆</router-link>|
            </li>
            <li>
                <router-link to="/">注册</router-link>|
            </li>
            <li>
                <router-link to="/cart">购物车</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"AppHeader",
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
    }
</style>