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
                            className='link text-action'
                        >
                            изречение
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link
                            to='/book'
                            className='link text-action'
                        >
                            книга
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link
                            to='/author'
                            className='link text-action'
                        >
                            автор
                        </Link>
                    </li>
                    <li>
                        {' '}
                        <Link
                            to='/goodgrem'
                            className='link text-action'
                        >
                            добрый грём
                        </Link>
                    </li>

                    <li>
                        {' '}
                        <Link
                            to='/parts'
                            className='link text-action'
                        >
                            запчасти
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
