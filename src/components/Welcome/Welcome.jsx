import { useEffect, useContext } from 'react';
import { UazdaoContext } from '../Context';
import { useHistory } from 'react-router-dom';
import './Welcome.scss';

export const Welcome = () => {
    const history = useHistory();
    const { setIsFooterShowCar = Function.prototype } =
        useContext(UazdaoContext);

    useEffect(() => {
        setIsFooterShowCar(false);
        setTimeout(() => {
            history.push('/home');
            setIsFooterShowCar(true);
        }, 5000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='welcome'>
            <div className='welcome__text great-vibes-regular'>Уаздао</div>
            <div className='welcome__image welcome__image--quickly'></div>
        </div>
    );
};
