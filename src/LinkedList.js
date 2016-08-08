'use strict'

let TAIL = Symbol('tail')
let HEAD = Symbol('head')
let LENGTH = Symbol('length')
let NEXT = Symbol('next')
let CURRENT = Symbol('current')

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
    this[CURRENT] = null
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

  get current() {
    return this[CURRENT]
  }

  resetCursor() {
    if(this.length === 0) {
      this[CURRENT] = null
    } else {
        this[CURRENT] = this.head
    }
  }

  next() {
    if(!this.current.next) {
      return null
    }

    let currentNode = this.current
    this[CURRENT] = currentNode.next
    return this.current
  }

  push(value) {
    let node = new Node(value)
    let head = this.head

    if(!head) {
      this[HEAD] = node
      this[TAIL] = node
      this[CURRENT] = node
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
      let node = this.head
      this[HEAD] = this.head.next
      if(!node.next) { //if no nodes in list
          this[TAIL] = null
      }
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
