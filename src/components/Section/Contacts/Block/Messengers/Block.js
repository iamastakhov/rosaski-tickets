import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';


import { FaPhone, FaPaperPlaneO, FaWhatsapp, FaSkype } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Container}>


  <h4 className={block.Title}>
    Мессенджеры
  </h4>


  <hr className={block.Divider} />


  <div className={block.List}>

  <a className={block.Item}
    href="" 
  >
    <FaPaperPlaneO className={block.Glyph} />
    <h6 className={block.Title}>
      Rosa Khutor
    </h6>
    <h6 className={block.Label}>
      Telegram
    </h6>
  </a>

  <a className={block.Item}
    href="" 
  >
    <FaWhatsapp className={block.Glyph} />
    <h6 className={block.Title}>
      Rosa Khutor
    </h6>
    <h6 className={block.Label}>
      WhatsApp
    </h6>
  </a>

  </div>


<div className={cx(block.Background, block.Color)} />


</div>


</div>


);
}
}


export default withStyles(block)(Block);
