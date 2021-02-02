<template>
  <div class="error-box" :class="{'active': status}">{{text}}</div>
</template>
<script>
  export default {
    name: 'ErrorBox',
    props: {
      text: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      },
      marginBottom: {
        type: Number,
        required: false,
        default: 0
      }
    },
    mounted () {
      this.setStyle()
    },
    methods: {
      setStyle () {
        this.$el.style.setProperty('--margin', this.marginBottom+'px')
      }
    }
  }
</script>
<style lang="stylus">
.error-box
  color #fff
  font-size 14px
  line-height 22px
  opacity 0
  transform translateY(10px)
  transitions()
  visibility hidden
  margin-bottom var(--margin)
  &.active
    transitions()
    visibility visible
    opacity 1
    transform translateY(0)
</style>