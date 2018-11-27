//vuex的mutations模块
import{
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default{
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_FOODCATEGORYS](state, {foodCategorys}){
    state.foodCategorys = foodCategorys
  },
  [RECEIVE_SHOPLIST](state, {shopList}){
    state.shopList = shopList
  }
}
