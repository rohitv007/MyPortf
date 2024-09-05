document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll hide effect code below
  let lastScrollTop = 0,
    navbar = document.querySelector("nav"),
    navbarCollapse = document.querySelector(".navbar-collapse"),
    navbarToggler = document.querySelector(".navbar-toggler");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-60px"; // Scroll down - hide the navbar
    } else {
      navbar.style.top = "0px"; // Scroll up - show the navbar
    }

    lastScrollTop = scrollTop;
  });

  // Navbar hide on focus out
  document.addEventListener("click", function () {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  // Navbar hide on document/window scroll
  document.addEventListener("scroll", function () {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  navbarToggler.addEventListener("click", () => {
    if (!navbarCollapse.classList.contains("show")) {
      navbar.classList.add("nav-color");
    } else {
      navbar.classList.remove("nav-color");
    }
  });

  document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("nav-color");
    } else {
      navbar.classList.remove("nav-color");
    }
  });

  const scrollTime = 500;

  // Scroll to about section on click of span
  document.querySelector(".scrolldown").addEventListener("click", function () {
    scrollToElement("#about", scrollTime);
  });

  // Button - Go to top (Home section)
  let btn = document.querySelector("#button");

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
