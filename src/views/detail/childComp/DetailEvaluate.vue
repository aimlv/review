<template>
  <div>
      <div class="head" v-if="evaluate.list && evaluate.list.length > 0 ">
          <div>用户评价</div>
          <div>更多</div>
      </div>
      <div v-if="evaluate.list && evaluate.list.length > 0">
            <img :src="evaluate.list[0].user.avatar" alt="" class="headImg">
            <span class="uname">{{evaluate.list[0].user.uname}}</span>
            <div class="content">{{evaluate.list[0].content}}</div>
            <span class="time">{{evaluate.list[0].created | showDate}}</span>
            <span>{{evaluate.list[0].style}}</span>
            <div>
                <span v-for="(item,index) in evaluate.list[0].extraInfo" :key="'D'+index" class="user">{{item}}</span>
            </div>
            <img v-for="(item,index) in evaluate.list[0].images" :key="'F' + index" :src="item" alt="" class="userImg">
      </div>
                
  </div>
</template>

<script>
import {formatDate} from "../../../common/utils"
export default {
    name:"DetailEvaluate",
    props:{
        evaluate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        showDate(value){
            //1.把时间戳转换成Date对象
            const date = new Date(value * 1000)
            //2.将date 进行格式化操作
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.head{
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 10px;
}
.head div:last-child{
    text-align: right;
}
.head div{
    flex: 1;
}

.headImg{
    width: 30px;
    
    margin-left: 10px;
    border-radius: 50%;
}
.uname{
    margin-left: 10px;
    font-size: 16px;
}
.content{
    margin: 10px 0 10px 10px;
}
.time{
    margin: 10px;
}
.user{
    margin: 0 10px;
}
.userImg{
   /* transform: scale(0.3); */
   width: 100px;
   height: 100px;
}
</style>