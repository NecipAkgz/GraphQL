const { products, categories, reviews } = require('../db')

exports.Query = {
  hello: () => 'Hello',
  products: () => products,
  product: (parent, args, contenxt) => {
    const productID = args.id
    const product = products.find((product) => product.id === productID)

    if (!product) {
      return null
    } else {
      return product
    }
  },
  categories: () => categories,
  category: (parent, args, contenxt) => {
    const categoryID = args.id
    const category = categories.find((category) => category.id === categoryID)

    if (!category) {
      return null
    } else {
      return category
    }
  },
}
