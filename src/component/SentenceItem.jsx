function SentenceItem({ imgPath, text }) {
    return (
        <div className='sentence'>
            <div className='sentence__images'>
                <img
                    className='sentence__image'
                    src={imgPath}
                    alt='sentence image'
                />
            </div>

            <div className='sentence_quotes'>
                <blockquote className='sentence__quote '>
                    <span className='sentence__quote__text text-regular text-regular--article'>
                        {text}
                    </span>
                    <cite className='text-light'>...</cite>
                </blockquote>
            </div>
        </div>
    );
}

export { SentenceItem };
