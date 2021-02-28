import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
                    <Link to="/">Home</Link>&nbsp;-&nbsp;<Link to="/about">About</Link>
                </TopNavbar>
                <HeroImage />
                <Switch>
                    <Route path="/">
                        <OutterSection>
                            <Home />
                        </OutterSection>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>

            </div>
        </Router>

    );
}



export default MainContainer;
