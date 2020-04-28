

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    $('.home-title__text').css({
      'transform': 'translate(0%, ' + scroll / 5 + '%'
    });
    $('.social-list').css({
      'transform': 'translate(0%, ' + scroll / -5 + '%'
    });
    // $('.social-list').css({
    //   'transform': 'translate(0%, ' + scroll / 5 + '%'
    // });
  });

  if ($(window).width() < 768) {
    // some code
  }

});
