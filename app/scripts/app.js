/**
 * Initialize the Rdio experience.
 */
rdio.init = function() {
  anchor.util.applyBodyClassWhenNotScrolling();

  // initialize responsive images
  rdio.initResponsiveImages();

  // Resize Controller.
  rdio.rc = new ResizeController({
    'throttleMs': 100
  });

  // Scroll Controller.
  rdio.sc = new ScrollController({
    'debounceMs': 100
  });

  // Breakpoint Controller.
  rdio.bc = new BreakpointController({
    'breakpoints': {
      'mobile': { max: 767 },
      'tablet': { min: 768, max: 1024 },
      'desktop': { min: 768 }
    }
  });

  // Example of using resize event
  rdio.rc.on('resize', function(e) {
    var width = e[0];  // window width on resize
    var height = e[1]; // window height on resize
  });

  // Example of using resize end event
  rdio.rc.on('resizeEnd', function(e) {
    var width = e[0];  // window width on resize end
    var height = e[1]; // window height on resize end
  });

  rdio.bc.on('breakpoint', function(e) {
    var point = e[0]; // mobile, tablet, desktop
    var state = e[1]; // enter or exit

    // Update responsive images
    for (var i = 0, l = rdio.responsiveImages.length; i < l; i++) {
      ResponsiveImage.update(rdio.responsiveImages[i]);
    }
  });

  // Example to observe an element enter and exit with a 0px buffer
  var $observeElement = $('.js-observe-example');
  var observer = new ElementVisibleController($observeElement, {
    'buffer': -100
  });

  observer.on('enter', function() {
    TweenLite.to($observeElement.find('img'), 0.5, {
      'rotationZ': 360,
      'ease': Expo.easeOut
    });
  });

  observer.on('exit', function() {
    TweenLite.to($observeElement.find('img'), 0.5, {
      'rotationZ': 0,
      'ease': Expo.easeOut
    });
  });


  // Init lazy images
  rdio.lazyImages = new rdio.LazyImages();

  // Init page specific JS
  rdio.initPageSpecificJS();
};

/**
 * Load page specific JS.
 */
rdio.initPageSpecificJS = function() {
  var pageName = $('body').data('controller');

  var pages = {
    'home': rdio.pages.Home,
    'features': rdio.pages.Features,
    'pricing': rdio.pages.Pricing,
    'devices': rdio.pages.Devices
  };

  if (('undefined' !== typeof pageName) && (pages[pageName])) {
    $('body').addClass(pageName);
    rdio.currentPage = new pages[pageName]();
  }
};

/**
 * Initialize responsive images.
 */
rdio.initResponsiveImages = function() {
  rdio.responsiveImages = $('.js-responsive-image');

  for (var i = 0, l = rdio.responsiveImages.length; i < l; i++) {
    var element = rdio.responsiveImages[i];
    var image = ResponsiveImage.createFromElement(element);

    rdio.responsiveImages.push(image);
    ResponsiveImage.update(image);
  }
};


// Kickoff Rdio
rdio.init();
