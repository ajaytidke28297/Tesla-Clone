import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* <Header /> */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/ModelX">Model X</Route>
        <Route path="/Model3">Model 3</Route>
      </Switch>
    </Layout>
  );
}

export default App;
