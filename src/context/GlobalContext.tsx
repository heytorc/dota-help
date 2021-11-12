import React, { createContext, useState, ReactNode } from 'react';

export const GlobalContext = createContext({
  user: {},
  updateUser: (userData: any) => {},
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({});

  const updateUser = (userData: any) => {
    setUser(prevState => userData);
  }

  return (
    <GlobalContext.Provider
      value={{
        user,
        updateUser,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}