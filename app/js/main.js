!function ($) {

  // Document Ready
  $(function () {

    var $window = $(window)
    var $body   = $(document.body)
    var navHeight = 50
    var windowSmall = 740;
    var site_nav_button = $( "button.site-nav-toggle" );
    var page_nav_button = $( "button.page-nav-toggle" );
    var nav_link_span = "nav.site-nav a span";

    // fix kerning on home page banner
    $('section.banner-site h1.banner-title').lettering();

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
  })
  // End Document Ready

}(jQuery)

function webFontsLoaded() {
  !function ($) {
    $('.wf-active section.post-excerpt footer').slabText();
  }(jQuery)
}