import React from 'react'
import { useAuth } from '../ContextApi/TokenApi'
const Darkmode = () => {
const {toggleTheme}= useAuth()
  return (
    <>
        <button onClick={toggleTheme}>toggle me</button>
    </>
  )
}

export default Darkmode