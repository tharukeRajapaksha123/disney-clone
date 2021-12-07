import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Details from './components/Details';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
