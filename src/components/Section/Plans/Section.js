import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import PlanOne from './Block/PlanOne/Block';
import PlanTwo from './Block/PlanTwo/Block';
import PlanThree from './Block/PlanThree/Block';
import PlanFour from './Block/PlanFour/Block';


class Section extends React.Component {


render() {
return (


<div className={section.Section} id="plans">
<div className={section.Content}>


  <PlanOne/>
  <PlanTwo/>
  <PlanThree/>
  <PlanFour/>


</div>


<div className={cx(section.Background, section.Gradient)}/>


</div>


); } }


export default withStyles(section)(Section);