import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SentenceItem } from '../SentenceItem';
import { SentenceItemData } from '../../interfaces/ISentenceItemData';
import {
  getRandomSentence,
  getPreviousSentence,
  getNextSentence,
} from '../../services';

export const Sentence: React.FC = () => {
  let location = useLocation();
  const [sentence, setSentence] = useState<SentenceItemData | null>(null);

  useEffect(() => {
    setSentence(getRandomSentence());
  }, [location]);

  return (
    sentence && (
      <SentenceItem
        imgPath={sentence.imgPath}
        header={sentence.header}
        footer={sentence.footer}
        text={sentence.text}
        onPrevious={() => setSentence(getPreviousSentence(sentence.id))}
        onNext={() => setSentence(getNextSentence(sentence.id))}
      />
    )
  );
};
