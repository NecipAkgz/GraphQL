const { ApolloServer, gql } = require('apollo-server')
const { typeDefs } = require('./schema')
const { Query } = require('./resolvers/Query')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')
const { products, categories, reviews } = require('./db')

// Yeni Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
})

// Server'ı Başlat
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
