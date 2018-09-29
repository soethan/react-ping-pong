import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';

import App from './components/App';
import store from './store';

/**
 * Event flow
 * App btn click ==> Action creator ==> Epic ==> Reducer ==> Redux store ==> App component
 */
class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
