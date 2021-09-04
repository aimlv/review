import {
    ADD_COUNTER,ADD_TO_CART
} from './mutations-type'
export default{
        [ADD_COUNTER](state,payload){
            payload.counter ++
        },
        [ADD_TO_CART](state,payload){
            payload.checked = true;
            state.carList.push(payload)
        }
}