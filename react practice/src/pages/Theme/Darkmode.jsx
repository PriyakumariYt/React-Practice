import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Darkmode = () => {
  const [theme, setTheme] = useState("dark-theme");

  const clickMe = () => {
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
      <Link onClick={clickMe} className='btn'>Click Me</Link>
    </>
  );
};

export default Darkmode;
