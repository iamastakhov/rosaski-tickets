import React from 'react';

import Layout from '../../components/Layout';
import Page from './Page';


const title = 'Introduction';


function action() {
return {


  chunks: ['introduction'],
  title,
  component: (


<Layout>


  <Page title={title} />


</Layout>


), }; }


export default action;
