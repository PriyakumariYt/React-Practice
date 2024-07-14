import React, { useState, useEffect } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    // theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
 useEffect(() => {
    document.body.className = theme;
    
  }, [theme]);

  return (
    <>
      <section className="header">
       <div className="container">
          <div className="box">
            <h2 className="tracking-in-expand">Generate Dark Mode</h2>
            <div>
            <img src={theme === "dark-theme" ? "/on.svg" : "/off.svg"} alt="Bulb" 
               style={{ height: "50px", width: "50px" }}
            />
            </div>
        
            <a to="" id="vibrate-1" className="btn" onClick={toggleTheme}>
              Toggle Me
            </a>
          </div>
          
        </div>
      </section>
    </>
  );
};


export default Darkmode;
