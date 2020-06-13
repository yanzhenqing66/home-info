<template>
	<div class="navbar">
		<div class="back" @click="goBack">
			<img src="@/assets/images/back.svg" alt="">
		</div>
		<div class="title"> {{title}} </div>
	</div>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			title: {
				type: String,
				default () {
					return {}
				}
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.navbar {
		width: 100%;
		height: 1.875rem;
		line-height: 1.875rem;
		background-color: #eee;
		display: flex;
		position: relative;
	}

	.back {
		float: left;
		margin-left: 0.625rem;
		width: 0.875rem;
		height: 0.875rem;
		margin-top: 0.125rem;
	}

	.back img {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 0.875rem;
		color: #515151;
		font-weight: 550;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
