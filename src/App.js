import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Switch>      
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
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
