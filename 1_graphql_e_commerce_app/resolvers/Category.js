const { products, categories, reviews } = require('../db')

exports.Category = {
  products: (parent, args, contenxt) => {
    const categoryID = parent.id
    return products.filter((product) => product.categoryID == categoryID)
  },
}
