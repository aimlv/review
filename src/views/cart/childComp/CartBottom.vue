<template>
  <div class="bottom-bar">

          <div class="left">
              <!-- 先判断is-check，再去判断click事件 -->
              <check-input class="checkall" @click.native="SelectAll" ref="check" :is-check="isSellectAll"></check-input>
              <span class="select">全选</span>
               <span class="totle-price">总价格:￥{{totlePrice}}</span>
          </div>
           
      <div class="right">
            
            <span class="calculation" >去计算({{count}})</span>
      </div>        
  </div>
</template>

<script>
import CheckInput from './CheckInput.vue'
import {mapGetters} from 'vuex'
export default {
    name:"CartBottom",
    components:{
        CheckInput
    },
    computed:{
        ...mapGetters(['carList']),
        totlePrice(){
            return this.carList.filter(item=>{
                return item.checked}).reduce((pre,item)=>{
                    return pre + item.price * item.counter
                },0).toFixed(2)
        },
        count(){
            return this.carList.filter(item=>{
                return item.checked;
            }).length
        },
        isSellectAll(){
            if(this.carList.length == 0) return false
            return !this.carList.filter(item=>!item.checked).length
        }
    },
    methods:{
        SelectAll(){
            if(this.isSellectAll){
                this.carList.forEach(ele => {
                    return ele.checked =false;
                });
            }else{
                this.carList.forEach(ele=>{
                    return ele.checked = true;
                })
            }
        }
    }
        
}
</script>

<style scoped>
.bottom-bar{
    background-color:#eee;
    height: 40px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    line-height: 40px;
}

.checkall{
    margin: 4px 5px;
}
.totle-price{
    margin-left: 20px;
    padding: 0 10px;
}
.calculation{
    display: flex;
    flex: 1;
    width: 100px;
    height: 40px;
    background-color: red;
    color: #fff;
    text-align: center;
    font-size: 14px;
    justify-content: center;
}
.left{
    display: flex;
    line-height: 40px;
}

</style>