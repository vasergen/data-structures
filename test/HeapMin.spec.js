'use strict'

let expect = require('expect')
let HeapMin = require('./../index.js').HeapMin

describe('HeapMin', () => {
    let heap
    beforeEach(() => {
        heap = new HeapMin()
    })

    describe('_getParentIndex', () => {
        it('should return -1', () => {
            const actual = HeapMin._getParentIndex(0)
            const expected = -1

            expect(actual).toBe(expected)
        })

        it('should return 0', () => {
            const actual = HeapMin._getParentIndex(1)
            const expected = 0

            expect(actual).toBe(expected)
        })

        it('should return 0', () => {
            const actual = HeapMin._getParentIndex(2)
            const expected = 0

            expect(actual).toBe(expected)
        })

        it('should return 1', () => {
            const actual = HeapMin._getParentIndex(3)
            const expected = 1

            expect(actual).toBe(expected)
        })
    })

    describe('_getChildrenIndex1', () => {
        it('should return correct index', () => {
            const actual0 = HeapMin._getChildrenIndex1(7, 0)
            const actual1 = HeapMin._getChildrenIndex1(7, 1)
            const actual2 = HeapMin._getChildrenIndex1(7, 2)
            const actual10 = HeapMin._getChildrenIndex1(7, 8)

            expect(actual0).toBe(1)
            expect(actual1).toBe(3)
            expect(actual2).toBe(5)
            expect(actual10).toBe(-1)
        })
    })

    describe('_getChildrenIndex2', () => {
        it('should return correct index', () => {
            const actual0 = HeapMin._getChildrenIndex2(7, 0)
            const actual1 = HeapMin._getChildrenIndex2(7, 1)
            const actual2 = HeapMin._getChildrenIndex2(7, 2)
            const actual10 = HeapMin._getChildrenIndex2(7, 8)

            expect(actual0).toBe(2)
            expect(actual1).toBe(4)
            expect(actual2).toBe(6)
            expect(actual10).toBe(-1)
        })
    })

    describe('_bubleUp', () => {
        it('should return arr in correct order 1', () => {
            const actual = HeapMin._bubleUp([5, 10, 3], 2)
            const expected = [3, 10, 5]

            expect(actual).toEqual(expected)
        })

        it('should return arr in correct order', () => {
            const actual = HeapMin._bubleUp([3, 4, 5, 6, 7, 8, 2], 6)
            const expected = [2, 4, 3, 6, 7, 8, 5]

            expect(actual).toEqual(expected)
        })
    })

    describe('_bubleDown', () => {
        it('should return arr in correct order 1', () => {
            const actual = HeapMin._bubleDown([5, 10, 3], 0)
            const expected = [3, 10, 5]

            expect(actual).toEqual(expected)
        })

        it('should return arr in correct order 1', () => {
            const actual = HeapMin._bubleDown([5, 3, 10], 0)
            const expected = [3, 5, 10]

            expect(actual).toEqual(expected)
        })

        it('should return arr in correct order', () => {
            const actual = HeapMin._bubleDown([6, 3, 5, 4, 8, 7], 0)
            const expected = [3, 4, 5, 6, 8, 7]

            expect(actual).toEqual(expected)
        })

        it('should return arr in correct order', () => {
            const actual = HeapMin._bubleDown([3,2,4], 0)
            const expected = [2,3,4]

            expect(actual).toEqual(expected)
        })
    })

    describe('#length', () => {
        it('should return 0 for empty heap', () => {
            const actual = heap.length
            const expected = 0

            expect(actual).toBe(expected)
        })

        it('should return 2', () => {
            heap.add(1)
            heap.add(5)

            const actual = heap.length
            const expected = 2

            expect(actual).toBe(expected)
        })
    })

    describe('#take', () => {
        it('should return min element', () => {
            heap.add(1);
            heap.add(2);
            heap.add(3);
            heap.add(4);
            heap.add(5);

            expect(heap.take()).toBe(1)
            expect(heap.take()).toBe(2)
            expect(heap.take()).toBe(3)
            expect(heap.take()).toBe(4)
            expect(heap.take()).toBe(5)
            expect(heap.take()).toBe(undefined)
        })
    })

    describe('#add', () => {
        it('should return min element', () => {
            heap.add(3);
            heap.add(4);
            heap.add(5);
            heap.add(6);
            heap.add(7);
            heap.add(8);
            heap.add(2);

            const actual = heap.data
            const expected = [2, 4, 3, 6, 7, 8, 5]

            expect(actual).toEqual(expected)
        })
    })
})