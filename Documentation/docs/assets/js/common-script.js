jQuery(document).on('ready', function($) {
    "use strict";

      // define
      $(".docs_version").text("6.0");
      $(".docs_name").text("VMS");
      $(".docs_name_short").text("Trackigniter - Fleet Management System With Live GPS Tracking");
      $(".docs_email").text("codeforts@gmail.com");
      $(".docs_email2").text("");

      // Smooth scrolling using jQuery easing
      $("a[href^='#']").on('click', function(e) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                  $('html, body').animate({
                  scrollTop: (target.offset().top - 50)
                  }, 1000, "easeInOutExpo");
                  return false;
            }
      });

      // Scrollspy offset
      $('body').scrollspy({
            target: '#mainNav',
            offset: 75
      });

}(jQuery)); // End jQuery