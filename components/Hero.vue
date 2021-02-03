<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-content-center">
        <div class="hero-content-title" v-html="data.title"></div>
        <ButtonBox
          color="blue"
          :text="data.button_begin"
        />
      </div>
      <ImageBox 
        loading="eager" 
        :images="data.images"
        css-class="hero-image"
      />
    </div>
  </div>
</template>
<script>
const ImageBox  = () => import('~/components/ImageBox.vue')
const ButtonBox = () => import('~/components/ButtonBox.vue')
export default {
  name: 'Hero',
  components: {
    ImageBox, ButtonBox
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.hero
  position relative
  background #00154b
  overflow hidden
  height 1100px
  padding-top 77px
  display flex
  &:before
      content ''
      width 100%
      height 1px
      bottom 0
      left 0
      position absolute
      background #F2F6FC
  &:after
    content ''
    position absolute
    background #F2F6FC
    left 0
    bottom 0
    width 100%
    height 444px
    clip-path: polygon(0 100%, 100% 100%, 100% 0)
  .hero-content
    width calc(100% - (64px * 2))
    margin 0 auto
    height 100%
.hero-content-center
  margin-top 220px
  color #fff
  position relative
  z-index 10
  button
    margin-top 55px
  h1
    margin 0
    font-size 47px
    line-height 150%
    font-weight 400
    strong
      font-size 56px
@media all and (max-width: 1300px)
  .hero 
    overflow hidden
    .hero-content
      width calc(100% - 64px)
  .hero-content-center
    h1
      font-size: clamp(20px, calc(1.25rem + (47 - 20) * ((100vw - 320px) / (1300 - 320))), 47px)
      strong
        font-size: clamp(24px, calc(1.5rem + (56 - 24) * ((100vw - 320px) / (1300 - 320))), 56px)
@media all and (max-width: 1000px)
  .hero 
    margin-bottom 120px
    height auto
    &:after
      height 20%
      bottom 338px
    &:before
      height 339px
    .hero-content
      display flex
      flex-wrap wrap
      width 100%
  .hero-content-center
    margin 0 auto
    order 2
    display flex
    flex-wrap wrap
    text-align center
    justify-content center
    h1
      display block
      width 100%
      color #00417f
  .hero-content-title
    width 100%
@media all and (max-width: 600px)
  .hero 
    margin-bottom 80px
    &:after
      height 20%
      bottom 300px
    &:before
      height 301px
@media all and (max-width: 500px)
  .hero 
    &:after
      height 20%
      bottom 274px
    &:before
      height 275px
</style>