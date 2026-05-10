!(function (e) {
    "use strict";   

  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the necessary elements
    const togglerBtn = document.querySelector("#navbar-toggler");
    const togglerBtnClose = document.querySelector(".sidebar-one__close");
    const sidebar = document.querySelector(".sidebar-one");
    const body = document.body;

    // Check if elements exist before adding event listeners
    if (togglerBtn && sidebar) {
      togglerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Force add active class instead of toggle
        sidebar.classList.add("active");
        body.classList.add("locked");
      });
    }

    if (togglerBtnClose && sidebar) {
      togglerBtnClose.addEventListener("click", function (e) {
        e.preventDefault();
        // Force remove active class instead of toggle
        sidebar.classList.remove("active");
        body.classList.remove("locked");
      });
    }

    // Also add a click event on the overlay (if it exists) to close the sidebar
    const overlay = document.querySelector(".sidebar-one__overlay");
    if (overlay && sidebar) {
      overlay.addEventListener("click", function() {
        sidebar.classList.remove("active");
        body.classList.remove("locked");
      });
    }
  });

  jQuery(".close-offer").click(function () {
    jQuery(".header-offer").hide();
  });

  // Sticky header logic
  let header = document.querySelector(".header-main");
  window.addEventListener("scroll", () => {
    window.scrollY > 300 ? header.classList.add("sticky") : header.classList.remove("sticky");
  });   

})(jQuery);


(function($) {
  $(document).ready(function() {
      "use strict";
      
      var progressPath = document.querySelector('.progress-wrap path');
      var pathLength = progressPath.getTotalLength();
      
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

      var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
      }
      
      updateProgress();
      jQuery(window).scroll(updateProgress);	

      var offset = 50;
      var duration = 550;

      jQuery(window).on('scroll', function() {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
          } else {
            jQuery('.progress-wrap').removeClass('active-progress');
          }
      });				
      
      jQuery('.progress-wrap').on('click', function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      });
  });
})(jQuery);
