import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import Site from './Block/Site/Block';
import Services from './Block/Services/Block';


class Section extends React.Component {


render() {
return (


<nav className={section.Section} id="navigation">


<div className={section.Content}>
<div className={section.Left}>


  <Site/>


</div>
<div className={section.Center}>
</div>
<div className={section.Right}>


  <Services/>
  

</div>
<div className={section.Both} />


</div>


</nav>


); } }


export default withStyles(section)(Section);
