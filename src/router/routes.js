import Tabbar from "@/components/Tabbar"
import AppHeader from "@/components/AppHeader"

const Home = () => import("@/pages/Home.vue")
const Category = () => import("@/pages/Category.vue")
const Cart = () => import("@/pages/Cart.vue")
const Mine = () => import("@/pages/Mine.vue")
const CategoryList = () => import("@/pages/CategoryList.vue")
const Detail = () => import("@/pages/Detail.vue")
const Login = () => import("@/pages/Login.vue")
const Register = () => import("@/pages/Register.vue")
const routes=[
    {
      path: '/',
      redirect:"/home",
      meta:{
          isNav:false
      }
    },{
        path:"/home",
        name:"home",
        components:{
            header:AppHeader,
            main:Home,
            tabbar:Tabbar
        },
        meta:{
            navTitle:"主页",
            isNav:true
        }
    },{
        path:"/category",
        name:"category",
        components:{
          header:AppHeader,
          main:Category,
          tabbar:Tabbar
        },
        meta:{
          navTitle:"产品",
          isNav:true
        },
        children:[
          {
            path:":categoryId",
            name:"categorylist",
            components:{
              default:CategoryList
            }
          }
        ]
      },{
        path:"/cart",
        name:"cart",
        components:{
          main:Cart,
          tabbar:Tabbar
        },
        meta:{
          navTitle:"购物车",
          isNav:true,
          isAuthCheck:true  //需要有权限才能查看
        }
      },{
        path:"/mine",
        name:"mine",
        components:{
          main:Mine,
          tabbar:Tabbar
        },
        meta:{
          navTitle:"个人中心",
          isNav:true,
          isAuthCheck:true  
        }
      },{
        path:"/detail/:id",
        name:"detail",
        components:{
          main:Detail,
          tabbar:Tabbar
        },
        meta:{
          isNav:false
        }
      },{
        path:"/login",
        name:"login",
        components:{
          main:Login,
          tabbar:Tabbar
        },
        meta:{
          isNav:false
        }
      },{
        path:"/register",
        name:"register",
        components:{
          main:Register,
          tabbar:Tabbar
        },
        meta:{
          isNav:false
        }
      }
  ]

  export default routes;