import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/sentence');
    }, 10000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className={styles.NotFound}>
      <div
        className={`${styles.NotFound__image} ${styles.NotFound__image_mirror}`}
      ></div>
      <div className={styles.NotFound__image}></div>
      <div className={styles.NotFound__text}>Не найдено.</div>
      <div
        className={`${styles.NotFound__text} ${styles.NotFound__text_small}`}
      >
        Через 10 секунд Вы будете перенаправлены на раздел
        &quot;Изречения&quot;.
      </div>
    </div>
  );
};
