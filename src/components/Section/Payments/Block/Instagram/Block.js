import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaCcMastercard } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <a href="/">
  <FaCcMastercard className={cx(s.Icon, s.Active)} />
  </a>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
