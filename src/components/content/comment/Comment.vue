<template>
	<div class="comment">
		<div class="content">
			<h3>发表评论</h3>
			<textarea class="textCont" v-model="commentContent">
			</textarea>
			<mt-button type="primary" @click="commentHandler">提交评论</mt-button>
			<ul class="commCont">
				<li v-for="item in comment" :key="item.id">{{item.comment}}</li>
			</ul>
			<mt-button type="primary" @click="loadMore(page)">点击加载更多</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Comment',
		
		data() {
			return {
				comment: [],
				limitLen: 3,
				commentContent: ''
			}
		},
		methods: {
			commentHandler() {
				this.$axios.post('commentList', 'comment = ' + this.commentContent)
				.then(res => {
					this.commentContent = '';
					this.loadMore();
				})
				.catch(err => {
					console.log('评论出错', err)
				})
			},
			loadMore(page) {
				this.$axios.get(`commentList?_page=${this.page}&_limit=${this.limitLen}`)
				.then(res => {
					if (page) {
						this.comment = this.comment.concat(res.data)
					}else {
						this.comment = res.data
					}
					this.page ++;
					this.limitLen += 2;
					if (res.data.length === 0) {
						this.$toast('没有更多评论了')
					}
				})
				.catch(err => {
					console.log('加载更多失败', err)
				})
			}
		},
		created() {
			this.loadMore()
		}
	}
</script>

<style scoped>
	.comment {
		border: 0.0625rem solid rgba(0, 0, 0, 0.2);
	}
	.content {
		margin: 0 auto;
		padding: 0.3125rem;
	}
	.textCont {
		width: 100%;
		height: 3.125rem;
	}
	.commCont li{
		font-size: 0.875rem;
		margin-bottom: 1.5625rem;
		border-bottom: 0.0625rem solid rgba(0,0,0,.1);
	}
</style>
