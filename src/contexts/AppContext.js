import React from 'react';

const { Provider, Consumer } = React.createContext();

class AppProvider extends React.Component {
  state = {
    list: [],
  };

  addToList = item => {
    const { list } = this.state;
    const newList = list.concat({ name: item });
    this.setState({ list: newList });
  };

  render() {
    const { list } = this.state;
    const { children } = this.props;
    console.log('LIST', list);
    return (
      <Provider
        value={{
          list,
          addToList: this.addToList,
        }}
      >
        {children}
      </Provider>
    );
  }
}

export { AppProvider, Consumer as AppConsumer };
