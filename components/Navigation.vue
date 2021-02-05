<template>
  <nav class="main-navigation" :class="{'active': statusMenu}" data-test="1">
    <button class="close" @click.prevent="closeMenu">cerrar</button>
    <Logo css-class="top mobile" />
    <ul>
      <li class="mobile">
        <nuxt-link to="/" @click.native="closeMenu">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/creditos-empresariales" @click.native="closeMenu">Créditos Empresariales</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog" @click.native="closeMenu">Blog</nuxt-link>
      </li>
    </ul>
    <LinkBox
      :external="true"
      url="https://plataforma.a55.tech/entrar"
      :text="options.login_text"
      color="blue mobile-navigation" />
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
  },
  methods: {
    closeMenu () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus">
@import '~assets/css/functions.styl'
.close
  text-indent -9999px
  position absolute
  background-image url('~assets/img/close.svg')
  width 24px
  height 24px
  background-repeat no-repeat
  background-position center center
  cursor pointer
  border none
  background-color transparent
  border-radius 100%
  top 10px
  right 10px
  display none
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
    li.mobile
      display none
    a
      font-size 16px
      font-weight 400
      color #fff
      text-decoration none
      position relative
      transitions(.2s)
      &.nuxt-link-exact-active:after
        width 100%
        transitions(.2s)
      &:hover:after
        width 100%
        transitions(.2s)
      &:after
        content ''
        width 0
        background #fff
        position absolute
        bottom -3px
        left 0
        height 1px
        transitions(.2s)
@media all and (max-width: 750px)
  .close
    display block
  .main-navigation
    position fixed
    z-index 100
    opacity 0
    overflow hidden
    visibility hidden
    height 0
    align-content flex-start
    align-items flex-start
    top 0
    background #00154B
    width 100%
    transition all .3s cubic-bezier(0.165, 0.84, 0.44, 1)
    will-change opacity, height
    &.active
      height 100vh
      visibility visible
      opacity 1
      transition all .3s cubic-bezier(0.165, 0.84, 0.44, 1)
    ul 
      width 100%
      display block
      text-align center
      margin-top 200px
      li
        display block
        margin 30px 0
      li.mobile
        display block
      a
        font-size 20px
        font-weight bold
        &.nuxt-link-exact-active
          color #33AAFF
        &:after
          display none
      
</style>