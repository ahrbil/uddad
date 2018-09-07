const { GraphQLServer } = require('graphql-yoga');

const db = require('./db');
const getMergedSchemas = require('./utils/mergeSchemas');

const createServer = () => {
  return new GraphQLServer({
    // instead of importing resolvers and typedefs
    // we call getMergedSchemas() for getting an executable schema
    schema: getMergedSchemas(),
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => ({
      ...req,
      db
    })
  });
};

module.exports = createServer;
