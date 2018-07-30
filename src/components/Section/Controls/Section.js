import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import Controls from './Block/Controls/Block';
import Scroll from './Block/Scroll/Block';


class Section extends React.Component {


render() {
return (


<nav className={section.Section} id="controls">


<div className={section.Content}>
<div className={section.Left}>


  <Controls />


</div>
<div className={section.Right}>


  <Scroll />


</div>
<div className={section.Both} />
</div>


</nav>


); } }


export default withStyles(section)(Section);
