'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DATA = Symbol('data');

var Stack = exports.Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this[DATA] = [];
    }

    _createClass(Stack, [{
        key: 'isEmpty',
        value: function isEmpty() {
            return this[DATA].length === 0;
        }
    }, {
        key: 'push',
        value: function push(item) {
            return this[DATA].push(item);
        }
    }, {
        key: 'pop',
        value: function pop() {
            return this[DATA].pop();
        }
    }, {
        key: 'peek',
        value: function peek() {
            var lastIndex = this[DATA].length - 1;
            if (lastIndex >= 0) {
                return this[DATA][lastIndex];
            }

            return undefined;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this[DATA] = [];
        }
    }, {
        key: 'head',
        get: function get() {
            if (!this[DATA].length) return undefined;

            return this[DATA][0];
        }
    }]);

    return Stack;
}();