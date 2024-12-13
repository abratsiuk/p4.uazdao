import { Welcome } from './pages/Welcome';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import './App.css';

function App() {
    const mode = 1;
    return mode === 2 ? (
        <Welcome />
    ) : (
        <div className='main'>
            <Header />
            <Footer />
        </div>
    );
}

export default App;
