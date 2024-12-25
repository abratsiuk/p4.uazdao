import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <header
            id='header'
            className='header'
        >
            <Link
                to='/'
                className='header__logo'
            >
                Уаздао
            </Link>
            <ul className='header__menu'>
                <li>
                    <NavLink
                        to='/home'
                        className='link'
                        exact
                        activeClassName='link-active'
                    >
                        главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sentence'
                        className='link'
                        exact
                        activeClassName='link-active'
                    >
                        изречение
                    </NavLink>
                </li>
                <li>
                    {' '}
                    <NavLink
                        to='/author'
                        className='link text-action'
                        exact
                        activeClassName='link-active'
                    >
                        Павел Иевлев
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/book-uazdao'
                        className='link text-action'
                        exact
                        activeClassName='link-active'
                    >
                        версия 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/book-multiverse'
                        className='link text-action'
                        exact
                        activeClassName='link-active'
                    >
                        версия 2
                    </NavLink>
                </li>{' '}
                <li>
                    <NavLink
                        to='/book-mizantrop'
                        className='link text-action'
                        exact
                        activeClassName='link-active'
                    >
                        версия 3
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};
