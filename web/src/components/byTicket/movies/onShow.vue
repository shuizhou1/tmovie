<template>
  <div class="onShow">
    <ul class="onShow_list">
      <li class="onShow_listItem" v-for="(item,index) in movieArr" :key="index">
        <div
          class="imgBox"
          v-bind:style="{backgroundImage:`url(${item.img})`,  backgroundPosition:`center center`, backgroundSize: `100% 100%`, backgroundRepeat:'no-repeat'}"
        ></div>
        <div class="messageBox">
          <div class="left">
            <p class="movieName">
              <span>{{item.tCn}}</span>
            </p>
            <p class="movieDesc">
              <span>{{ item.commonSpecial}}</span>
            </p>
            <p class="movieActors">
              <span>{{ item.actors }}</span>
            </p>
          </div>
          <div class="right">
            <p>
              <span class="movieScore">{{ item.r}}</span>
            </p>
            <p>
              <a class="byTicket">购票</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "onShow",
  data() {
    return {
      movieArr: []
    };
  },
  methods: {
    getMovieList() {
      this.$http
        .get("/api/Showtime/LocationMovies.api", {
          params: {
            locationId: this.$store.state.locationId
          }
        })
        .then(res => {
          console.log(res);
          this.movieArr = res.data.ms;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getMovieList();
  }
};
</script>

<style scoped lang="less">
.onShow_list {
  padding: 0 0.5rem;
  .onShow_listItem {
    padding: 1rem 0;
    display: flex;
    border-bottom: 1px solid #ddd;
    .imgBox {
      flex: 0 0 18rem;
      height: 23rem;
    }
    .messageBox {
      position: relative;
      flex: 1 1 auto;
      padding-left: 1rem;
      font-size: calc(10px + 4 * (100vw - 436px) / 1100);
      .movieName {
        font-size: 14px;
        color: #333;
        margin-bottom: 10px;
      }
      .movieDesc {
        color: #007acc;
        font-size: 12px;
        margin-bottom: 20px;
      }
      .movieActors {
        color: #666;
        font-size: 10px;
      }
      .right {
        position: absolute;
        right: 10px;
        top: 0;
        text-align: center;
        .movieScore {
          color: yellowgreen;
          font-size: 16px;
          margin-bottom: 5px;
          display: inline-block;
        }
        .byTicket {
          color: #ff9900;
          padding: 2px 5px;
          display: inline-block;
          border: 1px solid #ff9900;
        }
      }
    }
  }
}
</style>
