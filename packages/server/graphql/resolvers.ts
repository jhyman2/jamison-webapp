export default {
  Query: {
    sampleData: () => ({
      apolloPort: process.env.APOLLO_PORT,
      appName: process.env.APP_NAME,
      expressPort: process.env.EXPRESS_PORT,
      serverTime: new Date().toString(),
    }),
  },
};
