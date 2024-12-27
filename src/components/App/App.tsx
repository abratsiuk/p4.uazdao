import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { Main } from '../../layout/Main';

import { Context } from '../Context';
import './App.scss';
import { AppRouterSwitch } from '../AppRouterSwitch';

export const App = () => {
  return (
    <Context>
      <Router>
        <Header />
        <Main>
          <AppRouterSwitch />
        </Main>
        <Footer />
      </Router>
    </Context>
  );
};
