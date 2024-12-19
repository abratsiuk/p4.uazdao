import React, { useState, useEffect, useContext } from 'react';
import { UazdaoContext } from '../component/Context';
import { SentenceIten } from '../component/SentenceItem.jsx';

const sentenceNotFound = {
    imgPath: '/src/assets/image/book/p62.webp',
    text: 'Не найдено.',
};
const sentenceAnother = {
    imgPath: '/src/assets/image/book/p128.webp',
    text: 'Ибо сказано: ● Любая дорога куда-нибудь, да приводит. Даже если никакой дороги там нет.',
};

function NotFound() {
    const [sentence, setSentence] = useState(sentenceNotFound);
    const { setIsFooterShowCar = Function.prototype } =
        useContext(UazdaoContext);

    useEffect(() => {
        /* TO DO на этой странице слетает контекст и стает false, 
        я его принужительно ставлю true,  но не понятно почему слетает */
        setIsFooterShowCar(true);

        setTimeout(() => {
            setSentence(sentenceAnother);
            setTimeout(() => {
                setSentence(sentenceNotFound);
            }, 7000);
        }, 5000);
    }, []);

    return (
        <SentenceIten
            imgPath={sentence.imgPath}
            text={sentence.text}
        />
    );
}
export { NotFound };
