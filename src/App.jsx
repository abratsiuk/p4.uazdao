import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { Sentence } from './pages/Sentence';
import './App.css';
import { NotFound } from './pages/NotFound';

function App() {
    return (
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
                    />{' '}
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
