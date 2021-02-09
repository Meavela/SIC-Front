import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from "./components/navbar-component";
import Result from './components/result';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/login';

const routing = (
  <Router>
    <Suspense fallback={
      <div>

      </div>
    }>
      <div>
        <NavbarComponent />
        <Route exact path="/" component={Result} />
        <Route exact path="/login" component={Login} />
      </div>
    </Suspense>
  </Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
