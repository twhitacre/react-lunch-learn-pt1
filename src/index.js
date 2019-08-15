import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './bulma.css';
import './index.css';
import App from './components/App';
import appReducer from './lib/app/reducer';

function Index() {
  const store = createStore(combineReducers({ app: appReducer }));

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
