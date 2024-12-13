import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/_typography.css';
import './styles/welcome.css';
import './styles/_debug.css';
import './styles/header.css';
import './styles/footer.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
