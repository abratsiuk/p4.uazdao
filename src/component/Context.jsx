import { createContext, useState } from 'react';

export const UazdaoContext = createContext();

export function Context(props) {
    const [isFooterShowCar, setIsFooterShowCar] = useState(false);

    const toggleIsFooterShowCar = () => {
        setIsFooterShowCar(!isFooterShowCar);
    };

    const value = {
        isFooterShowCar,
        toggleIsFooterShowCar,
        setIsFooterShowCar,
    };

    return (
        <UazdaoContext.Provider value={value}>
            {props.children}
        </UazdaoContext.Provider>
    );
}
