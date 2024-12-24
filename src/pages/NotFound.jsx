import React, { useState, useEffect } from 'react';
import { SentenceItem } from '../components/SentenceItem.jsx';

const sentenceNotFound = {
    id: 0,
    imgPath: '/src/assets/image/book/p62.webp',
    text: 'Не найдено.',
};

function NotFound() {
    const [sentence, setSentence] = useState(sentenceNotFound);

    useEffect(() => {
        setTimeout(() => {
            setSentence({
                id: 0,
                imgPath: '/src/assets/image/book/p128.webp',
                text: 'Ибо сказано: ● Любая дорога куда-нибудь, да приводит. Даже если никакой дороги там нет.',
            });
            setTimeout(() => {
                setSentence(sentenceNotFound);
            }, 7000);
        }, 5000);
    }, []);

    return (
        <SentenceItem
            imgPath={sentence.imgPath}
            text={sentence.text}
        />
    );
}
export { NotFound };
