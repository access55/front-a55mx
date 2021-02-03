<template>
  <button @click.prevent="action" type="button" class="menu-open">Menu</button>
</template>
<script>
export default {
  name: 'MenuOpen',
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.menu-open
  position fixed
  cursor pointer
  z-index 100
  right 20px
  bottom 20px
  border-radius 100%
  width 60px
  height 60px
  justify-content center
  align-items center
  background #00154B;
  box-shadow 0px 16px 24px rgba(0, 21, 75, 0.2), 0px 2px 6px rgba(0, 21, 75, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04)
  color #fff
  font-size 14px
  font-weight bold
  border none
  display none
@media all and (max-width: 750px)
  .menu-open
    display flex
</style>