import React, { Component, Suspense, useState } from 'react'
import '../index.css';
import NavbarComponent from "./navbar-component";
import Questions from './list-question';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login';

const RouterNav = () => {

    const [username, setUsername] = useState();

    return (
        <Router>
            <NavbarComponent username={username} />
            <Suspense fallback={
                <div>

                </div>
            }>
                <div>
                    <Route exact path="/" component={Questions} />
                    <Route exact path="/login" component={() => <Login username={username} setUsername={setUsername} />} />
                </div>
            </Suspense>
        </Router>
    )
}

export default RouterNav;