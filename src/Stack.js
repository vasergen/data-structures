'use strict'

let DATA = Symbol('data')

export class Stack {
    constructor() {
        this[DATA] = []
    }

    push(item) {
        return this[DATA].push(item)
    }

    pop() {
        return this[DATA].pop()
    }

    peek() {
        let lastIndex = this[DATA].length - 1
        if(lastIndex >= 0) {
            return this[DATA][lastIndex]
        }

        return undefined
    }

    clear() {
        this[DATA] = []
    }
}
