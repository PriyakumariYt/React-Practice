import React, { useState } from 'react';
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    } else if (value === 'C') {
      setDisplayValue('');
    } else {
      setDisplayValue(prevDisplay => prevDisplay + value);
    }
  };
 return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="keyboard">
        <div onClick={() => handleButtonClick('1')}>1</div>
        <div onClick={() => handleButtonClick('2')}>2</div>
        <div onClick={() => handleButtonClick('3')}>3</div>
        <div className="black" onClick={() => handleButtonClick('+')}>+</div>
        <div onClick={() => handleButtonClick('4')}>4</div>
        <div onClick={() => handleButtonClick('5')}>5</div>
        <div onClick={() => handleButtonClick('6')}>6</div>
        <div className="black" onClick={() => handleButtonClick('-')}>-</div>
        <div onClick={() => handleButtonClick('7')}>7</div>
        <div onClick={() => handleButtonClick('8')}>8</div>
        <div onClick={() => handleButtonClick('9')}>9</div>
        <div className="black" onClick={() => handleButtonClick('*')}>*</div>
        <div className="red" onClick={() => handleButtonClick('C')}>C</div>
        <div onClick={() => handleButtonClick('0')}>0</div>
        <div className="black" onClick={() => handleButtonClick('=')}>=</div>
        <div className="black" onClick={() => handleButtonClick('/')}>/</div>
      </div>
    </div>
  );
}

export default Calculator;
