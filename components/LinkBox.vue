<template>
  <div class="link-area">
    <a :href="url" data-link="external" v-if="isExternal(url)" :class="color" target="_blank" rel="noopener noreferrer">{{ text }}</a>
    <nuxt-link :to="url" v-if="isExternal(url) === false" :class="color">{{ text }}</nuxt-link>
  </div>
</template>
<script>
export default{
  name: 'LinkBox',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Link'
    },
    url: {
      type: String,
      required: false,
      default: '/'
    },
    color: {
      type: String,
      required: false,
      default: 'blue'
    }
  },
  methods: {
    checkDomain (url) {
      if ( url.indexOf('//') === 0 ) { url = location.protocol + url; }
      return url.toLowerCase().replace(/([a-z])?:\/\//,'$1').split('/')[0];
    },
    isExternal (url) {
      return ( ( url.indexOf(':') > -1 || url.indexOf('//') > -1 ) && this.checkDomain(location.href) !== this.checkDomain(url) )
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.link-area
  a
    display inline-flex
    outline none
    cursor pointer
    justify-content center
    align-items center
    text-transform uppercase
    text-decoration none
    font-weight 700
    height 40px
    font-size 14px
    letter-spacing 1px
    border-radius 66px
    padding 0 32px
    text-decoration none
    transitions(.2s)
    &.white
      background #fff
      color #0096FF
      box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
      &:hover
        color #fff
        background #0096FF
    &.blue
      color #fff
      background #0096FF
      box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
      &:hover
        background #fff
        color #0096FF
    &:hover
      transitions(.2s)
@media all and (max-width: 750px)
  .link-area
    a.mobile-navigation
      bottom 100px
      left 50%
      transform translateX(-50%)
      position absolute
@media all and (max-width: 600px)
  .link-area
    a
      padding 0 12px
      font-size 12px
</style>
