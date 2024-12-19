import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SentenceIten } from '../component/SentenceItem.jsx';
import { getNextSentence } from '../services/api.js';

function Sentence() {
    let location = useLocation();
    const [sentence, setSentence] = useState({ imgPath: '', text: '' });

    useEffect(() => {
        setSentence(getNextSentence());
    }, [location]);

    return (
        <SentenceIten
            imgPath={sentence.imgPath}
            text={sentence.text}
        />
    );
}
export { Sentence };
