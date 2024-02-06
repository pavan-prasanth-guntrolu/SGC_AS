// Get the element with the class 'margi' and 'nav-section'
var margiContainer = document.querySelector(".margi");
var navbar = document.querySelector(".nav-section");

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Get the scroll position
  var scrollPosition = window.scrollY;

  // Check if the scroll position is greater than a certain value (e.g., 130)
  if (scrollPosition > 130) {
    // Apply the blur background style
    margiContainer.style.backdropFilter = "blur(20px)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    // If not scrolled enough, remove the styles
    margiContainer.style.backdropFilter = "none";
    navbar.style.backdropFilter = "none";
  }
});

$(document).ready(function () {
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse("hide");
  });
});

// test for nav

$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggleClass("show-nav");
    $(".banner-section").toggleClass("collapsed");
  });

  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse("hide");
    $(".banner-section").removeClass("collapsed");
  });
});
