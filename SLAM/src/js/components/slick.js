/* eslint-env jquery */
$(document).ready(function(){
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,

    nextArrow: '<a class="next" href="./public/img/arrow-right.png"></a>',
    prevArrow: '<a class="prev" href="./public/img/arrow-left.svg"></a>',
  });
});
