import React, { useState, useEffect } from 'react';
function NotFound() {
    const [isSentence, setIsSentence] = useState(false);

    useEffect(() => {
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
                        <span className='sentence__quote__text text__base'>
                            Не найдено.
                        </span>
                    </blockquote>
                ) : (
                    <blockquote className='sentence__quote '>
                        <pre className='sentence__quote__text text__base'>
                            Ибо сказано: ● Любая дорога куда-нибудь, да
                            приводит. Даже если никакой дороги там нет.
                        </pre>
                        <cite className='text__small'>...</cite>
                    </blockquote>
                )}
            </div>
        </div>
    );
}
export { NotFound };
