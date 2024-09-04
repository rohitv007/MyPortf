document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll hide effect code below
  let c,
    currentScrollTop = 0,
    navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    let a = window.scrollY;
    let b = navbar.offsetHeight;

    currentScrollTop = a;

    if (c < currentScrollTop && a > b + b) {
      navbar.classList.add("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.classList.remove("scrollUp");
    }
    c = currentScrollTop;
  });

  // Navbar active nav-item code below
  document.querySelectorAll("#navbar .navbar-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document
        .querySelector("#navbar .navbar-nav li.active")
        .classList.remove("active");
      this.closest("li").classList.add("active");
    });
  });

  // Navbar hide on focus out
  document.addEventListener("click", function () {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  document.addEventListener("scroll", function () {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  const scrollTime = 500;

  // Scroll to about section on click of span
  document.querySelector(".scrolldown").addEventListener("click", function () {
    scrollToElement("#about", scrollTime);
  });

  // Button - Go to top (Home section)
  let btn = document.getElementById("button");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 700) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // Go to top function
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop(scrollTime);
  });

  // smooth scroll to sections on-click of nav-items
  let nav = document.querySelector("nav");
  let nav_height = nav.offsetHeight;

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let id = this.getAttribute("href");
      scrollToElement(id, scrollTime, nav_height);
    });
  });

  // Helper functions
  function scrollToElement(selector, duration, offset = 0) {
    let element = document.querySelector(selector);
    let elementPosition = element.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let distance = elementPosition - startPosition - offset;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  function scrollToTop(duration) {
    scrollToElement("body", duration);
  }
});
