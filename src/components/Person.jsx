import React from 'react'

const Person = ({name,img
  
}) => {
    //  let person = {
    //      name : " Superman ",
    //      age : 300 , 
    //       salary : 10



    //  }
  return (
    <div>
      <h1>{ name}</h1>
     <img src={img} alt="" />
    </div>
  )
}

export default Person