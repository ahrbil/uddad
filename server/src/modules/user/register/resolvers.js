export const resolvers = {
  Mutation: {
    signup: async (_, { name, email, password }, ctx, info) =>
      // const isUserAlReadyExists = ctx.db.query.users(where:{})
      true
  }
};
