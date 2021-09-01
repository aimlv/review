<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
      <div class='goods'>{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span v-if="goods.discount" class="discount" >{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
          <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    name:"DetailFeature",
    data(){
        return {
            
        }
    }
    
}
</script>

<style scoped>
    .base-info{
        text-align: left;
        margin: 10px 5px;
    }
    .goods{
        font-size: 16px;
        color: #000;
    }
    .n-price{
        font-size: 25px;
        color: pink;
    }
    .o-price{
        font-size: 14px;
        text-decoration: line-through;
        margin: 0 5px;
    }
    .info-price{
        position: relative;
    }
    .discount{
        position: absolute;
        top: 0px;
        left: left;
        display: inline-block;
        width: 50px;
        height: 20px;
        color:#fff;
        font-size: 12px;
        background-color: rgb(241, 116, 137);
        text-align: center;
        border-radius: 10px;
        margin-bottom: 10px;
        line-height: 20px;
    }
    .info-other{
        display: flex;
        justify-content: space-between;
    }
    .info-other span{
        font-size: 14px;
        
    }
    .info-service{
        display: flex;
        justify-content: space-between;
    }
    .info-service img{
        width: 15px;
    }
    .info-service span{
        font-size:14px;
        margin-top: 10px;
    }
</style>