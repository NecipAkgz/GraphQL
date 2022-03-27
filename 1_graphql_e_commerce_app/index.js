const { ApolloServer, gql } = require('apollo-server')
const { typeDefs } = require('./schema')
const { Query } = require('./resolvers/Query')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')

// Yeni Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
})

// Server'ı Başlat
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
