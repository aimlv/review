<template>
    <div>
        <div class="content">
          <slot></slot>
        </div>
    </div>
      

</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll :null
        }
    },
    mounted(){
        this.scroll = new BScroll(document.querySelector('.wrapper'),{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        })
        this.scroll.on('scroll',position=>{
            this.$emit('scroll',position)
        })
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
        // console.log(this.scroll);
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        },
        refresh(){
           this.scroll && this.scroll.refresh()
        },
        getSaveY(){
            return this.scroll.y
        }
    }
}
</script>

<style scoped>
.wrapper{
    height: 100vh;
}

</style>