import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import Legals from './Block/Legals/Block';
import Copyright from './Block/Copyright/Block';


class Section extends React.Component {


render() {
return (


<nav className={section.Section} id="secondary">
<div className={section.Content}>
<div className={section.Left}>


  <Legals />


</div>
<div className={section.Right}>


  <Copyright />



</div>
<div className={section.Both} />
</div>


<div className={cx(section.Background, section.Color)} />


</nav>


); } }


export default withStyles(section)(Section);
