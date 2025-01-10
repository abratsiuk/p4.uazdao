import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { Main } from '../../layout/Main';

import { Context } from '../Context';
import './App.scss';
import { AppRouterRoutes } from '../AppRouterRoutes';

export const App = () => {
  return (
    <Context>
      <Router basename="/p4.uazdao" future={{ v7_relativeSplatPath: false }}>
        <Header />
        <Main>
          <AppRouterRoutes />
        </Main>
        <Footer />
      </Router>
    </Context>
  );
};
