import React from 'react';
import ReactDOM from 'react-dom';
import './bulma.css';
import './index.css';
import { AppProvider, AppConsumer } from './contexts/AppContext';
import App from './components/App';

function Index() {
  return <AppConsumer>{() => <App />}</AppConsumer>;
}

ReactDOM.render(
  <AppProvider>
    <Index />
  </AppProvider>,
  document.getElementById('root')
);
