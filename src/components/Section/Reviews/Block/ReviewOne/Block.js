import React from 'react';

import { FaFacebook, FaPlay, FaVolumeOff, FaHeart, FaEye, FaComment, FaShareAlt } from 'react-icons/lib/fa';

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

      Иван Васильев
    
    </h5>

  </a>


</div>
<div className={block.Right}>


  <a className={cx(block.Button, block.Highlight)} href="">

    <h6 className={block.Title}>

      21 Августа

    </h6>

    <FaFacebook className={cx(block.Glyph, block.Right)} />

  </a>


</div>


<div className={block.Both} />
</div>


<div className={block.Divider}>


<hr className={block.Line} />


</div>


<div className={block.Description}> 


  <h5 className={block.Text}>
  Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
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