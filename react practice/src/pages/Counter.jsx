import React, { useState } from 'react'

const Counter = () => {
    const [number,updateNumber] = useState(0)
const inc = (num) =>{
updateNumber(number + 1)
}
const dec =()=>{
    if(number > 0){
        updateNumber (number - 1)
    }else{
        alert("thats limit only 0")
     updateNumber(0)

    }
}
  return (
   <>
    <h1>{number}</h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
   </>
  )
}

export default Counter