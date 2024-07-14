import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './pages/Accordion'
import CountrySelector from './pages/CountrySelector'
import Practice from './pages/Practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <h1>Coutry and states </h1>
  {/* <Accordion/>
  <CountrySelector/> */}
  <Practice/>
     </div>
    </>
  )
}

export default App
