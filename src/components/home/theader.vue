<template>
  <header class="tHeader">
    <div class="location"><span>广州</span></div>
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
      }
    },
    methods : {
       getLocationId() {
        let self = this
        // 百度地图api获取当前城市
        this.$http.get('/baiduMap/location/ip', {
          params: {
            ak: 'm2xAiidueSdKT6ljTPFL3ZGTaTbbZHnm',
          }
        })
          .then(function(req){
            let city = req.data.content.address_detail.city
            // 截取字符串去掉最后一个‘市’字
            self.city = city.substring(0,city.length-1)
            // 根据得到的城市名与时光网的数据匹配得到对应的localtionId
            self.$http.get('/api/Showtime/HotCitiesByCinema.api')
              .then(function(req) {
                let cityArr = req.data.p;
                for(let val of cityArr) {
                  if(val.n === self.city) {
                    self.$store.state.locationId = val.id
                    // self.locationId = val.id
                    console.log( self.$store.state.locationId, 111111)
                  }
                }
              })
          })
          .catch(function(err) {
            console.log(err);
          })
      },
    },
    created() {
      this.getLocationId()
    }
  }
</script>

<style lang="less" scoped>
  body {
    /*padding-top: 2rem;*/
  }
  .tHeader{
    margin-bottom: 2rem;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 2rem;
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
      /*padding: 2px 3px;*/
      color: aliceblue;
    }
    .logo {
      height: 1.5rem;
      width: 5rem;
      background: url("../../comen/img/head_logo.png") no-repeat;
      background-size: cover;
    }
    /*background-repeat: ;*/
    .search {
      /*width: 2rem;*/
      height: 2rem;
      i.fa-search {
        color: aliceblue;
        line-height: 2rem;

      }
    }
  }


</style>
