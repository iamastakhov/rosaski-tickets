import React from 'react';
import Scrollchor from 'react-scrollchor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {

  
render() {
return (


<div className={block.Block}>


<div className={block.Content}>


  <Scrollchor 
    className={block.Button}
    to="reviews"
  >
    <h6 className={block.Title}>
      Отзывы
    </h6>
  </Scrollchor>

  <Scrollchor 
    className={block.Button}
    to="features"
  >
    <h6 className={block.Title}>
      Особенности
    </h6>
  </Scrollchor>

  <Scrollchor 
    className={block.Button}
    to="contacts"
  >
    <h6 className={block.Title}>
      Контакты
    </h6>
  </Scrollchor>

</div>


</div>


); } }


export default withStyles(block)(Block);
