import React, { Component } from 'react';

class List extends Component {
  showWhiskies(list) {
    return list.map((item, i) => <li key={i}>{item.name}</li>);
  }

  render() {
    const { whiskyList } = this.props;
    return <div>{this.showWhiskies(whiskyList)}</div>;
  }
}

export default List;
