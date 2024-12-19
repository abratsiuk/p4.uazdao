import React, { useState, useEffect } from 'react';
import { SentenceIten } from '../component/SentenceItem.jsx';
import { useContext } from 'react';
import { UazdaoContext } from '../component/Context';

const sentenceNotFound = {
    imgPath: '/src/assets/image/book/p62.webp',
    text: 'Не найдено.',
};

function NotFound() {
    const [sentence, setSentence] = useState(sentenceNotFound);
    // const { setIsFooterShowCar = Function.prototype } =
    //     useContext(UazdaoContext);

    useEffect(() => {
        // // NotFound imitate as write unknown page => writing any page reload site => context re-mounting
        // setIsFooterShowCar(true);

        setTimeout(() => {
            setSentence({
                imgPath: '/src/assets/image/book/p128.webp',
                text: 'Ибо сказано: ● Любая дорога куда-нибудь, да приводит. Даже если никакой дороги там нет.',
            });
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
