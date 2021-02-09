import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import reducer, { activePlayerReducer } from "./redux/reducers/reducers";
import reducer from './redux/reducers/reducers';

if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  console.warn = () => {};
}

// Reducer to hold current and high score

const allReducers = combineReducers({
  // highest_user_score: scoresReducer,
  // active_user_score: activePlayerReducer,
});

// allReducers defined above.

const store = createStore(
reducer

  // allReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
// Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.
// Normally, you can’t use a connected component unless it is nested inside of a <Provider>.

// Thus store defined above.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
