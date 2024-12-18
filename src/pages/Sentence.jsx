function Sentence() {
    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src='/src/assets/image/book/p69.webp'
                alt='book title'
            />
            <div className='home_quotes'>
                <blockquote className='sentence__quote '>
                    <span className='sentence__quote__text text__base text__base--article'>
                        15. В гараже матерятся даже самые выдержанные и
                        интеллигентные люди. Без этих заклинаний вы просто
                        ничего не открутите, проверено.
                    </span>
                    <cite className='sentence__cite text__small'>...</cite>
                </blockquote>
            </div>
        </div>
    );
}
export { Sentence };
