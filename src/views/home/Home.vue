<template>
	<div class="home">
		<!-- 轮播图 -->
		<mt-swipe :auto="3000" class="swiper">
			<mt-swipe-item v-for="item in pics" :key="item.id">
				<img :src="item.pic" alt="选择此商品">
			</mt-swipe-item>
		</mt-swipe>
		
		<div class="list">
			<ul>
				<li v-for="item in grids" :key="item.id">
					<router-link :to="item.router">
						<img :src="item.picSrc" alt="点击进入">
					</router-link>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import imgUrl1 from '@/assets/images/home_nav/news.svg';
	import imgUrl2 from '@/assets/images/home_nav/image-text.svg';
	import imgUrl3 from '@/assets/images/home_nav/commodity.svg';
	import imgUrl4 from '@/assets/images/home_nav/contact.svg';
	import imgUrl5 from '@/assets/images/home_nav/message.svg';
	import imgUrl6 from '@/assets/images/home_nav/more.svg';
	
	var grids = [
		{id: 1, picSrc: imgUrl1, title: '新闻资讯', router: {name: 'news.list'}},
		{id: 2, picSrc: imgUrl2, title: '图文分享', router: {name: 'news.list'}},
		{id: 3, picSrc: imgUrl3, title: '商品展示', router: {name: 'goods.list', params: {page: 1}}},
		{id: 4, picSrc: imgUrl4, title: '资讯', router: {name: 'news.list'}},
		{id: 5, picSrc: imgUrl5, title: '联系我们', router: {name: 'news.list'}},
		{id: 6, picSrc: imgUrl6, title: '更多', router: {name: 'news.list'}},
	]
	
	export default {
		data() {
			return {
				pics: [],
				grids: grids
			}
		},
		created() {
			this.$axios.get('lunbo')
				.then(res => {
					this.pics = res.data;
				})
				.catch(err => {
					console.log(err)
				})
		}
	}
</script>

<style scoped>
	.swiper {
		width: 100%;
		height: 12.5rem;
		overflow: hidden;
		position: relative;

	}

	.swiper img {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.list {
		margin-top: 1.25rem;
		width: 100%;
	}
	
	.list ul {
		display: flex;
		flex-wrap: wrap;
	}
	.list li {
		width: 33%;
		height: 6.25rem;
		text-align: center;
		font-size: 0.75rem;
		white-space: nowrap;
	}
	.list li a {
		display: inline-block;
		width: 3.125rem;
		height: 3.125rem;
		margin: 0 auto;
	}
	.list li a img {
		width: 2.5rem;
	}
</style>
