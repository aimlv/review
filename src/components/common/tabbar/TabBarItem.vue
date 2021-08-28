<template>
  <div class="tab-item" @click="changpage">
      <div v-if="!isActive">
          <slot name="item-img"></slot>
      </div>
      <div v-else>
          <slot name="img-active"></slot>
      </div>
      
      <div :style='isCurrentColor'><slot name="item-text" ></slot></div>
  </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    methods:{
        changpage(){
            this.$router.push(this.path)
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!== -1
            },
        isCurrentColor(){
            return this.isActive? {color:this.activeColor}:{}
        }
    }
    
}
</script>

<style scoped>
.tab-item{
    flex: 1;
    text-align: center;
}
</style>