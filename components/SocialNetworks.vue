<template>
  <div class="social-network">
    <a :href="twitter" target="_blank" rel="noopener noreferrer" class="social-network-item tw">
      <span class="icon tw"></span>
      <span class="icon-hover tw"></span>
    </a>
    <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="social-network-item in">
      <span class="icon in"></span>
      <span class="icon-hover in"></span>
    </a>
    <a :href="blogger" target="_blank" rel="noopener noreferrer" class="social-network-item bg">
      <span class="icon bg"></span>
      <span class="icon-hover bg"></span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'SocialNetworks',
  props: {
    twitter: {
      type: String,
      required: true
    },
    linkedin: {
      type: String,
      required: true
    },
    blogger: {
      type: String,
      required: true
    },
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.social-network
  display flex
  width 180px
  justify-content space-between
  flex-wrap wrap
  align-items center
  margin-bottom 30px
  a
    width 42px
    height 42px
    border-radius 100%
    background-color #fff
    position relative
    transitions(.1s)
    .icon, .icon-hover
      transitions(.1s)
      background-repeat no-repeat
      background-position center center
      centerPerfect()
      width 42px
      height 42px
    .icon
      opacity 1
    .icon-hover
      opacity 0
    .icon.in
      background-image url('~assets/img/linkedin.svg')
      background-size auto 21px
    .icon-hover.in
      background-image url('~assets/img/linkedin-active.svg')
      background-size auto 21px
    .icon.tw
      background-image url('~assets/img/twitter.svg')
      background-size auto 26px
    .icon-hover.tw
      background-image url('~assets/img/twitter-active.svg')
      background-size auto 26px
    .icon.bg
      background-image url('~assets/img/blogger.svg')
      background-size auto 24px
    .icon-hover.bg
      background-image url('~assets/img/blogger-active.svg')
      background-size auto 24px
    &:hover
      background-color darken(#292F44, 10%)
      transitions(.1s)
      .icon-hover
        opacity 1
        transitions(.1s)
      .icon
        opacity 0
        transitions(.1s)
</style>