import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Add your client id at given place in the code below
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="add your client id here">
    <App />
  </GoogleOAuthProvider>
);
