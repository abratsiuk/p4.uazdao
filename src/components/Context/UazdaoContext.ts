import React, { createContext } from 'react';

export interface UazdaoContextValue {
  isFooterShowCar: boolean;
  setIsFooterShowCar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UazdaoContext = createContext<UazdaoContextValue | undefined>(
  undefined,
);
