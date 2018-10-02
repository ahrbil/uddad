// const { GraphQLServer } = require('graphql-yoga');
import { GraphQLServer } from "graphql-yoga";

import db from "./db";
import getMergedSchemas from "./utils/mergeSchemas";

const createServer = () =>
  new GraphQLServer({
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
export default createServer;
