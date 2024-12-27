import React from 'react';
import { ArrowLeft } from '../ArrowLeft';
import { ArrowRight } from '../ArrowRight';
import styles from './SentenceItem.module.scss';

interface SentenceItemProps {
  imgPath?: string;
  header?: string;
  footer?: string;
  text?: string;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const SentenceItem: React.FC<SentenceItemProps> = ({
  imgPath,
  header = '',
  footer = '',
  text = '',
  onPrevious = () => {},
  onNext = () => {},
}) => {
  return (
    <div className={styles.sentence}>
      <ArrowLeft className={styles.sentence__image} onClick={() => onNext()}>
        <img src={imgPath} alt="sentence image" />
      </ArrowLeft>
      <ArrowRight
        className={styles.sentence__quote}
        onClick={() => onPrevious()}
      >
        <figure className={styles.quote}>
          {header && (
            <blockquote className={styles.quote__header}>{header}</blockquote>
          )}
          <blockquote
            className={styles.quote__text}
            data-direct-speech={text.trim().charAt(0) === '-'}
          >
            {text}
          </blockquote>
          {footer && (
            <figcaption className={styles.quote__footer}>{footer}</figcaption>
          )}
        </figure>
      </ArrowRight>
    </div>
  );
};
