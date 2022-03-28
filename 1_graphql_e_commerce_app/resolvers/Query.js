exports.Query = {
  hello: () => 'Hello',
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProduct = products
    if (filter) {
      const { onsale, avgRating } = filter

      if (onsale) {
        filteredProduct = products.filter((product) => product.onSale)
      }

      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProduct = filteredProduct.filter((product) => {
          let sumRating = 0
          let numberOfReviews = 0
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating
              numberOfReviews++
            }
          })
          const avgProductRating = sumRating / numberOfReviews
          return avgProductRating >= avgRating
        })
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
  categories: (parent, args, { categories }) => categories,
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
