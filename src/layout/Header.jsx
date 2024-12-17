function Header() {
    return (
        <header className='header text-base'>
            <div className='header__text  great-vibes-regular '>Уаздао</div>
            <nav className='header__nav'>
                <ul className='menu'>
                    <li>
                        <a href='#'>изречение</a>
                    </li>
                    <li>
                        <a href='#'>книга</a>
                    </li>
                    <li>
                        <a href='#'>автор</a>
                    </li>
                    <li>
                        <a href='#'>добрый грём</a>
                    </li>
                    <li>
                        <a href='#'>дао</a>
                    </li>
                    <li>
                        <a href='#'>запчасти</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
