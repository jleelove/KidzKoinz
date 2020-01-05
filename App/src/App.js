import React from "react";
import { createGlobalStyle } from "styled-components/macro";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import miniReset from "./miniReset";
import Header from "./components/Header";
import FittedBackgroundComponent from "./components/FittedBackgroundComponent";

import backgroundImage from "./img/profiles_background.jpg";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/index";
import Login from "./pages/Login";
import Profiles from "./pages/Profiles";

const GlobalStyle = createGlobalStyle`
  ${miniReset}
`;

const client = new ApolloClient({
  uri: "http://jnich.tk/wordpress/graphql"
});

//
// Set up global state with useContext
// Impliment a router

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <FittedBackgroundComponent image={backgroundImage} />
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
