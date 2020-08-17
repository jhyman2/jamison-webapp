import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

class GraphQLServer {
  start() {
    const apolloServer = new ApolloServer({
      resolvers,
      typeDefs,
    });

    apolloServer.listen().then(({ url }) => {
      console.log(`Apollo Server ready at ${url}`);
    });
  }
}

export default GraphQLServer;
