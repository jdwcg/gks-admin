$(function(){
  var allPanels = $('.acc > ul').hide();
  // $('.acc ul:first-child').show();

  $('.acc > h2').click(function() {
    allPanels.slideUp();
    $(this).next().slideDown('easing');
    return false;
  });

  // $('.3depth').click(function(){
  //   $('.3depth ~ ul li').css({"background: red"})
  // })


});
