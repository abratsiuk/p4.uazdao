import { useContext } from 'react';
import { UazdaoContext } from '../../components/Context';
import './Footer.scss';
// import { ExternalLink } from '../../components/ExternalLink';

export const Footer = () => {
  const { isFooterShowCar = false } = useContext(UazdaoContext);

  return (
    <footer className="footer">
      <div
        className={
          isFooterShowCar
            ? 'footer__copyright footer__image_bouncing'
            : 'footer__copyright'
        }
      >
        <div className="footer__my">© 2024 abratsiuk</div>
        <div className="footer__ievlev">
          <span style={{ marginRight: '0.5rem' }}>© 2021 Pavel Ievlev</span>
          {/* <ExternalLink
            href="#"
            text="Uazdao or the Dao Expressed by Hands"
          /> */}
        </div>
      </div>

      <div>
        <a href="https://github.com/abratsiuk/p4.uazdao" target="_blank">
          repo
        </a>
      </div>
    </footer>
  );
};
