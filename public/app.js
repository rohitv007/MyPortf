const content = document.getElementById("content");
const loader = document.getElementById("loader-wrapper");

// show/hide loader on delay
function showContent() {
  loader.style.transition = "opacity 4s ease-out";
  loader.style.opacity = "0";
  setTimeout(() => {
    content.style.display = "block";
    loader.style.display = "none";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", showContent);
