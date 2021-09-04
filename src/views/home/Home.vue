<template>
  <div class="home">
    <nav-tab>
      <nav-tab-item class="nav-tab-item">
        <div slot="center" class="center">优衣库</div>
      </nav-tab-item>
    </nav-tab>
    <tab-bar-control :tabBarControl="['流行','新款','精选']" class="control-home" @changePage="tabClick" ref="homeControl1" v-show="istabControl"></tab-bar-control>
    <scroll class="wrapper" ref="scroll" :probe-type="2" @scroll="backTopClick" @pullingUp="loadMore" :pull-up-load="true">
      <swiper>
      <swiper-item v-for="(item,index) in banners" :key="'A'+index">
        <a :href="item.link"></a>
        <img :src="item.image" alt="" @load="swiperLoad">
      </swiper-item>
    </swiper>
    <recommend :recommend-goods="recommends"></recommend>
    <feature></feature>
    <tab-bar-control :tabBarControl="['流行','新款','精选']" class="control-home" @changePage="tabClick" ref="homeControl2" v-show="!istabControl"></tab-bar-control>
    <goods :goods="goods[currentType].list"></goods>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowImg"></back-top>
  </div>
</template>

<script>
import NavTab from 'components/common/nav/NavTab.vue'
import NavTabItem from 'components/common/nav/NavTabItem.vue'
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {Swiper,SwiperItem} from 'components/common/swipe/index.js'
import Recommend from 'views/home/childNode/Recommend.vue'
import Feature from './childNode/Feature.vue'
import TabBarControl from 'components/content/TabBarControl.vue'
import Goods from 'components/content/goods/Goods.vue'
import Scroll from 'components/common/scroll/Scroll.vue'

import {itemListenerMixin,backTopListenerMixin} from '../../common/mixIn'


export default {
  components: { NavTab,NavTabItem,Swiper,SwiperItem,Recommend,Feature, TabBarControl, Goods, Scroll},
    name:"Home",
    mixins:[itemListenerMixin,backTopListenerMixin],
    data(){
      return {
        banners : [],
        recommends : [],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        currentType:'new',
        tabControlOffsetTop:0,
        isLoad:false,
        istabControl:false,
        saveY:0,
        itemListener:null
      }
    },
    created(){
      this.getHomeMultidata()

      this.getHomeGoods("pop")
      this.getHomeGoods("new")
      this.getHomeGoods("sell")

    },
    destroyed(){
      this.$bus.$off('this.itemListener')
    },
    mounted(){
      
    },
    destroyed(){
      console.log('home-destroyed');
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,500)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getSaveY()
    },
    methods:{
      /*
      这是处理事件的方法
      */
     swiperLoad(){
      //  console.log(111);
      if(!this.isLoad){
        this.tabControlOffsetTop = this.$refs.homeControl2.$el.offsetTop - 40
        this.isLoad = true
      }
     },
     tabClick(index){
      //  console.log(111);
       switch(index){
         case 0 : 
           this.currentType = 'new';
           break
         case 1: 
           this.currentType = 'pop'
           break
         case 2:
           this.currentType = 'sell'
           break
       }
       //这一步很重要，用来保证两个选中的选择框相同。通过组件中的currentIndex
       this.$refs.homeControl2.currentIndex = index;
       this.$refs.homeControl1.currentIndex = index; 
     },
     backTopClick(position){
       //控制置顶的效果
       this.isShowImg = (-position.y) > 1000
       //控制tabControl显示隐藏的效果
       this.istabControl = (-position.y) >= this.tabControlOffsetTop
     },
     loadMore(){
      //  console.log(111);
       this.getHomeGoods(this.currentType)
     },
      

      /*
      这个发送网络请求的方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page +1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
}
</script>

<style scoped>
.home{
  position: relative;
  height: 100vh;
  /* padding-top: 44px; */
}
.nav-tab-item{
    
    background-color: var(--color-tint);
    /* 设置定位是用原生js的滚动，better-scroll不需要设置 */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; */
}
.center{
  /* text-align: center;
  line-height: 44px; */
  color: #fff;
}
.control-home{
  position: sticky;
  top: 40px;
  z-index: 2;
}
.wrapper{
  height: calc(100% - 49px);
  overflow: hidden;
  
}
</style>