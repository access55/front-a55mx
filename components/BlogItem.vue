<template>
  <nuxt-link :to="'/blog/'+data.slug" class="blog-item">
    <div class="blog-image">
      <ImageBox 
        :images="data.acf.images"
        :alternate="data.title.rendered"
      />
    </div>
    <div class="blog-content">
      <p>{{data.title.rendered}}</p>
    </div>
    <div class="blog-author">
      <div class="blog-author-image">
        <img 
          :src="data.author_data.author.photo" 
          :alt="data.author_data.author.name" 
          width="57"
          height="57"
          loading="lazy" 
        />
      </div>
      <div class="blog-author-info">
        <p>Por <strong>{{data.author_data.author.name}}</strong><br>{{data.author_data.author.description}}</p>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
const ImageBox = () => import('~/components/ImageBox.vue')
export default {
  name: 'BlogItem',
  components: {
    ImageBox
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
.blog-item
  background #fff
  padding 20px
  width 100%
  margin-bottom 25px
  display block
  border-radius 16px
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  text-decoration none
.blog-image
  width 100%
  margin-bottom 16px
  img
    width 100%
.blog-content
  text-align left
  p
    font-weight bold
    font-size 20px
    line-height 150%
    color #00417F
.blog-author
  margin-top 40px
  display flex
  flex-wrap wrap
  justify-content space-between
  align-items center
  .blog-author-info
    width calc(100% - 65px)
    text-align left
    p
      color #00417F
      font-size 16px
      line-height 150%
  .blog-author-image
    img
      width 57px
      height 57px
      border-radius 100%
@media all and (max-width: 1250px)
  .blog-content
    p 
      font-size: clamp(16px, calc(1rem + (20 - 16) * ((100vw - 340px) / (1250 - 340))), 20px)

@media all and (max-width: 600px)
  .blog-author
    .blog-author-info
      p
        font-size: clamp(13px, calc(0.8125rem + (16 - 13) * ((100vw - 340px) / (600 - 340))), 16px)
</style>