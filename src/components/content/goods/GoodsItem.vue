<template>
  <div class="good-item">
    <img v-lazy="showImage" alt="" class="good-item-img" @load="imgLoad" @click="skipDetai">
    <div class="info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span> 
      <img src="~assets/image/shoucang.svg" alt="" class="cfan-img">
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name:"GoodsItem",
    props:{
      goodsItem:{}
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('ItemImgLoad')
        
      },
      skipDetai(){
        this.$router.push('/detail/'+ this.goodsItem.iid)
        
      }
    },
    computed:{
      showImage(){
         return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img 
      }
    }
}
</script>

<style scoped>
.good-item{
 width: 48%;
 padding-bottom: 30px;
}
.good-item-img{
width: 100%;
border-radius: 5px;
}
.info p{
    margin: 0;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
}
.info{
  font-size: 13px;
  text-align: center;
}
.price{
    color: var(--color-high-text);
    
}
.cfan-img{
  width: 20px;
  height: 15px;
  margin: 0 2px 0 10px;
  vertical-align: middle;
}
</style>