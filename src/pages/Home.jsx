function Home() {
    return (
        <div className='home text__header'>
            <img
                classname='home__image'
                src='/src/assets/image/book/title.webp'
                alt='book title'
                className='home__title'
            />
            <div className='home_quote text__header'>
                <blockquote className='home__quote'>
                    <span className='home__quote__text'>
                        Дао, которое может быть выражено словами, не есть
                        настоящее дао.
                    </span>
                    <cite className='text__decorate'>Дао Дэ Цзин</cite>
                </blockquote>

                <blockquote className='home__quote'>
                    <span className='home__quote__text'>
                        Дело Мастера боится, потому что Мастер знает много
                        страшных слов.
                    </span>
                    <cite className='text__decorate'>УАЗдао</cite>
                </blockquote>
            </div>
        </div>
    );
}

export { Home };
