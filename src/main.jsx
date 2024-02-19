import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import { createStore } from "redux";

import allReducers from "./Redux/Reducers/combineReducer";
import { Provider } from "react-redux";

// The Created Store
const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

