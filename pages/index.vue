<template>
  <div class="main-page">
    <Hero :data="home.acf.hero" />
    <NumberBlock :data="home.acf.fuel" :start="animationPaused" />
    <Bureaucracy :data="home.acf.bureaucracy"/>
    <div class="block-button desktop">
      <div class="container">
        <ButtonBox :text="home.acf.button_lines" color="blue" />
      </div>
    </div>
    <TestimonialsList :data="home.acf.testimonials" />
    <ExternalNews :data="home.acf.others"/>
    <BlockListImages :data="home.acf.support"/>
    <BlockListImages 
      :data="home.acf.allies" 
      list-css-class="space-between"
      :has-slider="true"
      slider-class="allies"
       />
    <div class="block-button">
      <div class="container">
        <ButtonBox :text="home.acf.allies.button_ally" color="white" />
      </div>
    </div>
    <WhiteBlock :data="home.acf.invest" />
    <BlogList :posts="posts" :title="blog.title" />
    <div class="block-button">
      <div class="container">
        <LinkBox url="/blog" :text="blog.button" color="blue" />
      </div>
    </div>
  </div>
</template>

<script>
const Hero             = () => import('~/components/Hero.vue')
const LinkBox          = () => import('~/components/LinkBox.vue')
const BlogList         = () => import('~/components/BlogList.vue')
const ButtonBox        = () => import('~/components/ButtonBox.vue')
const WhiteBlock       = () => import('~/components/WhiteBlock.vue')
const NumberBlock      = () => import('~/components/NumberBlock.vue')
const Bureaucracy      = () => import('~/components/Bureaucracy.vue')
const ExternalNews     = () => import('~/components/ExternalNews.vue')
const BlockListImages  = () => import('~/components/BlockListImages.vue')
const TestimonialsList = () => import('~/components/TestimonialsList.vue')
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  components: {
    Hero, NumberBlock, Bureaucracy, TestimonialsList, ExternalNews, BlockListImages, WhiteBlock, LinkBox, BlogList
  },
  async asyncData ({ store, $config: { baseAPI } }) {
    await store.dispatch('page/loadPage', baseAPI)
  },
  head() {
    if(this.home) {
      const metaArray = [];
      this.home.yoast_meta.map(ele => {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
      return {
        meta: metaArray,
      }
    }
  },
  computed: {
    home () { return this.$store.state.page.home },
    blog () { return this.$store.state.page.blog },
    posts () { return this.$store.state.page.posts },
    options () { return this.$store.state.page.options }
  }
}
</script>

<style lang="stylus">

</style>
