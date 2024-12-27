import React from 'react';
import styles from './Author.module.scss';

export const Author: React.FC = () => {
  return (
    <div className={styles.author}>
      <img
        className={styles.author__avatar}
        src="/src/assets/image/ievlev/avatar.webp"
        alt="аватар П.С.Иевлева"
      />
      <div className={styles.author__cart}>
        <h1>
          <a
            href="https://author.today/u/semiurg/works"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти на страницу автора Павла Иевлева на сайте Author.today"
          >
            Павел Иевлев
          </a>
        </h1>
        <h3>Когда палец показывает на небо, люди смотрят на палец.</h3>
      </div>
    </div>
  );
};
