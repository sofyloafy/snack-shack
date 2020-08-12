const Shack = require('../src/shack')
let shack = new Shack


describe('#Shack', () => {
  test('it should alert when an order will be too long', () => {
    expect(shack.makeSandwich(5)).toBe('Your order has been rejected as it will be more than 5 minutes')
  })

  test('it should alert when an order will be too long', () => {
    expect(shack.makeSandwich(15)).toBe('Your order has been rejected as it will be more than 5 minutes')
  })

  test('it should return how long to make order', () => {
    expect(shack.makeSandwich(1)).toBe('Your order will be 1.5 minutes')
  })

  test('it should return how long to make order', () => {
    expect(shack.makeSandwich(2)).toBe('Your order will be 3 minutes')
  })

  test('it should return how long to make order', () => {
    expect(shack.sequenceOrder(1,0)).toEqual('1. 1 sandwich orders placed, start making sandwich 1\n2. serve sandwich 1')
  })

  // test('it should return how long to make order', () => {
  //   expect(shack.sequenceOrder(2,0)).toEqual('Your order will be 3 minutes')
  // })
})