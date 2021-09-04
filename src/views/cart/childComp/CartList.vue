<template>
  <div>
              <div v-for="(item,index) in carList" :key="'a' +index " >
                 <cart-list-item :product="item"></cart-list-item>
              </div>       
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'


export default {
  components: {CartListItem},
    name:"CartList",
    computed:{
        ...mapGetters(['carList'])
    }
}
</script>

<style scoped>


</style>