<template>
    <div class="detailWraper">
      <div class="movieDetails" v-for="(item,index) in movieDetailsArr" :key="index">
        <div class="imgBox"><img :src='item.basic.img' alt=""></div>
        <div class="massegeBox" >
          <p><span class="titleCn">{{item.basic.name}}</span></p>
          <p><span class="titleEn">{{item.basic.nameEn}}</span></p>
          <p><span class="movieLen">{{item.basic.mins}}</span></p>
          <p><span class="movieType">{{item.basic.type[0]}}</span></p>
          <p><span class="releaseDate">{{item.basic.releaseDate}}</span></p>
          <p><span class="movieBrief">{{item.basic.story}}</span></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "movieDetails",
    data () {
      return {
        movieId: this.$route.query.movieId,
        locationId: this.$store.state.locationId,
        movieDetailsArr: []
      }
    },
    created () {
      console.log(this.locationId);
      this.$http.get('/details/movie/detail.api', {
        params: {
          locationId: this.locationId,
          movieId: this.$route.query.movieId
        }
      })
        .then( (req) => {
          this.movieDetailsArr.push(req.data.data)
          console.log(req.data.data);
        } )
        .catch((err) => {
          console.log(err);
        })
    }
}
</script>

<style scoped lang="less">
  .movieDetails {
    padding: 3rem 5rem;
    border: 1px solid #888;
    display: flex;
    .imgBox {
      flex: 2;
      padding-right: 2rem;
      img {
        width: 100%;
      }
    }
    .massegeBox {
      flex: 3;
      p {
        padding-bottom: .3rem;
      }
    }
  }
</style>
