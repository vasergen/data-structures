'use strict'

let expect = require('expect')
let Stack = require('./../index.js').Stack

let isFunction = (fn) => {
    return fn instanceof Function
}

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('#constructor', () => {
      it('should create stack from an array', () => {
        let stack = new Stack([1,2,3])

        let actual = stack.toString()
        let expected = '1,2,3'

        expect(actual).toBe(expected)
      })

      it('should create stack from parameters', () => {
        let stack = new Stack(1,2,3)

        let actual = stack.toString()
        let expected = '1,2,3'

        expect(actual).toBe(expected)
      })

      it('should create stack from one parameter', () => {
        let stack = new Stack(2)

        let actual = stack.toString()
        let expected = '2'

        expect(actual).toBe(expected)
      })
    })

    describe('#toString()', () => {
      it('should be empty string', () => {
        let actual = stack.toString()
        let expected = ''

        expect(actual).toBe(expected)
      })

      it('should be empty 1,2,3', () => {
        let stack = new Stack(1,2,3)
        let actual = stack.toString()
        let expected = '1,2,3'

        expect(actual).toBe(expected)
      })
    })

    describe('#length', () => {
      it('should be 0', () => {
        let actual = stack.length
        let expected = 0

        expect(actual).toBe(expected)
      })

      it('should be 1', () => {
        stack.push(1)
        let actual = stack.length
        let expected = 1

        expect(actual).toBe(expected)
      })
    })

    describe('#from', () => {
      it('should create a new Stack from array', () => {
        let stack = Stack.from([1,2,3])

        let actual = stack.length
        let expected = 3

        expect(actual).toBe(expected)
      })

      it('should create a new Stack from 1,2,3', () => {
        let stack = Stack.from(1,2,3)

        let actual = stack.length
        let expected = 3

        expect(actual).toBe(expected)
      })
    })

    describe('#head', () => {
      it('should return undefined if stack empty', () => {
        let actual = stack.head
        let expected = undefined

        expect(actual).toBe(expected)
      })

      it('should return top element', () => {
        stack.push(1)

        let actual = stack.head
        let expected = 1

        expect(actual).toBe(expected)
      })
    })

    describe('#isEmpty()', () => {
      it('should return true', () => {
        let actual = stack.isEmpty()
        let expected = true

        expect(actual).toBe(expected)
      })

      it('should return false', () => {
        stack.push(1)
        let actual = stack.isEmpty()
        let expected = false

        expect(actual).toBe(expected)
      })
    })

    describe('#push()', () => {
      it('should return stack length', () => {
         let actual = stack.push(0)
         let expected = 1

         expect(actual).toBe(expected)
      })

      it('should push few elements to the stack', () => {
        let actual = stack.push(0,1,2)
        let expected = 3

        expect(actual).toBe(expected)
      })

      it('should return stack length if no arguments', () => {
        let actual = stack.push()
        let expected = 0

        expect(actual).toBe(expected)
      })
    })

    describe('#pop()', () => {
      it('should have pop', () => {
          let actual = isFunction(stack.pop)
          let expected = true

          expect(actual).toBe(expected)
      })

      it('check push and pop method', () => {
          stack.push(1)
          stack.push(2)

          let val2 = stack.pop()
          let val1 = stack.pop()
          let valUndefined = stack.pop()

          let actual = [val2, val1, valUndefined]
          let expected = [2, 1, undefined]

          expect(actual).toEqual(expected)
      })
    })

    describe('#last', () => {
      it('should peek last element', () => {
          stack.push(1)
          stack.push(2)

          let actual = stack.last
          let expected = 2

          expect(actual).toBe(expected)
      })

      it('should return undefined on empty stack', () => {
          let actual = stack.last
          let expected = undefined

          expect(actual).toBe(expected)
      })
    })

    describe('#clear()', () => {
      it('should have clear method', () => {
          let actual = isFunction(stack.clear)
          let expected = true

          expect(actual).toBe(expected)
      })

      it('should clear stack', () => {
          stack.push(1)
          stack.push(2)
          stack.clear()

          let actual = stack.last
          let expected = undefined

          expect(actual).toBe(expected)
      })
    })
})
