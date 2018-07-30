import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


import { FaRouble } from 'react-icons/lib/fa';
import Link from '../../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


  <h3 className={block.Title}>
    Master Card
  </h3>


  <hr className={block.Divider} />


  <form className={block.Form}>

  <input 
    className={block.Input} 
    type="text" 
    placeholder="Имя на Карте" 
  />
  
  <input 
    className={block.Input} 
    type="text" 
    placeholder="Номер Карты «0000 0000 0000 0000»" 
  />
  
  <input 
    className={block.Input} 
    type="text" 
    placeholder="СVV или CVC «000»" 
  />

  <input 
    className={block.Input} 
    type="text" 
    placeholder="Дата Истечения «ГГ / ММ»" 
  />

  </form>


  <div className={block.Meta}>

    <Link className={cx(block.Button, block.Highlight)} to="/contact">
    <h4 className={block.Title}>
      Оплатить Билеты
    </h4>
    </Link>

  </div>

</div>
</div>


);
}
}


export default withStyles(block)(Block);
