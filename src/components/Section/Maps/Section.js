import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import section from './Section.css';


import BackgroundImage from './Background.png';


class Section extends React.Component {


render() {
return (
  
  
<div className={section.Section} id="services" >
<div className={section.Content}>


</div>
  

<img className={cx(section.Background, section.Image)} src={BackgroundImage} />
<div className={cx(section.Background, section.Gradient)} />

  
</div>
  
  
); } }
  
  
export default withStyles(section)(Section);