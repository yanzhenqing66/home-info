<template>
	<div class="detail">
		<nav-bar title="新闻详情"></nav-bar>
		<h3>{{newsDetail.ntitle}}</h3>
		<p>{{newsDetail.content}}</p>
		<comment class="comment" :comment="comment"></comment>
	</div>
</template>

<script>
	import Comment from '../../../../components/content/comment/Comment.vue'
	export default {
		name: 'NewsDetail',
		data() {
			return {
				newsDetail: {},
				comment: []
			}
		},
		components: {
			Comment
		},
		created() {
			let id = this.$route.query.id;
			this.$axios.get(`newsList/?{id}`)
			.then(res => {
				this.newsDetail = res.data[0];
			})
			.catch(err => {
				console.log('新闻详情请求失败', err)
			})
		}
	}
	
</script>

<style scoped>
	.comment {
		margin-top: 1.25rem;
	}
</style>
