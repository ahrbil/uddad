import createServer from "./createServer";

require("dotenv").config();

const server = createServer();

server.start(() =>
  console.log("🚀  👌  Server running on http://localhost:4000")
);
