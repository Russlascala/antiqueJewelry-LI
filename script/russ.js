/* $(".goTop").click(function () {
  $('html,body').animate({
    scrollTop: $(".jotform-form").offset().top
  },
    'slow');
}); */
/* $(".goTop").click(function () {
  var next;
  next = $(this).parent().next().find(".jotform-form");
  $("html, body").scrollTop(next.offset().top);
}); */

/* var scrollTop = $(window).scrollTop();
var elementOffset = $('.jotform-form').offset().top;
var distance = (elementOffset - scrollTop);


console.log(distance);
 */


/* $(".goTop").on("click", function () {
  var height = ($(".form-contain").height());
  console.log(height);

  $("body").scrollTop(height+px);
});

var scrollTop = $(window).scrollTop();
var elementOffset = $('.form-contain ').offset().top;
var distance = (elementOffset - scrollTop); */
/* 
$(document).ready(function () {
  $(".goTop").on("click", function (e) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1600);

  });
}); */

function goToForm() {
  var elmnt = document.getElementById("201465212693048");
  elmnt.scrollIntoView();
}


function findLoc(){
  var map = document.getElementById("gMap");
  map.scrollIntoView();
}