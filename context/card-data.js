import { createContext, useContext, useState } from 'react';
import dashboardSample from './card-data-sample';

const CardDataContext = createContext(undefined)

export function CardDataContextProvider({ children }) {
  // somewhat coarse! should have multiple providers
  const [applicationState, setApplicationState] = useState({
    ...dashboardSample,
    cardData: {}
  });

  return (
    <CardDataContext.Provider
      value={{
        applicationState,
        setApplicationState,
      }}
    >
      {children}
    </CardDataContext.Provider>
  )
}

export function useCardData() {
  const context = useContext(CardDataContext)
  if (!context) {
    throw new Error('useCardData must be used inside a `CardDataContextProvider`');
  }

  return context;
}
