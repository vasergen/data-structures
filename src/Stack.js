'use strict'

let DATA = Symbol('data')

export class Stack {
  /**
   * Create the stack from given parameters. If first parameter is an array
   * than create stack from this array. Otherwise create stack from all
   * parameters.
  */
    constructor(arr = [], ...args) {
      if(arr instanceof Array && arr.length) {
        this[DATA] = arr
        return
      }

      this[DATA] = [].concat(arr, args)
    }

    /**
     * Create the stack from given parameters. Two examples below are equivalent
     * expample 1:
     * 	let stack1 = Stack.from([1,2,3])
     * example 2:
     *  let stack2 = Stack.from(1,2,3)
     */
    static from () {
      return new Stack(...arguments)
    }

    /**
     * Return the first element in the stack
     */
    get head() {
      if(!this[DATA].length) {
        return undefined
      }
      return this[DATA][0]
    }

    /**
     * Return the last element in the stack
     */
    get last() {
      if(!this[DATA].length) {
        return undefined
      }

      let lastIndex = this[DATA].length - 1
      return this[DATA][lastIndex]
    }

    /**
     * Return the number of elements in the stack
     */
    get length() {
      return this[DATA].length
    }

    /**
     * Checks is the stack is empty
    */
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

    /**
     * Convert the staack to a string 
     */
    toString() {
      return this[DATA].toString()
    }
}
