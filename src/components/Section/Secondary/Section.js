import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import AnchorsOne from './Block/AnchorsOne/Block';
import AnchorsTwo from './Block/AnchorsTwo/Block';
import Checkout from './Block/Checkout/Block';


class Section extends React.Component {


render() {
return (


<nav className={section.Section} id="secondary">


<div className={section.Content}>
<div className={section.Left}>


  <AnchorsOne/>


</div>
<div className={section.Center}>


  <Checkout/>


</div>
<div className={section.Right}>


  <AnchorsTwo/>


</div>
<div className={section.Both} />


</div>


<div className={cx(section.Background, section.Color)} />
<div className={cx(section.Background, section.Shadow)} />


</nav>


); } }


export default withStyles(section)(Section);
