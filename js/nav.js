let nav = $('.nav');
let scrolled = false;

$(window).scroll(function () {
  if (100 < $(window).scrollTop() && !scrolled) {
    nav.addClass('visible').animate({ top: '0px' });
    scrolled = true;
  }
  if (100 > $(window).scrollTop() && scrolled) {
    nav.animate({ top: '-50px' });
    setTimeout(function () {
      nav.removeClass('visible');
    }, 500);
    scrolled = false;
  }
});
