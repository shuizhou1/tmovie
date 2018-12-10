<template>
  <div class="byTicket_header">
    <div class="top">
      <div class="top_item">
        <span>广州</span>
      </div>
      <div class="top_item linkBorder">
        <router-link to="/byTicket/movies">电影</router-link>
        <router-link to="/byTicket/cinema">影院</router-link>
      </div>
      <div class="top_item">
        <i class="fa fa-search"></i>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_item">
        <router-link to="/byTicket/movies/onShow">正在热映</router-link>
      </div>
      <div class="bottom_item">
        <router-link to="/byTicket/movies/aboutShow">即将上映</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="less">
.byTicket_header {
  height: 10rem;
  width: 100%;
  background: #222;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 2.8rem;
  a {
    color: #999;
    font-size: 2.4rem;
  }
  a.router-link-active {
    color: aliceblue;
  }
  .top {
    margin-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    .top_item {
      flex: 0 1 auto;
      span {
        padding-left: 2rem;
      }
      i {
        padding-right: 2rem;
      }
      a {
        padding: 0.3rem 0.5rem;
      }
    }
    .top_item.linkBorder {
      border: 1px solid #ddd;
    }
  }
  .bottom {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-around;
    .bottom_item {
      flex: 0 1 auto;
    }
    a {
      display: inline-block;
      padding: 0.8rem 0;
    }
    a.router-link-active {
      position: relative;
    }
    a.router-link-active:after {
      content: "";
      width: 4rem;
      height: 2px;
      position: absolute;
      bottom: 0;
      background: aliceblue;
      left: 50%;
      margin-left: -2rem;
    }
  }
}
</style>
