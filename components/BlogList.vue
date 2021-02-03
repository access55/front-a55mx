<template>
  <div class="blog-area" :class="cssClass">
    <div class="container">
      <TitleH3 :text="title" />
      <div class="blog-list desktop">
        <BlogItem :data="item" v-for="(item, index) in posts" :key="index" />
      </div>
      <div class="blog-slider mobile">
        <swiper
        ref="blogSlider" 
        :options="swiperBlog" >
          <swiper-slide v-for="(item, index) in posts" :key="index">
            <BlogItem :data="item"  />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination blog-pagination"></div>
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
.blog-list
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  grid-gap 16px
</style>