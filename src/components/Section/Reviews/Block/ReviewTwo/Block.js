import React from 'react';

import { FaInstagram } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';

import AvatarImageUrl from './Avatar.png';
import MediaImageUrl from './Image.jpg';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


<div className={block.Meta}>


<div className={block.Left}>


  <a className={block.Button} href="">

    <img className={cx(block.Avatar, block.Left)} src={AvatarImageUrl} />
 
    <h5 className={block.Label}>

      Инна Петрова
    
    </h5>

  </a>


</div>
<div className={block.Right}>


  <a className={cx(block.Button, block.Highlight)} href="">

    <h6 className={block.Title}>

      5 Сентября

    </h6>

    <FaInstagram className={cx(block.Glyph, block.Right)} />

  </a>


</div>


<div className={block.Both} />
</div>


<div className={block.Divider}>


<hr className={block.Line} />


</div>


<div className={block.Description}> 


  <h5 className={block.Text}>
    Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.
  </h5>


</div>


<div className={block.Media}>


<img className={block.Image} src={MediaImageUrl} />


</div>


</div>


<div className={cx(block.Background, block.Color)} />


</div>


); } }


export default withStyles(block)(Block);