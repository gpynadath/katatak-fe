import { useState, useEffect, createContext, Dispatch, SetStateAction, ReactNode } from 'react';

interface UserContextType {
  currentUser: number;
  setCurrentUser: Dispatch<SetStateAction<number>>;
}
  
export const CurrentUserContext = createContext<UserContextType>({
  currentUser: 0,
  setCurrentUser: () => {},
});

export const CurrentUserProvider = ({ children } : { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<number>(3);

    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
        </CurrentUserContext.Provider>
    );
};
