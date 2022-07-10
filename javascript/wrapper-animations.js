// $(document).ready(function($) {

//   $(window).on('scroll', function() {

//     if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
//       $('body').addClass('tight');
//       $('.arrow').hide();
//     } else {
//       $('body').removeClass('tight');
//       $('.arrow').show();
//     }
//   });

//   $("html").on("click", "body.tight .wrapper", function() {
//     $('html, body').animate({
//       scrollTop: $('.wrapper').outerHeight() - $(window).height()
//     }, 500);
//   });

// });

// $('.arrow').click(function(){
//    $("html").animate({ scrollTop: $('html').prop("scrollHeight")}, 1200);
// });

$(document).ready(function(){

  $(window).scroll(function() {
    drawLine( $('#mySVG'),
              document.getElementById('triangle') );
  });
  
    drawLine( $('#mySVG'),
              document.getElementById('triangle') );

  function drawLine(container, line){
    
    var pathLength = line.getTotalLength(),
        maxScrollTop = $(document).height() - $(window).height(),
        percentDone = $(window).scrollTop() / maxScrollTop,
        length = percentDone * pathLength;
    line.style.strokeDasharray = [ length ,pathLength,].join(' ');
  }
  
});
