import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./components/App";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { render } from "react-dom";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);
