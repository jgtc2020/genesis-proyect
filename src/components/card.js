import React from 'react';
import '../css/card.css';
import {AnimatePresence, motion} from 'framer-motion';

const Card = ({img, title, price})=>{
  return(
                    <div class="card-1-content-center">
                      <img class="img-card-1-content-center img" src={img}/>
                      <h1 class="title-id-card-1-content-center middle">{title}</h1>
                      <h1 class="title-price-card-1-content-center price">{price}</h1>
                      <button type="button" class="btn-card-content-center btn-shop-cart"><i class="icon-cart-content-center fas fa-shopping-cart"></i>Añadir<i class="icon-btn-card-content-center fas fa-angle-right"></i></button>
                    </div>          
  );
};

export default Card;
