$(document).ready(function(){
  $('#open_button').on('click',function (e) {
    $(this).toggleClass("floating");
    $(this).toggleClass("animated");
    $(this).toggleClass("bounceOutUp");
    $("#left").toggleClass("animated");
    $("#left").toggleClass("slideOutLeft");
    $("#right").toggleClass("animated");
    $("#right").toggleClass("slideOutRight");
  });
});