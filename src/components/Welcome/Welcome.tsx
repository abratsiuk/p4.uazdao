import React from 'react';
import { useEffect, useContext } from 'react';
import { UazdaoContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import './Welcome.scss';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const { setIsFooterShowCar } = useContext(UazdaoContext);

  useEffect(() => {
    setIsFooterShowCar(false);

    const timer = setTimeout(() => {
      navigate('/home');
      setIsFooterShowCar(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [history, setIsFooterShowCar]);

  return (
    <div className="Welcome">
      <div className="Welcome__text">Уаздао</div>
      <div className="Welcome__image Welcome__image_smoothly"></div>
    </div>
  );
};
