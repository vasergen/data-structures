'use strict'

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let node = new Node(value)
    let currentNode = this.head

    if(!currentNode) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length++
    return node
  }
}
