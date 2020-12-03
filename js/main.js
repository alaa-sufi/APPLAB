$(document).ready(function () {
  var scrolltotop = $(".scrolltop");
  //start hide loading & animation header
  $(".loading")
    .delay(1000)
    .fadeOut(100, function () {
      $(".header .phone ").addClass("slide-in-right");
      $("body").css("overflowY", "auto");

     
    });
  //end hide loading & animation header

  //start show width of window
  $(window).resize(function () {
    var width = $(window).width();
    console.log(width);
  });
  //end show width of window

  //start add/remove active class
  $(
    ".mynav ul li:not(.button),.faq .question div,.footer .bottomnavbar li"
  ).click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  //end add/remove active class

  //start change a testimonial
  $(".testimonial .arrows .right").click(function () {
    if ($(".testimonial .media.active").is("div:last-of-type")) {
      $(this).removeClass("active");
      $(this).prev().addClass("active");
    } else {
      $(this).prev().addClass("active");
      $(".testimonial .media.active")
        .removeClass("active")
        .next(".media")
        .addClass("active");
      $(".testimonial .client.active")
        .removeClass("active")
        .next(".client")
        .addClass("active");
    }
  });

  $(".testimonial .arrows .left").click(function () {
    if ($(".testimonial .media.active").is("div:first-of-type")) {
      $(this).removeClass("active");
      $(this).next().addClass("active");
    } else {
      $(".testimonial .media.active")
        .removeClass("active")
        .prev(".media")
        .addClass("active");
      $(this).next().addClass("active");
      $(".testimonial .client.active")
        .removeClass("active")
        .prev(".client")
        .addClass("active");
    }
  });

  //end change a testimonial

  // strat show/hide scrolltop and click
  scrolltotop.css("display", "none");
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
      scrolltotop.fadeIn(1000);
    } else {
      scrolltotop.fadeOut(1000);
    }
    
  });
  scrolltotop.click(function () {
    console.log("click scroll");

    $("html,body").animate({ scrollTop: 0 }, 1000);
  });
  ////end show/hide scrolltop and click

  //start smooth scroll
  $(".bottomnavbar li a,.mynav li a").click(function () {
    var link = $(this).attr("data-href");
    console.log(link);
    $("html,body").animate({ scrollTop: $(link).offset().top }, 1000);
   

  });
  //end smooth scroll
});
