exports.Category = {
  products: (parent, { filter }, { products }) => {
    const categoryID = parent.id
    const categorizedProducts = products.filter(
      (product) => product.categoryID == categoryID
    )
    let filteredProducts = categorizedProducts

    if (filter) {
      if (filter.onsale) {
        filteredProducts = categorizedProducts.filter(
          (product) => product.onSale
        )
      }
    }

    return filteredProducts
  },
}
