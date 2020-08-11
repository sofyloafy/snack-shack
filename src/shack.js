class Shack {

  makeSandwich(order) {
    let orderTime = (order * 1.5)
    return (`Your order will be ${orderTime} minutes`) 
  }
}

module.exports = Shack
