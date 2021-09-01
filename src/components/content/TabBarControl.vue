<template>
  <div class="tab-bar-control">
      <div v-for="(item,index) in tabBarControl" :key="'c' + index" class="control" :class="{active:currentIndex === index}" >
          <span class="control-span" @click="changePage(index)">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabBarControl",
    props:{
        tabBarControl:[]
    },
    data(){
        return {
            currentIndex : 0
        }
    },
    methods:{
        changePage(index){
            this.currentIndex = index
            this.$emit('changePage',index)
        }
    }
}
</script>

<style scoped>
.tab-bar-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    font-size: 15px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}
.control {
    flex: 1;
}

.active{
    color: red;
}
.active span{
    border-bottom: 2px solid red;
    padding: 3px 5px;
}
</style>