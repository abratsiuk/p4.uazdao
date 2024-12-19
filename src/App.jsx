import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { Sentence } from './pages/Sentence';
import './App.css';
import { NotFound } from './pages/NotFound';
import { Author } from './pages/Author';
import { Book } from './pages/Book';
import { GoodGrem } from './pages/GoodGrem';
import { Parts } from './pages/Parts';
import { Context } from './component/Context';

function App() {
    return (
        <Context>
            <Router>
                <Header />
                <main className='main'>
                    <Switch>
                        <Route
                            exact
                            path='/'
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
                            path='/book'
                            component={Book}
                        />
                        <Route
                            path='/goodgrem'
                            component={GoodGrem}
                        />
                        <Route
                            path='/parts'
                            component={Parts}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </Context>
    );
}

export default App;
