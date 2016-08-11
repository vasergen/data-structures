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
  var path = '/home/vasyl/github/data-structures-es6/src/LinkedList.js',
      hash = '92967fc9480a54d77f2e54474e5adda0';
  var global = new Function('return this')();
  var coverage = global['__coverage__'] || (global['__coverage__'] = {});
  if (coverage[path] && coverage[path].hash === hash) return coverage[path];
  var coverageData = global['JSON'].parse('{"path":"/home/vasyl/github/data-structures-es6/src/LinkedList.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0]},"f":{"1":0,"2":0},"statementMap":{"1":{"start":{"line":3,"column":11},"end":{"line":3,"column":29}},"2":{"start":{"line":5,"column":0},"end":{"line":14,"column":1}},"3":{"start":{"line":7,"column":4},"end":{"line":7,"column":20}},"4":{"start":{"line":8,"column":4},"end":{"line":8,"column":21}},"5":{"start":{"line":12,"column":4},"end":{"line":12,"column":21}},"6":{"start":{"line":16,"column":11},"end":{"line":16,"column":25}},"7":{"start":{"line":17,"column":11},"end":{"line":17,"column":25}},"8":{"start":{"line":18,"column":13},"end":{"line":18,"column":29}},"9":{"start":{"line":19,"column":14},"end":{"line":19,"column":31}},"10":{"start":{"line":21,"column":7},"end":{"line":135,"column":1}},"11":{"start":{"line":23,"column":4},"end":{"line":23,"column":21}},"12":{"start":{"line":24,"column":4},"end":{"line":24,"column":21}},"13":{"start":{"line":25,"column":4},"end":{"line":25,"column":24}},"14":{"start":{"line":26,"column":4},"end":{"line":26,"column":20}},"15":{"start":{"line":46,"column":4},"end":{"line":50,"column":5}},"16":{"start":{"line":47,"column":6},"end":{"line":47,"column":26}},"17":{"start":{"line":49,"column":8},"end":{"line":49,"column":33}},"18":{"start":{"line":54,"column":4},"end":{"line":56,"column":5}},"19":{"start":{"line":55,"column":6},"end":{"line":55,"column":17}},"20":{"start":{"line":58,"column":22},"end":{"line":58,"column":34}},"21":{"start":{"line":59,"column":4},"end":{"line":59,"column":36}},"22":{"start":{"line":60,"column":4},"end":{"line":60,"column":23}},"23":{"start":{"line":64,"column":15},"end":{"line":64,"column":30}},"24":{"start":{"line":65,"column":15},"end":{"line":65,"column":24}},"25":{"start":{"line":67,"column":4},"end":{"line":74,"column":5}},"26":{"start":{"line":68,"column":6},"end":{"line":68,"column":23}},"27":{"start":{"line":69,"column":6},"end":{"line":69,"column":23}},"28":{"start":{"line":70,"column":6},"end":{"line":70,"column":26}},"29":{"start":{"line":72,"column":6},"end":{"line":72,"column":29}},"30":{"start":{"line":73,"column":6},"end":{"line":73,"column":23}},"31":{"start":{"line":76,"column":4},"end":{"line":76,"column":18}},"32":{"start":{"line":77,"column":4},"end":{"line":77,"column":15}},"33":{"start":{"line":81,"column":4},"end":{"line":81,"column":33}},"34":{"start":{"line":83,"column":4},"end":{"line":85,"column":5}},"35":{"start":{"line":83,"column":23},"end":{"line":83,"column":46}},"36":{"start":{"line":84,"column":6},"end":{"line":84,"column":68}},"37":{"start":{"line":87,"column":16},"end":{"line":87,"column":17}},"38":{"start":{"line":88,"column":22},"end":{"line":88,"column":31}},"39":{"start":{"line":89,"column":4},"end":{"line":92,"column":5}},"40":{"start":{"line":90,"column":6},"end":{"line":90,"column":36}},"41":{"start":{"line":91,"column":6},"end":{"line":91,"column":13}},"42":{"start":{"line":94,"column":4},"end":{"line":94,"column":22}},"43":{"start":{"line":98,"column":4},"end":{"line":98,"column":33}},"44":{"start":{"line":100,"column":4},"end":{"line":102,"column":5}},"45":{"start":{"line":100,"column":23},"end":{"line":100,"column":46}},"46":{"start":{"line":101,"column":6},"end":{"line":101,"column":68}},"47":{"start":{"line":105,"column":4},"end":{"line":113,"column":5}},"48":{"start":{"line":106,"column":17},"end":{"line":106,"column":26}},"49":{"start":{"line":107,"column":6},"end":{"line":107,"column":33}},"50":{"start":{"line":108,"column":6},"end":{"line":110,"column":7}},"51":{"start":{"line":109,"column":10},"end":{"line":109,"column":27}},"52":{"start":{"line":111,"column":6},"end":{"line":111,"column":20}},"53":{"start":{"line":112,"column":6},"end":{"line":112,"column":17}},"54":{"start":{"line":116,"column":4},"end":{"line":124,"column":5}},"55":{"start":{"line":117,"column":21},"end":{"line":117,"column":42}},"56":{"start":{"line":118,"column":17},"end":{"line":118,"column":30}},"57":{"start":{"line":120,"column":6},"end":{"line":120,"column":27}},"58":{"start":{"line":121,"column":6},"end":{"line":121,"column":27}},"59":{"start":{"line":122,"column":6},"end":{"line":122,"column":20}},"60":{"start":{"line":123,"column":6},"end":{"line":123,"column":17}},"61":{"start":{"line":127,"column":19},"end":{"line":127,"column":40}},"62":{"start":{"line":128,"column":15},"end":{"line":128,"column":28}},"63":{"start":{"line":129,"column":19},"end":{"line":129,"column":28}},"64":{"start":{"line":130,"column":4},"end":{"line":130,"column":29}},"65":{"start":{"line":131,"column":4},"end":{"line":131,"column":18}},"66":{"start":{"line":133,"column":4},"end":{"line":133,"column":15}},"67":{"start":{"line":30,"column":4},"end":{"line":30,"column":21}},"68":{"start":{"line":34,"column":4},"end":{"line":34,"column":21}},"69":{"start":{"line":38,"column":4},"end":{"line":38,"column":23}},"70":{"start":{"line":42,"column":4},"end":{"line":42,"column":24}}},"fnMap":{"1":{"name":null,"line":6,"loc":{"start":{"line":6,"column":2},"end":{"line":9,"column":3}}},"2":{"name":null,"line":22,"loc":{"start":{"line":22,"column":2},"end":{"line":27,"column":3}}}},"branchMap":{"1":{"line":46,"type":"if","locations":[{"start":{"line":46,"column":26},"end":{"line":48,"column":5}},{"start":{"line":48,"column":11},"end":{"line":50,"column":5}}]},"2":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":27},"end":{"line":56,"column":5}},{"start":{"line":54,"column":27},"end":{"line":56,"column":5}}]},"3":{"line":67,"type":"if","locations":[{"start":{"line":67,"column":14},"end":{"line":71,"column":5}},{"start":{"line":71,"column":11},"end":{"line":74,"column":5}}]},"4":{"line":83,"type":"if","locations":[{"start":{"line":83,"column":48},"end":{"line":85,"column":5}},{"start":{"line":83,"column":48},"end":{"line":85,"column":5}}]},"5":{"line":83,"type":"binary-expr","locations":[{"start":{"line":83,"column":7},"end":{"line":83,"column":19}},{"start":{"line":83,"column":7},"end":{"line":83,"column":19}}]},"6":{"line":100,"type":"if","locations":[{"start":{"line":100,"column":48},"end":{"line":102,"column":5}},{"start":{"line":100,"column":48},"end":{"line":102,"column":5}}]},"7":{"line":100,"type":"binary-expr","locations":[{"start":{"line":100,"column":7},"end":{"line":100,"column":19}},{"start":{"line":100,"column":7},"end":{"line":100,"column":19}}]},"8":{"line":105,"type":"if","locations":[{"start":{"line":105,"column":23},"end":{"line":113,"column":5}},{"start":{"line":105,"column":23},"end":{"line":113,"column":5}}]},"9":{"line":108,"type":"if","locations":[{"start":{"line":108,"column":21},"end":{"line":110,"column":7}},{"start":{"line":108,"column":21},"end":{"line":110,"column":7}}]},"10":{"line":116,"type":"if","locations":[{"start":{"line":116,"column":37},"end":{"line":124,"column":5}},{"start":{"line":116,"column":37},"end":{"line":124,"column":5}}]}}}');
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}

_cover__();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NEXT = (++_cover__().s['1'], Symbol('nextnode'));

var Node = (++_cover__().s['2'], function () {
  function Node(data) {
    ++_cover__().f['1'];

    _classCallCheck(this, Node);

    ++_cover__().s['3'];

    this.data = data;
    ++_cover__().s['4'];
    this[NEXT] = null;
  }

  _createClass(Node, [{
    key: 'next',
    get: function get() {
      ++_cover__().s['5'];

      return this[NEXT];
    }
  }]);

  return Node;
}());


var TAIL = (++_cover__().s['6'], Symbol('tail'));
var HEAD = (++_cover__().s['7'], Symbol('head'));
var LENGTH = (++_cover__().s['8'], Symbol('length'));
var CURRENT = (++_cover__().s['9'], Symbol('current'));

var LinkedList = exports.LinkedList = (++_cover__().s['10'], function () {
  function LinkedList() {
    ++_cover__().f['2'];

    _classCallCheck(this, LinkedList);

    ++_cover__().s['11'];

    this[HEAD] = null;
    ++_cover__().s['12'];
    this[TAIL] = null;
    ++_cover__().s['13'];
    this[CURRENT] = null;
    ++_cover__().s['14'];
    this[LENGTH] = 0;
  }

  _createClass(LinkedList, [{
    key: 'resetCursor',
    value: function resetCursor() {
      ++_cover__().s['15'];

      if (this.length === 0) {
        ++_cover__().b['1'][0];
        ++_cover__().s['16'];

        this[CURRENT] = null;
      } else {
        ++_cover__().b['1'][1];
        ++_cover__().s['17'];

        this[CURRENT] = this.head;
      }
    }
  }, {
    key: 'next',
    value: function next() {
      ++_cover__().s['18'];

      if (!this.current.next) {
        ++_cover__().b['2'][0];
        ++_cover__().s['19'];

        return null;
      } else {
        ++_cover__().b['2'][1];
      }

      var currentNode = (++_cover__().s['20'], this.current);
      ++_cover__().s['21'];
      this[CURRENT] = currentNode.next;
      ++_cover__().s['22'];
      return this.current;
    }
  }, {
    key: 'push',
    value: function push(value) {
      var node = (++_cover__().s['23'], new Node(value));
      var head = (++_cover__().s['24'], this.head);

      ++_cover__().s['25'];
      if (!head) {
        ++_cover__().b['3'][0];
        ++_cover__().s['26'];

        this[HEAD] = node;
        ++_cover__().s['27'];
        this[TAIL] = node;
        ++_cover__().s['28'];
        this[CURRENT] = node;
      } else {
        ++_cover__().b['3'][1];
        ++_cover__().s['29'];

        this[TAIL][NEXT] = node;
        ++_cover__().s['30'];
        this[TAIL] = node;
      }

      ++_cover__().s['31'];
      this[LENGTH]++;
      ++_cover__().s['32'];
      return node;
    }
  }, {
    key: 'at',
    value: function at(position) {
      ++_cover__().s['33'];

      position = parseInt(position);

      ++_cover__().s['34'];
      if ((++_cover__().b['5'][0], position < 0) || (++_cover__().b['5'][1], (++_cover__().s['35'], position >= this.length))) {
        ++_cover__().b['4'][0];
        ++_cover__().s['36'];

        throw new Error('node with position ' + position + ' doen\'t exist');
      } else {
        ++_cover__().b['4'][1];
      }

      var count = (++_cover__().s['37'], 0);
      var currentNode = (++_cover__().s['38'], this.head);
      ++_cover__().s['39'];
      while (position > count) {
        ++_cover__().s['40'];

        currentNode = currentNode.next;
        ++_cover__().s['41'];
        count++;
      }

      ++_cover__().s['42'];
      return currentNode;
    }
  }, {
    key: 'removeAt',
    value: function removeAt(position) {
      ++_cover__().s['43'];

      position = parseInt(position);

      ++_cover__().s['44'];
      if ((++_cover__().b['7'][0], position < 0) || (++_cover__().b['7'][1], (++_cover__().s['45'], position >= this.length))) {
        ++_cover__().b['6'][0];
        ++_cover__().s['46'];

        throw new Error('node with position ' + position + ' doen\'t exist');
      } else {
        ++_cover__().b['6'][1];
      }

      //remove node from beginning
      ++_cover__().s['47'];
      if (position === 0) {
        ++_cover__().b['8'][0];

        var _node = (++_cover__().s['48'], this.head);
        ++_cover__().s['49'];
        this[HEAD] = this.head.next;
        ++_cover__().s['50'];
        if (!_node.next) {
          ++_cover__().b['9'][0];
          ++_cover__().s['51'];
          //if no nodes in list
          this[TAIL] = null;
        } else {
          ++_cover__().b['9'][1];
        }
        ++_cover__().s['52'];
        this[LENGTH]--;
        ++_cover__().s['53'];
        return _node;
      } else {
        ++_cover__().b['8'][1];
      }

      //remove node from the end
      ++_cover__().s['54'];
      if (position === this.length - 1) {
        ++_cover__().b['10'][0];

        var _nodePrev = (++_cover__().s['55'], this.at(position - 1));
        var _node2 = (++_cover__().s['56'], _nodePrev.next);

        ++_cover__().s['57'];
        _nodePrev[NEXT] = null;
        ++_cover__().s['58'];
        this[TAIL] = _nodePrev;
        ++_cover__().s['59'];
        this[LENGTH]--;
        ++_cover__().s['60'];
        return _node2;
      } else {
        ++_cover__().b['10'][1];
      }

      //remove node from the middle
      var nodePrev = (++_cover__().s['61'], this.at(position - 1));
      var node = (++_cover__().s['62'], nodePrev.next);
      var nodeNext = (++_cover__().s['63'], node.next);
      ++_cover__().s['64'];
      nodePrev[NEXT] = nodeNext;
      ++_cover__().s['65'];
      this[LENGTH]--;

      ++_cover__().s['66'];
      return node;
    }
  }, {
    key: 'head',
    get: function get() {
      ++_cover__().s['67'];

      return this[HEAD];
    }
  }, {
    key: 'tail',
    get: function get() {
      ++_cover__().s['68'];

      return this[TAIL];
    }
  }, {
    key: 'length',
    get: function get() {
      ++_cover__().s['69'];

      return this[LENGTH];
    }
  }, {
    key: 'current',
    get: function get() {
      ++_cover__().s['70'];

      return this[CURRENT];
    }
  }]);

  return LinkedList;
}());