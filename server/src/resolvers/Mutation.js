const mutations = {
  async createUser(parent, args, ctx, info) {
    return await ctx.db.mutation.createUser(
      {
        data: {
          name: args.name,
          age: args.age
        }
      },
      info
    );
  }
};

module.exports = mutations;
