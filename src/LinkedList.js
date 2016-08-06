'use strict'

let TAIL = Symbol('tail')
let HEAD = Symbol('head')
let LENGTH = Symbol('length')
let NEXT = Symbol('next')

class Node {
  constructor(data) {
    this.data = data
    this[NEXT] = null
  }

  get next() {
    return this[NEXT]
  }
}

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
      this[TAIL][NEXT] = node
      this[TAIL] = node
    }

    this[LENGTH]++
    return node
  }

  at(position) {
    position = parseInt(position)

    if(position < 0 || position >= this.length) {
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

  removeAt(position) {
    position = parseInt(position)

    if(position < 0 || position >= this.length) {
      throw new Error(`node with position ${position} doen't exist`)
    }

    //remove node from beginning
    if(position === 0) {
      let node = this.at(position)
      this[HEAD] = this.head.next
      this[LENGTH]--
      return node
    }

    //remove node from the end
    if(position === this.length - 1) {
      let nodePrev = this.at(position - 1)
      let node = nodePrev.next

      nodePrev[NEXT] = null
      this[TAIL] = nodePrev
      this[LENGTH]--
      return node
    }

    //remove node from the middle
    let nodePrev = this.at(position - 1)
    let node = nodePrev.next
    let nodeNext = node.next
    nodePrev[NEXT] = nodeNext
    this[LENGTH]--

    return node
  }
}
