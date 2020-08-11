class Shack {

  makeSandwich(order) {
    let orderTime = 0
    order.map(e => orderTime += e * 1.5)
    return (`Your order will be ${orderTime} minutes`) 
  }
}

module.exports = Shack
