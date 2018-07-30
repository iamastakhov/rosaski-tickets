import React from 'react';

import { FaCopyright } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


  <div 
    className={block.Button}
  >
  <h6 className={block.Label}>
    Все права защищены, «Роза Хутор»
  </h6>
  <FaCopyright className={cx(block.Glyph, block.Center)} />
  <span className={block.Label}>
    2010 – 2018
  </span>
  </div>


</div>
</div>


); } }


export default withStyles(block)(Block);
