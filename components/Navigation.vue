<template>
  <nav class="main-navigation">
    <ul>
      <li>
        <nuxt-link to="/creditos-empresariales">Créditos Empresariales</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
    </ul>
    <LinkBox
      :external="true"
      url="https://plataforma.a55.tech/entrar"
      :text="options.login_text"
      color="blue" />
  </nav>
</template>

<script>
const LinkBox = () => import('~/components/LinkBox.vue')
export default {
  name: 'Navigation',
  components: {
    LinkBox
  },
  props: {
    statusMenu: {
      default: false,
      required: true,
      type: Boolean
    },
  },
  computed: {
    options () { return this.$store.state.page.options },
  }
}
</script>

<style lang="stylus">
@import '~assets/css/functions.styl'
.main-navigation
  width 500px
  align-items center
  align-content center
  display flex
  justify-content space-between
  ul
    width calc(100% - 235px)
    margin 0
    padding 0
    display flex
    list-style-type none
    justify-content space-between
    a
      font-size 16px
      font-weight 400
      color #fff
      text-decoration none
</style>