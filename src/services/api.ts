import { sentences, SentenceItemData } from './sentences';

export const getPreviousSentence = (id: number = 0): SentenceItemData => {
  return getSentenceById(id - 1);
};
export const getNextSentence = (id: number = 0): SentenceItemData => {
  return getSentenceById(id + 1);
};
export const getRandomSentence = (): SentenceItemData => {
  return getSentenceById(getRandomId());
};

const getRandomId = (): number => {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const sentencesLength = sentences.length;
  const randomId = (minutes * 60 + seconds) % sentencesLength;
  return randomId;
};

const getSentenceById = (id: number = 0): SentenceItemData => {
  if (!id) {
    id = 0;
  }
  if (id < 0) {
    id = sentences.length - 1;
  }
  if (id >= sentences.length) {
    id = 0;
  }
  return sentences[id];
};
