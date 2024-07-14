
import React, { useState } from 'react';


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      // Function to handle form input changes
      const handleChange = (e) => {
        console.log(e);
        const { name, value } = e.target;
        // setFormData(prevState => ({
        //   ...prevState,
        //   [name]: value
        // }));
        setFormData({
            ...formData,
            [name]:value,
        })
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here
        console.log(formData);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };


  return (
 <>
  <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
 </>

  )
}

export default Form