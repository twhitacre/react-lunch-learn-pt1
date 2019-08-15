import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">My Whisky List</h1>
          <Form />
          <article className="message">
            <div className="message-header">
              <p>Wish List</p>
            </div>
            <div className="message-body">
              <List />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default App;
