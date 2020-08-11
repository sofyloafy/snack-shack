class Shack {
  constructor(){
    this.WAITING_TIME = 5
  }

  makeSandwich(order) {
    let orderTime = (order * 1.5)
    if (orderTime >= this.WAITING_TIME) {
      return 'Your order will be more than 5 minutes'
    }
    else {
    return (`Your order will be ${orderTime} minutes`) 
    }
  }
}

module.exports = Shack
