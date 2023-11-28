$(document).ready(function () {
  var totalSections = $('.container-content').length;
  var currentSectionIndex = 0;

  // Generate dot menu dynamically
  for (var i = 0; i < totalSections; i++) {
    $('.dot-menu').append('<span class="dot"></span>');
  }

  // Show the initial active section
  $('.container-content').eq(currentSectionIndex).addClass('active-section');
  $('.dot').eq(currentSectionIndex).addClass('active');

  // Handle dot menu click event
  $('.dot').on('click', function () {
    var dotIndex = $(this).index();
    changeSection(dotIndex);
  });

  function changeSection(index) {
    if (index === currentSectionIndex) {
      return; // Do nothing if the same dot is clicked
    }

    var currentSection = $('.container-content').eq(currentSectionIndex);
    var nextSection = $('.container-content').eq(index);

    currentSection.removeClass('active-section');
    nextSection.addClass('next-section');

    // Trigger reflow to ensure transition starts
    void nextSection.get(0).offsetWidth;

    currentSection.addClass('prev-section');
    nextSection.removeClass('next-section').addClass('active-section');

    // Remove classes after transition ends
    setTimeout(function () {
      currentSection.removeClass('prev-section');
    }, 300);

    // Update dot classes
    $('.dot').eq(currentSectionIndex).removeClass('active');
    $('.dot').eq(index).addClass('active');

    currentSectionIndex = index;
  }
});

