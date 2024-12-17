import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <main className='main'>
                <Switch>
                    <Route
                        exact
                        path='/'
                    >
                        <Welcome />
                    </Route>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
