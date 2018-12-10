<template>
  <div class="mine">
    <div class="header">
      <div class="iconWraper"></div>
      <div class="linkWraper">
        <a href="/login" class="active">登陆</a>
        <a href="/register">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped lang="less">
.mine {
  .header {
    height: 30rem;
    background: midnightblue;
    position: relative;
    .iconWraper {
      position: absolute;
      top: 2rem;
      left: 2rem;
      width: 15rem;
      height: 15rem;
      background: #fff;
      background-position: -2px -1px;
      background-size: cover;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }
    .linkWraper {
      position: absolute;
      right: 2rem;
      bottom: 2rem;
      a {
        display: inline-block;
        padding: 1.5rem 4.5rem;
        margin-left: 4rem;
        -webkit-border-radius: 8%;
        -moz-border-radius: 8%;
        border-radius: 8%;
        border: 1px solid #ccc;
        color: #ccc;
        font-size: calc(14px + 4 * (100vw - 436px) / 1100);
      }
      a.active {
        color: #64ad16;
        border: 1px solid #64ad16;
      }
    }
  }
}
</style>
