import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Loader from '../components/loader';

const Page = () => {
  return(
    <React.Fragment>
    <Loader />
    <h1>Hola</h1>
    </React.Fragment>
  )
};

export default Page;
