<template>
  <div class="faq-area">
    <div class="container">
      <TitleH3 :text="data.title" />
      <div class="faq-list">
        <div class="faq-item" v-for="(item, index) in data.list" :key="index">
          <div class="faq-item-header" @click="toggle">
            <p>{{item.question}}</p>
          </div>
          <div class="faq-item-content">
            <div class="faq-item-content-text" v-html="item.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const TitleH3 = () => import('~/components/TitleH3.vue')
export default {
  name: 'Faq',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.forceHeight()
    })
    this.forceHeight()
  },
  methods: {
    forceHeight () {
      if(document.querySelectorAll('.faq-item-content')) {
        const faqs = document.querySelectorAll('.faq-item-content')
        const size = faqs.length ?? 0
        if (size > 0) {
          for (let i = 0; i < size; i++) {
            faqs[i].style.setProperty('--height', faqs[i].scrollHeight + 'px')
          }
        }
      }
    },
    toggle (event) {
      this.forceHeight()
      if( event.target.closest('.faq-item').classList.contains('active')) {
        const items = document.querySelectorAll('.faq-item')
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove('active')
        }
      } else {
        const items = document.querySelectorAll('.faq-item')
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove('active')
        }
        event.target.closest('.faq-item').classList.toggle('active')
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.faq-area
  box()
  margin 60px 0
  .container
    max-width 1200px
    width calc(100% - 64px)
    margin 0 auto
    position relative
    text-align center
.faq-item
  border-radius 32px
  background #fff
  margin-bottom 16px
  transitions(.15s)
  box-shadow: 0px 16px 24px rgba(5, 152, 255, 0.1), 0px 2px 6px rgba(5, 152, 255, 0.08), 0px 0px 1px rgba(5, 152, 255, 0.08)
  &.active
    border-radius 8px
    transitions(.15s)
    .faq-item-header:after
      background-repeat no-repeat
      background-position center center
      height 22px
      width 22px
      background-image url('~assets/img/faq-minus.svg')
    .faq-item-content
      height var(--height)
      transitions(.15s)
    .faq-item-content-text
      transform translateY(0)
      transitions(.15s)
.faq-item-header
  display flex
  justify-content flex-start
  align-items center
  padding 16px 48px 16px 24px
  position relative
  cursor pointer
  &:after
    content ''
    position absolute
    top 50%
    transform translateY(-50%)
    right 24px
    width 22px
    background-repeat no-repeat
    background-position center center
    height 22px
    background url('~assets/img/faq-plus.svg')
    transitions(.2s)
  p 
    color #00417F
    font-size 20px
    font-weight bold
    line-height 150%
.faq-item-content
  width 100%
  overflow hidden
  height 0
  text-align left
  transitions(.2s)
  .faq-item-content-text
    padding 8px 24px 0
    position relative
    transform translateY(30px)
    transitions(.15s)
    color: #606266
    line-height 150%
    font-size 16px
    p
      margin-bottom 20px
</style>