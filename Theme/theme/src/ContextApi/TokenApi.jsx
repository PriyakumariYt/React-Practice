import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

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
  
  const contextValue = {
theme,
toggleTheme,
   };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
