import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Detail from '../containers/Detail';
import Home from '../containers/Home';
import Users from '../containers/Users';
import TopNavbar from '../components/TopNavbar';
import HeroImage from '../components/HeroImage';
import OutterSection from '../components/OutterSection';


function MainContainer() {
    return (
        <Router>
            <TopNavbar>
                <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
            </TopNavbar>
            <HeroImage />
            <Route
                render={({ location }) => (
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Switch key={location.pathname}>
                            <Route path="/detail/:id">
                                <Detail />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </AnimatePresence>)}
            />
        </Router>

    );
}



export default MainContainer;
