import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from '../containers/About';
import Home from '../containers/Home';
import TopNavbar from '../components/TopNavbar';
import HeroImage from '../components/HeroImage';
import OutterSection from '../components/OutterSection';


function MainContainer() {
    return (
        <Router>
            <TopNavbar>
                <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
                <NavLink activeClassName='is-active' to='/about'>About</NavLink>
            </TopNavbar>
            <HeroImage />
            <Route
                render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch key={location.pathname}>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <OutterSection>
                                    <Home />
                                </OutterSection>
                            </Route>
                        </Switch>
                    </AnimatePresence>)}
            />
        </Router>

    );
}



export default MainContainer;
