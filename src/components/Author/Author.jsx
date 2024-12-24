import './Author.css';

export const Author = () => {
    return (
        <div className='author'>
            <img
                className='author__avatar'
                src='/src/assets/image/ievlev/avatar.webp'
                alt=''
            />
            <div className='author_cart'>
                <h1>
                    <a
                        href='https://author.today/u/semiurg/works'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Павел Иевлев
                    </a>
                </h1>
                <h3>Когда палец показывает на небо, люди смотрят на палец.</h3>
            </div>
        </div>
    );
};
