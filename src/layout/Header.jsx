import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header text-base'>
            <div className='header__text  great-vibes-regular '>
                <Link
                    to='/home'
                    className='link'
                >
                    Уаздао
                </Link>
            </div>
            <nav className='header__nav'>
                <ul className='menu'>
                    <li>
                        <Link
                            to='/sentence'
                            className='link text__action'
                        >
                            изречение
                        </Link>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text__action'
                        >
                            книга
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text__action'
                        >
                            автор
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            className='text__action'
                        >
                            добрый грём
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href='#'
                            className='text__action'
                        >
                            дао
                        </a>
                    </li> */}
                    <li>
                        <a
                            href='#'
                            className='text__action'
                        >
                            запчасти
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
