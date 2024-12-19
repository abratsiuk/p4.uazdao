import { useContext } from 'react';
import { UazdaoContext } from '../component/Context';

function Footer() {
    const { isFooterShowCar = false } = useContext(UazdaoContext);

    return (
        <footer className='footer text-regular'>
            <div
                className={
                    isFooterShowCar
                        ? 'footer__copyringht footer__image--gump'
                        : 'footer__copyringht'
                }
            >
                <div className='footer__my'>© 2024 abratsiuk</div>
                <div className='footer__ievlev'>
                    <span style={{ marginRight: '0.5rem' }}>
                        © 2021 Павел Иевлев
                    </span>
                    <a
                        href='https://www.rulit.me/books/uazdao-ili-dao-vyrazhennoe-rukami-read-445410-1.html'
                        target='_blank'
                    >
                        Уаздао или Дао, выраженное руками
                    </a>
                </div>
            </div>

            <div className='footer__repo'>
                <a
                    href='https://github.com/abratsiuk/p4.uazdao'
                    target='_blank'
                >
                    repo
                </a>
            </div>
        </footer>
    );
}

export { Footer };
