function Footer() {
    return (
        <footer className='footer text__base'>
            <div className='footer__my'>© 2024 abratsiuk</div>
            <div className='footer__repo'>
                <a href='https://github.com/abratsiuk/p4.uazdao'>repo</a>
            </div>
            <div className='footer__ievlev'>
                <span style={{ marginRight: '0.5rem' }}>
                    © 2021 Павел Иевлев
                </span>
                <a href='https://www.rulit.me/books/uazdao-ili-dao-vyrazhennoe-rukami-read-445410-1.html'>
                    Уаздао или Дао, выраженное руками
                </a>
            </div>
        </footer>
    );
}

export { Footer };