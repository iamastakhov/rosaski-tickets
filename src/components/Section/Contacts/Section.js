import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Messengers from './Block/Messengers/Block';
import Telephones from './Block/Telephones/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="contacts">
<div className={s.Container}>


  <Messengers/>
  <Telephones/>


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
