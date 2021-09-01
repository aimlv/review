<template>
  <div>
      <div>{{Img.desc}}</div>
      <div v-if="Img.detailImage !== undefined && Img.detailImage.length > 0">
           <div v-for="item in Img.detailImage[0].list" :key="item">
           <img :src="item" alt="" class="whole" @load="imgLoad">
        </div>      
      </div>
              
 </div>
</template>

<script>
export default {
    name:"DetailShow",
    data(){
        return{
            countIndex : 0,
            imageLength : 0
        }
    },
    props:{
        Img:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(){
            //判断所有的图片都加载完了，那么进行一次回调就行了
            if(++this.countIndex === this.imageLength){
                this.$emit("refreshPage")
            }
        }
    },
    watch:{
        //watch 可以检测当前组件的属性的变化，所以Img()中的Img必须是要监测的属性名，这里跟props中的属性Img对应
            Img(){
                this.imageLength = this.Img.detailImage[0].list.length
                // console.log(this.imageLength);
            }
        }
}
</script>

<style scoped>
.whole{
    width: 100%;
}
</style>