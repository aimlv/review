<template>
<div>
    <div class="haha" v-if="goodsSize.sizes && goodsSize.sizes.length > 0">
       <div v-for="index in goodsSize.sizes[0].length" :key="index" class="goodsSize">
           
           <!-- 不同v-for循环的相同键导致此警告。您可以为不同的v-for循环使用不同的键来避免这种情况。所以:Key要设置不同的值 -->
            <div v-for="(item,index) in goodsSize.sizes[0][index-1] " :key="'B'+index">{{item}}</div>
       </div>
   </div>
       <div v-for="(item,index) in goodsSize.infos" :key="'A'+index" class="message">
         <span class="key">{{item.key}}</span>
         <span class="value">{{item.value}}</span>
    </div>  
    
</div>
   
</template>

<script>
export default {
    name:"DetailGoodsSize",
    props:{
        goodsSize:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.haha{
    box-shadow: 0px 1px 2px rgba(0,0,0,.1);
    margin: 10px 0;
}
.goodsSize{
    display: flex;
    justify-content: center;
    margin-left: 10px;
    
}
.goodsSize div{
    flex:1;
}
.goodsSize div:nth-child(2){
    margin-left: 50px;
}
.message{
    display: flex;
    border-bottom: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
}
.message span{
    flex: 1;
}
.key{
    margin-left: 10px;
    
}
.value{
    margin-left: -150px;
    
    color:#e86f84;
}
</style>