const { GraphQLServer } = require('graphql-yoga');
require('dotenv').config();

const db = require('./db');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  resolvers: {
    Mutation,
    Query,
  },
  context: req => ({
    ...req,
    db
  })
});

server.start(() =>
  console.log(`🚀  👌  Server running on http://localhost:4000`)
);
