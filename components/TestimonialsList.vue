<template>
  <div class="testimonials">
    <div class="container">
      <TitleH3 :text="data.title" />
      <div class="testimonial-slider">
        <swiper
        ref="cardSlider" 
        :options="swiperCard" >
          <swiper-slide :key="index" v-for="(testimonial, index) in data.list">
            <TestimonialItem :data="testimonial" />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination testimonial-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
const TitleH3          = () => import('~/components/TitleH3.vue')
const TestimonialItem  = () => import('~/components/TestimonialItem.vue')
export default {
  name: 'TestimonialsList',
  components: {
    TitleH3, TestimonialItem
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    swiperCard: {
      spaceBetween: 0,
      centeredSlides: false,
      slidesPerView: 1,
      pagination: {
        el: '.testimonial-pagination',
        clickable: true
      }
    },
  })
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.testimonials
  box()
  margin 40px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    position relative
    justify-content center
    flex-wrap wrap
  .testimonial-slider
    width 100%
</style>