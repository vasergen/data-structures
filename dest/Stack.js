'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DATA = Symbol('data');

var Stack = exports.Stack = function () {
  function Stack() {
    var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    _classCallCheck(this, Stack);

    if (arr instanceof Array && arr.length) {
      this[DATA] = arr;
      return;
    }

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this[DATA] = [].concat(arr, args);
  }

  _createClass(Stack, [{
    key: 'isEmpty',
    value: function isEmpty() {
      return this[DATA].length === 0;
    }

    /**
     * Push one or more elements to the stack
     */

  }, {
    key: 'push',
    value: function push() {
      var _DATA;

      if (!arguments.length) {
        return this[DATA].length;
      }

      return (_DATA = this[DATA]).push.apply(_DATA, arguments);
    }

    /**
     * Removes the top element from the stack and return it
     */

  }, {
    key: 'pop',
    value: function pop() {
      return this[DATA].pop();
    }

    /**
     * Removes all elements from the stack
     */

  }, {
    key: 'clear',
    value: function clear() {
      this[DATA] = [];
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this[DATA].toString();
    }
  }, {
    key: 'head',
    get: function get() {
      if (!this[DATA].length) {
        return undefined;
      }
      return this[DATA][0];
    }
  }, {
    key: 'last',
    get: function get() {
      if (!this[DATA].length) {
        return undefined;
      }

      var lastIndex = this[DATA].length - 1;
      return this[DATA][lastIndex];
    }
  }, {
    key: 'length',
    get: function get() {
      return this[DATA].length;
    }
  }], [{
    key: 'from',
    value: function from() {
      var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      if (arr instanceof Array && arr.length) {
        return new Stack(arr);
      }

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return new Stack([].concat(arr, args));
    }
  }]);

  return Stack;
}();