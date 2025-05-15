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
        alt="avatar of P.S. Ievlev"
      />
      <div className={styles.Author__cart}>
        <ExternalLink
          parentClassName={styles.Author__cartHeader}
          href="#"
          text="Pavel Ievlev"
        />
        {/* TO DO add link to https://semiurg.ru */}
        <div className={styles.Author__cartText}>
          When a finger points at the sky, people look at the finger.
        </div>
      </div>
    </div>
  );
};
