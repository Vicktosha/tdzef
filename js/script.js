jQuery(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 576,
                    settings: {
                        arrows: false
                    }
          }
        ]
    });
  });

  jQuery(document).ready(function(){
    $('.slider_card').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1431,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
          },
          {
            breakpoint: 1016,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
          },
          {
            breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
          }
        ]
    });
  });


  jQuery(document).ready(function(){
    $('.product-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 576,
                    settings: {
                        arrows: false
                    }
          }
        ]
    });
  });

  $(document).ready(function() {
    $(document).on('click','.header__item_search', function(){
        $('.mobile-search').toggleClass('mobile-search_active');
    });
});