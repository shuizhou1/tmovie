<template>
  <div class="home">
    <theader class="tHeader"></theader>
    <carousel class="carousel"></carousel>
    <div class="tabWraper">
      <div class="tabList">
        <router-link to="/thome/feature" class="tabItem feature">
          <p class="iconWraper">
            <i class="icon fa fa-heartbeat"></i>
          </p>
          <p class="textWraper">
            <span class="text">精选</span>
          </p>
        </router-link>
        <router-link to="/thome/selectMovie" class="tabItem select">
          <p class="iconWraper">
            <i class="icon fa fa-file-movie-o"></i>
          </p>
          <p class="textWraper">
            <span class="text">选电影</span>
          </p>
        </router-link>
        <router-link to="/thome/advance" class="tabItem advance">
          <p class="iconWraper">
            <i class="icon fa fa-film"></i>
          </p>
          <p class="textWraper">
            <span class="text">预告片</span>
          </p>
        </router-link>
        <router-link to="/thome/review" class="tabItem review">
          <p class="iconWraper">
            <i class="icon fa fa-comment-o"></i>
          </p>
          <p class="textWraper">
            <span class="text">影评</span>
          </p>
        </router-link>
      </div>
    </div>
    <!--<tab-list></tab-list>-->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import theader from "./theader";
import carousel from "./carousel";

export default {
  name: "home",
  components: {
    theader,
    carousel
  }
};
</script>

<style scoped lang="less">
.home {
  background: aliceblue;
  width: 100%;
  height: 100%;
  .carousel {
    margin-top: calc(40px + 25 * (100vw - 436px) / 1100);
  }
  .tabWraper {
    width: 100%;
    margin-bottom: 2px;
    background: #f9f9f9;
    .tabList {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .tabItem.feature {
        color: #ff6600;
      }
      .tabItem.select {
        color: #ff1000;
      }
      .tabItem.advance {
        color: darkgoldenrod;
      }
      .tabItem.review {
        color: greenyellow;
      }
      .tabItem {
        flex: 0 1 auto;
        text-align: center;
        p {
          margin-top: 1.3rem;
        }
        span {
          font-size: 3.6rem;
        }
        i {
          font-size: 6rem;
        }
        p.iconWraper {
          padding-top: 2rem;
        }
        p.textWraper {
          padding-bottom: 2rem;
          color: #555;
        }
      }
      .tabItem.router-link-exact-active {
        p.textWraper {
          color: inherit;
        }
      }
    }
  }
}
</style>
