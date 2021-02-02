<template>
  <div class="numbers">
    <div class="container">
      <h2>{{ data.title }}</h2>
      <h3><span class="number-before" v-html="data.numbers.before"></span>
      <span class="numbers-number" id="numbers-number"></span>
      <span class="number-after" v-html="data.numbers.after"></span></h3>
      <p>{{ data.text }}</p>
      <div class="companies-list">
        <img 
          :key="index"
          v-for="(item, index) in data.companies" 
          :src="item.image.url" 
          :alt="item.image.description.length > 0 ? item.image.description : item.image.title" 
        />
      </div>
    </div>
  </div>
</template>
<script>
import { CountUp } from 'countup.js'
export default {
  name: 'NumberBlock',
  data: () => ({
    countUp: null
  }),
  props: {
    data: {
      type: Object,
      required: true
    },
    start: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    start (value) {
      if(value === true) {
        let countUp = new CountUp('numbers-number', parseInt(this.data.numbers.number, 10), {
          decimalPlaces: 2,
          separator: ".",
          decimal: ",",
          prefix: "$",
          duration: 8,
          startVal: 0,
          endVal: parseInt(this.data.numbers.number, 10)
        })
        countUp.start()
      }
    }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.numbers
  margin-top 33px
  .container
    width calc(100% - 128px)
    max-width 1164px
    margin 0 auto
    text-align center
  h2
    margin-bottom 40px
    color #00417F
    font-size 50px
    line-height 75px
    font-weight 700
  h3
    margin-bottom 40px
    color #00417F
    font-size 24px
    line-height 150%
    font-weight 700
    .big
      font-size 40px
  p
    font-size 24px
    color #606266
.numbers-number
  font-size 40px
.companies-list
  max-width 1040px
  margin 40px auto 0
  display flex
  justify-content space-between
  align-items center
@media all and (max-width: 1250px)
  .numbers
    .container
      width calc(100% - 64px)
</style>