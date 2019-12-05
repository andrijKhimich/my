function openMenu() {
  $('.humburger').toggleClass('open');
  $('.header-nav').toggleClass('active');
  $('.overlay').fadeToggle(600);
}

function closeMenu() {
  $('.humburger').removeClass('open');
  $('.header-nav').removeClass('active');
  $('.overlay').fadeOut(600);
}

$(document).ready(function () {
  $('.js-humburger').click(function () {
    openMenu();
  });

  $('.overlay').click(function () {
    closeMenu();
  });




  $(document).mousemove(function (e) {
    if ($(window).width() > 1024) {
      // $('.move.move-speed-4').parallax(+200, e);
      // $('.move.move-speed-3').parallax(-100, e);
      // $('.move.move-speed-2').parallax(-50, e);
      // $('.move.move-speed-1').parallax(-20, e);
    }
  });
  if ($(window).width() < 1199) {


    // FAQ page accordion
    $('.header-nav__item_icon').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        $(this).removeClass('active').closest('.header-nav__item_icon').find('.header-subnav').slideUp(400);
      } else {
        $(this).addClass('active').closest('.header-nav__item_icon').find('.header-subnav').slideDown(400);
        $(this).parent().siblings('.header-nav__item_icon').find('.header-nav__item_icon').removeClass('active');
        $(this).parent().siblings('.header-nav__item_icon').find('.header-subnav').slideUp(400);
      }
    });
  }

  if ($(window).width() < 768) {
    // some code
  }

});


$(window).scroll(function () {
  closeMenu();
});


$(window).on('orientationchange', function () {});

// END DOCUMENT READY


$(window).on('load', function () {

});


// checkind window sizes
$(window).resize(function () {

  if ($(window).width() > 1199) {
    closeMenu();
  }

  // if ($(window).width() < 991) {
  // }




  // if ($(window).width() < 768) {
  //   // some code
  // }
});

// project functions


// start animation
function startAnimation() {
  $('.js-scroll').each(function () {
    var sectionPos = $(this).offset().top;
    var windowPos = $(window).scrollTop() + $(window).height() / 1.2;
    if (sectionPos < windowPos) {
      // $(this).removeClass('slideDown');
    }
  });
}

// function to discard scrolling page 
function noScroll() {
  $('body').toggleClass('no-scroll');
}

$('.clients-slider').slick({
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.clients-btn_prev'),
  nextArrow: $('.clients-btn_next'),
  speed: 1000,
  centerMode: false,
  centerPadding: '0',
  cssEase: 'cubic-bezier(.49, .09, .44, .78)'
  // responsive: [{
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
});