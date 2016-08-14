'use strict'

let DATA = Symbol('data')

export class Stack {
    constructor(arr = [], ...args) {
      if(arr instanceof Array && arr.length) {
        this[DATA] = arr
        return
      }

      this[DATA] = [].concat(arr, args)
    }

    static from (arr = [], ...args) {
      if(arr instanceof Array && arr.length) {
        return new Stack(arr)
      }
      return new Stack([].concat(arr, args))
    }

    get head() {
      if(!this[DATA].length) {
        return undefined
      }
      return this[DATA][0]
    }

    get last() {
      if(!this[DATA].length) {
        return undefined
      }

      let lastIndex = this[DATA].length - 1
      return this[DATA][lastIndex]
    }

    get length() {
      return this[DATA].length
    }

    isEmpty() {
      return this[DATA].length === 0
    }

    /**
     * Push one or more elements to the stack
     */
    push(...args) {
      if(!args.length) {
        return this[DATA].length
      }

      return this[DATA].push(...args)
    }

    /**
     * Removes the top element from the stack and return it
     */
    pop() {
        return this[DATA].pop()
    }

    /**
     * Removes all elements from the stack
     */
    clear() {
        this[DATA] = []
    }

    toString() {
      return this[DATA].toString()
    }
}
