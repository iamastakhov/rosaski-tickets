import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


  <h1 className={cx(block.Title, block.One)}>
    ПРОГУЛКИ 
  </h1>

  <h1 className={cx(block.Title, block.Two)}>
    <b>НА КАНАТНЫХ</b>
  </h1>

  <h1 className={cx(block.Title, block.Three)}>
    ДОРОГАХ
  </h1>


  <h4 className={block.Text}>
    Живописное путешествие на канатных дорогах
    <br />
    с осмотром впечатляющих высот, гор,
    <br />
    и экскурсией по прилегающим окрестностям
    <br />
    «Розы Хутор»
  </h4>


</div>
</div>


); } }


export default withStyles(block)(Block);
