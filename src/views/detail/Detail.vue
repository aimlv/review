<template>
  <div id="detail">
     <detail-nav-item :title="['商品','参数','评价','推荐']" @changePostion="scrollPosition" ref="nav"></detail-nav-item>
     <scroll class="wrapper" :pull-up-load="true" ref="scroll" @scroll="contentScroll" :probe-type="3">
     <detail-swiper :top-images="topImages"></detail-swiper>
     <detail-feature :goods="goods"></detail-feature>
     <detail-shop-info :shop="shop"></detail-shop-info>
     <detail-show :Img="Img" @refreshPage="imageLoad"></detail-show>
     <detail-goods-size :goods-size="goodsSize" ref="goodsSize"></detail-goods-size>
     <detail-evaluate :evaluate="evaluate" ref="evaluate"></detail-evaluate>
     <goods :goods="recommend" ref="recommend"></goods>
     </scroll>
  </div>
</template>

<script>
import DetailNavItem from './childComp/DetailNavItem.vue'
import {getDetailData,Good,Shop,GoodsSizeInfo,getRecommend} from 'network/detail.js'
import DetailSwiper from './childComp/DetailSwiper.vue'
import DetailFeature from './childComp/DetailFeature.vue'
import DetailShopInfo from './childComp/DetailShopInfo.vue'
import DetailShow from './childComp/DetailShow.vue'
import DetailGoodsSize from './childComp/DetailGoodsSize.vue'
import DetailEvaluate from './childComp/DetailEvaluate.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import Goods from 'components/content/goods/Goods.vue'
import {itemListenerMixin} from '../../common/mixIn'
import { debounce } from '../../common/utils'
export default {
  components: {DetailNavItem, DetailSwiper, DetailFeature, DetailShopInfo, DetailShow, DetailGoodsSize, DetailEvaluate, Scroll, Goods},
    name:"Detail",
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            Img:{},
            goodsSize:{},
            evaluate:{},
            recommend:[],
            itemListener:null,
            scrollY:[],
            getScrollY:null,
            currentCount:0
        }
    },
    created(){
        //1.获取参数iid 
        this.iid = this.$route.params.iid
        //2.请求详情数据
        getDetailData(this.iid).then(res=>{ 
            this.topImages.push(...res.result.itemInfo.topImages)
            const dat = res.result
            //1.商品基本信息
            this.goods = new Good(dat.itemInfo,dat.columns,dat.shopInfo)
            //2.店铺基本信息
            this.shop = new Shop(dat.shopInfo)
            //3.取出商品详情图片展示信息
            this.Img = dat.detailInfo
            //4.尺码信息
            this.goodsSize = new GoodsSizeInfo(dat.itemParams.info,dat.itemParams.rule)
            //5.用户评价
            this.evaluate = dat.rate
        })
         //3.请求推荐数据
        getRecommend().then(res=>{
           this.recommend = res.data.list
        })
        this.getScrollY = debounce(()=>{
            this.scrollY = []
            this.scrollY.push(this.$refs.nav.$el.offsetTop)
            this.scrollY.push(this.$refs.goodsSize.$el.offsetTop)
            this.scrollY.push(this.$refs.evaluate.$el.offsetTop)
            this.scrollY.push(this.$refs.recommend.$el.offsetTop)
        },50)
    },      
    methods:{
        contentScroll(position){
            const positionY = -position.y
            let length = this.scrollY.length
            for(let i=0;i<length;i++){
                if(this.currentCount != i && (0 < i < length - 1 && positionY >= this.scrollY[i] && positionY <this.scrollY[i+1]) ||this.currentCount != i && (i === length -1 && positionY >= this.scrollY[i])){
                    this.currentCount = i
                    this.$refs.nav.currentIndex = this.currentCount
                }
            }
        },
        imageLoad(){
            this.getScrollY()
            this.$refs.scroll.refresh()
            
        },
        scrollPosition(index){
            this.$refs.scroll.scrollTo(0,-this.scrollY[index],100)
        },
    },
    destoryed(){
        this.$bus.$off('this.itemListener')
    },
    mounted(){

    },
    mixins:[itemListenerMixin]
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
}
.wrapper{
    height: calc(100% - 44px);
    overflow: hidden;
}
</style>