import React from 'react'

const Conditional = () => {
    let age = 20;
  return (
    <>
     { age>18 && <h1> you can drive </h1> }
    
    </>
  )
}

export default Conditional