<template>
  <div class="category">
      <nav-tab>
        <nav-tab-item class="nav-tab">
          <div slot="center">商品分类</div>
        </nav-tab-item>
      </nav-tab>
      
      <div class="content">
        <nav-left :list="result"  @selectItem="skipCategory" class="nav-left"></nav-left>
      <scroll class="wrapper" :data=[categoryData] :pull-up-load="true">
          <category-img :subcategorys="showSubcategorys"></category-img>
          <tab-bar-control @changePage="changePage" :tabBarControl="['综合', '新品', '销量']"></tab-bar-control>
          <category-detail :category-detail="showCategoryDetail"></category-detail>
      </scroll>
         
      </div> 
  </div>
</template>

<script>
import NavTab from 'components/common/nav/NavTab.vue'
import NavTabItem from 'components/common/nav/NavTabItem.vue'
import {POP,SELL,NEW} from '../../common/const'
import {getCategory,getCategoryImg,getSubcategoryDetail} from 'network/category.js'
import NavLeft from './childComp/NavLeft.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CategoryImg from './childComp/CategoryImg.vue'
import {changePageMixin} from '../../common/mixIn'
import CategoryDetail from './childComp/CategoryDetail.vue'
export default {
  components: { NavTab, NavTabItem,NavLeft, Scroll, CategoryImg,CategoryDetail },
    name:"Category",
       data(){
      return{
        result:[],
        categoryData:{},
        currentIndex:-1
      }
    },
    mixins:[changePageMixin],
    created(){
      this._getCategory()
      
    },
    computed:{
      showSubcategorys(){
        if(this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subCategorys; 
      },
      showCategoryDetail(){
        if (this.currentIndex === -1) return []
		    return this.categoryData[this.currentIndex].subCategorysDetail[this.currentType]
      }
    },
    methods:{
      /*事件响应方法 */
      skipCategory(index){
        this._getSubcategory(index)
      },
      /*网络请求方法 */
      _getCategory(){
        //请求分类中的左侧边栏数组
        getCategory().then(res=>{
        this.result = res.data.category.list;
        console.log(this.result);
        //请求第一个分类数据
        for(let i = 0;i<this.result.length;i++){
          //初始化数据，拿到数据存放到变量中
          this.categoryData[i] = {
            subCategorys:{},
            subCategorysDetail : {
            'pop':[],
            'sell':[],
            'new':[]
            },
          }
        }
        this._getSubcategory(0);
      });
      },
      _getSubcategory(index){
        this.currentIndex = index;
        const maitKey =  this.result[index].maitKey;
        getCategoryImg(maitKey).then(res=>{
          this.categoryData[index].subCategorys = res.data;
          this.categoryData = {...this.categoryData}
          this._getSubcategoryDetail(POP);
          this._getSubcategoryDetail(SELL);
          this._getSubcategoryDetail(NEW);
        })
      },
      _getSubcategoryDetail(type){
        const miniWallkey = this.result[this.currentIndex].miniWallkey;
        getSubcategoryDetail(miniWallkey,type).then(res=>{
          this.categoryData[this.currentIndex].subCategorysDetail[type] = res;
          this.categoryData = {...this.categoryData}
        })
        
      }
    }
}
</script>

<style scoped>
.category{
  height:100vh;
}
.nav-tab{
  background-color:var(--color-tint);
  color: #fff;
  font-size: 16px;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
}
.wrapper{
  height:100%; 
  width: 100%;
}
</style>