import React, { useState } from 'react'


const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputData, setInputData] = useState('');
 const taskAdd = () => {
    if (!inputData) {
      return;
    } else {
      setItems([...items, inputData]);
      setInputData('');
    }
  };

  return (
   <>
<h1>TODO App</h1>
<div>
<input type="text" 
id='input-box'
 placeholder="Add a todo"
value={inputData}
onChange={(e) => setInputData(e.target.value)} 

/>
<button  onClick={taskAdd}>Add</button>

</div>
<ul>
{items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}

</ul>
   </>
  )
}

export default Todo


