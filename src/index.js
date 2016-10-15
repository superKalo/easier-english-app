import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import React Router dependencies
 */
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/**
 * Makes the link between components below Base.
 * Allows us to access Dispatch and State
 * from the differnet app components.
 */
// TODO: import { connect } from 'react-redux';
// TODO: import { mapStateToProps } from './utils/react-redux';

/**
 * Auth High Order Component
 *
 * It's used to require authentication for the protected resources
 * You can read more about it here:
 * @link https://github.com/joshgeller/react-redux-jwt-auth-example
 * @link https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750
 */
// import {requireAuthentication} from './components/Auth/AuthenticatedComponent';

import LoginPage from './containers/LoginPage';

const router = (
    <Provider store={store}>
        <Router history={history}>

            <Route path='/'>
                <IndexRoute component={LoginPage} />
            </Route>

        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
