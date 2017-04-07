// React
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import injectTapEventPlugin from 'react-tap-event-plugin'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// React Router
import {BrowserRouter as Router} from 'react-router-dom'

// Local
import App from './app.jsx'

// import rootReducer from './reducers/index.js'

// React-Router-Redux
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

// import { createHistory } from 'history'
import createHistory from 'history/createBrowserHistory'

import 'moment/locale/es';

import { store } from './store'

// let store = createStore(rootReducer, applyMiddleware(thunk))

const history = createHistory()

injectTapEventPlugin();

render( 
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
      {/*<Router history={history}>*/}
        {/*<App/>*/}
        <Route path="/" component={App}/>
      {/*</Router>*/}
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.querySelector("#app"))

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default
    render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
          {/*<Router history={history}>*/}
            <Route path="/" component={App}/>
          {/*</Router>*/}
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.querySelector("#app")
    )
  })
}
