'use strict'

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    add(value) {
        if(value == this.value) {   // ignore if equal
            return
        }

        if(value > this.value) {    // add to right leaf
            if(!this.right) {
                this.right = new Node(value)
            } else {
                this.right.add(value)
            }
        } else {                    // add to left leaf
            if(!this.left) {
                this.left = new Node(value)
            } else {
                this.left.add(value)
            }
        }
    }

    contains(value) {
        if(value === this.value) {  // current node
            return true
        }

        if (value > this.value) {   // rigth leaf
            if(!this.right) {
                return false
            }

            return this.right.contains(value)
        } else {                    // left leaf
            if(!this.left) {
                return false
            }

            return this.left.contains(value)
        }
    }

    traverse(callback) {
        if(this.left) {
            this.left.traverse(callback)
        }

        callback(this.value)

        if(this.right) {
            this.right.traverse(callback)
        }
    }
}

export class BinaryTree {
    constructor() {
        this.root = null
    }

    get length() {
        if(!this.root) {
            return 0
        }

        let length = 0
        this.root.traverse(() => {
            length++
        })

        return length
    }

    add(value) {
        if(!this.root) {
            this.root = new Node(value)
        }

        this.root.add(value)
    }

    contains(value) {
        if(!this.root) {
            return false
        }

        return this.root.contains(value)
    }

    toArray() {
        if(!this.root) {
            return []
        }

        const arr = []

        this.root.traverse(function(value) {
            arr.push(value)
        })

        return arr
    }

    toString() {
        return this.toArray().toString()
    }
}