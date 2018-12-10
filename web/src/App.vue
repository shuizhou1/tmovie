<template>
  <div id="app">
  <router-view class="main"></router-view>
  <tfooter class="tfooter"></tfooter>
  </div>

</template>

<script>
import tfooter from './components/tfooter'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  created () {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
  },
  components: {
    tfooter
  }
}
</script>

<style lang="less">
 .main {
   margin-bottom: 6.5rem;
 }
</style>
