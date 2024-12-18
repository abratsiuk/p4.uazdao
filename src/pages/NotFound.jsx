function NotFound() {
    return (
        <div className='sentence'>
            <img
                className='sentence__image'
                src='/src/assets/image/book/p62.webp'
                alt='book title'
            />

            <div className='home_quotes'>
                <blockquote className='sentence__quote'>
                    <span className='sentence__quote__text text__header'>
                        Не найдено.
                    </span>
                </blockquote>
                {/* <blockquote className='sentence__quote '>
                    <span className='sentence__quote__text text__small'>
                        Ибо сказано:
                            Хуйня случается.
                    </span>
                    <cite className='text__small'>...</cite>
                </blockquote> */}
            </div>
        </div>
    );
}
export { NotFound };
