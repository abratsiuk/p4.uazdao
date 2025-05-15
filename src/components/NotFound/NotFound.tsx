import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className={styles.NotFound}>
      <div
        className={`${styles.NotFound__image} ${styles.NotFound__image_mirror}`}
      ></div>
      <div className={styles.NotFound__image}></div>
      <div className={styles.NotFound__text}>Not found.</div>
      <div
        className={`${styles.NotFound__text} ${styles.NotFound__text_small}`}
      >
        You will be redirected to the &quot;Sayings&quot; section in 10 seconds.
      </div>
    </div>
  );
};
