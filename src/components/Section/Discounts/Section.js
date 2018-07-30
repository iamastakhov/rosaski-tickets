import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Code from './Block/Code/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="mail">
<div className={s.Container}>


  <Code />


</div>


</div>


);
}
}


export default withStyles(s)(Section);
