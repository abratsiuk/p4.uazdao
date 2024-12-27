import { sentences } from './sentences';

export const getPreviousSentence = (id = 0) => {
  return getSentenceById(id - 1);
};
export const getNextSentence = (id = 0) => {
  return getSentenceById(id + 1);
};
export const getRandomSentence = () => {
  return getSentenceById(getRandomId());
};

const getRandomId = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const sentencesLength = sentences.length;
  const randomId = (minutes * 60 + seconds) % sentencesLength;
  return randomId;
};

const getSentenceById = (id) => {
  if (!id) {
    id = 0;
  }
  if (id < 0) {
    id = sentences.length - 1;
  }
  if (id >= sentences.length) {
    id = 0;
  }
  const { img, header, footer, text } = sentences[id];
  const imgPath = `/src/assets/image/book/${img}.webp`;
  return { id: id, imgPath, header, footer, text };
};
