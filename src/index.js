import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { Reader } from 'components/Reader/Reader';
import './index.css';
import publication from './publication.json';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Reader items={publication} />
  </React.StrictMode>
);
