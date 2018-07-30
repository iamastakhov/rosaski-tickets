import React from 'react';

import { FaHome } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>


<div className={block.Content}>


  <a 
    className={block.Button}
    href="https://www.rosaski.com"
  >
    <FaHome className={cx(block.Glyph, block.Left)} />
    <h5 className={block.Title}>
      Сайт «Роза Хутор»
    </h5>
  </a>


</div>


</div>


); } }


export default withStyles(block)(Block);