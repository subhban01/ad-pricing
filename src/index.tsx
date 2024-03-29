import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import Pricing from "./pages/Pricing";
import CheckoutPage from "./pages/CheckoutPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
