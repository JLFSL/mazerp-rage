import { render } from 'inferno';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

/* Custom Route Imports */
import RootRoute from './scripts/Root/RootRoute';
import LoginRoute from './scripts/Login/LoginRoute';
import ActionRoute from './scripts/Action/ActionRoute';
import CreationRoute from './scripts/Custom/CreationRoute';
import StatusRoute from './scripts/Status/StatusRoute';

/* Style Imports */
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './css/main.css';

if (module.hot) {
  require('inferno-devtools');
}

const browserHistory = createBrowserHistory();

window.app.history = browserHistory;

const routes = (
	<Router history={ browserHistory }>
		<Route component={ RootRoute }>
      <Route path="/login" component={ LoginRoute } />
      <Route path="/actions" component={ ActionRoute } />
      <Route path="/custom">
        <Route path="/create" component={ CreationRoute } />
      </Route>
      <Route path="/status" component={ StatusRoute } />
		</Route>
	</Router>
);

render(routes, document.getElementById('app'));

if (module.hot) {
  module.hot.accept()
}