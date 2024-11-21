window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.menu').style.padding = ".5rem 0"
        document.querySelector('#cb_logo').style.width = "50px"
        document.querySelector('#cb_logo_name').style.height = "0px"
    } else {
        document.querySelector('.menu').style.padding = "2.25rem 0"
        document.querySelector('#cb_logo').style.width = "5rem"
        document.querySelector('#cb_logo_name').style.height = "auto"
    }
}