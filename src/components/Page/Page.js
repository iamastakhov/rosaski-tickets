import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import page from './Page.css';


class Page extends React.Component {


  static propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  };


render() {


const { title, html } = this.props;


return (


<div className={page.Page}>
<div className={page.Content}>
 

  <h1>
    {title}
  </h1>
  

  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: html }}
  />
  

</div>
</div>


); } }


export default withStyles(page)(Page);
