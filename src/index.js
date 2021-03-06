import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from 'reducers'
import App from './containers/App';
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router></Provider>,
  document.getElementById("app"));