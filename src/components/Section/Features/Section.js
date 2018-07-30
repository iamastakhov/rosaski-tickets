import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import section from './Section.css';

import FeatureOne from './Block/FeatureOne/Block';
import FeatureTwo from './Block/FeatureTwo/Block';
import FeatureThree from './Block/FeatureThree/Block';


class Section extends React.Component {


render() {
return (
  
  
<div className={section.Section} id="features" >
<div className={section.Content}>
  

    <FeatureOne/>
    <FeatureTwo/>
    <FeatureThree/>

  
</div>
  
  
<div className={cx(section.Background, section.Color)} />
  
  
</div>
  
  
); } }
  
  
export default withStyles(section)(Section);