<template>
  <div class="cart">
      <nav-tab>
        <nav-tab-item class="nav-tab-item">
          <div slot="center">购物车({{isShowLength}})</div>
        </nav-tab-item>
      </nav-tab>
      <scroll class="wrapper" ref="scroll" :pull-up-load="true">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import NavTab from 'components/common/nav/NavTab.vue'
import NavTabItem from 'components/common/nav/NavTabItem.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import {mapGetters} from 'vuex'
import CartList from './childComp/CartList.vue'
import CartBottom from './childComp/CartBottom.vue'
export default {
  components: { NavTab, NavTabItem,CartList,Scroll, CartBottom},
    name:"Cart",
    computed:{
      ...mapGetters(['isShowLength'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
}
</script>

<style scoped>
.nav-tab-item{
  background-color:var(--color-tint);
  color: #fff;
}
.cart{
    height: 100vh;
}
.wrapper{
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
}
</style>