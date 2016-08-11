'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _coverage__file;

function _cover__() {
    if (!_coverage__file) _coverage__file = _coverage__getInitialState();
    return _coverage__file;
}

function _coverage__getInitialState() {
    var path = '/home/vasyl/github/data-structures-es6/src/Stack.js',
        hash = '416073dcf857104ac62ea81f7d29182c';
    var global = new Function('return this')();
    var coverage = global['__coverage__'] || (global['__coverage__'] = {});
    if (coverage[path] && coverage[path].hash === hash) return coverage[path];
    var coverageData = global['JSON'].parse('{"path":"/home/vasyl/github/data-structures-es6/src/Stack.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0]},"f":{"1":0},"statementMap":{"1":{"start":{"line":3,"column":11},"end":{"line":3,"column":25}},"2":{"start":{"line":5,"column":7},"end":{"line":30,"column":1}},"3":{"start":{"line":7,"column":8},"end":{"line":7,"column":23}},"4":{"start":{"line":11,"column":8},"end":{"line":11,"column":36}},"5":{"start":{"line":15,"column":8},"end":{"line":15,"column":31}},"6":{"start":{"line":19,"column":24},"end":{"line":19,"column":45}},"7":{"start":{"line":20,"column":8},"end":{"line":22,"column":9}},"8":{"start":{"line":21,"column":12},"end":{"line":21,"column":40}},"9":{"start":{"line":24,"column":8},"end":{"line":24,"column":24}},"10":{"start":{"line":28,"column":8},"end":{"line":28,"column":23}}},"fnMap":{"1":{"name":null,"line":6,"loc":{"start":{"line":6,"column":4},"end":{"line":8,"column":5}}}},"branchMap":{"1":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":27},"end":{"line":22,"column":9}},{"start":{"line":20,"column":27},"end":{"line":22,"column":9}}]}}}');
    coverageData.hash = hash;
    return coverage[path] = coverageData;
}

_cover__();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DATA = (++_cover__().s['1'], Symbol('data'));

var Stack = exports.Stack = (++_cover__().s['2'], function () {
    function Stack() {
        ++_cover__().f['1'];

        _classCallCheck(this, Stack);

        ++_cover__().s['3'];

        this[DATA] = [];
    }

    _createClass(Stack, [{
        key: 'push',
        value: function push(item) {
            ++_cover__().s['4'];

            return this[DATA].push(item);
        }
    }, {
        key: 'pop',
        value: function pop() {
            ++_cover__().s['5'];

            return this[DATA].pop();
        }
    }, {
        key: 'peek',
        value: function peek() {
            var lastIndex = (++_cover__().s['6'], this[DATA].length - 1);
            ++_cover__().s['7'];
            if (lastIndex >= 0) {
                ++_cover__().b['1'][0];
                ++_cover__().s['8'];

                return this[DATA][lastIndex];
            } else {
                ++_cover__().b['1'][1];
            }

            ++_cover__().s['9'];
            return undefined;
        }
    }, {
        key: 'clear',
        value: function clear() {
            ++_cover__().s['10'];

            this[DATA] = [];
        }
    }]);

    return Stack;
}());