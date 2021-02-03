<template>
  <div class="blog-area" :class="cssClass">
    <div class="container">
      <TitleH3 :text="title" />
      <div class="blog-slider">
        <swiper
        ref="blogSlider" 
        :options="swiperBlog" >
          <swiper-slide v-for="(item, index) in posts" :key="index">
            <BlogItem :data="item"  />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
const TitleH3  = () => import('~/components/TitleH3.vue')
const BlogItem = () => import('~/components/BlogItem.vue')
export default {
  name: 'BlogList',
  components: {
    TitleH3, BlogItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    posts: {
      type: Array,
      required: true
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data: () => ({
    swiperBlog: {
      spaceBetween: 8,
      centeredSlides: false,
      slidesPerView: 4,
      pagination: {
        el: '.blog-pagination',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 'auto',
          centeredSlides: true
        },
        600: {
          slidesPerView: 2,
          centeredSlides: false
        },
        1000: {
          slidesPerView: 3,
          centeredSlides: false
        },
        1200: {
          slidesPerView: 4,
          centeredSlides: false
        }
      }
    },
  })
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.blog-area
  box()
  margin 60px 0
  .blog-slider
    width calc(100% + 16px)
    margin-left -8px
    .swiper-slide
      padding 0 4px
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    text-align center
  .desktop
    display grid
  .mobile
    display none
  p
    font-size 20px
    color #606266
    line-height 150%
@media all and (max-width: 1250px)
  .blog-area
    .container
      max-width 1200px
      width calc(100% - 32px)
@media all and (max-width: 600px)
  .blog-area
    .container
      max-width 1200px
      width calc(100% - 20px)
    .blog-slider
      .swiper-slide
        width calc(100vw - 120px)   
</style>