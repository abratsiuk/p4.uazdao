import React from 'react';
import styles from './Author.module.scss';

export const Author: React.FC = () => {
  return (
    <div className={styles.Author}>
      <img
        className={styles.Author__avatar}
        src="/src/assets/image/ievlev/avatar.webp"
        alt="аватар П.С.Иевлева"
      />
      <div className={styles.Author__cart}>
        <div className={styles.Author__cartHeader}>
          <a
            href="https://author.today/u/semiurg/works"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Перейти на страницу автора Павла Иевлева на сайте Author.today"
          >
            Павел Иевлев
          </a>
        </div>
        {/* TO DO add link to https://semiurg.ru */}
        <div className={styles.Author__cartText}>
          Когда палец показывает на небо, люди смотрят на палец.
        </div>
      </div>
    </div>
  );
};
