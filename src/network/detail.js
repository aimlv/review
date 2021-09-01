import {request} from './request'

export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Good{
    constructor(itemInfo,columns,shopInfo){
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.highPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = shopInfo.services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop{
    constructor(ShopInfo){
        this.cgoods = ShopInfo.cGoods
        this.csells = ShopInfo.cSells
        this.name = ShopInfo.name
        this.score = ShopInfo.score
        this.shopLogo = ShopInfo.shopLogo
    }
}
    
export class GoodsSizeInfo{
    constructor(info,rule){
        this.image = info.image ? info.image[0] : ''
        this.infos = info.set
        this.sizes = rule.tables
    }
}