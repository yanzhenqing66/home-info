<template>
	<div class="news">
		<nav-bar title="新闻列表"/>
		<div class="newlist">
			<ul>
				<li v-for="item in newsList" :key="item.id">
					<router-link :to="{name: 'detail', query: {id: item.id}}">
						<div class="pic">
							<img :src="item.newsPic" alt="">
						</div>
						<div class="content">
							<p class="title">{{item.ntitle}}</p>
							<p class="tag">
								<span class="clickNum">点击数: {{item.clickNum}}</span>
								<span class="pubTime">发表时间: {{item.pubTime}}</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newsList: []
			}
		},
		created() {
			this.$axios.get('newsList')
			.then(res => {
				this.newsList = res.data
			})
			.catch(err => {
				console.log('获取数据失败', err)
			})
		}
	}
</script>

<style scoped>
	.newlist a {
		display: flex;
		padding: 0.3125rem;
		border-bottom: 0.0625rem solid rgba(0, 0, 0, .2);
		background-color: #fff;
		border-radius: 0.3125rem;
	}
	
	.newlist .pic {
		width: 5rem;
		height: 5rem;
	}
	.newlist img {
		flex: 1;
		width: 100%;
		height: 100%;
	}
	.newlist .content {
		flex: 2;
		padding: 0.3125rem;
	}
	.newlist .content .title{
		font-size: 1rem;
		color: #111;
		font-weight: 550;
		/* 下面属性为 超出两行字体隐藏 */
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.newlist .content .tag {
		font-size: 0.5625rem;
		color: #FF8000;
		margin-top: 0.9375rem;
	}
	.newlist .content .tag .pubTime {
		margin-left: 0.5rem;
	}
</style>
