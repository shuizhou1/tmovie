<template>
    <div class="onSell">
      <ul class="movieList" ref="movieList">
        <li class="movieItem" v-for="(item,index) in movieArr" :key="index" @click="sendMovieId(item.movieId)">
          <div class="imgWraper">
            <span class="movieRating">{{item.ratingFinal}}</span>
            <img :src="item.img" alt="" class="movieImg">
          </div>
          <p class="textWraper">
            <span class="movieName">{{item.titleCn}}</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "onShell",
  data () {
    return {
      movieArr: null
    }
  },
  computed: {
    locationId () {
      return this.$store.state.locationId
    }
  },
  methods: {
    sendMovieId (id) {
      this.$router.push({
        path: '/movieDetails',
        name: 'movieDetails',
        query: {
          movieId: id
        }
      })
    }
  },
  created () {
    this.$http.get('/api/PageSubArea/HotPlayMovies.api', {
      params: {
        locationId: this.locationId
      }
    }).then( (req) => {
      this.movieArr = req.data.movies
      this.$refs.movieList.style.width = this.movieArr.length*9.5 + 'rem'
    })
  }
}

</script>

<style scoped lang="less">
.onSell {
    margin: 0;
    overflow-x:auto;
    .movieList {
  li.movieItem {
      padding: 0 .2rem;
      float: left;
      text-align: center;
      p {
        margin-bottom: 0;
      }
    .imgWraper {
      position: relative;
      height: 15rem;
      .movieImg {
        height: 15rem;
        width: 9rem;
      }
      .movieRating {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 3px 6px;
        color: #fff;
        font-size: .5rem;
        background: yellowgreen;
      }
    }
    .textWraper {
      color: yellowgreen;
      font-size: .75rem;
    }
  }
  }
}

</style>
