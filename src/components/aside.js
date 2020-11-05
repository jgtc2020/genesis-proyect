import React from 'react';
import '../css/aside.css';
import {AnimatePresence, motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const Aside = ()=>{
  return(
    <div class="card-aside-left">
      <Link to="/card">
      <h1 class="item-aside-left icon-item-aside-left-active"><i class="icon-item-aside-left fas fa-home"></i>Inicio</h1>
      </Link>
    <h1 class="item-aside-left"><i class="icon-item-aside-left fas fa-home"></i>Explorar</h1>
      <h1 class="item-aside-left icon-notification-click"><i class="icon-item-aside-left fas fa-home"></i>Notificaciones</h1>
        <h1 class="item-aside-left"><i class="icon-item-aside-left fas fa-home"></i>Mensajes</h1>
          <h1 class="item-aside-left"><i class="icon-item-aside-left fas fa-home"></i>Guardados</h1>
            <h1 class="item-aside-left"><i class="icon-item-aside-left fas fa-home"></i>Empresas</h1>
      <button type="button" class="btn-card-aside-left"><i class="icon-camera fas fa-camera"></i>Subir foto</button>
    </div>
  );
};

export default Aside;
