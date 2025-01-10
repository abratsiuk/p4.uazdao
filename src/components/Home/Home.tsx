import React from 'react';
import './Home.scss';
import { Image } from '../Image';
import { ExternalLink } from '../ExternalLink';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Image
        className="Home__image"
        src="/src/assets/images/book/title.webp"
        alt="Обложка книги 'УАЗдао' или 'Дао, выраженное руками'"
      />
      <div className="Home__quotes">
        <blockquote
          className="Home__quote"
          aria-label="Цитата из Дао Дэ Цзина: 'Дао, которое может быть выражено словами, не есть настоящее дао.'"
        >
          <span className="Home__quoteText">
            Дао, которое может быть выражено словами, не есть настоящее дао.
          </span>
          <cite className="Home__quoteCite">Дао Дэ Цзин</cite>
        </blockquote>

        <blockquote className="Home__quote">
          <span className="Home__quoteText">
            Дело Мастера боится, потому что Мастер знает много страшных слов.
          </span>
          <cite className="Home__quoteCite">УАЗдао</cite>
        </blockquote>
      </div>
    </div>
  );
};
