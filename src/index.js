import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import App from "./components/app";

import { BrowserRouter } from "react-router-dom";
import { actionLogger } from "../src/middlewares/action-logger"
const invariant = require('redux-immutable-state-invariant').default()
const createStoreWithMiddleware = applyMiddleware(thunk, actionLogger, invariant)(createStore);


ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),

    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);