<template>
  <header class="tHeader">
    <div class="location">
      <span>广州</span>
    </div>
    <div class="logo"></div>
    <div class="search">
      <i class="fa fa-search"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: "tfooter",
  data() {
    return {
      city: null,
      locationId: null
    };
  },
  methods: {
    getLocationId() {
      let self = this;
      // 百度地图api获取当前城市
      this.$http
        .get("/baiduMap/location/ip", {
          params: {
            ak: "m2xAiidueSdKT6ljTPFL3ZGTaTbbZHnm"
          }
        })
        .then(function(req) {
          let city = req.data.content.address_detail.city;
          // 截取字符串去掉最后一个‘市’字
          self.city = city.substring(0, city.length - 1);
          // 根据得到的城市名与时光网的数据匹配得到对应的localtionId
          self.$http
            .get("/api/Showtime/HotCitiesByCinema.api")
            .then(function(req) {
              let cityArr = req.data.p;
              for (let val of cityArr) {
                if (val.n === self.city) {
                  self.$store.state.locationId = val.id;
                  // self.locationId = val.id
                }
              }
            });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    console.log(1);
    this.getLocationId();
  }
};
</script>

<style lang="less" scoped>
.tHeader {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: calc(40px + 25 * (100vw - 436px) / 1100);
  background: #222222;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    /*border: 1px solid #ff0000;*/
    flex: 0 1 auto;
    text-align: center;
  }
  .location {
    display: inline-block;
    color: aliceblue;
    font-size: calc(16px + 10 * (100vw - 436px) / 1100);
  }
  .logo {
    height: calc(30px + 20 * (100vw - 436px) / 1100);
    width: calc(100px + 40 * (100vw - 436px) / 1100);
    background: url("../../comen/img/head.png") no-repeat;
    background-size: 100% 100%;
  }
  /*background-repeat: ;*/
  .search {
    /*width: 2rem;*/
    /*height: 6rem;*/
    i.fa-search {
      color: aliceblue;
      line-height: 8rem;
      font-size: calc(16px + 10 * (100vw - 436px) / 1100);
    }
  }
}
</style>
