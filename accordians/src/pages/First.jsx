import React, { useState } from 'react';
import { countries } from './Data';
const First = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    const country = countries.find((c) => c.name === countryName);
    setStates(country ? country.states : []);
  };
return (
    <div>
      <h1>Select a Country and its States</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="" disabled>
          Select a country
        </option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      {states.length > 0 && (
        <select>
          <option value="" disabled>
            Select a state
          </option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
export default First;