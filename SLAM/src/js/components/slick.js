/* eslint-env jquery */
$(document).ready(function(){
  $('.lazy').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:true,
    pauseOnDotsHover: true,
    arrows: true,

    nextArrow: '<button class="arrow  arrow--next"><img src="./public/img/arrow-right.png"></button>',
    prevArrow: '<button class="arrow  arrow--prev"><img src="./public/img/arrow-prev.png"></button>'
  });

  $('.promo-slider').slick({
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover:true,
    pauseOnDotsHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: '<button class="arrow  arrow-next"><img src="./public/img/arrow-color-right.png"></button>',
    prevArrow: '<button class="arrow  arrow-prev"><img src="./public/img/arrow-color-left.png"></button>'
  });

  var options = {
    lazyLoad: 'ondemand',
    arrows: true,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
  };

  // my slick slider as constant object
  const mySlider = $('.promo-slider').on('init', function(slick) {

    // on init run our multi slide adaptive height function
    multiSlideAdaptiveHeight(this);

  }).on('beforeChange', function(slick, currentSlide, nextSlide) {

    // on beforeChange run our multi slide adaptive height function
    multiSlideAdaptiveHeight(this);

  }).slick(options);


  // our multi slide adaptive height function passing slider object
  function multiSlideAdaptiveHeight(slider) {

    // set our vars
    let activeSlides = [];
    let tallestSlide = 580;

    // very short delay in order for us get the correct active slides
    setTimeout(function() {

      // loop through each active slide for our current slider
      $('.slick-track .slick-active', slider).each(function(item) {

        // add current active slide height to our active slides array
        activeSlides[item] = $(this).outerHeight();

      });

      // for each of the active slides heights
      activeSlides.forEach(function(item) {

        // if current active slide height is greater than tallest slide height
        if (item > tallestSlide) {

          // override tallest slide height to current active slide height
          tallestSlide = 580;

        }

      });

      // set the current slider slick list height to current active tallest slide height
      $('.slick-list', slider).height(tallestSlide);

    }, 10);

  }


  // when window is resized
  $(window).on('resize', function() {

    // run our multi slide adaptive height function incase current slider active slides change height responsively
    multiSlideAdaptiveHeight(mySlider);

  });

  // var dots = $('.promo-slider li');
  //   //вешаем обработчик на наши точки
  //   dots.click(function(){
  //     var $this = $(this);
  //     dots.removeClass('before after');
  //     //отображаем 2 предыдущие точки
  //     $this
  //       .prev().addClass('before')
  //       .prev().addClass('before');
  //     //отображаем 2 следующие точки
  //     $this
  //       .next().addClass('after')
  //       .next().addClass('after');

    
  //     //если мы в самом начале - добавляем пару последующих точек
  //     if(!$this.prev().length) {
  //       $this.next().next().next()
  //         .addClass('after').next()
  //         .addClass('after');
  //     }
  //     //на 2й позиции - добавляем одну точку
  //     if(!$this.prev().prev().length) {
  //       $this.next().next().next()
  //         .addClass('after');
  //     }
  // });
})
