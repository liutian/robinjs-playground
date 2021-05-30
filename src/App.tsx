import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageManager } from '@robinjs/bootstrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/robin">
          <PageManager />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
