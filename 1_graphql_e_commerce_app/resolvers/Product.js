const { products, categories, reviews } = require('../db')

exports.Product = {
  category: (parent, args, contenxt) => {
    const categoryID = parent.categoryID
    return categories.find((category) => category.id === categoryID)
  },
}
