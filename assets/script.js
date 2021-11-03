$(function(){
  var allPanels = $('.acc ul').hide();
  $('.acc ul:first-child').show();

  $('.acc > h2').click(function(e) {
    e.preventDefault();
    allPanels.slideUp();
    $(this).next().slideDown('easing');
    return false;
  });

  $('.lnb').click(function(e){
    e.preventDefault();
    $(this).find('ul').stop().slideToggle();
  });

});
