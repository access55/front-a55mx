<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-address">
        <img src="~assets/img/logo-footer.svg" alt="a55" width="96" height="41">
        <SocialNetworks 
          :twitter="options.twitter"
          :linkedin="options.linkedin"
          :blogger="options.blogger"
        />
        <p v-html="options.address"></p>
        <div class="footer-extra-links">
          <nuxt-link to="#">Aviso de privacidad</nuxt-link>
          <nuxt-link to="#">Termos y condiciones</nuxt-link>
        </div>
      </div>
      <div class="footer-sitemap">
        <div class="footer-sitemap-categories">
          <div class="footer-sitemaps-cats">
            <h6>a55</h6>
            <ul>
              <li>
                <nuxt-link to="/blog">Blog</nuxt-link>
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
                <a href="#" target="_blank" rel="noopener noreferrer">Plataforma</a>
              </li>
            </ul>
          </div>
          <div class="footer-sitemaps-cats">
            <h6>America latina</h6>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">México</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">Brasil</a>
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
        <div class="footer-sitemap-credits">
          <div class="footer-sitemap-credits-text" v-html="options.credits"></div>
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
  margin-top 92px
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
  img
    margin-bottom 40px
  p
    margin-top 50px
    font-weight 300
    line-height 150%
    color #fff
    font-size 12px
.footer-sitemap
  width calc(100% - 310px)
.footer-extra-links
  margin-top 100px
  a
    font-weight 300
    text-decoration none
    color #fff
    font-size 12px
    display inline-block
    margin-bottom 30px
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
</style>