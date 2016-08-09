## Data structures in Javascript

Some data structures implemented in Javascript 2015 (es6): Stack, LinkedList

### Install
```npm install --save data-structures-es6```

###Stack 

**API**

_Methods_
- push
- pop
- peek
- clear

**Example**

```
	var Stack = require("data-structures-es6").Stack

	var stack = new Stack()
    
	stack.push(1)
    
	stack.push(2)
    
	stack.pop()
    
	stack.clear()
    ```

###LinkedList 

**API**

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

Example

```
var LinkedList = require("data-structures-es6").LinkedList

var list = new LinkedList()

list.push(1)

list.push(2)

list.next()

var curentNode = list.current

console.log(curentNode.data) //2
```
