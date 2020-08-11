class Shack {
  constructor(){
    this.WAITING_TIME = 5
    this.totalOrders = []
    this.inventory = 45
  }

  makeSandwich(order) {
    let orderTime = (order * 1.5)
    if (orderTime >= this.WAITING_TIME) {
      return('Your order has been rejected as it will be more than 5 minutes')
    }
    else if (this.inventory >= order ){
      this.totalOrders.push(order)
      this.inventory -= order
    return `Your order will be ${orderTime} minutes`
    }
  }

  sequenceOrder(){

  }
}

module.exports = Shack
