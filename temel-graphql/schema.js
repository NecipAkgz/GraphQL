const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

// Klasik type şema belirle
const PersonelType = new GraphQLObjectType({
  name: 'Personel',
  fields: () => ({
    id: { type: GraphQLString },
    isim: { type: GraphQLString },
    email: { type: GraphQLString },
    yas: { type: GraphQLInt },
  }),
})

// Sorgular
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    personel: {
      type: PersonelType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/personeller/${args.id}`)
          .then((res) => res.data)
      },
    },
    personeller: {
      type: new GraphQLList(PersonelType),
      resolve(parentValue, args) {
        return axios
          .get('http://localhost:3000/personeller')
          .then((res) => res.data)
      },
    },
  },
})

// Graphql fonksiyon ekleme
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    personelEkle: {
      type: PersonelType,
      args: {
        id: { type: GraphQLString },
        isim: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        yas: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/personeller', {
            id: args.id,
            isim: args.isim,
            email: args.email,
            yas: args.yas,
          })
          .then((res) => res.data)
      },
    },
    persoenelSil: {
      type: PersonelType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return axios
          .delete(`http://localhost:3000/personeller/${args.id}`)
          .then((res) => res.data)
      },
    },
    personelGuncelle: {
      type: PersonelType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        isim: { type: GraphQLString },
        email: { type: GraphQLString },
        yas: { type: GraphQLInt },
      },
      resolve(path, args) {
        return axios
          .patch(`http://localhost:3000/personeller/${args.id}`, {
            ...args,
          })
          .then((res) => res.data)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})
