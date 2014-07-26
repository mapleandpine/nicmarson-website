'use strict';

var windowSmall = 768,
    $docWindow = $(document.window),
    viewportWidth = $docWindow.width();

(function ($, window, undefined) {

  console.log(windowSmall, viewportWidth);

  // target portfolio thumbnails
  $('#page-nav-collapse a').hover(function() {
    var target = $(this).attr("data-target");
    $(target).addClass('hover');
  }, function() {
    var target = $(this).attr("data-target");
    $(target).removeClass('hover');
  });

  // activate fluidbox, a lightbox module seen on Medium with fluid transitions
  $('a.fluidbox, [data-fluidbox]').fluidbox({
    closeTrigger: [
      { selector: '#fluidbox-overlay', event: 'click'  }, // close fluidbox when overlay is clicked
      { selector: 'window',            event: 'resize' } // close fluidbox on window resize
    ]
  });

  // Smooth scrolling plugin by Chris Coiyer
  // Source: http://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  var rr = function(x) {
    var i = x,
        n = "never gonna";
    do {
      i -= 1;
      console.log( n + " give you up" );
      console.log( n + " let you down" );
    } while ( i > 0 );
  };

  rr(6);
})(jQuery, window);
