import React from 'react';
import ReactDOM from 'react-dom/client';
// import ToggleColorMode from 'components/ToggleColorMode';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { StyledEngineProvider } from '@mui/material/styles';
//
import { Provider } from 'react-redux';
//
import { store } from './redux/store';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
