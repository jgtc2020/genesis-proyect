import React from 'react';
import '../css/casual.css';
import {AnimatePresence, motion} from 'framer-motion';
import Card from '../components/card';
import Loader from '../components/loader';
import img from '../images/img2.jpg';

const Casual = ()=>{
  return(
    <React.Fragment>
    <motion.div
     initial={{opacity: 0}}
     exit={{opacity: 0}}
     animate={{opacity: 1}}>
     <div class="container">
       <div class="row">
         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>

         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>

         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>

         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>

         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>

         <div class="col-12 col-md-6 col-lg-6 col-xl-4">
         <Card img={img} title="Casual" price="$30.7"/>
         </div>
       </div>
     </div>
    </motion.div>
    </React.Fragment>
  );
};

export default Casual;
