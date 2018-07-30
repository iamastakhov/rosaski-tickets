import React from 'react';

import Layout from '../../components/Layout';
import Page from './Page';


const title = 'Checkout';


function action() {
return {


  chunks: ['checkout'],
  title,
  component: (


<Layout>


  <Page title={title} />


</Layout>


), }; }


export default action;
