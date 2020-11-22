import React from "react";
import ReactDOM from "react-dom";
import { reducer } from "../src/reducers";
import { createStore } from "redux";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { formatDate } from "../src/common";

const persistedNotes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

const store = createStore(reducer, {
  note: { notes: persistedNotes, date: formatDate(new Date()) },
  date: new Date(),
});

store.subscribe(() => {
  localStorage.setItem("notes", JSON.stringify(store.getState().note.notes));
});

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
