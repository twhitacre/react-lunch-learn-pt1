import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = { list: [] };
    this.updateList = this.updateList.bind(this);
  }

  updateList(whiskyName) {
    const { list } = this.state;
    list.push({ name: whiskyName });
    this.setState({ list });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">My Whisky List</h1>
          <Form updateList={this.updateList} />
          <div className="columns">
            <div className="column">
              <article className="message">
                <div className="message-header">
                  <p>Wish List</p>
                </div>
                <div className="message-body">
                  <List whiskyList={list} />
                </div>
              </article>
            </div>
            <div className="column">
              <article className="message">
                <div className="message-header">
                  <p>Tasted List</p>
                </div>
                <div className="message-body">
                  <p>
                    <i>WISH LIST HERE...</i>
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
