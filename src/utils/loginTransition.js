$(document).ready(function () {
  // Apply initial styling to the container element
  $('.container').css({
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out'
  });

  // Wait for the page to load completely
  setTimeout(function () {
    $('.container').css('opacity', 1); // Fade in the container element
    setTimeout(function () {
      $('.container').css('opacity', 0); // Fade out the container element
      setTimeout(function () {
        window.location.href = 'Pages/Login/index.html'; // Redirect to the new URL
      }, 500); // Wait for the fade-out animation to complete (adjust as needed)
    }, 3000); // Wait for 3 seconds before fading out (adjust the delay as needed)
  }, 0); // Transition immediately (remove this if you want a delay before the transition)
});
