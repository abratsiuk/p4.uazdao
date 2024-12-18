import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Welcome } from './pages/Welcome';
import { Home } from './pages/Home';
import { Sentence } from './pages/Sentence';
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
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
