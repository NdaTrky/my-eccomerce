import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Switch>
        <Provider store={store}>
          <Route path="/" component={App} />
        </Provider>
      </Switch>
    </Router>
  </StrictMode>
);