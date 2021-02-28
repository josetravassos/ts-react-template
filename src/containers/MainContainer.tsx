import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import About from '../containers/About';
import Home from '../containers/Home';
import TopNavbar from '../components/TopNavbar';
import HeroImage from '../components/HeroImage';
import OutterSection from '../components/OutterSection';


function MainContainer() {
    return (
        <Router>
            <div>
                <TopNavbar>
                    <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                    <NavLink activeClassName='is-active' to='/about'>About</NavLink>
                </TopNavbar>
                <HeroImage />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <OutterSection>
                            <Home />
                        </OutterSection>
                    </Route>
                </Switch>

            </div>
        </Router>

    );
}



export default MainContainer;
