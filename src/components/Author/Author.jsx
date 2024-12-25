import styles from './Author.module.scss';

export const Author = () => {
    return (
        <div className={styles.author}>
            <img
                className={styles.author__avatar}
                src='/src/assets/image/ievlev/avatar.webp'
                alt=''
            />
            <div className={styles.author_cart}>
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
                <button>test</button>
            </div>
        </div>
    );
};
