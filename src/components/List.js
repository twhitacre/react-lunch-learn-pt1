import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  showWhiskies = list => list.map((item, i) => <li key={i}>{item.name}</li>);

  render() {
    const { app } = this.props;
    return <div>{this.showWhiskies(app.list)}</div>;
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(List);
