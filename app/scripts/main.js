'use strict';

var windowSmall = 768,
    $docWindow = $(document.window),
    viewportWidth = $docWindow.width();

(function ($, window, undefined) {

  var $body = $(document.body),
      siteNav = $('div#site-nav-collapse'),
      pageNav = $('nav.page-nav'),
      siteNavButton = $( "button.site-nav-toggle" ),
      pageNavButton = $( "button.page-nav-toggle" );

  // Add overlay for menu toggles
  $body.append('<div class="overlay">');
  var overlay = $('div.overlay');
  overlay.hide();
  pageNav.hide();

  // Toggle site nav visiblity
  siteNavButton.on("click", function() {
    menuToggle(siteNav);
  });

  // Toggle page nav visibility
  pageNavButton.on("click", function() {
    menuToggle('nav.page-nav');
  });

  // Close menus when overlay is clicked
  overlay.on("click", function() {
    menuToggle(siteNav);
    menuToggle('nav.page-nav');
  });

  // target portfolio thumbnails
  $('#page-nav-collapse a').hover(function() {
    var target = $(this).attr("data-target");
    $(target).addClass('hover');
  }, function() {
    var target = $(this).attr("data-target");
    $(target).removeClass('hover');
  });

  $('div.thumb a.fluidbox').before('<div class="browser-chrome browser-chrome-small"><div class="browser-header"><ul class="browser-buttons"><li></li><li></li><li></li></ul><div class="browser-tab"></div></div></div>');

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


  // SCROLL EFFECTS

  $(window).scroll(function() {
    $('html').addClass('screen-scroll');
    // Get scroll position
    var wst = $(window).scrollTop();// wst = Window Scroll Top

    // only enable scroll effects on larger devices
    if (viewportWidth > windowSmall) {
      $('div.img-bg').each(function(i) {

        var $this = $(this),
            offset = $this.offset();

        if (offset.top <= wst) { // if object is scrolled to
          var st = wst - offset.top,
              img = $this.find('div.img-src'),
              blur = $this.find('div.img-blurred'),
              content = $this.find('div.img-bg-content'),
            // scroll value and opacity
            opacityImg = (st/600),
            opacityContent = (150/st),
            moveVal = (st/4);
          $(blur).css('opacity', opacityImg);
          $(content).css({
            "-webkit-transition-duration": "0",
            "-webkit-transform": "translate3d(0, " + moveVal + "px, 0)",
            "-moz-transition-duration": "0",
            "-moz-transform": "translate3d(0, " + moveVal + "px, 0)",
            "transition-duration": "0",
            "transform": "translate3d(0, " + moveVal + "px, 0)",
            "opacity": opacityContent,
            "z-index": i
          });
          $(img).css("z-index", i);
          i+=1;
        }
      });
    }
  });

  // make sure events fire after window is resized
  $(window).resize(function() {
    // fire events even on window resize
  });


  // FUNCTIONS

  // toggle site nav visibility
  var menuToggle = function(m) {

    if ( $(m).is(':hidden') ) {
      $(m).fadeToggle(200);
      $(overlay).fadeToggle(200);
      $body.toggleClass("site-nav-closed");
    } else {
      $(m).fadeOut(200);
      $(overlay).fadeOut(200);
      $body.removeClass("site-nav-closed");
    }
  };

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
