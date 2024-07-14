import React, { useEffect, useState } from 'react';

const FetchApi = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data", data)
        setData(data);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchData();
  }, []);



  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.map(item => (
      <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px', width: '200px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h3>{item.name}</h3>
        <p>{item.username}</p>
        <h6>{item.email}</h6>
      </div>
    ))}
  </div>
  );
};

export default FetchApi;
