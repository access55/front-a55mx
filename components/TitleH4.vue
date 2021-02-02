<template>
  <h3 class="title-h4">{{text}}</h3>
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
  font-size 24px
  line-height 150%
  color #00417F
  text-align center
  margin 0 0 30px
</style>