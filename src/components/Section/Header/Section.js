import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import Description from './Block/Description/Block';

import Overlay from './Overlay.gif';
import Image from './Image.jpg';


class Section extends React.Component {


render() {
return (


<div className={section.Section} id="header" >


<div className={section.Content}>


  <Description />


</div>


<img className={cx(section.Background, section.Overlay)} src={Overlay} />
<img className={cx(section.Background, section.Image)} src={Image} />
<div className={cx(section.Background, section.Gradient)} />


</div>


); } }


export default withStyles(section)(Section);