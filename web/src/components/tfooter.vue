<template>
    <div class="tfooter">
      <div class="tfooter_item">
        <router-link to="/thome">
          <p><i class="fa fa-home"></i></p>
          <p><span>首页</span></p>
        </router-link>
      </div>
      <div class="tfooter_item">
        <router-link to="/byTicket" class="link">
          <p><i class="fa fa-file-o"></i></p>
          <p><span>购票</span></p>
        </router-link>
      </div>
      <div class="tfooter_item">
        <router-link to="/mine" class="link">
          <p><i class="fa fa-smile-o"></i></p>
          <p><span>我的</span></p>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "tfooter",
}

</script>

<style scoped lang="less">
  .tfooter {
    position: fixed;
    bottom: 0;
    left: 0;
    /*height: 6.5rem;*/
    display: flex;
    width: 100%;
    background: #f4f4f4;
    z-index: 1;
    .tfooter_item {
      flex:  1 1 auto;
      text-align: center;
      a {
        color: #444;
        margin-bottom: .4rem;
        display: inline-block;
        p:first-child {
          font-size: 6rem;
          padding: 0;
          margin: 0;
        }
        p:last-child {
          font-size: 3.6em;
        }
      }
      a.router-link-active {
        color: #ff9900;
      }
    }
  }
</style>
