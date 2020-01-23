import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataImport(){

    const [ data, setData ] = useState([]);

    useEffect(() => {
  
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) =>{
        console.log(error);
      })
  
    }, []);

    console.log(data);

    return (
        <div>
            <img src={data.hdurl} alt="space"/>
            <h3>{data.copyright}</h3>
            <h3>{data.date}</h3>
            <h3>{data.title}</h3>
        </div>
    );
}

export default DataImport;