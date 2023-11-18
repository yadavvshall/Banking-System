// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Customers from './components/Customers';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/customers" component={Customers} />
          {/* Add more routes for other sections */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
