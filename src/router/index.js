import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Vip from '../views/vip/Vip.vue'
import Cart from '../views/cart/Cart.vue'
import Search from '../views/search/Search.vue'
import NewsList from '../views/home/childComps/news/Newslist.vue'
import NewsDetail from '../views/home/childComps/news/NewsDetail.vue'
import GoodsList from '../views/home/childComps/goods/GoodsList.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home
	},
	{
		path: '/vip',
		name: 'vip',
		component: Vip
	},
	{
		path: '/cart',
		name: 'cart',
		component: Cart
	},
	{
		path: '/search',
		name: 'search',
		component: Search
	},
	// 新闻列表
	{
		path: '/news/list',
		name: 'news.list',
		component: NewsList
	},
	{
		path: '/news/detail',
		name: 'detail',
		component: NewsDetail
	},
	// 商品列表
	{
		path: '/goods/list/:page',
		name: 'goods.list',
		component: GoodsList
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
