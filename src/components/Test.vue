<template lang='pug'>
  .test
    .block.block-danger
      .wrapper
        .post(v-for='post in posts')
          h4 {{ post.title.rendered }}
</template>

<script>
import API from '../js/API'

export default {
  data(){
    return {
      posts: []
    }
  },
  beforeRouteEnter(to, from, next){
    //fetch data before coming to this route so the transition is smooooth
    API.fetch('/posts', (data) => {
      // after this is done loading, do this (next)
      next(vm => vm.setData(data))
    })
  },
  methods: {
    setData(data){
      //set the data after it is loaded
      this.posts = data
    }
  }
}
</script>