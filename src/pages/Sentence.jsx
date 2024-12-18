import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getNextSentence } from '../services/api.js';

function Sentence() {
    let location = useLocation();
    const [sentence, setSentence] = useState({ imgPath: '', text: '' });

    useEffect(() => {
        setSentence(getNextSentence());
    }, [location]);

    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src={sentence.imgPath}
                alt='book title'
            />
            <div className='home_quotes'>
                <blockquote className='sentence__quote '>
                    <span className='sentence__quote__text text__base text__base--article'>
                        {sentence.text}
                    </span>
                    <cite className='text__small'>...</cite>
                </blockquote>
            </div>
        </div>
    );
}
export { Sentence };
