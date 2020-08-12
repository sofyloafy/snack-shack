class Shack {
  constructor(){
    this.WAITING_TIME = 5
    this.totalOrders = []
    this.inventory = 45
  }

  makeSandwich(order) {
    let orderTime = (order * 1.5)
    if (orderTime >= this.WAITING_TIME) {
      return 'Your order has been rejected as it will be more than 5 minutes' 
    }
    else if (this.inventory >= order ){
      this.totalOrders.push(order)
      this.inventory -= order
    return `Your order will be ${orderTime} minutes`
    }
  }

  sequenceOrder(sandwiches, jacketPotato){
    let plan = ""
    let orderTime = (sandwiches * 1.5)
    // if (orderTime < this.WAITING_TIME) {
      let i = 1
      while (sandwiches >= i){
        plan += `${i === 1 ? 1 : i + 1} ${sandwiches} sandwich orders placed, start making sandwich ${i}\n`
        i++
        plan +=`${i === 2 ? 2 : i + 1}. serve sandwich ${i-1}\n`

    }
    console.log(plan)
  // }
}
  
}

module.exports = Shack
