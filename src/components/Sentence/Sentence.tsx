import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SentenceItem } from '../SentenceItem';
import {
  getRandomSentence,
  getPreviousSentence,
  getNextSentence,
  SentenceItemData,
} from '../../services';

export const Sentence = () => {
  let location = useLocation();
  const [sentence, setSentence] = useState<SentenceItemData>({
    id: 0,
    imgPath: '',
    header: '',
    footer: '',
    text: '',
  });

  useEffect(() => {
    setSentence(getRandomSentence());
  }, [location]);

  return (
    <SentenceItem
      imgPath={sentence.imgPath}
      header={sentence.header}
      footer={sentence.footer}
      text={sentence.text}
      onPrevious={() => setSentence(getPreviousSentence(sentence.id))}
      onNext={() => setSentence(getNextSentence(sentence.id))}
    />
  );
};
