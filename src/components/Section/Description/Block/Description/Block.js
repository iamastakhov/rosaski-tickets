import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import block from './Block.css';


import Link from '../../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={block.Block}>
<div className={block.Content}>


  <h3 className={block.Title}>
    Вы выбрали 4 билета за <div className={block.Old}>5 678</div> 4 567 ₽
  </h3>


  <h4 className={block.Description}>
    После выбора метода оплаты и заполнения форм информации вы будете перенаправлены на сайт партнерской системы оплаты для получения чека.
  </h4>
  

</div>
</div>


);
}
}


export default withStyles(block)(Block);