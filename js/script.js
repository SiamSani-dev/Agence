$(function(){

// =========BANNER SECTION=========

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        dots: true,
      });

// ==========SUCCESS PART==========
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


// ==========CLIENT PART==========
    $('.client-slider').slick({
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       arrows: true,
       pauseOnHover: false,
       centerMode: true,
       centerPadding: '0px',
       prevArrow: '.left',
       nextArrow: '.right',
      });
})