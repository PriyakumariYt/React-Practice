import React, { useState } from 'react';
import { countries } from './Data';
const CountrySelector = () => {
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
      <div>
        <label htmlFor="country">Country: </label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="" disabled>
            Select a country
          </option>
          {countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      {states.length > 0 && (
        <div>
          <label htmlFor="states">States: </label>
          <select id="states">
            <option value="" disabled>
              Select a state
            </option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
export default CountrySelector;


