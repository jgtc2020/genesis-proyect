import React from 'react';
import '../css/asideright.css';
import {AnimatePresence, motion} from 'framer-motion';

const AsideRight = ()=>{
  return(
    <div class="card-aside-right">
                <h1 class="title-card-aside-right">Filtros de busqueda</h1>
                <h3 class="item-dropdown-card-aside-right item-filter-1">Marca <i class="icon-dropdown fas fa-chevron-down"></i></h3>
                <div class="content-filter-1">
                <h1 class="p">Zara</h1>
                <h1 class="p">Tommy</h1>
                <h1 class="p">Luis Button</h1>
                </div>
                <h3 class="item-dropdown-card-aside-right item-filter-2">Precio <i class="icon-dropdown fas fa-chevron-down"></i></h3>
                <div class="content-filter-2">
                <h1 class="p">Zara</h1>
                <h1 class="p">Tommy</h1>
                <h1 class="p">Luis Button</h1>
                </div>
                <h3 class="item-dropdown-card-aside-right item-filter-3">Categoría <i class="icon-dropdown fas fa-chevron-down"></i></h3>
                <div class="content-filter-3">
                <h1 class="p">Zara</h1>
                <h1 class="p">Tommy</h1>
                <h1 class="p">Luis Button</h1>
                </div>
                <h3 class="item-dropdown-card-aside-right item-filter-4">Tamaño <i class="icon-dropdown fas fa-chevron-down"></i></h3>
                <div class="content-filter-4">
                <h1 class="p">Zara</h1>
                <h1 class="p">Tommy</h1>
                <h1 class="p">Luis Button</h1>
                </div>
                <h3 class="item-dropdown-card-aside-right item-filter-5">Género <i class="icon-dropdown fas fa-chevron-down"></i></h3>
                <div class="content-filter-5">
                <h1 class="p">Zara</h1>
                <h1 class="p">Tommy</h1>
                <h1 class="p">Luis Button</h1>
                </div>
              </div>
  );
};

export default AsideRight;
