<template>
  <div class="main-layout">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Newsletter
      :title="newsletter.title"
      :button-text="newsletter.button"
      :result-text="newsletter.success.text"
      :result-title="newsletter.success.title"
    />
    <Footer />
  </div>
</template>
<script>
const Header     = () => import('~/components/Header.vue')
const Footer     = () => import('~/components/Footer.vue')
const Newsletter = () => import('~/components/Newsletter.vue')
export default {
  name: 'page',
  components: {
    Header, Newsletter, Footer
  },
  computed: {
    newsletter () { return this.$store.state.page.newsletter }
  }
}
</script>

<style lang="stylus">
html 
  font-family 'Montserrat', sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background #F2F6FC

*, *::before, *::after 
  box-sizing border-box
  margin 0
//
main
  margin-bottom 50px
// pagination
.swiper-pagination
  margin-top 24px
  display flex
  justify-content center
  width 100%
  position relative
  .swiper-pagination-bullet
    border-radius 0
    width 16px
    height 16px
    border-radius 100%
    background #99D5FF
    margin 0 3px
    opacity 1
    transitions(.2s)
  .swiper-pagination-bullet-active.swiper-pagination-bullet
    transitions(.2s)
    background #0096FF
[data-animate="fade-up"]
  opacity 0
  transform translate3d(0, 40px, 0)
  will-change opacity
  transitions(.35s)
  &.active
    opacity 1
    transform translate3d(0, 0, 0)
    transitions(.35s)
.block-button
  margin 60px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    display flex
    justify-content center
</style>
