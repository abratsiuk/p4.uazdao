import React, { useState, useEffect } from 'react';
function NotFound() {
    const [isVulgare, setIsVulgare] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVulgare(true);
            setTimeout(() => {
                setIsVulgare(false);
            }, 7000);
        }, 5000);
    }, []);

    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src={
                    !isVulgare
                        ? '/src/assets/image/book/p62.webp'
                        : '/src/assets/image/book/p0.webp'
                }
                alt='not found'
            />

            <div className='home_quotes'>
                {!isVulgare ? (
                    <blockquote className='sentence__quote'>
                        <span className='sentence__quote__text text__base'>
                            Не найдено.
                        </span>
                    </blockquote>
                ) : (
                    <blockquote className='sentence__quote '>
                        <pre className='sentence__quote__text text__base'>
                            Хуйня случается.
                        </pre>
                        <cite className='text__small'>...</cite>
                    </blockquote>
                )}
            </div>
        </div>
    );
}
export { NotFound };
