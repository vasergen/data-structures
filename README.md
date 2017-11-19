## Data structures in Javascript


[![Build Status](https://travis-ci.org/vasergen/data-structures-es6.svg?branch=master)](https://travis-ci.org/vasergen/data-structures-es6)
[![Code Climate](https://codeclimate.com/github/vasergen/data-structures-es6/badges/gpa.svg)](https://codeclimate.com/github/vasergen/data-structures-es6)
[![Issue Count](https://codeclimate.com/github/vasergen/data-structures-es6/badges/issue_count.svg)](https://codeclimate.com/github/vasergen/data-structures-es6)
[![Coverage Status](https://coveralls.io/repos/github/vasergen/data-structures-es6/badge.svg?branch=master)](https://coveralls.io/github/vasergen/data-structures-es6?branch=master)

Some data structures implemented in Javascript 2015 (es6): Stack, LinkedList

### Install
``npm install --save data-structures-es6``

### Stack

#### API

_Getters_
- head
- last
- length

_Methods_
- push
- pop
- clear
- isEmpty
- toString

#### Example

```javascript
var Stack = require("data-structures-es6").Stack

var stack = new Stack()

stack.push(1)

stack.push(2)

stack.pop()

stack.clear()
```

### LinkedList

#### API

_Getters_
- head
- tail
- length
- current

_Methods_
- resetCursor
- next
- push
- at
- removeAt

#### Example

```javascript
var LinkedList = require("data-structures-es6").LinkedList

var list = new LinkedList()

list.push(1)

list.push(2)

list.next()

var curentNode = list.current

console.log(curentNode.data) //2
```
