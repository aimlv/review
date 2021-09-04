<template>
  <div>
      <div v-show="isShow" class="showMessage">{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    data(){
        return {
            isShow:false,
            message:''
        }
    },
    methods:{
        show(message,duration=2000){
            this.message = message;
            this.isShow = true;
            
            setTimeout(()=>{
                this.isShow = false;
                this.message = "";
               
            },duration)
        }
    },
    computed:{
        
    }
}
</script>

<style scpode>
.showMessage{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    background-color:rgba(0,0,0,0.8);
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 16px;
    padding: 0 10px;
    z-index: 999;
    border-radius: 10px;
}
</style>