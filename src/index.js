import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-aegjeldcyzfljbei.us.auth0.com"
    clientId="RXPndnAwu2LqPZIoyJOYj004os84FTvf"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
    
 
 , document.getElementById('root')
);