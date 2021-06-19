import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home';
import { createGlobalStyle } from "styled-components";
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Switch>      
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
      </Switch>
  </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
  }
`;
export default App;