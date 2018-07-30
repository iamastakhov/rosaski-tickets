import React from 'react';
import PropTypes from 'prop-types';
import { Provider as ReduxProvider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';


const ContextType = {

  insertCss: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object,
  ...ReduxProvider.childContextTypes,
  client: PropTypes.object.isRequired,

};


class App extends React.PureComponent {


static propTypes = {

  context: PropTypes.shape(ContextType).isRequired,
  children: PropTypes.element.isRequired,

};

static childContextTypes = ContextType;


getChildContext() {
  
return this.props.context;

}


render() { 
const { client } = this.props.context;
return (


<ApolloProvider client={client}>


  {this.props.children}


</ApolloProvider>


); } }


export default App;
