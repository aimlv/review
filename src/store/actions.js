import {
    ADD_COUNTER,ADD_TO_CART
} from './mutations-type'
export default {
        dealCart(context,payload){
            return new Promise((resolve,reject)=>{
                let oldproduct = context.state.carList.find(item=>item.iid == payload.iid)
            if(oldproduct){
                    context.commit(ADD_COUNTER,oldproduct);
                    resolve('商品数量+1')
            }else{
                payload.counter = 1;
                context.commit(ADD_TO_CART,payload)
                resolve('添加商品到购物车')
            }
            })
        }
}