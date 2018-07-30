import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Facebook from './Block/Facebook/Block';
import Flickr from './Block/Flickr/Block';
import Instagram from './Block/Instagram/Block';
import Youtube from './Block/Youtube/Block';
import Soundcloud from './Block/Soundcloud/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="social">
<div className={s.Container}>



  <Facebook />
  <Flickr />
  <Instagram />
  <Youtube />
  <Soundcloud />


</div>


</div>


);
}
}


export default withStyles(s)(Section);
