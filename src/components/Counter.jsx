import React, { useState } from "react";

const Counter = () => {
  // var       //method   // intialization
  const [count, setcounter] = useState(2000);
  let incre = () => {
    setcounter(count + 1);

    console.log(count);
  };

  let decerment = () => {
    // not using ++
    setcounter(count - 1);
    //  count--
    console.log(count);
    
  };
  return (
    <>
      <h1> {count}</h1>
      <button onClick={incre}>Increment</button>

      <button onClick={decerment}>Deceremnet</button>
    </>
  );
};

export default Counter;
