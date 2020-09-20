import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./containers/sidebar.js";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App(props) {
  return (
    <Router history={history}>
      <Sidebar history={history} />
    </Router>
  );
}

export default App;
