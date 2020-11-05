import React from 'react';
import '../css/header.css';
import joseImg from '../images/jose.png';
import headerImg from '../images/ropa.png';
import {AnimatePresence, motion} from 'framer-motion';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Header = ()=>{

  return(
    <header class="header headroom headroom headroom--pinned headroom headroom--unpinned" id="header">
      <div class="container-fluid container nav-header-general">
        <div class="row">
          <div class="col-3 col-md-3 col-lg-2 col-xl-3 logo-header">
            <h1 class="logo-header-title">Genesis</h1>
          </div>
          <div class="col-md-8 col-lg-7 col-xl-6 nav-header">
            <div class="l">
            <a href=""><button type="button" class="tu"><i class="fas fa-search"></i></button></a>
            </div>
            <input type="text" class="search-input" placeholder="Bucar productos, marcas y más" />
            <div class="dropdown-menu-input">
              <h1 class="title-real-time-search"></h1>
              <h1 class="title-dropdown-menu-input">Busquedas recientes</h1>
                <li class="dropdown-item-menu-input"><i class="icon-dropdown-menu-input fas fa-search"></i>Cartera</li>
                <hr></hr>
                <li class="dropdown-item-menu-input"><i class="icon-dropdown-menu-input fas fa-search"></i>Zapatos</li>
                <hr></hr>
                <li class="dropdown-item-menu-input"><i class="icon-dropdown-menu-input fas fa-search"></i>Jean</li>
                <hr></hr>
                <li class="dropdown-item-menu-input"><i class="icon-dropdown-menu-input fas fa-search"></i>Legin</li>
                <hr></hr>
                <li class="dropdown-item-menu-input"><i class="icon-dropdown-menu-input fas fa-search"></i>Remeras</li>
            </div>
            <div class="group-grid-nav-header">
            <Link to="/"><h1 class="nav-item"><button class="general-img-icon general-img-icon category_item ct_item-active" category="item-1"><img class="img-hd" src={require('../images/ropa.png')}/></button>Tendencias</h1></Link>
            <Link to="/casual"><h1 class="nav-item"><button class="general-img-icon-2 general-img-icon category_item" category="item-2"><img class="img-hd" src={require('../images/lip.png')}/></button>Casual</h1></Link>
            <Link to="/party"><a class="" category="item-3"><h1 class="nav-item"><button class="general-img-icon-3 general-img-icon category_item" category="item-3"><img class="img-hd" src={require('../images/shoes.png')}/></button>Fiesta</h1></a></Link>
            <a class="" category="item-4"><h1 class="nav-item"><button class="general-img-icon-4 general-img-icon category_item" category="item-4"><img class="img-hd" src={require('../images/bra.png')}/></button>Deportivo</h1></a>
            </div>
          </div>
          <div class="col-9 col-md-4 col-lg-3 col-xl-3 profile-notifications-header-nav">
            <div class="profile-header" id="profile-header">
            </div>
            <h1 class="title-profile-header">José Torres <i class="icon-dropdown-header fas fa-chevron-down"></i></h1>
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="icon-cart bi bi-cart3" id="cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            <h1 class="title-cart-indicator">0</h1>
            <i class="icon-notification icon-notification-click far fa-bell"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
