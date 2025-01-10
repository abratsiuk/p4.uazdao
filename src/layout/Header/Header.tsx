import { Link, NavLink } from 'react-router-dom';
import { menu } from '../../configs';
import { MenuItem } from '../../configs/MenuItem';
import './Header.scss';

export const Header = () => {
  return (
    <header id="header" className="Header">
      <Link to="/" className="Header__logo">
        Уаздао
      </Link>
      <ul className="Header__menu">
        {menu?.map((m: MenuItem) => {
          return (
            <li className="Header__menuItem" key={m.to}>
              <NavLink
                to={m.to}
                className={({ isActive }) =>
                  isActive ? 'link link_active' : 'link'
                }
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
