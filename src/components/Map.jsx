import React, { useState } from 'react'

const Map = () => {
    const [data, setdata] = useState(
   [{
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    description: "High-quality sound with noise cancellation and long battery life.",
    imgSrc: "https://cdn.pixabay.com/photo/2022/12/01/14/46/city-7629244_640.jpg"
  },
  {
    id: 2,
    title: "Smartphone",
    price: 699.99,
    description: "Latest model with advanced features and stunning display quality.",
    imgSrc: "https://cdn.pixabay.com/photo/2014/10/23/18/05/battery-500289_960_720.jpg"
  },
  {
    id: 3,
    title: "Laptop",
    price: 1199.99,
    description: "Powerful performance, sleek design, and long-lasting battery life.",
    imgSrc: "https://cdn.pixabay.com/photo/2020/05/07/14/57/buildings-5141841_640.jpg"
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 199.99,
    description: "Track fitness, receive notifications, and enjoy customizable watch faces.",
    imgSrc: "https://cdn.pixabay.com/photo/2023/01/15/22/48/lake-7721285_640.jpg"
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 49.99,
    description: "Portable speaker with high-fidelity sound and extended battery life.",
    imgSrc: "https://cdn.pixabay.com/photo/2022/12/28/21/10/night-7683839_640.jpg"
  }
  ]
)
  return (
    <div>
   
      {data.map((abhi )=><div key={abhi.id}> 
      
        <h1>{abhi.title}</h1>
        <span>{abhi.description}</span>
        <img src={abhi.imgSrc}/>
      
      </div>)
    
        
    
    
    
    }
    </div>
  )
}

export default Map
