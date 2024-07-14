import React, { useState } from 'react';

const ShortCircuitEvaluation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");

    return (
        <>
            <div className="App">
                <h1>Short Circuit Evaluation</h1>
                {isLoggedIn && <p>Welcome, you are logged in</p>}
                {user ? `Hello ${user}` : 'Please login'}
            </div>
            <div className="container">
                <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    Toggle login state
                </button>
            </div>
            <button onClick={() => setUser("Sahil")}>Set user</button>
            <button onClick={() => setUser("")}>Clear user</button>
        </>
    );
};

export default ShortCircuitEvaluation;
