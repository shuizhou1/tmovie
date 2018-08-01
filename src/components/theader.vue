<template>
    <header class="tHeader">
      <div class="location"><span>广州</span></div>
      <div class="logo"></div>
      <div class="search"></div>
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
          async getLocationId() {
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
  .tHeader{
    width: 100%;
    height: 1rem;
    background: #222222;
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        height: 0.5rem;
        width: 1rem;
        border: 1px solid #ff0000;
        flex: 0 1 auto
     }
    .location {

    }
  }

</style>
