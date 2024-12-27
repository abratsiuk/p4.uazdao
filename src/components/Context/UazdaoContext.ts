import React, { createContext } from 'react';

interface UazdaoContextValue {
  isFooterShowCar: boolean;
  setIsFooterShowCar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UazdaoContext = createContext<UazdaoContextValue | undefined>(
  undefined,
);
