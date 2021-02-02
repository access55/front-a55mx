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
  height 1100px
  padding-top 77px
  display flex
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
    .hero-content-title 
      h1
        margin 0
        font-size 47px
        line-height 75px
        font-weight 400
      strong
        font-size 56px
</style>