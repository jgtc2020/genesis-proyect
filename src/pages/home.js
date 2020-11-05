import React from 'react';
import '../css/home.css';
import Header from '../components/header';
import Aside from '../components/aside';
import AsideRight from '../components/asideright';
import Card from '../components/card';
import Tendencias from '../components/tendencias';
import Casual from '../components/casual';
import Party from '../components/party';
import Loader from '../components/loader';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

const Home = () =>{
  return(
    <React.Fragment>
    <Loader />
    <section className="container-fluid">
      <div className="row">
        <aside className="col-12 col-md-4 col-lg-3 col-xl-3 aside-left">
        <Aside />
        </aside>

        <div className="col-12 col-md-8 col-lg-6 col-xl-6 content-center">
        <Router>
        <Header />
        <Switch>
        <Route exact path="/">
        <Tendencias />
        </Route>
        <Route exact path="/casual">
        <Casual />
        </Route>
        <Route exact path="/party">
        <Party />
        </Route>
        </Switch>
        </Router>
        </div>

        <aside className="col-12 col-md-4 col-lg-3 col-xl-3 aside-right">
        <AsideRight />
        </aside>
      </div>
    </section>
    </React.Fragment>
  );
};

export default Home;
