import { useEffect, useContext } from 'react';
import { UazdaoContext } from '../Context/Context';
import { useHistory } from 'react-router-dom';
import './welcome.css';

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
    }, []);

    return (
        <div className='welcome'>
            <div className='welcome__text great-vibes-regular'>Уаздао</div>
            <div className='welcome__image welcome__image--quickly'></div>
        </div>
    );
};