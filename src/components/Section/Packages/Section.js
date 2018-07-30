import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import section from './Section.css';

import PackageOne from './Block/PackageOne/Block';
import PackageTwo from './Block/PackageTwo/Block';


class Section extends React.Component {


render() {
return (
  
  
<div className={section.Section} id="packages" >


<div className={section.Content}>
  
  
    <PackageOne/>
    <PackageTwo/>


</div>
  
  
<div className={cx(section.Background, section.Color)} />
  
  
</div>
  
  
); } }
  
  
export default withStyles(section)(Section);