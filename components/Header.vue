<template>
  <header class="main-header" :class="{'active': scroll > 0, 'hide-menu': hideMenu && scroll > 250 && !statusMenu}">
    <div class="header-container">
      <Logo :scroll="scroll" />
      <Navigation :status-menu="statusMenu" @close="closeMenu" />
    </div>
  </header>
</template>
<script>
const Logo       = () => import('~/components/Logo.vue')
const Navigation = () => import('~/components/Navigation.vue')
export default {
  components: {
    Logo, Navigation
  },
  props: {
    statusMenu: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    scroll: 0,
    lastScroll: 0,
    hideMenu: false
  }),
  created () {
    window.addEventListener('scroll', this.scrollEvent)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollEvent)
  },
  methods: {
    scrollEvent () {
      this.scroll = window.pageYOffset
      if (this.scroll > this.lastScroll) {
        this.hideMenu = true
      } else {
        this.hideMenu = false
      }
      this.lastScroll = this.scroll
    },
    openMenuEvent () {
      this.openMenu = !this.openMenu
    },
    closeMenu () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
header
  position fixed
  top 0
  left 0
  height 77px
  z-index 10001
  background #00154B
  width 100%
  transitions(.2s)
  will-change opacity, background
  &.active
    height 70px
    transitions(.2s)
  &.hide-menu
    transform translateY(-122px)
.header-container
  justify-content space-between
  width calc(100% - 128px)
  display flex
  margin 0 auto
  height 100%
  align-items center
@media all and (max-width: 1000px)
  .header-container
    width calc(100% - 32px)
@media all and (max-width: 750px)
  .header-container
    width calc(100% - 20px)
    justify-content center
</style>
