
// Mobile Blog Slider

$(document).ready(function() {

    // header transparent / not transparent
    const $document = $(document),
          $element = $('#header'),
          navbarTransparent = 'navbar-transparent';

    $document.scroll(function() {
        if($document.scrollTop() >= 200) {

            $element.removeClass(navbarTransparent);

        } else {

            $element.addClass(navbarTransparent);

        }
    });

    // Mobile Nav Open
    const hamburgerIcon = $('.main-nav--actions-hamburger');
    const mobileNav = $('.mobile-nav');
    hamburgerIcon.click(function () {
        mobileNav.toggleClass('open');
    })

    // Slider
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
    });

    // Welcome section click on image and show video;
    const image = $('.welcome-content--video--image'),
          video = $('.welcome-content--video--embed')

    image.click(() => {
        image.css('display', 'none');
        video.css('display', 'block');
    })

    // Counter Stats
    $('.stats-num').counterUp({
        time: 900
    });
 
    // Animate Sections / Init AOS
    AOS.init();

})