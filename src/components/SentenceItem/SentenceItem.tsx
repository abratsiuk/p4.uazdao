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
  imgPath = '',
  header = '',
  footer = '',
  text = '',
  onPrevious = () => {},
  onNext = () => {},
}) => {
  const className_text = `${styles.SentenceItem__text} 
            ${text?.trim()[0] === '-' ? styles.SentenceItem__text_speech : ''}
            ${header ? styles.SentenceItem__text_headered : ''}
            ${!header ? styles.SentenceItem__text_reflection : ''}`;
  return (
    <div className={styles.SentenceItem}>
      <ArrowLeft
        className={styles.SentenceItem__imageArrow}
        onClick={onNext}
        aria-label="Предыдущее изречение"
      >
        <img src={imgPath} alt="sentence image" />
      </ArrowLeft>
      <ArrowRight
        className={styles.SentenceItem__quoteArrow}
        onClick={onPrevious}
        aria-label="Следующее изречение"
      >
        <figure className={styles.SentenceItem__quote}>
          {header && (
            <blockquote className={styles.SentenceItem__header}>
              {header}
            </blockquote>
          )}
          <blockquote className={className_text}>{text}</blockquote>
          {footer && (
            <figcaption className={styles.SentenceItem__footer}>
              {footer}
            </figcaption>
          )}
        </figure>
      </ArrowRight>
    </div>
  );
};
