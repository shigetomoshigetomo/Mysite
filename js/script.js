$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 200;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});
