import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#212121',
    grey: '#E7ECF2',
    textColor: '#4E5C6C',
    greyText: '#949494',
    acent: '#3498db',
    acent2: '#2980b9',
    acent3: '#F13906',
    error: '#E74C3C',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/gh-pages-react-hw-08-phonebook">
              <App />
            </BrowserRouter>
          </PersistGate>
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
