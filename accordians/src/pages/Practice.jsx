import React, { useState } from 'react'
import { countries } from './Data'
const Practice = () => {
const [selectCountry, setSelectCountry] = useState("")
const [state, setState] = useState([]);
const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectCountry(countryName);

    const country = countries.find((c) => c.name === countryName);
    setState(country ? country.states : []); 
  };
  return (
<>
<h1>Country selected types</h1>
      <select value={selectCountry} onChange={handleCountryChange}>
        <option value="" disabled>
          Select country
        </option>
        {
          countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
   {state.length > 0 && (
    <select>
      <option>
        Select state
      </option>
      {state.map((state, idx)=>{
        return <option key={idx} value = {state}>{state}</option>
      })}
    </select>
   )}
</>
  )
}

export default Practice