import React, { useState } from 'react';

const Form1 = () => {
    const [user, setUser] = useState({
        name: "",
        email:"",
        password:"",
    });

    const handleInput = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            name: '',
            email: '',
           password: ''
          });
    };

    const handleForm = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <h1>Login Form</h1>
            <form onSubmit={handleInput}>
                <div className="box">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name'
                        name="name"
                        value={user.name}
                        onChange={handleForm}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id='email'
                        name='email'
                        value={user.email}
                        onChange={handleForm}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password'
                        name='password'
                        value={user.password}
                        onChange={handleForm}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form1;
