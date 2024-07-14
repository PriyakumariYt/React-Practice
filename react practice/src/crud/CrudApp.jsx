
import React, { useState } from 'react';
import "../crud/crud.css"
const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (editIndex === null) {
      setItems([...items, input]);
    } else {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? input : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    }
    setInput('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
