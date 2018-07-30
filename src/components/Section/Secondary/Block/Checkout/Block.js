import React from 'react';

import { FaRouble } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';

import Link from '../../../../Link';


class Block extends React.Component {

render() {
return (


<div className={block.Block}>


<div className={block.Content}>


  <Link 
    className={cx(block.Button, block.Highlight)}
    to="/checkout"
  >
    <h6 className={cx(block.Title, block.One)}>
      Купить
    </h6>
    <h5 className={cx(block.Title, block.Two)}>
      4 билета
    </h5>
    <h6 className={cx(block.Title, block.Three)}>
      за
    </h6>
    <h5 className={cx(block.Title, block.Four)}>
      4 567
    </h5>
    <FaRouble className={cx(block.Glyph, block.Right)} />
  </Link>


</div>


</div>


); } }


export default withStyles(block)(Block);