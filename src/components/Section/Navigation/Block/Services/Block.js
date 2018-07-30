import React from 'react';

import { FaCaretDown } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>


<div className={block.Content}>


<div className={block.Menu}>
<div className={block.Header}>


  <div className={block.Button}>
    <h5 className={block.Title}>
      Другие Сервисы
    </h5>
    <FaCaretDown className={cx(block.Glyph, block.Right)} />
  </div>


</div>
<div className={block.Content}>


  <a 
    className={block.Button}
    href="www.rosaski.com"
  >
    <h6 className={block.Title}>
      Погода на Высоте
    </h6>
  </a>
 
  <a 
    className={block.Button}
    href="www.rosaski.com"
  >
    <h6 className={block.Title}>
      Трансфер
    </h6>
  </a>

  <a 
    className={block.Button}
    href="www.rosaski.com"
  >
    <h6 className={block.Title}>
      Оборудование
    </h6>
  </a>

</div>
</div>


</div>


</div>


); } }


export default withStyles(block)(Block);
