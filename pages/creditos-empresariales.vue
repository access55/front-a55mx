<template>
  <div class="main-page">
    {{loading}}
    <Loading :loading="loading" />
    <Hero :data="credits.acf.hero" />
    <NumberBlock :data="credits.acf.fuel" :start="animationPaused" />
    <!-- <div class="block-button">
      <div class="container">
        <LinkBox :url="home.acf.link_lines" :text="home.acf.button_lines" color="blue" />
      </div>
    </div> -->
    <BlockCardList :cards="credits.acf.cards" />
    <Topics :data="credits.acf.request" />
    <div class="block-button">
      <div class="container">
        <LinkBox :url="credits.acf.request.link_request" :text="credits.acf.request.button_request" color="blue" />
      </div>
    </div>
    <TestimonialsList :data="home.acf.testimonials" />
    <Faq :data="credits.acf.faq" />

    <BlogList :posts="posts" :title="blog.title"  v-if="posts.length > 0"/>
    <div class="block-button" v-if="posts.length > 0">
      <div class="container">
        <LinkBox url="/blog" :text="blog.button" color="blue" />
      </div>
    </div>
  </div>
</template>

<script>
const Faq              = () => import('~/components/Faq.vue')
const Hero             = () => import('~/components/Hero.vue')
const Topics           = () => import('~/components/Topics.vue')
const LinkBox          = () => import('~/components/LinkBox.vue')
const Loading          = () => import('~/components/Loading.vue')
const BlogList         = () => import('~/components/BlogList.vue')
const ButtonBox        = () => import('~/components/ButtonBox.vue')
const NumberBlock      = () => import('~/components/NumberBlock.vue')
const BlockCardList    = () => import('~/components/BlockCardList.vue')
const TestimonialsList = () => import('~/components/TestimonialsList.vue')
import mixins from '~/helpers/mixins'
export default {
  layout: 'page',
  mixins: [mixins],
  components: {
    Hero, NumberBlock, TestimonialsList, LinkBox, BlogList, ButtonBox, BlockCardList, Topics, Faq, Loading
  },
  async asyncData ({ store, $config: { baseAPI } }) {
    await store.dispatch('page/loadPage', baseAPI)
    await store.dispatch('credits/loadPage', baseAPI)
  },
  head() {
    if(this.credits) {
      const metaArray = [];
      this.credits.yoast_meta.map(ele => {
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
    options () { return this.$store.state.page.options },
    credits () { return this.$store.state.credits.credits },
    loading () { return this.$store.state.credits.loaded }
  }
}
</script>

<style lang="stylus">

</style>
