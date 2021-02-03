<template>
  <h3 class="title-h3">{{text}}</h3>
</template>
<script>
export default {
  name: 'TitleH3',
  props: {
    text: {
      type: String,
      required: false,
      default: 'Lorem ipsum'
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.title-h3
  font-size 32px
  line-height 150%
  color #00417F
  text-align center
  margin 0 0 30px
@media all and (max-width: 1250px)
  .title-h3
    font-size: clamp(20px, calc(1.25rem + (32 - 20) * ((100vw - 320px) / (1250 - 320))), 32px)
</style>