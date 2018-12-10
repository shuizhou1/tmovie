<template>
    <div class="review">
        影评
    </div>
</template>

<script>
export default {
  name: "review",
  data () {
    return {
      commentArr: []
    }
  },
  methods: {
    getData () {
      this.$http.get('/details/movie/hotComment.api?movieId=228903'
      ).then( (res) => {

      }).catch((err) => {
        console.log(err);
      })
    }
  },
  created () {
    this.getData()
  }

}
</script>

<style scoped>

</style>
