<template>
  <div class="home">
    <theader class="tHeader"></theader>
    <carousel class="carousel"></carousel>
    <tabList></tabList>
    <feature></feature>
  </div>

</template>

<script>
import theader from './theader'
import carousel from './carousel'
import tabList from './tabList'
import feature from './feature/featureMainPage'
export default {
  name: "home",
  components: {
    theader,
    carousel,
    tabList,
    feature
  },created () {
  }
}
</script>

<style scoped>
  body {
    /*padding-top: 2rem;*/
    /*height: 100%;*/
    /*width: 100%;*/
  }
  .home {
    background: aliceblue;
    /*position: relative;*/
    width: 100%;
    height: 100%;
  }

</style>
