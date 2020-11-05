import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../pages/home';
import Page from '../pages/page';

const App = () => {
  //Holaaaaa
  return(
    <Router>
    <AnimatePresence>
    <Switch>
    <Route path="/" exact>
    <Home />
    </Route>
    <Route path="/card" exact>
    <Page />
    </Route>
    <Route path="/casual" exact>
    <Home />
    </Route>
    <Route path="/party" exact>
    <Home />
    </Route>
    </Switch>
    </AnimatePresence>
    </Router>
  )
};

export default App;
