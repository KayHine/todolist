import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Column from './Column'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Column />,
  document.getElementById('root'));
registerServiceWorker();
