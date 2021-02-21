import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import About from '../containers/About';
import Users from '../containers/Users';
import { IUser } from '../models/user.model'
import Home from '../containers/Home';


function MainContainer() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users firstName="Jose" lastName="Travassos" email="jose@jose.ca" />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}



export default MainContainer;
