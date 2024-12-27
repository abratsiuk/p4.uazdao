import React, { ReactNode, useState } from 'react';
import { UazdaoContext } from './UazdaoContext';

interface ContextProps {
  children?: ReactNode;
}

export const Context: React.FC<ContextProps> = ({ children }) => {
  /* Writing any page in the address bar reloads the site, 
    causing the context to remount. 
    Therefore, true is needed as the default. */
  const [isFooterShowCar, setIsFooterShowCar] = useState<boolean>(true);

  const value = {
    isFooterShowCar,
    setIsFooterShowCar,
  };

  return (
    <UazdaoContext.Provider value={value}>{children}</UazdaoContext.Provider>
  );
};
