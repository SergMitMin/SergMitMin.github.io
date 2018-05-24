$(document).ready(function(){
  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.popup').fadeIn();
  });
    $('.popup-close').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.popup').fadeOut();
  });
/*Слайдер с отзывами*/
  $('.feedback-slider').slick({
        prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="../img/feedback/prev-arrow-button.svg"></button>',
        nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="../img/feedback/next-arrow-button.svg"></button>'
  });
/*Слайдер с преимуществами*/
  $('.features-slider').slick({
    dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>'
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

});