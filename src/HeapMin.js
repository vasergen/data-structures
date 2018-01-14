'use strict'

export class HeapMin {
    constructor() {
        this.data = []
    }

    static _swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    static _getParentIndex(i) {
        if(i == 0) {
            return -1
        }

        return Math.floor((i + 1)/ 2) - 1
    }

    static _bubleUp(arr, curIndex) {
        let parentInd = HeapMin._getParentIndex(curIndex)

        while(parentInd != -1 && arr[parentInd] > arr[curIndex]) {
            HeapMin._swap(arr, parentInd, curIndex)
            curIndex = parentInd
            parentInd = HeapMin._getParentIndex(curIndex)
        }

        return arr
    }

    static _getChildrenIndex1(length, curIndex) {
        if(length <= 0) {
            return -1
        }

        const res = (curIndex + 1) * 2 - 1
        return res + 1 <= length ? res : -1
    }

    static _getChildrenIndex2(length, curIndex) {
        let index2 = this._getChildrenIndex1(length, curIndex) + 1
        if(index2 == 0 || index2 > length -1) {
            return -1
        }

        return index2
    }

    static _bubleDown(arr, curIndex) {
        const chindIndex1 = HeapMin._getChildrenIndex1(arr.length, curIndex)
        const chindIndex2 = HeapMin._getChildrenIndex2(arr.length, curIndex)

        if(chindIndex1 === -1) {        // no children
            return arr
        }

        if(chindIndex2 === -1) {        // one child
            if(arr[curIndex] > arr[chindIndex1]) {
                HeapMin._swap(arr, curIndex, chindIndex1)
                return arr
            } else {
                return arr
            }
        }

        let minInd = arr[chindIndex1] < arr[chindIndex2] ? chindIndex1 : chindIndex2 // two children
        HeapMin._swap(arr, curIndex, minInd)
        return HeapMin._bubleDown(arr, minInd)
    }

    get length() {
        return this.data.length
    }

    add(value) {
        this.data.push(value)
        HeapMin._bubleUp(this.data, this.length -1)
    }

    take() {
        if(this.length === 0) {
            return undefined
        }

        const result = this.data.shift()
        this.data.unshift(this.data.pop())
        HeapMin._bubleDown(this.data, 0)

        return result
    }
}