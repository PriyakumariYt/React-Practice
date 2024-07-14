import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState()
  const IncrementFun = ()=>{
    setCount(count + step)
  }
  const DecrementFun = ()=>{
    setCount(count - step)
  }
  const handleReset = ()=>{
    setCount(0)
    setStep("")
  }
  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setStep(value);
    }
  };

  return (
    <>
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <input type="number" 
      placeholder='step'
      value={step}
      onChange={handleStepChange}
//  onChange={(e)=>setStep(Number(e.target.value))}
      
      />
      <button onClick={IncrementFun} disabled={count >= 100}>Increment</button>
      <button onClick={DecrementFun} disabled={count <= 0}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  )
}

export default App
