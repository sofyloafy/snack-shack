const Shack = require('../src/shack')
let shack = new Shack


describe('#Shack', () => {
  test('it should return how long to make order', () => {
    expect(shack.makeSandwich([5])).toBe(7.5)
  })

  test('it should return how long to make order', () => {
    expect(shack.makeSandwich([5, 10])).toBe(22.5)
  })
})