import React from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';

import Button from './Button';


class Block extends React.Component {

  
render() {
return (


<div className={block.Block}>
<div className={block.Content}>


  <Button 
    title="Правила Использования" 
    to="/legals/terms-of-service"
  />
 
  <Button 
    title="Политика Конфиденциальности" 
    to="/legals/privacy-policy"
  />


</div>
</div>


); } }


export default withStyles(block)(Block);
