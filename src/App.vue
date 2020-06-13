<template>
	<div id="app">
		<mt-header fixed title="首页">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		
		<main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
	import MainTabBar from './components/common/tabbar/MainTabBar.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			MainTabBar
		},
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .2s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	  opacity: 0;
	}
</style>
