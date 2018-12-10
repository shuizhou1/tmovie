<template>
  <div>
    <byticket-header></byticket-header>
    <div class="mainBody">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import byticketHeader from "./bytickHeader";
// import onShow from './onShow'
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    byticketHeader
    // onShow
  }
};
</script>

<style scoped lang="less">
.mainBody {
  margin-top: 10rem;
  width: 100%;
}
</style>
