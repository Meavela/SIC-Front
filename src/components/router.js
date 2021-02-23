import React, { Component, Suspense, useState } from 'react'
import '../index.css';
import NavbarComponent from "./navbar-component";
import Questions from './list-question';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './login';
import Admin from './admin';
import AdminUsers from './admin-users';
import AdminVotes from './admin-votes';

const RouterNav = () => {

    const [username, setUsername] = useState();
    const [questionID, setQuestionID] = useState(1);

    return (
        <Router>
            <NavbarComponent username={username} />
            <Suspense fallback={
                <div>
                    
                </div>
            }>
                <div>
                    <Route exact path="/login" component={() => <Login username={username} setUsername={setUsername} />}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route exact path="/admin/users" component={AdminUsers}/>
                    <Route exact path="/admin/votes" component={AdminVotes}/>
                    <Route exact path="/" component={() =>  <Questions username={username} questionID={questionID} setQuestionID={setQuestionID}/>} />
                </div>
            </Suspense>
        </Router>
    )
}

export default RouterNav;