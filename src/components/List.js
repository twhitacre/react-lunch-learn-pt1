import React, { Component } from 'react';
import { AppConsumer } from '../contexts/AppContext';

class List extends Component {
  showWhiskies = list => list.map((item, i) => <li key={i}>{item.name}</li>);

  render() {
    return (
      <AppConsumer>
        {({ list }) => <div>{this.showWhiskies(list)}</div>}
      </AppConsumer>
    );
  }
}

export default List;
