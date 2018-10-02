import { Prisma } from "prisma-binding";

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "https://uddad-db-server.herokuapp.com/uddad-db/dev",
  secret: process.env.PRISMA_SECRET,
  debug: true
});

export default db;
