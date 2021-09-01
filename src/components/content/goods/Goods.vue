<template>
  <div class="goods">
    <goods-item v-for="(item,index) in goods" :key="'D' +index" :goods-item="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
  components: { GoodsItem },
    name:"Goods",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
}
</script>

<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 4px;
}
</style>