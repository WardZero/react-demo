import { createRoot } from 'react-dom/client';
import './index.css';
import store from './app/store.jsx';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
  
)
