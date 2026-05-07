import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 96557147819-20rrnei10kgrc54jie7h8s5c6tiviqh6.apps.googleusercontent.com
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="96557147819-20rrnei10kgrc54jie7h8s5c6tiviqh6.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
