import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/home/Home";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="dsp-flex">
          <Switch>
            <Route exact path="/" component={HomeComponent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
