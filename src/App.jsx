import { Welcome } from './pages/Welcome';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Home } from './pages/Home';
import './App.css';

function App() {
    const mode = 1;
    return mode === 2 ? (
        <Welcome />
    ) : (
        <div className='main'>
            <Header />
            <Home />;
            <Footer />
        </div>
    );
}

export default App;
