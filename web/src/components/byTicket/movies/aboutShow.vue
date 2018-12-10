<template>
    <div class="aboutShow">
      <div class="movieCategory">
        <div class="tabList">
          <span class="active">最受关注</span>
          <span>8大片</span>
          <span>9月大片</span>
          <span>10月大片</span>
        </div>
        <div class="movieCategory_list">
          <ul class=" movieList active attention_width">
           <li class="movieList_item" v-for=" (item, index) in attentionArr" :key="index">
             <p class="reaDate">{{item.rMonth}}月{{item.rDay}}日</p>
             <div class="imgBox" :style="{ backgroundImage:`url(${item.image})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition:`center center`}"></div>
             <p><span class="movieName">{{item.title}}</span></p>
             <p><span class="wantedCount">{{item.wantedCount}}人想看</span> <i class="fa fa-heart-o"></i></p>
           </li>
         </ul>
          <ul class="movieList aug_width">
            <li class="movieList_item" v-for=" (item, index) in augMovieArr" :key="index">
              <p class="reaDate">{{item.rMonth}}月{{item.rDay}}日</p>
              <div class="imgBox" :style="{ backgroundImage:`url(${item.image})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition:`center center`}"></div>
              <p><span class="movieName">{{item.title}}</span></p>
              <p><span class="wantedCount">{{item.wantedCount}}人想看</span> <i class="fa fa-heart-o"></i></p>
            </li>
          </ul>
          <ul class=" movieList sep_width">
            <li class="movieList_item" v-for=" (item, index) in sepMovieArr" :key="index">
              <p class="reaDate">{{item.rMonth}}月{{item.rDay}}日</p>
              <div class="imgBox" :style="{ backgroundImage:`url(${item.image})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition:`center center`}"></div>
              <p><span class="movieName">{{item.title}}</span></p>
              <p><span class="wantedCount">{{item.wantedCount}}人想看</span> <i class="fa fa-heart-o"></i></p>
            </li>
          </ul>
          <ul class="movieList oct_width">
            <li class="movieList_item" v-for=" (item, index) in octMovieArr" :key="index">
              <p class="reaDate">{{item.rMonth}}月{{item.rDay}}日</p>
              <div class="imgBox" :style="{ backgroundImage:`url(${item.image})`, backgroundSize: `cover`, backgroundRepeat: `no-repeat`, backgroundPosition:`center center`}"></div>
              <p><span class="movieName">{{item.title}}</span></p>
              <p><span class="wantedCount">{{item.wantedCount}}人想看</span> <i class="fa fa-heart-o"></i></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="aboutShow_movies">
        <ul class="aboutShow_list">
          <li class="aboutShow_listItem" v-for="(item,index) in movieComingArr" :key="index">
            <div class="imgBox" v-bind:style="{backgroundImage:`url(${item.image})`,  backgroundPosition:`center center`, backgroundSize: `100% 100%`, backgroundRepeat:'no-repeat'}">
            </div>
            <div class="messageBox">
              <div class="left">
                <p><span class="movieName">{{item.title}}</span></p>
                <p><span class="wantedCount"> {{ item.wantedCount}}</span>人想看 - <span class="category">{{item.type}}</span></p>
                <p><span class="movieActors"> {{ item.actor1 }} / {{ item.actor2}}</span></p>
              </div>
              <div class="right">
                <p><a class="orderTicket">预售</a></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "aboutShow",
        data () {
          return {
            attentionArr: [],
            movieComingArr: [],
          }
        },
        computed: {
          augMovieArr () {
            let arr = []
            this.movieComingArr.find( (item, index) => {
              if ( item.rMonth === 8) {
                arr.push(item)
              }
            })
            return arr
          },
          sepMovieArr () {
            let arr = []
            this.movieComingArr.find( (item, index) => {
              if ( item.rMonth === 9) {
                arr.push(item)
              }
            })
            return arr
          },
          octMovieArr () {
            let arr = []
            this.movieComingArr.find( (item, index) => {
              if ( item.rMonth === 10) {
                arr.push(item)
              }
            })
            return arr
          },

        },
        watch: {
          attentionArr () {
            let len = this.attentionArr.length
            $('.attention_width').css('width', '21.5' * len - '1.5' + 'rem')
          },
          augMovieArr () {
            let len = this.augMovieArr.length
            $('.aug_width').css('width', '21.5' * len - '1.5' + 'rem')
          },
          sepMovieArr () {
            let len = this.sepMovieArr.length
            $('.sep_width').css('width', '21.5' * len - '1.5' + 'rem')
          },
          octMovieArr () {
            let len = this.octMovieArr.length
            $('.oct_width').css('width', '21.5' * len - '1.5' + 'rem')
          }
        },
        methods: {
          getMovieList () {
            this.$http.get('/api/Movie/MovieComingNew.api', {
              params: {
                locationId: this.$store.state.locationId
              }
            }).then( (res) => {
              this.attentionArr = res.data.attention
                this.movieComingArr = res.data.moviecomings
            } ).catch( (err) => {
                console.log(err);
            })
          },
          movieCategoryTab () {
            let tabList = $('.movieCategory .tabList span')
            let len = tabList.length
            let movieList = $('.movieCategory_list .movieList')
            for (let i=0; i < len; i++) {
              $(tabList[i]).click( () => {
                $(movieList[i]).addClass('active').siblings().removeClass('active')
              })
            }
          }
        },
      created () {
          this.getMovieList()
      },
      mounted () {
          this.movieCategoryTab()
      }
    }
</script>

<style scoped lang="less">
  .aboutShow {
    color: #555;
    padding: 1rem 1rem 0 1rem;
    font-size: calc(10px + 4*(100vw - 436px)/1100);
    .movieCategory {
      border-bottom: 1px solid #ddd;
      .tabList {
        margin-bottom: 1rem;
        span {
          padding: .8rem 2rem;
          display: inline-block;
          margin-right: 5rem;
          background: aliceblue;
          cursor: pointer;
        }
        span.active {
          background: #ff5500;
          color: #fff;
        }
      }
      .movieCategory_list {
        width: 100%;
        overflow-x: auto;
        .movieList.active {
          display: block;
        }
        .movieList {
          display: none;
          .movieList_item {
            width: 20rem;
            float: left;
            margin-right: 1.5rem;
            .imgBox {
              width: 20rem;
              height: 30rem;
            }
            p {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              position: relative;
              margin-bottom: .8rem;
              span.movieName {
                color: #222;
              }
              span.wantedCount {
                font-size: calc(8px + 4*(100vw - 436px)/1100);
              }
              i.fa-heart-o {
                color: #ff6600;
                position: absolute;
                right: 5rem;
                height: 1rem;
                top: 50%;
                margin-top: -.5rem;

              }
            }
            p.reaDate {
              font-size: calc(8px + 4*(100vw - 436px)/1100);
            }
          }
          .movieList_item:last-child {
            margin: 0;
          }
        }
     }

    }
    .aboutShow_list {
      padding: 0 .5rem;
      .aboutShow_listItem {
        padding: 1rem 0;
        display: flex;
        border-bottom: 1px solid #ddd;
        .imgBox {
          flex: 0 0 20rem;
          height: 28rem;
        }
        .messageBox {
          flex: 1 1 auto;
          /*display: flex;*/
          padding-left: 1rem;
          font-size: calc(10px + 4*( 100vw - 436px)/1100);
          p {
            margin-bottom:calc(15px + 60*( 100vw - 436px)/1100);
            .movieName {
              font-size: 14px;
            }
            .movieDesc {
              color: yellowgreen;
            }
            .movieActors {
              color: #555;
            }
          }
          p:first-child {
            margin-top: 1rem;
          }
          .left {
            flex: 6;
            p .wantedCount {
              color: #ff6600;
            }
          }
          .right {
            flex: 1;
            .movieScore {
              color: yellowgreen;
              font-size: calc(12px + 4*(100vw - 436px)/1100);
            }
            .orderTicket {
              color: greenyellow;
              padding: 2px 5px;
              display: inline-block;
              border: 1px solid greenyellow;
            }
          }
        }

      }
    }
  }

</style>
