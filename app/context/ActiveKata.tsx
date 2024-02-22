import { useState, useEffect, createContext, Dispatch, SetStateAction, ReactNode } from 'react';

interface ActiveKataContextType {
    activeKata: number;
    setActiveKata: Dispatch<SetStateAction<number>>;
  }
  
export const ActiveKataContext = createContext<ActiveKataContextType>({
    activeKata: 0,
    setActiveKata: () => {}, 
});

export const ActiveKataProvider = ({ children } : { children: ReactNode }) => {
    const [activeKata, setActiveKata] = useState<number>(1);

    return (
        <ActiveKataContext.Provider value={{ activeKata, setActiveKata }}>
        {children}
        </ActiveKataContext.Provider>
    );
};