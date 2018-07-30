import React from 'react';

import { FaTwitter } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';

import AvatarImageUrl from './Image.jpg';
import MediaImageUrl from './Image.jpg';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


<div className={block.Meta}>


<div className={block.Left}>


  <a className={block.Button} href="">
 
    <h5 className={block.Label}>

      Ян Дружный
    
    </h5>

  </a>


</div>
<div className={block.Right}>


  <a className={cx(block.Button, block.Highlight)} href="">

    <h6 className={block.Title}>

      24 Октября

    </h6>

    <FaTwitter className={cx(block.Glyph, block.Right)} />

  </a>


</div>


<div className={block.Both} />
</div>


<div className={block.Divider}>


<hr className={block.Line} />


</div>


<div className={block.Description}> 


  <h5 className={block.Text}>
  Также все другие известные генераторы Lorem Ipsum используют один и тот же текст, который они просто повторяют, пока не достигнут нужный объём. Это делает предлагаемый здесь генератор единственным настоящим Lorem Ipsum генератором. Он использует словарь из более чем 200 латинских слов, а также набор моделей предложений. В результате сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет повторяющихся абзацей или "невозможных" слов.
  </h5>


</div>


</div>


<div className={cx(block.Background, block.Color)} />


</div>


); } }


export default withStyles(block)(Block);