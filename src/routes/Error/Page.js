import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import page from './Page.css';


class Page extends React.Component {


  static propTypes = {

    error: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    }),

  };


  static defaultProps = {

    error: null,

  };


render() { if (__DEV__ && this.props.error) {
return (


<div className={page.Page}>


  <h2 className={page.Title}>
    {this.props.error.name}
  </h2>

  <pre className={page.Text}>
    {this.props.error.stack}
  </pre>


</div>


); }


return (


<div className={page.Page}>


  <h2 className={page.Title}>
    Error
  </h2>

  <p className={page.Text}>
    Sorry, a critical error occurred on this page.
  </p>


</div>


); } }


export { Error as ErrorWithoutStyle };
export default withStyles(page)(Page);
