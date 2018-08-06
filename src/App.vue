<template>
  <div id="app">
    <thome></thome>
    <div ref="box">
      <p class="txt"></p>
    </div>
  </div>

</template>

<script>
import thome from './components/home/home'
export default {
  name: 'App',
  data () {
    return {
     num : 1
    }
  },
  computed: {
    sum () {
      return this.num + 1
    }
  },
  components: {
    thome
  },
}
</script>

<style lang="less">
  body {
  }
</style>
