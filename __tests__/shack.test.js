const Shack = require('../src/shack')
let shack = new Shack


describe('#Shack', () => {
  test('it should return how long to make order', () => {
    expect(shack.makeSandwich([5])).toBe('Your order will be 7.5 minutes')
  })

  test('it should return how long to make order', () => {
    expect(shack.makeSandwich([5, 10])).toBe('Your order will be 22.5 minutes')
  })
})