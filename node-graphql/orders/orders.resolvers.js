const ordersModel = require('./orders.model')

module.exports = {
  Query: {
    orders: (parents) => {
      return ordersModel.getAllOrders()
    },
  },
}
