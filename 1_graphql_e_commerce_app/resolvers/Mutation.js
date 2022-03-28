const { v4: uuidv4 } = require('uuid')

exports.Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuidv4(),
      name: input.name,
    }
    categories.push(newCategory)
    return newCategory
  },

  addProduct: (parent, { input }, { products, reviews }) => {
    const newProduct = {
      id: uuidv4(),
      ...input,
    }
    products.push(newProduct)
    return newProduct
  },

  addReview: (parent, { input }, { reviews }) => {
    const newReview = {
      id: uuidv4(),
      ...input,
    }
    reviews.push(newReview)
    return newReview
  },
}
