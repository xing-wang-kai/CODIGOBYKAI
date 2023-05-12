import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './component/header/header.component';
import Body from './component/body/body.component';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Body/>
  </React.StrictMode>
);
reportWebVitals();
