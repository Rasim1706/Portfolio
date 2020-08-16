import React from "react";
import { Route } from "react-router-dom";

import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./Components";
import Resume from "./Components/Resume";
import Portfolio from './Components/Portfolio'



function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" component={Home} exact />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </>
  );
}

export default App;
