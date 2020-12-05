import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchKeywordReducer from './reducers/SearchKeywordReducer';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(SearchKeywordReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
