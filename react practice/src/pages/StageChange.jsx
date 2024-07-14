import React, { useState } from 'react'

const StageChange = () => {
    const [value, setValue] = useState(1)
    // const [value2, setValue2] = useState(1)

let value2 = value*5
    const handleMultiply = ()=>{
        // setValue2(value*5)
        setValue(value + 1 )

    }
  return (
    <>
        <h1>main value: {value}</h1>
        <button onClick={handleMultiply}>multilply by 5</button>
        <h2>multiple value:{value2}</h2>
    </>
  )
}

export default StageChange