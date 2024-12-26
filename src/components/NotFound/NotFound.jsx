import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFound = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/sentence');
        }, 5000);
    }, []);

    return (
        <div className={styles.notfound}>
            <div className={styles.notfound_image_mirror}></div>
            <div className={styles.notfound_image}></div>
            <div className={styles.notfound__text}>Не найдено</div>
        </div>
    );
};
