<template>
  <div>
      <nav-tab>
          <nav-tab-item>
              <div slot="left" class="left">
                  <img src="~assets/image/detail/back.svg" alt="" @click="backHome">
              </div>
              <div slot="center" class="center">
                  <div v-for="(item,index) in title" :key="'h'+ index" :class="{active:currentIndex === index}" @click="changeColor(index)">{{item}}</div>
              </div>
          </nav-tab-item>
      </nav-tab>
  </div>
</template>

<script>
import NavTab from 'components/common/nav/NavTab.vue'
import NavTabItem from 'components/common/nav/NavTabItem.vue'

export default {
  components: { NavTab, NavTabItem },
    name:"DetailNavItem",
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        changeColor(index){
            this.currentIndex = index
            this.$emit('changePostion',index)
        },
        backHome(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.center{
    display: flex;
    justify-content: space-around;
}
.active{
    color: red;
}
.left{
    text-align: center;
}
.left img{
vertical-align: middle; 
text-align: center;
width: 20px;
}
</style>