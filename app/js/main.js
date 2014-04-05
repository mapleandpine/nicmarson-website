!function ($) {

  // Document Ready
  $(function () {

    var $window = $(window),
        $body   = $(document.body),
        navHeight = 50,
        windowSmall = 740,
        site_nav_button = $( "button.site-nav-toggle" ),
        page_nav_button = $( "button.page-nav-toggle" ),
        nav_link_span = "nav.site-nav a span";

    // Toggle site nav
    site_nav_button.on("click", function() {
      site_nav_toggle();
    });

    // Toggle page nav
    page_nav_button.on("click", function() {
      page_nav_toggle();
    });

    // Toggle menus on hover
    $('#site-nav-collapse').hover(function() {
      $(this).addClass('in');
      $("body").removeClass("site-nav-closed");
    }, function() {
      $(this).removeClass('in');
      $("body").addClass("site-nav-closed");
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

    // toggle site nav visibility
    function site_nav_toggle() {
      $(site_nav_button).toggleClass('active');
      $("body").toggleClass("site-nav-closed");
      $('#site-nav-collapse').toggleClass('in');
    }

    // toggle page nav visibility
    function page_nav_toggle() {
      $(page_nav_button).toggleClass('active');
      $('body').toggleClass("page-nav-closed");
      $('#page-nav-collapse').toggleClass('in');
    }

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


    // Medium-like image blur effect
    $(window).scroll(function() {
      $('html').addClass('screen-scroll');
      // Get scroll position
      var wst = $(window).scrollTop();

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
    });
  })

  // End Document Ready

}(jQuery)


// After web fonts are loaded
function webFontsLoaded() {
  !function ($) {

    // run after web fonts are loaded to get correct width
    $('html.wf-active section.post-excerpt footer').slabText();

    // fix kerning on home page banner
    $('section.banner-site h1.name span:last-child').lettering();
  }(jQuery)
}