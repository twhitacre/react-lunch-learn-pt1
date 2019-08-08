import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  submitForm(e) {
    e.preventDefault();
    const { updateList } = this.props;
    const { name } = this.state;
    updateList(name);
    this.setState({ name: '' });
  }

  updateName(e) {
    const whisky = e.target.value;
    this.setState({ name: whisky });
  }

  render() {
    const { name } = this.state;
    return (
      <form
        onSubmit={e => this.submitForm(e)}
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
    );
  }
}

export default Form;
