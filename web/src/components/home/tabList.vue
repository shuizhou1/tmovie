<template>
    <div class="tabWraper">
      <div class="tabList">
        <router-link class="tabItem feature" to="/thome/feature">
          <p class="iconWraper"><i class="icon fa fa-heartbeat"></i></p>
          <p class="textWraper"><span class="text ">精选</span></p>
        </router-link>
        <router-link class="tabItem select" to="/thome/selectMovie">
          <p class="iconWraper"><i class="icon fa fa-file-movie-o"></i></p>
          <p class="textWraper "><span class="text">选电影</span></p>
        </router-link>
        <router-link class="tabItem advance" to="/thome/advance">
          <p class="iconWraper"><i class="icon fa fa-film"></i></p>
          <p class="textWraper"><span class="text">预告片</span></p>
        </router-link>
        <router-link class="tabItem review" to="/thome/review">
          <p class="iconWraper"><i class="icon fa fa-comment-o"></i></p>
          <p class="textWraper"><span class="text">影评</span></p>
        </router-link>
      </div>
    </div>

</template>

<script>
    export default {
        // name: "tabList"
    }
</script>

<style scoped lang="less">
  .tabWraper {
    /*border: 1px solid #999;*/
    margin-bottom: 2px;
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
        /*color: #666;*/
        felx: 0 1 auto;
        text-align: center;
        p {
          margin-top: 1.3rem;
        }
        span {
          font-size: 2rem;
        }
        i {
          font-size: 4rem;
        }
        p.iconWraper {
          padding-top: 2rem;
        }
        p.textWraper {
          padding-bottom: 2rem;
          color: #555;
        }
      }
      .tabItem.router-link-active {
        p.textWraper {
          color: inherit;
        }
      }
    }
  }

</style>
