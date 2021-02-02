<template>
  <button 
    class="button"
    :class="[cssClass, color]"
    @click.prevent="action">{{ text }}</button>
</template>
<script>
export default{
  name: 'ButtonBox',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Button'
    },
    color: {
      type: String,
      required: false,
      default: 'black'
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
  },
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.button
  display flex
  outline none
  cursor pointer
  border none
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
</style>
