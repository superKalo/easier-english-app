import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers';

// Create an object for the default data
const defaultState = {};

/**
 * Logs the previous and next state in the console,
 * useful during development, see:
 * @link: https://github.com/evgenyrodionov/redux-logger
 */
const loggerMiddleware = createLogger({
    duration: true, // Print the duration of each action
    collapsed: true
});
/**
 * In order to have navigation events via Redux actions, see:
 * @link: https://github.com/reactjs/react-router-redux#what-if-i-want-to-issue-navigation-events-via-redux-actions
 */
const reactRouterMiddleware = routerMiddleware(browserHistory);

const store = createStore(rootReducer, defaultState,
    compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            reactRouterMiddleware
        ),
        /**
         * Init Redux devtools:
         * @link: https://github.com/zalmoxisus/redux-devtools-extension#2-use-with-redux
         */
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export const history = syncHistoryWithStore(browserHistory, store);

/**
 * Enable Hot Reloading for the reducers
 * We re-require() the reducers whenever any new code has been written.
 * Webpack will handle the rest
 *
 * TODO: Figure-out how to enable the hot reloading
 */
// if (module.hot) {
//     module.hot.accept('./containers/', () => {
//         const nextRootReducer = require('./reducers').default;

//         store.replaceReducer(nextRootReducer);
//     });
// }

export default store;
