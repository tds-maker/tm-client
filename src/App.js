import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/views/Dashboard';
import Login from './authentication/views/Login'


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Dashboard} />
            <Route exact={true} path="/sign-in" component={Login} /> 
          </Switch>
			  </Router>
    );
  }
}

export default App;
