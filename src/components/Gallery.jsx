import React, { useEffect, useState } from 'react'
import axios from "axios"

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/photos?_limit=4"
})

const secApi = axios.create({
    baseURL:"https://dummyjson.com/image/400x200?type=webp&text=I+am+a+webp+image"
})



export default function Gallery() {
const [apiResponseData, setApiResponseData] = useState([]);
const [secApiResponseData, setSecApiResponseData] = useState([]);

async function fetchData() {
    try {
      const response = await api.get("/");
      const secResponse = await secApi.get("/", { responseType: "arraybuffer" });

      const blob = new Blob([secResponse.data], { type: "image/webp" });
      const imageUrl = URL.createObjectURL(blob);

      setApiResponseData(response.data);
      setSecApiResponseData(imageUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }



useEffect(()=> {
    fetchData()
},[]) 

useEffect(() => {
  console.log("apiResponseData: ", apiResponseData);
  console.log("secApiResponseData: ", secApiResponseData);
}, [apiResponseData, secApiResponseData]);

  return (
    <div className='gallery-body'>
        <h1 className='gallery-title'>Gallery</h1>
        <div className='album-flex'>
        {(
        apiResponseData.map((item) => (
            <div key={item.id} className={`album-item `}>
                <div className="album-img-div"> 
                    <img className='album-img' src={secApiResponseData} alt={"WebP Image"} />
                </div>
                    <p className='album-title'>{item.title}</p>
            </div>
            ))
        )}
        </div>
    </div>
  )
}
