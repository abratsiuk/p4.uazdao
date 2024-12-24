import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/_typography.css';
import './styles/_debug.css';
import './styles/main.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/welcome.css';
import './styles/home.css';
import './styles/sentence.css';
import './styles/author.css';
import './styles/book.css';
import './styles/goodgrem.css';
import './styles/parts.css';
import './styles/arrow.css';

import App from './components/App';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
