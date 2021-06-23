import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import Product from "./components/product/Product";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ModelS" exact>
          <Product id="ModelS" />
        </Route>
        <Route path="/Model3" exact>
          <Product id="Model3" />
        </Route>
        <Route path="/ModelX" exact>
          <Product id="ModelX" />
        </Route>
        <Route path="/ModelY" exact>
          <Product id="ModelY" />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
