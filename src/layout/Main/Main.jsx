import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './main.css';

export const Main = ({ children }) => {
    const location = useLocation();
    const [className, setClassName] = useState('main');

    useEffect(() => {
        if (location.pathname.indexOf('/book') !== -1) {
            setClassName('main--min-height');
        } else {
            setClassName('main');
        }
    }, [location]);

    return <main className={className}>{children}</main>;
};