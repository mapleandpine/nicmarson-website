var $window = $(window),
    $body   = $(document.body),
    navHeight = 50,
    windowSmall = 768,
    viewportWidth = $(window).width(),
    viewportHeight = $(window).height(),
    site_nav = $('nav.site-nav'),
    page_nav = $('nav.page-nav'),
    site_nav_button = $( "button.site-nav-toggle" ),
    page_nav_button = $( "button.page-nav-toggle" );

/* global BackgroundCheck:false */

document.addEventListener('DOMContentLoaded', function () {
  BackgroundCheck.init({
    targets: '.site-header'
  });
});

$(function() {

  // Add overlay for menu toggles
  $('body').append('<div class="overlay">');
  var overlay = $('div.overlay');
  overlay.hide();
  site_nav.hide();
  page_nav.hide();

  // Toggle site nav visiblity
  site_nav_button.on("click", function() {
    menu_toggle('nav.site-nav');
  });

  // Toggle page nav visibility
  page_nav_button.on("click", function() {
    menu_toggle('nav.page-nav');
  });

  // Close menus when overlay is clicked
  overlay.on("click", function() {
    menu_toggle('nav.site-nav');
    menu_toggle('nav.page-nav');
  });

  // target portfolio thumbnails
  $('#page-nav-collapse a').hover(function() {
    var target = $(this).attr("data-target");
    $(target).addClass('hover');
  }, function() {
    var target = $(this).attr("data-target");
    $(target).removeClass('hover')
  });

  // switch from low res to high res images
  $(".img").each(function() {
    if (Modernizr.mq('only screen and (max-width: 768px))')) {
      $(this).attr("src", $(this).attr("data-big"));
    }
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
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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
        var $this = $(this);
        var offset = $this.offset();
        if (offset.top <= wst) { // if object is scrolled to
          var st = wst - offset.top;
          var img = $this.find('div.img-src')
          var blur = $this.find('div.img-blurred')
          var content = $this.find('div.img-bg-content')
          // scroll value and opacity
          opacityImg = (st/600);
          opacityContent = (150/st);
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
          i+1;
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
  var menu_toggle = function(m) {

    if ( $(m).is(':hidden') ) {
      $(m).fadeToggle(200);
      $(overlay).fadeToggle(200);
      $body.toggleClass("site-nav-open");
    } else {
      $(m).fadeOut(200);
      $(overlay).fadeOut(200);
      $body.removeClass("site-nav-open");
    }
  }
});


// After web fonts are loaded
function webFontsLoaded() {
  $(function() {

    if (viewportWidth > windowSmall) {

      // run after web fonts are loaded to get correct width
      $('html.wf-active section.post-excerpt footer').slabText();

      // fix kerning on home page banner
      $('section.banner-site h1.name span:last-child').lettering();
    }
  });
}

var rr = function(x) {
  var i = x,
      n = "never gonna";
  do {
    i -= 1;
    console.log( n + " give you up" );
    console.log( n + " let you down" );
  } while ( i > 0 );
}

rr(6);
