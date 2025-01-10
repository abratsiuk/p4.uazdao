import React from 'react';
import styles from './Author.module.scss';
import { Image } from '../Image';
import { ExternalLink } from '../ExternalLink';

export const Author: React.FC = () => {
  return (
    <div className={styles.Author}>
      <Image
        parentClassName={styles.Author__avatar}
        src="images/ievlev/avatar.webp"
        alt="аватар П.С.Иевлева"
      />
      <div className={styles.Author__cart}>
        <ExternalLink
          parentClassName={styles.Author__cartHeader}
          href="https://author.today/u/semiurg/works"
          text="Павел Иевлев"
        />
        {/* TO DO add link to https://semiurg.ru */}
        <div className={styles.Author__cartText}>
          Когда палец показывает на небо, люди смотрят на палец.
        </div>
      </div>
    </div>
  );
};
