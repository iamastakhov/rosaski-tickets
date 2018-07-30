import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';

import Icon from './Icon.png';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>


<div className={cx(block.Column, block.One)}>
<div className={block.Icon}>


  <img className={block.Image} src={Icon} />


</div>
</div>


<div className={cx(block.Column, block.Two)}>
<div className={block.Content}>


<div className={block.Description}>


  <h4 className={block.Title}>
  <a href="">
    Увлекательные Маршруты
  </a>
  </h4>

  <h5 className={block.Text}>
    Cras ac ultricies nisl. Quisque lacus risus, lobortis tincidunt quam eget.
  </h5>


</div>


</div>
</div>


<div className={block.Both} />
</div>


); } }


export default withStyles(block)(Block);