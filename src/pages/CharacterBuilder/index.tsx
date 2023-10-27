import React, { useState, useEffect } from 'react';
import { getRecordByID } from '../../components/DBHandler';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    // Create an async function to fetch the data and update the state
    async function fetchData() {
      try {
        const result = await getRecordByID('occupations', 0);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // Call the async function inside useEffect
    fetchData();
  }, []);

  return (
    <div>
      <h1>working</h1>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
