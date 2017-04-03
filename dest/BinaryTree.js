'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
    function Node(value) {
        _classCallCheck(this, Node);

        this.value = value;
        this.left = null;
        this.right = null;
    }

    _createClass(Node, [{
        key: 'add',
        value: function add(value) {
            if (value == this.value) {
                // ignore if equal
                return;
            }

            if (value > this.value) {
                // add to right leaf
                if (!this.right) {
                    this.right = new Node(value);
                } else {
                    this.right.add(value);
                }
            } else {
                // add to left leaf
                if (!this.left) {
                    this.left = new Node(value);
                } else {
                    this.left.add(value);
                }
            }
        }
    }, {
        key: 'contains',
        value: function contains(value) {
            if (value === this.value) {
                // current node
                return true;
            }

            if (value > this.value) {
                // rigth leaf
                if (!this.right) {
                    return false;
                }

                return this.right.contains(value);
            } else {
                // left leaf
                if (!this.left) {
                    return false;
                }

                return this.left.contains(value);
            }
        }
    }, {
        key: 'traverse',
        value: function traverse(callback) {
            if (this.left) {
                this.left.traverse(callback);
            }

            callback(this.value);

            if (this.right) {
                this.right.traverse(callback);
            }
        }
    }]);

    return Node;
}();

var BinaryTree = exports.BinaryTree = function () {
    function BinaryTree() {
        _classCallCheck(this, BinaryTree);

        this.root = null;
    }

    _createClass(BinaryTree, [{
        key: 'add',
        value: function add(value) {
            if (!this.root) {
                this.root = new Node(value);
            }

            this.root.add(value);
        }
    }, {
        key: 'contains',
        value: function contains(value) {
            if (!this.root) {
                return false;
            }

            return this.root.contains(value);
        }
    }, {
        key: 'toArray',
        value: function toArray() {
            if (!this.root) {
                return [];
            }

            var arr = [];

            this.root.traverse(function (value) {
                arr.push(value);
            });

            return arr;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.toArray().toString();
        }
    }, {
        key: 'length',
        get: function get() {
            if (!this.root) {
                return 0;
            }

            var length = 0;
            this.root.traverse(function () {
                length++;
            });

            return length;
        }
    }]);

    return BinaryTree;
}();