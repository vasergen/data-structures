'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeapMin = exports.HeapMin = function () {
    function HeapMin() {
        _classCallCheck(this, HeapMin);

        this.data = [];
    }

    _createClass(HeapMin, [{
        key: 'add',
        value: function add(value) {
            this.data.push(value);
            HeapMin._bubleUp(this.data, this.length - 1);
        }
    }, {
        key: 'take',
        value: function take() {
            if (this.length === 0) {
                return undefined;
            }

            var result = this.data.shift();
            this.data.unshift(this.data.pop());
            HeapMin._bubleDown(this.data, 0);

            return result;
        }
    }, {
        key: 'length',
        get: function get() {
            return this.data.length;
        }
    }], [{
        key: '_swap',
        value: function _swap(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }, {
        key: '_getParentIndex',
        value: function _getParentIndex(i) {
            if (i == 0) {
                return -1;
            }

            return Math.floor((i + 1) / 2) - 1;
        }
    }, {
        key: '_bubleUp',
        value: function _bubleUp(arr, curIndex) {
            var parentInd = HeapMin._getParentIndex(curIndex);

            while (parentInd != -1 && arr[parentInd] > arr[curIndex]) {
                HeapMin._swap(arr, parentInd, curIndex);
                curIndex = parentInd;
                parentInd = HeapMin._getParentIndex(curIndex);
            }

            return arr;
        }
    }, {
        key: '_getChildrenIndex1',
        value: function _getChildrenIndex1(length, curIndex) {
            if (length <= 0) {
                return -1;
            }

            var res = (curIndex + 1) * 2 - 1;
            return res + 1 <= length ? res : -1;
        }
    }, {
        key: '_getChildrenIndex2',
        value: function _getChildrenIndex2(length, curIndex) {
            var index2 = this._getChildrenIndex1(length, curIndex) + 1;
            if (index2 == 0 || index2 > length - 1) {
                return -1;
            }

            return index2;
        }
    }, {
        key: '_bubleDown',
        value: function _bubleDown(arr, curIndex) {
            var chindIndex1 = HeapMin._getChildrenIndex1(arr.length, curIndex);
            var chindIndex2 = HeapMin._getChildrenIndex2(arr.length, curIndex);

            console.log('!!!!!!!!!!!here!', curIndex, chindIndex1, chindIndex2, arr);

            if (chindIndex1 === -1) {
                // no children
                return arr;
            }

            if (chindIndex2 === -1) {
                // one child
                if (arr[curIndex] > arr[chindIndex1]) {
                    HeapMin._swap(arr, curIndex, chindIndex1);
                    return arr;
                } else {
                    return arr;
                }
            }

            var minInd = arr[chindIndex1] < arr[chindIndex2] ? chindIndex1 : chindIndex2; // two children
            HeapMin._swap(arr, curIndex, minInd);
            return HeapMin._bubleDown(arr, minInd);
        }
    }]);

    return HeapMin;
}();