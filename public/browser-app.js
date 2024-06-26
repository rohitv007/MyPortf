$(document).ready(function () {
  //Navbar scroll hide effect code below
  var c,
    currentScrollTop = 0,
    navbar = $("nav");

  $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
  });

  // Navbar active nav-item code below
  $("#navbar .navbar-nav a").on("click", function () {
    $("#navbar .navbar-nav").find("li.active").removeClass("active");
    $(this).parent("li").addClass("active");
  });

  //Navbar hide on focus out
  $(function () {
    $(document).on("click scroll", function (event) {
      $(".navbar-collapse").collapse("hide");
    });
  });

  const scrollTime = 500;

  // Scroll to about section on click of span
  $(".scrolldown").click(function () {
    $("html,body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      scrollTime
    );
  });

  // Button - Go to top (Home section)
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  // Go to top function
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, scrollTime);
  });

  // smooth scroll to sections on-click of nav-items
  $(function () {
    const nav = $("nav"),
      nav_height = nav.outerHeight();

    nav.find("a").on("click", function () {
      var id = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(id).offset().top - nav_height,
        },
        scrollTime
      );
      return false;
    });
  });
});
