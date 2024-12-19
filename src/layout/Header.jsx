import { Link } from 'react-router-dom';

function Header() {
    return (
        <header
            id='header'
            className='header text-base'
        >
            <div className='header__text  great-vibes-regular '>
                <Link
                    to='/'
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
                            to='/author'
                            className='link text-action'
                        >
                            Павел Иевлев
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/book-uazdao'
                            className='link text-action'
                        >
                            версия 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/book-multiverse'
                            className='link text-action'
                        >
                            версия 2
                        </Link>
                    </li>{' '}
                    <li>
                        <Link
                            to='/book-mizantrop'
                            className='link text-action'
                        >
                            версия 3
                        </Link>
                    </li>
                    {/* <li>
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
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}

export { Header };
