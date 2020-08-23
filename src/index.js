import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import customerReducer from "./customerInventory/container/reducer/custInventoryReducer";
import CustInventoryContainer from "./customerInventory/container/CustInventoryContainer";

const store = createStore(
  customerReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <CustInventoryContainer />
  </Provider>,
  document.getElementById("root")
);
