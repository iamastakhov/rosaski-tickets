import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';


import { FaPhone, FaEnvelopeO } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Container}>


  <h4 className={block.Title}>
    Телефоны и Электронная Почта
  </h4>


  <hr className={block.Divider} />


  <ul className={block.List}>

  <a className={block.Item}
    href="" 
  >
    <FaPhone className={block.Glyph} />
    <h6 className={block.Title}>
      + 7 ( 964 ) 56 - 06 - 555
    </h6>
    <h6 className={block.Label}>
      Справочная Служба
    </h6>
  </a>

  <a className={block.Item}
    href="" 
  >
    <FaPhone className={block.Glyph} />
    <h6 className={block.Title}>
      + 7 ( 968 ) 63 - 43 - 710
    </h6>
    <h6 className={block.Label}>
      Техническая Поддержка
    </h6>
  </a>

  </ul>


  <hr className={block.Divider} />


<ul className={block.List}>

<a className={block.Item}
  href="" 
>
  <FaEnvelopeO className={block.Glyph} />
  <h6 className={block.Title}>
    review@rosaski.com
  </h6>
  <h6 className={block.Label}>
    Отзывы
  </h6>
</a>


</ul>



<div className={cx(block.Background, block.Color)} />


</div>
</div>


);
}
}


export default withStyles(block)(Block);
