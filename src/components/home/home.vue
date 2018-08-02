<template>
  <div class="home">
    <theader class="tHeader"></theader>
    <tabList></tabList>
    <feature></feature>
  </div>

</template>

<script>
import theader from './theader'
import tabList from './tabList'
import feature from './feature/featureMainPage'
export default {
  name: "home",
  components: {
    theader,
    tabList,
    feature
  }
}
</script>

<style scoped>
  .home {
    position: relative;
    background: aliceblue;
    .tHeader {
      position: fixed;
    }
  }

</style>
