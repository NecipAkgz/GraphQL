const express = require('express')
const schema = require('./schema.js')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')

const app = express()
app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)

app.listen(5000, () => {
  console.info('Server started at port 5000')
})
