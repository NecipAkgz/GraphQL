const { gql } = require('apollo-server')

// Döndürelecek Tip
exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: PrdocutFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
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
    products(filter: PrdocutFilterInput): [Product!]!
    product(id: ID!): Product
  }

  type Review {
    id: ID!
    date: String!
    comment: String!
    rating: Int!
    productId: Product!
  }

  input PrdocutFilterInput {
    onsale: Boolean
  }
`
