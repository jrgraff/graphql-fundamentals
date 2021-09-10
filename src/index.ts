import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs, resolvers } from './graphql'

const PORT = process.env.PORT || 3001

async function startApolloServer(typeDefs: any, resolvers: any){
  const server = new ApolloServer({typeDefs, resolvers})
  const app = express();
  await server.start();
  server.applyMiddleware({app, path: '/graphql'});
  
  app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);