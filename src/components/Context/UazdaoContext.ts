import React, { createContext } from 'react';

export interface UazdaoContextValue {
  isFooterShowCar: boolean;
  setIsFooterShowCar: (show: boolean) => void;
}

export const UazdaoContext = createContext<UazdaoContextValue>({
  isFooterShowCar: true,
  setIsFooterShowCar: () => {},
});
