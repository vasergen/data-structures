'use strict'

let expect = require('expect')
let LinkedList = require('./../dest/LinkedList.js').LinkedList

describe('LinkedList', () => {
  let list

  beforeEach(() => {
    list = new LinkedList()
  })

  it('#push', () => {
    expect(list.head).toBe(null)
    expect(list.tail).toBe(null)

    list.push(1)
    let firstNode = list.head
    expect(firstNode).toEqual(list.head)
    expect(firstNode).toEqual(list.tail)
    expect(firstNode.data).toBe(1)

    list.push(2)
    let secondNode = list.head.next
    expect(secondNode.data).toBe(2)
    expect(secondNode).toEqual(list.tail)

    list.push(3)
    let thirdNode = list.head.next.next
    expect(thirdNode).toEqual(list.tail)
    expect(thirdNode.data).toBe(3)
  })

  it('#length', () => {
    expect(list.length).toBe(0)

    list.push(1)
    list.push(2)
    expect(list.length).toBe(2)
  })

  it('#at', () => {
    list.push(1)
    list.push(2)
    list.push(3)

    expect(list.at(0).data).toBe(1)
    expect(list.at(1).data).toBe(2)
    expect(list.at(2).data).toBe(3)

    expect(() => {
      list.at(-1)
    }).toThrow()

    expect(() => {
      list.at(10)
    }).toThrow()
  })

  it('#remove', () => {

  })

})
