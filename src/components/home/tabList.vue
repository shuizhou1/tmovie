<template>
    <div class="tabWraper">
      <ul class="tabList">
        <li class="tabItem">
          <p class="iconWraper"><i class="icon fa fa-heartbeat"></i></p>
          <p class="textWraper textActive"><span class="text ">精选</span></p>
        </li>
        <li class="tabItem">
          <p class="iconWraper"><i class="icon fa fa-file-movie-o"></i></p>
          <p class="textWraper"><span class="text">选电影</span></p>
        </li>
        <li class="tabItem">
          <p class="iconWraper"><i class="icon fa fa-film"></i></p>
          <p class="textWraper"><span class="text">预告片</span></p>
        </li>
        <li class="tabItem">
          <p class="iconWraper"><i class="icon fa fa-comment-o"></i></p>
          <p class="textWraper"><span class="text">影评</span></p>
        </li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "tabList"
    }
</script>

<style scoped lang="less">
  .tabWraper {
    border: 1px solid #999;
    .tabList {
      display: flex;
      justify-content: space-around;
      align-items: center;
      /*height: 3rem;*/
      width: 100%;
      li {
        felx: 0 1 auto;
        /*border: 1px solid #888;*/
        text-align: center;
        p {
          margin-bottom: 0;
        }
        span {
          font-size: .75rem;
        }
        i {
          font-size: 1.25rem;
        }
        p.iconWraper {
          padding-top: .75rem;
        }
        p.textWraper {
          padding-bottom: .75rem;
        }
        p.textActive {
          border-bottom: 2px solid #ff4400;
        }
      }
    }
  }

</style>
