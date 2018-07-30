import React from 'react';

import { FaSort, FaRouble } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


<div className={block.Description}>

  <h4 className={block.Title}>
  <a href="">
    День Открытий
  </a>
  </h4>

  <h5 className={block.Text}>
    Неограниченное пользование канатными дорогами: «Олимпия», «Заповедный лес», «Кавказский экспресс», «Волчья скала», «Эдельвейс», «Крокус» 
    в течение 1 дня.
  </h5>

</div>


<div className={block.Divider}>

  <hr className={block.Line} />

</div>


<ul className={block.List}>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Роза Долина
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Роза Стадион
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Роза Плато
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Роза 1600
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    «Беседка»
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    «Йети парк»
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Роза Пик
  </h5>
  </li>

  <li className={block.Item}>
  <h5 className={block.Title}>
    Каменный Столб
  </h5>
  </li>

</ul>


<div className={block.Divider}>

  <hr className={block.Line} />

</div>


<div className={block.Option}>
<div className={block.Left}>

  <div className={block.Button}>
  <h5 className={block.Label}>
    Возраст
  </h5>
  </div>

</div>
<div className={block.Right}>

  <div className={cx(block.Button, block.Highlight)}>
  <h5 className={block.Title}>
    06 — 12
  </h5>
  <FaSort className={cx(block.Glyph, block.Right)} />
  </div>

</div>
<div className={block.Both} />
</div>


<div className={block.Divider}>

  <hr className={block.Line} />

</div>



<div className={block.Count}>
<div className={block.Left}>

  <div className={block.Button}>
  <h5 className={block.Label}>
    Количество
  </h5>
  </div>

</div>
<div className={block.Right}>

  <div className={cx(block.Button, block.Highlight)}>
  <h5 className={block.Title}>
    04
  </h5>
  <FaSort className={cx(block.Glyph, block.Right)} />
  </div>

</div>
<div className={block.Both} />
</div>


<div className={block.Divider}>

<hr className={block.Line} />

</div>


<div className={block.Buy}>
<div className={block.Left}>

  <div className={cx(block.Button, block. Highlight)}>
  <h5 className={block.Title}>
    Добавить к Заказу
  </h5>
  </div>

</div>
<div className={block.Right}>

  <div className={cx(block.Button, block.Highlight)}>
  <h5 className={block.Title}>
    984
  </h5>
  <FaRouble className={cx(block.Glyph, block.Right)} />
  </div>

</div>
<div className={block.Both} />
</div>


</div>


<div className={cx(block.Background, block.Color)} />


</div>


); } }


export default withStyles(block)(Block);