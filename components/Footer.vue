<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-address">
        <img
          src="~assets/img/logo-footer.svg"
          alt="a55"
          width="96"
          height="41"
          class="desktop footer-image">
        <SocialNetworks
          :twitter="options.twitter"
          :linkedin="options.linkedin"
          :blogger="options.blogger"
        />
        <p v-html="options.address" class="desktop footer-address-text"></p>
        <div class="footer-extra-links desktop">
          <a href="https://a55.tech/wp-content/uploads/2020/12/Politica_de_protecao_de_dados_a55.pdf" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
          <a href="https://a55.tech/wp-content/uploads/2020/12/Politica_de_protecao_de_dados_a55.pdf" target="_blank" rel="noopener noreferrer">Termos y condiciones</a>
        </div>
      </div>
      <div class="footer-sitemap">
        <div class="footer-sitemap-categories">
          <div class="footer-sitemaps-cats">
            <h6>a55</h6>
            <ul>
              <li>
                <a href="https://legacy.a55.tech/es/blog-a55/" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
            </ul>
          </div>
          <div class="footer-sitemaps-cats">
            <h6>Productos</h6>
            <ul>
              <li>
                <nuxt-link to="/creditos-empresariales">Créditos Empresariales</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer-sitemaps-cats">
            <h6>Portal</h6>
            <ul>
              <li>
                <a href="https://apply-mx.a55.tech/ingresar" target="_blank" rel="noopener noreferrer">Plataforma</a>
              </li>
            </ul>
          </div>
          <div class="footer-sitemaps-cats">
            <h6>America latina</h6>
            <ul>
              <li>
                <a href="https://a55.tech/MX" target="_blank" rel="noopener noreferrer">México</a>
              </li>
              <li>
                <a href="https://a55.tech" target="_blank" rel="noopener noreferrer">Brasil</a>
              </li>
            </ul>
          </div>
          <div class="footer-sitemaps-cats">
            <h6>Habla con nosotros</h6>
            <ul>
              <li>
                <a href="mailto:mexico@a55.tech"><strong>mexico@a55.tech</strong></a>
              </li>
            </ul>
            <p v-html="options.attendance"></p>
          </div>
        </div>
        <div class="footer-extra-links mobile">
          <a href="https://a55.tech/wp-content/uploads/2020/12/Politica_de_protecao_de_dados_a55.pdf" target="_blank" rel="noopener noreferrer">Aviso de privacidad</a>
          <a href="https://a55.tech/wp-content/uploads/2020/12/Politica_de_protecao_de_dados_a55.pdf" target="_blank" rel="noopener noreferrer">Termos y condiciones</a>
        </div>
        <div class="footer-mobile-box">
          <img
            src="~assets/img/logo-footer.svg"
            alt="a55"
            width="96"
            height="41"
            class="mobile footer-image">
          <p v-html="options.address" class="mobile footer-address-text"></p>
          <div class="footer-sitemap-credits">
            <div class="footer-sitemap-credits-text" v-html="options.credits"></div>
          </div>
       </div>
      </div>
    </div>
  </footer>
</template>
<script>
const SocialNetworks = () => import('~/components/SocialNetworks.vue')
export default {
  name: 'Footer',
  components: {
    SocialNetworks
  },
  computed: {
    options () { return this.$store.state.page.options }
  }
}
</script>
<style lang="stylus">
@import '~assets/css/functions.styl'
.main-footer
  box()
  margin-top 40px
  padding 48px 0
  background #292F44
  .container
    width calc(100% - 64px)
    max-width 1240px
    margin 0 auto
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items flex-start
.footer-address
  width 185px
.footer-image
  margin-bottom 40px
  &.mobile
    display none
.footer-address-text
  margin-top 50px
  font-weight 300
  line-height 150%
  color #fff
  font-size 12px
  &.mobile
    display none
.footer-sitemap
  width calc(100% - 310px)
.footer-extra-links
  margin-top 100px
  &.mobile
    display none
  a
    font-weight 300
    text-decoration none
    color #fff
    font-size 12px
    display inline-block
    line-height 250%
    margin-bottom 30px
    position relative
    &:hover:after
      width 100%
      transitions(.2s)
    &:after
      content ''
      width 0
      background #fff
      position absolute
      bottom 0
      left 0
      height 1px
      transitions(.2s)
.footer-sitemap-categories
  display flex
  justify-content space-between
  margin-bottom 80px
.footer-sitemaps-cats
  ul
    margin 0
    padding 0
    list-style-type none
  h6
    font-size 14px
    margin 0 0 15px
    color #0096FF
  a
    color #fff
    text-decoration none
    font-size 14px
    line-height 250%
    display inline-block
    position relative
    &:hover:after
      width 100%
      transitions(.2s)
    &:after
      content ''
      width 0
      background #fff
      position absolute
      bottom 2px
      left 0
      height 1px
      transitions(.2s)
  p
    font-size 12px
    font-weight 300
    margin-top 20px
    color #fff
.footer-sitemap-credits-text
  padding-top 48px
  border-top 1px solid #fff
  color #fff
  font-size 12px
  font-weight 300
  line-height 200%
@media all and (max-width: 1200px)
  .main-footer
    .container
      width calc(100% - 32px)
  .footer-sitemap
    width calc(100% - 250px)
@media all and (max-width: 1000px)
  .footer-address
    width 100%
    p
      margin-top 30px
    img
      display none
  .footer-sitemap
    width 100%
    margin-top 30px
  .footer-address-text
    &.mobile
      display block
    &.desktop
      display none
  .footer-image
    &.mobile
      display block
    &.desktop
      display none
  .footer-extra-links
    margin 20px 0
    &.desktop
      display none
    &.mobile
      display block
    a
      margin-right 30px
      margin-bottom 0
  .footer-sitemap-categories
    margin-bottom 50px
  .footer-mobile-box
    margin-top 50px
    padding-top 50px
    border-top 1px solid #fff
  .footer-sitemap-credits-text
    border none
@media all and (max-width: 850px)
  .footer-sitemap-categories
    flex-wrap wrap
  .footer-sitemaps-cats
    width 50%
    margin-bottom 30px
@media all and (max-width: 450px)
  .footer-sitemaps-cats
    width 100%
  .footer-extra-links
    display block
    a
      margin 0 0 20px 20px
      width auto
      &:first-child
        margin-left 0
</style>
