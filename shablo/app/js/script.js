//slider

$(document).ready(function(){
  $('.slider__wrapper').slick({
  	dots: true,
  	nextArrow: $('.next'),
  	prevArrow: $('.prev')
  });
});

//drop menu

$(function(){
    var link = $('.catalog');
    var menu = $('.drop-menu');
    var close = $('.car');
    link.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('drop-menu__active')
    });
    close.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('drop-menu__active')
    });
});

//mobile menu

$(function(){
    var link = $('.burger');
    var menu = $('.m-menu');
    var close = $('.close');
    link.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-menu__active')
    });
    close.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-menu__active')
    });
});