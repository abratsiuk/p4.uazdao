import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../configs';
import './Header.scss';

export const Header = () => {
  return (
    <header id="header" className="header">
      <Link to="/" className="header__logo">
        Уаздао
      </Link>
      <ul className="header__menu">
        {menu.map((m) => {
          return (
            <li className="header__menu-item" key={m.to}>
              <NavLink
                to={m.to}
                className="link"
                exact
                activeClassName="link-active"
              >
                {m.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
