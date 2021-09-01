<template>
  <div>
      <swiper class="swiper-detail">
          <swiper-item v-for="(item,index) in topImages" :key="'a'+index" >
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swipe/index'


export default {
  components: { Swiper,SwiperItem },
  data(){
      return {
          
      }
  },
  props:{
      topImages:{
          type:Array,
          default(){
              return []
          }
      }
  }

}
</script>

<style scoped>
.swiper-detail{
    height: 300px;
    overflow: hidden;
}
</style>