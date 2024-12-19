function SentenceIten({ imgPath, text }) {
    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src={imgPath}
                alt='sentence image'
            />
            <div className='home_quotes'>
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

export { SentenceIten };
