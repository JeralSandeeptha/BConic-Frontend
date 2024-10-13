import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import TokenProvider from './context/TokenContext';
import IdProvider from './context/UserIdContext';
import RoleProvider from './context/RoleContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <TokenProvider>
    <IdProvider>
      <RoleProvider>
        <App />
      </RoleProvider>
    </IdProvider>
  </TokenProvider>
);

