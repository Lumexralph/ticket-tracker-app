import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import { Signup } from './pages/signup';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/auth/signup' component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
