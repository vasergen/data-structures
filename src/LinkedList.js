'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

let TAIL = Symbol('tail')
let HEAD = Symbol('head')
let LENGTH = Symbol('length')

export class LinkedList {
  constructor() {
    this[HEAD] = null
    this[TAIL] = null
    this[LENGTH] = 0
  }

  get head() {
    return this[HEAD]
  }

  get tail() {
    return this[TAIL]
  }

  get length() {
    return this[LENGTH]
  }

  push(value) {
    let node = new Node(value)
    let currentNode = this.head

    if(!currentNode) {
      this[HEAD] = node
      this[TAIL] = node
    } else {
      this[TAIL].next = node
      this[TAIL] = node
    }

    this[LENGTH]++
    return node
  }

  at(position) {
    if(position < 0 || position > this[LENGTH]) {
      throw new Error(`node with position ${position} doen't exist`)
    }

    let count = 0
    let currentNode = this.head
    while (position > count) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  remove(position) {


  }
}
