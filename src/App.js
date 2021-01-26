import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IniciarSesion from "./pages/IniciarSesion";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="">
            <IniciarSesion />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
