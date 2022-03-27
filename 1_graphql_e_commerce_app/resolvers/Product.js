exports.Product = {
  category: (parent, args, { categories }) => {
    const categoryID = parent.categoryID
    return categories.find((category) => category.id === categoryID)
  },
  reviews: (parent, args, { reviews }) => {
    const productID = parent.id
    return reviews.filter((review) => review.productId === productID)
  },
}
