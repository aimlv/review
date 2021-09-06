import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop.vue'
import TabBarControl from 'components/content/TabBarControl'
import {POP,SELL,NEW} from './const'
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
export const changePageMixin = {
    components:{
        TabBarControl
    },
    data(){
        return {
            currentType:POP
        }
    },
    methods:{
        changePage(index){
            switch(index){
                case 0:
                    this.currentType = POP
                    break;
                case 1:
                    this.currentType = SELL;
                    break;
                case 2:
                    this.currentType = NEW;
                    break;
            }
        }
    }
}