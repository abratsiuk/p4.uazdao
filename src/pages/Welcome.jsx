import { useEffect, useContext } from 'react';
import { UazdaoContext } from '../component/Context';
import { useHistory } from 'react-router-dom';

function Welcome() {
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
}

export { Welcome };
