import {
    useState,
    useEffect,
    createContext,
    Dispatch,
    SetStateAction,
    ReactNode,
  } from "react";
  
  interface solvedThisSessionContextType {
    solvedThisSession: number;
    setSolvedThisSession: Dispatch<SetStateAction<number>>;
  }
  
  export const SolvedThisSessionContext =
    createContext<solvedThisSessionContextType>({
      solvedThisSession: 0,
      setSolvedThisSession: () => {},
    });
  
  export const SolvedThisSessionProvider = ({
    children,
  }: {
    children: ReactNode;
  }) => {
    const [solvedThisSession, setSolvedThisSession] = useState<number>(0);
  
    return (
      <SolvedThisSessionContext.Provider
        value={{ solvedThisSession, setSolvedThisSession }}
      >
        {children}
      </SolvedThisSessionContext.Provider>
    );
  };