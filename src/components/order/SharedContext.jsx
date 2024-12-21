// StateContext.js
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const useSharedState = () => useContext(StateContext);

export const StateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(false);

  return (
    <StateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </StateContext.Provider>
  );
};
