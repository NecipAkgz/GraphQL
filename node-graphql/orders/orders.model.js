const orders = [
  {
    date: '2018-01-01',
    subtotal: 90.11,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Old Red Shoe',
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
]

function getAllOrders() {
  return orders
}

module.exports = {
  getAllOrders,
}
