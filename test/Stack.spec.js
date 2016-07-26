'use strict'

let expect = require('expect')
let Stack = require('./../dest/Stack.js').Stack

let isFunction = (fn) => {
    return fn instanceof Function
}

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('should be instance of Stack', () => {
        let actual = new Stack()
        let expected = Stack;        

        expect(actual).toBeA(expected)
    })

    //has push
    it('should have push method', () => {
        let actual = isFunction(stack.push)
        let expected = true

        expect(actual).toBe(expected)
    })

    //has pop
    it('should have pop method', () => {
        let actual = isFunction(stack.pop)
        let expected = true

        expect(actual).toBe(expected)
    })

    //has peek
    it('should have peek method', () => {
        let actual = isFunction(stack.peek)
        let expected = true

        expect(actual).toBe(expected)
    })

    //clear
    it('should have clear method', () => {
        let actual = isFunction(stack.clear)
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

    it('check peek', () => {
        stack.push(1)
        stack.push(2)

        stack.peek()
        let actual = stack.peek()
        let expected = 2

        expect(actual).toBe(expected)
    })

    it('check peek on empty stack', () => {
        let actual = stack.peek()
        let expected = undefined

        expect(actual).toBe(expected)
    })

    it('check clear', () => {
        stack.push(1)
        stack.push(2)

        stack.clear()

        let actual = stack.peek()
        let expected = undefined

        expect(actual).toBe(expected)
    })
})
