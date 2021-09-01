<template>
   <div id="bottom-nav">
       <div class="customer active" path='/littleDetail'>
           <img src="~assets/image/bottomNav/kefu.svg" alt="">
           <div>客服</div>
       </div>
       <div class="store">
           <img src="~assets/image/bottomNav/store-front.svg" alt="">
           <div>店铺</div>
       </div>
       <div class="collector">
           <img src="~assets/image/bottomNav/shoucang.svg" alt="">
           <div>收藏</div>
       </div>
       <div class="shopCar" @click="addClick"> 
           <a href="javascript:;">加入购物车</a>
       </div>
       <div class="purchase">
           <a href="javascript:;">购买</a>
       </div>
      
   </div>
</template>

<script>
export default {
    name:"DetailBottomNav",
    methods:{
        addClick(){
            this.$emit('addGoods')
        }
    }
}
</script>

<style scoped>
    #bottom-nav{
        position: fixed;
        left: 0;
        right: 0;
        /* bottom: 49px; */
        background-color:#fff;
        height: 49px;
        display: flex;
    }
    .shopCar {
        width: 145px;
        text-align: center;
        line-height: 49px;
        background-color: yellow;  
    }
    .shopCar a,.purchase a{
        font-size: 14px;
        color: #fff;
    }
    .purchase{
        width: 80px;
        background-color: red;
        text-align: center;
        line-height: 49px;
    }
    .customer, .store, .collector{
        flex: 1;
        margin-top: 6px;
        text-align: center;
    }
    .active{
        color: pink;
    }
</style>