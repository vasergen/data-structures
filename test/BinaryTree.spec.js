'use strict'

let expect = require('expect')
let BinaryTree = require('./../index.js').BinaryTree

describe('BinaryTree', () => {
    let tree

    beforeEach(() => {
        tree = new BinaryTree()
    })

    describe('#length', () => {
      it('length should be equal 0 if tree is empty', () => {
        let actual = tree.length
        let expected = 0
        expect(actual).toBe(expected)
      })

      it('length should be equal 2 if tree has two elements', () => {
        tree.add(1)
        tree.add(2)

        let actual = tree.length
        let expected = 2

        expect(actual).toBe(expected)
      })

      it('length shouldn\'t be increased if we add two equal elements', () => {
        tree.add(1)
        tree.add(2)
        tree.add(1)

        let actual = tree.length
        let expected = 2

        expect(actual).toBe(expected)
      })
    })

    describe('#add', () => {
        it('should add different elements to tree', () => {
            tree.add(1)
            tree.add(2)

            const actual = tree.toArray()
            const expected = [1,2]
            expect(actual).toEqual(expected)
        })

        it('shouldn\'t add id element already exist in tree', () => {
            tree.add(1)
            tree.add(2)
            tree.add(2)

            const actual = tree.toArray()
            const expected = [1,2]
            expect(actual).toEqual(expected)
        })
    })

    describe('#contains', () => {
        it('should return true if tree contain element', () => {
            tree.add(1)
            tree.add(2)
            tree.add(3)
            tree.add(4)
            const actual = tree.contains(4)
            const expected = true
            expect(actual).toBe(expected)
        })

        it('should return false if no root', () => {
            const actual = tree.contains(12)
            const expected = false
            expect(actual).toBe(expected)
        })

        it('should return false if tree doesn\'t contain element', () => {
            tree.add(12)
            const actual = tree.contains(1)
            const expected = false
            expect(actual).toBe(expected)
        })
    })

    describe('#toArray', () => {
        it('should return empty array if no root', () => {
            const actual = tree.toArray()
            const expected = []

            expect(actual).toEqual(expected)
        })

        it('should return tree items in correct order as array', () => {
            tree.add(1)
            tree.add(3)
            tree.add(2)
            tree.add(4)

            const actual = tree.toArray()
            const expected = [1,2,3,4]

            expect(actual).toEqual(expected)
        })
    })

    describe('#toString', () => {
        it('should return tree items in correct order as string', () => {
            tree.add(1)
            tree.add(3)
            tree.add(2)
            tree.add(4)

            const actual = tree.toString()
            const expected = '1,2,3,4'

            expect(actual).toBe(expected)
        })
    })

})
