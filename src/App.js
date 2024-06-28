import React, { useState } from 'react'

const App = () => {
  const[data,setdata]=useState(0)
  
 
    const clicked=()=>
      {
       setdata(Math.floor(Math.random()*10)+1)
       

      }
  return (
    <div className='box1'>
      <h3> Random Number </h3>
      
      <h3>{data}</h3>
      <button type='submit' onClick={clicked} >RandomNum</button>
      
    </div>
  )
}

export default App
