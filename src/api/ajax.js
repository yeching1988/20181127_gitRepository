/*可以发ajax请求的函数，包装axios,返回值是promise对象*/
import axios from 'axios'
export default function ajax(url, data={}, method='GET'){
  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET'){
      let queryStr = ''
      Object.keys(data).forEach(key => {
        const value = data[key]
        queryStr = queryStr + `${key}=${value}&`
      })
      if(queryStr!==''){// username=tom&password=123&
        queryStr = queryStr.substring(0, queryStr.length-1)// username=tom&password=123
        url = url + '?' + queryStr // /register/?age=18&sex=man
      }
      promise = axios.get(url)
    }else{
      promise = axios.post(url, data)
    }
    promise.then(response => {
      //异步请求成功
      console.log('11111',response)
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
