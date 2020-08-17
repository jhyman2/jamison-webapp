import { gql } from 'apollo-server';

export default gql`
  type SampleData {
    apolloPort: Int
    appName: String
    expressPort: Int
    serverTime: String
  }
  
  type Query {
    sampleData: SampleData
  }
`;
