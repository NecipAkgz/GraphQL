const path = require('path')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
})

const app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    pretty: true,
    schema: schema,
  })
)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
