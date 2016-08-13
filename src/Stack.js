'use strict'

let DATA = Symbol('data')

export class Stack {
    constructor() {
        this[DATA] = []
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

    isEmpty() {
      return this[DATA].length === 0
    }

    push(item) {
        return this[DATA].push(item)
    }

    pop() {
        return this[DATA].pop()
    }

    clear() {
        this[DATA] = []
    }

    toString() {
      return this[DATA].toString()
    }
}
