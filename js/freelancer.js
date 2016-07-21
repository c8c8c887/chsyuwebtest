/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-toggle').click(function(){
      $('#icon-bars').toggleClass('open');
    });
});


$(function(){
  var $portfolio = $('#portfolio');
  var winheight = $(window).height();
  var winwidth = $(window).width();
  var fullheight = $(document).height();

  var lastScrollTop = 0,
       st,
       direction,
       downcnt=0,
       upcnt=0;
  var detecDirection = function () {

        // st = window.pageYOffset;
        //
        // if (st > lastScrollTop) {
        //     direction = "down";
        //     downcnt++;
        //     if(downcnt>=10){
        //       $('nav').removeClass("navbar-fixed-top");
        //       $('nav').addClass("navbar-static-top");
        //       downcnt=0;
        //     }
        // } else {
        //     direction = "up";
        //     upcnt++;
        //     if(upcnt>=10){
        //       $('nav').addClass("navbar-fixed-top");
        //       $('nav').removeClass("navbar-static-top");
        //       upcnt=0;
        //     }
        // }
        //
        // lastScrollTop = st;
        //
    };


  $(window).scroll(function(){
    // detecDirection();
    animate_elems();
  });

  // $(window).bind('scroll', function() {
  //
  //   var dir = detectDirection();
  //   // console.log(dir);
  //
  // });


  function animate_elems() {
    // calculate distance from top of window
    wintop = $(window).scrollTop();
    // calculate distance of navbar from top of document

    if (winwidth <= 768){
      var mwintop = -wintop*2-0;
    }
    else{
      var mwintop = -wintop*2
    }
    var mwintop1 = -wintop*2

    $('#circle-img, .page-bg, .page-bg-resume').css({
      'margin-top':mwintop+'px'
    });
    $('.parallax').css({
      // 'background-position-y':mwintop+'px'
    });
  } //end animate function
}); //end document ready


// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

new WOW().init();


// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
