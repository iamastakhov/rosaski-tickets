import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import button from './Button.css';

import Link from '../../../../Link';
import history from '../../../../../history';


class Button extends Component {

  
constructor(props) {
  super(props);
  this.state = { isActive: false, };
}


componentDidMount() {
  this.onPath();
}


componentWillReceiveProps() {
  this.onPath();
}


onPath() {
  if (history.location.pathname.endsWith(this.props.to)) {
  this.setState({ isActive: 'Active' });
  } else {
  this.setState({ isActive: false });
  } 
}


render() {
return (


<Link 
  className={cx(button.Button, this.state.isActive && button.Active)}
  to={this.props.to} 
>
<h6 className={button.Title}>
  {this.props.title}
</h6>
</Link>


); } }


Button.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};


export default withStyles(button)(Button);