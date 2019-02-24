<template>
	<div class="mine">
		<header>
			<h3>拉拉</h3>
			<div class="own"></div>
		</header>
		<main>
			<ul>
				<li><router-link to=''><img src="@/assets/qb.jpg" alt="">我的钱包</router-link></li>
				<li><router-link to=''><img src="@/assets/dd.jpg" alt="">我的订单</router-link></li>
				<li><router-link to='' @click.native="quit()"><img src="@/assets/gz.jpg" alt="">退出</router-link></li>
			</ul>
		</main>
	</div>
</template>

<script>
	import{
		mapMutations
	}from 'vuex'
	export default {
		name: "Mine",
		computed:{
			count(){
				return this.$store.state.count
			}
		},
		methods:{
			...mapMutations(['modifyLoginState']),
			quit(){
				window.localStorage.removeItem('loginUsername')
				window.localStorage.removeItem('token')       
				this.modifyLoginState(false)
				this.$router.push("/home")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mine{
		header{
			width:100%;
			h3{
                height: 3em;
                color:#666;
                line-height: 3em;
				text-align: center;	
				font-size:2em;
			}
			.own{
				width:3em;
				height:3em;
				border-radius:50%;
				border:3em solid #6dc2df;
				margin:0 auto;
			}
		}
		main{
			margin-top:2em;
			border-top:1em solid #eee;
			ul{
				margin-top:2em;
				li{
                    a{
                        color:#666; 
                        img{width:1em;margin-right:2em;}
					    line-height:3em;
					    padding-left:2em;
                    }
					
				}
			}
		}
	}
</style>

