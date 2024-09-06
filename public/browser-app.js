document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0,
    navbar = document.querySelector("nav"),
    navbarCollapse = document.querySelector(".navbar-collapse"),
    navbarToggler = document.querySelector(".navbar-toggler");

  // Hide Navbar on page scroll
  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(window.scrollY);

    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-60px"; // Scroll down - hide the navbar
    } else {
      navbar.style.top = "0px"; // Scroll up - show the navbar
    }

    lastScrollTop = scrollTop;
  });

  // Hide Navbar when out of focus
  document.addEventListener("click", function () {
    let navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  // Hide Navbar on scroll
  document.addEventListener("scroll", function () {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });

  // Add color class to Navbar when expanded
  navbarToggler.addEventListener("click", () => {
    if (!navbarCollapse.classList.contains("show")) {
      navbar.classList.add("nav-color");
    } else {
      navbar.classList.remove("nav-color");
    }
  });

  // Add color class to Navbar when scolled
  document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("nav-color");
    } else {
      navbar.classList.remove("nav-color");
    }
  });

  const scrollTime = 500;

  // Scroll to about section on click of home-arrow button
  document.querySelector(".scrolldown").addEventListener("click", function () {
    scrollToElement("#about", scrollTime);
  });

  // button - Go to Top
  let btn = document.querySelector("#button");

  // function - Go to Top
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToTop(scrollTime);
  });

  // when scollY > 700, show 'scrollToTop' button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1000) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  // smooth scroll to each section on click of nav-links
  let nav = document.querySelector("nav");
  let nav_height = nav.offsetHeight;

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      this.blur();
      let id = this.getAttribute("href");
      scrollToElement(id, scrollTime, nav_height);
    });
  });

  // Helper functions
  function scrollToElement(selector, duration, offset = 0) {
    const element = document.querySelector(selector);
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < 1) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  function scrollToTop(scrollDuration) {
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        window.scrollBy();
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
});
