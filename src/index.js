import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './styled/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
