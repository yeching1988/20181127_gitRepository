/*包含n个接口请求函数的模块
每个函数的返回值是promise
 */
import ajax from './ajax'
const baseUrl = '/api'

// 1.根据经纬度获取位置详情(#1根据经纬度获取位置详情)
export const reqAddress = (longitude, latitude) => ajax(baseUrl + `/position/${latitude},${longitude}`)
//2.获取食品分类列表
export const reqFoodCategorys = () => ajax(baseUrl + '/index_category')
//3.根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => ajax(baseUrl + '/shops',{latitude, longitude})
