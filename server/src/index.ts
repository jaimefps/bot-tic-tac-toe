import { ApolloServer } from "apollo-server"
import { Context } from "./context"
import { schema } from "./schema"

/************************
 * Insert env configs
 ************************/
require("dotenv").config()

const isDev = process.env.NODE_ENV === "development"

const server = new ApolloServer({
  schema,
  cors: isDev,
  async context() {
    return new Context()
  },
})

server.listen().then(({ url }) => {
  console.log(`Apollo: https://studio.apollographql.com/sandbox/explorer`)
  console.log(`🟢 Server: ${url}`)
})
