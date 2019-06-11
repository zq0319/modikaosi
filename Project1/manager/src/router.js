import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import Longin from './views/Login/index';
import homeIndex from './views/Exam/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/longin" component={Longin} />
        <Route path="/homeIndex" component={homeIndex} />
        <Redirect from="/" to="/longin"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
