import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SentenceItem } from '../component/SentenceItem.jsx';
import {
    getRandomSentence,
    getPreviousSentence,
    getNextSentence,
} from '../services/api.js';

function Sentence() {
    let location = useLocation();
    const [sentence, setSentence] = useState({ id: 0, imgPath: '', text: '' });

    useEffect(() => {
        setSentence(getRandomSentence());
    }, [location]);

    return (
        <SentenceItem
            imgPath={sentence.imgPath}
            text={sentence.text}
            onPrevious={() => setSentence(getPreviousSentence(sentence.id))}
            onNext={() => setSentence(getNextSentence(sentence.id))}
        />
    );
}
export { Sentence };
