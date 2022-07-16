const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.0,
  },
  {
    id: 'bluejean',
    description: 'Blue Jeans',
    price: 39.9,
  },
]

function getAllProducts() {
  return products
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price >= max
  })
}

function getProduct(id) {
  return products.find((product) => {
    return product.id === id
  })
}

function addNewProduct(id, description, price) {
  products.push({
    id,
    description,
    price,
    reviews: [],
  })
}

function addNewProductReview(id, rating, comment) {
  const product = getProduct(id)

  if (product) {
    const newReview = {
      rating,
      comment,
    }

    product.reviews.push(newReview)

    return newReview
  }
}

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProduct,
  addNewProduct,
  addNewProductReview,
}
