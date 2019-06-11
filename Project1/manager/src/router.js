import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import IndexPage from './views/IndexPage';
import HomeIndex from './views/home/Hom-index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={IndexPage} />
        <Route path="/homeIndex" component={HomeIndex} />
        <Redirect form="/" to="/login"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
