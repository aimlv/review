import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop.vue'
export const  itemListenerMixin = {
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemListener = ()=>{refresh()}
        this.$bus.$on('ItemImgLoad',this.itemListener)
    }
}

export const backTopListenerMixin = {
    components:{
        BackTop
    },
    data(){
        return {
            isShowImg:false
        }
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0,0,500)
         }
    }
}