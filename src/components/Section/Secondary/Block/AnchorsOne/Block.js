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
    to="packages"
  >
    <h6 className={block.Title}>
      Приключения
    </h6>
  </Scrollchor>

  <Scrollchor 
    className={block.Button}
    to="plans"
  >
    <h6 className={block.Title}>
      Маршруты
    </h6>
  </Scrollchor>


</div>


</div>


); } }


export default withStyles(block)(Block);
