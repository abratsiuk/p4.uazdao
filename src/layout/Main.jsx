import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
function Main({ children }) {
    const location = useLocation();
    const [className, setClassName] = useState('main');

    console.log(location);
    useEffect(() => {
        if (location.pathname.indexOf('/book') !== -1) {
            setClassName('main--min-height');
        } else {
            setClassName('main');
        }
    }, [location]);

    return <main className={className}>{children}</main>;
}
export { Main };
