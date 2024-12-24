import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const UazdaoContext = createContext();

export function Context(props) {
    /* Writing any page in the address bar reloads the site, 
    causing the context to remount. 
    Therefore, true is needed as the default. */
    const [isFooterShowCar, setIsFooterShowCar] = useState(true);

    const value = {
        isFooterShowCar,
        setIsFooterShowCar,
    };

    return (
        <UazdaoContext.Provider value={value}>
            {props.children}
        </UazdaoContext.Provider>
    );
}
