import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './utils/hooks/useAuth';
import { AppStoreProvider } from './utils/contexts/AppStoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<BrowserRouter>
    <AppStoreProvider>
      <AuthProvider>
        <App />
      </AuthProvider>    
    </AppStoreProvider>
  </BrowserRouter>
);

reportWebVitals();
