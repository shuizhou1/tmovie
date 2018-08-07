<template>
    <div class="carouselWraper">
      <ul class="carousel" ref="carousel">
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/a.jpg" alt="">
        </li>
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/b.jpg" alt="">
        </li>
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/c.jpg" alt="">
        </li>
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/d.jpg" alt="">
        </li>
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/e.jpg" alt="">
        </li>
        <li class="carouselItem">
          <img src="../../comen/img/carouselImg/a.jpg" alt="">
        </li>
      </ul>
    </div>

</template>

<script>
export default {
    name: "carousel",
    data () {
      return {
      }
    },
    methods: {
      carouselMove () {
        let num = 0;
        let carousel = this.$refs.carousel;
        let len = carousel.children.length;
        let wid = - this.$refs.carousel.children[0].offsetWidth;
        // this.$refs.carousel.style.transform = 'translate(' + 1*wid + 'px)';
        let timer = setInterval(() => {
          num++;
          carousel.style.transform = 'translate(' + num*wid + 'px)';
          this.$refs.carousel.style.transition = 'all 1s';
          console.log(num);
        },2000);
        this.transitionEnd(carousel, function () {
          if (num >= len-1) {
            num =0;
            carousel.style.transform = 'translate(' + num*wid + 'px)';
            carousel.style.transition = 'none';

          }
      })

      },
      transitionEnd (obj, callback) {
        if (typeof obj === 'object') {
          obj.addEventListener('transitionEnd', function () {
            callback && callback()
          });
          obj.addEventListener('webkitTransitionEnd', function () {
            callback && callback()
          })
        }
      }
    },
    mounted () {
      // this.carouselMove()
    }

}
</script>

<style scoped lang="less">
  .carouselWraper {
    /*position: relative;*/
    border-top: 1px solid #fff;
    width: 100%;
    overflow: hidden;
    /*height: 6rem;*/
    .carousel {
      /*position: absolute;*/
      z-index: 99;
      margin-top: 2rem;
      display: flex;
      width: 600%;
      .carouselItem {
        float: left;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }


</style>
