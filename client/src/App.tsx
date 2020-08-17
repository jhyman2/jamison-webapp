import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import './App.css';

const SAMPLE_DATA = gql`
  query sampleData {
    sampleData {
      apolloPort
      appName
      expressPort
      serverTime
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(SAMPLE_DATA, { pollInterval: 1000 });
  const [sampleExpressData, setSampleExpressData] = useState({
    apolloPort: 0,
    appName: '',
    expressPort: 0,
    serverTime: '',
  });

  useEffect(() => {
    fetch('/express-endpoint')
      .then(res => res.json())
      .then((res => setSampleExpressData(res)));
  }, []);

  if (loading) {
    return <div>loading....</div>;
  }

  if (error) {
    return (
      <div>
        An error has occurred ${JSON.stringify(error, null, 2)}
      </div>
    );
  }

  const { apolloPort, appName, expressPort, serverTime } = data.sampleData;

  return (
    <div className="App">
      <h1>This data came from GraphQL</h1>
      <h4>
        Welcome to {appName}. This request has 1 second polling. Apollo makes that easy.
        Check out the time.
      </h4>
      <div>Apollo is running on {apolloPort}</div>
      <div>Express is running on {expressPort}</div>
      <div>The current time is {serverTime}</div>

      <h1>This data came from express</h1>
      <h4>Welcome to {sampleExpressData.appName}. This request is just a regular GET request using window.fetch.</h4>
      <div>Apollo is running on {sampleExpressData.apolloPort}</div>
      <div>Express is running on {sampleExpressData.expressPort}</div>
      <div>The current time is {sampleExpressData.serverTime}</div>
    </div>
  );
}

export default App;
