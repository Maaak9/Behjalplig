import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import styled from 'styled-components';

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

const CssVariableWrapper = styled.div`
  --primary-color: #2c7873;
  --secondary-color: #0E83A0;
  --primary-button-color: #F9B34C;
  --background-color: #F2FAFC;
  --border-color: #587489;
`;

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
        <CssVariableWrapper>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </CssVariableWrapper>
      </Router>
    </Provider>
  );
}

export default AppRouter;