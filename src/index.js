import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
