const { ApolloServer, gql } = require('apollo-server')

// Döndürelecek Tip
const typeDefs = gql`
  type Query {
    hello: String
    numberOfAnimal: Int
    price: Float
    isCool: Boolean
  }
`

// Döndürecek Veri
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    numberOfAnimal: () => {
      return 55
    },
    price: () => {
      return 5.5
    },
    isCool: () => {
      return true
    },
  },
}

// Yeni Server
const server = new ApolloServer({ typeDefs, resolvers })

// Server'ı Başlat
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
