import React from 'react';
import './Home.scss';
import { Image } from '../Image';

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <Image
        parentClassName="Home__image"
        src="images/book/title.webp"
        alt="Cover of the book 'UAZdao' or 'The Dao Expressed by Hands'"
      />
      <div className="Home__quotes">
        <blockquote
          className="Home__quote"
          aria-label="Quote from the Tao Te Ching: 'The Dao that can be spoken is not the true Dao.'"
        >
          <span className="Home__quoteText">
            The Dao that can be spoken is not the true Dao.
          </span>
          <cite className="Home__quoteCite">Tao Te Ching</cite>
        </blockquote>

        <blockquote className="Home__quote">
          <span className="Home__quoteText">
            The Work is afraid of the Master, because the Master knows many
            scary words.
          </span>
          <cite className="Home__quoteCite">UAZdao</cite>
        </blockquote>
      </div>
    </div>
  );
};
