exports.Query = {
  hello: () => 'Hello',
  products: (parent, { filter }, { products }) => {
    let filteredProduct = products
    if (filter) {
      if (filter.onsale) {
        filteredProduct = products.filter((product) => product.onSale)
      }
    }
    return filteredProduct
  },
  product: (parent, args, { products }) => {
    const productID = args.id
    const product = products.find((product) => product.id === productID)

    if (!product) {
      return null
    } else {
      return product
    }
  },
  categories: () => categories,
  category: (parent, args, { categories }) => {
    const categoryID = args.id
    const category = categories.find((category) => category.id === categoryID)

    if (!category) {
      return null
    } else {
      return category
    }
  },
}
