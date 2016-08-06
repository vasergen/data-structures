'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TAIL = Symbol('tail');
var HEAD = Symbol('head');
var LENGTH = Symbol('length');
var NEXT = Symbol('next');

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this.data = data;
    this[NEXT] = null;
  }

  _createClass(Node, [{
    key: 'next',
    get: function get() {
      return this[NEXT];
    }
  }]);

  return Node;
}();

var LinkedList = exports.LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this[HEAD] = null;
    this[TAIL] = null;
    this[LENGTH] = 0;
  }

  _createClass(LinkedList, [{
    key: 'push',
    value: function push(value) {
      var node = new Node(value);
      var currentNode = this.head;

      if (!currentNode) {
        this[HEAD] = node;
        this[TAIL] = node;
      } else {
        this[TAIL][NEXT] = node;
        this[TAIL] = node;
      }

      this[LENGTH]++;
      return node;
    }
  }, {
    key: 'at',
    value: function at(position) {
      position = parseInt(position);

      if (position < 0 || position >= this.length) {
        throw new Error('node with position ' + position + ' doen\'t exist');
      }

      var count = 0;
      var currentNode = this.head;
      while (position > count) {
        currentNode = currentNode.next;
        count++;
      }

      return currentNode;
    }
  }, {
    key: 'removeAt',
    value: function removeAt(position) {
      position = parseInt(position);

      if (position < 0 || position >= this.length) {
        throw new Error('node with position ' + position + ' doen\'t exist');
      }

      //remove node from beginning
      if (position === 0) {
        var _node = this.at(position);
        this[HEAD] = this.head.next;
        this[LENGTH]--;
        return _node;
      }

      //remove node from the end
      if (position === this.length - 1) {
        var _nodePrev = this.at(position - 1);
        var _node2 = _nodePrev.next;

        _nodePrev[NEXT] = null;
        this[TAIL] = _nodePrev;
        this[LENGTH]--;
        return _node2;
      }

      //remove node from the middle
      var nodePrev = this.at(position - 1);
      var node = nodePrev.next;
      var nodeNext = node.next;
      nodePrev[NEXT] = nodeNext;
      this[LENGTH]--;

      return node;
    }
  }, {
    key: 'head',
    get: function get() {
      return this[HEAD];
    }
  }, {
    key: 'tail',
    get: function get() {
      return this[TAIL];
    }
  }, {
    key: 'length',
    get: function get() {
      return this[LENGTH];
    }
  }]);

  return LinkedList;
}();