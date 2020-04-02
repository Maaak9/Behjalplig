import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import Home from './Routes/Home';
import About from './Routes/About';

import AuthReducer from './Redux/Reducers/AuthReducer';

const store = createStore(combineReducers({
  auth: AuthReducer,
}),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  //applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    </Provider>
  );
}

export default AppRouter;