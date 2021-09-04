<template>
   <div class="check">
       <img v-if="isCheck" class="checked" src="~assets/image/checkimage/checkmark.svg" alt="" :isCheck1=isCheck>
       <img  v-else src="~assets/image/checkimage/checkmark1.svg" alt="">
   </div>
</template>

<script>
export default {
    name:"CheackInput",
    props:{
        isCheck:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            isCheck1 : null
        }
    }
}
</script>

<style scoped>
.check img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
 }   
.check{
    width: 20px;
    height: 20px;
    margin-left: 2px;
    
}
.checked{
    background-color: red;
}

</style>