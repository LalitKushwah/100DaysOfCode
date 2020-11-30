import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import Reducers from './reducers';
import { Provider } from 'react-redux';

// STORE
const store = createStore(Reducers);
store.subscribe(() => console.log(store.getState()));

// DISPATCHER
store.dispatch({type: 'INCREMENT'});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
