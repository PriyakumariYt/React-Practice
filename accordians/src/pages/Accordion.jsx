
import React, { useState } from 'react';
import { countries } from './Data';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // const handleToggle = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(null);
  //   } else {
  //     setActiveIndex(index);
  //   }
  //  };

  return (
    <div className="accordion">
      {countries.map((country, index) => (
        <div key={index}>
          <button onClick={() => handleToggle(index)}>
            {country.name}
          </button>
          {activeIndex === index && (
            <div className="states">
              {country.states.map((state, idx) => (
                <p key={idx}>{state}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
