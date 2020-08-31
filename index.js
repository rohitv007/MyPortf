$(document).ready(function () {

  // Loader code below
  setTimeout(function () {

    $('.loader-wrapper').fadeOut();
  }, 500);
    
    //Navbar scroll hide effect code below
  
    var c, currentScrollTop = 0,
      navbar = $('nav');
  
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
    $('#navbar .navbar-nav a').on('click', function () {
      $('#navbar .navbar-nav').find('li.active').removeClass('active');
      $(this).parent('li').addClass('active');
    });
  
  
  
  
    // $(window).on("load", function () {
    //   $(".loader-wrapper").fadeOut("slow");
    // });
  
  
  
    //Navbar hide on focus out
    $(function () {
      $(document).on("click scroll", function (event) {
        $('.navbar-collapse').collapse('hide');
      });
    });
  
    //Adding and removing active class on nav-items
    // $(document).on('click', 'ul li', function () {
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $(window).scroll(function(event){
    //     $(this).removeClass('active');
    //   });
    // });
  
  
    // Scroll to about section on click on span
  $(".scrolldown").click(function () {
    $('html,body').animate({
      scrollTop: $("#about").offset().top
    },
      30);
  
  });
  
  
  // go to top
  var btn = $('#button');
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
    
  var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 100);
  
  return false;
});

  
  nav.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');
    
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 100);
    
    return false;
  });
   
});