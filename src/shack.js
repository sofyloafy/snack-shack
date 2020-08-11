class Shack {
  constructor(){
    this.WAITING_TIME = 5
    this.totalOrders = []
  }

  makeSandwich(order) {
    let orderTime = (order * 1.5)
    if (orderTime >= this.WAITING_TIME) {
      return 'Your order will be more than 5 minutes'
    }
    else {
      this.totalOrders.push(order)
      console.log(this.totalOrders)
    return (`Your order will be ${orderTime} minutes`) 
    }
  }
}

module.exports = Shack
