const Shack = require('../src/shack')
let shack = new Shack


describe('#Shack', () => {
  test('it should return number of sandwiches', () => {
    expect(shack.makeSandwich(5)).toBe(5)
  })
})