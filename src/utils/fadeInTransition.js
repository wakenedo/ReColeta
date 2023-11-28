$(document).ready(function () {
  $('body').hide(); // Hide the container element initially

  // Wait for the page to load completely
  setTimeout(function () {
    $('body').fadeIn(300); // Fade in the container element
  }, 0); // Transition immediately (remove this if you want a delay before the transition)
});
