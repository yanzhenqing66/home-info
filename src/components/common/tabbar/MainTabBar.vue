<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/images/tab/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/images/tab/homeC.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/vip">
      <img slot="item-icon" src="@/assets/images/tab/order.svg" alt="">
      <img slot="item-icon-active" src="@/assets/images/tab/orderC.svg" alt="">
      <div slot="item-text">VIP</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/images/tab/cart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/images/tab/cartC.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/search">
      <img slot="item-icon" src="@/assets/images/tab/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/images/tab/profileC.svg" alt="">
      <div slot="item-text">搜索</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from './TabBar.vue'
  import TabBarItem from './TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
