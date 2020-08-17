import dotenv from 'dotenv'
import express from 'express';
import path from 'path';
import GraphQLServer from './graphql';

dotenv.config({ path: path.resolve('../../.env') });

class MyApp {
  async start() {
    const app = express();

    app.get('/sample-route', (_req: any, res: any) => {
      res.send(JSON.stringify({
        myAppName: process.env.APP_NAME,
        theTime: new Date(),
        ports: {
          express: process.env.EXPRESS_PORT,
          apollo: process.env.APOLLO_PORT,
        },
      }));
    });

    app.get('/express-endpoint', (_req: any, res: any) => {
      res.send(JSON.stringify({
        apolloPort: process.env.APOLLO_PORT,
        appName: process.env.APP_NAME,
        expressPort: process.env.EXPRESS_PORT,
        serverTime: new Date().toString(),
      }));
    });

    const graphqlServer = new GraphQLServer();
    graphqlServer.start();

    try {
      await app.listen(process.env.EXPRESS_PORT);
      console.log(`\n${process.env.APP_NAME} listening on port ${process.env.EXPRESS_PORT}`);
    } catch (error) {
      return console.error(error);
    }
  }
}

new MyApp().start();
