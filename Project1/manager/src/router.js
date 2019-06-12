import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './views/IndexPage';
import LoginPage from './views/Login/Login.js';
import MapStateToProps from "./views/Main/index"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={MapStateToProps} />
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
