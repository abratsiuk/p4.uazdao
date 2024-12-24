import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { Sentence } from './pages/Sentence';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Author } from './pages/Author';
import { BookMizantrop } from './pages/BookMizantrop';
import { BookMultiverse } from './pages/BookMultiverse';
import { BookUazdao } from './pages/BookUazdao';
import { Context } from './components/Context';

function App() {
    return (
        <Context>
            <Router>
                <Header />
                <Main>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Welcome}
                        />
                        <Route
                            exact
                            path='/welcome'
                            component={Welcome}
                        />
                        <Route
                            path='/home'
                            component={Home}
                        />
                        <Route
                            path='/sentence'
                            component={Sentence}
                        />
                        <Route
                            path='/author'
                            component={Author}
                        />
                        <Route
                            path='/book-uazdao'
                            component={BookUazdao}
                        />
                        <Route
                            path='/book-multiverse'
                            component={BookMultiverse}
                        />
                        <Route
                            path='/book-mizantrop'
                            component={BookMizantrop}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Main>
                <Footer />
            </Router>
        </Context>
    );
}

export default App;
