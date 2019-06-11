import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
<<<<<<< HEAD
import Longin from './views/Login/index';
import homeIndex from './views/Exam/index';
=======
import IndexPage from './views/IndexPage';
import HomeIndex from './views/home/Hom-index';
>>>>>>> dingmeng

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
<<<<<<< HEAD
        <Route path="/longin" component={Longin} />
        <Route path="/homeIndex" component={homeIndex} />
        <Redirect from="/" to="/longin"></Redirect>
=======
        <Route path="/login" component={IndexPage} />
        <Route path="/homeIndex" component={HomeIndex} />
        <Redirect form="/" to="/login"></Redirect>
>>>>>>> dingmeng
      </Switch>
    </Router>
  );
}

export default RouterConfig;
