import React from 'react';

import { FaLongArrowLeft } from 'react-icons/lib/fa';

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
    href="/"
  >
  <FaLongArrowLeft className={cx(block.Glyph, block.Left)} />
  <h5 className={block.Title}>
    Вернуться на Сайт
  </h5>
  </a>


</div>
</div>


); } }


export default withStyles(block)(Block);