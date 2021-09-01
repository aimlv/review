<template>
  <div class="main-tab">
          <tab-bar>
          <tab-bar-item path='/home' activeColor="deeppink"> 
                 <img src="~assets/image/tabbar/home.svg" alt="" slot="item-img">
                 <img src="~assets/image/tabbar/home_active.svg" alt="" slot="img-active">
                 <div slot="item-text">首页</div>
         </tab-bar-item>
          <tab-bar-item path='/category' activeColor="deeppink">
                 <img src="~assets/image/tabbar/category.svg" alt="" slot="item-img">
                 <img src="~assets/image/tabbar/category_active.svg" alt="" slot="img-active">
                 <div slot="item-text">分类</div>
         </tab-bar-item>
          <tab-bar-item path="/cart" activeColor="deeppink">
                 <img src="~assets/image/tabbar/shopcart.svg" alt="" slot="item-img">
                 <img src="~assets/image/tabbar/shopcart_active.svg" alt="" slot="img-active">
                 <div slot="item-text">购物车</div>
         </tab-bar-item>
          <tab-bar-item path='/profile' activeColor="deeppink">
                 <img src="~assets/image/tabbar/profile.svg" alt="" slot="item-img">
                 <img src="~assets/image/tabbar/profile_active.svg" alt="" slot="img-active">
                 <div slot="item-text">用户</div>
         </tab-bar-item>
        
        </tab-bar>
  </div>
</template>

<script>
import TabBar from 'common/tabbar/TabBar.vue'
import TabBarItem from 'common/tabbar/TabBarItem.vue'
export default {
  components: { TabBar, TabBarItem },
    name:"MainTabBar"
}
</script>

<style scoped>

img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
.main-tab{
    width: 100%;
    
}
</style>