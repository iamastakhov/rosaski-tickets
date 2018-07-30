import React from 'react';

import { FaSort, FaRouble } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from '../../Block.css';

import Image from './Image.jpg';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>


<div className={cx(block.Content, block.Left)}>


<div className={block.Media}>


  <img className={block.Image} src={Image} />


</div>


</div>
<div className={cx(block.Content, block.Right)}>


<div className={block.Description}>


  <h3 className={block.Title}>
  <a href="">
    Улётное Приключение
  </a>
  </h3>

  <h4 className={block.Text}>
    Данный план позволяет воспользоваться канатными дорогами «Олимпия», «Заповедный Лес», «Кавказский Экспресс», «Волчья Скала», «Эдельвейс», а так же скидками на полет на пароплане 
    и меню ресторана «Лес».
  </h4>


</div>


<div className={block.Divider}>


  <hr className={block.Line} />


</div>


<ul className={block.List}>


  <li className={block.Item}>
    <h5 className={block.Title}>
      Прогулка «Путь к вершинам + Парк водопадов»
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Посещение парка водопадов «Менделиха»
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Скандинавская ходьба
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Экскурсия «Взгляд изнутри» 
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Мастер-классы в творческой мастерской «Олгиз» 
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Мастер-класс в горной мыловарне
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Обед в бар-буфете «Берлога»
    </h5>
  </li>

  <li className={block.Item}>
    <h5 className={block.Title}>
      Дегустация напитков
    </h5>
  </li>


</ul>


<div className={block.Divider}>


  <hr className={block.Line} />


</div>


<div className={block.Buy}>
<div className={block.Left}>


<div className={cx(block.Button, block.Highlight)}>
  <h5 className={block.Label}>
    Возраст
  </h5>
  <h5 className={block.Title}>
    06 — 12
  </h5>
  <FaSort className={cx(block.Glyph, block.Right)} />
</div>

<div className={cx(block.Button, block.Highlight)}>
  <h5 className={block.Label}>
    Количество
  </h5>
  <h5 className={block.Title}>
    04
  </h5>
  <FaSort className={cx(block.Glyph, block.Right)} />
</div>


</div>
<div className={block.Right}>


<div className={cx(block.Button, block. Highlight)}>
  <h5 className={block.Title}>
    Добавить к Заказу
  </h5>
  <h5 className={block.Title}>
    984
  </h5>
  <FaRouble className={cx(block.Glyph, block.Currency)} />
</div>


</div>
<div className={block.Both} />
</div>


</div>
<div className={block.Both} />


</div>


); } }


export default withStyles(block)(Block);