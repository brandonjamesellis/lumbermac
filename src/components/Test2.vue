<template lang='pug'>
  .test2
    .block.block-danger
      .wrapper
        .editor-content(v-html='content')
</template>

<script>
import API from '../js/API'

export default {
  data(){
    return {
      content: ''
    }
  },
  beforeRouteEnter(to, from, next){
    //fetch data before coming to this route so the transition is smooooth
    API.fetch('/pages?slug=about', (data) => {
      next(vm => vm.setData(data))
    })
  },
  methods: {
    setData(data){
      //set the data after it is loaded
      this.content = data[0].content.rendered
    }
  }
}
</script>