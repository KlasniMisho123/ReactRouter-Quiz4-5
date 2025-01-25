import React, { useEffect, useState } from 'react'
import axios from "axios"

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/photos?_limit=4"
})

export default function Gallery() {
const [apiResponseData, setApiResponseData] = useState([]);

async function fetchData() {
    try {
      const response = await api.get("/");
      setApiResponseData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

useEffect(()=> {
    fetchData()
},[]) 

useEffect(() => {
    console.log(apiResponseData); 
  }, [apiResponseData]);

  return (
    <div>
        <h1 className='gallery-title'>Gallery</h1>
        <div className='album-flex'>
        {(
        apiResponseData.map((item) => (
            <div key={item.id} className={`album-item `}>
                <div className={`album-img-div ${item.id === 1 ? "yellow" : item.id === 2 ? "purple" : item.id === 3 ? "green" : item.id === 4 ? "pink" : ""}`} > 
                    <img src={item.thumbnailUrl} alt={item.title} />
                </div>
                    <p className='album-title'>{item.title}</p>
            </div>
            ))
        )}
        </div>
    </div>
  )
}
