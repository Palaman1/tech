$(function () {

  $('.brgr__btn').on('click', function () {
    $('.brgr__list').toggleClass('brgr__list--active');
  });

  $('.title-one').on('click', function () {
    $('.content-one').toggleClass('content-one--active');
    $('.svg-one').toggleClass('svg-one--active');
  });

  $('.title-two').on('click', function () {
    $('.content-two').toggleClass('content-two--active');
    $('.svg-two').toggleClass('svg-two--active');
  });

  $('.title-three').on('click', function () {
    $('.content-three').toggleClass('content-three--active');
    $('.svg-three').toggleClass('svg-three--active');
  });

  $('.title-four').on('click', function () {
    $('.content-four').toggleClass('content-four--active');
    $('.svg-four').toggleClass('svg-four--active');
  });

  $('.title-five').on('click', function () {
    $('.content-five').toggleClass('content-five--active');
    $('.svg-five').toggleClass('svg-five--active');
  });

  $('.title-six').on('click', function () {
  $('.content-six').toggleClass('content-six--active');
    $('.svg-six').toggleClass('svg-six--active');
  });

  $(".brgr__list a, .menu__list a, .header__usp a, .about a, .footer__menu-list a, .footer__link, .footer__btn-link").on("click", function (e) {

    e.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;
    
    $('body,html').animate({scrollTop: top}, 1500);

  });

  $('marquee').mouseover(function () {
    $(this).attr('scrollamount', 0);
  })
    .mouseout(function () {
    $(this).attr('scrollamount', 5);
  });

});
