import React, { createContext } from 'react';
import { IUazdaoContextValue } from '../../interfaces/IUazdaoContextValue';

export const UazdaoContext = createContext<IUazdaoContextValue>({
  isFooterShowCar: true,
  setIsFooterShowCar: () => {},
});
