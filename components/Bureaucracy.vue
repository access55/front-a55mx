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
      
</style>