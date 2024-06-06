import React, { useState } from "react";
import { data } from "./data";
const Filter = () => {
  const [products, setProducts] = useState(data);

  const filteByCate = (category) => {
    const filterData = data.filter((items) => items.category === category);

    console.log(filterData);
    setProducts(filterData);
  };

   
  const filteByprice = (price) => {
    const filterData = data.filter((items) => items.price >= price);

    console.log(filterData);
    setProducts(filterData);
  };

   

  return (
    <>
      <div>
        <button onClick={()=>filteByCate("mobiles")}> Mobiles </button>
        <button onClick={()=>filteByCate("laptops")} >Laptops</button>
        <button  onClick={()=>filteByCate("tablets")}>Tablets</button>
        <button onClick={()=>filteByprice(700)}>{">="}700</button>
        <button onClick={()=>filteByprice(800)}>{">="}800</button>
        <button onClick={()=>filteByprice(1100)}>{">="}1100</button>
         </div>
      <div>
        {products.map((data) => (
          <div key={data.title}>
            <h2>{data.title}</h2>
            <h4>{data.category}</h4>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <img style={{ width: "300px" }} src={data.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
