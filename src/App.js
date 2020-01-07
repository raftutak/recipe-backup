import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Recipe from './screens/Recipe';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
)

export default App;