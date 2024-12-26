import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UazdaoContext = createContext();

export const Context = (props) => {
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
};

Context.propTypes = {
    children: PropTypes.node,
};
