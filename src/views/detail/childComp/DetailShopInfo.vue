<template>
<div>
     <div id="shopImg">
     <img :src="shop.shopLogo" alt="">
     <span>{{shop.name}}</span>
  </div>
  <div class="shopSell">
      <div class="left">
          <div class="left-one">
              <div class="sells">{{shop.csells}}</div>
              <div class="fonts">总销量</div>
          </div>
          <div>
              <div class="goods">{{shop.cgoods}}</div>
              <div class="fonts">全部宝贝</div>
          </div>
          
      </div>
        <div class="right"  v-if="shop.score !== undefined && shop.score.length >0">
            <!-- 在模板的HTML中使用length前需要先加一层v-if 判断，防止在元素渲染到页面的时候没有数据报错 -->
          <div v-for="index in shop.score.length" :key="index">
          <span class="describe">{{shop.score[index-1].name}}</span>
          <span class="score">{{shop.score[index-1].score.toFixed(2)}}</span>
          <span class="high" :class="{'col':shop.score[index-1].isBetter == true}">{{shop.score[index-1].isBetter ? "高":"低"}}</span> 
        </div>
      </div>
      
  </div>
   <div class="store">
       <a href="javascript:;">进店逛逛</a>
   </div>
</div>
 
  
</template>

<script>
export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            
            
        }
    }   
}
</script>

<style scoped>
#shopImg{
   margin: 20px 0;
}
#shopImg img{
    width: 50px;
    height: 50px;
    border-radius: 50%; 
    
}
#shopImg span{
    margin-left: 10px;
    font-size: 16px;
}
.shopSell{
   height: 50px;
}
.shopSell{
    display: flex;
    justify-content: space-around;
}
.left{
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 16px;   
    padding-right: 30px;
}
.left .fonts{
    font-size: 12px;
    color: #000;
}
.left-one{
    margin-right:15px;
}
.right{
    border-left: 1px solid #ccc;
    padding-left: 50px;
    text-align: left;
}

.score{
    margin: 8px;
}
.high{
    background-color: green;
    color: #fff;
}
.col{
    background-color: red;
}
.store{
    width: 100px;
    height: 20px;
    margin: 20px auto;
    text-align: center;
    background-color: #ccc;
    border-radius: 5px;
    line-height: 20px;
    
}
</style>