<template>
  <div class="topics">
    <div class="container">
      <div class="topics-info">
        <TitleH4 :text="data.title" css-class="left" />
        <div class="topics-info-text" v-html="data.text"></div>
      </div>
      <div class="topics-list">
        <div class="topics-item" v-for="(item, index) in data.list" :key="index">
          <div class="topics-item-image">
            <img 
              :src="item.image.url" 
              :alt="item.image.description" 
              :width="item.image.width"
              :height="item.image.height"
              loading="lazy" 
            />
          </div>
          <div class="topics-item-info">
            <p>{{item.text}}</p>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const TitleH4 = () => import('~/components/TitleH4.vue')
export default {
  name: 'Topics',
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
.topics
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 80px auto
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items flex-start
.topics-info, .topics-list
  width calc(50% - 16px)
.topics-info-text
  font-size 20px
  line-height 150%
  color #606266
  p
    margin-bottom 20px
.topics-list
  display block
  .topics-item
    display flex
    align-items center
    justify-content space-between
    margin-bottom 40px
  .topics-item-image
    width 88px
    img
      max-width 100%
  .topics-item-info
    width calc(100% - 110px)
    p
      color #606266
      font-size 16px
      line-height 150%
</style>