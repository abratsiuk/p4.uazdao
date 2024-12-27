import React from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/sentence');
    }, 5000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className={styles.notfound}>
      <div className={styles.notfound_image_mirror}></div>
      <div className={styles.notfound_image}></div>
      <div className={styles.notfound__text}>
        Не найдено. Через 5 секунд вы будете перенаправлены на раздел
        &quot;Изречения&quot;.
      </div>
    </div>
  );
};
