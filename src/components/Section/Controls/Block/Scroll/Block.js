import React from 'react';
import Scrollchor from 'react-scrollchor';

import { FaEye } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>


<div className={block.Content}>


  <Scrollchor 
    className={block.Button}
    to="secondary" 
  >
    <h5 className={block.Title}>
      Смотреть Тарифы
    </h5>
    <FaEye className={cx(block.Glyph, block.Right)} />
  </Scrollchor>


</div>


</div>


); } }


export default withStyles(block)(Block);
