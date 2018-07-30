import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import page from './Page.css';

// import Navigation from '../../components/Section/Navigation/Checkout';
// import Description from '../../components/Section/Description/Section';
// import Discounts from '../../components/Section/Discounts/Section';
// import Payments from './Section/Payment/Section';
// import Forms from './Section/Forms/Section';


class Page extends React.Component {


render() {
return (


<div className={page.Page}>


  {/* <Navigation />
  <Description />
  <Discounts />
  <Payments />
  <Forms /> */}


</div>


); } }


export default withStyles(page)(Page);