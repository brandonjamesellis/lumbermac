import $ from 'jquery'

~(function(){
    function handleScroll(){
        const limit = $(window).height() / 2
        const scroll = $(window).scrollTop()

        if(scroll > limit){
            $('.main-header').addClass('sticky')
        } else {
            $('.main-header').removeClass('sticky')
        }
    }

    function init(){
        $(window).scroll(handleScroll)
    }

    $(document).ready(init)
})()