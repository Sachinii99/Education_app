import React, { createContext, useState, useContext } from "react";

const ClickContext = createContext();

// Create the provider component
export const ClickProvider = ({ children }) => {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => setClickCount((prevCount) => prevCount + 1);

  return (
    <ClickContext.Provider value={{ clickCount, incrementCount }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClickCount = () => useContext(ClickContext);
