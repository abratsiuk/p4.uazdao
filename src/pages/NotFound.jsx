import React, { useState, useEffect, useContext } from 'react';
import { UazdaoContext } from '../component/Context';

function NotFound() {
    const [isSentence, setIsSentence] = useState(false);
    const { setIsFooterShowCar = Function.prototype } =
        useContext(UazdaoContext);

    useEffect(() => {
        /* TO DO на этой странице слетает контекст и стает false, 
        я его принужительно ставлю true,  но не понятно почему слетает */
        setIsFooterShowCar(true);
        setTimeout(() => {
            setIsSentence(true);
            setTimeout(() => {
                setIsSentence(false);
            }, 7000);
        }, 5000);
    }, []);

    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src={
                    !isSentence
                        ? '/src/assets/image/book/p62.webp'
                        : '/src/assets/image/book/p128.webp'
                }
                alt='not found'
            />

            <div className='home_quotes'>
                {!isSentence ? (
                    <blockquote className='sentence__quote'>
                        <span className='sentence__quote__text text-regular'>
                            Не найдено.
                        </span>
                    </blockquote>
                ) : (
                    <blockquote className='sentence__quote '>
                        <pre className='sentence__quote__text text-regular'>
                            Ибо сказано: ● Любая дорога куда-нибудь, да
                            приводит. Даже если никакой дороги там нет.
                        </pre>
                        <cite className='text-light'>...</cite>
                    </blockquote>
                )}
            </div>
        </div>
    );
}
export { NotFound };
