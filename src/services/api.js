import { sentences } from './sentences.js';

function getNextSentence() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const sentencesLength = sentences.length;
    const nextSentenceIndex = (minutes * 60 + seconds) % sentencesLength;
    const { img, text } = sentences[nextSentenceIndex];
    const imgPath = `/src/assets/image/book/${img}.webp`;
    return { imgPath, text };
}

export { getNextSentence };
