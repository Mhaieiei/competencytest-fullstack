import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BeerInfo from "./components/BeerInfo";

// Add bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div>
          <section className="container">
            <BeerInfo />
          </section>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
