import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import section from './Section.css';

import ReviewOne from './Block/ReviewOne/Block';
import ReviewTwo from './Block/ReviewTwo/Block';
import ReviewThree from './Block/ReviewThree/Block';

class Section extends React.Component {


render() {
return (


<div className={section.Section} id="reviews" >
<div className={section.Content}>


  <ReviewOne />
  <ReviewThree />
  <ReviewTwo />


</div>


<div className={cx(section.Background, section.Gradient)} />


</div>


); } }


export default withStyles(section)(Section);