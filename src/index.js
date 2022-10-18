import React from "react";
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";

// import { Provider } from "react-redux";

// import { createStore } from "redux";
// import { searchRobots } from "./reducer";

// const store = createStore(searchRobots);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
