import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/custom_scrollbar.css';
import { AppRoutes } from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppRoutes/>
    </React.StrictMode> 
);


