/**
 * Anchor namespace.
 */
anchor = window.anchor || {};

/**
 * Anchor util.
 */
anchor.util = anchor.util || {};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param {Function} func Function to throttle.
 * @param {Number} wait Wait window.
 * @param {Boolean} immediate Whether to run immediately.
 * @return {Function} Debounced function.
 */
anchor.util.debounce = function(func, wait, immediate) {
  var result;
  var timeout = null;

  return function() {
    var context = this, args = arguments;

    var later = function() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};


/**
 * Boolean if mouse has been detected.
 * @type {boolean}
 */
anchor.util.mouseEventsDetected = !Modernizr.touch;


/**
 * Boolean if listening for first mouse event.
 */
anchor.util.listeningForFirstMouseEvent = false;


/**
 * Listens for first mouse event.
 * @param {function} cb Callback function.
 */
anchor.util.listenForFirstMouseEvent = function(cb) {
  if (anchor.util.listeningForFirstMouseEvent) { return; }

  anchor.util.listeningForFirstMouseEvent = true;

  // listen for mouse move once on the document
  $(document).one('mousemove', function() {
    anchor.util.mouseEventsDetected = true;
    anchor.util.listeningForFirstMouseEvent = false;

    cb();
  });
};


/**
 * Boolean flag if scrolling.
 */
anchor.util.isScrolling = window['isScrolling'] = false;


/**
 * Add a 'hoverable' body class when :hover events should
 * be attached (eg not scrolling or on touch device).
 * @param {string=hoverable} clsName Name of the class to apply.
 */
anchor.util.applyBodyClassWhenNotScrolling = function(clsName) {
  var body = $('body');

  clsName = clsName || 'hoverable';

  if (!anchor.util.mouseEventsDetected) {
    anchor.util.listenForFirstMouseEvent(function() {
      anchor.util.applyBodyClassWhenNotScrolling(clsName);
    });
    return;
  }

  body.addClass(clsName);

  var debouncedOnScroll = anchor.util.debounce(function() {
    anchor.util.isScrolling = window['isScrolling'] = false;
    body.addClass(clsName);
  }, 200);

  $(window).scroll(function() {
    if (!anchor.util.isScrolling) {
      anchor.util.isScrolling = window['isScrolling'] = true;
      body.removeClass(clsName);
    }

    debouncedOnScroll();
  });
};
