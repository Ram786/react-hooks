import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home/home";

function App() {
  return (
    <Router>
      <div>
        <div className="dsp-flex">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
