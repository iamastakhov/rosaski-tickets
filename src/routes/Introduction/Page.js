import React from 'react';
import Sticky from 'react-stickynode';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import page from './Page.css';

import Navigation from '../../components/Section/Navigation/Introduction';
import Header from '../../components/Section/Header/Section';
import Controls from '../../components/Section/Controls/Section';
import Secondary from '../../components/Section/Secondary/Section';
import Features from '../../components/Section/Features/Section';
import Packages from '../../components/Section/Packages/Section';
import Plans from '../../components/Section/Plans/Section';
// import Maps from '../../components/Section/Maps/Section';

// import Reviews from '../../components/Section/Reviews/Section';
// import Contacts from '../../components/Section/Contacts/Section';
// import Networks from '../../components/Section/Networks/Section';
// import Copyright from '../../components/Site/Copyright/Section';


class Page extends React.Component {


render() {
return (


<div className={page.Page}>


  <Navigation />
  <Header />
  <Controls />
  <Features />


<Sticky innerZ={100}>


  <Secondary />


</Sticky>


  <Packages />
  <Plans />

{/* 

  <Maps />
  <Reviews />
  <Contacts />
  <Networks />
  <Copyright /> 

*/}


</div>


); } }


export default withStyles(page)(Page);