import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [url, Seturl] = React.useState('');

  return (
    <GlobalContext.Provider value={{ url, Seturl }}>
      {children}
    </GlobalContext.Provider>
  );
};