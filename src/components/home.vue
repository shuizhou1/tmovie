<template>
  <div class="home">
    <theader></theader>
  </div>

</template>

<script>
import theader from './theader'
export default {
  name: "home",
  data () {
    return {
      locationId: this.$store.state.locationId
    }
  },
  created () {
    this.$http.get('/api/PageSubArea/HotPlayMovies.api',{
      params: {
        locationId: this.locationId
      }
    }).then( (req) => {
      console.log(req)
    })
  },
  components: {
    theader
  }
}
</script>

<style scoped>
  .home {
    position: relative;
  }

</style>
