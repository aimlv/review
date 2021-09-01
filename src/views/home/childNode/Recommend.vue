<template>
  <div class="recommend-goods"> 
      <div v-for="(item,index) in recommendGoods" :key="'B' +index " class="recommend">
          <a :href="item.link"></a>
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Recommend",
    props:{
        recommendGoods:null
    }
}
</script>

<style scoped>
.recommend-goods{
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .2);
}
.recommend{
flex: 1;
}
.recommend img{
    
    width: 80px;
    height: 80px;
}
</style>