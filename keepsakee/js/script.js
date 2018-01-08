//m-navigation--

  $(function(){
    var link = $('.burger');
    var menu = $('.m-navigation');
    var close = $('.close');
    link.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-navigation__active')
    });
    close.on('click', function(event){
      event.preventDefault();
      menu.toggleClass('m-navigation__active')
    });
  });