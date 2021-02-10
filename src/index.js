import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterNav from './components/router'

ReactDOM.render(
  <RouterNav/>,
  document.getElementById('root')
);

