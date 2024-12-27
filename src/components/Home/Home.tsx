import React from 'react';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="/src/assets/image/book/title.webp"
        alt="Обложка книги 'УАЗдао' или 'Дао, выраженное руками'"
      />
      <div className="home__quotes">
        <blockquote
          className="home__quote"
          aria-label="Цитата из Дао Дэ Цзина: 'Дао, которое может быть выражено словами, не есть настоящее дао.'"
        >
          <span className="home__quote__text">
            Дао, которое может быть выражено словами, не есть настоящее дао.
          </span>
          <cite className="text-decorate">Дао Дэ Цзин</cite>
        </blockquote>

        <blockquote className="home__quote">
          <span className="home__quote__text">
            Дело Мастера боится, потому что Мастер знает много страшных слов.
          </span>
          <cite className="text-decorate">УАЗдао</cite>
        </blockquote>
      </div>
    </div>
  );
};
