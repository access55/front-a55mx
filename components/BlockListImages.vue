<template>
  <div class="block-list" :class="cssClass">
    <div class="container">
      <TitleH3 :text="data.title" />
      <p v-if="data.text">{{data.text}}</p>
      <div class="block-list-images" :class="listCssClass">
        <img 
          :src="item.image.url" 
          :alt="item.image.description" 
          v-for="(item, index) in data.list" 
          :key="index"
          :width="item.image.width"
          :height="item.image.height">
      </div>
    </div>
  </div>
</template>
<script>
const TitleH3 = () => import('~/components/TitleH3.vue')
export default {
  name: 'BlockListImages',
  components: {
    TitleH3
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    cssClass: {
      type: String,
      required: false,
      default: ''
    },
    listCssClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.block-list
  box()
  margin 60px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    text-align center
  &.desktop
    display block
  p
    font-size 20px
    color #606266
    line-height 150%
.block-list-images
  display flex
  justify-content center
  align-items center
  align-content center
  margin-top 50px
  &.space-between
    justify-content space-between
    img
      margin 0
  img
    margin 0 30px
</style>