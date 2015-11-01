(function(root, factory) {

  if ('function' === typeof define && define.amd) {
    define(['underscore'], function(_) {
      factory(root, _);
    });
  } else if ('object' === typeof exports) {
    factory(root, require('_'));
  } else {
    factory(root, root._);
  }

})(this, function(root, _) {
  'use strict';

  var Element = ('undefined' === typeof root.HTMLElement && root.Element) || root.HTMLElement;
  var Event = root.Event;

  _.extend(Element.prototype, {
    /**
     * @param {String} type
     * @param {Function} listener
     * @param {Boolean} [useCapture]
     */
    addEventListener: Element.prototype.addEventListener || function(type, listener, useCapture) {
      useCapture = useCapture || false;
      return this.attachEvent('on' + type, _.bind(listener, this));
    },

    /**
     * @param {String} type
     * @param {Function} listener
     * @param {Boolean} [useCapture]
     */
    removeEventListener: Element.prototype.removeEventListener || function(type, listener, useCapture) {
      useCapture = useCapture || false;
      return this.detachEvent('on' + type, listener);
    },

    remove: Element.prototype.remove || function() {
      this.parentNode.removeChild(this);
    }
  });

  _.extend(Event.prototype, {
    preventDefault: Event.prototype.preventDefault || function() {
      this.returnValue = false;
    },

    stopPropagation: Event.prototype.stopPropagation || function() {
      this.cancelBubble = true;
    }
  });
});
