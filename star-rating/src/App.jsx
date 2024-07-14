import { useState } from 'react'


import './App.css'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function App() {
  const [rating, setRating] = useState(0);


  return (
    <>
   <div className="App">
        <h1>Star Rating</h1>

  {/* <div className="rating">
     <FaRegStar className='rate'/>
     <FaRegStar className='rate'/>
     <FaRegStar className='rate'/>
     <FaRegStar className='rate'/>
     <FaRegStar className='rate'/>
      
     </div> */}
        <div className="rating">
          {[...Array(5)].map((item, index) => {
            return (
              <span key={index} onClick={() => setRating(index + 1)}>
                {index < rating ? <FaStar className='rate' /> : <FaRegStar className='rate' />}
              </span>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App

    