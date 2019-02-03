import $ from 'jquery'

var API = {}

/**
 *  Fetches Data from the API
 *  @oaran path (string) - where are we fetching from
 *  @param successCallback (func) - a callback on success
 **/
API.fetch = function(path, successCallback){
  const start = Date.now()
  const minimumLoadTime = 1000
  const fadeTime = 500

  $.ajax({
    url: 'http://lumbermac.bluem.work/wp-json/wp/v2' + path,
    beforeSend: function () {
      $('.loading').fadeIn(fadeTime) 
    },
    success: (data) => {
      const now = Date.now()
      const timeTaken = now - start
      
      let timeoutTimer = minimumLoadTime - timeTaken
          timeoutTimer = timeoutTimer < 1 ? 1 : timeoutTimer

      setTimeout(() => {
        $('.loading').fadeOut(fadeTime)
        successCallback(data)
      }, timeoutTimer)
    },
    error: (error) => {
      /* Handle error */
      $('.loading').fadeOut(fadeTime)
      console.error(error)
      alert(error.statusText)
    }
  })
}

export default API