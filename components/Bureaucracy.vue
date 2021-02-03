<template>
  <div class="box-bureaucracy">
    <div class="box-bureaucracy-header">
      <div class="box-bureaucracy-header-info">
        <h2>{{data.title}}</h2>
        <h3>{{data.sub_title}}</h3>
      </div>
      <div class="box-bureaucracy-image">
        <img 
          :src="data.image.url" 
          :alt="data.title" 
          :width="data.image.width"
          :height="data.image.height"
        >
      </div>
    </div>
    <div class="box-bureaucracy-content">
      <p>{{data.text}}</p>
      <p class="small">{{data.sub_text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bureaucracy',
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
.box-bureaucracy
  background #fff
  padding 60px 32px
  width calc(100% - 128px)
  max-width 1200px
  margin 60px auto
.box-bureaucracy-header
  display flex
  justify-content space-between
  flex-wrap wrap
.box-bureaucracy-header-info
  width calc(100% - 350px)
  padding-left 32px
  h2
    font-size 50px
    line-height 150%
    color #00417F
  h3
    color #0096FF
    font-size 45px
    line-height 150%
.box-bureaucracy-content
  margin-top 30px
  text-align center
  p
    font-size 36px
    line-height 150%
    color #606266
    &.small
      font-weight bold
      margin-top 40px
      font-size 30px
@media all and (max-width: 1250px)
  .box-bureaucracy
    width calc(100% - 64px)
  .box-bureaucracy-image
    width 28%
    img
      max-width 100%
      display block
      height auto
  .box-bureaucracy-header-info
    width calc(100% - 30%)
    padding-left 0
  .box-bureaucracy-header-info 
    h2
      font-size: clamp(25px, calc(1.75rem + (50 - 28) * ((100vw - 320px) / (1250 - 320))), 50px)
    h3
      font-size: clamp(23px, calc(1.5rem + (45 - 24) * ((100vw - 320px) / (1250 - 320))), 45px)
  .box-bureaucracy-content 
    p
      font-size: clamp(18px, calc(1.25rem + (36 - 20) * ((100vw - 320px) / (1250 - 320))), 36px)
      &.small
        font-size: clamp(16px, calc(1rem + (30 - 16) * ((100vw - 320px) / (1250 - 320))), 30px)
@media all and (max-width: 600px)
  .box-bureaucracy
    display flex
    flex-wrap wrap
    width calc(100% - 20px)
    padding 20px
    h2 
      margin-bottom 30px
  .box-bureaucracy-image
    width 100%
    order 1
    margin-bottom 20px
    img
      margin 0 auto
  .box-bureaucracy-header-info
    width 100%
    order 2
  .box-bureaucracy-content
    width 100%
    order 3
</style>