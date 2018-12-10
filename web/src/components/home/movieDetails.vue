<template>
  <div class="detailWraper">
    <div class="movieDetails" v-for="(item,index) in movieDetailsArr" :key="index">
      <div class="imgBox">
        <img :src="item.basic.img" alt>
      </div>
      <div class="massegeBox">
        <p>
          <span class="titleCn">{{item.basic.name}}</span>
        </p>
        <p>
          <span class="titleEn">{{item.basic.nameEn}}</span>
        </p>
        <p>
          <span class="movieLen">{{item.basic.mins}}</span>
        </p>
        <p>
          <span class="movieType">{{item.basic.type[0]}}</span>
        </p>
        <p>
          <span class="releaseDate">{{item.basic.releaseDate}}</span>
        </p>
        <p>
          <span class="movieBrief">{{item.basic.story}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movieDetails",
  data() {
    return {
      movieId: this.$route.query.movieId,
      locationId: this.$store.state.locationId,
      movieDetailsArr: [],
      movieTrailer: null
    };
  },
  methods: {
    getmovieDetails() {
      this.$http
        .get("/details/movie/detail.api", {
          params: {
            locationId: this.locationId,
            movieId: this.movieId
          }
        })
        .then(req => {
          this.movieDetailsArr.push(req.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getmovieTrailer() {
      this.$http
        .get("/api/Movie/Video.api", {
          params: {
            movieId: this.movieId,
            pageIndex: 1
          }
        })
        .then(req => {
          this.movieTrailer = req.data.videoList[0];
          console.log(req.data.videoList[0]);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getmovieDetails();
  }
};
</script>

<style scoped lang="less">
.movieDetails {
  padding: 6rem 10rem;
  border: 1px solid #888;
  display: flex;
  .imgBox {
    flex: 2;
    padding-right: 4rem;
    img {
      width: 100%;
    }
  }
  .massegeBox {
    flex: 3;
    p {
      padding-bottom: 0.6rem;
    }
  }
}
</style>
