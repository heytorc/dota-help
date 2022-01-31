import React, { createContext, useState, useEffect, ReactNode } from 'react';

import IUser from 'src/commons/interface/IUser';

export const GlobalContext = createContext({
  user: {
    steamid: 0,
    account_id: 0,
    username: '',
    name: '',
    profile: '',
    avatar: {
      small: '',
      medium: '',
      large: '',
    }
  },
  updateUser: (userData: IUser) => { },
  signOut: () => {}
});

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser>({
    steamid: 0,
    account_id: 0,
    username: '',
    name: '',
    profile: '',
    avatar: {
      small: '',
      medium: '',
      large: '',
    }
  });

  useEffect(() => {
    const userStoraged = window.localStorage.getItem('user');
    if (userStoraged) {
      updateUser(JSON.parse(userStoraged));
    }
  }, [])

  const updateUser = (userData: IUser) => {
    const account_id = userData.steamid - 76561197960265728;

    setUser(prevState => ({
      ...userData,
      account_id
    }));
  }

  const signOut = () => {
    window.localStorage.setItem('user', '');

    updateUser({
      steamid: 0,
      account_id: 0,
      username: '',
      name: '',
      profile: '',
      avatar: {
        small: '',
        medium: '',
        large: '',
      }
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        user,
        updateUser,
        signOut
      }}>
      {children}
    </GlobalContext.Provider>
  );
}