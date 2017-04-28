import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import throttle from 'lodash/throttle'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'
// import { loginWithToken } from './actions'
// import { saveState, loadState } from './helpers'
import { initialStateOnlyForTest } from "./initialStateForTest.js"

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const emptyInitialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware()

// export const store = createStore(rootReducer, initialStateOnlyForTest,
export const store = createStore(rootReducer, emptyInitialState,
    composeEnhancers(
        applyMiddleware(thunk, logger, middleware)
    )
)

// store.subscribe(throttle(() => saveState(store.getState()), 1000))
// store.dispatch(loginWithToken())
