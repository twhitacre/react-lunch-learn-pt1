import React, { Component } from 'react';
import { AppConsumer } from '../contexts/AppContext';

class Form extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  submitForm(e, addToList) {
    e.preventDefault();
    const { name } = this.state;
    addToList(name);
    this.setState({ name: '' });
  }

  updateName(e) {
    const whisky = e.target.value;
    this.setState({ name: whisky });
  }

  render() {
    const { name } = this.state;
    return (
      <AppConsumer>
        {({ addToList }) => (
          <form
            onSubmit={e => this.submitForm(e, addToList)}
            className="form"
            style={{ marginBottom: 50 }}
          >
            <div className="field">
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={e => this.updateName(e)}
                placeholder="Enter Whisky Name"
              />
            </div>
          </form>
        )}
      </AppConsumer>
    );
  }
}

export default Form;
