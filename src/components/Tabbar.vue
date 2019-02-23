<template>
    <div class="tabbar" @click="changeSubNav()">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item
                v-for="nav in navs"
                :key="nav.path"
                :id="nav.name">
                <!-- <img slot="icon" src="../assets/100x100.png" :class="{'noShow':nav.meta.isNone}"> -->
                {{nav.meta.navTitle}}              
            </mt-tab-item>
            <ul class="sub-nav" :class="{'noshow':isSubNav}">
                <li v-for="item in subNav" :key="item.id" >
                    <router-link :to="`/category/${item.id}`">{{item.name}}</router-link>
                </li>
            </ul>
        </mt-tabbar>       
    </div>
</template>

<script>
import routes from "../router/routes"
export default {
    name:"Tabbar",
    data(){
        return{
            selected:this.$route.name,
            navs:routes.filter(curr=>curr.meta.isNav),
            subNav:[
                {id:"1",name:'经典系列'},
                {id:"2",name:'儿童系列'},
                {id:"3",name:'真爱系列'},
                {id:"4",name:'尊爱系列'},
                {id:"5",name:'和风软点'}
            ],
            isSubNav:true
        }
    },
    watch:{
        selected(newValue,oldValue){
            if(newValue=="category"){              
                this.isSubNav=true
            }else{
                this.isSubNav=false;
                this.$router.push({name:newValue})              
            }
        }
    },
    methods:{
        noSubNav(){
           this.isSubNav=true;
        },
        changeSubNav(){
            this.isSubNav=!this.isSubNav;
        }
    }
}
</script>

<style scoped lang="scss"> 
    .mint-tabbar{       
        .mint-tab-item{
            position:relatve;
            padding: 16px;   
            border-top:1px solid #ccc;       
        }
        .sub-nav{
            left:25%;
            bottom:45px;
            position:absolute;
            border:1px solid #ccc;
            border-radius:5px;
            background:white;
            li{
                padding:0 10px;
                
                a{
                    color:#626262;
                    float:left;
                    padding:10px;
                    border-bottom:1px solid #ccc;
                }
            }
        }
        .noshow{
            display:none;
        }
    }
    
    
</style>
