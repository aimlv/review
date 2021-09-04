<template>
  <div>
      <div class="big-box">
            <check-input class="check-box" :is-check="product.checked" @click.native="clickCheck"></check-input>
            <div class="box-img"> 
                <img :src="product.image" alt="">
                </div>
            <div class="right-box">
                <div class="title">{{product.title}}</div>
                <div class="desc">{{product.desc}}</div>
                <div class="price">￥{{product.price}}</div>
                <div class="count">x{{product.counter}}</div>
            </div>
            
        </div>
  </div>
</template>

<script>
import CheckInput from './CheckInput.vue'

export default {
    name:"CartListItem",
    components:{CheckInput},
        props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        clickCheck(){
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
.big-box{
    display: flex;
}
.right-box{
    flex: 1;
    margin: 10px 10px 10px 10px;  
}

.right-box{
    overflow: hidden;
    position: relative;
}
.box-img img{
    width: 80px;
    height: 100px;
    margin: 10px 10px 10px 5px;
    border-radius: 8px ;
}
.check-box{
    margin-top: 50px;
}
.title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #000;
}
.desc{
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.price{
    position: absolute;
    bottom: 0;
    left: 0;
    color: red;
    font-size: 16px;
}
.count{
    position: absolute;
    bottom: 0;
    right:0;
    font-size: 16px;
}
</style>