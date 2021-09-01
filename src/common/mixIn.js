import {debounce} from './utils'
export const  itemListenerMixin = {
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh,500)
        this.itemListener = ()=>{refresh()}
        this.$bus.$on('ItemImgLoad',this.itemListener)
    }
}