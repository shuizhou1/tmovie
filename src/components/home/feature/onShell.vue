<template>
    <div class="onSell">
      <ul class="movieList" ref="movieList">
        <li class="movieItem" v-for="(item,index) in movieArr" :key="index">
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
      locationId: this.$store.state.locationId,
      movieArr: null,
    }
  },
  created () {
    console.log(this.$refs);
    this.$http.get('/api/PageSubArea/HotPlayMovies.api', {
      params: {
        locationId: this.locationId
      }
    }).then( (req) => {
      console.log(req)
      this.movieArr = req.data.movies
      console.log(this.$refs);
      console.log(this.$refs.movieList);
      this.$refs.movieList.style.width = this.movieArr.length*9.4 + 'rem'
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
