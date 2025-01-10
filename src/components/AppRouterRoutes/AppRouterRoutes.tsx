import { Routes, Route } from 'react-router-dom';
import { Welcome } from '../Welcome';
import { Home } from '../Home';
import { Sentence } from '../Sentence';
import { NotFound } from '../NotFound';
import { Author } from '../Author';
import { BookMizantrop } from '../BookMizantrop';
import { BookMultiverse } from '../BookMultiverse';
import { BookUazdao } from '../BookUazdao';

export const AppRouterRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/sentence" element={<Sentence />} />
      <Route path="/author" element={<Author />} />
      <Route path="/book-uazdao" element={<BookUazdao />} />
      <Route path="/book-multiverse" element={<BookMultiverse />} />
      <Route path="/book-mizantrop" element={<BookMizantrop />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
