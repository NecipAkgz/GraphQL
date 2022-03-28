const { gql } = require('apollo-server')

// Döndürelecek Tip
exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProducttFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category
    addProduct(input: AddProductInput): Product
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProducttFilterInput): [Product!]!
    product(id: ID!): Product
  }

  type Review {
    id: ID!
    date: String!
    comment: String!
    rating: Int!
    productId: Product!
  }

  input ProducttFilterInput {
    onsale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }
`
