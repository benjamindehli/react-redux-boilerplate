// Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';

// Template
import Container from 'components/template/Container';


class Home extends Component {
  render() {
    return (<Container>
      <h1>Home</h1>
    </Container>)
  }
}

export default connect(null, null)(Home);
