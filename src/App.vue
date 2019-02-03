<template lang='pug'>
  #app
    .loading
      img(src='./assets/loading.gif')
    header.main-header
      .wrapper
        img.logo(src="./assets/logo-lumbermac.png")
        nav.main-menu
          ul
            li
              router-link.nav-link(to='/test') Order
            li
              router-link.nav-link(to='/test2') About
            li
              router-link.nav-link(to='/test3') Contact
    transition(:name="transitionName")
      router-view.page
    footer This is a footer
</template>

<script>
import './js/header-changer'

export default {
  name: 'app',
  data(){
    return {
      transitionName: 'page-slide-left',
      lastRoute: '/'
    }
  },
  watch: {
    '$route' (to, from) {
      this.transitionName = to.path == this.lastRoute ? 'page-slide-right' : 'page-slide-left'
      this.lastRoute = from.path
    }
  }
}
</script>

<style lang="sass">
  @import 'sass/style'
</style>
