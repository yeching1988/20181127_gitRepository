<template>
  <div id="app">
    <!--显示当前路由组件-->
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShow"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FootGuide/FootGuide.vue";
import {reqAddress} from './api'
export default {
  async mounted(){
    //发异步ajax请求
    const result = await reqAddress('116.36867', '40.10038')
    console.log('result111=',result)//{code: 0,data:{}}
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
