import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/styles.css';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);
