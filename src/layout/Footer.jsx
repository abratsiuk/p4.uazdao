function Footer() {
    return (
        <footer className='footer text-regular'>
            {/* <div className='footer__image--gump'></div> */}
            <div className='footer__copyringht footer__image--gump'>
                <div className='footer__my'>© 2024 abratsiuk</div>
                <div className='footer__ievlev'>
                    <span style={{ marginRight: '0.5rem' }}>
                        © 2021 Павел Иевлев
                    </span>
                    <a href='https://www.rulit.me/books/uazdao-ili-dao-vyrazhennoe-rukami-read-445410-1.html'>
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
