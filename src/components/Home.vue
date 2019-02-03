<template lang='pug'>
  .home
    .hero
      img(:src='hero_image')
      .wrapper.hero-content.text-center.content-editor(v-html="hero_content")
    .section
      .wrapper
        .row
          .col-1-of-3
            h1 this olumn 
          .col-1-of-3
            h1 this is a column 
          .col-1-of-3
            h1 this is a column 
        .row
          .col-1-of-3
            h1 this olumn 
          .col-1-of-3
            h1 this is a column 
          .col-1-of-3
            h1 this is a column 
</template>

<script>
import API from '../js/API'

export default {
  data(){
    return {
      hero_image: '',
      hero_content: ''
    }
  },
  beforeRouteEnter(to, from, next){
    //fetch data before coming to this route so the transition is smooooth
    API.fetch('/pages/?slug=home', (data) => {
      // after this is done loading, do this (next)
      next(vm => vm.setData(data))
    })
  },
  methods: {
    setData(data){
      const page = data[0]
      //set the data after it is loaded
      this.hero_image = page.acf.background_image.url
      this.hero_content = page.acf.hero_content
      console.log(page)
    }
  }
}
</script>