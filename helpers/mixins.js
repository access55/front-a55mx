
export default {
  data: () => ({
    animationPaused: false
  }),
  created () {
    window.addEventListener('scroll', this.debounce(() => this.scrollEvent(), 200))
  },
  destroyed () {
    window.removeEventListener('scroll', this.debounce(() => this.scrollEvent(), 200))
  },
  mounted () {
    this.$nextTick(() => this.scrollEvent())
  },
  methods: {
    scrollEvent () {
      const windowTop = window.pageYOffset + ((window.innerHeight * 9.5) / 10)

      // animações
      const animate = document.querySelectorAll('[data-animate]')
      if(animate.length) {
        animate.forEach(function(element) {
          if(windowTop > element.offsetTop) {
            element.classList.add('active');
          } 
        })
      }

      // numeros
      if(document.querySelector('.numbers')) {
        if(windowTop > document.querySelector('.numbers').offsetTop) {
          console.log(this.animationPaused)
          this.animationPaused = true
        }
      }
      
    },
    debounce(func, wait, immediate) {
      let timeout
      return function(...args) {
        const context = this
        const later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }
  }
}  