import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// dependency injection management
const Home = lazy(() => import("./pages/home"));
const Signup = lazy(() => import("./pages/signup"));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
