<template>
  <div class="white-block">
    <TitleH3 :text="data.title" />
    <p>{{data.text}}</p>
    <LinkBox 
      color="blue"
      url="/"
      :text="data.button_know"
    />
  </div>
</template>
<script>
const TitleH3 = () => import('~/components/TitleH3.vue')
const LinkBox = () => import('~/components/LinkBox.vue')
export default {
  name: 'WhiteBlock',
  components: {
    TitleH3, LinkBox
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
.white-block
  max-width 1200px
  background #fff
  margin 100px auto 80px
  width calc(100% - 64px)
  text-align center
  padding 28px 28px 20px
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  p
    font-size 20px
    line-height 150%
    margin-bottom 40px
    color #606266
</style>